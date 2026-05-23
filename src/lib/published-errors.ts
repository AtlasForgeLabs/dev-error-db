import { getCollection } from 'astro:content';
import { buildErrorCatalog, type ErrorCatalog } from './error-catalog';

export async function loadErrorCatalog(): Promise<ErrorCatalog> {
  const entries = await getCollection('errors');
  return buildErrorCatalog(entries);
}

export async function getStaticErrorEntries() {
  const catalog = await loadErrorCatalog();
  return catalog.staticEntries;
}
