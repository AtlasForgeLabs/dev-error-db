const SOURCE_LIST_FIELDS = ['source_urls', 'sources', 'evidence_sources', 'references', 'sourceLinks'];

const SOURCE_SINGLE_FIELDS = ['source_url', 'official_url', 'issue_url', 'github_url', 'docs_url'];

const MAX_SOURCES = 12;

export function isPublicHttpSourceUrl(url) {
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) return false;

    const host = parsed.hostname.toLowerCase();
    if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host.endsWith('.local')) {
      return false;
    }

    if (/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/.test(host)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function normalizeSourceEntry(entry) {
  if (typeof entry === 'string') {
    const url = entry.trim();
    return isPublicHttpSourceUrl(url) ? { label: null, url } : null;
  }

  if (entry && typeof entry === 'object') {
    const url = String(entry.url ?? entry.source_url ?? entry.href ?? '').trim();
    if (!isPublicHttpSourceUrl(url)) return null;
    const label = String(entry.label ?? entry.title ?? entry.name ?? '').trim() || null;
    return { label, url };
  }

  return null;
}

export function extractSeedSources(seed) {
  const seen = new Set();
  const entries = [];

  function add(entry) {
    const normalized = normalizeSourceEntry(entry);
    if (!normalized || seen.has(normalized.url)) return;
    seen.add(normalized.url);
    entries.push(normalized);
  }

  for (const field of SOURCE_LIST_FIELDS) {
    const value = seed[field];
    if (Array.isArray(value)) {
      for (const item of value) add(item);
    } else if (value && typeof value === 'object') {
      add(value);
    }
  }

  for (const field of SOURCE_SINGLE_FIELDS) {
    const value = seed[field];
    if (typeof value === 'string') add(value);
  }

  return entries.slice(0, MAX_SOURCES);
}

export function renderSourcesCheckedSection(seed) {
  const sources = extractSeedSources(seed);
  if (sources.length === 0) return null;

  const lines = sources.map(({ label, url }) => (label ? `- ${label}: ${url}` : `- ${url}`));
  return `## Sources checked\n\n${lines.join('\n')}`;
}
