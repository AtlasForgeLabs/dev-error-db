import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildInfoPath = path.join(rootDir, 'dist/build-info.json');
const errors = [];

if (!existsSync(buildInfoPath)) {
  errors.push(`missing build info file: ${buildInfoPath}`);
} else {
  try {
    const raw = readFileSync(buildInfoPath, 'utf8');
    const parsed = JSON.parse(raw);

    if (parsed.project !== 'dev-error-db') errors.push('project must be dev-error-db');
    if (parsed.domain !== 'dev-error-db.com') errors.push('domain must be dev-error-db.com');
    if (!parsed.commit_sha) errors.push('commit_sha is required, or must be explicitly unknown');
    if (!parsed.commit_short_sha) errors.push('commit_short_sha is required, or must be explicitly unknown');
    if (!parsed.branch) errors.push('branch is required, or must be explicitly unknown');
    if (!parsed.built_at || Number.isNaN(Date.parse(parsed.built_at))) {
      errors.push('built_at must be an ISO timestamp');
    }
    if (!['github_actions', 'local_build'].includes(parsed.source)) {
      errors.push('source must be github_actions or local_build');
    }

    const serialized = JSON.stringify(parsed).toLowerCase();
    for (const forbidden of ['token', 'secret', 'password', 'private_key', 'api_key']) {
      if (serialized.includes(forbidden)) errors.push(`build info must not include secret-like field/value: ${forbidden}`);
    }
  } catch (error) {
    errors.push(`invalid build-info JSON: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error('[validate-build-info] failed');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('[validate-build-info] ok');
