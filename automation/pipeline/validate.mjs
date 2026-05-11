import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import {
  buildHealthReport,
  candidateSummary,
  enforcePublishLimits,
  loadPolicy,
  paths,
  validateCandidates,
  validateMarkdownPages,
  verifyBuildOutputs,
  writeHealthReport,
  writeValidationReport,
} from '../lib/pipeline-guardrails.mjs';

main().catch(async (error) => {
  console.error(`[pipeline:validate] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const policy = await loadPolicy();
  const imported = existsSync(paths.latestImport) ? JSON.parse(await readFile(paths.latestImport, 'utf8')) : {};
  const candidates = imported.accepted_candidates ?? [];
  const results = await validateCandidates(candidates, { policy });
  const accepted = results.filter((result) => result.status === 'accepted');
  const rejected = results.filter((result) => result.status === 'rejected');
  const duplicateRejections = rejected.filter((result) =>
    result.errors.some((error) => error.includes('duplicate'))
  ).length;
  const pageResults = await validateMarkdownPages({ policy });
  const failedPages = pageResults.filter((result) => result.status === 'rejected');
  const limitCheck = await enforcePublishLimits({ requestedCount: accepted.length, mode: 'dry-run' });
  const buildVerification = await verifyBuildOutputs();

  const report = {
    generated_at: new Date().toISOString(),
    mode: 'validation',
    policy,
    source: existsSync(paths.latestImport) ? 'automation/import/output/latest-import.json' : null,
    summary: {
      candidates: candidates.length,
      accepted: accepted.length,
      rejected: rejected.length,
      pending_candidates: accepted.length,
      duplicate_rejections: duplicateRejections,
      markdown_pages_checked: pageResults.length,
      markdown_pages_failed: failedPages.length,
      publish_limits_ok: limitCheck.allowed,
      build_verification_ok: buildVerification.ok,
    },
    publish_limit_check: {
      allowed: limitCheck.allowed,
      errors: limitCheck.errors,
      pages_today: limitCheck.pagesToday,
    },
    build_verification: buildVerification,
    candidates: results.map(candidateSummary),
    markdown_pages: pageResults,
  };

  await writeValidationReport(report);
  const health = await buildHealthReport({
    pending_candidates: accepted.length,
    failed_candidates: rejected.length,
    duplicate_rejections: duplicateRejections,
  });
  await writeHealthReport(health);

  console.log(`[pipeline:validate] candidates: ${candidates.length}`);
  console.log(`[pipeline:validate] accepted: ${accepted.length}`);
  console.log(`[pipeline:validate] rejected: ${rejected.length}`);
  console.log(`[pipeline:validate] duplicate rejections: ${duplicateRejections}`);
  console.log(`[pipeline:validate] markdown pages checked: ${pageResults.length}`);
  console.log(`[pipeline:validate] markdown pages failed: ${failedPages.length}`);
  console.log(`[pipeline:validate] publish limits: ${limitCheck.allowed ? 'ok' : 'blocked'}`);
  console.log(`[pipeline:validate] build verification: ${buildVerification.ok ? 'ok' : 'failed'}`);
  console.log('[pipeline:validate] wrote automation/runtime/pipeline-validation.json');

  if (!buildVerification.ok || !limitCheck.allowed) {
    process.exitCode = 1;
  }
}
