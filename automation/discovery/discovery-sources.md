# AtlasForge Discovery Sources

This document defines the approved source architecture for discovering future Dev Error DB page candidates. Discovery is allowed to collect signals and propose structured candidates. It must not publish pages, copy private material, or treat raw source text as publishable content.

## Source Classes

### Public Developer Discussion Sources

Approved future sources:

- GitHub issues
- Stack Overflow
- Reddit programming communities
- Hacker News discussion threads
- Developer forums for supported tools

Use these sources to identify repeated error signatures, affected technologies, practical context, and developer language. Do not copy answers, comments, private repository content, personal data, or unsupported claims into generated pages.

### Product and Ecosystem Sources

Approved future source areas:

- Docker
- npm
- Python
- Node.js
- GitHub Actions
- Vercel
- Cloudflare
- OpenAI API
- Cursor
- Claude Code
- OpenCode
- OpenClaw

Use these sources to discover recognizable error signatures, platform-specific debugging paths, CLI commands, configuration files, and official terminology. Provider policy, pricing, limits, model access, and version support must be verified from primary sources before publication.

### AI Coding Tool Sources

Approved future source areas:

- Cursor
- Claude Code
- OpenCode
- OpenClaw
- AI coding tool issue trackers and public support discussions

Treat AI coding tool discovery as higher review risk. These tools change quickly, and many failures are caused by account, provider, key, model, or editor configuration differences. Candidate pages from these sources require human review before generation.

## Normalized Observation Format

Any future collector should write normalized observations before candidate scoring:

Required fields:

- `source`: approved source identifier such as `github-issues`, `stackoverflow`, `reddit`, `hacker-news`, or a supported product area.
- `source_url`: public URL used for verification when policy allows storing it.
- `technology`: supported technology or product name.
- `raw_title`: source title or normalized issue summary.
- `error_signature`: exact error message, exception name, status code, or repeated failure phrase.
- `context`: short technical context explaining where the failure appears.
- `observed_causes`: source-supported causes, written as concise strings.
- `observed_fixes`: source-supported fixes or diagnostic paths, written as concise strings.
- `collected_at`: ISO date or timestamp.

This is a schema contract, not generated page content. The discovery pipeline may score and deduplicate observations that follow this shape.

## Source Safety Rules

- Use public, crawlable, and policy-compliant sources only.
- Do not collect private logs, customer support tickets, tokens, credentials, stack traces containing secrets, or account-specific details.
- Do not bypass robots, paywalls, authentication, or rate limits.
- Do not copy long source passages into candidates.
- Keep source references for human verification when a claim depends on a source.
- Prefer repeated evidence from multiple independent sources before proposing a high-volume page cluster.

## Automation Boundaries

Discovery automation may:

- collect public observations
- normalize candidate fields
- filter unsafe and low-value phrases
- score candidates
- detect duplicates against existing pages and seed files
- write candidate reports for review

Discovery automation must not:

- generate final Markdown pages
- change site taxonomy
- push commits
- publish pages
- submit URLs for indexing
- claim current provider behavior without verification

## Human Review Requirements

Human review is required when a source signal involves:

- billing, quota, account access, or provider policy
- security-sensitive instructions
- destructive commands
- private repositories or private logs
- new categories
- large candidate batches
- AI coding tools with fast-changing behavior
