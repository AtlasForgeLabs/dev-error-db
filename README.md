# Dev Error DB

Static SEO website for developer error messages and troubleshooting pages.

Production domain: <https://dev-error-db.com>

## Commands

```bash
npm install
npm run dev
npm run build
npm run check
npm run preview
npm run report
```

## Content

Error pages live in `src/content/errors/` as Markdown files. Each page uses frontmatter for SEO and classification metadata, then a readable troubleshooting body with causes, fixes, steps, related errors, and FAQ content.

The site is built with Astro, outputs static files, and is intended for GitHub Pages plus Cloudflare.

## AdSense Low-Value Content Recovery

The site must make its real troubleshooting value visible instead of looking like a thin generated archive.

- Do not invent error signatures, sources, fixes, version support, provider policies, metrics, or expert review.
- Prefer source-backed pages. A source-backed page has public source URLs or imported evidence in the Markdown body.
- When a field is missing, templates should omit the section or label the page as general troubleshooting guidance.
- Trust pages must stay published and linked: About, Contact, Privacy Policy, Terms, Disclaimer, Editorial Methodology, Source Policy, and Troubleshooting Methodology.
- Homepage, category hubs, and error pages should expose source status, last-updated dates, diagnostic workflows, safety notes, related pages, and correction paths.
- Before publishing, run `npm run build`, `npm run check`, and `npm run report`.

`npm run check` validates built pages for required trust routes, sitemap assets, no visible `null` or `undefined`, representative page depth, safety sections, source/evidence sections, and broken internal links.
