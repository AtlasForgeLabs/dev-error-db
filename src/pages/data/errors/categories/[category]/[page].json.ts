import { getCollection } from 'astro:content';
import { buildCategoryShardPayload, buildErrorCatalog } from '../../../../../lib/error-catalog';

export async function getStaticPaths() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);

  return catalog.manifest.category_shards.map((shard) => ({
    params: { category: shard.category ?? 'unknown', page: `page-${shard.page}` },
    props: { category: shard.category ?? 'unknown', page: shard.page, catalog },
  }));
}

export async function GET({
  props,
}: {
  props: { category: string; page: number; catalog: ReturnType<typeof buildErrorCatalog> extends infer T ? T : never };
}) {
  const payload = buildCategoryShardPayload(props.catalog, props.category, props.page);

  return new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
