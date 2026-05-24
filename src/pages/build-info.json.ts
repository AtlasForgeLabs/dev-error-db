import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export function GET() {
  const commitSha = process.env.GITHUB_SHA || gitOutput(['rev-parse', 'HEAD']) || 'unknown';
  const branch = process.env.GITHUB_REF_NAME || gitOutput(['rev-parse', '--abbrev-ref', 'HEAD']) || 'unknown';
  const buildInfo = {
    project: 'dev-error-db',
    domain: 'dev-error-db.com',
    commit_sha: commitSha,
    commit_short_sha: commitSha === 'unknown' ? 'unknown' : commitSha.slice(0, 12),
    branch,
    built_at: new Date().toISOString(),
    github_run_id: process.env.GITHUB_RUN_ID || null,
    github_run_number: process.env.GITHUB_RUN_NUMBER || null,
    github_workflow: process.env.GITHUB_WORKFLOW || null,
    source: process.env.GITHUB_ACTIONS === 'true' ? 'github_actions' : 'local_build',
    package_name: readPackageName(),
    site_name: 'Dev Error DB',
  };

  return new Response(`${JSON.stringify(buildInfo, null, 2)}\n`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function gitOutput(args: string[]): string {
  try {
    return execFileSync('git', args, { cwd: rootDir, encoding: 'utf8', timeout: 3000 }).trim();
  } catch {
    return '';
  }
}

function readPackageName(): string {
  try {
    const pkg = JSON.parse(readFileSync(path.join(rootDir, 'package.json'), 'utf8')) as { name?: string };
    return pkg.name || 'dev-error-db';
  } catch {
    return 'dev-error-db';
  }
}
