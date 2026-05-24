import { getCollection } from 'astro:content';
import { buildErrorCatalog, buildTechnologyShardPayload } from '../../../../../lib/error-catalog';

export async function getStaticPaths() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);

  return catalog.manifest.technology_shards.map((shard) => ({
    params: { technology: shard.technology ?? 'unknown', page: `page-${shard.page}` },
    props: { technology: shard.technology ?? 'unknown', page: shard.page, catalog },
  }));
}

export async function GET({
  props,
}: {
  props: { technology: string; page: number; catalog: ReturnType<typeof buildErrorCatalog> extends infer T ? T : never };
}) {
  const payload = buildTechnologyShardPayload(props.catalog, props.technology, props.page);

  return new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
