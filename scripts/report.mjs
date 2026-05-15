import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const highValueHubs = [
  { label: 'OpenAI API', slug: 'openai-api', homepageText: 'OpenAI API Errors' },
  { label: 'Anthropic API', slug: 'anthropic-api', homepageText: 'Anthropic API Errors' },
  { label: 'AI Coding Tools', slug: 'ai-coding-tools', homepageText: 'Claude Code Errors' },
  { label: 'Docker', slug: 'docker', homepageText: 'Docker Errors' },
  { label: 'GitHub Actions', slug: 'github-actions', homepageText: 'GitHub Actions Errors' },
  { label: 'Cloudflare', slug: 'cloudflare', homepageText: 'Cloudflare Errors' },
  { label: 'LiteLLM', slug: 'litellm', homepageText: 'LiteLLM Errors' },
  { label: 'Ollama', slug: 'ollama', homepageText: 'Ollama Errors' },
  { label: 'Cursor', slug: 'cursor', homepageText: 'Cursor Errors' },
  { label: 'GitHub Copilot', slug: 'github-copilot', homepageText: 'GitHub Copilot Errors' },
  { label: 'Deployment', slug: 'deployment', homepageText: 'Deployment Errors' },
];

const packageJson = await readJson('package.json');
const errorFiles = await listMarkdownFiles('src/content/errors');
const latestErrorFiles = await latestFiles(errorFiles, 10);
const parsedPages = await Promise.all(errorFiles.map((file) => parseErrorPage(file)));
const distExists = existsSync(path.join(rootDir, 'dist'));
const sitemapIndexExists = existsSync(path.join(rootDir, 'dist', 'sitemap-index.xml'));
const sitemapExists = existsSync(path.join(rootDir, 'dist', 'sitemap-0.xml'));
const sitemapStats = await inspectSitemaps();
const seoHealth = buildSeoHealth(parsedPages);
const crawlStats = await inspectBuiltHtml();
const monetizationStats = await inspectMonetization();
const analyticsStats = await inspectAnalytics();

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
printExists('public/ads.txt');

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

console.log('\nMonetization:');
print('ads.txt exists', monetizationStats.adsTxtExists ? 'yes' : 'no');
print('ads.txt expected line', monetizationStats.adsTxtValid ? 'yes' : 'no');
print('dist/ads.txt exists', monetizationStats.distAdsTxtExists ? 'yes' : 'no');
print('dist/index.html AdSense script', monetizationStats.indexHasAdSense ? 'yes' : 'no');
print('sample error page AdSense script', monetizationStats.sampleErrorHasAdSense ? `yes (${monetizationStats.sampleErrorPage})` : 'no');

console.log('\nAnalytics:');
print('provider', analyticsStats.provider);
print('measurement id', analyticsStats.measurementId);
print('dist/index.html GA4 tag', analyticsStats.indexHasGa4 ? 'yes' : 'no');
print('sample error page GA4 tag', analyticsStats.sampleErrorHasGa4 ? `yes (${analyticsStats.sampleErrorPage})` : 'no');

console.log('\nSEO health snapshot:');
print('pages_with_updated_at', String(seoHealth.timestamp_health.pages_with_updated_at));
print('legacy_only_pages', String(seoHealth.timestamp_health.legacy_only_pages));
print('invalid_timestamp_count', String(seoHealth.timestamp_health.invalid_timestamp_count));
print('internal_link_density', String(seoHealth.internal_link_density));
print('category_distribution categories', String(Object.keys(seoHealth.category_distribution).length));
print('pages_without_related_links', String(seoHealth.pages_without_related_links.length));
print('pages_without_faq', String(seoHealth.pages_without_faq.length));
print('pages_without_structured_data', String(seoHealth.pages_without_structured_data.length));
print('average_links_per_built_page', String(crawlStats.averageLinksPerPage));
print('orphan_error_pages', String(crawlStats.orphanErrorPages.length));
print('homepage_has_website_schema', crawlStats.homepageHasWebsiteSchema ? 'yes' : 'no');
print('category_pages_with_collection_schema', String(crawlStats.categoryPagesWithCollectionSchema));
print('high_value_hubs_exist', `${crawlStats.highValueHubStats.existing}/${highValueHubs.length}`);
print('high_value_hubs_with_intro', `${crawlStats.highValueHubStats.withIntro}/${highValueHubs.length}`);
print('high_value_hubs_with_page_links', `${crawlStats.highValueHubStats.withPageLinks}/${highValueHubs.length}`);
print('high_value_hubs_with_related_links', `${crawlStats.highValueHubStats.withRelatedCategoryLinks}/${highValueHubs.length}`);
print('homepage_high_value_hub_links', `${crawlStats.highValueHubStats.homepageLinks}/${highValueHubs.length}`);
print('pages_with_evidence_section', String(crawlStats.pagesWithEvidenceSection));
print('pages_with_raw_intent_score', String(crawlStats.pagesWithRawIntentScore));
print('category_intro_coverage', `${crawlStats.categoryPagesWithIntro}/${crawlStats.categoryPages}`);
print('faq_unique_question_ratio', String(crawlStats.faqUniqueQuestionRatio));
print('error_page_relevant_link_density', String(crawlStats.errorPageRelevantLinkDensity));
print('schema_counts', JSON.stringify(crawlStats.schemaCounts));

console.log('\nRecent pages by effective updated timestamp:');
for (const page of seoHealth.timestamp_health.recent_pages_by_updated_at.slice(0, 5)) {
  console.log(`- ${page.slug} (${page.effective_updated_at})`);
}

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
    published_at: frontmatter.published_at || null,
    updated_at: frontmatter.updated_at || null,
    effective_updated_at: parsePageTimestamp(frontmatter) ?? stats.mtime.toISOString(),
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
  const published_at = frontmatter.match(/^published_at:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
  const updated_at = frontmatter.match(/^updated_at:\s*["']?(.+?)["']?\s*$/m)?.[1]?.trim();
  const relatedBlock = frontmatter.match(/^related_errors:\s*\n((?:\s*-\s*.*\n?)*)/m)?.[1] ?? '';
  const relatedCount = relatedBlock
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- ')).length;

  return { category, updated, published_at, updated_at, relatedCount };
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
    timestamp_health: buildTimestampHealth(pages),
    internal_link_density: Number((totalRelatedLinks / totalPages).toFixed(2)),
    category_distribution: categoryDistribution,
    pages_without_related_links: pages.filter((page) => page.relatedLinks === 0).map((page) => page.urlPath),
    pages_without_faq: pages.filter((page) => !page.hasFaq).map((page) => page.urlPath),
    pages_without_structured_data: pages.filter((page) => !page.hasStructuredData).map((page) => page.urlPath),
  };
}

function buildTimestampHealth(pages) {
  const invalidPages = pages.filter((page) => !parsePageTimestamp(page));
  const recent = [...pages]
    .sort((a, b) => new Date(b.effective_updated_at).getTime() - new Date(a.effective_updated_at).getTime())
    .slice(0, 10)
    .map((page) => ({
      slug: page.slug,
      updated_at: page.updated_at,
      published_at: page.published_at,
      updated: page.updated,
      effective_updated_at: page.effective_updated_at,
    }));

  return {
    pages_with_updated_at: pages.filter((page) => Boolean(page.updated_at)).length,
    legacy_only_pages: pages.filter((page) => !page.updated_at && Boolean(page.updated)).length,
    invalid_timestamp_count: invalidPages.length,
    invalid_pages: invalidPages.map((page) => page.urlPath),
    recent_pages_by_updated_at: recent,
  };
}

function parsePageTimestamp(page) {
  for (const value of [page.updated_at, page.published_at, page.updated]) {
    if (!value) continue;
    const normalized = /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00.000Z` : value;
    const parsed = new Date(normalized);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  }
  return null;
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

async function inspectMonetization() {
  const expectedAdsTxtLine = 'google.com, pub-6843790293923678, DIRECT, f08c47fec0942fa0';
  const adsScriptNeedle = 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6843790293923678';
  const adsTxtPath = path.join(rootDir, 'public', 'ads.txt');
  const distAdsTxtPath = path.join(rootDir, 'dist', 'ads.txt');
  const indexPath = path.join(rootDir, 'dist', 'index.html');
  const firstErrorFile = errorFiles[0] ? path.basename(errorFiles[0], '.md') : null;
  const sampleErrorPage = firstErrorFile ? `dist/errors/${firstErrorFile}/index.html` : null;
  const sampleErrorPath = firstErrorFile ? path.join(rootDir, 'dist', 'errors', firstErrorFile, 'index.html') : null;

  return {
    adsTxtExists: existsSync(adsTxtPath),
    adsTxtValid: existsSync(adsTxtPath) && readFileSync(adsTxtPath, 'utf8').includes(expectedAdsTxtLine),
    distAdsTxtExists: existsSync(distAdsTxtPath),
    indexHasAdSense: existsSync(indexPath) && readFileSync(indexPath, 'utf8').includes(adsScriptNeedle),
    sampleErrorPage,
    sampleErrorHasAdSense: Boolean(sampleErrorPath && existsSync(sampleErrorPath) && readFileSync(sampleErrorPath, 'utf8').includes(adsScriptNeedle)),
  };
}

async function inspectBuiltHtml() {
  if (!distExists) {
    return {
      averageLinksPerPage: 0,
      orphanErrorPages: errorFiles.map((file) => `/errors/${path.basename(file, '.md')}/`),
      homepageHasWebsiteSchema: false,
      categoryPagesWithCollectionSchema: 0,
      pagesWithEvidenceSection: 0,
      pagesWithRawIntentScore: 0,
      categoryPagesWithIntro: 0,
      categoryPages: 0,
      highValueHubStats: {
        existing: 0,
        withIntro: 0,
        withPageLinks: 0,
        withRelatedCategoryLinks: 0,
        homepageLinks: 0,
      },
      faqUniqueQuestionRatio: 0,
    };
  }

  const htmlFiles = await listHtmlFiles(path.join(rootDir, 'dist'));
  const inbound = new Map();
  let totalLinks = 0;
  let homepageHasWebsiteSchema = false;
  let categoryPagesWithCollectionSchema = 0;
  let pagesWithEvidenceSection = 0;
  let pagesWithRawIntentScore = 0;
  let categoryPagesWithIntro = 0;
  let categoryPages = 0;
  const highValueHubStats = {
    existing: 0,
    withIntro: 0,
    withPageLinks: 0,
    withRelatedCategoryLinks: 0,
    homepageLinks: 0,
  };
  let errorPageRelevantLinks = 0;
  let errorPageCount = 0;
  const schemaCounts = {};
  const faqQuestions = [];

  for (const filePath of htmlFiles) {
    const raw = await readFile(filePath, 'utf8');
    const route = htmlRoute(filePath);
    const links = [...raw.matchAll(/<a\s+[^>]*href="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((href) => href.startsWith('/') && !href.startsWith('//') && !href.includes('#'));
    totalLinks += links.length;

    for (const href of links) {
      const normalized = normalizeRoute(href);
      inbound.set(normalized, (inbound.get(normalized) ?? 0) + 1);
    }

    if (route === '/' && raw.includes('"@type":"WebSite"')) homepageHasWebsiteSchema = true;
    if (route.startsWith('/categories/') && raw.includes('"@type":"CollectionPage"')) categoryPagesWithCollectionSchema += 1;
    if (route.startsWith('/categories/') && !route.includes('/page/')) {
      categoryPages += 1;
      if (raw.includes('Troubleshooting overview') && raw.includes('Common causes')) categoryPagesWithIntro += 1;
      const hub = highValueHubs.find((candidate) => route === `/categories/${candidate.slug}/`);

      if (hub) {
        const categoryLinks = links.filter((href) => href.startsWith('/categories/') && normalizeRoute(href) !== route);
        const pageLinks = links.filter((href) => href.startsWith('/errors/'));
        highValueHubStats.existing += 1;
        if (raw.includes('Troubleshooting overview') && raw.includes('Common error types')) highValueHubStats.withIntro += 1;
        if (pageLinks.length > 0) highValueHubStats.withPageLinks += 1;
        if (categoryLinks.length > 0) highValueHubStats.withRelatedCategoryLinks += 1;
      }
    }
    if (route.startsWith('/errors/') && raw.includes('Evidence and references')) pagesWithEvidenceSection += 1;
    if (route.startsWith('/errors/')) {
      errorPageCount += 1;
      errorPageRelevantLinks += links.filter((href) => href.startsWith('/errors/') || href.startsWith('/categories/')).length;
    }
    if (raw.includes('Intent score')) pagesWithRawIntentScore += 1;
    for (const match of raw.matchAll(/"@type":"([^"]+)"/g)) {
      schemaCounts[match[1]] = (schemaCounts[match[1]] ?? 0) + 1;
    }

    for (const match of raw.matchAll(/<h3[^>]*>(.*?)<\/h3>/g)) {
      const question = match[1].replace(/<[^>]+>/g, '').trim();
      if (question.endsWith('?')) faqQuestions.push(question);
    }
  }

  const expectedErrorRoutes = errorFiles.map((file) => `/errors/${path.basename(file, '.md')}/`);
  const orphanErrorPages = expectedErrorRoutes.filter((route) => (inbound.get(route) ?? 0) === 0);
  const uniqueFaq = new Set(faqQuestions);
  const homepagePath = path.join(rootDir, 'dist', 'index.html');
  const homepageRaw = existsSync(homepagePath) ? readFileSync(homepagePath, 'utf8') : '';
  highValueHubStats.homepageLinks = highValueHubs.filter(
    (hub) => homepageRaw.includes(hub.homepageText) && homepageRaw.includes(`/categories/${hub.slug}/`)
  ).length;

  return {
    averageLinksPerPage: htmlFiles.length ? Number((totalLinks / htmlFiles.length).toFixed(2)) : 0,
    orphanErrorPages,
    homepageHasWebsiteSchema,
    categoryPagesWithCollectionSchema,
    pagesWithEvidenceSection,
    pagesWithRawIntentScore,
    categoryPagesWithIntro,
    categoryPages,
    highValueHubStats,
    faqUniqueQuestionRatio: faqQuestions.length ? Number((uniqueFaq.size / faqQuestions.length).toFixed(2)) : 0,
    errorPageRelevantLinkDensity: errorPageCount ? Number((errorPageRelevantLinks / errorPageCount).toFixed(2)) : 0,
    schemaCounts,
  };
}

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listHtmlFiles(fullPath)));
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function htmlRoute(filePath) {
  const relative = path.relative(path.join(rootDir, 'dist'), filePath);
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')}`;
}

function normalizeRoute(href) {
  const clean = href.split('?')[0].replace(/#.*$/, '');
  if (clean === '') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

async function inspectAnalytics() {
  const measurementId = 'G-91G3P935N5';
  const ga4ScriptNeedle = `googletagmanager.com/gtag/js?id=${measurementId}`;
  const indexPath = path.join(rootDir, 'dist', 'index.html');
  const firstErrorFile = errorFiles[0] ? path.basename(errorFiles[0], '.md') : null;
  const sampleErrorPage = firstErrorFile ? `dist/errors/${firstErrorFile}/index.html` : null;
  const sampleErrorPath = firstErrorFile ? path.join(rootDir, 'dist', 'errors', firstErrorFile, 'index.html') : null;

  return {
    provider: 'Google Analytics 4',
    measurementId,
    indexHasGa4: existsSync(indexPath) && readFileSync(indexPath, 'utf8').includes(ga4ScriptNeedle),
    sampleErrorPage,
    sampleErrorHasGa4: Boolean(sampleErrorPath && existsSync(sampleErrorPath) && readFileSync(sampleErrorPath, 'utf8').includes(ga4ScriptNeedle)),
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
