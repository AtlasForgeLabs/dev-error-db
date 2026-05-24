import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CollectionEntry } from 'astro:content';
import type { ErrorIndexabilityRecord } from './indexability';
import { isLegacySlug } from './indexability';
import { getPublishGateConfig } from './hybrid-config';
import { evaluatePublishGate, type PublishGateCandidate } from './publish-gate';
import { extractSeedSources, renderSourcesCheckedSection, type SeedLike } from './seed-sources';
import { entrySlug } from './taxonomy';

type ErrorEntry = CollectionEntry<'errors'>;

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

type StagingGateRecord = {
  slug: string;
  title: string;
  category: string;
  technology: string;
  evidence_status: ErrorIndexabilityRecord['evidence_status'];
  source_count: number;
  publish_status: PublishGateCandidate['publish_status'];
  reason: string;
  will_generate_html: boolean;
  will_enter_json_index: boolean;
  existing_legacy: boolean;
};

function readJsonIfExists<T>(relativePath: string): T | null {
  const filePath = path.join(rootDir, relativePath);
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, 'utf8')) as T;
}

function estimateSeedBody(seed: SeedLike) {
  const sourcesSection = renderSourcesCheckedSection(seed) ?? '';
  const description = String(seed.description ?? '');
  const causes = Array.isArray(seed.common_causes) ? seed.common_causes.join('\n') : '';
  return `${description}\n${causes}\n${sourcesSection}`.trim();
}

function deriveEvidenceFromBody(body: string) {
  const urls = [...body.matchAll(/https?:\/\/[^\s)\]<>"]+/g)]
    .map((match) => match[0].replace(/[.,;:]+$/, ''))
    .filter((url, index, list) => list.indexOf(url) === index);
  const sourcesChecked = /(?:^|\n)##\s+Sources checked\b/i.test(body);
  let evidence_status: ErrorIndexabilityRecord['evidence_status'] = 'general_guidance';
  if (urls.length > 0 && sourcesChecked) evidence_status = 'source_backed';
  else if (urls.length > 0) evidence_status = 'partial_source';
  else if (sourcesChecked) evidence_status = 'needs_source';
  return {
    evidence_status,
    source_count: urls.length,
    source_backed: evidence_status === 'source_backed',
  };
}

function seedToIndexabilityRecord(seed: SeedLike, gate: StagingGateRecord): ErrorIndexabilityRecord {
  const body = estimateSeedBody(seed);
  const evidence = deriveEvidenceFromBody(body);
  const slug = String(seed.slug);
  const legacy = gate.existing_legacy || isLegacySlug(slug);
  let indexability_status: ErrorIndexabilityRecord['indexability_status'] = 'data_only';

  if (legacy) indexability_status = 'legacy_preserved';
  else if (gate.publish_status === 'needs_review') indexability_status = 'pending_review';
  else if (gate.publish_status === 'data_only') indexability_status = 'data_only';
  else if (gate.publish_status === 'indexable_html' || gate.publish_status === 'publish_candidate') indexability_status = 'indexable_html';

  return {
    slug,
    title: String(seed.title ?? slug),
    description: String(seed.description ?? ''),
    category: String(seed.category ?? seed.technology ?? 'General'),
    technology: String(seed.technology ?? seed.category ?? 'General'),
    evidence_status: evidence.evidence_status,
    source_count: evidence.source_count,
    source_backed: evidence.source_backed,
    updated_at: new Date().toISOString().slice(0, 10),
    indexability_status,
    data_only: indexability_status === 'data_only',
    legacy_preserved: legacy,
    has_static_page: false,
    url: null,
    static_priority_rank: 0,
    publish_status: gate.publish_status,
    publish_reason: gate.reason,
    will_enter_json_index: gate.will_enter_json_index,
    error_signature: typeof seed.error_signature === 'string' ? seed.error_signature : null,
  };
}

function stagingRecordToIndexability(record: StagingGateRecord, seed?: SeedLike): ErrorIndexabilityRecord {
  const evidenceStatus =
    record.source_count > 0 ? ('partial_source' as const) : ('general_guidance' as const);
  let indexability_status: ErrorIndexabilityRecord['indexability_status'] = 'data_only';
  if (record.existing_legacy) indexability_status = 'legacy_preserved';
  else if (record.publish_status === 'needs_review') indexability_status = 'pending_review';
  else if (record.publish_status === 'data_only') indexability_status = 'data_only';

  return {
    slug: record.slug,
    title: record.title,
    description: seed?.description ? String(seed.description) : `${record.title} troubleshooting record indexed without a standalone HTML guide.`,
    category: record.category,
    technology: record.technology,
    evidence_status: record.evidence_status ?? evidenceStatus,
    source_count: record.source_count ?? 0,
    source_backed: record.evidence_status === 'source_backed',
    updated_at: new Date().toISOString().slice(0, 10),
    indexability_status,
    data_only: indexability_status === 'data_only',
    legacy_preserved: record.existing_legacy,
    has_static_page: false,
    url: null,
    static_priority_rank: 0,
    publish_status: record.publish_status,
    publish_reason: record.reason,
    will_enter_json_index: record.will_enter_json_index,
    error_signature: seed?.error_signature ? String(seed.error_signature) : null,
  };
}

function loadSeedMap() {
  const seeds = readJsonIfExists<SeedLike[]>('data/error-seeds.json') ?? [];
  return new Map(seeds.filter((seed) => seed.slug).map((seed) => [String(seed.slug), seed]));
}

function loadStagingRecords() {
  const dataOnly = readJsonIfExists<StagingGateRecord[]>('automation/runtime/publish-staging/data-only-candidates.json') ?? [];
  const needsReview =
    readJsonIfExists<StagingGateRecord[]>('automation/runtime/publish-staging/needs-review-candidates.json') ?? [];
  return { dataOnly, needsReview };
}

export function mergeSupplementalCatalogRecords(entries: ErrorEntry[], baseRecords: ErrorIndexabilityRecord[]) {
  const entrySlugs = new Set(entries.map((entry) => entrySlug(entry)));
  const existingSlugs = new Set(baseRecords.map((record) => record.slug));
  const seedMap = loadSeedMap();
  const supplemental: ErrorIndexabilityRecord[] = [];
  const hidden = { needs_review: 0, rejected: 0 };

  for (const record of baseRecords) {
    if (record.publish_status === 'needs_review' && !record.has_static_page) hidden.needs_review += 1;
    if (record.publish_status === 'rejected') hidden.rejected += 1;
  }

  const { dataOnly, needsReview } = loadStagingRecords();
  hidden.needs_review += needsReview.length;

  for (const staged of [...dataOnly, ...needsReview]) {
    if (entrySlugs.has(staged.slug) || existingSlugs.has(staged.slug)) continue;
    supplemental.push(stagingRecordToIndexability(staged, seedMap.get(staged.slug)));
    existingSlugs.add(staged.slug);
  }

  for (const [slug, seed] of seedMap.entries()) {
    if (entrySlugs.has(slug) || existingSlugs.has(slug)) continue;
    const body = estimateSeedBody(seed);
    const gateLike = evaluateSeedGate(seed, body);
    if (!gateLike.will_enter_json_index || gateLike.will_generate_html) continue;
    supplemental.push(seedToIndexabilityRecord(seed, gateLike));
    existingSlugs.add(slug);
  }

  return { supplemental, hidden };
}

function evaluateSeedGate(seed: SeedLike, body: string): StagingGateRecord {
  const config = getPublishGateConfig();
  const slug = String(seed.slug);
  const evidence = deriveEvidenceFromBody(body);
  const existing_legacy = config.preserveLegacyErrorRoutes && isLegacySlug(slug);
  const hasMinimum =
    Boolean(String(seed.title ?? '').trim()) &&
    Boolean(String(seed.description ?? '').trim()) &&
    Boolean(String(seed.error_signature ?? '').trim()) &&
    Boolean(String(seed.quick_fix ?? '').trim()) &&
    Array.isArray(seed.common_causes) &&
    seed.common_causes.length > 0;

  if (existing_legacy) {
    return {
      slug,
      title: String(seed.title),
      category: String(seed.category),
      technology: String(seed.technology),
      evidence_status: evidence.evidence_status,
      source_count: evidence.source_count,
      publish_status: 'legacy_preserved',
      reason: 'Slug is listed in legacy-published-slugs.json and keeps its static HTML route.',
      will_generate_html: true,
      will_enter_json_index: true,
      existing_legacy: true,
    };
  }

  if (!hasMinimum) {
    return {
      slug,
      title: String(seed.title),
      category: String(seed.category),
      technology: String(seed.technology),
      evidence_status: evidence.evidence_status,
      source_count: evidence.source_count,
      publish_status: 'needs_review',
      reason: 'Missing required seed fields for publish review.',
      will_generate_html: false,
      will_enter_json_index: true,
      existing_legacy: false,
    };
  }

  if (evidence.source_count < config.minSourceCountForNewHtml) {
    return {
      slug,
      title: String(seed.title),
      category: String(seed.category),
      technology: String(seed.technology),
      evidence_status: evidence.evidence_status,
      source_count: evidence.source_count,
      publish_status: 'data_only',
      reason: `Source count ${evidence.source_count} is below MIN_SOURCE_COUNT_FOR_NEW_HTML (${config.minSourceCountForNewHtml}).`,
      will_generate_html: false,
      will_enter_json_index: true,
      existing_legacy: false,
    };
  }

  if (body.length < config.minContentDepthForNewHtml) {
    return {
      slug,
      title: String(seed.title),
      category: String(seed.category),
      technology: String(seed.technology),
      evidence_status: evidence.evidence_status,
      source_count: evidence.source_count,
      publish_status: 'data_only',
      reason: `Content depth ${body.length} is below MIN_CONTENT_DEPTH_FOR_NEW_HTML (${config.minContentDepthForNewHtml}).`,
      will_generate_html: false,
      will_enter_json_index: true,
      existing_legacy: false,
    };
  }

  return {
    slug,
    title: String(seed.title),
    category: String(seed.category),
    technology: String(seed.technology),
    evidence_status: evidence.evidence_status,
    source_count: evidence.source_count,
    publish_status: evidence.source_backed ? 'indexable_html' : 'publish_candidate',
    reason: 'Passed minimum publish thresholds with moderate source or category signals.',
    will_generate_html: true,
    will_enter_json_index: true,
    existing_legacy: false,
  };
}

export function signatureForEntry(entry: ErrorEntry) {
  return entry.data.error_signature ?? null;
}

export function signatureForRecord(record: ErrorIndexabilityRecord) {
  return record.error_signature ?? null;
}

export function gateRecordFromEntry(entry: ErrorEntry) {
  return evaluatePublishGate(entry, getPublishGateConfig());
}
