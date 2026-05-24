import { getCollection } from 'astro:content';
import { buildErrorCatalog, groupRecordsByCategory } from '../../../../lib/error-catalog';

export async function getStaticPaths() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);
  const groups = groupRecordsByCategory(catalog.publicRecords);

  return [...groups.entries()].map(([category, records]) => ({
    params: { category },
    props: { category, records: records.slice(0, catalog.manifest.shard_size) },
  }));
}

export async function GET({ props }: { props: { category: string; records: unknown[] } }) {
  return new Response(`${JSON.stringify({ category: props.category, records: props.records })}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
