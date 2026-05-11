import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(new URL('../..', import.meta.url).pathname);
const importPath = path.join(projectRoot, 'automation', 'import', 'output', 'latest-import.json');
const previewPath = path.join(projectRoot, 'automation', 'expand', 'output', 'imported-expansion-preview.json');
const errorsDir = path.join(projectRoot, 'src', 'content', 'errors');
const seedsPath = path.join(projectRoot, 'data', 'error-seeds.json');
const today = new Date().toISOString().slice(0, 10);

const approvedCategories = new Set([
  'AI Coding Tools',
  'Anthropic API',
  'Cloudflare',
  'Cloud Platforms',
  'Cursor',
  'Deployment',
  'DNS',
  'Docker',
  'Git',
  'GitHub Actions',
  'GitHub Copilot',
  'LiteLLM',
  'Node.js',
  'npm',
  'Ollama',
  'OpenAI API',
  'Python',
  'SSL/TLS',
]);

const categoryAliases = new Map([
  ['ai coding tools', 'AI Coding Tools'],
  ['anthropic api', 'Anthropic API'],
  ['claude code', 'AI Coding Tools'],
  ['cloud platforms', 'Cloud Platforms'],
  ['cursor', 'Cursor'],
  ['deployment', 'Deployment'],
  ['github copilot', 'GitHub Copilot'],
  ['litellm', 'LiteLLM'],
  ['ollama', 'Ollama'],
  ['opencode', 'AI Coding Tools'],
  ['openclaw', 'AI Coding Tools'],
  ['vercel', 'Deployment'],
  ['api', 'OpenAI API'],
  ['apis', 'OpenAI API'],
  ['ci/cd', 'GitHub Actions'],
  ['docker compose', 'Docker'],
  ['networking', 'DNS'],
  ['ssl', 'SSL/TLS'],
  ['tls', 'SSL/TLS'],
]);

const args = parseArgs(process.argv.slice(2));
const limit = Number(args.limit ?? 5);
const minPriority = Number(args.minPriority ?? 7);
const minCommercial = Number(args.minCommercial ?? 6);
const dryRun = Boolean(args.dryRun) || !args.write;
const writeMode = Boolean(args.write);
const force = Boolean(args.force);

main().catch((error) => {
  console.error(`[expand:imported] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const imported = await readJson(importPath);
  const existing = await loadExistingCoverage();
  const accepted = [...(imported.accepted_candidates ?? [])].sort(candidateSort);
  const selected = [];
  const skipped = [];

  for (const candidate of accepted) {
    const normalized = normalizeCandidate(candidate);
    const reasons = rejectionReasons(normalized, existing);
    const warnings = warningReasons(normalized);

    if (reasons.length > 0) {
      skipped.push(toPreviewCandidate(normalized, { reasons, warnings }));
      continue;
    }

    if (selected.length < limit) {
      selected.push(toPreviewCandidate(normalized, { warnings }));
    } else {
      skipped.push(toPreviewCandidate(normalized, { reasons: [`over limit ${limit}`], warnings }));
    }
  }

  const report = {
    generated_at: new Date().toISOString(),
    mode: dryRun ? 'dry-run' : 'write',
    source: 'latest-import',
    input: 'automation/import/output/latest-import.json',
    criteria: {
      limit,
      min_priority: minPriority,
      min_commercial: minCommercial,
      force,
    },
    summary: {
      accepted_candidates_in_import: accepted.length,
      selected: selected.length,
      skipped: skipped.length,
      write_mode_recommended: selected.length > 0 && selected.every((candidate) => candidate.warnings.length === 0),
    },
    selected_candidates: selected,
    skipped_candidates: skipped,
  };

  await mkdir(path.dirname(previewPath), { recursive: true });
  await writeFile(previewPath, `${JSON.stringify(report, null, 2)}\n`);

  if (writeMode) {
    await writeMarkdownPages(selected, existing);
  }

  console.log(`[expand:imported] mode: ${report.mode}`);
  console.log(`[expand:imported] selected ${selected.length} candidate(s)`);
  console.log(`[expand:imported] skipped ${skipped.length} candidate(s)`);
  console.log(`[expand:imported] wrote ${relativePath(previewPath)}`);
}

function candidateSort(a, b) {
  if ((b.priority_score ?? 0) !== (a.priority_score ?? 0)) return (b.priority_score ?? 0) - (a.priority_score ?? 0);
  if ((b.commercial_value_score ?? 0) !== (a.commercial_value_score ?? 0)) {
    return (b.commercial_value_score ?? 0) - (a.commercial_value_score ?? 0);
  }
  return (a.ranking_difficulty_score ?? 10) - (b.ranking_difficulty_score ?? 10);
}

function normalizeCandidate(candidate) {
  const technology = cleanText(candidate.technology);
  const category = normalizeCategory(candidate.category || technology, technology);
  const title = cleanText(candidate.title);
  const errorSignature = cleanText(candidate.error_signature);
  const slug = normalizeSlug(candidate.slug || `${technology}-${errorSignature || title}`);

  return {
    raw: candidate,
    slug,
    title,
    description: cleanText(candidate.description) || `${title} troubleshooting notes for Dev Error DB review.`,
    category,
    technology,
    error_signature: errorSignature,
    search_intent: cleanText(candidate.search_intent),
    evidence_summary: cleanText(candidate.evidence_summary),
    source_urls: uniqueStrings(candidate.source_urls),
    common_causes: uniqueStrings(candidate.observed_causes).slice(0, 5),
    quick_fix: inferQuickFix(candidate),
    related_errors: uniqueStrings(candidate.related_terms).slice(0, 5),
    priority_score: Number(candidate.priority_score ?? candidate.score / 10 ?? 0),
    commercial_value_score: Number(candidate.commercial_value_score ?? 0),
    ranking_difficulty_score: Number(candidate.ranking_difficulty_score ?? 0),
  };
}

function rejectionReasons(candidate, existing) {
  const reasons = [];
  if (!candidate.error_signature) reasons.push('missing error_signature');
  if (!candidate.title) reasons.push('missing title');
  if (!candidate.search_intent) reasons.push('missing search_intent');
  if (!candidate.evidence_summary) reasons.push('missing evidence_summary');
  if (candidate.source_urls.length === 0) reasons.push('missing source_urls');
  if (!approvedCategories.has(candidate.category)) reasons.push(`category cannot be normalized: ${candidate.category || 'missing'}`);
  if (candidate.priority_score < minPriority) reasons.push(`priority_score below ${minPriority}`);
  if (candidate.commercial_value_score < minCommercial) reasons.push(`commercial_value_score below ${minCommercial}`);
  if (existing.slugs.has(candidate.slug)) reasons.push('duplicate slug exists');
  if (existing.titles.has(normalizeLookup(candidate.title))) reasons.push('duplicate title exists');
  if (existing.signatures.has(`${normalizeLookup(candidate.technology)}::${normalizeLookup(candidate.error_signature)}`)) {
    reasons.push('duplicate technology and error_signature exists');
  }
  return reasons;
}

function warningReasons(candidate) {
  const warnings = [];
  if (candidate.ranking_difficulty_score > 8) warnings.push('ranking_difficulty_score above 8');
  if (candidate.evidence_summary.length < 80) warnings.push('evidence_summary is short');
  if (candidate.source_urls.length < 1) warnings.push('source_urls count below 1');
  if (!['Cloudflare', 'Deployment', 'Docker', 'GitHub Actions', 'Node.js', 'npm', 'OpenAI API', 'Python', 'SSL/TLS', 'DNS', 'Cursor'].includes(candidate.category)) {
    warnings.push(`newer category requires review: ${candidate.category}`);
  }
  return warnings;
}

function toPreviewCandidate(candidate, { reasons = [], warnings = [] } = {}) {
  return {
    slug: candidate.slug,
    title: candidate.title,
    normalized_category: candidate.category,
    technology: candidate.technology,
    error_signature: candidate.error_signature,
    priority_score: candidate.priority_score,
    commercial_value_score: candidate.commercial_value_score,
    ranking_difficulty_score: candidate.ranking_difficulty_score,
    source_urls: candidate.source_urls,
    evidence_summary: candidate.evidence_summary,
    reasons,
    warnings,
  };
}

async function writeMarkdownPages(selected, existing) {
  await mkdir(errorsDir, { recursive: true });
  const seeds = existsSync(seedsPath) ? await readJson(seedsPath) : [];

  for (const preview of selected) {
    const candidate = normalizeCandidate((await readJson(importPath)).accepted_candidates.find((item) => item.slug === preview.slug));
    const filePath = path.join(errorsDir, `${candidate.slug}.md`);
    if (existsSync(filePath) && !force) continue;
    await writeFile(filePath, renderMarkdown(candidate));

    if (!seeds.some((seed) => seed.slug === candidate.slug)) {
      seeds.push({
        slug: candidate.slug,
        title: candidate.title,
        description: candidate.description,
        category: candidate.category,
        technology: candidate.technology,
        error_signature: candidate.error_signature,
        search_intent: candidate.search_intent,
        common_causes: candidate.common_causes.length ? candidate.common_causes : [candidate.evidence_summary],
        quick_fix: candidate.quick_fix,
        related_errors: candidate.related_errors.length ? candidate.related_errors : [candidate.category],
      });
    }
  }

  await writeFile(seedsPath, `${JSON.stringify(seeds, null, 2)}\n`);
}

function renderMarkdown(candidate) {
  const causes = candidate.common_causes.length ? candidate.common_causes : [candidate.evidence_summary];
  const related = candidate.related_errors.length ? candidate.related_errors : [candidate.category];
  return `---
title: ${JSON.stringify(candidate.title)}
description: ${JSON.stringify(candidate.description)}
category: ${JSON.stringify(candidate.category)}
technology: ${JSON.stringify(candidate.technology)}
error_signature: ${JSON.stringify(candidate.error_signature)}
common_causes:
${causes.map((cause) => `  - ${JSON.stringify(cause)}`).join('\n')}
quick_fix: ${JSON.stringify(candidate.quick_fix)}
related_errors:
${related.map((item) => `  - ${JSON.stringify(item)}`).join('\n')}
updated: ${JSON.stringify(today)}
---

## What this error means

\`${candidate.error_signature}\` is a ${candidate.technology} failure pattern reported for developers trying to ${candidate.search_intent.toLowerCase()}. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

${candidate.evidence_summary}

## Common causes

${causes.map((cause) => `- ${cause}`).join('\n')}

## Quick fixes

1. Confirm the exact error signature matches \`${candidate.error_signature}\`.
2. Check the ${candidate.technology} account, local tool state, and provider configuration involved in the failing workflow.
3. ${candidate.quick_fix}

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

${candidate.source_urls.map((url) => `- ${url}`).join('\n')}

Evidence note: ${candidate.evidence_summary}

## Related errors

${related.map((item) => `- ${item}`).join('\n')}

## FAQ

### What should I check first?

Start with the exact \`${candidate.error_signature}\` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed ${candidate.technology} workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without \`${candidate.error_signature}\`.
`;
}

async function loadExistingCoverage() {
  const slugs = new Set();
  const titles = new Set();
  const signatures = new Set();
  for (const file of await safeReaddir(errorsDir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    slugs.add(file.replace(/\.mdx?$/, ''));
    const raw = await readFile(path.join(errorsDir, file), 'utf8');
    const frontmatter = parseFrontmatter(raw);
    titles.add(normalizeLookup(frontmatter.title));
    signatures.add(`${normalizeLookup(frontmatter.technology)}::${normalizeLookup(frontmatter.error_signature)}`);
  }
  return { slugs, titles, signatures };
}

function inferQuickFix(candidate) {
  const text = `${candidate.title} ${candidate.error_signature} ${candidate.search_intent}`.toLowerCase();
  if (text.includes('rate') || text.includes('quota') || text.includes('529')) return 'Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.';
  if (text.includes('401') || text.includes('auth') || text.includes('login')) return 'Verify the account session, API key, provider settings, and environment where the failing tool is running.';
  if (text.includes('manifest') || text.includes('pull')) return 'Verify the model name, local service connectivity, and network access before retrying the model pull.';
  if (text.includes('connection refused')) return 'Confirm the local service is running on the expected host and port, then retry the smallest request.';
  if (text.includes('deployment') || text.includes('vercel')) return 'Check the build output, project root, and deployment platform configuration before redeploying.';
  return 'Compare the failing environment with a known working setup, then change one configuration value at a time.';
}

function normalizeCategory(category, technology = '') {
  const cleanedTechnology = cleanText(technology);
  const technologyTarget = categoryAliases.get(cleanedTechnology.toLowerCase()) ?? cleanedTechnology;
  if (approvedCategories.has(technologyTarget)) return technologyTarget;

  const cleaned = cleanText(category);
  if (approvedCategories.has(cleaned)) return cleaned;
  return categoryAliases.get(cleaned.toLowerCase()) ?? cleaned;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  if (!match) return data;
  for (const line of match[1].split('\n')) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    data[field[1]] = field[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return data;
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
    if (inlineValue !== undefined) parsed[key] = inlineValue;
    else if (values[index + 1] && !values[index + 1].startsWith('--')) parsed[key] = values[++index];
    else parsed[key] = true;
  }
  return parsed;
}

function uniqueStrings(values) {
  if (!values) return [];
  const list = Array.isArray(values) ? values : [values];
  return [...new Set(list.map(cleanText).filter(Boolean))];
}

function normalizeSlug(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

function normalizeLookup(value) {
  return normalizeSlug(value);
}

function cleanText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function relativePath(filePath) {
  return path.relative(projectRoot, filePath) || '.';
}

