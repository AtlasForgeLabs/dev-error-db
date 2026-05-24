import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const dataDir = path.join(distDir, 'data', 'errors');
const SHARD_BYTES_WARN = Number.parseInt(process.env.JSON_INDEX_SHARD_BYTES_WARN ?? '1048576', 10);

const requiredRecordFields = [
  'slug',
  'title',
  'description',
  'category',
  'technology',
  'evidence_status',
  'source_count',
  'source_backed',
  'updated_at',
  'indexability_status',
  'data_only',
  'legacy_preserved',
  'has_static_page',
  'detail_available',
  'search_text',
];

const nullableFields = new Set(['error_signature', 'updated_at', 'url']);

const errors = [];

function fail(message) {
  errors.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readJsonFile(filePath, label) {
  if (!existsSync(filePath)) {
    fail(`${label} is missing`);
    return null;
  }
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${label} is not valid JSON: ${error.message}`);
    return null;
  }
}

function listHtmlRoutes() {
  const routes = new Set();

  function walk(dir, prefix = '') {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(next, `${prefix}/${entry.name}`);
        continue;
      }
      if (!entry.name.endsWith('.html')) continue;
      const route =
        entry.name === 'index.html'
          ? `${prefix}/`.replace(/\/+/g, '/') || '/'
          : `${prefix}/${entry.name.replace(/\.html$/, '')}/`.replace(/\/+/g, '/');
      routes.add(route);
    }
  }

  walk(distDir);
  return routes;
}

function validateCompactRecords(records, label) {
  assert(Array.isArray(records), `${label} records must be an array`);

  for (const record of records ?? []) {
    for (const field of requiredRecordFields) {
      assert(Object.prototype.hasOwnProperty.call(record, field), `${label} record ${record?.slug ?? '(unknown)'} missing ${field}`);
      if (!nullableFields.has(field)) {
        assert(record[field] !== null && record[field] !== undefined, `${label} record ${record?.slug ?? '(unknown)'} has null ${field}`);
      }
    }

    assert(Object.prototype.hasOwnProperty.call(record, 'error_signature'), `${label} record ${record?.slug ?? '(unknown)'} missing error_signature`);
    assert(Object.prototype.hasOwnProperty.call(record, 'url'), `${label} record ${record?.slug ?? '(unknown)'} missing url`);

    if (record.has_static_page) {
      assert(record.detail_available === true, `${record.slug} static record must set detail_available=true`);
      assert(typeof record.url === 'string' && record.url.startsWith('https://dev-error-db.com/errors/'), `${record.slug} static record must include production url`);
    } else {
      assert(record.detail_available === false, `${record.slug} data-only record must set detail_available=false`);
      assert(record.url === null, `${record.slug} data-only record must not include static url`);
    }
  }
}

function validateManifest(manifest) {
  assert(manifest && typeof manifest === 'object', 'manifest.json must be an object');
  assert(typeof manifest.generated_at === 'string', 'manifest.generated_at must be a string');
  assert(Array.isArray(manifest.shards), 'manifest.shards must be an array');
  assert(Array.isArray(manifest.category_shards), 'manifest.category_shards must be an array');
  assert(Array.isArray(manifest.technology_shards), 'manifest.technology_shards must be an array');
  assert(manifest.search_browser_path === '/data-browser/', 'manifest.search_browser_path must point to /data-browser/');
  assert(typeof manifest.shard_size === 'number' && manifest.shard_size > 0, 'manifest.shard_size must be positive');
}

function validateShardFile(relativePath, expectedRecords) {
  const filePath = path.join(distDir, relativePath.replace(/^\//, ''));
  assert(existsSync(filePath), `${relativePath} shard file is missing`);
  const payload = readJsonFile(filePath, relativePath);
  if (!payload) return;
  validateCompactRecords(payload.records, relativePath);
  assert(Array.isArray(payload.records), `${relativePath} must include records array`);
  assert(payload.records.length === expectedRecords, `${relativePath} record count mismatch (${payload.records.length} != ${expectedRecords})`);

  const bytes = statSync(filePath).size;
  if (bytes > SHARD_BYTES_WARN) {
    fail(`${relativePath} exceeds shard byte warning threshold (${bytes} > ${SHARD_BYTES_WARN})`);
  }
}

function main() {
  const summaryPath = path.join(dataDir, 'indexability-summary.json');
  const indexPath = path.join(dataDir, 'index.json');
  const manifestPath = path.join(dataDir, 'manifest.json');
  const legacyPath = path.join(rootDir, 'config', 'legacy-published-slugs.json');

  assert(existsSync(legacyPath), 'config/legacy-published-slugs.json exists');
  assert(existsSync(summaryPath), 'dist/data/errors/indexability-summary.json exists after build');
  assert(existsSync(indexPath), 'dist/data/errors/index.json exists after build');
  assert(existsSync(manifestPath), 'dist/data/errors/manifest.json exists after build');
  assert(existsSync(path.join(distDir, 'data-browser', 'index.html')), 'dist/data-browser/index.html exists after build');

  const summary = readJsonFile(summaryPath, 'indexability-summary.json');
  const indexPayload = readJsonFile(indexPath, 'index.json');
  const manifest = readJsonFile(manifestPath, 'manifest.json');
  const legacySlugs = existsSync(legacyPath) ? JSON.parse(readFileSync(legacyPath, 'utf8')) : [];

  validateManifest(manifest);
  validateCompactRecords(indexPayload?.records, 'index');

  assert(summary?.total_records === manifest?.total_records, 'summary total_records matches manifest.total_records');
  assert(indexPayload?.total_records === manifest?.total_records, 'index total_records matches manifest.total_records');
  assert(summary?.generated_static_error_pages === manifest?.html_records, 'summary static count matches manifest html_records');

  for (const shard of manifest?.shards ?? []) {
    validateShardFile(shard.path, shard.records);
  }

  const categoryDir = path.join(dataDir, 'categories');
  const technologyDir = path.join(dataDir, 'technologies');
  assert(existsSync(categoryDir), 'dist/data/errors/categories exists');
  assert(existsSync(technologyDir), 'dist/data/errors/technologies exists');

  const categoryFiles = existsSync(categoryDir) ? readdirSync(categoryDir).filter((file) => file.endsWith('.json')) : [];
  const technologyFiles = existsSync(technologyDir) ? readdirSync(technologyDir).filter((file) => file.endsWith('.json')) : [];
  assert(categoryFiles.length > 0, 'at least one category JSON index exists');
  assert(technologyFiles.length > 0, 'at least one technology JSON index exists');

  const htmlRoutes = listHtmlRoutes();
  const staticRecords = (indexPayload?.records ?? []).filter((record) => record.has_static_page);
  const dataOnlyRecords = (indexPayload?.records ?? []).filter((record) => record.data_only && !record.has_static_page);

  for (const record of staticRecords) {
    const route = `/errors/${record.slug}/`;
    assert(htmlRoutes.has(route), `${route} is indexed as static but HTML route is missing`);
  }

  for (const record of dataOnlyRecords) {
    const route = `/errors/${record.slug}/`;
    assert(!htmlRoutes.has(route), `${route} is data-only but HTML route was generated`);
  }

  if (existsSync(path.join(distDir, 'sitemap-0.xml'))) {
    const sitemap = readFileSync(path.join(distDir, 'sitemap-0.xml'), 'utf8');
    assert(sitemap.includes('https://dev-error-db.com/data-browser/'), 'sitemap must include data-browser route');
    for (const record of dataOnlyRecords) {
      assert(!sitemap.includes(`/errors/${record.slug}/`), `sitemap must not include data-only route ${record.slug}`);
    }
    for (const record of staticRecords.slice(0, 20)) {
      assert(sitemap.includes(`/errors/${record.slug}/`), `sitemap should include static route ${record.slug}`);
    }
  }

  assert(legacySlugs.length > 0, 'legacy slug snapshot must not be empty');

  if (errors.length > 0) {
    console.error('[hybrid-architecture-validate] failed');
    for (const message of errors) {
      console.error(`- ${message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log('[hybrid-architecture-validate] ok');
  console.log(`total_records=${summary?.total_records ?? 0}`);
  console.log(`generated_static_error_pages=${summary?.generated_static_error_pages ?? 0}`);
  console.log(`indexable_html=${summary?.indexable_html ?? 0}`);
  console.log(`data_only=${summary?.data_only ?? 0}`);
  console.log(`legacy_preserved=${summary?.legacy_preserved ?? 0}`);
  console.log(`pending_review=${summary?.pending_review ?? 0}`);
  console.log(`json_shard_count=${manifest?.shards?.length ?? 0}`);
  console.log(`json_category_indexes=${categoryFiles.length}`);
  console.log(`json_technology_indexes=${technologyFiles.length}`);
  console.log(`largest_shard_bytes=${manifest?.largest_shard_bytes ?? 0}`);
  console.log(`search_browser_path=${manifest?.search_browser_path ?? '/data-browser/'}`);
}

main();
