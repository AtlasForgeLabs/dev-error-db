import { existsSync, readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const errors = [];
const warnings = [];

const requiredPublicFiles = ['public/robots.txt', 'public/ads.txt'];
const requiredDistFiles = ['dist/index.html', 'dist/sitemap-index.xml', 'dist/sitemap-0.xml', 'dist/robots.txt', 'dist/ads.txt'];
const trustRoutes = [
  '/about/',
  '/contact/',
  '/privacy-policy/',
  '/terms/',
  '/disclaimer/',
  '/editorial-methodology/',
  '/source-policy/',
  '/troubleshooting-methodology/',
];

for (const file of requiredPublicFiles) {
  assert(existsSync(path.join(rootDir, file)), `${file} exists`);
}

for (const file of requiredDistFiles) {
  assert(existsSync(path.join(rootDir, file)), `${file} exists after build`);
}

if (existsSync(distDir)) {
  const htmlFiles = await listFiles(distDir, (file) => file.endsWith('.html'));
  const routes = new Set(htmlFiles.map(htmlRoute));
  const htmlByRoute = new Map(htmlFiles.map((file) => [htmlRoute(file), readFileSync(file, 'utf8')]));
  const homepage = htmlByRoute.get('/') ?? '';

  assert(!hasLocalAssetOrCanonicalUrl(htmlByRoute), 'built pages do not use localhost URLs for canonical, scripts, styles, or assets');
  assert(!hasPlaceholderLeak(htmlByRoute), 'built pages do not expose placeholder null or undefined values');

  for (const route of trustRoutes) {
    assert(routes.has(route), `${route} trust route exists`);
    assert(homepage.includes(route) || (htmlByRoute.get(route) ?? '').includes('Dev Error DB'), `${route} is reachable or renderable`);
  }

  assert(homepage.includes('/editorial-methodology/'), 'homepage links editorial methodology');
  assert(homepage.includes('/source-policy/'), 'homepage links source policy');
  assert(homepage.includes('/troubleshooting-methodology/'), 'homepage links troubleshooting methodology');
  assert(homepage.includes('Pages with public source URLs'), 'homepage shows source-backed count');

  const sitemap = readFileSync(path.join(rootDir, 'dist', 'sitemap-0.xml'), 'utf8');
  for (const route of trustRoutes) {
    assert(sitemap.includes(`https://dev-error-db.com${route}`), `${route} appears in sitemap`);
  }

  const errorRoutes = [...routes].filter((route) => route.startsWith('/errors/') && route !== '/errors/' && !route.includes('/page/'));
  const categoryRoutes = [...routes].filter((route) => route.startsWith('/categories/') && !route.includes('/page/'));

  assert(errorRoutes.length >= 30, 'at least 30 representative error pages exist');
  assert(categoryRoutes.length > 0, 'category hub pages exist');

  for (const route of errorRoutes.slice(0, 50)) {
    const html = htmlByRoute.get(route) ?? '';
    assert(html.includes('Before you change production'), `${route} has production safety section`);
    assert(html.includes('Evidence and references'), `${route} has evidence section`);
    assert(html.includes('When to avoid this fix'), `${route} has avoid-fix section`);
    assert(visibleTextLength(html) > 1800, `${route} has substantial visible content`);
  }

  for (const route of categoryRoutes.slice(0, 30)) {
    const html = htmlByRoute.get(route) ?? '';
    assert(html.includes('diagnostic workflow'), `${route} has diagnostic workflow`);
    assert(html.includes('Safe debugging checklist'), `${route} has safe debugging checklist`);
    assert(visibleTextLength(html) > 1200, `${route} has substantial visible content`);
  }

  const brokenLinks = findBrokenInternalLinks(htmlByRoute, routes);
  assert(brokenLinks.length === 0, `no broken internal links in built HTML${brokenLinks.length ? `: ${brokenLinks.slice(0, 5).join(', ')}` : ''}`);

  const emptyEvidencePages = errorRoutes.filter((route) => {
    const html = htmlByRoute.get(route) ?? '';
    return html.includes('Evidence and references') && !/<a\s+[^>]*href=/.test(html);
  });
  assert(emptyEvidencePages.length === 0, 'no empty evidence sections in representative error pages');
} else {
  errors.push('dist is missing; run npm run build before npm run check');
}

for (const warning of warnings) {
  console.warn(`[check:warning] ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`[check:fail] ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log('[check] AdSense readiness checks passed');
}

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
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

function joinHtml(htmlByRoute) {
  return [...htmlByRoute.values()].join('\n');
}

function hasLocalAssetOrCanonicalUrl(htmlByRoute) {
  for (const html of htmlByRoute.values()) {
    const attributes = [...html.matchAll(/\s(?:href|src|content)="([^"]+)"/g)].map((match) => match[1]);
    if (attributes.some((value) => /^https?:\/\/(?:localhost|127\.0\.0\.1|0\.0\.0\.0)(?::\d+)?\b/i.test(value))) {
      return true;
    }
  }

  return false;
}

function hasPlaceholderLeak(htmlByRoute) {
  for (const html of htmlByRoute.values()) {
    const withoutLiteralErrorText = html
      .replace(/<code[\s\S]*?<\/code>/g, '')
      .replace(/<a\s[\s\S]*?<\/a>/g, '')
      .replace(/<title[\s\S]*?<\/title>/g, '')
      .replace(/<meta[^>]+>/g, '');

    if (/(?:^|>)\s*(undefined|null)\s*(?:<|$)/i.test(withoutLiteralErrorText)) {
      return true;
    }
  }

  return false;
}

function visibleTextLength(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim().length;
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
      if (!routes.has(normalized)) {
        broken.push(`${route} -> ${href}`);
      }
    }
  }

  return broken;
}
