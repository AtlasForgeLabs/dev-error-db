import type { CollectionEntry } from 'astro:content';
import legacyPublishedSlugs from '../../config/legacy-published-slugs.json';
import { getHybridConfigFromPublishGate, getPublishGateConfig, type PublishGateConfig } from './hybrid-config';
import {
  applyNewHtmlRunCap,
  buildPublishManifest,
  evaluatePublishGate,
  shouldGenerateStaticHtmlFromGate,
  type PublishGateCandidate,
  type PublishManifest,
} from './publish-gate';
import { deriveEvidenceSchema, type EvidenceStatus } from './evidence';
import { getUpdatedTimestamp } from './dates';
import { categoryLabelFor, entrySlug, revenueHubLabels } from './taxonomy';

type ErrorEntry = CollectionEntry<'errors'>;

export type IndexabilityStatus = 'indexable_html' | 'data_only' | 'legacy_preserved' | 'pending_review';

export type ErrorIndexabilityRecord = {
  slug: string;
  title: string;
  description: string;
  category: string;
  technology: string;
  evidence_status: EvidenceStatus;
  source_count: number;
  source_backed: boolean;
  updated_at: string | null;
  indexability_status: IndexabilityStatus;
  data_only: boolean;
  legacy_preserved: boolean;
  url: string | null;
  has_static_page: boolean;
  static_priority_rank: number;
  publish_status: PublishGateCandidate['publish_status'];
  publish_reason: string;
  will_enter_json_index: boolean;
};

export type IndexabilitySummary = {
  generated_at: string;
  total_records: number;
  generated_static_error_pages: number;
  indexable_html: number;
  data_only: number;
  legacy_preserved: number;
  pending_review: number;
  max_static_error_pages: number;
  preserve_legacy_error_routes: boolean;
  enable_data_only_for_new_records: boolean;
  projected_html_if_strict_data_only: number;
  projected_reduction_if_strict_data_only: number;
};

const legacySlugSet = new Set(legacyPublishedSlugs as string[]);

const importantCategories = new Set(revenueHubLabels);

function hasText(value: string | undefined | null) {
  return Boolean(value && value.trim());
}

function bodyDepth(entry: ErrorEntry) {
  const body = entry.body?.trim() ?? '';
  const stripped = body.replace(/^---[\s\S]*?---\n?/, '').trim();
  return stripped.length;
}

function hasMinimumFields(entry: ErrorEntry) {
  return (
    hasText(entry.data.title) &&
    hasText(entry.data.description) &&
    hasText(entry.data.error_signature) &&
    hasText(entry.data.quick_fix) &&
    Array.isArray(entry.data.common_causes) &&
    entry.data.common_causes.length > 0 &&
    hasText(entry.data.category) &&
    hasText(entry.data.technology)
  );
}

function isLegacyPublishedSlug(slug: string, config: Pick<PublishGateConfig, 'preserveLegacyErrorRoutes'>) {
  if (!config.preserveLegacyErrorRoutes) return false;
  return legacySlugSet.has(slug);
}

function isHighValueCategory(entry: ErrorEntry) {
  const label = categoryLabelFor(entry);
  return importantCategories.has(label) || importantCategories.has(entry.data.category) || importantCategories.has(entry.data.technology);
}

function classifyRawStatus(entry: ErrorEntry): Exclude<IndexabilityStatus, 'legacy_preserved'> {
  if (!hasMinimumFields(entry)) {
    return 'pending_review';
  }

  const evidence = deriveEvidenceSchema(entry);
  const depth = bodyDepth(entry);
  const hasUpdated = Boolean(getUpdatedTimestamp(entry));

  if (!hasUpdated || depth < 900) {
    return 'pending_review';
  }

  const strongSource =
    evidence.source_backed || (evidence.evidence_status === 'partial_source' && evidence.source_count >= 2);
  const moderateSource = evidence.source_count > 0 || evidence.evidence_status === 'partial_source';
  const richContent = depth >= 1_600 && entry.data.common_causes.length >= 2;

  if (strongSource || (moderateSource && richContent && isHighValueCategory(entry))) {
    return 'indexable_html';
  }

  if (evidence.evidence_status === 'needs_source' || (!moderateSource && depth < 1_200)) {
    return 'data_only';
  }

  if (moderateSource || richContent || isHighValueCategory(entry)) {
    return 'indexable_html';
  }

  return 'data_only';
}

export function staticPriorityScore(entry: ErrorEntry) {
  const evidence = deriveEvidenceSchema(entry);
  const label = categoryLabelFor(entry);
  const depth = bodyDepth(entry);
  const updatedMs = Date.parse(getUpdatedTimestamp(entry) ?? '') || 0;
  const recencyDays = updatedMs ? Math.max(0, Math.floor((Date.now() - updatedMs) / 86_400_000)) : 999;
  const recencyScore = Math.max(0, 30 - Math.min(30, recencyDays));

  let score = 0;
  if (evidence.source_backed) score += 10_000;
  else if (evidence.evidence_status === 'partial_source') score += 5_000;
  score += evidence.source_count * 500;
  if (importantCategories.has(label)) score += 2_000;
  score += Math.min(1_500, Math.floor(depth / 4));
  score += recencyScore * 10;

  return score;
}

export function classifyErrorIndexability(
  entry: ErrorEntry,
  config = getHybridConfigFromPublishGate()
): Omit<ErrorIndexabilityRecord, 'has_static_page' | 'url' | 'static_priority_rank' | 'publish_status' | 'publish_reason' | 'will_enter_json_index'> & {
  raw_status: Exclude<IndexabilityStatus, 'legacy_preserved'>;
  static_priority_rank: number;
  publish_status: PublishGateCandidate['publish_status'];
  publish_reason: string;
  will_enter_json_index: boolean;
} {
  const slug = entrySlug(entry);
  const evidence = deriveEvidenceSchema(entry);
  const raw_status = classifyRawStatus(entry);
  const gate = evaluatePublishGate(entry, getPublishGateConfig());
  const legacy_preserved = gate.existing_legacy || (raw_status === 'data_only' && isLegacyPublishedSlug(slug, config));
  let indexability_status: IndexabilityStatus = raw_status;

  if (legacy_preserved) {
    indexability_status = 'legacy_preserved';
  } else if (gate.publish_status === 'data_only') {
    indexability_status = 'data_only';
  } else if (gate.publish_status === 'needs_review') {
    indexability_status = 'pending_review';
  } else if (gate.publish_status === 'indexable_html' || gate.publish_status === 'publish_candidate') {
    indexability_status = 'indexable_html';
  }

  const data_only = indexability_status === 'data_only';

  return {
    slug,
    title: entry.data.title,
    description: entry.data.description,
    category: entry.data.category,
    technology: entry.data.technology,
    evidence_status: evidence.evidence_status,
    source_count: evidence.source_count,
    source_backed: evidence.source_backed,
    updated_at: getUpdatedTimestamp(entry),
    indexability_status,
    data_only,
    legacy_preserved,
    raw_status,
    static_priority_rank: staticPriorityScore(entry),
    publish_status: gate.publish_status,
    publish_reason: gate.reason,
    will_enter_json_index: gate.will_enter_json_index,
  };
}

export function shouldGenerateStaticHtml(
  classification: ReturnType<typeof classifyErrorIndexability>,
  config = getHybridConfigFromPublishGate()
) {
  const gateCandidate: PublishGateCandidate = {
    slug: classification.slug,
    title: classification.title,
    category: classification.category,
    technology: classification.technology,
    evidence_status: classification.evidence_status,
    source_count: classification.source_count,
    content_depth: 0,
    score: classification.static_priority_rank,
    publish_status: classification.publish_status,
    reason: classification.publish_reason,
    will_generate_html: classification.legacy_preserved || classification.publish_status === 'legacy_preserved',
    will_enter_json_index: classification.will_enter_json_index,
    existing_legacy: classification.legacy_preserved,
  };

  if (classification.legacy_preserved && config.preserveLegacyErrorRoutes) {
    return true;
  }

  if (classification.publish_status === 'legacy_preserved') {
    return true;
  }

  if (classification.publish_status === 'rejected' || classification.publish_status === 'needs_review') {
    return false;
  }

  if (classification.publish_status === 'data_only') {
    return false;
  }

  if (
    classification.publish_status === 'indexable_html' ||
    classification.publish_status === 'publish_candidate' ||
    classification.publish_status === 'scored' ||
    classification.publish_status === 'deduped' ||
    classification.publish_status === 'raw_candidate'
  ) {
    return classification.indexability_status !== 'data_only';
  }

  if (classification.indexability_status === 'pending_review') {
    return false;
  }

  return classification.indexability_status === 'indexable_html';
}

export function selectStaticErrorEntries(entries: ErrorEntry[], config = getHybridConfigFromPublishGate()) {
  const publishConfig = getPublishGateConfig();
  const gateEvaluated = entries.map((entry) => evaluatePublishGate(entry, publishConfig));
  const gatedCandidates = applyNewHtmlRunCap(gateEvaluated, publishConfig);
  const gateBySlug = new Map(gatedCandidates.map((candidate) => [candidate.slug, candidate]));
  const classified = entries.map((entry) => classifyErrorIndexability(entry, config));
  const selected = new Map<string, (typeof classified)[number]>();

  for (const record of classified) {
    const gate = gateBySlug.get(record.slug);
  const htmlAllowed = gate ? shouldGenerateStaticHtmlFromGate(gate) : shouldGenerateStaticHtml(record, config);
    if (htmlAllowed) {
      selected.set(record.slug, record);
    }
  }

  if (config.maxStaticErrorPages > 0 && selected.size > config.maxStaticErrorPages) {
    const protectedSlugs = new Set(
      classified.filter((record) => record.legacy_preserved || record.indexability_status === 'pending_review').map((record) => record.slug)
    );
    const capped = new Map<string, (typeof classified)[number]>();

    for (const slug of protectedSlugs) {
      const record = classified.find((item) => item.slug === slug);
      if (record) capped.set(slug, record);
    }

    const candidates = classified
      .filter((record) => !protectedSlugs.has(record.slug) && shouldGenerateStaticHtml(record, config))
      .sort((a, b) => b.static_priority_rank - a.static_priority_rank || a.slug.localeCompare(b.slug));

    for (const record of candidates) {
      if (capped.size >= config.maxStaticErrorPages) break;
      capped.set(record.slug, record);
    }

    return {
      staticEntries: entries.filter((entry) => capped.has(entrySlug(entry))),
      classifications: classified.map((record) => {
        const has_static_page = capped.has(record.slug);
        return finalizeRecord(record, has_static_page);
      }),
      config,
    };
  }

  return {
    staticEntries: entries.filter((entry) => selected.has(entrySlug(entry))),
    classifications: classified.map((record) => {
      const has_static_page = selected.has(record.slug);
      return finalizeRecord(record, has_static_page);
    }),
    config,
  };
}

function finalizeRecord(
  record: ReturnType<typeof classifyErrorIndexability>,
  has_static_page: boolean
): ErrorIndexabilityRecord {
  return {
    slug: record.slug,
    title: record.title,
    description: record.description,
    category: record.category,
    technology: record.technology,
    evidence_status: record.evidence_status,
    source_count: record.source_count,
    source_backed: record.source_backed,
    updated_at: record.updated_at,
    indexability_status: record.indexability_status,
    data_only: record.data_only,
    legacy_preserved: record.legacy_preserved,
    has_static_page,
    url: has_static_page ? `https://dev-error-db.com/errors/${record.slug}/` : null,
    static_priority_rank: record.static_priority_rank,
    publish_status: record.publish_status,
    publish_reason: record.publish_reason,
    will_enter_json_index: record.will_enter_json_index,
  };
}

export function buildIndexabilitySummary(classifications: ErrorIndexabilityRecord[], config = getHybridConfigFromPublishGate()): IndexabilitySummary {
  const generated = classifications.filter((record) => record.has_static_page).length;
  const indexable_html = classifications.filter((record) => record.indexability_status === 'indexable_html').length;
  const data_only = classifications.filter((record) => record.indexability_status === 'data_only').length;
  const legacy_preserved = classifications.filter((record) => record.legacy_preserved).length;
  const pending_review = classifications.filter((record) => record.indexability_status === 'pending_review').length;
  const strictHtml = classifications.filter(
    (record) => record.indexability_status === 'indexable_html' || record.indexability_status === 'pending_review'
  ).length;

  return {
    generated_at: new Date().toISOString(),
    total_records: classifications.length,
    generated_static_error_pages: generated,
    indexable_html,
    data_only,
    legacy_preserved,
    pending_review,
    max_static_error_pages: config.maxStaticErrorPages,
    preserve_legacy_error_routes: config.preserveLegacyErrorRoutes,
    enable_data_only_for_new_records: config.enableDataOnlyForNewRecords,
    projected_html_if_strict_data_only: strictHtml,
    projected_reduction_if_strict_data_only: Math.max(0, generated - strictHtml),
  };
}

export function isLegacySlug(slug: string) {
  return legacySlugSet.has(slug);
}
