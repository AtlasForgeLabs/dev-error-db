import { getCollection } from 'astro:content';
import { buildErrorCatalog, buildGlobalShardPayload } from '../../../../lib/error-catalog';

export async function getStaticPaths() {
  const entries = await getCollection('errors');
  const catalog = buildErrorCatalog(entries);

  return catalog.manifest.shards.map((shard) => ({
    params: { shard: shard.id },
    props: { shardId: shard.id, catalog },
  }));
}

export async function GET({ props }: { props: { shardId: string; catalog: ReturnType<typeof buildErrorCatalog> extends infer T ? T : never } }) {
  const payload = buildGlobalShardPayload(props.catalog, props.shardId);

  return new Response(`${JSON.stringify(payload, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
