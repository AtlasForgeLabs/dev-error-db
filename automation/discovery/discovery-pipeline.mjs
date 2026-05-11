import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const projectRoot = path.resolve(new URL('../..', import.meta.url).pathname);
const discoveryDir = path.join(projectRoot, 'automation', 'discovery');
const defaultOutputPath = path.join(discoveryDir, 'output', 'discovery-candidates.json');

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
  ['apis', 'OpenAI API'],
  ['api', 'OpenAI API'],
  ['ai coding tools', 'AI Coding Tools'],
  ['anthropic api', 'Anthropic API'],
  ['cursor', 'Cursor'],
  ['claude code', 'AI Coding Tools'],
  ['github copilot', 'GitHub Copilot'],
  ['litellm', 'LiteLLM'],
  ['ollama', 'Ollama'],
  ['opencode', 'AI Coding Tools'],
  ['openclaw', 'AI Coding Tools'],
  ['cloud platforms', 'Cloud Platforms'],
  ['ci/cd', 'GitHub Actions'],
  ['deployment', 'Deployment'],
  ['vercel', 'Deployment'],
  ['containers', 'Docker'],
  ['docker compose', 'Docker'],
  ['version control', 'Git'],
  ['runtime', 'Node.js'],
  ['package managers', 'npm'],
  ['networking', 'DNS'],
  ['ssl-tls', 'SSL/TLS'],
  ['ssl', 'SSL/TLS'],
  ['tls', 'SSL/TLS'],
]);

const args = parseArgs(process.argv.slice(2));
const outputPath = path.resolve(projectRoot, args.output ?? defaultOutputPath);

main().catch((error) => {
  console.error(`[discovery] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const keywords = await readJson(path.join(discoveryDir, 'discovery-keywords.json'));
  const blacklist = await readJson(path.join(discoveryDir, 'discovery-blacklist.json'));
  const existing = await loadExistingCoverage();
  const observations = args.observations
    ? await readObservationFile(path.resolve(projectRoot, args.observations))
    : [];

  const rawCandidates = [
    ...buildCandidatesFromKeywordSources(keywords),
    ...buildCandidatesFromObservations(observations),
  ];

  const seen = new Map();
  const candidates = rawCandidates.map((candidate) =>
    evaluateCandidate(candidate, {
      blacklist,
      existing,
      seen,
      minScore: Number(args.minScore ?? 70),
    }),
  );

  const sortedCandidates = candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.slug.localeCompare(b.slug);
  });

  const limitedCandidates = args.limit ? sortedCandidates.slice(0, Number(args.limit)) : sortedCandidates;
  const report = {
    generated_at: new Date().toISOString(),
    project: 'Dev Error DB',
    automation: {
      system: 'AtlasForge SEO discovery',
      openclaw_compatible: true,
      publishable: false,
      next_required_step: 'human seed review before generation',
    },
    inputs: {
      keyword_source: relativePath(path.join(discoveryDir, 'discovery-keywords.json')),
      blacklist_source: relativePath(path.join(discoveryDir, 'discovery-blacklist.json')),
      observations_source: args.observations ? relativePath(path.resolve(projectRoot, args.observations)) : null,
      existing_markdown_pages: existing.pages.length,
      existing_seed_pages: existing.seeds.length,
    },
    summary: summarize(limitedCandidates),
    candidates: limitedCandidates,
  };

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`);

  console.log(`[discovery] loaded ${rawCandidates.length} raw candidates`);
  console.log(`[discovery] wrote ${limitedCandidates.length} evaluated candidates to ${relativePath(outputPath)}`);
  console.log(`[discovery] accepted for review: ${report.summary.status_counts['accepted-for-review'] ?? 0}`);
  console.log(`[discovery] duplicate risk: ${report.summary.status_counts['duplicate-risk'] ?? 0}`);
  console.log(`[discovery] rejected unsafe: ${report.summary.status_counts['rejected-unsafe'] ?? 0}`);
}

function buildCandidatesFromKeywordSources(keywords) {
  const technologyByName = new Map(
    keywords.seed_technologies.map((technology) => [technology.technology, technology]),
  );

  return keywords.seed_error_signatures.map((seed) => {
    const technologyProfile = technologyByName.get(seed.technology);
    const category = normalizeCategory(technologyProfile?.category ?? seed.technology);
    const slug = normalizeSlug(`${seed.technology}-${seed.signature}`);
    const commonPatterns = chooseIssuePatterns(keywords.common_developer_issue_patterns, seed.technology);

    return {
      source: 'keyword-source',
      source_url: null,
      technology: seed.technology,
      category,
      slug,
      title: buildTitle(seed.technology, seed.signature),
      description: buildDescription(seed.technology, seed.signature, seed.intent),
      error_signature: seed.signature,
      search_intent: seed.intent,
      observed_causes: commonPatterns.slice(0, 3),
      observed_fixes: chooseFixes(technologyProfile, seed.signature),
      commands: technologyProfile?.commands ?? [],
      config_files: technologyProfile?.config_files ?? [],
      related_terms: technologyProfile?.source_areas ?? [],
      collection_method: 'structured-keyword-source',
    };
  });
}

function buildCandidatesFromObservations(observations) {
  return observations.map((observation) => {
    const technology = String(observation.technology ?? '').trim();
    const signature = String(observation.error_signature ?? observation.raw_title ?? '').trim();

    return {
      source: observation.source ?? 'normalized-observation',
      source_url: observation.source_url ?? null,
      technology,
      category: normalizeCategory(observation.category ?? technology),
      slug: normalizeSlug(observation.slug ?? `${technology}-${signature}`),
      title: observation.title ?? buildTitle(technology, signature),
      description:
        observation.description ??
        buildDescription(technology, signature, observation.search_intent ?? observation.context ?? ''),
      error_signature: signature,
      search_intent: observation.search_intent ?? observation.context ?? '',
      observed_causes: toStringArray(observation.observed_causes),
      observed_fixes: toStringArray(observation.observed_fixes),
      commands: toStringArray(observation.commands),
      config_files: toStringArray(observation.config_files),
      related_terms: toStringArray(observation.related_terms),
      collection_method: 'normalized-observation',
    };
  });
}

function evaluateCandidate(candidate, context) {
  const normalized = normalizeCandidate(candidate);
  const unsafeMatches = findBlacklistMatches(normalized, context.blacklist.forbidden_keywords);
  const holdMatches = findBlacklistMatches(normalized, context.blacklist.hold_for_human_review);
  const lowValueMatches = findBlacklistMatches(normalized, context.blacklist.low_value_patterns);
  const spamMatches = findBlacklistMatches(normalized, context.blacklist.spam_patterns);
  const doorwayMatches = findBlacklistMatches(normalized, context.blacklist.doorway_page_patterns);
  const duplicate = findDuplicate(normalized, context.existing, context.seen);
  const scoreParts = scoreCandidate(normalized, {
    duplicate,
    unsafeMatches,
    holdMatches,
    lowValueMatches,
    spamMatches,
    doorwayMatches,
  });
  const status = chooseStatus(normalized, {
    score: scoreParts.score,
    minScore: context.minScore,
    duplicate,
    unsafeMatches,
    spamMatches,
    doorwayMatches,
    lowValueMatches,
  });

  context.seen.set(normalized.slug, normalized);

  return {
    status,
    score: scoreParts.score,
    slug: normalized.slug,
    title: normalized.title,
    description: normalized.description,
    category: normalized.category,
    technology: normalized.technology,
    error_signature: normalized.error_signature,
    search_intent: normalized.search_intent,
    commands: normalized.commands,
    config_files: normalized.config_files,
    observed_causes: normalized.observed_causes,
    observed_fixes: normalized.observed_fixes,
    related_terms: normalized.related_terms,
    source: normalized.source,
    source_url: normalized.source_url,
    collection_method: normalized.collection_method,
    review_flags: buildReviewFlags({
      duplicate,
      unsafeMatches,
      holdMatches,
      lowValueMatches,
      spamMatches,
      doorwayMatches,
      scoreParts,
    }),
    duplicate_match: duplicate,
  };
}

function normalizeCandidate(candidate) {
  const technology = cleanText(candidate.technology);
  const errorSignature = cleanText(candidate.error_signature);
  const slug = normalizeSlug(candidate.slug || `${technology}-${errorSignature}`);
  const category = normalizeCategory(candidate.category || technology);

  return {
    source: cleanText(candidate.source) || 'unknown',
    source_url: candidate.source_url ?? null,
    technology,
    category,
    slug,
    title: cleanText(candidate.title) || buildTitle(technology, errorSignature),
    description: cleanText(candidate.description) || buildDescription(technology, errorSignature, candidate.search_intent),
    error_signature: errorSignature,
    search_intent: cleanText(candidate.search_intent),
    observed_causes: uniqueStrings(candidate.observed_causes),
    observed_fixes: uniqueStrings(candidate.observed_fixes),
    commands: uniqueStrings(candidate.commands),
    config_files: uniqueStrings(candidate.config_files),
    related_terms: uniqueStrings(candidate.related_terms),
    collection_method: cleanText(candidate.collection_method) || 'unknown',
  };
}

function scoreCandidate(candidate, checks) {
  const reasons = [];
  let score = 0;

  if (candidate.error_signature.length >= 8) {
    score += 20;
    reasons.push('specific error signature');
  }

  if (candidate.search_intent.length >= 40) {
    score += 15;
    reasons.push('clear troubleshooting intent');
  }

  if (approvedCategories.has(candidate.category)) {
    score += 12;
    reasons.push('approved category fit');
  }

  if (candidate.technology.length >= 2) {
    score += 8;
    reasons.push('specific technology');
  }

  if (candidate.observed_causes.length >= 2) {
    score += 10;
    reasons.push('multiple likely causes');
  }

  if (candidate.observed_fixes.length >= 1) {
    score += 10;
    reasons.push('actionable fix path');
  }

  if (candidate.commands.length >= 1) {
    score += 10;
    reasons.push('diagnostic commands available');
  }

  if (candidate.config_files.length >= 1) {
    score += 5;
    reasons.push('configuration surface identified');
  }

  if (candidate.related_terms.length >= 1) {
    score += 5;
    reasons.push('internal cluster fit');
  }

  if (!checks.duplicate) {
    score += 10;
    reasons.push('not covered by existing slug/title/signature');
  } else {
    score -= 30;
    reasons.push('duplicate risk');
  }

  if (checks.holdMatches.length > 0) {
    score -= 10;
    reasons.push('requires human review');
  }

  if (checks.lowValueMatches.length > 0) {
    score -= 12;
    reasons.push('low-value wording risk');
  }

  if (checks.spamMatches.length > 0 || checks.doorwayMatches.length > 0) {
    score -= 30;
    reasons.push('spam or doorway risk');
  }

  if (checks.unsafeMatches.length > 0) {
    score = 0;
    reasons.push('unsafe keyword match');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    reasons,
  };
}

function chooseStatus(candidate, checks) {
  if (checks.unsafeMatches.length > 0) {
    return 'rejected-unsafe';
  }

  if (checks.spamMatches.length > 0 || checks.doorwayMatches.length > 0) {
    return 'rejected-low-value';
  }

  if (checks.duplicate) {
    return 'duplicate-risk';
  }

  if (
    checks.score < checks.minScore ||
    checks.lowValueMatches.length > 0 ||
    candidate.observed_causes.length < 2 ||
    candidate.observed_fixes.length < 1
  ) {
    return 'needs-research';
  }

  return 'accepted-for-review';
}

async function loadExistingCoverage() {
  const contentDir = path.join(projectRoot, 'src', 'content', 'errors');
  const pages = [];
  const seeds = [];

  for (const file of await safeReaddir(contentDir)) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue;

    const absolutePath = path.join(contentDir, file);
    const raw = await readFile(absolutePath, 'utf8');
    const frontmatter = parseFrontmatter(raw);
    pages.push({
      slug: normalizeSlug(frontmatter.slug || file.replace(/\.mdx?$/, '')),
      title: normalizeLookup(frontmatter.title),
      description: normalizeLookup(frontmatter.description),
      technology: normalizeLookup(frontmatter.technology),
      error_signature: normalizeLookup(frontmatter.error_signature),
      file: relativePath(absolutePath),
    });
  }

  try {
    const seedData = await readJson(path.join(projectRoot, 'data', 'error-seeds.json'));
    for (const seed of seedData) {
      seeds.push({
        slug: normalizeSlug(seed.slug),
        title: normalizeLookup(seed.title),
        description: normalizeLookup(seed.description),
        technology: normalizeLookup(seed.technology),
        error_signature: normalizeLookup(seed.error_signature),
        file: 'data/error-seeds.json',
      });
    }
  } catch {
    // Seed data is optional for other AtlasForge properties.
  }

  return { pages, seeds };
}

function findDuplicate(candidate, existing, seen) {
  const candidateLookup = {
    slug: candidate.slug,
    title: normalizeLookup(candidate.title),
    technology: normalizeLookup(candidate.technology),
    error_signature: normalizeLookup(candidate.error_signature),
  };

  for (const source of [...existing.pages, ...existing.seeds]) {
    const exactSlug = source.slug === candidateLookup.slug;
    const exactTitle = source.title && source.title === candidateLookup.title;
    const sameSignature =
      source.error_signature &&
      candidateLookup.error_signature &&
      source.error_signature === candidateLookup.error_signature &&
      source.technology === candidateLookup.technology;

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
      file: 'current discovery run',
    };
  }

  return null;
}

function findBlacklistMatches(candidate, patterns) {
  const haystack = [
    candidate.slug,
    candidate.title,
    candidate.description,
    candidate.technology,
    candidate.category,
    candidate.error_signature,
    candidate.search_intent,
    ...candidate.observed_causes,
    ...candidate.observed_fixes,
    ...candidate.commands,
    ...candidate.config_files,
    ...candidate.related_terms,
  ]
    .join(' ')
    .toLowerCase();

  return patterns.filter((pattern) => haystack.includes(String(pattern).toLowerCase()));
}

function buildReviewFlags(checks) {
  const flags = [];

  if (checks.duplicate) flags.push(`duplicate:${checks.duplicate.type}:${checks.duplicate.slug}`);
  for (const match of checks.unsafeMatches) flags.push(`unsafe:${match}`);
  for (const match of checks.holdMatches) flags.push(`human-review:${match}`);
  for (const match of checks.lowValueMatches) flags.push(`low-value:${match}`);
  for (const match of checks.spamMatches) flags.push(`spam:${match}`);
  for (const match of checks.doorwayMatches) flags.push(`doorway:${match}`);

  return [...new Set([...flags, ...checks.scoreParts.reasons.map((reason) => `score:${reason}`)])];
}

function summarize(candidates) {
  return {
    total: candidates.length,
    status_counts: countBy(candidates, 'status'),
    category_counts: countBy(candidates, 'category'),
    technology_counts: countBy(candidates, 'technology'),
  };
}

function chooseIssuePatterns(patterns, technology) {
  const technologyPatterns = {
    'OpenAI API': [
      'fails after rotating API key',
      'fails with missing environment variable',
      'works locally but fails in CI',
      'fails after changing model or provider configuration',
    ],
    Cursor: [
      'fails after rotating API key',
      'fails with missing environment variable',
      'fails after changing model or provider configuration',
    ],
    'GitHub Actions': [
      'works locally but fails in CI',
      'fails during GitHub Actions deploy',
      'fails after package-lock.json merge conflict',
      'fails after changing Node version',
    ],
    Git: [
      'fails with SSH key permission error',
      'fails during GitHub Actions deploy',
      'works locally but fails in CI',
    ],
    Docker: [
      'fails only in Docker',
      'works locally but fails in CI',
      'fails after changing container port mapping',
    ],
    npm: [
      'fails after dependency update',
      'fails after package-lock.json merge conflict',
      'works locally but fails in CI',
    ],
    'Node.js': [
      'fails after changing Node version',
      'fails after dependency update',
      'works locally but fails in CI',
    ],
    Python: [
      'fails with missing environment variable',
      'fails only on macOS',
      'fails only on Linux server',
      'fails after changing virtual environment',
    ],
    'SSL/TLS': [
      'fails with expired certificate',
      'fails after enabling Cloudflare proxy',
      'fails only on Linux server',
    ],
    DNS: [
      'fails after DNS change',
      'fails after enabling Cloudflare proxy',
      'fails during Vercel build',
    ],
    Cloudflare: [
      'fails after enabling Cloudflare proxy',
      'fails after DNS change',
      'fails with expired certificate',
    ],
    Vercel: [
      'fails during Vercel build',
      'fails with missing environment variable',
      'fails after dependency update',
      'fails after changing Node version',
    ],
  };

  const explicit = technologyPatterns[technology];
  if (explicit) return explicit;

  const lowerTechnology = technology.toLowerCase();
  const preferred = patterns.filter((pattern) => pattern.toLowerCase().includes(lowerTechnology));

  if (preferred.length >= 2) return preferred;

  if (technology === 'GitHub Actions') {
    return patterns.filter((pattern) => pattern.includes('CI') || pattern.includes('GitHub Actions'));
  }

  if (technology === 'Docker') {
    return patterns.filter((pattern) => pattern.includes('Docker') || pattern.includes('locally'));
  }

  if (technology === 'DNS' || technology === 'Cloudflare') {
    return patterns.filter((pattern) => pattern.includes('DNS') || pattern.includes('Cloudflare'));
  }

  return patterns.slice(0, 4);
}

function chooseFixes(profile, signature) {
  const fixes = [];
  const lowerSignature = signature.toLowerCase();

  if (lowerSignature.includes('401') || lowerSignature.includes('key')) {
    fixes.push('verify the expected environment variable is set in the same shell or runtime that sends the request');
  }

  if (lowerSignature.includes('npm ci') || lowerSignature.includes('lock')) {
    fixes.push('regenerate package-lock.json with the project Node and npm versions, then commit the lockfile');
  }

  if (lowerSignature.includes('docker daemon')) {
    fixes.push('start Docker Desktop or the Docker service before running Docker CLI commands');
  }

  if (lowerSignature.includes('publickey') || lowerSignature.includes('remote repository')) {
    fixes.push('verify the remote URL, loaded SSH key, and repository access permissions');
  }

  if (lowerSignature.includes('certificate') || lowerSignature.includes('ssl')) {
    fixes.push('inspect the certificate chain and local trust store before bypassing TLS verification');
  }

  if (lowerSignature.includes('module')) {
    fixes.push('verify the dependency is installed in the active runtime environment');
  }

  if (lowerSignature.includes('dns') || lowerSignature.includes('nxdomain')) {
    fixes.push('check authoritative DNS records and nameserver configuration');
  }

  if (profile?.commands?.length) {
    fixes.push(`run ${profile.commands[0]} to confirm the local environment`);
  }

  return uniqueStrings(fixes).slice(0, 4);
}

function buildTitle(technology, signature) {
  const cleanedSignature = cleanText(signature).replace(/^error:\s*/i, '');
  return `${technology} ${cleanedSignature}`.replace(/\s+/g, ' ').trim();
}

function buildDescription(technology, signature, intent = '') {
  const baseIntent = cleanText(intent);

  if (baseIntent) {
    return `${baseIntent} Includes checks for ${technology} configuration, diagnostics, and safe next steps.`;
  }

  return `Diagnose ${technology} failures with the ${signature} error signature using practical checks and safe troubleshooting steps.`;
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

async function readObservationFile(filePath) {
  const data = await readJson(filePath);
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.observations)) return data.observations;
  if (Array.isArray(data.candidates)) return data.candidates;

  throw new Error(`Observation file must contain an array, "observations", or "candidates": ${relativePath(filePath)}`);
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

    const [key, inlineValue] = value.slice(2).split('=');

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

function countBy(items, key) {
  return items.reduce((counts, item) => {
    const value = item[key] ?? 'unknown';
    counts[value] = (counts[value] ?? 0) + 1;
    return counts;
  }, {});
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

function normalizeLookup(value) {
  return normalizeSlug(value);
}

function relativePath(filePath) {
  return path.relative(projectRoot, filePath) || '.';
}
