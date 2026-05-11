import { mkdir, readFile, readdir, rename, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(new URL('../..', import.meta.url).pathname);
const homeDir = process.env.HOME || process.env.USERPROFILE || '';
const dataHubRoot = path.join(homeDir, 'AtlasForge', 'prod-env', 'atlasforge-data-hub', 'openclaw', 'dev-error-db');
const defaultInputDir = path.join(dataHubRoot, 'inbox');
const outputPathDefault = path.join(projectRoot, 'automation', 'import', 'output', 'imported-candidates.json');
const latestOutputPath = path.join(projectRoot, 'automation', 'import', 'output', 'latest-import.json');
const importHistoryDir = path.join(projectRoot, 'automation', 'import', 'output', 'import-history');
const importReportsDir = path.join(projectRoot, 'automation', 'import', 'output', 'import-reports');
const maxInputBytes = 5 * 1024 * 1024;
const qualityGateVersion = 'openclaw-high-potential-v1-datahub';

const dataHubDirs = ['inbox', 'processed', 'rejected', 'archive', 'logs'];

const categoryConfig = await loadCategoryConfig();
const approvedCategories = categoryConfig.approvedCategories;
const categoryAliases = categoryConfig.aliases;

const args = parseArgs(process.argv.slice(2));
const inputFile = args.input ? path.resolve(args.input) : null;
const inputDir = path.resolve(args.inputDir ?? defaultInputDir);
const outputPath = path.resolve(args.output ?? outputPathDefault);
const reprocessLatestProcessed = Boolean(args.reprocessLatestProcessed);
const noMove = Boolean(args.noMove || args.dryRun || reprocessLatestProcessed);
const dryRun = Boolean(args.dryRun);

async function loadCategoryConfig() {
  const configPath = path.join(projectRoot, 'automation', 'config', 'approved-categories.json');
  try {
    const raw = JSON.parse(await readFile(configPath, 'utf8'));
    const approvedSet = new Set(raw.approved_categories || []);
    const aliasMap = new Map();
    for (const [key, value] of Object.entries(raw.aliases || {})) {
      aliasMap.set(key.toLowerCase(), value);
    }
    return { approvedCategories: approvedSet, aliases: aliasMap, source: configPath };
  } catch (error) {
    console.error(`[import] warning: could not load ${configPath}: ${error.message}`);
    console.error('[import] falling back to empty category config');
    return { approvedCategories: new Set(), aliases: new Map(), source: null };
  }
}

main().catch((error) => {
  console.error(`[import] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  await ensureDataHubDirs();
  await ensureOutputDirs();

  const importedAt = new Date().toISOString();
  const mode = reprocessLatestProcessed ? 'reprocess-latest-processed' : dryRun ? 'dry-run' : noMove ? 'no-move' : 'import';
  const files = await resolveInputFiles();

  if (files.length === 0) {
    const output = emptyOutput(importedAt);
    await writeHistoryOutput(output, 'empty');
    await writeLog(importedAt, '[import] No candidate files found in data hub inbox.');
    await writeRunReport(importedAt, output, { categoryConfig });
    console.log('No candidate files found in data hub inbox.');
    console.log('[import] latest valid import outputs were preserved.');
    return;
  }

  const existing = await loadExistingCoverage();
  const seen = new Map();
  const acceptedCandidates = [];
  const rejectedCandidates = [];
  const fileResults = [];
  const schemaWarnings = [];

  for (const filePath of files) {
    const fileResult = await processInputFile(filePath, {
      importedAt,
      existing,
      seen,
      acceptedCandidates,
      rejectedCandidates,
      schemaWarnings,
    });
    fileResults.push(fileResult);
  }

  const output = {
    generated_at: importedAt,
    source: 'openclaw-data-hub',
    data_hub_root: dataHubRoot,
    input_files: files.map(displayPath),
    processed_files: fileResults.filter((file) => file.status === 'processed').map((file) => file.file),
    moved_files: fileResults.map((file) => file.moved_to).filter(Boolean),
    mode,
    empty_input: false,
    dry_run: dryRun,
    summary: {
      files_found: files.length,
      files_processed: fileResults.filter((file) => file.status === 'processed').length,
      files_rejected: fileResults.filter((file) => file.status === 'rejected').length,
      total: acceptedCandidates.length + rejectedCandidates.length,
      accepted: acceptedCandidates.length,
      rejected: rejectedCandidates.length,
      duplicate_risk: [...acceptedCandidates, ...rejectedCandidates].filter(
        (candidate) => candidate.duplicate_risk || candidate.duplicate_match,
      ).length,
    },
    files: fileResults,
    accepted_candidates: acceptedCandidates,
    rejected_candidates: rejectedCandidates,
  };

  await writeSuccessfulOutputs(output);
  await writeRunReport(importedAt, output, { categoryConfig, schemaWarnings });
  await writeLog(importedAt, `[import] processed ${files.length} file(s), accepted ${acceptedCandidates.length}, rejected ${rejectedCandidates.length}`);

  console.log(`[import] loaded ${files.length} candidate file(s)`);
  console.log(`[import] accepted ${acceptedCandidates.length} candidate(s)`);
  console.log(`[import] rejected ${rejectedCandidates.length} candidate(s)`);
  if (reprocessLatestProcessed) {
    console.log(`[import] reprocessed ${displayPath(files[0])}`);
  }
  console.log(`[import] wrote ${displayPath(latestOutputPath)}`);
  console.log(`[import] wrote ${displayPath(outputPath)}`);
  console.log(`[import] wrote run report to ${importReportsDir}`);
}

async function resolveInputFiles() {
  if (reprocessLatestProcessed) {
    const latestProcessed = await findLatestProcessedFile();
    if (!latestProcessed) return [];
    return [latestProcessed];
  }

  if (inputFile) return [inputFile];
  return listJsonFiles(inputDir);
}

async function processInputFile(filePath, context) {
  const sourceFile = path.resolve(filePath);
  const baseName = path.basename(sourceFile);

  try {
    const fileStat = await stat(sourceFile);
    if (!fileStat.isFile()) throw new Error('input is not a regular file');
    if (fileStat.size > maxInputBytes) throw new Error(`input file exceeds 5MB limit (${fileStat.size} bytes)`);

    const rawCandidates = await readCandidateInput(sourceFile);
    const acceptedBefore = context.acceptedCandidates.length;
    const rejectedBefore = context.rejectedCandidates.length;

    for (const [index, rawCandidate] of rawCandidates.entries()) {
      const warnings = detectSchemaWarnings(rawCandidate, index, baseName);
      context.schemaWarnings.push(...warnings);

      const candidate = normalizeOpenClawCandidate(rawCandidate);
      const duplicateMatch = findDuplicate(candidate, context.existing, context.seen);
      const rejectionReasons = validateCandidate(candidate, duplicateMatch);
      const importStatus = rejectionReasons.length === 0 ? 'accepted' : 'rejected';
      const imported = buildImportedCandidate({
        candidate,
        duplicateMatch,
        importedAt: context.importedAt,
        importStatus,
        rejectionReasons,
        sourceIndex: index,
        sourceFile,
      });

      context.seen.set(candidate.slug, imported);

      if (importStatus === 'accepted') {
        context.acceptedCandidates.push(imported);
      } else {
        context.rejectedCandidates.push(imported);
      }
    }

    const destination = await moveInputFile(sourceFile, 'processed');
    return {
      file: displayPath(sourceFile),
      status: 'processed',
      candidates_loaded: rawCandidates.length,
      accepted: context.acceptedCandidates.length - acceptedBefore,
      rejected: context.rejectedCandidates.length - rejectedBefore,
      moved_to: destination ? displayPath(destination) : null,
      dry_run: dryRun,
    };
  } catch (error) {
    const destination = await moveInputFile(sourceFile, 'rejected');
    return {
      file: displayPath(sourceFile),
      status: 'rejected',
      candidates_loaded: 0,
      accepted: 0,
      rejected: 0,
      moved_to: destination ? displayPath(destination) : null,
      error: error.message,
      dry_run: dryRun,
    };
  }
}

async function readCandidateInput(filePath) {
  const data = JSON.parse(await readFile(filePath, 'utf8'));
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.candidates)) return data.candidates;
  throw new Error('input must be a JSON array or an object with a candidates array');
}

function normalizeOpenClawCandidate(candidate) {
  const technology = cleanText(candidate.technology);
  const errorSignature = cleanText(candidate.error_signature);
  const title = cleanText(candidate.title) || buildTitle(technology, errorSignature);
  const rawCategory = candidate.recommended_category || candidate.category;
  const category = normalizeCategory(rawCategory, technology);
  const slug = normalizeSlug(candidate.slug || `${technology}-${errorSignature || title}`);

  const commercialValueScore = candidate.commercial_value_score ?? candidate.commercial_value;
  const rankingDifficultyScore = candidate.ranking_difficulty_score ?? candidate.ranking_difficulty;

  return {
    slug,
    title,
    description: buildDescription(technology, title, candidate.search_intent),
    category,
    technology,
    error_signature: errorSignature,
    search_intent: cleanText(candidate.search_intent),
    why_developers_search_it: cleanText(candidate.why_developers_search_it),
    commercial_value_score: toScore(commercialValueScore),
    ranking_difficulty_score: toScore(rankingDifficultyScore),
    priority_score: toScore(candidate.priority_score),
    duplicate_risk: candidate.duplicate_risk === true,
    source_urls: uniqueStrings(candidate.source_urls),
    evidence_summary: cleanText(candidate.evidence_summary),
    suggested_related_errors: uniqueStrings(candidate.suggested_related_errors),
    notes: cleanText(candidate.notes),
  };
}

function validateCandidate(candidate, duplicateMatch) {
  const reasons = [];

  if (!candidate.error_signature) reasons.push('missing error_signature');
  if (!candidate.search_intent) reasons.push('missing search_intent');
  if (!candidate.evidence_summary) reasons.push('missing evidence_summary');
  if (candidate.source_urls.length === 0) reasons.push('missing source_urls');
  if (!approvedCategories.has(candidate.category)) reasons.push(`unapproved category: ${candidate.category || 'missing'}`);
  if (candidate.commercial_value_score < 6) reasons.push('commercial_value_score below 6');
  if (candidate.priority_score < 7) reasons.push('priority_score below 7');
  if (candidate.ranking_difficulty_score > 8 && candidate.priority_score < 9) {
    reasons.push('ranking_difficulty_score above 8 without priority_score at least 9');
  }
  if (candidate.duplicate_risk && candidate.priority_score < 9) {
    reasons.push('duplicate_risk true without priority_score at least 9');
  }
  if (duplicateMatch) reasons.push(`duplicate match: ${duplicateMatch.type} ${duplicateMatch.slug}`);
  if (!candidate.slug) reasons.push('unable to normalize slug');

  return reasons;
}

function detectSchemaWarnings(rawCandidate, index, fileName) {
  const warnings = [];
  const prefix = `candidate[${index}] in ${fileName}`;

  if ('commercial_value' in rawCandidate && !('commercial_value_score' in rawCandidate)) {
    warnings.push({ field: 'commercial_value', message: `${prefix}: has 'commercial_value' instead of 'commercial_value_score' (auto-mapped)` });
  }
  if ('ranking_difficulty' in rawCandidate && !('ranking_difficulty_score' in rawCandidate)) {
    warnings.push({ field: 'ranking_difficulty', message: `${prefix}: has 'ranking_difficulty' instead of 'ranking_difficulty_score' (auto-mapped)` });
  }
  if ('source' in rawCandidate && !('source_urls' in rawCandidate)) {
    warnings.push({ field: 'source', message: `${prefix}: has 'source' as string instead of 'source_urls' array` });
  }
  if (!rawCandidate.search_intent && !rawCandidate.title) {
    warnings.push({ field: 'search_intent', message: `${prefix}: missing search_intent and title` });
  }
  if (!rawCandidate.evidence_summary) {
    warnings.push({ field: 'evidence_summary', message: `${prefix}: missing evidence_summary` });
  }
  if (!rawCandidate.source_urls || (Array.isArray(rawCandidate.source_urls) && rawCandidate.source_urls.length === 0)) {
    warnings.push({ field: 'source_urls', message: `${prefix}: missing or empty source_urls` });
  }
  if ('duplicate_risk' in rawCandidate && rawCandidate.duplicate_risk !== undefined && rawCandidate.duplicate_risk !== true && rawCandidate.duplicate_risk !== false) {
    warnings.push({ field: 'duplicate_risk', message: `${prefix}: duplicate_risk is not boolean (got ${typeof rawCandidate.duplicate_risk})` });
  }

  const knownFields = new Set([
    'error_signature', 'title', 'technology', 'recommended_category', 'category',
    'search_intent', 'why_developers_search_it', 'commercial_value_score',
    'commercial_value', 'ranking_difficulty_score', 'ranking_difficulty',
    'priority_score', 'duplicate_risk', 'source_urls', 'source', 'source_url',
    'evidence_summary', 'suggested_related_errors', 'notes', 'slug',
  ]);
  for (const key of Object.keys(rawCandidate)) {
    if (!knownFields.has(key)) {
      warnings.push({ field: key, message: `${prefix}: unknown field '${key}'` });
    }
  }

  return warnings;
}

function buildImportedCandidate({ candidate, duplicateMatch, importedAt, importStatus, rejectionReasons, sourceIndex, sourceFile }) {
  return {
    status: importStatus === 'accepted' ? 'accepted-for-review' : 'rejected',
    score: candidate.priority_score * 10,
    slug: candidate.slug,
    title: candidate.title,
    description: candidate.description,
    category: candidate.category,
    technology: candidate.technology,
    error_signature: candidate.error_signature,
    search_intent: candidate.search_intent,
    commands: [],
    config_files: [],
    observed_causes: [candidate.why_developers_search_it, candidate.evidence_summary].filter(Boolean),
    observed_fixes: [],
    related_terms: candidate.suggested_related_errors,
    source: 'openclaw',
    source_url: candidate.source_urls[0] ?? null,
    source_urls: candidate.source_urls,
    collection_method: 'openclaw-high-potential-import',
    commercial_value_score: candidate.commercial_value_score,
    ranking_difficulty_score: candidate.ranking_difficulty_score,
    priority_score: candidate.priority_score,
    duplicate_risk: candidate.duplicate_risk,
    duplicate_match: duplicateMatch,
    evidence_summary: candidate.evidence_summary,
    notes: candidate.notes,
    import_metadata: {
      imported_at: importedAt,
      imported_from: 'openclaw',
      source_file: displayPath(sourceFile),
      quality_gate_version: qualityGateVersion,
      import_status: importStatus,
      rejection_reasons: rejectionReasons,
      source_index: sourceIndex,
    },
  };
}

async function loadExistingCoverage() {
  const pages = [];
  const seeds = [];
  const discovery = [];
  const contentDir = path.join(projectRoot, 'src', 'content', 'errors');

  for (const file of await safeReaddir(contentDir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;
    const absolutePath = path.join(contentDir, file);
    const raw = await readFile(absolutePath, 'utf8');
    const frontmatter = parseFrontmatter(raw);
    pages.push(toCoverageRecord(frontmatter, displayPath(absolutePath), file.replace(/\.mdx?$/, '')));
  }

  try {
    const seedData = JSON.parse(await readFile(path.join(projectRoot, 'data', 'error-seeds.json'), 'utf8'));
    for (const seed of seedData) {
      seeds.push(toCoverageRecord(seed, 'data/error-seeds.json', seed.slug));
    }
  } catch {
    // Existing seed coverage is optional for importer portability.
  }

  for (const discoveryPath of [
    path.join(projectRoot, 'automation', 'discovery', 'output', 'discovery-candidates.json'),
    outputPath,
  ]) {
    try {
      const report = JSON.parse(await readFile(discoveryPath, 'utf8'));
      const candidates = [
        ...(Array.isArray(report.candidates) ? report.candidates : []),
        ...(Array.isArray(report.accepted_candidates) ? report.accepted_candidates : []),
        ...(Array.isArray(report.rejected_candidates) ? report.rejected_candidates : []),
      ];
      for (const candidate of candidates) {
        discovery.push(toCoverageRecord(candidate, displayPath(discoveryPath), candidate.slug));
      }
    } catch {
      // Discovery/import output may not exist yet.
    }
  }

  return { pages, seeds, discovery };
}

function toCoverageRecord(value, file, fallbackSlug) {
  return {
    slug: normalizeSlug(value.slug || fallbackSlug),
    title: normalizeLookup(value.title),
    technology: normalizeLookup(value.technology),
    error_signature: normalizeLookup(value.error_signature),
    file,
  };
}

function findDuplicate(candidate, existing, seen) {
  const lookup = {
    slug: candidate.slug,
    title: normalizeLookup(candidate.title),
    technology: normalizeLookup(candidate.technology),
    error_signature: normalizeLookup(candidate.error_signature),
  };

  for (const source of [...existing.pages, ...existing.seeds, ...existing.discovery]) {
    const exactSlug = source.slug && source.slug === lookup.slug;
    const exactTitle = source.title && source.title === lookup.title;
    const sameSignature =
      source.error_signature &&
      lookup.error_signature &&
      source.error_signature === lookup.error_signature &&
      source.technology === lookup.technology;

    if (exactSlug || exactTitle || sameSignature) {
      return {
        type: exactSlug ? 'slug' : exactTitle ? 'title' : 'signature',
        slug: source.slug,
        file: source.file,
      };
    }
  }

  if (seen.has(candidate.slug)) {
    return {
      type: 'batch-slug',
      slug: candidate.slug,
      file: 'current import batch',
    };
  }

  return null;
}

async function ensureDataHubDirs() {
  for (const directory of dataHubDirs) {
    await mkdir(path.join(dataHubRoot, directory), { recursive: true });
  }
}

async function listJsonFiles(directory) {
  await mkdir(directory, { recursive: true });
  const entries = await readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => path.join(directory, entry.name))
    .sort();
}

async function moveInputFile(filePath, destinationName) {
  if (noMove) return null;

  const destinationDir = path.join(dataHubRoot, destinationName);
  await mkdir(destinationDir, { recursive: true });
  const parsed = path.parse(filePath);
  const destination = path.join(destinationDir, `${parsed.name}-${timestampForFile()}${parsed.ext || '.json'}`);
  await rename(filePath, destination);
  return destination;
}

async function ensureOutputDirs() {
  await mkdir(path.dirname(outputPath), { recursive: true });
  await mkdir(importHistoryDir, { recursive: true });
  await mkdir(importReportsDir, { recursive: true });
}

async function writeSuccessfulOutputs(output) {
  const historyPath = await writeHistoryOutput(output, 'import');
  await writeFile(latestOutputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  return historyPath;
}

async function writeHistoryOutput(output, prefix) {
  const historyPath = path.join(importHistoryDir, `${prefix}-${timestampForFile(output.generated_at)}.json`);
  await writeFile(historyPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  return historyPath;
}

async function writeLog(importedAt, message) {
  const logPath = path.join(dataHubRoot, 'logs', `import-${timestampForFile(importedAt)}.log`);
  await writeFile(logPath, `${message}\n`, 'utf8');
}

async function writeRunReport(importedAt, output, context) {
  const { categoryConfig, schemaWarnings } = context;
  const rejected = output.rejected_candidates || [];
  const accepted = output.accepted_candidates || [];

  const rejectionReasonsGrouped = {};
  for (const candidate of rejected) {
    const reasons = candidate.import_metadata?.rejection_reasons || [];
    for (const reason of reasons) {
      const category = reason.startsWith('unapproved category:') ? 'unapproved category' :
        reason.startsWith('duplicate match:') ? 'duplicate match' :
        reason.includes('below') ? reason.replace(/\s*\(.*\)/, '') :
        reason;
      if (!rejectionReasonsGrouped[category]) {
        rejectionReasonsGrouped[category] = { count: 0, candidates: [] };
      }
      rejectionReasonsGrouped[category].count += 1;
      rejectionReasonsGrouped[category].candidates.push({
        title: candidate.title,
        slug: candidate.slug,
        technology: candidate.technology,
        category: candidate.category,
        full_reason: reason,
      });
    }
  }

  const unapprovedCategories = {};
  for (const candidate of rejected) {
    const reasons = candidate.import_metadata?.rejection_reasons || [];
    for (const reason of reasons) {
      if (reason.startsWith('unapproved category:')) {
        const cat = reason.replace('unapproved category: ', '');
        if (!unapprovedCategories[cat]) unapprovedCategories[cat] = 0;
        unapprovedCategories[cat] += 1;
      }
    }
  }

  const report = {
    generated_at: importedAt,
    report_version: '1.0.0',
    quality_gate_version: output.summary ? qualityGateVersion : 'unknown',
    mode: output.mode,
    category_config_source: categoryConfig.source,
    summary: output.summary,
    rejection_reasons_grouped: rejectionReasonsGrouped,
    unapproved_categories: unapprovedCategories,
    schema_warnings: schemaWarnings || [],
    accepted_titles: accepted.map((c) => ({ title: c.title, slug: c.slug, category: c.category })),
    rejected_titles: rejected.map((c) => ({
      title: c.title,
      slug: c.slug,
      category: c.category,
      reasons: c.import_metadata?.rejection_reasons || [],
    })),
    approved_categories: [...categoryConfig.approvedCategories].sort(),
    alias_count: categoryConfig.aliases.size,
  };

  const reportPath = path.join(importReportsDir, `run-${timestampForFile(importedAt)}.json`);
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  const latestReportPath = path.join(importReportsDir, 'latest-run-report.json');
  await writeFile(latestReportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

function emptyOutput(importedAt) {
  return {
    generated_at: importedAt,
    source: 'openclaw-data-hub',
    data_hub_root: dataHubRoot,
    input_files: [],
    processed_files: [],
    moved_files: [],
    mode: reprocessLatestProcessed ? 'reprocess-latest-processed' : dryRun ? 'dry-run' : 'import',
    empty_input: true,
    dry_run: dryRun,
    summary: {
      files_found: 0,
      files_processed: 0,
      files_rejected: 0,
      total: 0,
      accepted: 0,
      rejected: 0,
      duplicate_risk: 0,
    },
    files: [],
    accepted_candidates: [],
    rejected_candidates: [],
  };
}

async function findLatestProcessedFile() {
  const processedDir = path.join(dataHubRoot, 'processed');
  await mkdir(processedDir, { recursive: true });
  const files = await listJsonFiles(processedDir);
  const stats = await Promise.all(
    files.map(async (filePath) => ({
      filePath,
      mtimeMs: (await stat(filePath)).mtimeMs,
    })),
  );

  return stats.sort((a, b) => b.mtimeMs - a.mtimeMs)[0]?.filePath ?? null;
}

function normalizeCategory(value, technologyFallback) {
  const cleaned = cleanText(value);
  if (approvedCategories.has(cleaned)) return cleaned;
  const alias = categoryAliases.get(cleaned.toLowerCase());
  if (alias) return alias;

  if (technologyFallback) {
    const techCleaned = cleanText(technologyFallback);
    if (approvedCategories.has(techCleaned)) return techCleaned;
    const techAlias = categoryAliases.get(techCleaned.toLowerCase());
    if (techAlias) return techAlias;
  }

  return cleaned;
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

async function safeReaddir(directory) {
  try {
    return await readdir(directory);
  } catch {
    return [];
  }
}

function buildTitle(technology, signature) {
  return `${technology} ${signature}`.replace(/\s+/g, ' ').trim();
}

function buildDescription(technology, title, intent) {
  const cleanIntent = cleanText(intent);
  if (cleanIntent) return `${cleanIntent} Includes evidence for ${technology || title} troubleshooting demand.`;
  return `Review ${title} as a potential Dev Error DB troubleshooting page.`;
}

function toScore(value) {
  const score = Number(value);
  if (!Number.isFinite(score)) return 0;
  return Math.max(0, Math.min(10, score));
}

function uniqueStrings(values) {
  if (!values) return [];
  const list = Array.isArray(values) ? values : [values];
  return [...new Set(list.map(cleanText).filter(Boolean))];
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

function timestampForFile(value = new Date().toISOString()) {
  return value.replace(/\D/g, '').slice(0, 14);
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeLookup(value) {
  return normalizeSlug(value);
}

function displayPath(filePath) {
  if (filePath.startsWith(projectRoot)) return path.relative(projectRoot, filePath) || '.';
  if (homeDir && filePath.startsWith(homeDir)) return `~${filePath.slice(homeDir.length)}`;
  return filePath;
}
