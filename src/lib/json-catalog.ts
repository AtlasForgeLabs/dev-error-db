import type { ErrorIndexabilityRecord } from './indexability';
import { categorySlugFor, normalizeCategoryLabel } from './taxonomy';
import { getJsonIndexShardSize } from './hybrid-config';

export type CompactCatalogRecord = {
  slug: string;
  title: string;
  description: string;
  category: string;
  technology: string;
  error_signature: string | null;
  evidence_status: ErrorIndexabilityRecord['evidence_status'];
  source_count: number;
  source_backed: boolean;
  updated_at: string | null;
  indexability_status: ErrorIndexabilityRecord['indexability_status'];
  data_only: boolean;
  legacy_preserved: boolean;
  has_static_page: boolean;
  detail_available: boolean;
  url: string | null;
  search_text: string;
};

export type CatalogShardRef = {
  id: string;
  path: string;
  records: number;
  bytes?: number;
};

export type CatalogPagedRef = {
  category?: string;
  technology?: string;
  page: number;
  path: string;
  records: number;
  bytes?: number;
};

export type CatalogManifest = {
  generated_at: string;
  total_records: number;
  html_records: number;
  data_only_records: number;
  exposed_records: number;
  hidden_needs_review_records: number;
  hidden_rejected_records: number;
  categories: string[];
  technologies: string[];
  shard_size: number;
  shards: CatalogShardRef[];
  category_shards: CatalogPagedRef[];
  technology_shards: CatalogPagedRef[];
  largest_shard_records: number;
  largest_shard_bytes: number;
  search_browser_path: string;
};

function compactSearchText(record: Pick<CompactCatalogRecord, 'title' | 'description' | 'error_signature' | 'category' | 'technology'>) {
  return [record.title, record.description, record.error_signature, record.category, record.technology]
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 480);
}

export function toCompactCatalogRecord(record: ErrorIndexabilityRecord, errorSignature: string | null = null): CompactCatalogRecord {
  const signature = errorSignature ?? null;
  const compact: CompactCatalogRecord = {
    slug: record.slug,
    title: record.title,
    description: record.description,
    category: record.category,
    technology: record.technology,
    error_signature: signature,
    evidence_status: record.evidence_status,
    source_count: record.source_count,
    source_backed: record.source_backed,
    updated_at: record.updated_at,
    indexability_status: record.indexability_status,
    data_only: record.data_only,
    legacy_preserved: record.legacy_preserved,
    has_static_page: record.has_static_page,
    detail_available: record.has_static_page,
    url: record.has_static_page ? record.url : null,
    search_text: '',
  };
  compact.search_text = compactSearchText(compact);
  return compact;
}

export function isPublicCatalogRecord(record: ErrorIndexabilityRecord) {
  if (record.publish_status === 'rejected') return false;
  if (record.publish_status === 'needs_review' && !record.has_static_page) return false;
  if (record.indexability_status === 'pending_review' && !record.has_static_page) return false;
  return record.will_enter_json_index !== false;
}

export function shardRecords<T>(records: T[], shardSize = getJsonIndexShardSize()) {
  const size = Math.max(1, shardSize);
  const shards: T[][] = [];
  for (let index = 0; index < records.length; index += size) {
    shards.push(records.slice(index, index + size));
  }
  return shards.length > 0 ? shards : [[]];
}

function jsonByteLength(value: unknown) {
  return Buffer.byteLength(`${JSON.stringify(value)}\n`, 'utf8');
}

export function buildCatalogManifest(
  records: CompactCatalogRecord[],
  hidden: { needs_review: number; rejected: number },
  generatedAt: string
): CatalogManifest {
  const shardSize = getJsonIndexShardSize();
  const globalShards = shardRecords(records, shardSize);
  const shards: CatalogShardRef[] = globalShards.map((chunk, index) => ({
    id: String(index),
    path: `/data/errors/shards/${index}.json`,
    records: chunk.length,
    bytes: jsonByteLength({ shard: index, records: chunk }),
  }));

  const categoryGroups = new Map<string, CompactCatalogRecord[]>();
  const technologyGroups = new Map<string, CompactCatalogRecord[]>();

  for (const record of records) {
    const categoryKey = categorySlugFor(normalizeCategoryLabel(record.category, record.technology));
    if (!categoryGroups.has(categoryKey)) categoryGroups.set(categoryKey, []);
    categoryGroups.get(categoryKey)?.push(record);

    const technologyKey = record.technology
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!technologyGroups.has(technologyKey)) technologyGroups.set(technologyKey, []);
    technologyGroups.get(technologyKey)?.push(record);
  }

  const category_shards: CatalogPagedRef[] = [];
  for (const [category, grouped] of categoryGroups.entries()) {
    const pages = shardRecords(grouped, shardSize);
    pages.forEach((chunk, index) => {
      category_shards.push({
        category,
        page: index + 1,
        path: `/data/errors/categories/${category}/page-${index + 1}.json`,
        records: chunk.length,
        bytes: jsonByteLength({ category, page: index + 1, records: chunk }),
      });
    });
  }

  const technology_shards: CatalogPagedRef[] = [];
  for (const [technology, grouped] of technologyGroups.entries()) {
    const pages = shardRecords(grouped, shardSize);
    pages.forEach((chunk, index) => {
      technology_shards.push({
        technology,
        page: index + 1,
        path: `/data/errors/technologies/${technology}/page-${index + 1}.json`,
        records: chunk.length,
        bytes: jsonByteLength({ technology, page: index + 1, records: chunk }),
      });
    });
  }

  const shardSizes = shards.map((shard) => shard.records);
  const shardBytes = shards.map((shard) => shard.bytes ?? 0);

  return {
    generated_at: generatedAt,
    total_records: records.length,
    html_records: records.filter((record) => record.has_static_page).length,
    data_only_records: records.filter((record) => record.data_only && !record.has_static_page).length,
    exposed_records: records.length,
    hidden_needs_review_records: hidden.needs_review,
    hidden_rejected_records: hidden.rejected,
    categories: [...categoryGroups.keys()].sort(),
    technologies: [...technologyGroups.keys()].sort(),
    shard_size: shardSize,
    shards,
    category_shards,
    technology_shards,
    largest_shard_records: shardSizes.length ? Math.max(...shardSizes) : 0,
    largest_shard_bytes: shardBytes.length ? Math.max(...shardBytes) : 0,
    search_browser_path: '/data-browser/',
  };
}
