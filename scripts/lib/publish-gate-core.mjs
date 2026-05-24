import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export function getPublishGateConfigFromEnv() {
  return {
    maxStaticErrorPages: readEnvInt('MAX_STATIC_ERROR_PAGES', 0),
    maxNewHtmlPerRun: readEnvInt('MAX_NEW_HTML_PER_RUN', 100),
    minSourceCountForNewHtml: readEnvInt('MIN_SOURCE_COUNT_FOR_NEW_HTML', 1),
    minContentDepthForNewHtml: readEnvInt('MIN_CONTENT_DEPTH_FOR_NEW_HTML', 1200),
    preserveLegacyErrorRoutes: readEnvBool('PRESERVE_LEGACY_ERROR_ROUTES', true),
    enableDataOnlyForNewRecords: readEnvBool('ENABLE_DATA_ONLY_FOR_NEW_RECORDS', true),
    softTotalPageLimit: readEnvInt('SOFT_TOTAL_PAGE_LIMIT', 2500),
  };
}

export function loadLegacySlugs() {
  const legacyPath = path.join(rootDir, 'config', 'legacy-published-slugs.json');
  return new Set(JSON.parse(readFileSync(legacyPath, 'utf8')));
}

export function extractSourceUrls(markdownBody = '') {
  return [...String(markdownBody).matchAll(/https?:\/\/[^\s)\]<>"]+/g)]
    .map((match) => match[0].replace(/[.,;:]+$/, ''))
    .filter((url, index, urls) => urls.indexOf(url) === index);
}

export function deriveEvidenceFromBody(body = '') {
  const urls = extractSourceUrls(body);
  const sourcesChecked = /(?:^|\n)##\s+Sources checked\b/i.test(body);
  let evidence_status = 'general_guidance';
  if (urls.length > 0 && sourcesChecked) evidence_status = 'source_backed';
  else if (urls.length > 0) evidence_status = 'partial_source';
  else if (sourcesChecked) evidence_status = 'needs_source';
  return {
    source_count: urls.length,
    source_backed: evidence_status === 'source_backed',
    evidence_status,
  };
}

const importantCategories = new Set([
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

export function evaluateSeedPublishGate(seed, renderedBody, legacySlugs, config = getPublishGateConfigFromEnv()) {
  const slug = seed.slug;
  const evidence = deriveEvidenceFromBody(renderedBody);
  const depth = String(renderedBody).trim().length;
  const existing_legacy = config.preserveLegacyErrorRoutes && legacySlugs.has(slug);
  const score = scoreSeed(seed, evidence, depth);

  if (existing_legacy) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: 'legacy_preserved',
      reason: 'Slug is listed in legacy-published-slugs.json and keeps its static HTML route.',
      will_generate_html: true,
      existing_legacy: true,
    });
  }

  if (!hasSeedMinimumFields(seed)) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: 'needs_review',
      reason: 'Missing required seed fields for publish review.',
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  if (evidence.source_count < config.minSourceCountForNewHtml) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: config.enableDataOnlyForNewRecords ? 'data_only' : 'needs_review',
      reason: `Source count ${evidence.source_count} is below MIN_SOURCE_COUNT_FOR_NEW_HTML (${config.minSourceCountForNewHtml}).`,
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  if (depth < config.minContentDepthForNewHtml) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: config.enableDataOnlyForNewRecords ? 'data_only' : 'needs_review',
      reason: `Content depth ${depth} is below MIN_CONTENT_DEPTH_FOR_NEW_HTML (${config.minContentDepthForNewHtml}).`,
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  if (evidence.evidence_status === 'needs_source') {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: 'needs_review',
      reason: 'Sources checked section exists but no public source URLs were found.',
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  const strongSource =
    evidence.source_backed || (evidence.evidence_status === 'partial_source' && evidence.source_count >= 2);
  const moderateSource = evidence.source_count > 0 || evidence.evidence_status === 'partial_source';
  const richContent = depth >= 1_600 && Array.isArray(seed.common_causes) && seed.common_causes.length >= 2;
  const highValue = importantCategories.has(seed.category) || importantCategories.has(seed.technology);

  if (strongSource || (moderateSource && richContent && highValue)) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: 'indexable_html',
      reason: 'Passed publish gate with source-backed or high-value signals.',
      will_generate_html: true,
      existing_legacy: false,
    });
  }

  if (moderateSource || richContent || highValue) {
    return gateResult({
      slug,
      seed,
      evidence,
      depth,
      score,
      publish_status: 'publish_candidate',
      reason: 'Passed minimum publish thresholds with moderate source or category signals.',
      will_generate_html: true,
      existing_legacy: false,
    });
  }

  return gateResult({
    slug,
    seed,
    evidence,
    depth,
    score,
    publish_status: config.enableDataOnlyForNewRecords ? 'data_only' : 'needs_review',
    reason: 'Did not meet source, depth, or category thresholds for new static HTML.',
    will_generate_html: false,
    existing_legacy: false,
  });
}

function gateResult(input) {
  return {
    slug: input.slug,
    title: input.seed.title,
    category: input.seed.category,
    technology: input.seed.technology,
    evidence_status: input.evidence.evidence_status,
    source_count: input.evidence.source_count,
    content_depth: input.depth,
    score: input.score,
    publish_status: input.publish_status,
    reason: input.reason,
    will_generate_html: input.will_generate_html,
    will_enter_json_index: true,
    existing_legacy: input.existing_legacy,
  };
}

function hasSeedMinimumFields(seed) {
  return (
    Boolean(seed.title?.trim()) &&
    Boolean(seed.description?.trim()) &&
    Boolean(seed.error_signature?.trim()) &&
    Boolean(seed.quick_fix?.trim()) &&
    Array.isArray(seed.common_causes) &&
    seed.common_causes.length > 0 &&
    Boolean(seed.category?.trim()) &&
    Boolean(seed.technology?.trim())
  );
}

function scoreSeed(seed, evidence, depth) {
  let score = 0;
  if (evidence.source_backed) score += 10_000;
  else if (evidence.evidence_status === 'partial_source') score += 5_000;
  score += evidence.source_count * 500;
  if (importantCategories.has(seed.category)) score += 2_000;
  score += Math.min(1_500, Math.floor(depth / 4));
  return score;
}

function readEnvInt(name, fallback) {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const parsed = Number.parseInt(String(raw), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function readEnvBool(name, fallback) {
  const raw = process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const normalized = String(raw).trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  return fallback;
}
