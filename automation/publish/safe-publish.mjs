import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadPipelineState, loadPolicy } from '../lib/pipeline-guardrails.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const reportPath = path.join(projectRoot, 'automation', 'publish', 'output', 'latest-publish.json');
const manualApproved = process.argv.includes('--manual-approved');

const allowedPatterns = [
  /^src\/content\/errors\/[^/]+\.md$/,
  /^data\/error-seeds\.json$/,
  /^automation\/import\/output\/latest-import\.json$/,
  /^automation\/import\/output\/imported-candidates\.json$/,
  /^automation\/import\/output\/import-history\/[^/]+\.json$/,
  /^automation\/import\/output\/import-reports\/[^/]+\.json$/,
  /^automation\/expand\/output\/[^/]+\.json$/,
];

const report = {
  status: 'failed',
  reason: '',
  commit_hash: null,
  changed_files: [],
  allowed_files: [],
  blocked_files: [],
  build_status: 'not_run',
  validation_status: 'not_run',
  pushed_at: null,
};

main().catch(async (error) => {
  report.status = 'failed';
  report.reason = error.message;
  await writeReport();
  console.error(`[publish:safe] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  process.chdir(projectRoot);

  const policy = await loadPolicy();
  const state = await loadPipelineState();

  if (state.paused) {
    return fail('pipeline is paused');
  }

  if (policy.auto_publish_enabled === false && !manualApproved) {
    return fail('auto_publish_enabled is false; refusing without --manual-approved');
  }

  if (currentBranch() !== 'main') {
    return fail('current branch is not main');
  }

  if (!hasRemote()) {
    return fail('git remote is missing');
  }

  runChecked('npm', ['run', 'pipeline:validate'], 'validation_status');
  runChecked('npm', ['run', 'build'], 'build_status');
  runChecked('npm', ['run', 'report']);

  const status = gitStatus();
  report.changed_files = status.map((entry) => entry.path);
  report.allowed_files = status.filter((entry) => isAllowedPath(entry.path)).map((entry) => entry.path);
  report.blocked_files = status.filter((entry) => !isAllowedPath(entry.path)).map((entry) => entry.path);

  if (report.changed_files.length === 0) {
    report.status = 'skipped';
    report.reason = 'nothing to publish';
    await writeReport();
    console.log('[publish:safe] nothing to publish');
    return;
  }

  if (report.blocked_files.length > 0) {
    return fail(`unsafe git changes detected: ${report.blocked_files.join(', ')}`);
  }

  if (report.allowed_files.length === 0) {
    report.status = 'skipped';
    report.reason = 'nothing to publish';
    await writeReport();
    console.log('[publish:safe] nothing to publish');
    return;
  }

  runGit(['add', '--', ...report.allowed_files]);
  runGit(['commit', '-m', 'Publish Dev Error DB generated pages']);
  const commitHash = runGit(['rev-parse', 'HEAD']).stdout.trim();
  runGit(['push']);

  report.status = 'published';
  report.reason = 'published safe generated changes';
  report.commit_hash = commitHash;
  report.pushed_at = new Date().toISOString();
  await writeReport();

  console.log(`[publish:safe] pushed commit ${commitHash}`);
  console.log('[publish:safe] GitHub Actions should trigger from the pushed main branch commit.');
}

function isAllowedPath(filePath) {
  const normalized = filePath.replaceAll(path.sep, '/');
  return allowedPatterns.some((pattern) => pattern.test(normalized));
}

function currentBranch() {
  return runGit(['branch', '--show-current']).stdout.trim();
}

function hasRemote() {
  return runGit(['remote']).stdout.trim().length > 0;
}

function gitStatus() {
  const output = runGit(['status', '--porcelain=v1', '--untracked-files=all', '-z']).stdout;
  if (!output) return [];

  const parts = output.split('\0').filter(Boolean);
  const entries = [];

  for (let index = 0; index < parts.length; index++) {
    const record = parts[index];
    const status = record.slice(0, 2);
    const filePath = record.slice(3);

    if (status.startsWith('R') || status.startsWith('C')) {
      const targetPath = parts[++index];
      entries.push({ status, path: targetPath });
    } else {
      entries.push({ status, path: filePath });
    }
  }

  return entries;
}

function runChecked(command, args, statusField) {
  const result = spawnSync(command, args, {
    cwd: projectRoot,
    encoding: 'utf8',
    stdio: 'inherit',
  });

  if (statusField) {
    report[statusField] = result.status === 0 ? 'success' : 'failed';
  }

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed`);
  }
}

function runGit(args) {
  const result = spawnSync('git', args, {
    cwd: projectRoot,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    const stderr = result.stderr?.trim();
    throw new Error(`git ${args.join(' ')} failed${stderr ? `: ${stderr}` : ''}`);
  }

  return result;
}

async function fail(reason) {
  report.status = 'failed';
  report.reason = reason;
  await writeReport();
  console.error(`[publish:safe] ${reason}`);
  process.exitCode = 1;
}

async function writeReport() {
  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
}
