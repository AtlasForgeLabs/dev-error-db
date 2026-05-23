import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const reportDir = path.join(rootDir, 'automation', 'runtime');
const highValueTerms = [
  'ai-coding',
  'anthropic',
  'claude',
  'cloudflare',
  'cursor',
  'docker',
  'github',
  'node',
  'npm',
  'openai',
  'python',
  'vercel',
];

if (!existsSync(distDir)) {
  console.error('[thin-content-audit] dist is missing; run npm run build first');
  process.exit(1);
}

const htmlFiles = await listFiles(distDir, (file) => file.endsWith('.html'));
const routes = new Set(htmlFiles.map(htmlRoute));
const htmlByRoute = new Map(htmlFiles.map((file) => [htmlRoute(file), readFileSync(file, 'utf8')]));
const errorRoutes = [...routes].filter((route) => route.startsWith('/errors/') && route !== '/errors/' && !route.includes('/page/'));
const categoryRoutes = [...routes].filter((route) => route.startsWith('/categories/') && !route.includes('/page/'));
const faqStats = collectFaqStats(errorRoutes, htmlByRoute);
const brokenLinks = findBrokenInternalLinks(htmlByRoute, routes);
const unsafeExternalLinks = findUnsafeExternalLinks(htmlByRoute);
const thinPages = [];
const representative = selectRepresentativeRoutes(errorRoutes, htmlByRoute);

for (const route of errorRoutes) {
  const html = htmlByRoute.get(route) ?? '';
  const textLength = visibleTextLength(html);
  const issues = [];

  if (textLength < 2200) issues.push(`visible text length ${textLength}`);
  if (!html.includes('Evidence and references')) issues.push('missing evidence display');
  if (!html.includes('Last updated')) issues.push('missing updated timestamp');
  if (!html.includes('Related error pages') && !html.includes('Related troubleshooting hubs')) issues.push('missing related links');
  if (hasEmptySection(html)) issues.push('empty section');
  if (hasPlaceholderLeak(html)) issues.push('placeholder leak');
  if (looksLikeTitleAndLinksOnly(html)) issues.push('title and links only');
  if (!html.includes('Diagnostic flow for this page')) issues.push('missing diagnostic flow');
  if (!html.includes('When to avoid this fix')) issues.push('missing safety/avoid-fix guidance');

  if (issues.length > 0) {
    thinPages.push({ route, text_length: textLength, issues });
  }
}

const categoryIssues = categoryRoutes
  .map((route) => {
    const html = htmlByRoute.get(route) ?? '';
    const issues = [];
    if (!html.includes('diagnostic workflow')) issues.push('missing diagnostic workflow');
    if (!html.includes('Safe debugging checklist')) issues.push('missing safe debugging checklist');
    if (!html.includes('Source-backed pages')) issues.push('missing source-backed count');
    if (visibleTextLength(html) < 1400) issues.push('low visible text');
    return { route, issues };
  })
  .filter((item) => item.issues.length > 0);

const report = {
  generated_at: new Date().toISOString(),
  pages_checked: htmlFiles.length,
  error_pages_checked: errorRoutes.length,
  category_pages_checked: categoryRoutes.length,
  representative_pages_checked: representative.length,
  thin_pages: thinPages,
  category_issues: categoryIssues,
  broken_internal_links: brokenLinks,
  unsafe_external_links: unsafeExternalLinks,
  faq: faqStats,
  thresholds: {
    severe_repeated_question_count: 250,
    severe_repeated_answer_count: 250,
    minimum_error_visible_text_length: 2200,
  },
  representative_pages: representative.map((route) => ({
    route,
    text_length: visibleTextLength(htmlByRoute.get(route) ?? ''),
    source_backed: (htmlByRoute.get(route) ?? '').includes('Source-backed'),
    faq_questions: extractFaqItems(htmlByRoute.get(route) ?? '').map((item) => item.question),
  })),
};

mkdirSync(reportDir, { recursive: true });
writeFileSync(path.join(reportDir, 'thin-content-audit-report.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
writeFileSync(path.join(reportDir, 'thin-content-audit-report.md'), buildMarkdownReport(report), 'utf8');

console.log(`[thin-content-audit] error pages checked: ${errorRoutes.length}`);
console.log(`[thin-content-audit] thin pages: ${thinPages.length}`);
console.log(`[thin-content-audit] broken internal links: ${brokenLinks.length}`);
console.log(`[thin-content-audit] unsafe external links: ${unsafeExternalLinks.length}`);
console.log(`[thin-content-audit] FAQ unique question ratio: ${faqStats.unique_question_ratio}`);
console.log(`[thin-content-audit] FAQ unique answer ratio: ${faqStats.unique_answer_ratio}`);
console.log('[thin-content-audit] wrote automation/runtime/thin-content-audit-report.json');
console.log('[thin-content-audit] wrote automation/runtime/thin-content-audit-report.md');

if (brokenLinks.length > 0 || unsafeExternalLinks.length > 0 || faqStats.severe_duplication) {
  process.exitCode = 1;
}

async function listFiles(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(filePath, predicate)));
    } else if (predicate(filePath)) {
      files.push(filePath);
    }
  }

  return files;
}

function htmlRoute(filePath) {
  const relative = path.relative(distDir, filePath);
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '/').replace(/\.html$/, '/')}`;
}

function collectFaqStats(errorRoutes, htmlByRoute) {
  const questions = [];
  const answers = [];
  const blocks = [];

  for (const route of errorRoutes) {
    for (const item of extractFaqItems(htmlByRoute.get(route) ?? '')) {
      questions.push(item.question);
      answers.push(item.answer);
      blocks.push(`${item.question} ${item.answer}`);
    }
  }

  const repeatedQuestions = topRepeated(questions);
  const repeatedAnswers = topRepeated(answers);
  const repeatedBlocks = topRepeated(blocks);

  return {
    total_questions: questions.length,
    unique_questions: new Set(questions.map(normalizeText)).size,
    unique_answers: new Set(answers.map(normalizeText)).size,
    unique_question_ratio: ratio(new Set(questions.map(normalizeText)).size, questions.length),
    unique_answer_ratio: ratio(new Set(answers.map(normalizeText)).size, answers.length),
    repeated_question_count: repeatedQuestions.filter((item) => item.count > 1).length,
    repeated_answer_count: repeatedAnswers.filter((item) => item.count > 1).length,
    top_repeated_questions: repeatedQuestions.slice(0, 10),
    top_repeated_answers: repeatedAnswers.slice(0, 10),
    top_repeated_blocks: repeatedBlocks.slice(0, 10),
    severe_duplication:
      repeatedQuestions.some((item) => item.count > 250) || repeatedAnswers.some((item) => item.count > 250),
  };
}

function extractFaqItems(html) {
  const faqMatch = html.match(/<h2[^>]*>\s*FAQ\s*<\/h2>([\s\S]*?)(?:<\/aside>|<h2|$)/i);
  if (!faqMatch) return [];

  return [...faqMatch[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => ({
    question: decodeText(match[1]),
    answer: decodeText(match[2]),
  }));
}

function topRepeated(values) {
  const counts = new Map();
  const originals = new Map();
  for (const value of values) {
    const normalized = normalizeText(value);
    counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
    if (!originals.has(normalized)) originals.set(normalized, value);
  }

  return [...counts.entries()]
    .map(([normalized, count]) => ({ text: originals.get(normalized), count }))
    .filter((item) => item.count > 1)
    .sort((a, b) => b.count - a.count || a.text.localeCompare(b.text));
}

function selectRepresentativeRoutes(errorRoutes, htmlByRoute) {
  return [...errorRoutes]
    .map((route) => {
      const html = htmlByRoute.get(route) ?? '';
      const lower = route.toLowerCase();
      const highValue = highValueTerms.some((term) => lower.includes(term)) ? 20 : 0;
      const sourceBacked = html.includes('Source-backed') ? 50 : html.includes('Partial source') ? 25 : 0;
      const recent = /2026/.test(html) ? 5 : 0;
      return { route, score: sourceBacked + highValue + recent + visibleTextLength(html) / 1000 };
    })
    .sort((a, b) => b.score - a.score || a.route.localeCompare(b.route))
    .slice(0, 100)
    .map((item) => item.route);
}

function findBrokenInternalLinks(htmlByRoute, routes) {
  const broken = [];
  const publicFiles = new Set(['/ads.txt', '/robots.txt', '/favicon.svg', '/sitemap-index.xml', '/sitemap-0.xml']);

  for (const [route, html] of htmlByRoute) {
    for (const match of html.matchAll(/<a\s+[^>]*href="([^"]+)"/g)) {
      const href = match[1];
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const clean = href.split('#')[0].split('?')[0];
      if (!clean || publicFiles.has(clean)) continue;
      const normalized = clean.endsWith('/') ? clean : `${clean}/`;
      if (!routes.has(normalized)) broken.push(`${route} -> ${href}`);
    }
  }

  return broken;
}

function findUnsafeExternalLinks(htmlByRoute) {
  const unsafe = [];

  for (const [route, html] of htmlByRoute) {
    for (const match of html.matchAll(/<a\s+([^>]*href="https?:\/\/[^"]+"[^>]*)>/g)) {
      const tag = match[1];
      if (!/target="_blank"/.test(tag) || !/rel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/.test(tag)) {
        unsafe.push(route);
        break;
      }
    }
  }

  return unsafe;
}

function visibleTextLength(html) {
  return decodeText(
    html
      .replace(/<script[\s\S]*?<\/script>/g, ' ')
      .replace(/<style[\s\S]*?<\/style>/g, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).length;
}

function hasEmptySection(html) {
  return /<(?:section|aside)[^>]*>\s*<h2[^>]*>[^<]+<\/h2>\s*<\/(?:section|aside)>/i.test(html);
}

function hasPlaceholderLeak(html) {
  const cleaned = html
    .replace(/<code[\s\S]*?<\/code>/g, '')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '');
  return /(?:^|>)\s*(undefined|null)\s*(?:<|$)/i.test(cleaned);
}

function looksLikeTitleAndLinksOnly(html) {
  const textLength = visibleTextLength(html);
  const linkCount = [...html.matchAll(/<a\s+/g)].length;
  const paragraphCount = [...html.matchAll(/<p[ >]/g)].length;
  return textLength < 1200 && linkCount > paragraphCount * 3;
}

function normalizeText(value) {
  return decodeText(value).toLowerCase().replace(/\s+/g, ' ').trim();
}

function decodeText(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function ratio(part, whole) {
  return whole ? Number((part / whole).toFixed(3)) : 1;
}

function buildMarkdownReport(report) {
  const lines = [
    '# Thin Content Audit Report',
    '',
    `Generated: ${report.generated_at}`,
    '',
    `- Pages checked: ${report.pages_checked}`,
    `- Error pages checked: ${report.error_pages_checked}`,
    `- Category pages checked: ${report.category_pages_checked}`,
    `- Representative pages checked: ${report.representative_pages_checked}`,
    `- Thin pages flagged: ${report.thin_pages.length}`,
    `- Broken internal links: ${report.broken_internal_links.length}`,
    `- Unsafe external links: ${report.unsafe_external_links.length}`,
    `- FAQ unique question ratio: ${report.faq.unique_question_ratio}`,
    `- FAQ unique answer ratio: ${report.faq.unique_answer_ratio}`,
    '',
    '## Top Repeated FAQ Questions',
    '',
    ...report.faq.top_repeated_questions.slice(0, 10).map((item) => `- ${item.count}x: ${item.text}`),
    '',
    '## Top Thin Page Samples',
    '',
    ...report.thin_pages.slice(0, 20).map((page) => `- ${page.route}: ${page.issues.join(', ')}`),
    '',
  ];

  return `${lines.join('\n')}\n`;
}
