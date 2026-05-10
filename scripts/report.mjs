import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const packageJson = await readJson('package.json');
const errorFiles = await listMarkdownFiles('src/content/errors');
const latestErrorFiles = await latestFiles(errorFiles, 10);
const distExists = existsSync(path.join(rootDir, 'dist'));
const sitemapIndexExists = existsSync(path.join(rootDir, 'dist', 'sitemap-index.xml'));
const sitemapExists = existsSync(path.join(rootDir, 'dist', 'sitemap-0.xml'));

print('Project', packageJson.name ?? 'Dev Error DB');
print('Git branch', gitOutput(['branch', '--show-current']) || '(unknown)');
print('Git status', gitStatusSummary());
print('Markdown error pages', String(errorFiles.length));

console.log('\nLatest 10 error pages by modified time:');
for (const file of latestErrorFiles) {
  console.log(`- ${file.relativePath} (${file.mtime.toISOString()})`);
}

console.log('\nDomain and static files:');
printFileValue('CNAME');
printFileValue('public/CNAME');
printExists('public/robots.txt');

console.log('\nPackage scripts:');
print('build', hasScript('build') ? 'yes' : 'no');
print('generate:errors', hasScript('generate:errors') ? 'yes' : 'no');

console.log('\nBuild artifacts:');
print('dist exists', distExists ? 'yes' : 'no');
print('dist/sitemap-index.xml', sitemapIndexExists ? 'yes' : 'no');
print('dist/sitemap-0.xml', sitemapExists ? 'yes' : 'no');
print('Build reminder', buildReminder());

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(rootDir, relativePath), 'utf8'));
}

async function listMarkdownFiles(relativeDir) {
  const directory = path.join(rootDir, relativeDir);

  if (!existsSync(directory)) {
    return [];
  }

  const entries = await readdir(directory, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => path.join(directory, entry.name));
}

async function latestFiles(files, limit) {
  const withStats = await Promise.all(
    files.map(async (file) => {
      const fileStat = await stat(file);
      return {
        relativePath: path.relative(rootDir, file),
        mtime: fileStat.mtime,
      };
    })
  );

  return withStats.sort((a, b) => b.mtime.getTime() - a.mtime.getTime()).slice(0, limit);
}

function gitStatusSummary() {
  const status = gitOutput(['status', '--short']);

  if (!status) {
    return 'clean';
  }

  const lines = status.split('\n').filter(Boolean);
  const staged = lines.filter((line) => line[0] !== ' ' && line[0] !== '?').length;
  const unstaged = lines.filter((line) => line[1] !== ' ' && line[0] !== '?').length;
  const untracked = lines.filter((line) => line.startsWith('??')).length;

  return `${lines.length} changed item(s): ${staged} staged, ${unstaged} unstaged, ${untracked} untracked`;
}

function gitOutput(args) {
  try {
    return execFileSync('git', args, {
      cwd: rootDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trimEnd();
  } catch {
    return '';
  }
}

function printFileValue(relativePath) {
  const filePath = path.join(rootDir, relativePath);

  if (!existsSync(filePath)) {
    print(relativePath, 'missing');
    return;
  }

  const value = readFileSync(filePath, 'utf8').trim();
  print(relativePath, value || '(empty)');
}

function printExists(relativePath) {
  print(relativePath, existsSync(path.join(rootDir, relativePath)) ? 'exists' : 'missing');
}

function hasScript(scriptName) {
  return Boolean(packageJson.scripts?.[scriptName]);
}

function buildReminder() {
  if (!distExists) {
    return 'dist is missing; run npm run build before publishing.';
  }

  if (!sitemapIndexExists || !sitemapExists) {
    return 'dist is missing sitemap files; run npm run build before publishing.';
  }

  const latestContentTime = latestErrorFiles[0]?.mtime.getTime() ?? 0;
  const distTime = statSync(path.join(rootDir, 'dist')).mtime.getTime();

  if (latestContentTime > distTime) {
    return 'dist may be stale; run npm run build before publishing.';
  }

  return 'dist exists with sitemap files. Rebuild after content or config changes.';
}

function print(label, value) {
  console.log(`${label}: ${value}`);
}
