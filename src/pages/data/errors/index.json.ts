import { getCollection } from 'astro:content';
import { buildCompactIndexPayload, buildErrorCatalog } from '../../../lib/error-catalog';

export async function GET() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);
  const payload = buildCompactIndexPayload(catalog);

  return new Response(`${JSON.stringify(payload)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
