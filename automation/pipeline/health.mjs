import { buildHealthReport, writeHealthReport } from '../lib/pipeline-guardrails.mjs';

main().catch((error) => {
  console.error(`[pipeline:health] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const health = await buildHealthReport();
  await writeHealthReport(health);

  console.log(`pages_today: ${health.pages_today}`);
  console.log(`pages_this_run: ${health.pages_this_run}`);
  console.log(`last_publish: ${health.last_publish ? health.last_publish.at : 'none'}`);
  console.log(`paused: ${health.paused ? 'yes' : 'no'}`);
  console.log(`pending_candidates: ${health.pending_candidates}`);
  console.log(`failed_candidates: ${health.failed_candidates}`);
  console.log(`duplicate_rejections: ${health.duplicate_rejections}`);
  console.log(`build_status: ${health.build_status}`);
  console.log(`deploy_ready: ${health.deploy_ready ? 'yes' : 'no'}`);
  console.log('[pipeline:health] wrote automation/runtime/pipeline-health.json');
}
