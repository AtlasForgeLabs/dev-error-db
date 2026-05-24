import type { CollectionEntry } from 'astro:content';
import { categorySlugFor, entrySlug, normalizeCategoryLabel } from './taxonomy';
import {
  buildIndexabilitySummary,
  selectStaticErrorEntries,
  type ErrorIndexabilityRecord,
  type IndexabilitySummary,
} from './indexability';
import { getHybridConfigFromPublishGate } from './hybrid-config';
import { buildPublishManifest, type PublishManifest } from './publish-gate';
import {
  buildCatalogManifest,
  isPublicCatalogRecord,
  shardRecords,
  toCompactCatalogRecord,
  type CatalogManifest,
  type CompactCatalogRecord,
} from './json-catalog';
import { mergeSupplementalCatalogRecords, signatureForEntry } from './seed-catalog';

type ErrorEntry = CollectionEntry<'errors'>;

export type ErrorCatalog = {
  records: ErrorIndexabilityRecord[];
  publicRecords: CompactCatalogRecord[];
  summary: IndexabilitySummary;
  publishManifest: PublishManifest;
  manifest: CatalogManifest;
  staticSlugs: Set<string>;
  staticEntries: ErrorEntry[];
  hiddenCounts: { needs_review: number; rejected: number };
};

export function buildErrorCatalog(entries: ErrorEntry[]): ErrorCatalog {
  const config = getHybridConfigFromPublishGate();
  const { staticEntries, classifications } = selectStaticErrorEntries(entries, config);
  const { supplemental, hidden } = mergeSupplementalCatalogRecords(entries, classifications);
  const records = [...classifications, ...supplemental];
  const staticSlugs = new Set(records.filter((record) => record.has_static_page).map((record) => record.slug));
  const publishManifest = buildPublishManifest(entries, {
    generatedErrorHtmlPages: staticSlugs.size,
  });

  const signatureBySlug = new Map(entries.map((entry) => [entrySlug(entry), signatureForEntry(entry)]));

  const publicRecords = records
    .filter(isPublicCatalogRecord)
    .map((record) => toCompactCatalogRecord(record, signatureBySlug.get(record.slug) ?? record.error_signature ?? null))
    .sort((a, b) => a.slug.localeCompare(b.slug));

  const summary = buildIndexabilitySummary(records, config);
  const manifest = buildCatalogManifest(publicRecords, hidden, summary.generated_at);

  return {
    records,
    publicRecords,
    summary,
    publishManifest,
    manifest,
    staticSlugs,
    staticEntries,
    hiddenCounts: hidden,
  };
}

export function filterStaticEntries(entries: ErrorEntry[], staticSlugs: Set<string>) {
  return entries.filter((entry) => staticSlugs.has(entrySlug(entry)));
}

export function filterStaticRecords(records: ErrorIndexabilityRecord[]) {
  return records.filter((record) => record.has_static_page);
}

export function groupRecordsByCategory(records: CompactCatalogRecord[]) {
  const groups = new Map<string, CompactCatalogRecord[]>();

  for (const record of records) {
    const label = normalizeCategoryLabel(record.category, record.technology);
    const key = categorySlugFor(label);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(record);
  }

  return groups;
}

export function groupRecordsByTechnology(records: CompactCatalogRecord[]) {
  const groups = new Map<string, CompactCatalogRecord[]>();

  for (const record of records) {
    const key = record.technology
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(record);
  }

  return groups;
}

export type CompactIndexPayload = {
  generated_at: string;
  total_records: number;
  static_page_count: number;
  manifest_url: string;
  search_browser_path: string;
  records: CompactCatalogRecord[];
};

export function buildCompactIndexPayload(catalog: ErrorCatalog): CompactIndexPayload {
  return {
    generated_at: catalog.summary.generated_at,
    total_records: catalog.manifest.total_records,
    static_page_count: catalog.summary.generated_static_error_pages,
    manifest_url: '/data/errors/manifest.json',
    search_browser_path: catalog.manifest.search_browser_path,
    records: catalog.publicRecords,
  };
}

export function buildGlobalShardPayload(catalog: ErrorCatalog, shardId: string) {
  const index = Number.parseInt(shardId, 10);
  const shards = shardRecords(catalog.publicRecords);
  const records = shards[index] ?? [];
  return {
    generated_at: catalog.manifest.generated_at,
    shard: index,
    shard_size: catalog.manifest.shard_size,
    records,
  };
}

export function buildCategoryShardPayload(catalog: ErrorCatalog, category: string, page: number) {
  const groups = groupRecordsByCategory(catalog.publicRecords);
  const records = groups.get(category) ?? [];
  const shards = shardRecords(records);
  return {
    generated_at: catalog.manifest.generated_at,
    category,
    page,
    shard_size: catalog.manifest.shard_size,
    records: shards[page - 1] ?? [],
  };
}

export function buildTechnologyShardPayload(catalog: ErrorCatalog, technology: string, page: number) {
  const groups = groupRecordsByTechnology(catalog.publicRecords);
  const records = groups.get(technology) ?? [];
  const shards = shardRecords(records);
  return {
    generated_at: catalog.manifest.generated_at,
    technology,
    page,
    shard_size: catalog.manifest.shard_size,
    records: shards[page - 1] ?? [],
  };
}
