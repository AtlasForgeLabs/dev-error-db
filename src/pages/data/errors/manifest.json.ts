import { getCollection } from 'astro:content';
import { buildErrorCatalog } from '../../../lib/error-catalog';

export async function GET() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);

  return new Response(`${JSON.stringify(catalog.manifest, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
