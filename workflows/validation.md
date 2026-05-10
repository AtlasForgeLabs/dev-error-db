# Validation Workflow

Validation proves that generated or edited content is safe to publish as a static SEO site.

## Inputs

- Changed Markdown files.
- Changed Astro pages, layouts, helpers, generator scripts, and workflow files.
- Built `dist` output.
- Sitemap files.
- Project report output.

## Outputs

- Build result.
- Sitemap status.
- Internal link check result.
- Category count and article count.
- Notes on warnings, failures, and held-back pages.

## Validation

Required checks:

- `npm run build`
- Confirm `dist/sitemap-index.xml` exists.
- Confirm `dist/sitemap-0.xml` exists.
- Confirm homepage, category pages, error pages, and legal pages are in the sitemap.
- Confirm internal links in built HTML resolve to existing files or approved public assets.
- Confirm `public/robots.txt` allows crawling and points to the sitemap.
- Confirm category pages are not thin one-item hubs unless the category is strategically necessary and scheduled for expansion.
- Confirm no generated page contains placeholder text or unsupported claims.

## Failure Handling

- Build failure blocks publication.
- Dead links block publication.
- Duplicate content warnings block publication until root cause is understood.
- Thin content findings block only the affected pages or batch.
- Sitemap failure blocks publication.
- If validation reveals unrelated dirty worktree changes, do not revert them; isolate the current task and report the risk.

## Automation Boundaries

- Automation may run local validation commands.
- Automation may produce a validation report.
- Automation may fix deterministic issues such as missing metadata, broken category links, or stale generated output.
- Automation may not ignore warnings to meet a publish deadline.

## Human Review Requirements

- Human review is required when validation passes only after removing or rewriting content.
- Human review is required when warnings remain but publication is requested.
- Human review is required before pushing, merging, or submitting large indexing batches.
