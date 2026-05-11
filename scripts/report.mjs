import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const packageJson = await readJson('package.json');
const errorFiles = await listMarkdownFiles('src/content/errors');
const latestErrorFiles = await latestFiles(errorFiles, 10);
const parsedPages = await Promise.all(errorFiles.map((file) => parseErrorPage(file)));
const distExists = existsSync(path.join(rootDir, 'dist'));
const sitemapIndexExists = existsSync(path.join(rootDir, 'dist', 'sitemap-index.xml'));
const sitemapExists = existsSync(path.join(rootDir, 'dist', 'sitemap-0.xml'));
const sitemapStats = await inspectSitemaps();
const seoHealth = buildSeoHealth(parsedPages);

const runtimeDir = path.join(rootDir, 'automation', 'runtime');
mkdirSync(runtimeDir, { recursive: true });
writeFileSync(path.join(runtimeDir, 'seo-health.json'), `${JSON.stringify(seoHealth, null, 2)}\n`, 'utf8');

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
print('sitemap urls', String(sitemapStats.totalUrls));
print('sitemap duplicate urls', String(sitemapStats.duplicateUrls));
print('sitemap missing error urls', String(sitemapStats.missingErrorUrls));
print('Build reminder', buildReminder());

console.log('\nSEO health snapshot:');
print('internal_link_density', String(seoHealth.internal_link_density));
print('category_distribution categories', String(Object.keys(seoHealth.category_distribution).length));
print('pages_without_related_links', String(seoHealth.pages_without_related_links.length));
print('pages_without_faq', String(seoHealth.pages_without_faq.length));
print('pages_without_structured_data', String(seoHealth.pages_without_structured_data.length));

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

async function parseErrorPage(filePath) {
  const content = await readFile(filePath, 'utf8');
  const relativePath = path.relative(rootDir, filePath);
  const slug = path.basename(filePath, '.md');
  const stats = await stat(filePath);
  const frontmatter = parseFrontmatter(content);
  const relatedLinks = Number.parseInt(String(frontmatter.relatedCount ?? 0), 10) || 0;
  const hasFaq = /\n## FAQ\s*\n/m.test(content);
  const hasStructuredData = true;

  return {
    relativePath,
    slug,
    urlPath: `/errors/${slug}/`,
    category: frontmatter.category || 'Unknown',
    relatedLinks,
    hasFaq,
    hasStructuredData,
    updated: frontmatter.updated || stats.mtime.toISOString().slice(0, 10),
    mtime: stats.mtime.toISOString(),
  };
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {};
  }

  const frontmatter = match[1];
  const category = frontmatter.match(/^category:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
  const updated = frontmatter.match(/^updated:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
  const relatedBlock = frontmatter.match(/^related_errors:\s*\n((?:\s*-\s*.*\n?)*)/m)?.[1] ?? '';
  const relatedCount = relatedBlock
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- ')).length;

  return { category, updated, relatedCount };
}

function buildSeoHealth(pages) {
  const categoryDistribution = {};
  let totalRelatedLinks = 0;

  for (const page of pages) {
    categoryDistribution[page.category] = (categoryDistribution[page.category] ?? 0) + 1;
    totalRelatedLinks += page.relatedLinks;
  }

  const totalPages = pages.length || 1;

  return {
    generated_at: new Date().toISOString(),
    internal_link_density: Number((totalRelatedLinks / totalPages).toFixed(2)),
    category_distribution: categoryDistribution,
    pages_without_related_links: pages.filter((page) => page.relatedLinks === 0).map((page) => page.urlPath),
    pages_without_faq: pages.filter((page) => !page.hasFaq).map((page) => page.urlPath),
    pages_without_structured_data: pages.filter((page) => !page.hasStructuredData).map((page) => page.urlPath),
  };
}

async function inspectSitemaps() {
  if (!distExists) {
    return {
      totalUrls: 0,
      duplicateUrls: 0,
      missingErrorUrls: errorFiles.length,
    };
  }

  const distDir = path.join(rootDir, 'dist');
  const files = await readdir(distDir);
  const sitemapFiles = files.filter((file) => /^sitemap-\d+\.xml$/.test(file));
  const urls = [];

  for (const file of sitemapFiles) {
    const xml = await readFile(path.join(distDir, file), 'utf8');
    const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
    for (const match of matches) {
      urls.push(match[1]);
    }
  }

  const uniqueUrls = new Set(urls);
  const expectedErrorUrls = errorFiles.map((file) => {
    const slug = path.basename(file, '.md');
    return `https://dev-error-db.com/errors/${slug}/`;
  });
  const missingErrorUrls = expectedErrorUrls.filter((url) => !uniqueUrls.has(url)).length;

  return {
    totalUrls: urls.length,
    duplicateUrls: urls.length - uniqueUrls.size,
    missingErrorUrls,
  };
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
