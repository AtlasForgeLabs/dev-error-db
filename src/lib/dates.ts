import type { CollectionEntry } from 'astro:content';

type ErrorEntry = CollectionEntry<'errors'>;
type TimestampEntry = ErrorEntry | { data?: Record<string, unknown> };

const publicDateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function parsePageTimestamp(entry: TimestampEntry): Date | null {
  const data = entry.data ?? {};
  const candidates = [data.updated_at, data.published_at, data.updated];

  for (const value of candidates) {
    const parsed = parseTimestampValue(value);
    if (parsed) return parsed;
  }

  return null;
}

export function getUpdatedTimestamp(entry: TimestampEntry): string | null {
  return parsePageTimestamp(entry)?.toISOString() ?? null;
}

export function formatPublicDate(timestamp: Date | string | number | null | undefined): string {
  const parsed = parseTimestampValue(timestamp);
  return parsed ? publicDateFormatter.format(parsed) : 'Unknown date';
}

export function sortByUpdatedTimestamp<T extends TimestampEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => {
    const aTime = parsePageTimestamp(a)?.getTime() ?? 0;
    const bTime = parsePageTimestamp(b)?.getTime() ?? 0;
    const diff = bTime - aTime;
    const aTitle = typeof a.data?.title === 'string' ? a.data.title : '';
    const bTitle = typeof b.data?.title === 'string' ? b.data.title : '';
    return diff || aTitle.localeCompare(bTitle);
  });
}

function parseTimestampValue(value: unknown): Date | null {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value;
  }

  if (typeof value !== 'string' && typeof value !== 'number') {
    return null;
  }

  const raw = String(value).trim();
  if (!raw) return null;

  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00.000Z` : raw;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}
