import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const dataDir = path.join(distDir, 'data', 'errors');
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
  'publish_status',
  'publish_reason',
  'will_enter_json_index',
];

const errors = [];

function fail(message) {
  errors.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readJson(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  if (!existsSync(filePath)) {
    fail(`${relativePath} is missing`);
    return null;
  }
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${relativePath} is not valid JSON: ${error.message}`);
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
      assert(record[field] !== null && record[field] !== undefined, `${label} record ${record?.slug ?? '(unknown)'} has null ${field}`);
    }

    if (record.has_static_page) {
      assert(typeof record.url === 'string' && record.url.startsWith('https://dev-error-db.com/errors/'), `${record.slug} static record must include production url`);
    } else {
      assert(record.url === null, `${record.slug} data-only record must not include static url`);
    }
  }
}

function main() {
  const summaryPath = path.join(dataDir, 'indexability-summary.json');
  const indexPath = path.join(dataDir, 'index.json');
  const legacyPath = path.join(rootDir, 'config', 'legacy-published-slugs.json');

  assert(existsSync(legacyPath), 'config/legacy-published-slugs.json exists');
  assert(existsSync(summaryPath), 'dist/data/errors/indexability-summary.json exists after build');
  assert(existsSync(indexPath), 'dist/data/errors/index.json exists after build');

  const summary = existsSync(summaryPath) ? JSON.parse(readFileSync(summaryPath, 'utf8')) : null;
  const indexPayload = existsSync(indexPath) ? JSON.parse(readFileSync(indexPath, 'utf8')) : null;
  const legacySlugs = existsSync(legacyPath) ? JSON.parse(readFileSync(legacyPath, 'utf8')) : [];

  validateCompactRecords(indexPayload?.records, 'index');
  assert(summary?.total_records === indexPayload?.total_records, 'summary total_records matches index.json');

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
    for (const record of dataOnlyRecords) {
      assert(!sitemap.includes(`/errors/${record.slug}/`), `sitemap must not include data-only route ${record.slug}`);
    }
    for (const record of staticRecords) {
      assert(sitemap.includes(`/errors/${record.slug}/`), `sitemap should include static route ${record.slug}`);
    }
  }

  assert(legacySlugs.length > 0, 'legacy slug snapshot must not be empty');
  assert(summary?.generated_static_error_pages === staticRecords.length, 'summary static count matches index records');

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
  console.log(`json_category_indexes=${categoryFiles.length}`);
  console.log(`json_technology_indexes=${technologyFiles.length}`);
}

main();
