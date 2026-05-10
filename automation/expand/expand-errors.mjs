import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const projectRoot = path.resolve(new URL('../..', import.meta.url).pathname);
const discoveryOutputPath = path.join(projectRoot, 'automation', 'discovery', 'output', 'discovery-candidates.json');
const seedsPath = path.join(projectRoot, 'data', 'error-seeds.json');
const errorsDir = path.join(projectRoot, 'src', 'content', 'errors');
const expandOutputDir = path.join(projectRoot, 'automation', 'expand', 'output');
const expandReportPath = path.join(expandOutputDir, 'expand-report.json');

const approvedCategories = new Set([
  'Cloudflare',
  'DNS',
  'Docker',
  'Git',
  'GitHub Actions',
  'Node.js',
  'npm',
  'OpenAI API',
  'Python',
  'SSL/TLS',
]);

const genericTitlePatterns = [
  /^error$/i,
  /^fix error$/i,
  /^.+ not working$/i,
  /^.+ issue$/i,
  /^.+ problem$/i,
  /^how to fix$/i,
];

const genericDescriptionPatterns = [
  /fix this error/i,
  /solve the problem/i,
  /not working/i,
  /common issue/i,
  /troubleshoot errors?$/i,
];

const unsafeFlagPattern = /^(unsafe|spam|doorway):/i;
const args = parseArgs(process.argv.slice(2));
const limit = Number(args.limit ?? 5);
const minScore = Number(args.minScore ?? 90);
const dryRun = Boolean(args.dryRun);
const shouldCommit = Boolean(args.commit);
const shouldPush = Boolean(args.push);

main().catch((error) => {
  console.error(`[expand] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  if (shouldPush && !shouldCommit) {
    throw new Error('--push requires --commit so the script has a branch and commit to push.');
  }

  await ensureDiscoveryOutput();

  const discovery = await readJson(discoveryOutputPath);
  const existingCoverage = await loadExistingCoverage();
  const selection = selectCandidates(discovery.candidates ?? [], existingCoverage);
  const selectedCandidates = selection.selected.slice(0, limit);
  const limitRejected = selection.selected.slice(limit).map((candidate) => ({
    slug: candidate.slug,
    title: candidate.title,
    reasons: [`over limit ${limit}`],
  }));
  const rejectedCandidates = [...selection.rejected, ...limitRejected];
  const seedsToAppend = selectedCandidates.map((candidate) => candidateToSeed(candidate, existingCoverage));

  const report = {
    generated_at: new Date().toISOString(),
    project: 'Dev Error DB',
    mode: dryRun ? 'dry-run' : 'write',
    criteria: {
      limit,
      min_score: minScore,
      required_status: 'accepted-for-review',
      duplicate_match_required: null,
      unsafe_review_flags_allowed: false,
    },
    selected_count: selectedCandidates.length,
    selected_candidates: selectedCandidates.map((candidate) => ({
      slug: candidate.slug,
      title: candidate.title,
      score: candidate.score,
      category: candidate.category,
      technology: candidate.technology,
      error_signature: candidate.error_signature,
    })),
    rejected_count: rejectedCandidates.length,
    rejected_candidates: rejectedCandidates,
    actions: {
      discovery_loaded_from: relativePath(discoveryOutputPath),
      seeds_file: relativePath(seedsPath),
      markdown_output_dir: relativePath(errorsDir),
      wrote_seeds: false,
      ran_generator: false,
      ran_build: false,
      ran_report: false,
      git_branch: null,
      git_committed: false,
      git_pushed: false,
    },
  };

  if (dryRun) {
    await writeReport(report);
    printSummary(report);
    return;
  }

  if (seedsToAppend.length === 0) {
    await writeReport(report);
    printSummary(report);
    console.log('[expand] No eligible candidates selected; generation and build were skipped.');
    return;
  }

  await appendSeeds(seedsToAppend);
  report.actions.wrote_seeds = true;

  await runCommand('npm', ['run', 'generate:errors']);
  report.actions.ran_generator = true;

  await runCommand('npm', ['run', 'build']);
  report.actions.ran_build = true;

  await runCommand('npm', ['run', 'report']);
  report.actions.ran_report = true;

  if (shouldCommit) {
    const branchName = `auto/error-expansion-${timestampForBranch()}`;
    await runCommand('git', ['switch', '-c', branchName]);
    await runCommand('git', ['add', 'data/error-seeds.json', 'src/content/errors/']);
    await runCommand('git', ['commit', '-m', 'Add automated error page batch']);
    report.actions.git_branch = branchName;
    report.actions.git_committed = true;

    if (shouldPush) {
      await runCommand('git', ['push', '-u', 'origin', branchName]);
      report.actions.git_pushed = true;
    }
  }

  await writeReport(report);
  printSummary(report);
}

async function ensureDiscoveryOutput() {
  if (existsSync(discoveryOutputPath)) {
    return;
  }

  console.log('[expand] Discovery output missing; running discovery pipeline.');
  await runCommand('node', ['automation/discovery/discovery-pipeline.mjs']);
}

function selectCandidates(candidates, existingCoverage) {
  const selected = [];
  const rejected = [];

  for (const candidate of candidates) {
    const reasons = rejectionReasons(candidate, existingCoverage);

    if (reasons.length > 0) {
      rejected.push({
        slug: candidate.slug,
        title: candidate.title,
        score: candidate.score,
        status: candidate.status,
        reasons,
      });
      continue;
    }

    selected.push(candidate);
  }

  return { selected, rejected };
}

function rejectionReasons(candidate, existingCoverage) {
  const reasons = [];
  const normalized = normalizeCandidate(candidate);

  if (candidate.status !== 'accepted-for-review') {
    reasons.push(`status is ${candidate.status ?? 'missing'}`);
  }

  if (Number(candidate.score ?? 0) < minScore) {
    reasons.push(`score below ${minScore}`);
  }

  if (candidate.duplicate_match !== null && candidate.duplicate_match !== undefined) {
    reasons.push('discovery duplicate_match is present');
  }

  if (toStringArray(candidate.review_flags).some((flag) => unsafeFlagPattern.test(flag))) {
    reasons.push('unsafe, spam, or doorway review flag present');
  }

  if (existingCoverage.slugs.has(normalized.slug)) {
    reasons.push('slug already exists');
  }

  if (existingCoverage.titles.has(normalized.titleLookup)) {
    reasons.push('title already exists');
  }

  if (existingCoverage.signaturesByTechnology.has(`${normalized.technologyLookup}::${normalized.signatureLookup}`)) {
    reasons.push('error_signature already exists for same technology');
  }

  if (!approvedCategories.has(normalized.category)) {
    reasons.push(`category is not approved: ${normalized.category || 'missing'}`);
  }

  if (isGenericTitle(normalized.title)) {
    reasons.push('title is too generic');
  }

  if (isGenericDescription(normalized.description)) {
    reasons.push('description is too generic');
  }

  if (!normalized.error_signature || normalized.error_signature.length < 8) {
    reasons.push('error_signature is missing or too short');
  }

  if (!normalized.search_intent || normalized.search_intent.length < 30) {
    reasons.push('search_intent is missing or too short');
  }

  if (normalized.commands.length === 0) {
    reasons.push('commands are empty for technical error');
  }

  if (normalized.commonCauses.length < 2) {
    reasons.push('not enough concrete causes');
  }

  if (normalized.quickFixes.length === 0) {
    reasons.push('no concrete fix path');
  }

  return reasons;
}

function candidateToSeed(candidate, existingCoverage) {
  const normalized = normalizeCandidate(candidate);
  const relatedErrors = relatedErrorsFor(normalized, existingCoverage);

  return {
    slug: normalized.slug,
    title: normalized.title,
    description: normalized.description,
    category: normalized.category,
    technology: normalized.technology,
    error_signature: normalized.error_signature,
    search_intent: normalized.search_intent,
    common_causes: normalized.commonCauses,
    quick_fix: buildQuickFix(normalized),
    related_errors: relatedErrors,
  };
}

function buildQuickFix(candidate) {
  const fix = candidate.quickFixes[0];

  if (fix && !/^run\s+/i.test(fix)) {
    return fix;
  }

  const config = candidate.config_files[0] ? ` and check ${candidate.config_files[0]}` : '';
  return `Start with ${candidate.commands[0]}${config}, then retry the smallest command or request that produced the error.`;
}

function relatedErrorsFor(candidate, existingCoverage) {
  const direct = existingCoverage.pages
    .filter((page) => page.category === candidate.category || page.technology === candidate.technology)
    .map((page) => page.title)
    .filter((title) => title !== candidate.title)
    .slice(0, 4);

  if (direct.length > 0) {
    return direct;
  }

  return candidate.related_terms.slice(0, 4);
}

async function appendSeeds(seedsToAppend) {
  const seeds = await readJson(seedsPath);
  const nextSeeds = [...seeds, ...seedsToAppend].sort((a, b) => a.slug.localeCompare(b.slug));
  await writeFile(seedsPath, `${JSON.stringify(nextSeeds, null, 2)}\n`);
}

async function loadExistingCoverage() {
  const pages = [];
  const slugs = new Set();
  const titles = new Set();
  const signaturesByTechnology = new Set();

  for (const file of await safeReaddir(errorsDir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

    const raw = await readFile(path.join(errorsDir, file), 'utf8');
    const frontmatter = parseFrontmatter(raw);
    const page = {
      slug: normalizeSlug(frontmatter.slug || file.replace(/\.mdx?$/, '')),
      title: frontmatter.title ?? '',
      category: frontmatter.category ?? '',
      technology: frontmatter.technology ?? '',
      error_signature: frontmatter.error_signature ?? '',
    };

    pages.push(page);
    addCoverage(page, { slugs, titles, signaturesByTechnology });
  }

  const seeds = await readJson(seedsPath);
  for (const seed of seeds) {
    addCoverage(seed, { slugs, titles, signaturesByTechnology });
  }

  return { pages, seeds, slugs, titles, signaturesByTechnology };
}

function addCoverage(item, coverage) {
  const slug = normalizeSlug(item.slug);
  const title = normalizeLookup(item.title);
  const technology = normalizeLookup(item.technology);
  const signature = normalizeLookup(item.error_signature);

  if (slug) coverage.slugs.add(slug);
  if (title) coverage.titles.add(title);
  if (technology && signature) coverage.signaturesByTechnology.add(`${technology}::${signature}`);
}

function normalizeCandidate(candidate) {
  return {
    slug: normalizeSlug(candidate.slug),
    title: cleanText(candidate.title),
    titleLookup: normalizeLookup(candidate.title),
    description: cleanText(candidate.description),
    category: cleanText(candidate.category),
    technology: cleanText(candidate.technology),
    technologyLookup: normalizeLookup(candidate.technology),
    error_signature: cleanText(candidate.error_signature),
    signatureLookup: normalizeLookup(candidate.error_signature),
    search_intent: cleanText(candidate.search_intent),
    commands: uniqueStrings(candidate.commands),
    config_files: uniqueStrings(candidate.config_files),
    commonCauses: uniqueStrings(candidate.observed_causes).slice(0, 5),
    quickFixes: uniqueStrings(candidate.observed_fixes).slice(0, 4),
    related_terms: uniqueStrings(candidate.related_terms).slice(0, 5),
  };
}

function isGenericTitle(title) {
  if (!title || title.length < 12) return true;
  if (!/[A-Za-z0-9]/.test(title)) return true;
  return genericTitlePatterns.some((pattern) => pattern.test(title));
}

function isGenericDescription(description) {
  if (!description || description.length < 70) return true;
  if (!/[.?!]$/.test(description)) return true;
  return genericDescriptionPatterns.some((pattern) => pattern.test(description));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  if (!match) return data;

  for (const line of match[1].split('\n')) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;

    const [, key, value] = field;
    data[key] = value.replace(/^['"]|['"]$/g, '').trim();
  }

  return data;
}

async function writeReport(report) {
  await mkdir(expandOutputDir, { recursive: true });
  await writeFile(expandReportPath, `${JSON.stringify(report, null, 2)}\n`);
}

function printSummary(report) {
  console.log(`[expand] mode: ${report.mode}`);
  console.log(`[expand] selected: ${report.selected_count}`);
  console.log(`[expand] rejected: ${report.rejected_count}`);

  if (report.selected_candidates.length > 0) {
    console.log('[expand] selected candidates:');
    for (const candidate of report.selected_candidates) {
      console.log(`  - ${candidate.slug} (${candidate.score})`);
    }
  }

  console.log(`[expand] report: ${relativePath(expandReportPath)}`);
}

async function runCommand(command, commandArgs) {
  console.log(`[expand] ${command} ${commandArgs.join(' ')}`);
  const result = await execFileAsync(command, commandArgs, {
    cwd: projectRoot,
    env: process.env,
    maxBuffer: 1024 * 1024 * 20,
  });

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function safeReaddir(directory) {
  try {
    return await readdir(directory);
  } catch {
    return [];
  }
}

function parseArgs(values) {
  const parsed = {};

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith('--')) continue;

    const [rawKey, inlineValue] = value.slice(2).split('=');
    const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    if (inlineValue !== undefined) {
      parsed[key] = inlineValue;
      continue;
    }

    const next = values[index + 1];
    if (next && !next.startsWith('--')) {
      parsed[key] = next;
      index += 1;
    } else {
      parsed[key] = true;
    }
  }

  return parsed;
}

function timestampForBranch() {
  const date = new Date();
  const parts = [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    '-',
    pad(date.getHours()),
    pad(date.getMinutes()),
  ];
  return parts.join('');
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function normalizeSlug(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\+/g, ' plus ')
    .replace(/#/g, ' sharp ')
    .replace(/ssl\/tls/g, 'ssl-tls')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function normalizeLookup(value) {
  return normalizeSlug(value);
}

function uniqueStrings(values) {
  return [...new Set(toStringArray(values).map(cleanText).filter(Boolean))];
}

function toStringArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(String);
  return [String(value)];
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function relativePath(filePath) {
  return path.relative(projectRoot, filePath) || '.';
}

