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
  const seoArchitecture = await validateSeoArchitecture();

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
      seo_architecture_ok: seoArchitecture.ok,
    },
    publish_limit_check: {
      allowed: limitCheck.allowed,
      errors: limitCheck.errors,
      pages_today: limitCheck.pagesToday,
    },
    build_verification: buildVerification,
    seo_architecture: seoArchitecture,
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
  console.log(`[pipeline:validate] SEO architecture: ${seoArchitecture.ok ? 'ok' : 'failed'}`);
  console.log('[pipeline:validate] wrote automation/runtime/pipeline-validation.json');

  if (!buildVerification.ok || !limitCheck.allowed || !seoArchitecture.ok) {
    process.exitCode = 1;
  }
}

async function validateSeoArchitecture() {
  const checks = [];
  const sourceChecks = [
    ['homepage revenue H1', 'src/pages/index.astro', 'Fix developer errors faster'],
    ['homepage popular topics', 'src/pages/index.astro', 'Popular troubleshooting topics'],
    ['homepage API failures', 'src/pages/index.astro', 'Common API failures'],
    ['homepage deployment section', 'src/pages/index.astro', 'Deployment troubleshooting'],
    ['homepage AI coding section', 'src/pages/index.astro', 'AI coding assistant errors'],
    ['error trust section', 'src/pages/errors/[slug].astro', 'Evidence and references'],
    ['category overview section', 'src/pages/categories/[category].astro', 'Troubleshooting overview'],
    ['category CollectionPage schema', 'src/pages/categories/[category].astro', 'CollectionPage'],
    ['homepage WebSite schema', 'src/pages/index.astro', 'WebSite'],
    ['latest archive route', 'src/pages/latest.astro', 'Latest developer error fixes'],
    ['trending archive route', 'src/pages/trending.astro', 'Trending developer errors'],
    ['report internal link density', 'scripts/report.mjs', 'average_links_per_built_page'],
    ['report AdSense presence', 'scripts/report.mjs', 'indexHasAdSense'],
    ['report GA4 presence', 'scripts/report.mjs', 'indexHasGa4'],
  ];

  for (const [name, relativePath, needle] of sourceChecks) {
    const filePath = new URL(`../../${relativePath}`, import.meta.url);
    const raw = await readFile(filePath, 'utf8').catch(() => '');
    checks.push({ name, ok: raw.includes(needle) });
  }

  const homepage = await readFile(new URL('../../src/pages/index.astro', import.meta.url), 'utf8');
  checks.push({ name: 'no raw Intent score leakage', ok: !homepage.includes('Intent score') });

  return {
    ok: checks.every((check) => check.ok),
    checks,
  };
}
