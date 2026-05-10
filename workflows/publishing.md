# Publishing Workflow

Publishing moves validated static output to production through GitHub Pages. It must protect site quality and indexing safety.

## Inputs

- Reviewed code and content changes.
- Passing validation report.
- Git status.
- Build output.
- Human approval to publish.

## Outputs

- Commit or pull request prepared for review.
- GitHub Pages workflow run.
- Published static site after deployment succeeds.
- Post-publish checks for key URLs and sitemap availability.

## Validation

Before publishing:

- Confirm `npm run build` passes.
- Confirm sitemap exists and includes expected page types.
- Confirm internal link check has no missing files.
- Confirm no private data, secrets, API keys, tokens, or customer content appear in pages.
- Confirm content batch size is within the approved scope.
- Confirm root `CNAME` and `public/CNAME` preserve the production domain.

After publishing:

- Check homepage.
- Check one category page.
- Check one generated error page.
- Check `robots.txt`.
- Check `sitemap-index.xml`.

## Failure Handling

- If GitHub Pages deployment fails, inspect workflow logs before changing config.
- If production serves old content, check artifact upload and Pages deployment status.
- If custom domain breaks, verify `CNAME`, DNS, and Pages settings before republishing.
- If a bad page is published, remove or correct the page and rebuild; do not publish a quick noindex workaround unless explicitly approved.

## Automation Boundaries

- Automation may prepare commits or pull requests only when requested.
- Automation may not push directly without explicit human approval.
- Automation may not submit URLs for indexing automatically.
- Automation may not publish unreviewed generated batches.
- Automation may not change DNS, domain, or ad settings without human approval.

## Human Review Requirements

- Human approval is required before push, merge, deployment-triggering commits, or indexing requests.
- Human approval is required before publishing new categories.
- Human approval is required before publishing legal, privacy, monetization, or policy changes.
- Human approval is required before publishing content derived from private logs or customer reports.
