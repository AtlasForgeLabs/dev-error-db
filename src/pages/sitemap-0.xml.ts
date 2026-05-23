import { getCollection } from 'astro:content';
import { buildSitemapRoutes, sitemapXml } from '../lib/sitemap';

export async function GET() {
  const entries = await getCollection('errors');

  return new Response(sitemapXml(buildSitemapRoutes(entries)), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
