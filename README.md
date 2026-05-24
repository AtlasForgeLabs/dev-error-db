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

## Hybrid static + JSON index architecture

Dev Error DB uses a first-stage hybrid model so the Markdown corpus can grow without uncontrolled static HTML explosion.

- Existing published error slugs in `config/legacy-published-slugs.json` continue to generate static HTML routes by default (`PRESERVE_LEGACY_ERROR_ROUTES=true`).
- High-value records are classified as `indexable_html` and remain suitable for crawlable static pages.
- Long-tail or low-source records can be classified as `data_only` and exposed through compact JSON indexes instead of new HTML routes when safe.
- Records preserved only for backward compatibility are labeled `legacy_preserved`.
- Unclear records stay `pending_review` and remain conservative (static HTML by default).

Build outputs:

- `/data/errors/index.json`
- `/data/errors/indexability-summary.json`
- `/data/errors/categories/{category}.json`
- `/data/errors/technologies/{technology}.json`

Environment controls (optional):

- `MAX_STATIC_ERROR_PAGES` — future cap for non-legacy static pages. `0` means no cap. Legacy slugs and `pending_review` pages are not removed by the cap.
- `ENABLE_DATA_ONLY_FOR_NEW_RECORDS` — default `true`. New slugs not in the legacy snapshot may skip HTML when classified `data_only`.
- `PRESERVE_LEGACY_ERROR_ROUTES` — default `true`. Keeps HTML routes for legacy snapshot slugs even when they would otherwise be `data_only`.

Safety rules:

- Do not convert all SEO pages to client-only JSON rendering.
- Do not remove existing published error URLs from sitemap or internal links during AdSense review.
- Sitemap and category hubs must link only to generated HTML routes.
- `npm run report` and `npm run check` include hybrid indexability metrics and validation.

## Publish gate

Full error data is not equal to published HTML. New candidates must pass the publish gate before becoming static routes.

Publish statuses include: `raw_candidate`, `deduped`, `scored`, `publish_candidate`, `indexable_html`, `data_only`, `rejected`, `needs_review`, and `legacy_preserved`.

Controls:

- `MAX_NEW_HTML_PER_RUN` (default `100`) — caps how many non-legacy records can become HTML in one generation run.
- `MAX_STATIC_ERROR_PAGES` (default `0`) — future global cap for non-legacy HTML; does not remove legacy routes.
- `MIN_SOURCE_COUNT_FOR_NEW_HTML` (default `1`)
- `MIN_CONTENT_DEPTH_FOR_NEW_HTML` (default `1200`)
- `PRESERVE_LEGACY_ERROR_ROUTES` (default `true`)
- `ENABLE_DATA_ONLY_FOR_NEW_RECORDS` (default `true`)

Outputs:

- `dist/data/errors/publish-manifest.json`
- `automation/runtime/publish-manifest.json`
- `automation/runtime/publish-manifest.md`
- `automation/runtime/publish-staging/data-only-candidates.json` (from `npm run generate:errors`)

Rules:

- Slugs listed in `config/legacy-published-slugs.json` always keep HTML.
- `npm run generate:errors` writes Markdown only for publish-approved records.
- Low-quality new records should remain `data_only` or `needs_review`, not HTML.
- Large future datasets belong in AtlasForge Data Hub, not unlimited direct writes to `src/content/errors/`.

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
