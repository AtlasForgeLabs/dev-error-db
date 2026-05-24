import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateSeedPublishGate, getPublishGateConfigFromEnv, loadLegacySlugs } from './lib/publish-gate-core.mjs';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const testSeedsPath = path.join(rootDir, 'automation', 'runtime', 'publish-staging', 'gate-test-seeds.json');
const errorsDir = path.join(rootDir, 'src', 'content', 'errors');
const stagingDir = path.join(rootDir, 'automation', 'runtime', 'publish-staging');
const legacySlugs = loadLegacySlugs();
const config = getPublishGateConfigFromEnv();

function loadTestSeeds() {
  return JSON.parse(readFileSync(testSeedsPath, 'utf8'));
}

function renderTestBody(seed) {
  const filler = 'Validate publish gate depth requirement with practical troubleshooting context. '.repeat(24);

  if (seed.slug.startsWith('publish-gate-test-html-pass-')) {
    const sourceUrl =
      seed.category === 'OpenAI API'
        ? 'https://platform.openai.com/docs/guides/error-codes'
        : 'https://docs.docker.com/engine/daemon/troubleshoot/';
    return `${filler}\n## What this error means\n\n${seed.description}\n\n## Common causes\n\n- ${seed.common_causes[0]}\n\n## Quick fixes\n\n1. ${seed.quick_fix}\n\n## Sources checked\n\n- ${sourceUrl}\n\n## FAQ\n\n### Is this a test record?\n\nYes. This body is intentionally source-backed for publish gate validation only.\n`;
  }

  if (seed.slug === 'publish-gate-test-data-only-no-sources') {
    return '## What this error means\n\nTEST ONLY shallow body without public sources.\n';
  }

  if (seed.slug === 'publish-gate-test-needs-review-missing-quick-fix') {
    return '## What this error means\n\nTEST ONLY body for missing quick_fix gate check.\n'.repeat(20);
  }

  return '## What this error means\n\nTEST ONLY duplicate candidate body.\n'.repeat(40);
}

function previewGateDecisions(testSeeds) {
  console.log('\n[publish-gate-test] Preview gate decisions');
  const rows = [];

  for (const seed of testSeeds) {
    const rendered = renderTestBody(seed);
    const gate = evaluateSeedPublishGate(seed, rendered, legacySlugs, config);
    rows.push({ seed, gate, renderedLength: rendered.length });
    console.log(
      `- ${seed.slug}: status=${gate.publish_status}, html=${gate.will_generate_html ? 'yes' : 'no'}, depth=${gate.content_depth}, sources=${gate.source_count}, reason=${gate.reason}`
    );
  }

  return rows;
}

function appendTestSeedsForGenerate() {
  // Generation uses isolated test seed file via ERROR_SEEDS_PATH.
}

function restoreSeedsBackup() {
  // No production seed file mutation in controlled test mode.
}

function cleanupTestMarkdown(testSeeds) {
  for (const seed of testSeeds) {
    if (!seed.slug.startsWith('publish-gate-test-')) continue;
    const filePath = path.join(errorsDir, `${seed.slug}.md`);
    if (existsSync(filePath)) rmSync(filePath);
  }
}

function main() {
  mkdirSync(stagingDir, { recursive: true });
  const testSeeds = loadTestSeeds();
  const preview = previewGateDecisions(testSeeds);

  const htmlPassExpected = preview.filter((row) => row.seed.slug.startsWith('publish-gate-test-html-pass-'));
  const dataOnlyExpected = preview.filter((row) => row.seed.slug === 'publish-gate-test-data-only-no-sources');
  const needsReviewExpected = preview.filter((row) => row.seed.slug === 'publish-gate-test-needs-review-missing-quick-fix');
  const duplicateExpected = preview.filter((row) => row.seed.slug === 'docker-cannot-connect-to-daemon');

  if (!htmlPassExpected.every((row) => row.gate.will_generate_html)) {
    throw new Error('Expected source-backed preview bodies to pass the publish gate');
  }
  if (!dataOnlyExpected.every((row) => !row.gate.will_generate_html && row.gate.publish_status === 'data_only')) {
    throw new Error('Expected data_only candidate to be gated out in preview');
  }
  if (!needsReviewExpected.every((row) => !row.gate.will_generate_html && row.gate.publish_status === 'needs_review')) {
    throw new Error('Expected needs_review candidate to be gated out in preview');
  }
  if (!duplicateExpected.every((row) => row.gate.existing_legacy)) {
    throw new Error('Expected duplicate slug to be recognized as legacy');
  }

  appendTestSeedsForGenerate();

  console.log('\n[publish-gate-test] Running npm run generate:errors with isolated test seeds');
  execFileSync(
    'npm',
    [
      'run',
      'generate:errors',
      '--',
      '--only=publish-gate-test-html-pass-docker-overlay-network,publish-gate-test-html-pass-openai-azure-401,publish-gate-test-data-only-no-sources,publish-gate-test-needs-review-missing-quick-fix',
    ],
    {
      cwd: rootDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        ERROR_SEEDS_PATH: 'automation/runtime/publish-staging/gate-test-seeds-only.json',
      },
    }
  );

  const createdTestFiles = testSeeds
    .filter((seed) => seed.slug.startsWith('publish-gate-test-'))
    .filter((seed) => existsSync(path.join(errorsDir, `${seed.slug}.md`)))
    .map((seed) => seed.slug);

  console.log(`\n[publish-gate-test] Markdown created: ${createdTestFiles.length ? createdTestFiles.join(', ') : 'none'}`);

  const dataOnlyStaging = JSON.parse(readFileSync(path.join(stagingDir, 'data-only-candidates.json'), 'utf8'));
  const needsReviewStaging = JSON.parse(readFileSync(path.join(stagingDir, 'needs-review-candidates.json'), 'utf8'));
  console.log(`[publish-gate-test] staging data_only=${dataOnlyStaging.length} needs_review=${needsReviewStaging.length}`);

  writeFileSync(
    path.join(stagingDir, 'gate-test-results.json'),
    `${JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        preview,
        created_test_markdown: createdTestFiles,
        staging_counts: {
          data_only: dataOnlyStaging.length,
          needs_review: needsReviewStaging.length,
        },
      },
      null,
      2
    )}\n`,
    'utf8'
  );

  console.log('\n[publish-gate-test] Building with temporary test markdown for manifest validation');
  execFileSync('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit' });
  execFileSync('node', ['scripts/generate-publish-manifest.mjs'], { cwd: rootDir, stdio: 'inherit' });

  const manifest = JSON.parse(readFileSync(path.join(rootDir, 'automation', 'runtime', 'publish-manifest.json'), 'utf8'));
  const testCandidates = manifest.candidates.filter((candidate) => candidate.slug.startsWith('publish-gate-test-'));
  const manifestSummary = {
    new_candidate_count: manifest.new_candidate_count,
    accepted_new_html_count: manifest.accepted_new_html_count,
    data_only_count: manifest.data_only_count,
    needs_review_count: manifest.needs_review_count,
    rejected_count: manifest.rejected_count,
    legacy_published_count: manifest.legacy_published_count,
    max_new_html_per_run: manifest.max_new_html_per_run,
    build_budget_status: manifest.build_budget_status,
    test_candidates: testCandidates,
  };

  console.log('\n[publish-gate-test] Manifest snapshot');
  console.log(JSON.stringify(manifestSummary, null, 2));

  writeFileSync(
    path.join(stagingDir, 'gate-test-results.json'),
    `${JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        preview,
        created_test_markdown: createdTestFiles,
        staging_counts: {
          data_only: dataOnlyStaging.length,
          needs_review: needsReviewStaging.length,
        },
        manifest: manifestSummary,
      },
      null,
      2
    )}\n`,
    'utf8'
  );

  return { testSeeds, createdTestFiles };
}

function resetStagingArtifacts() {
  for (const file of ['data-only-candidates.json', 'needs-review-candidates.json', 'rejected-candidates.json']) {
    const filePath = path.join(stagingDir, file);
    if (existsSync(filePath)) rmSync(filePath);
  }
}

try {
  const { testSeeds } = main();
  console.log('\n[publish-gate-test] Cleaning up test markdown and staging artifacts');
  cleanupTestMarkdown(testSeeds);
  resetStagingArtifacts();
  console.log('[publish-gate-test] Rebuilding clean production tree');
  execFileSync('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit' });
  execFileSync('node', ['scripts/generate-publish-manifest.mjs'], { cwd: rootDir, stdio: 'inherit' });
} finally {
  restoreSeedsBackup();
}
