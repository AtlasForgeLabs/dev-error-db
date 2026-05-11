import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export const paths = {
  policy: path.join(projectRoot, 'automation', 'config', 'pipeline-policy.json'),
  categories: path.join(projectRoot, 'automation', 'config', 'approved-categories.json'),
  state: path.join(projectRoot, 'automation', 'runtime', 'pipeline-state.json'),
  health: path.join(projectRoot, 'automation', 'runtime', 'pipeline-health.json'),
  validation: path.join(projectRoot, 'automation', 'runtime', 'pipeline-validation.json'),
  latestImport: path.join(projectRoot, 'automation', 'import', 'output', 'latest-import.json'),
  errorsDir: path.join(projectRoot, 'src', 'content', 'errors'),
  distDir: path.join(projectRoot, 'dist'),
};

export async function loadPolicy() {
  return readJson(paths.policy);
}

export async function loadCategoryConfig() {
  return readJson(paths.categories);
}

export async function loadPipelineState() {
  await ensureRuntimeFiles();
  return readJson(paths.state);
}

export async function savePipelineState(state) {
  await mkdir(path.dirname(paths.state), { recursive: true });
  await writeJson(paths.state, state);
}

export async function ensureRuntimeFiles() {
  await mkdir(path.dirname(paths.state), { recursive: true });
  if (!existsSync(paths.state)) {
    await writeJson(paths.state, {
      paused: false,
      last_failure: null,
      consecutive_failures: 0,
      last_successful_publish: null,
      daily_counters: {},
    });
  }
}

export async function normalizeCategory(category, technology = '') {
  const config = await loadCategoryConfig();
  const approved = new Set(config.approved_categories ?? []);
  const aliases = config.aliases ?? {};
  const technologyTarget = aliases[lookup(technology)] ?? cleanText(technology);
  if (approved.has(technologyTarget)) return technologyTarget;
  const cleaned = cleanText(category);
  if (approved.has(cleaned)) return cleaned;
  return aliases[lookup(cleaned)] ?? cleaned;
}

export async function loadExistingCoverage() {
  const files = await listMarkdownFiles(paths.errorsDir);
  const pages = [];
  const slugs = new Set();
  const titles = new Map();
  const signatures = new Map();

  for (const filePath of files) {
    const raw = await readFile(filePath, 'utf8');
    const frontmatter = parseFrontmatter(raw);
    const slug = path.basename(filePath).replace(/\.mdx?$/, '');
    const titleKey = lookup(frontmatter.title);
    const signatureKey = signatureLookup(frontmatter.technology, frontmatter.error_signature);

    slugs.add(slug);
    if (titleKey) titles.set(titleKey, { slug, title: frontmatter.title });
    if (signatureKey) signatures.set(signatureKey, { slug, error_signature: frontmatter.error_signature });
    pages.push({
      slug,
      filePath,
      frontmatter,
      bodyLength: raw.replace(/^---\n[\s\S]*?\n---/, '').trim().length,
    });
  }

  return { files, pages, slugs, titles, signatures };
}

export async function validateCandidates(candidates, options = {}) {
  const policy = options.policy ?? (await loadPolicy());
  const categoryConfig = options.categoryConfig ?? (await loadCategoryConfig());
  const existing = options.existing ?? (await loadExistingCoverage());
  const approved = new Set(categoryConfig.approved_categories ?? []);
  const results = [];

  for (const candidate of candidates) {
    const normalized = await normalizeCandidateForGuardrail(candidate);
    const errors = [];
    const warnings = [];

    if (!normalized.slug) errors.push('missing slug');
    if (existing.slugs.has(normalized.slug)) errors.push('duplicate slug');
    const titleDuplicate = nearestDuplicate(normalized.title, [...existing.titles.values()].map((item) => item.title), policy.duplicate_similarity_threshold);
    if (titleDuplicate) errors.push(`near-duplicate title: ${titleDuplicate.value}`);
    const signatureDuplicate = nearestDuplicate(
      normalized.error_signature,
      [...existing.signatures.values()].map((item) => item.error_signature),
      policy.duplicate_similarity_threshold
    );
    if (signatureDuplicate && existing.signatures.has(signatureLookup(normalized.technology, signatureDuplicate.value))) {
      errors.push(`near-duplicate error_signature: ${signatureDuplicate.value}`);
    }
    if (policy.require_evidence_summary && !normalized.evidence_summary) errors.push('missing evidence_summary');
    if (policy.require_source_urls && normalized.source_urls.length === 0) errors.push('missing source_urls');
    if (!approved.has(normalized.category)) errors.push(`invalid taxonomy category: ${normalized.category || 'missing'}`);
    if (!approved.has(normalized.category) && policy.unknown_category_action === 'review') warnings.push('unknown category routed to review');
    if (Number(normalized.priority_score) < Number(policy.min_priority_score)) errors.push('priority_score below policy minimum');
    if (Number(normalized.commercial_value_score) < Number(policy.min_commercial_value_score)) {
      errors.push('commercial_value_score below policy minimum');
    }
    if (Number(normalized.ranking_difficulty_score) > Number(policy.max_ranking_difficulty_score)) {
      warnings.push('ranking_difficulty_score above policy maximum');
    }
    if (policy.require_quick_fix && !normalized.quick_fix) errors.push('missing quick_fix');
    if (normalized.common_causes.length === 0) errors.push('missing common_causes');
    if (normalized.related_errors.length === 0) warnings.push('missing related_errors');
    if (looksGeneric(normalized.title)) errors.push('title is too generic');
    if (looksGeneric(normalized.description)) errors.push('description is too generic');

    results.push({
      slug: normalized.slug,
      title: normalized.title,
      category: normalized.category,
      technology: normalized.technology,
      error_signature: normalized.error_signature,
      status: errors.length > 0 ? 'rejected' : 'accepted',
      errors,
      warnings,
      normalized,
    });
  }

  return results;
}

export async function validateMarkdownPages(options = {}) {
  const policy = options.policy ?? (await loadPolicy());
  const coverage = options.existing ?? (await loadExistingCoverage());
  const results = [];

  for (const page of coverage.pages) {
    const raw = await readFile(page.filePath, 'utf8');
    const body = raw.replace(/^---\n[\s\S]*?\n---/, '').trim();
    const errors = [];
    const warnings = [];
    const faqCount = (body.match(/^###\s+/gm) ?? []).length;
    const quickFixCount = (body.match(/^##\s+Quick fixes\b/im) ?? []).length;

    if (body.length < Number(policy.min_markdown_body_chars ?? 0)) {
      errors.push(`low content length: ${body.length} chars`);
    }
    if (quickFixCount === 0) errors.push('missing quick fixes section');
    if (!/^##\s+FAQ\b/im.test(body)) errors.push('missing FAQ section');
    if (faqCount < Number(policy.min_faq_items ?? 0)) warnings.push(`FAQ has fewer than ${policy.min_faq_items} questions`);
    if (!page.frontmatter.title) errors.push('missing frontmatter title');
    if (!page.frontmatter.description) errors.push('missing frontmatter description');
    if (!page.frontmatter.error_signature) errors.push('missing frontmatter error_signature');

    results.push({
      slug: page.slug,
      file: path.relative(projectRoot, page.filePath),
      status: errors.length > 0 ? 'rejected' : 'accepted',
      body_length: body.length,
      faq_questions: faqCount,
      errors,
      warnings,
    });
  }

  return results;
}

export async function enforcePublishLimits({ requestedCount, mode = 'write' }) {
  const policy = await loadPolicy();
  const state = await loadPipelineState();
  const today = new Date().toISOString().slice(0, 10);
  const pagesToday = Number(state.daily_counters?.[today] ?? 0);
  const maxPagesPerRun = Number(policy.max_pages_per_run);
  const maxPagesPerDay = Number(policy.max_pages_per_day);
  const errors = [];

  if (state.paused) errors.push('pipeline is paused');
  if (mode !== 'dry-run' && Number.isFinite(maxPagesPerRun) && maxPagesPerRun > 0 && requestedCount > maxPagesPerRun) {
    errors.push(`max_pages_per_run exceeded: ${requestedCount} > ${policy.max_pages_per_run}`);
  }
  if (mode !== 'dry-run' && Number.isFinite(maxPagesPerDay) && maxPagesPerDay > 0 && pagesToday + requestedCount > maxPagesPerDay) {
    errors.push(`max_pages_per_day exceeded: ${pagesToday + requestedCount} > ${policy.max_pages_per_day}`);
  }

  return { allowed: errors.length === 0, errors, pagesToday, policy, state };
}

export async function recordPipelineFailure(message) {
  const policy = await loadPolicy();
  const state = await loadPipelineState();
  const consecutiveFailures = Number(state.consecutive_failures ?? 0) + 1;
  const paused = consecutiveFailures >= Number(policy.pause_after_consecutive_failures ?? 3);
  await savePipelineState({
    ...state,
    paused,
    last_failure: {
      at: new Date().toISOString(),
      message,
    },
    consecutive_failures: consecutiveFailures,
  });
}

export async function recordPipelineSuccess({ pagesPublished = 0 } = {}) {
  const state = await loadPipelineState();
  const today = new Date().toISOString().slice(0, 10);
  const dailyCounters = { ...(state.daily_counters ?? {}) };
  dailyCounters[today] = Number(dailyCounters[today] ?? 0) + pagesPublished;
  await savePipelineState({
    ...state,
    paused: false,
    last_failure: null,
    consecutive_failures: 0,
    last_successful_publish: {
      at: new Date().toISOString(),
      pages_published: pagesPublished,
    },
    daily_counters: dailyCounters,
  });
}

export async function verifyBuildOutputs(slugs = []) {
  const sitemapIndex = path.join(paths.distDir, 'sitemap-index.xml');
  const sitemap = path.join(paths.distDir, 'sitemap-0.xml');
  const checks = [];

  checks.push(await fileCheck('dist/sitemap-index.xml', sitemapIndex));
  checks.push(await fileCheck('dist/sitemap-0.xml', sitemap));

  for (const slug of slugs) {
    checks.push(await fileCheck(`src/content/errors/${slug}.md`, path.join(paths.errorsDir, `${slug}.md`)));
    checks.push(await fileCheck(`dist/errors/${slug}/index.html`, path.join(paths.distDir, 'errors', slug, 'index.html')));
  }

  const markdownFiles = await listMarkdownFiles(paths.errorsDir);
  for (const filePath of markdownFiles) {
    const raw = await readFile(filePath, 'utf8');
    if (!raw.trim()) {
      checks.push({ name: path.relative(projectRoot, filePath), exists: true, ok: false, reason: 'empty markdown output' });
    }
  }

  return {
    ok: checks.every((check) => check.ok),
    checks,
  };
}

export async function writeValidationReport(report) {
  await mkdir(path.dirname(paths.validation), { recursive: true });
  await writeJson(paths.validation, report);
}

export async function writeHealthReport(report) {
  await mkdir(path.dirname(paths.health), { recursive: true });
  await writeJson(paths.health, report);
}

export async function buildHealthReport(extra = {}) {
  await ensureRuntimeFiles();
  const state = await loadPipelineState();
  const today = new Date().toISOString().slice(0, 10);
  const validation = existsSync(paths.validation) ? await readJson(paths.validation) : null;
  const buildVerification = await verifyBuildOutputs();

  return {
    generated_at: new Date().toISOString(),
    pages_today: Number(state.daily_counters?.[today] ?? 0),
    pages_this_run: Number(extra.pages_this_run ?? 0),
    last_publish: state.last_successful_publish,
    paused: Boolean(state.paused),
    pending_candidates: Number(extra.pending_candidates ?? validation?.summary?.pending_candidates ?? 0),
    failed_candidates: Number(extra.failed_candidates ?? validation?.summary?.rejected ?? 0),
    duplicate_rejections: Number(extra.duplicate_rejections ?? validation?.summary?.duplicate_rejections ?? 0),
    build_status: buildVerification.ok ? 'ok' : 'failed',
    deploy_ready: buildVerification.ok && !state.paused,
  };
}

export async function listMarkdownFiles(directory) {
  if (!existsSync(directory)) return [];
  const entries = await readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
    .map((entry) => path.join(directory, entry.name));
}

export function candidateSummary(result) {
  return {
    slug: result.slug,
    title: result.title,
    category: result.category,
    technology: result.technology,
    error_signature: result.error_signature,
    status: result.status,
    errors: result.errors,
    warnings: result.warnings,
  };
}

export function normalizeSlug(value) {
  return cleanText(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  const data = {};
  if (!match) return data;
  const lines = match[1].split('\n');
  for (let index = 0; index < lines.length; index += 1) {
    const field = lines[index].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    data[field[1]] = field[2].replace(/^['"]|['"]$/g, '').trim();
  }
  return data;
}

async function normalizeCandidateForGuardrail(candidate) {
  const technology = cleanText(candidate.technology);
  const category = await normalizeCategory(candidate.category || technology, technology);
  return {
    ...candidate,
    slug: normalizeSlug(candidate.slug || `${technology}-${candidate.error_signature || candidate.title}`),
    title: cleanText(candidate.title),
    description: cleanText(candidate.description),
    category,
    technology,
    error_signature: cleanText(candidate.error_signature),
    evidence_summary: cleanText(candidate.evidence_summary),
    source_urls: uniqueStrings(candidate.source_urls),
    quick_fix: cleanText(candidate.quick_fix) || inferQuickFix(candidate),
    common_causes: uniqueStrings(candidate.common_causes ?? candidate.observed_causes),
    related_errors: uniqueStrings(candidate.related_errors ?? candidate.related_terms),
    search_intent: cleanText(candidate.search_intent),
    priority_score: Number(candidate.priority_score ?? candidate.score / 10 ?? 0),
    commercial_value_score: Number(candidate.commercial_value_score ?? 0),
    ranking_difficulty_score: Number(candidate.ranking_difficulty_score ?? 0),
  };
}

async function fileCheck(name, filePath) {
  try {
    const fileStat = await stat(filePath);
    return { name, exists: true, ok: fileStat.isFile() && fileStat.size > 0 };
  } catch {
    return { name, exists: false, ok: false };
  }
}

function nearestDuplicate(value, candidates, threshold) {
  const normalized = lookup(value);
  if (!normalized) return null;
  let best = null;
  for (const candidate of candidates) {
    const score = similarity(normalized, lookup(candidate));
    if (score >= threshold && (!best || score > best.score)) {
      best = { value: candidate, score };
    }
  }
  return best;
}

function similarity(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 1;
  const left = new Set(a.split('-').filter(Boolean));
  const right = new Set(b.split('-').filter(Boolean));
  const intersection = [...left].filter((item) => right.has(item)).length;
  const union = new Set([...left, ...right]).size || 1;
  return intersection / union;
}

function signatureLookup(technology, signature) {
  const signatureKey = lookup(signature);
  if (!signatureKey) return '';
  return `${lookup(technology)}::${signatureKey}`;
}

function looksGeneric(value) {
  const text = cleanText(value).toLowerCase();
  if (!text) return true;
  return [
    /^error$/,
    /^fix error$/,
    /^how to fix$/,
    /common issue$/,
    /not working$/,
    /something went wrong$/,
  ].some((pattern) => pattern.test(text));
}

function inferQuickFix(candidate) {
  const text = `${candidate.title ?? ''} ${candidate.error_signature ?? ''} ${candidate.search_intent ?? ''}`.toLowerCase();
  if (text.includes('rate') || text.includes('quota') || text.includes('429') || text.includes('529')) {
    return 'Reduce request pressure, verify account limits, and retry with backoff after confirming the failing workflow.';
  }
  if (text.includes('auth') || text.includes('login') || text.includes('401')) {
    return 'Verify the active account session, credentials, provider configuration, and environment used by the failing tool.';
  }
  if (text.includes('model') || text.includes('not found')) {
    return 'Verify the requested model name, provider route, and account access before retrying the smallest request.';
  }
  if (text.includes('port') || text.includes('address already in use')) {
    return 'Find the process or container using the host port, then stop it or remap the service port.';
  }
  if (text.includes('deployment') || text.includes('build')) {
    return 'Check the build command, project root, output directory, and deployment environment variables before redeploying.';
  }
  return 'Capture the exact error, compare the failing environment with a known working setup, and change one variable at a time.';
}

function uniqueStrings(values) {
  if (!values) return [];
  const list = Array.isArray(values) ? values : [values];
  return [...new Set(list.map(cleanText).filter(Boolean))];
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, 'utf8'));
}

async function writeJson(filePath, value) {
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function lookup(value) {
  return normalizeSlug(value);
}

function cleanText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}
