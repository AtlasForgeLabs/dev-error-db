import type { CollectionEntry } from 'astro:content';
import { categorySlugFor, entrySlug, normalizeCategoryLabel } from './taxonomy';
import {
  buildIndexabilitySummary,
  selectStaticErrorEntries,
  type ErrorIndexabilityRecord,
  type IndexabilitySummary,
} from './indexability';
import { getHybridConfig } from './hybrid-config';

type ErrorEntry = CollectionEntry<'errors'>;

export type ErrorCatalog = {
  records: ErrorIndexabilityRecord[];
  summary: IndexabilitySummary;
  staticSlugs: Set<string>;
  staticEntries: ErrorEntry[];
};

export function buildErrorCatalog(entries: ErrorEntry[]): ErrorCatalog {
  const config = getHybridConfig();
  const { staticEntries, classifications } = selectStaticErrorEntries(entries, config);
  const staticSlugs = new Set(classifications.filter((record) => record.has_static_page).map((record) => record.slug));

  return {
    records: classifications,
    summary: buildIndexabilitySummary(classifications, config),
    staticSlugs,
    staticEntries,
  };
}

export function filterStaticEntries(entries: ErrorEntry[], staticSlugs: Set<string>) {
  return entries.filter((entry) => staticSlugs.has(entrySlug(entry)));
}

export function filterStaticRecords(records: ErrorIndexabilityRecord[]) {
  return records.filter((record) => record.has_static_page);
}

export function groupRecordsByCategory(records: ErrorIndexabilityRecord[]) {
  const groups = new Map<string, ErrorIndexabilityRecord[]>();

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

export function groupRecordsByTechnology(records: ErrorIndexabilityRecord[]) {
  const groups = new Map<string, ErrorIndexabilityRecord[]>();

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
  records: ErrorIndexabilityRecord[];
};

export function buildCompactIndexPayload(catalog: ErrorCatalog): CompactIndexPayload {
  return {
    generated_at: catalog.summary.generated_at,
    total_records: catalog.summary.total_records,
    static_page_count: catalog.summary.generated_static_error_pages,
    records: catalog.records,
  };
}
