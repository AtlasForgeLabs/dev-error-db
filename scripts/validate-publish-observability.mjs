import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataHubStateDir =
  '/Users/mini/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/state';

const requiredJsonFiles = [
  'automation/runtime/publish-observability/current/publish-pipeline-status.json',
  'automation/runtime/publish-observability/current/latest-changes.json',
  path.join(dataHubStateDir, 'publish-pipeline-status.json'),
  path.join(dataHubStateDir, 'latest-changes.json'),
];

const requiredMarkdownFiles = [
  'automation/runtime/publish-observability/current/publish-pipeline-status.md',
  'automation/runtime/publish-observability/current/latest-changes.md',
];

const errors = [];

for (const file of requiredJsonFiles) {
  const filePath = path.isAbsolute(file) ? file : path.join(rootDir, file);
  if (!existsSync(filePath)) {
    errors.push(`missing required JSON: ${filePath}`);
    continue;
  }

  try {
    const parsed = JSON.parse(readFileSync(filePath, 'utf8'));
    if (parsed.project_slug !== 'dev-error-db') {
      errors.push(`unexpected project_slug in ${filePath}`);
    }
  } catch (error) {
    errors.push(`invalid JSON in ${filePath}: ${error.message}`);
  }
}

for (const file of requiredMarkdownFiles) {
  const filePath = path.join(rootDir, file);
  if (!existsSync(filePath)) {
    errors.push(`missing required Markdown: ${filePath}`);
  }
}

const runsDir = path.join(rootDir, 'automation/runtime/publish-observability/runs');
if (!existsSync(runsDir)) {
  errors.push(`missing runs directory: ${runsDir}`);
} else {
  const runs = readdirSync(runsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  if (runs.length > 30) {
    errors.push(`retention exceeded max runs: ${runs.length} > 30`);
  }
}

if (errors.length > 0) {
  console.error('[validate:publish-observability] failed');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('[validate:publish-observability] ok');
