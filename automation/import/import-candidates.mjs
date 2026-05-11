import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(new URL('../..', import.meta.url).pathname);
const importDir = path.join(projectRoot, 'automation', 'import');
const inputPath = path.join(importDir, 'input', 'high-potential-candidates.json');
const examplePath = path.join(importDir, 'input', 'high-potential-candidates.example.json');
const outputPath = path.join(importDir, 'output', 'imported-candidates.json');
const qualityGateVersion = 'openclaw-high-potential-v1';

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

const categoryAliases = new Map([
  ['ai coding tools', 'OpenAI API'],
  ['api', 'OpenAI API'],
  ['apis', 'OpenAI API'],
  ['certificates', 'SSL/TLS'],
  ['ci', 'GitHub Actions'],
  ['ci/cd', 'GitHub Actions'],
  ['cloudflare', 'Cloudflare'],
  ['containers', 'Docker'],
  ['docker compose', 'Docker'],
  ['github actions', 'GitHub Actions'],
  ['javascript', 'Node.js'],
  ['networking', 'DNS'],
  ['node', 'Node.js'],
  ['nodejs', 'Node.js'],
  ['package manager', 'npm'],
  ['package managers', 'npm'],
  ['ssl', 'SSL/TLS'],
  ['ssl-tls', 'SSL/TLS'],
  ['tls', 'SSL/TLS'],
  ['version control', 'Git'],
]);

main().catch((error) => {
  console.error(`[import] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  await ensureInputExists();

  const rawCandidates = await readCandidateInput(inputPath);
  const existing = await loadExistingCoverage();
  const seen = new Map();
  const importedAt = new Date().toISOString();
  const acceptedCandidates = [];
  const rejectedCandidates = [];

  for (const [index, rawCandidate] of rawCandidates.entries()) {
    const candidate = normalizeOpenClawCandidate(rawCandidate);
    const duplicateMatch = findDuplicate(candidate, existing, seen);
    const rejectionReasons = validateCandidate(candidate, duplicateMatch);
    const importStatus = rejectionReasons.length === 0 ? 'accepted' : 'rejected';
    const imported = buildImportedCandidate({
      candidate,
      duplicateMatch,
      importedAt,
      importStatus,
      rejectionReasons,
      sourceIndex: index,
    });

    seen.set(candidate.slug, imported);

    if (importStatus === 'accepted') {
      acceptedCandidates.push(imported);
    } else {
      rejectedCandidates.push(imported);
    }
  }

  const output = {
    generated_at: importedAt,
    source: 'openclaw',
    summary: {
      total: rawCandidates.length,
      accepted: acceptedCandidates.length,
      rejected: rejectedCandidates.length,
      duplicate_risk: [...acceptedCandidates, ...rejectedCandidates].filter(
        (candidate) => candidate.duplicate_risk || candidate.duplicate_match,
      ).length,
    },
    accepted_candidates: acceptedCandidates,
    rejected_candidates: rejectedCandidates,
  };

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');

  console.log(`[import] loaded ${rawCandidates.length} OpenClaw candidate(s)`);
  console.log(`[import] accepted ${acceptedCandidates.length} candidate(s)`);
  console.log(`[import] rejected ${rejectedCandidates.length} candidate(s)`);
  console.log(`[import] wrote ${relativePath(outputPath)}`);
}

async function ensureInputExists() {
  try {
    await access(inputPath);
  } catch {
    throw new Error(
      `Missing input file: ${relativePath(inputPath)}\n` +
        `Copy ${relativePath(examplePath)} to ${relativePath(inputPath)} after OpenClaw produces qualified JSON.`,
    );
  }
}

async function readCandidateInput(filePath) {
  const data = JSON.parse(await readFile(filePath, 'utf8'));
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.candidates)) return data.candidates;
  throw new Error(`Input must be a JSON array or an object with a candidates array: ${relativePath(filePath)}`);
}

function normalizeOpenClawCandidate(candidate) {
  const technology = cleanText(candidate.technology);
  const errorSignature = cleanText(candidate.error_signature);
  const title = cleanText(candidate.title) || buildTitle(technology, errorSignature);
  const category = normalizeCategory(candidate.recommended_category || candidate.category || technology);
  const slug = normalizeSlug(candidate.slug || `${technology}-${errorSignature || title}`);

  return {
    slug,
    title,
    description: buildDescription(technology, title, candidate.search_intent),
    category,
    technology,
    error_signature: errorSignature,
    search_intent: cleanText(candidate.search_intent),
    why_developers_search_it: cleanText(candidate.why_developers_search_it),
    commercial_value_score: toScore(candidate.commercial_value_score),
    ranking_difficulty_score: toScore(candidate.ranking_difficulty_score),
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

function buildImportedCandidate({ candidate, duplicateMatch, importedAt, importStatus, rejectionReasons, sourceIndex }) {
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
    pages.push(toCoverageRecord(frontmatter, relativePath(absolutePath), file.replace(/\.mdx?$/, '')));
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
        discovery.push(toCoverageRecord(candidate, relativePath(discoveryPath), candidate.slug));
      }
    } catch {
      // Discovery output may not exist yet.
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

function normalizeCategory(value) {
  const cleaned = cleanText(value);
  if (approvedCategories.has(cleaned)) return cleaned;
  const alias = categoryAliases.get(cleaned.toLowerCase());
  if (alias) return alias;
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

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeLookup(value) {
  return normalizeSlug(value);
}

function relativePath(filePath) {
  return path.relative(projectRoot, filePath) || '.';
}
