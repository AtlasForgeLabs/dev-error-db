import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runtimeDir = path.join(rootDir, 'automation', 'runtime');
const distManifestPath = path.join(rootDir, 'dist', 'data', 'errors', 'publish-manifest.json');
const runtimeManifestPath = path.join(runtimeDir, 'publish-manifest.json');
const runtimeMarkdownPath = path.join(runtimeDir, 'publish-manifest.md');
const legacyPath = path.join(rootDir, 'config', 'legacy-published-slugs.json');
const errorsDir = path.join(rootDir, 'src', 'content', 'errors');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function countHtmlPages() {
  if (!existsSync(path.join(rootDir, 'dist'))) return { total: 0, errorDetail: 0 };
  const files = readdirSync(path.join(rootDir, 'dist'), { recursive: true }).filter((file) => String(file).endsWith('.html'));
  const errorDetail = files.filter((file) => /^errors\/[^/]+\/index\.html$/.test(String(file).replace(/\\/g, '/'))).length;
  return { total: files.length, errorDetail };
}

function countJsonIndexes() {
  const base = path.join(rootDir, 'dist', 'data', 'errors');
  if (!existsSync(base)) return 0;
  let count = 0;
  for (const file of readdirSync(base, { recursive: true })) {
    if (String(file).endsWith('.json')) count += 1;
  }
  return count;
}

function countSitemapUrls() {
  const sitemapPath = path.join(rootDir, 'dist', 'sitemap-0.xml');
  if (!existsSync(sitemapPath)) return 0;
  const xml = readFileSync(sitemapPath, 'utf8');
  return (xml.match(/<loc>/g) ?? []).length;
}

function findUntrackedMarkdown() {
  try {
    const output = execFileSync('git', ['status', '--porcelain', 'src/content/errors'], {
      cwd: rootDir,
      encoding: 'utf8',
    }).trim();
    if (!output) return [];
    return output
      .split('\n')
      .map((line) => line.slice(3).trim())
      .filter((file) => file.endsWith('.md'));
  } catch {
    return [];
  }
}

function renderMarkdown(manifest, untrackedMarkdown) {
  const lines = [
    '# Dev Error DB publish manifest',
    '',
    `Generated: ${manifest.generated_at}`,
    '',
    '## Summary',
    '',
    `- Total error records: ${manifest.total_error_records}`,
    `- Legacy preserved: ${manifest.legacy_published_count}`,
    `- New candidates: ${manifest.new_candidate_count}`,
    `- Accepted new HTML: ${manifest.accepted_new_html_count}`,
    `- Data only: ${manifest.data_only_count}`,
    `- Needs review: ${manifest.needs_review_count}`,
    `- Rejected: ${manifest.rejected_count}`,
    `- Build budget status: ${manifest.build_budget_status}`,
    '',
    '## Build budget',
    '',
    `- Generated total pages: ${manifest.build_budget.generated_total_pages}`,
    `- Generated error HTML pages: ${manifest.build_budget.generated_error_html_pages}`,
    `- JSON indexes: ${manifest.build_budget.generated_json_indexes}`,
    `- Sitemap URLs: ${manifest.build_budget.sitemap_url_count}`,
    `- New HTML this run: ${manifest.build_budget.new_html_pages_this_run}`,
    '',
  ];

  if (untrackedMarkdown.length > 0) {
    lines.push('## Untracked candidate Markdown', '', ...untrackedMarkdown.map((file) => `- ${file}`), '');
  }

  lines.push('## New non-legacy candidates', '');
  const gated = manifest.candidates.filter((candidate) => !candidate.existing_legacy);
  if (gated.length === 0) {
    lines.push('- None');
  } else {
    for (const candidate of gated.slice(0, 100)) {
      lines.push(
        `- \`${candidate.slug}\` — ${candidate.publish_status}; html=${candidate.will_generate_html ? 'yes' : 'no'}; score=${candidate.score}; ${candidate.reason}`
      );
    }
  }

  return `${lines.join('\n')}\n`;
}

function main() {
  if (!existsSync(distManifestPath)) {
    console.error('[publish-manifest] dist publish manifest missing; run npm run build first');
    process.exitCode = 1;
    return;
  }

  const manifest = readJson(distManifestPath);
  const htmlCounts = countHtmlPages();
  const untrackedMarkdown = findUntrackedMarkdown();
  manifest.build_budget = {
    ...manifest.build_budget,
    generated_total_pages: htmlCounts.total,
    generated_error_html_pages: htmlCounts.errorDetail,
    generated_json_indexes: countJsonIndexes(),
    sitemap_url_count: countSitemapUrls(),
  };

  if (manifest.accepted_new_html_count > manifest.max_new_html_per_run && manifest.max_new_html_per_run > 0) {
    manifest.build_budget_status = 'fail';
  }

  manifest.untracked_candidate_markdown = untrackedMarkdown;
  manifest.untracked_candidate_count = untrackedMarkdown.length;

  mkdirSync(runtimeDir, { recursive: true });
  writeFileSync(runtimeManifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  writeFileSync(runtimeMarkdownPath, renderMarkdown(manifest, untrackedMarkdown), 'utf8');

  console.log('[publish-manifest] wrote automation/runtime/publish-manifest.json');
  console.log(`legacy_published_count=${manifest.legacy_published_count}`);
  console.log(`accepted_new_html_count=${manifest.accepted_new_html_count}`);
  console.log(`data_only_count=${manifest.data_only_count}`);
  console.log(`needs_review_count=${manifest.needs_review_count}`);
  console.log(`build_budget_status=${manifest.build_budget_status}`);
  if (untrackedMarkdown.length > 0) {
    console.log(`untracked_candidate_markdown=${untrackedMarkdown.length}`);
  }
}

main();
