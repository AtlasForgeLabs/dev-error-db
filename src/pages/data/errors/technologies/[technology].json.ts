import { getCollection } from 'astro:content';
import { buildErrorCatalog, groupRecordsByTechnology } from '../../../../lib/error-catalog';

export async function getStaticPaths() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);
  const groups = groupRecordsByTechnology(catalog.publicRecords);

  return [...groups.entries()].map(([technology, records]) => ({
    params: { technology },
    props: { technology, records: records.slice(0, catalog.manifest.shard_size) },
  }));
}

export async function GET({ props }: { props: { technology: string; records: unknown[] } }) {
  return new Response(`${JSON.stringify({ technology: props.technology, records: props.records })}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
