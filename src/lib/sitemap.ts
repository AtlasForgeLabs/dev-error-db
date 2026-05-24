import type { CollectionEntry } from 'astro:content';
import { ARCHIVE_PAGE_SIZE, DEFAULT_PAGE_SIZE, categoryPathFor, errorPath, getCategoryGroups } from './taxonomy';
import { getUpdatedTimestamp, sortByUpdatedTimestamp } from './dates';

type ErrorEntry = CollectionEntry<'errors'>;

const siteUrl = 'https://dev-error-db.com';
const staticRoutes = [
  '/',
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms/',
  '/disclaimer/',
  '/editorial-methodology/',
  '/source-policy/',
  '/troubleshooting-methodology/',
  '/errors/',
  '/data-browser/',
  '/latest/',
  '/trending/',
];

export type SitemapRoute = {
  path: string;
  lastmod?: string | null;
};

export function buildSitemapRoutes(entries: ErrorEntry[]): SitemapRoute[] {
  const sortedEntries = sortByUpdatedTimestamp(entries);
  const latestUpdated = getUpdatedTimestamp(sortedEntries[0]) ?? new Date().toISOString().slice(0, 10);
  const routes: SitemapRoute[] = staticRoutes.map((path) => ({ path, lastmod: latestUpdated }));
  const groups = getCategoryGroups(entries);
  const errorArchivePages = Math.max(1, Math.ceil(entries.length / ARCHIVE_PAGE_SIZE));

  for (let page = 2; page <= errorArchivePages; page += 1) {
    routes.push({ path: `/errors/page/${page}/`, lastmod: latestUpdated });
  }

  for (const group of groups) {
    const groupUpdated = getUpdatedTimestamp(sortByUpdatedTimestamp(group.entries)[0]) ?? latestUpdated;
    const totalPages = Math.max(1, Math.ceil(group.entries.length / DEFAULT_PAGE_SIZE));
    routes.push({ path: categoryPathFor(group.label), lastmod: groupUpdated });

    for (let page = 2; page <= totalPages; page += 1) {
      routes.push({ path: `${categoryPathFor(group.label)}page/${page}/`, lastmod: groupUpdated });
    }
  }

  for (const entry of sortedEntries) {
    routes.push({ path: errorPath(entry), lastmod: getUpdatedTimestamp(entry) ?? latestUpdated });
  }

  return dedupeRoutes(routes);
}

export function sitemapIndexXml() {
  return xmlDocument(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`);
}

export function sitemapXml(routes: SitemapRoute[]) {
  const urls = routes
    .map((route) => {
      const loc = `${siteUrl}${route.path}`;
      const lastmod = route.lastmod ? `\n    <lastmod>${escapeXml(route.lastmod.slice(0, 10))}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmod}\n  </url>`;
    })
    .join('\n');

  return xmlDocument(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`);
}

function dedupeRoutes(routes: SitemapRoute[]) {
  const seen = new Set<string>();
  const result: SitemapRoute[] = [];

  for (const route of routes) {
    if (seen.has(route.path)) continue;
    seen.add(route.path);
    result.push(route);
  }

  return result;
}

function xmlDocument(body: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n${body}\n`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
