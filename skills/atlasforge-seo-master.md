# AtlasForge SEO Master Skill

This document defines the quality bar and operating rules for autonomous SEO content systems inside AtlasForge repositories. It applies to Dev Error DB and any future static-first AtlasForge property.

## Core SEO Quality Rules

- Serve a real search intent with a specific answer, not a keyword wrapper.
- Prefer technical accuracy, clear steps, and source-of-truth project data over volume.
- Every indexable page must have a unique purpose, title, description, canonical URL, H1, readable body, and internal links.
- A page is publishable only when a developer could use it to diagnose or solve a real problem.
- Pages must be static-rendered and crawlable without client-side JavaScript.
- A page must strengthen a topic cluster through category links, related pages, and specific troubleshooting context.

## Content Generation Rules

- Generate from structured seeds, not raw keyword lists.
- Each seed must include slug, title, description, category, technology, error signature, search intent, common causes, quick fix, and related errors.
- Content generation must use technology-aware templates or profiles, not one global template.
- Generated pages must include real diagnostic paths, commands, configuration checks, or environment-specific guidance.
- The generator must preserve existing files unless an explicit force flag is used.
- Generated content must be deterministic enough to review diffs and regenerate safely.
- Any generated command must be safe to copy-paste for diagnosis. Destructive commands require warning text or must be omitted.

## Internal Linking Rules

- Homepage links to category hubs.
- Category hubs link to all member error pages.
- Error pages link back to their category hub.
- Error pages include related errors from structured metadata when possible.
- Breadcrumbs must expose `Home > Category > Error` on error pages.
- Related links must point to existing pages. If no matching page exists, omit the link or keep the text unlinked.
- Do not create large sitewide link blocks that dilute relevance.

## Anti-Spam Rules

- Do not publish pages that exist only to target a keyword.
- Do not create pages with nearly identical intros, steps, FAQs, or conclusions.
- Do not invent causes, commands, product behavior, version support, or provider policies.
- Do not claim a fix is guaranteed.
- Do not use motivational language, marketing filler, or artificial authority claims.
- Do not generate content about tools or errors that cannot be described with concrete troubleshooting value.
- Do not mass-publish unreviewed batches.

## Thin Content Prevention

A page is thin if it lacks enough specific information for the error. Before publishing, each page should include most of:

- Practical meaning of the error.
- Why the error happens.
- Common causes.
- Quick fixes.
- Real-world fixes.
- Platform-specific guidance when useful.
- Step-by-step troubleshooting.
- Copy-paste diagnostic commands.
- Prevention notes.
- Related errors.
- FAQ.

Avoid adding irrelevant sections just to increase length. A missing section is better than a fake section.

## Duplicate Content Prevention

- Titles and descriptions must be unique.
- Slugs must be unique.
- Body sections must vary by technology and intent.
- FAQ questions may reuse stable patterns, but answers must reflect the error and technology.
- Similar errors must explain the difference between them when both pages exist.
- The generator must validate duplicate slugs, titles, and descriptions before writing files.

## Slug Rules

- Use lowercase ASCII.
- Use hyphen-separated words.
- Include the technology or platform when needed to disambiguate.
- Remove punctuation unless it is meaningful when converted to words.
- Do not include dates, tracking terms, or filler words.
- Keep slugs stable after publishing. If a slug must change, add redirect support before deployment.

## Metadata Rules

Every error page frontmatter must include:

- `title`
- `description`
- `category`
- `technology`
- `error_signature`
- `common_causes`
- `quick_fix`
- `related_errors`
- `updated`

Metadata requirements:

- Title should name the exact error or recognizable failure.
- Description should state the problem and the practical fix path.
- Category must use the approved AtlasForge taxonomy, not a one-off label.
- Updated date must change when the troubleshooting advice materially changes.
- Related errors should refer to existing or planned pages in the same topic cluster.

## Error Page Structure Standards

Error pages should be useful when scanned. Use clear headings and short paragraphs.

Recommended section pool:

- What this error means
- Why this happens
- Common causes
- Quick fixes
- Copy-paste commands
- Real-world fixes
- Platform-specific fixes
- Step-by-step troubleshooting
- How to prevent it
- Related errors
- FAQ

Structure rules:

- Do not force the same section order on every page.
- Put the fastest diagnostic path above deep explanations.
- Use code blocks for commands.
- Mark platform sections only when the platform changes the fix.
- Avoid repeating the same sentence across pages.

## FAQ Standards

- FAQ questions must be professional and properly capitalized.
- FAQ answers must be specific to the error, technology, or environment.
- Do not use awkward generated questions based on lowercased causes.
- Good FAQ intents include first checks, local-versus-CI differences, safety of bypasses, and confirmation that a fix worked.
- Do not add FAQ items whose answer is already obvious from the page.

## Related Pages Standards

- Related pages should be technically adjacent.
- Prefer same technology, same category, same failure mode, or same workflow.
- Related errors must not link to unrelated pages only for crawl depth.
- If a related page does not exist yet, it may remain in seed data but must not render as a broken link.
- Related links should be capped to avoid noisy pages.

## Validation Rules

Before publishing:

- Run the generator in non-force mode to confirm skip behavior when appropriate.
- Run duplicate validation for slugs, titles, and descriptions.
- Run `npm run build`.
- Verify sitemap generation.
- Check that category pages exist and contain member pages.
- Check internal links against built `dist`.
- Confirm legal/trust pages exist.
- Confirm `robots.txt` points to the sitemap.

## Build Requirements

- Site must remain static.
- GitHub Pages deployment must use built `dist`, not Jekyll source rendering.
- No database or backend server may be introduced for content serving.
- No paid service may be required for build or publication.
- New dependencies require justification and should be avoided for documentation, generation, and validation tasks that Node built-ins can handle.

## Git Commit Conventions

- Use focused commits.
- Commit generated pages separately from generator logic when the diff is large.
- Commit message format should be concise:
  - `content: add <topic> error pages`
  - `seo: improve taxonomy links`
  - `generator: add <capability>`
  - `docs: update automation workflow`
- Do not commit failed generated output.
- Do not push without explicit human approval.

## Google Indexing Safety Rules

- Publish in controlled batches.
- Do not submit low-value or near-duplicate pages for indexing.
- Do not create doorway pages, spun content, or pages targeting only wording variants.
- Keep category pages useful as hubs, not thin tag pages.
- Ensure every indexed page has original diagnostic value.
- Avoid auto-generated claims about current provider policies unless verified from primary sources.
- Use `noindex` only when intentionally holding pages back; do not rely on it to justify publishing low-quality content.
- If a content batch has uncertain quality, hold it for human review before deployment.
