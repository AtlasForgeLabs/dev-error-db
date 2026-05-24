import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runtimeManifestPath = path.join(rootDir, 'automation', 'runtime', 'publish-manifest.json');
const legacyPath = path.join(rootDir, 'config', 'legacy-published-slugs.json');

const errors = [];

function fail(message) {
  errors.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function readJson(filePath) {
  if (!existsSync(filePath)) {
    fail(`${path.relative(rootDir, filePath)} is missing`);
    return null;
  }
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function readJsonOptional(filePath) {
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function findUntrackedMarkdown() {
  try {
    const output = execFileSync('git', ['status', '--porcelain', 'src/content/errors'], {
      cwd: rootDir,
      encoding: 'utf8',
    }).trim();
    if (!output) return [];
    return output
      .split('\n')
      .map((line) => line.slice(3).trim())
      .filter((file) => file.endsWith('.md'));
  } catch {
    return [];
  }
}

function main() {
  const manifest =
    readJsonOptional(runtimeManifestPath) ??
    readJsonOptional(path.join(rootDir, 'dist', 'data', 'errors', 'publish-manifest.json'));
  const legacy = readJson(legacyPath);

  assert(Array.isArray(legacy) && legacy.length > 0, 'legacy-published-slugs.json must not be empty');
  assert(manifest, 'publish manifest must exist after build/report');

  if (manifest) {
    assert(typeof manifest.total_error_records === 'number', 'publish manifest total_error_records is required');
    assert(typeof manifest.legacy_published_count === 'number', 'publish manifest legacy_published_count is required');
    assert(Array.isArray(manifest.candidates), 'publish manifest candidates must be an array');

    if (manifest.max_new_html_per_run > 0 && manifest.accepted_new_html_count > manifest.max_new_html_per_run) {
      fail(
        `accepted_new_html_count (${manifest.accepted_new_html_count}) exceeds MAX_NEW_HTML_PER_RUN (${manifest.max_new_html_per_run})`
      );
    }

    for (const candidate of manifest.candidates) {
      if (!candidate.will_generate_html && candidate.url) {
        fail(`${candidate.slug} is not HTML-eligible but has a static url`);
      }
      if (candidate.publish_status === 'rejected' && candidate.will_generate_html) {
        fail(`${candidate.slug} is rejected but marked for HTML`);
      }
    }
  }

  const untracked = findUntrackedMarkdown();
  if (untracked.length > 0) {
    console.warn(`[publish-gate-validate:warn] untracked candidate markdown files: ${untracked.length}`);
    for (const file of untracked.slice(0, 10)) {
      console.warn(`- ${file}`);
    }
  }

  if (errors.length > 0) {
    console.error('[publish-gate-validate] failed');
    for (const message of errors) console.error(`- ${message}`);
    process.exitCode = 1;
    return;
  }

  console.log('[publish-gate-validate] ok');
  if (manifest) {
    console.log(`build_budget_status=${manifest.build_budget_status}`);
    console.log(`accepted_new_html_count=${manifest.accepted_new_html_count}`);
    console.log(`legacy_published_count=${manifest.legacy_published_count}`);
  }
}

main();
