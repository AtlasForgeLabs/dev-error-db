import { getCollection } from 'astro:content';
import { buildErrorCatalog } from '../lib/error-catalog';
import { buildSitemapRoutes, sitemapXml } from '../lib/sitemap';

export async function GET() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);

  return new Response(sitemapXml(buildSitemapRoutes(catalog.staticEntries)), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
