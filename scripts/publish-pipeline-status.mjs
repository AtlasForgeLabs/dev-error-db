import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const observabilityDir = path.join(rootDir, 'automation/runtime/publish-observability');
const currentDir = path.join(observabilityDir, 'current');
const runsDir = path.join(observabilityDir, 'runs');
const dataHubStateDir =
  '/Users/mini/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/state';
const retentionPolicy = { max_runs: 30, max_age_days: 14 };
const generatedAt = new Date();
const runId = timestampId(generatedAt);
const runDir = path.join(runsDir, runId);
const warnings = [];
const errors = [];

const previousLatestChanges = readJson(
  path.join(currentDir, 'latest-changes.json'),
  { latest_changes: {} },
  { missingOk: true },
);

const publishManifest = readJson(path.join(rootDir, 'automation/runtime/publish-manifest.json'), null, {
  missingOk: true,
});
const dataOnlyCandidates = readJson(
  path.join(rootDir, 'automation/runtime/publish-staging/data-only-candidates.json'),
  [],
  { missingOk: true },
);
const needsReviewCandidates = readJson(
  path.join(rootDir, 'automation/runtime/publish-staging/needs-review-candidates.json'),
  [],
  { missingOk: true },
);
const rejectedCandidates = readJson(
  path.join(rootDir, 'automation/runtime/publish-staging/rejected-candidates.json'),
  [],
  { missingOk: true },
);
const jsonManifest = readJson(path.join(rootDir, 'dist/data/errors/manifest.json'), null, { missingOk: true });
const indexabilitySummary = readJson(path.join(rootDir, 'dist/data/errors/indexability-summary.json'), null, {
  missingOk: true,
});
const thinAudit = readJson(path.join(rootDir, 'automation/runtime/thin-content-audit-report.json'), null, {
  missingOk: true,
});
const pipelineValidation = readJson(path.join(rootDir, 'automation/runtime/pipeline-validation.json'), null, {
  missingOk: true,
});
const pipelineHealth = readJson(path.join(rootDir, 'automation/runtime/pipeline-health.json'), null, { missingOk: true });

const markdownErrorFiles = listFiles(path.join(rootDir, 'src/content/errors'), (file) => file.endsWith('.md'));
const legacyPublished = readJson(path.join(rootDir, 'config/legacy-published-slugs.json'), [], { missingOk: true });
const sitemapUrlCount = countSitemapUrls();
const distHtmlPages = listFiles(path.join(rootDir, 'dist'), (file) => file.endsWith('.html'));
const errorHtmlPages = distHtmlPages.filter((file) =>
  /^errors\/[^/]+\/index\.html$/.test(path.relative(path.join(rootDir, 'dist'), file).replace(/\\/g, '/')),
);
const jsonShards = Array.isArray(jsonManifest?.shards) ? jsonManifest.shards : [];
const largestShardBytes = jsonShards.length
  ? Math.max(...jsonShards.map((shard) => Number(shard.bytes ?? 0)))
  : 0;

const latestAcceptedHtml = candidateSlugs(
  Array.isArray(publishManifest?.candidates)
    ? publishManifest.candidates.filter(
        (candidate) => candidate.publish_status === 'indexable_html' || candidate.accepted_new_html === true,
      )
    : [],
);
const latestDataOnly = candidateSlugs(dataOnlyCandidates).length
  ? candidateSlugs(dataOnlyCandidates)
  : candidateSlugsFromManifest('data_only');
const latestNeedsReview = candidateSlugs(needsReviewCandidates).length
  ? candidateSlugs(needsReviewCandidates)
  : candidateSlugsFromManifest('needs_review');
const latestRejected = candidateSlugs(rejectedCandidates).length
  ? candidateSlugs(rejectedCandidates)
  : candidateSlugsFromManifest('rejected');

const git = buildGitStatus();
const productionBuildInfo = await fetchProductionBuildInfo(git);
const deployment = detectDeploymentStatus(productionBuildInfo, git);
const technicalFiles = buildTechnicalFiles();
const quality = buildQuality();
const publishGate = buildPublishGate();
const buildState = buildBuildState();
const latestChanges = buildLatestChanges();
const riskAlerts = buildRiskAlerts();
const nextRecommendedAction = chooseNextAction(riskAlerts);

const retention = applyRetention();

const status = {
  project_slug: 'dev-error-db',
  generated_at: generatedAt.toISOString(),
  git,
  build_state: buildState,
  publish_gate: publishGate,
  latest_changes: latestChanges.latest_changes,
  quality,
  technical_files: technicalFiles,
  deployment,
  risk_alerts: riskAlerts,
  warnings,
  errors,
  next_recommended_action: nextRecommendedAction,
  retention,
  source_files: buildSourceFiles(),
};

const latestChangesReport = {
  project_slug: 'dev-error-db',
  generated_at: generatedAt.toISOString(),
  latest_changes: latestChanges.latest_changes,
  changed_files_summary: git.changed_files_summary,
  report_paths: {
    publish_pipeline_status_md: path.join(currentDir, 'publish-pipeline-status.md'),
    latest_changes_md: path.join(currentDir, 'latest-changes.md'),
  },
  warnings,
};

const statusMd = buildStatusMarkdown(status);
const latestChangesMd = buildLatestChangesMarkdown(latestChangesReport);

for (const dir of [currentDir, runDir, dataHubStateDir]) mkdirSync(dir, { recursive: true });
writeJson(path.join(currentDir, 'publish-pipeline-status.json'), status);
writeFileSync(path.join(currentDir, 'publish-pipeline-status.md'), statusMd, 'utf8');
writeJson(path.join(currentDir, 'latest-changes.json'), latestChangesReport);
writeFileSync(path.join(currentDir, 'latest-changes.md'), latestChangesMd, 'utf8');
writeJson(path.join(runDir, 'publish-pipeline-status.json'), status);
writeFileSync(path.join(runDir, 'publish-pipeline-status.md'), statusMd, 'utf8');
writeJson(path.join(runDir, 'latest-changes.json'), latestChangesReport);
writeFileSync(path.join(runDir, 'latest-changes.md'), latestChangesMd, 'utf8');
writeJson(path.join(dataHubStateDir, 'publish-pipeline-status.json'), status);
writeJson(path.join(dataHubStateDir, 'latest-changes.json'), latestChangesReport);

console.log(`[status:publish] wrote ${path.relative(rootDir, path.join(currentDir, 'publish-pipeline-status.json'))}`);
console.log(`[status:publish] wrote ${path.relative(rootDir, path.join(currentDir, 'latest-changes.json'))}`);
console.log(`[status:publish] synced Data Hub state: ${dataHubStateDir}`);
console.log(`[status:publish] next action: ${nextRecommendedAction}`);

function buildGitStatus() {
  const statusPorcelain = gitOutput(['status', '--porcelain']);
  const branch = gitOutput(['branch', '--show-current']) || 'unknown';
  const headCommit = gitOutput(['rev-parse', '--short=12', 'HEAD']) || 'unknown';
  const headMessage = gitOutput(['log', '-1', '--pretty=%s']) || 'unknown';
  const upstream = gitOutput(['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}'], { okExit: true });
  const aheadBehind = upstream
    ? parseAheadBehind(gitOutput(['rev-list', '--left-right', '--count', `${upstream}...HEAD`], { okExit: true }))
    : null;
  const changedFiles = statusPorcelain
    .split('\n')
    .filter(Boolean)
    .map((line) => ({ status: line.slice(0, 2).trim(), path: line.slice(3) }));
  const recentChangedFiles = gitOutput(['diff-tree', '--no-commit-id', '--name-status', '-r', 'HEAD~5..HEAD'], {
    okExit: true,
  })
    .split('\n')
    .filter(Boolean)
    .slice(0, 80);

  return {
    branch,
    head_commit: headCommit,
    head_message: headMessage,
    clean_working_tree: changedFiles.length === 0,
    changed_files_summary: {
      working_tree_count: changedFiles.length,
      working_tree_files: changedFiles,
      recent_commit_files_count: recentChangedFiles.length,
      recent_commit_files: recentChangedFiles,
    },
    ahead_behind: aheadBehind,
  };
}

function buildBuildState() {
  return {
    generated_total_pages: distHtmlPages.length,
    generated_error_html_pages: errorHtmlPages.length,
    sitemap_url_count: sitemapUrlCount,
    json_manifest_exists: Boolean(jsonManifest),
    json_shard_count: jsonShards.length,
    largest_shard_bytes: largestShardBytes,
    data_browser_exists: existsSync(path.join(rootDir, 'dist/data-browser/index.html')),
  };
}

function buildPublishGate() {
  return {
    total_error_records: Number(publishManifest?.total_error_records ?? jsonManifest?.total_records ?? markdownErrorFiles.length),
    legacy_published_count: Number(publishManifest?.legacy_published_count ?? legacyPublished.length ?? 0),
    new_candidate_count: Number(publishManifest?.new_candidate_count ?? latestAcceptedHtml.length + latestDataOnly.length),
    accepted_new_html_count: Number(publishManifest?.accepted_new_html_count ?? latestAcceptedHtml.length),
    data_only_count: Number(publishManifest?.data_only_count ?? jsonManifest?.data_only_records ?? latestDataOnly.length),
    needs_review_count: Number(publishManifest?.needs_review_count ?? needsReviewCandidates.length),
    rejected_count: Number(publishManifest?.rejected_count ?? rejectedCandidates.length),
    max_new_html_per_run: Number(publishManifest?.max_new_html_per_run ?? 100),
    build_budget_status: String(publishManifest?.build_budget_status ?? pipelineHealth?.build_status ?? 'unknown'),
    latest_reasons_summary: publishManifest?.reasons_summary ?? {},
  };
}

function buildLatestChanges() {
  const previous = previousLatestChanges?.latest_changes ?? {};
  return {
    latest_changes: {
      new_error_pages_since_last_run: countNew(latestAcceptedHtml, previous.latest_new_slugs),
      new_data_only_records_since_last_run: countNew(latestDataOnly, previous.latest_data_only_slugs),
      new_needs_review_records_since_last_run: countNew(latestNeedsReview, previous.latest_needs_review_slugs),
      latest_new_slugs: latestAcceptedHtml.slice(0, 25),
      latest_data_only_slugs: latestDataOnly.slice(0, 25),
      latest_needs_review_slugs: latestNeedsReview.slice(0, 25),
      latest_rejected_slugs: latestRejected.slice(0, 25),
    },
  };
}

function buildQuality() {
  const nullLeakCount = optionalNumber(pipelineValidation?.summary?.null_undefined_leaks_count);
  return {
    thin_pages_count: Array.isArray(thinAudit?.thin_pages) ? thinAudit.thin_pages.length : 0,
    broken_internal_links_count: Array.isArray(thinAudit?.broken_internal_links) ? thinAudit.broken_internal_links.length : 0,
    unsafe_external_links_count: Array.isArray(thinAudit?.unsafe_external_links) ? thinAudit.unsafe_external_links.length : 0,
    null_undefined_leaks_count: nullLeakCount,
    adSense_readiness_status: technicalFiles.ads_txt_status === 'ok' ? 'ok' : 'check_required',
  };
}

function buildTechnicalFiles() {
  const adsTxt = existsSync(path.join(rootDir, 'public/ads.txt'));
  const robots = existsSync(path.join(rootDir, 'public/robots.txt'));
  return {
    ads_txt_status: adsTxt ? 'ok' : 'missing',
    robots_status: robots ? 'ok' : 'missing',
    sitemap_status: sitemapUrlCount > 0 ? 'ok' : 'missing_or_empty',
  };
}

function detectDeploymentStatus(productionBuildInfo, gitStatus) {
  const deploymentStatus = {
    latest_actions_status: 'unknown',
    latest_pages_deploy_status: 'unknown',
    production_check_status: productionBuildInfo.status,
    production_check_label: productionBuildInfo.label,
    production_commit: productionBuildInfo.build_info?.commit_sha ?? null,
    production_commit_short_sha: productionBuildInfo.build_info?.commit_short_sha ?? null,
    production_built_at: productionBuildInfo.build_info?.built_at ?? null,
    production_github_run_id: productionBuildInfo.build_info?.github_run_id ?? null,
    production_github_run_number: productionBuildInfo.build_info?.github_run_number ?? null,
    production_github_workflow: productionBuildInfo.build_info?.github_workflow ?? null,
    production_build_info_url: productionBuildInfo.url,
    production_build_info_error: productionBuildInfo.error,
  };

  if (productionBuildInfo.warning) warnings.push(productionBuildInfo.warning);

  const ghPath = commandExists('gh');
  if (!ghPath) {
    warnings.push('gh CLI unavailable; deployment status marked unknown');
    return deploymentStatus;
  }

  try {
    execFileSync(ghPath, ['auth', 'status'], { cwd: rootDir, stdio: 'pipe', timeout: 5000 });
    const latestRunRaw = execFileSync(
      ghPath,
      ['run', 'list', '--limit', '1', '--json', 'status,conclusion,workflowName,createdAt,displayTitle'],
      { cwd: rootDir, encoding: 'utf8', timeout: 8000 },
    );
    const latestRun = JSON.parse(latestRunRaw)[0];
    if (latestRun) {
      deploymentStatus.latest_actions_status = `${latestRun.workflowName ?? 'workflow'}:${latestRun.status ?? 'unknown'}:${latestRun.conclusion ?? 'unknown'}`;
    }

    const pagesRaw = execFileSync(
      ghPath,
      ['api', 'repos/:owner/:repo/pages/deployments', '--paginate', '--jq', '.[0] | {status:.status, created_at:.created_at}'],
      { cwd: rootDir, encoding: 'utf8', timeout: 8000 },
    ).trim();
    if (pagesRaw) {
      const pages = JSON.parse(pagesRaw);
      deploymentStatus.latest_pages_deploy_status = `${pages.status ?? 'unknown'} ${pages.created_at ?? ''}`.trim();
    }
  } catch (error) {
    warnings.push(`gh deployment status unavailable: ${error.message}`);
  }

  return deploymentStatus;
}

async function fetchProductionBuildInfo(gitStatus) {
  const url = 'https://dev-error-db.com/build-info.json';
  const attempts = 2;
  let lastError = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { accept: 'application/json' },
      });
      clearTimeout(timeout);

      if (!response.ok) {
        lastError = `HTTP ${response.status}`;
        continue;
      }

      const buildInfo = await response.json();
      if (!isValidPublicBuildInfo(buildInfo)) {
        return {
          status: 'unknown',
          label: '未知',
          url,
          build_info: null,
          error: 'build-info.json is missing required public fields',
          warning: 'production build-info.json is reachable but invalid',
        };
      }

      const productionCommit = normalizeCommit(buildInfo.commit_sha);
      const localCommit = normalizeCommit(gitStatus.head_commit);
      const isCurrent =
        productionCommit !== 'unknown' &&
        localCommit !== 'unknown' &&
        (productionCommit === localCommit || productionCommit.startsWith(localCommit) || localCommit.startsWith(productionCommit));

      return {
        status: isCurrent ? 'deployed_current' : 'deployed_stale',
        label: isCurrent ? '已部署最新版本' : '线上版本落后',
        url,
        build_info: buildInfo,
        error: null,
        warning: null,
      };
    } catch (error) {
      clearTimeout(timeout);
      lastError = error.message;
    }
  }

  return {
    status: 'failed',
    label: '部署检查失败',
    url,
    build_info: null,
    error: lastError,
    warning: `production build-info check failed: ${lastError}`,
  };
}

function isValidPublicBuildInfo(buildInfo) {
  return (
    buildInfo &&
    buildInfo.project === 'dev-error-db' &&
    buildInfo.domain === 'dev-error-db.com' &&
    typeof buildInfo.commit_sha === 'string' &&
    typeof buildInfo.commit_short_sha === 'string' &&
    typeof buildInfo.branch === 'string' &&
    typeof buildInfo.built_at === 'string' &&
    ['github_actions', 'local_build'].includes(buildInfo.source)
  );
}

function normalizeCommit(commit) {
  return String(commit || 'unknown').trim();
}

function buildRiskAlerts() {
  const alerts = [];
  if (!git.clean_working_tree) alerts.push('Working tree is dirty; avoid publishing until reviewed');
  if (publishGate.build_budget_status !== 'ok') alerts.push(`Publish build budget status is ${publishGate.build_budget_status}`);
  if (quality.thin_pages_count > 0) alerts.push(`${quality.thin_pages_count} thin pages require review`);
  if (quality.broken_internal_links_count > 0) alerts.push(`${quality.broken_internal_links_count} broken internal links require repair`);
  if (quality.unsafe_external_links_count > 0) alerts.push(`${quality.unsafe_external_links_count} unsafe external links require repair`);
  if (technicalFiles.ads_txt_status !== 'ok') alerts.push('ads.txt missing or unavailable');
  if (technicalFiles.robots_status !== 'ok') alerts.push('robots.txt missing or unavailable');
  if (technicalFiles.sitemap_status !== 'ok') alerts.push('sitemap missing or empty');
  if (!buildState.json_manifest_exists) alerts.push('JSON manifest missing; run build before publishing');
  if (!buildState.data_browser_exists) alerts.push('data-browser build output missing');
  return alerts;
}

function chooseNextAction(alerts) {
  if (!git.clean_working_tree) return 'Review local changes before publishing or running deploy checks';
  if (!buildState.json_manifest_exists || !buildState.sitemap_url_count) return 'Run npm run build, then npm run status:publish';
  if (alerts.length > 0) return 'Resolve risk alerts, rerun validation, then refresh publish status';
  if (publishGate.accepted_new_html_count > 0) return 'Review latest accepted HTML pages and monitor GitHub Pages deployment';
  if (publishGate.data_only_count > 0) return 'Review data_only catalog visibility in /data-browser/';
  return 'Keep monitoring; no publish blockers detected in latest snapshot';
}

function buildSourceFiles() {
  const paths = {
    publish_manifest: 'automation/runtime/publish-manifest.json',
    publish_manifest_markdown: 'automation/runtime/publish-manifest.md',
    data_only_candidates: 'automation/runtime/publish-staging/data-only-candidates.json',
    needs_review_candidates: 'automation/runtime/publish-staging/needs-review-candidates.json',
    rejected_candidates: 'automation/runtime/publish-staging/rejected-candidates.json',
    json_manifest: 'dist/data/errors/manifest.json',
    indexability_summary: 'dist/data/errors/indexability-summary.json',
    thin_content_audit: 'automation/runtime/thin-content-audit-report.json',
    pipeline_validation: 'automation/runtime/pipeline-validation.json',
  };
  return Object.fromEntries(
    Object.entries(paths).map(([key, relative]) => {
      const absolute = path.join(rootDir, relative);
      return [key, { path: absolute, exists: existsSync(absolute) }];
    }),
  );
}

function applyRetention() {
  mkdirSync(runsDir, { recursive: true });
  const now = generatedAt.getTime();
  const entries = readdirSync(runsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  const parsed = [];
  let unparsedCount = 0;

  for (const entry of entries) {
    const parsedDate = parseRunTimestamp(entry.name);
    const fullPath = path.join(runsDir, entry.name);
    if (!parsedDate) {
      unparsedCount += 1;
      warnings.push(`retention skipped unparseable run directory: ${entry.name}`);
      continue;
    }
    parsed.push({ name: entry.name, fullPath, time: parsedDate.getTime() });
  }

  parsed.sort((a, b) => b.time - a.time);
  const keepByCount = new Set(parsed.slice(0, retentionPolicy.max_runs).map((entry) => entry.name));
  const maxAgeMs = retentionPolicy.max_age_days * 86400_000;
  let deleted = 0;

  for (const entry of parsed) {
    const tooOld = now - entry.time > maxAgeMs;
    const beyondCount = !keepByCount.has(entry.name);
    if (tooOld || beyondCount) {
      rmSync(entry.fullPath, { recursive: true, force: true });
      deleted += 1;
    }
  }

  const retainedRunsCount = readdirSync(runsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
  return {
    ...retentionPolicy,
    retained_runs_count: retainedRunsCount,
    deleted_old_runs_count: deleted,
    unparseable_runs_kept_count: unparsedCount,
  };
}

function buildStatusMarkdown(report) {
  return `# Dev Error DB Publish Pipeline Status

Generated: ${report.generated_at}

## Summary
- Overall: ${report.risk_alerts.length ? 'attention required' : 'healthy'}
- Branch: ${report.git.branch}
- Head: ${report.git.head_commit} - ${report.git.head_message}
- Working tree clean: ${yesNo(report.git.clean_working_tree)}
- Next action: ${report.next_recommended_action}

## Latest changes
- New HTML pages since last run: ${report.latest_changes.new_error_pages_since_last_run}
- New data_only records since last run: ${report.latest_changes.new_data_only_records_since_last_run}
- New needs_review records since last run: ${report.latest_changes.new_needs_review_records_since_last_run}
- Latest new slugs: ${listInline(report.latest_changes.latest_new_slugs)}
- Latest data_only slugs: ${listInline(report.latest_changes.latest_data_only_slugs)}
- Latest needs_review slugs: ${listInline(report.latest_changes.latest_needs_review_slugs)}
- Latest rejected slugs: ${listInline(report.latest_changes.latest_rejected_slugs)}

## Publish gate result
- Total records: ${report.publish_gate.total_error_records}
- Legacy published: ${report.publish_gate.legacy_published_count}
- New candidates: ${report.publish_gate.new_candidate_count}
- Accepted new HTML: ${report.publish_gate.accepted_new_html_count}
- data_only: ${report.publish_gate.data_only_count}
- needs_review: ${report.publish_gate.needs_review_count}
- rejected: ${report.publish_gate.rejected_count}
- max_new_html_per_run: ${report.publish_gate.max_new_html_per_run}
- Build budget status: ${report.publish_gate.build_budget_status}
- Reasons: ${JSON.stringify(report.publish_gate.latest_reasons_summary)}

## HTML/data_only/staging split
- Generated error HTML pages: ${report.build_state.generated_error_html_pages}
- Generated total HTML pages: ${report.build_state.generated_total_pages}
- data_only candidates: ${report.publish_gate.data_only_count}
- needs_review candidates: ${report.publish_gate.needs_review_count}
- rejected candidates: ${report.publish_gate.rejected_count}

## Build/sitemap/JSON shard metrics
- Sitemap URLs: ${report.build_state.sitemap_url_count}
- JSON manifest exists: ${yesNo(report.build_state.json_manifest_exists)}
- JSON shard count: ${report.build_state.json_shard_count}
- Largest shard bytes: ${report.build_state.largest_shard_bytes}
- Data browser exists: ${yesNo(report.build_state.data_browser_exists)}

## Quality checks
- Thin pages: ${report.quality.thin_pages_count}
- Broken internal links: ${report.quality.broken_internal_links_count}
- Unsafe external links: ${report.quality.unsafe_external_links_count}
- null/undefined leaks: ${report.quality.null_undefined_leaks_count ?? 'unknown'}
- AdSense readiness: ${report.quality.adSense_readiness_status}
- ads.txt: ${report.technical_files.ads_txt_status}
- robots.txt: ${report.technical_files.robots_status}
- sitemap: ${report.technical_files.sitemap_status}

## Deployment status
- GitHub Actions: ${report.deployment.latest_actions_status}
- GitHub Pages deploy: ${report.deployment.latest_pages_deploy_status}
- Production check: ${report.deployment.production_check_status}
- Production commit: ${report.deployment.production_commit_short_sha ?? report.deployment.production_commit ?? 'unknown'}
- Production build time: ${report.deployment.production_built_at ?? 'unknown'}

## Risks
${report.risk_alerts.length ? report.risk_alerts.map((alert) => `- ${alert}`).join('\n') : '- None detected'}

## Warnings
${report.warnings.length ? report.warnings.map((warning) => `- ${warning}`).join('\n') : '- None'}

## Next action
${report.next_recommended_action}
`;
}

function buildLatestChangesMarkdown(report) {
  const changes = report.latest_changes;
  return `# Dev Error DB Latest Changes

Generated: ${report.generated_at}

## Latest new HTML pages
${changes.latest_new_slugs.length ? changes.latest_new_slugs.map((slug) => `- ${slug}`).join('\n') : '- None'}

## Latest data_only records
${changes.latest_data_only_slugs.length ? changes.latest_data_only_slugs.map((slug) => `- ${slug}`).join('\n') : '- None'}

## Latest needs_review records
${changes.latest_needs_review_slugs.length ? changes.latest_needs_review_slugs.map((slug) => `- ${slug}`).join('\n') : '- None'}

## Latest rejected records
${changes.latest_rejected_slugs.length ? changes.latest_rejected_slugs.map((slug) => `- ${slug}`).join('\n') : '- None'}

## Changed files from recent commits
${
  report.changed_files_summary.recent_commit_files.length
    ? report.changed_files_summary.recent_commit_files.map((file) => `- ${file}`).join('\n')
    : '- None detected'
}
`;
}

function readJson(filePath, fallback, options = {}) {
  if (!existsSync(filePath)) {
    if (!options.missingOk) warnings.push(`missing optional source file: ${filePath}`);
    return fallback;
  }
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch (error) {
    errors.push(`failed to parse ${filePath}: ${error.message}`);
    return fallback;
  }
}

function writeJson(filePath, value) {
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function listFiles(directory, predicate) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(filePath, predicate));
    else if (predicate(filePath)) files.push(filePath);
  }
  return files;
}

function countSitemapUrls() {
  const distDir = path.join(rootDir, 'dist');
  if (!existsSync(distDir)) return 0;
  return listFiles(distDir, (file) => /^sitemap-\d+\.xml$/.test(path.basename(file))).reduce((total, file) => {
    const xml = readFileSync(file, 'utf8');
    return total + [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].length;
  }, 0);
}

function candidateSlugs(candidates) {
  return candidates
    .map((candidate) => candidate?.slug ?? candidate?.record?.slug ?? candidate?.candidate?.slug)
    .filter(Boolean)
    .map(String);
}

function candidateSlugsFromManifest(status) {
  if (!Array.isArray(publishManifest?.candidates)) return [];
  return candidateSlugs(publishManifest.candidates.filter((candidate) => candidate.publish_status === status));
}

function countNew(current, previous) {
  const previousSet = new Set(Array.isArray(previous) ? previous : []);
  return current.filter((slug) => !previousSet.has(slug)).length;
}

function gitOutput(args, options = {}) {
  try {
    return execFileSync('git', args, { cwd: rootDir, encoding: 'utf8', timeout: 8000 }).trim();
  } catch (error) {
    if (!options.okExit) warnings.push(`git ${args.join(' ')} unavailable: ${error.message}`);
    return '';
  }
}

function parseAheadBehind(raw) {
  const [behind, ahead] = raw.split(/\s+/).map((value) => Number(value));
  if (!Number.isFinite(ahead) || !Number.isFinite(behind)) return null;
  return { ahead, behind };
}

function commandExists(command) {
  try {
    return execFileSync('which', [command], { encoding: 'utf8', timeout: 2000 }).trim();
  } catch {
    return null;
  }
}

function optionalNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function timestampId(date) {
  return date.toISOString().replace(/[:.]/g, '-');
}

function parseRunTimestamp(name) {
  const normalized = name.replace(
    /^(\d{4}-\d{2}-\d{2}T\d{2})-(\d{2})-(\d{2})-(\d{3}Z)$/,
    '$1:$2:$3.$4',
  );
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function yesNo(value) {
  return value ? 'yes' : 'no';
}

function listInline(values) {
  return values.length ? values.slice(0, 10).join(', ') : 'none';
}
