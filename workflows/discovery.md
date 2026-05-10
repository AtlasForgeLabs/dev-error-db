# Discovery Workflow

Discovery identifies valuable error-page opportunities before generation. Its purpose is to choose pages that strengthen topical authority without creating AI spam.

## Inputs

- Existing `src/content/errors` pages.
- Current category taxonomy.
- Search Console data when available.
- Real developer error logs, support notes, issue titles, CI failures, and command output.
- Existing seed data in `data/error-seeds.json`.
- Human-prioritized technologies or topic clusters.

## Outputs

- Candidate error seeds with slug, title, description, category, technology, error signature, search intent, common causes, quick fix, and related errors.
- Cluster assignment for each candidate.
- Rejection notes for candidates that are too vague, duplicative, unsupported, or low-value.

## Validation

- Confirm the candidate is not already covered by an existing page.
- Confirm the error has a recognizable signature or repeatable failure pattern.
- Confirm at least three practical causes or troubleshooting paths exist.
- Confirm the page can link to at least one existing or planned related page.
- Confirm category fit against the approved taxonomy.

## Failure Handling

- If a candidate has no clear error signature, reject it or convert it into a broader guide only with human approval.
- If a candidate duplicates an existing page, update the existing page instead of creating a new one.
- If reliable troubleshooting details are unavailable, hold the seed for research.
- If the candidate belongs to a thin category, prioritize adjacent pages that build the same cluster before publishing.

## Automation Boundaries

- Automation may collect candidate seeds and flag duplicates.
- Automation may suggest category mappings.
- Automation must not publish discovered pages directly.
- Automation must not scrape private logs, secrets, customer data, or proprietary issue content into public pages.

## Human Review Requirements

- Human review is required before adding a new category.
- Human review is required before publishing a new cluster or large batch.
- Human review is required when the error relates to security, billing, account access, legal compliance, or provider policy.
- Human review is required when source data contains private or sensitive context.
