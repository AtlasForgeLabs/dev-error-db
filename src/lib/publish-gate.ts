import type { CollectionEntry } from 'astro:content';
import type { EvidenceStatus } from './evidence';
import { deriveEvidenceSchema } from './evidence';
import { getUpdatedTimestamp } from './dates';
import { categoryLabelFor, entrySlug, revenueHubLabels } from './taxonomy';
import { getPublishGateConfig, type PublishGateConfig } from './hybrid-config';
import { isLegacySlug, staticPriorityScore } from './indexability';

type ErrorEntry = CollectionEntry<'errors'>;

export type PublishStatus =
  | 'raw_candidate'
  | 'deduped'
  | 'scored'
  | 'publish_candidate'
  | 'indexable_html'
  | 'data_only'
  | 'rejected'
  | 'needs_review'
  | 'legacy_preserved';

export type PublishGateCandidate = {
  slug: string;
  title: string;
  category: string;
  technology: string;
  evidence_status: EvidenceStatus;
  source_count: number;
  content_depth: number;
  score: number;
  publish_status: PublishStatus;
  reason: string;
  will_generate_html: boolean;
  will_enter_json_index: boolean;
  existing_legacy: boolean;
};

export type PublishManifestSummary = {
  generated_at: string;
  total_error_records: number;
  legacy_published_count: number;
  new_candidate_count: number;
  accepted_new_html_count: number;
  data_only_count: number;
  rejected_count: number;
  needs_review_count: number;
  max_static_error_pages: number;
  max_new_html_per_run: number;
  min_source_count_for_new_html: number;
  min_content_depth_for_new_html: number;
  build_budget_status: 'ok' | 'warn' | 'fail';
  reasons_summary: Record<string, number>;
};

export type PublishManifest = PublishManifestSummary & {
  candidates: PublishGateCandidate[];
  build_budget: {
    generated_total_pages: number;
    generated_error_html_pages: number;
    generated_json_indexes: number;
    sitemap_url_count: number;
    new_html_pages_this_run: number;
    projected_growth_rate: number;
  };
};

const importantCategories = new Set(revenueHubLabels);

function bodyDepth(entry: ErrorEntry) {
  const body = entry.body?.trim() ?? '';
  return body.replace(/^---[\s\S]*?---\n?/, '').trim().length;
}

function hasMinimumFields(entry: ErrorEntry) {
  return (
    Boolean(entry.data.title?.trim()) &&
    Boolean(entry.data.description?.trim()) &&
    Boolean(entry.data.error_signature?.trim()) &&
    Boolean(entry.data.quick_fix?.trim()) &&
    Array.isArray(entry.data.common_causes) &&
    entry.data.common_causes.length > 0 &&
    Boolean(entry.data.category?.trim()) &&
    Boolean(entry.data.technology?.trim())
  );
}

function isHighValueCategory(entry: ErrorEntry) {
  const label = categoryLabelFor(entry);
  return importantCategories.has(label) || importantCategories.has(entry.data.category) || importantCategories.has(entry.data.technology);
}

export function evaluatePublishGate(
  entry: ErrorEntry,
  config: PublishGateConfig = getPublishGateConfig()
): PublishGateCandidate {
  const slug = entrySlug(entry);
  const evidence = deriveEvidenceSchema(entry);
  const depth = bodyDepth(entry);
  const score = staticPriorityScore(entry);
  const existing_legacy = config.preserveLegacyErrorRoutes && isLegacySlug(slug);

  if (existing_legacy) {
    return {
      slug,
      title: entry.data.title,
      category: entry.data.category,
      technology: entry.data.technology,
      evidence_status: evidence.evidence_status,
      source_count: evidence.source_count,
      content_depth: depth,
      score,
      publish_status: 'legacy_preserved',
      reason: 'Slug is listed in legacy-published-slugs.json and keeps its static HTML route.',
      will_generate_html: true,
      will_enter_json_index: true,
      existing_legacy: true,
    };
  }

  if (!hasMinimumFields(entry)) {
    return finalizeCandidate({
      slug,
      entry,
      evidence,
      depth,
      score,
      publish_status: 'needs_review',
      reason: 'Missing required frontmatter fields for publish review.',
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  if (!getUpdatedTimestamp(entry)) {
    return finalizeCandidate({
      slug,
      entry,
      evidence,
      depth,
      score,
      publish_status: 'needs_review',
      reason: 'Missing valid updated timestamp.',
      will_generate_html: false,
      existing_legacy: false,
    });
  }

  if (evidence.source_count < config.minSourceCountForNewHtml) {
    return finalizeCandidate({
      slug,
      entry,
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
    return finalizeCandidate({
      slug,
      entry,
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
    return finalizeCandidate({
      slug,
      entry,
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
  const richContent = depth >= 1_600 && entry.data.common_causes.length >= 2;

  if (strongSource || (moderateSource && richContent && isHighValueCategory(entry))) {
    return finalizeCandidate({
      slug,
      entry,
      evidence,
      depth,
      score,
      publish_status: 'indexable_html',
      reason: 'Passed publish gate with source-backed or high-value signals.',
      will_generate_html: true,
      existing_legacy: false,
    });
  }

  if (moderateSource || richContent || isHighValueCategory(entry)) {
    return finalizeCandidate({
      slug,
      entry,
      evidence,
      depth,
      score,
      publish_status: 'publish_candidate',
      reason: 'Passed minimum publish thresholds with moderate source or category signals.',
      will_generate_html: true,
      existing_legacy: false,
    });
  }

  return finalizeCandidate({
    slug,
    entry,
    evidence,
    depth,
    score,
    publish_status: config.enableDataOnlyForNewRecords ? 'data_only' : 'needs_review',
    reason: 'Did not meet source, depth, or category thresholds for new static HTML.',
    will_generate_html: false,
    existing_legacy: false,
  });
}

function finalizeCandidate(input: {
  slug: string;
  entry: ErrorEntry;
  evidence: ReturnType<typeof deriveEvidenceSchema>;
  depth: number;
  score: number;
  publish_status: PublishStatus;
  reason: string;
  will_generate_html: boolean;
  existing_legacy: boolean;
}): PublishGateCandidate {
  return {
    slug: input.slug,
    title: input.entry.data.title,
    category: input.entry.data.category,
    technology: input.entry.data.technology,
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

export function applyNewHtmlRunCap(candidates: PublishGateCandidate[], config: PublishGateConfig = getPublishGateConfig()) {
  const newHtmlCandidates = candidates
    .filter((candidate) => !candidate.existing_legacy && candidate.will_generate_html)
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug));

  if (config.maxNewHtmlPerRun <= 0 || newHtmlCandidates.length <= config.maxNewHtmlPerRun) {
    return candidates;
  }

  const allowed = new Set(newHtmlCandidates.slice(0, config.maxNewHtmlPerRun).map((candidate) => candidate.slug));

  return candidates.map((candidate) => {
    if (candidate.existing_legacy || !candidate.will_generate_html) {
      return candidate;
    }

    if (allowed.has(candidate.slug)) {
      return candidate;
    }

    return {
      ...candidate,
      will_generate_html: false,
      publish_status: candidate.publish_status === 'legacy_preserved' ? candidate.publish_status : 'data_only',
      reason: `${candidate.reason} Capped by MAX_NEW_HTML_PER_RUN (${config.maxNewHtmlPerRun}).`,
    };
  });
}

export function buildPublishManifest(
  entries: ErrorEntry[],
  options: {
    config?: PublishGateConfig;
    generatedTotalPages?: number;
    generatedErrorHtmlPages?: number;
    generatedJsonIndexes?: number;
    sitemapUrlCount?: number;
  } = {}
): PublishManifest {
  const config = options.config ?? getPublishGateConfig();
  const evaluated = entries.map((entry) => evaluatePublishGate(entry, config));
  const candidates = applyNewHtmlRunCap(evaluated, config);

  const legacy_published_count = candidates.filter((candidate) => candidate.existing_legacy).length;
  const newCandidates = candidates.filter((candidate) => !candidate.existing_legacy);
  const accepted_new_html_count = newCandidates.filter((candidate) => candidate.will_generate_html).length;
  const data_only_count = candidates.filter((candidate) => candidate.publish_status === 'data_only').length;
  const rejected_count = candidates.filter((candidate) => candidate.publish_status === 'rejected').length;
  const needs_review_count = candidates.filter((candidate) => candidate.publish_status === 'needs_review').length;

  const reasons_summary: Record<string, number> = {};
  for (const candidate of candidates) {
    const key = candidate.publish_status;
    reasons_summary[key] = (reasons_summary[key] ?? 0) + 1;
  }

  const generated_error_html_pages =
    options.generatedErrorHtmlPages ?? candidates.filter((candidate) => candidate.will_generate_html).length;
  const generated_total_pages = options.generatedTotalPages ?? generated_error_html_pages;
  const build_budget_status = resolveBuildBudgetStatus({
    config,
    accepted_new_html_count,
    generated_total_pages,
    new_html_pages_this_run: accepted_new_html_count,
  });

  return {
    generated_at: new Date().toISOString(),
    total_error_records: candidates.length,
    legacy_published_count,
    new_candidate_count: newCandidates.length,
    accepted_new_html_count,
    data_only_count,
    rejected_count,
    needs_review_count,
    max_static_error_pages: config.maxStaticErrorPages,
    max_new_html_per_run: config.maxNewHtmlPerRun,
    min_source_count_for_new_html: config.minSourceCountForNewHtml,
    min_content_depth_for_new_html: config.minContentDepthForNewHtml,
    build_budget_status,
    reasons_summary,
    candidates,
    build_budget: {
      generated_total_pages,
      generated_error_html_pages,
      generated_json_indexes: options.generatedJsonIndexes ?? 0,
      sitemap_url_count: options.sitemapUrlCount ?? 0,
      new_html_pages_this_run: accepted_new_html_count,
      projected_growth_rate: legacy_published_count > 0 ? Number((accepted_new_html_count / legacy_published_count).toFixed(4)) : 0,
    },
  };
}

function resolveBuildBudgetStatus(input: {
  config: PublishGateConfig;
  accepted_new_html_count: number;
  generated_total_pages: number;
  new_html_pages_this_run: number;
}): 'ok' | 'warn' | 'fail' {
  if (input.config.maxNewHtmlPerRun > 0 && input.new_html_pages_this_run > input.config.maxNewHtmlPerRun) {
    return 'fail';
  }

  if (input.config.softTotalPageLimit > 0 && input.generated_total_pages > input.config.softTotalPageLimit) {
    return 'warn';
  }

  return 'ok';
}

export function shouldGenerateStaticHtmlFromGate(candidate: PublishGateCandidate) {
  return candidate.will_generate_html;
}

export function renderPublishManifestMarkdown(manifest: PublishManifest) {
  const lines = [
    '# Dev Error DB publish manifest',
    '',
    `Generated: ${manifest.generated_at}`,
    '',
    '## Summary',
    '',
    `- Total error records: ${manifest.total_error_records}`,
    `- Legacy preserved: ${manifest.legacy_published_count}`,
    `- New candidates: ${manifest.new_candidate_count}`,
    `- Accepted new HTML: ${manifest.accepted_new_html_count}`,
    `- Data only: ${manifest.data_only_count}`,
    `- Needs review: ${manifest.needs_review_count}`,
    `- Rejected: ${manifest.rejected_count}`,
    `- Build budget status: ${manifest.build_budget_status}`,
    `- MAX_NEW_HTML_PER_RUN: ${manifest.max_new_html_per_run}`,
    `- MAX_STATIC_ERROR_PAGES: ${manifest.max_static_error_pages}`,
    '',
    '## Build budget',
    '',
    `- Generated total pages: ${manifest.build_budget.generated_total_pages}`,
    `- Generated error HTML pages: ${manifest.build_budget.generated_error_html_pages}`,
    `- JSON indexes: ${manifest.build_budget.generated_json_indexes}`,
    `- Sitemap URLs: ${manifest.build_budget.sitemap_url_count}`,
    `- New HTML this run: ${manifest.build_budget.new_html_pages_this_run}`,
    '',
    '## New candidates pending HTML',
    '',
  ];

  const gated = manifest.candidates.filter((candidate) => !candidate.existing_legacy);
  if (gated.length === 0) {
    lines.push('- None');
  } else {
    for (const candidate of gated.slice(0, 50)) {
      lines.push(
        `- \`${candidate.slug}\` — ${candidate.publish_status}; html=${candidate.will_generate_html ? 'yes' : 'no'}; score=${candidate.score}; ${candidate.reason}`
      );
    }
    if (gated.length > 50) {
      lines.push(`- ...and ${gated.length - 50} more`);
    }
  }

  return `${lines.join('\n')}\n`;
}
