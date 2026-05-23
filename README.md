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

`npm run build` invokes Astro through `scripts/astro-build-enoent-patch.mjs`, a narrow workaround for an Astro static-build cleanup race that can report missing temporary `manifest_*.mjs` files after pages are already generated. It only ignores that temporary cleanup ENOENT and lets normal build failures fail.

## AdSense Low-Value Content Recovery

The site must make its real troubleshooting value visible instead of looking like a thin generated archive.

- Do not invent error signatures, sources, fixes, version support, provider policies, metrics, or expert review.
- Prefer source-backed pages. A source-backed page has public source URLs or imported evidence in the Markdown body.
- When a field is missing, templates should omit the section or label the page as general troubleshooting guidance.
- Trust pages must stay published and linked: About, Contact, Privacy Policy, Terms, Disclaimer, Editorial Methodology, Source Policy, and Troubleshooting Methodology.
- Homepage, category hubs, and error pages should expose source status, last-updated dates, diagnostic workflows, safety notes, related pages, and correction paths.
- Before publishing, run `npm run build`, `npm run check`, and `npm run report`.
- Run `npm run audit:thin-content` after a build to write `automation/runtime/thin-content-audit-report.json` and `.md`.

`npm run check` validates built pages for required trust routes, sitemap assets, no visible `null` or `undefined`, representative page depth, safety sections, source/evidence sections, and broken internal links.

### Derived Evidence Schema

`src/lib/evidence.ts` derives evidence metadata from existing Markdown only. It extracts public URLs from the page body, records source domains and inferred source types, and classifies pages as `source_backed`, `partial_source`, `general_guidance`, or `needs_source`.

Do not add fake sources to improve a label. If a record lacks a source URL, the page must say so honestly and remain general guidance until a real public source is available.

### FAQ and Related Link Quality

Error page FAQs are generated at template time from title, technology, category, error signature, common causes, quick fix, and evidence status. Avoid reverting to generic repeated FAQ blocks across most pages.

Related errors must link to real error pages. Generic labels belong in category or hub links and should be labeled as troubleshooting hubs, not related errors.

### Thin-Content Audit

The thin-content audit checks built pages for visible text length, evidence display, updated timestamps, related links, empty sections, placeholder leaks, broken internal links, unsafe external links, and repeated FAQ text. Treat severe FAQ duplication or broken links as release blockers.
