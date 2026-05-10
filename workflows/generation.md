# Generation Workflow

Generation turns approved seeds into static Markdown pages. The goal is practical troubleshooting content, not high-volume keyword coverage.

## Inputs

- Approved seed objects.
- `skills/atlasforge-seo-master.md`.
- Current generator script.
- Existing taxonomy helper.
- Existing related pages.

## Outputs

- Markdown files under `src/content/errors`.
- Schema-compatible frontmatter.
- Technology-specific body sections.
- Copy-paste diagnostic commands when useful.
- Related error metadata.

## Validation

- Generator must reject duplicate slugs, titles, and descriptions.
- Generated files must preserve existing files unless `--force` is explicitly used.
- Frontmatter must pass Astro content collection validation.
- Body content must include real troubleshooting value.
- Related errors must not create dead links when rendered.
- Generated pages must avoid repeated section order across the batch.

## Failure Handling

- If generation fails validation, do not publish partial output.
- If a seed produces generic content, improve the seed or generator profile before regenerating.
- If a command is unsafe or uncertain, remove it or replace it with a diagnostic command.
- If a page cannot meet the quality bar, hold the seed for manual writing.

## Automation Boundaries

- Automation may regenerate seed-backed pages.
- Automation may update related metadata and category fields.
- Automation may not overwrite manually curated content unless explicitly instructed.
- Automation may not invent commands, provider policies, or guaranteed outcomes.
- Automation may not generate hundreds of pages without staged review.

## Human Review Requirements

- Human review is required before first publication of a new generator profile.
- Human review is required for any force regeneration that changes previously published pages.
- Human review is required for destructive or security-sensitive troubleshooting advice.
- Human review is required before scaling a batch beyond the current approved limit.
