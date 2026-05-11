# AtlasForge Engineering Rules

## Project

Project Name: Dev Error DB

Production Domain:
https://dev-error-db.com

Repository:
AtlasForgeLabs/dev-error-db

Mission:
Build a large-scale programmatic SEO platform for developer errors, troubleshooting, and technical problem-solving.

Primary Goals:
- Massive long-tail SEO coverage
- Static-first architecture
- Extremely low infrastructure cost
- AI-assisted scalable content generation
- Fast indexing and crawlability
- High topical authority

---

# Core Engineering Principles

## 1. Static-First

Always prefer:
- static generation
- markdown/mdx content
- build-time rendering

Avoid:
- databases
- backend APIs
- server-side rendering unless absolutely required

Reason:
Lower cost, simpler scaling, GitHub Pages compatibility.

---

## 2. SEO-First

Every page must prioritize:
- search intent
- crawlability
- semantic HTML
- metadata completeness
- fast load speed

All pages should include:
- title
- meta description
- canonical URL
- Open Graph tags
- structured headings
- internal links

Avoid:
- unnecessary JavaScript
- client-side rendering dependence
- bloated UI frameworks

---

## 3. Programmatic SEO

The system must support generating thousands of pages.

Architecture should support:
- content templates
- reusable layouts
- markdown-driven content
- automated sitemap generation
- category/tag expansion

Avoid manually hardcoding pages.

---

## 4. Human-Readable Content

Content must:
- solve real developer problems
- be concise
- avoid AI fluff
- avoid repetitive wording
- prioritize clarity and usefulness

Do NOT:
- generate generic filler
- overuse marketing language
- create fake troubleshooting steps

---

## 5. Performance Rules

Target:
- excellent Lighthouse score
- minimal JS bundle
- static assets optimized

Prefer:
- Astro islands architecture
- serverless/static hosting
- zero runtime JS when possible

---

## 6. Simplicity Over Complexity

Prefer:
- simple files
- simple routing
- flat architecture

Avoid:
- premature abstraction
- overengineering
- unnecessary dependencies

---

# Content Model Rules

Error pages should include:
- error meaning
- root causes
- quick fixes
- troubleshooting steps
- related errors
- FAQs

Frontmatter should include:
- title
- slug
- description
- category
- technology
- error_signature
- updated

---

# UI Rules

Style:
- clean
- technical
- readable
- lightweight
- mobile friendly

Avoid:
- excessive animations
- heavy visual effects
- complex design systems

---

# Deployment Rules

Hosting:
- GitHub Pages

CDN:
- Cloudflare

Domain:
- dev-error-db.com

Must remain deployable as a static site.

---

# AI Agent Rules

AI coding agents should:
- explain major architecture decisions
- avoid unnecessary dependency additions
- avoid modifying unrelated files
- summarize changed files after tasks
- work from the `main` branch by default
- after completing and validating each task, commit the relevant changes and push them to the remote `main` branch

Do NOT:
- auto-delete existing content
- rewrite architecture without explicit instruction

---

# AtlasForge SEO Automation System

This repository is operated as part of a long-term autonomous SEO system. All agents must follow:

- `skills/atlasforge-seo-master.md`
- `workflows/discovery.md`
- `workflows/generation.md`
- `workflows/validation.md`
- `workflows/publishing.md`

These files define the production rules for SEO quality, content generation, internal linking, anti-spam controls, validation, and publishing.

## How Codex Should Generate Pages

Codex should generate pages only from structured seeds or explicit human instructions. For error pages, use Markdown content under `src/content/errors/` and keep the site static-first.

Before generating pages, Codex must:
- check existing content to avoid duplicates
- use the approved category taxonomy
- verify the page has a real error signature or recognizable failure pattern
- include practical troubleshooting value
- include related errors when relevant

When generating pages, Codex must:
- preserve existing files unless an explicit force operation is requested
- keep frontmatter compatible with `src/content/config.ts`
- generate unique titles and descriptions
- include real diagnostic steps and safe copy-paste commands where useful
- vary section order and content based on technology and search intent
- avoid generic filler, repeated boilerplate, and unsupported claims

After generating pages, Codex must:
- run `npm run build`
- verify sitemap generation
- check internal links when routing or related links change
- summarize generated files and validation output

## How OpenClaw Should Operate

OpenClaw is expected to operate as an automation orchestrator, not an unchecked publisher.

OpenClaw may:
- discover candidate errors from approved public or internal-safe sources
- propose structured seeds
- detect duplicate or thin topics
- run generation in controlled batches
- run validation workflows
- produce reports for human review

OpenClaw must not:
- publish directly to production
- submit URLs for indexing without approval
- create pages from private logs, secrets, customer data, or unsupported claims
- expand categories without taxonomy review
- bypass validation failures

OpenClaw should hand off to Codex or a human reviewer when code changes, generator changes, taxonomy changes, or policy-sensitive decisions are required.

## Future Automation Rules

Future automation should follow a gated pipeline:

1. Discovery
2. Seed review
3. Generation
4. Validation
5. Human review
6. Publishing
7. Post-publish checks

Automation must keep a clear separation between:
- candidate ideas
- approved seeds
- generated drafts
- validated pages
- published pages

Automation should prefer small, reviewable batches. Large-scale generation is allowed only after the generator, taxonomy, and validation checks have proven quality on smaller batches.

## AtlasForge Data Hub Rules

AtlasForge production runtime exchange data must use:

```text
~/AtlasForge/prod-env/atlasforge-data-hub/
```

Do not use the source repository as a long-term automation data exchange directory.

For Dev Error DB, OpenClaw candidate files belong under:

```text
~/AtlasForge/prod-env/atlasforge-data-hub/openclaw/dev-error-db/inbox/
```

The source repository may contain example input files, import scripts, generated reports, and reviewed content. It must not be treated as the production inbox for OpenClaw runtime data.

## What Must Never Be Generated

Never generate:
- doorway pages
- pages targeting only keyword wording variants
- near-duplicate troubleshooting pages
- fake fixes
- fake commands
- fake version support
- fake provider policies
- fake benchmarks or metrics
- fake user reports
- private credentials, tokens, API keys, or secrets
- content copied from private logs or customer data
- medical, legal, financial, or security-sensitive advice outside the project scope
- pages that cannot provide real troubleshooting value

Do not generate content that claims a fix is guaranteed. Do not publish pages that are only summaries of other pages.

## What Requires Human Approval

Human approval is required before:
- opening or merging pull requests
- publishing large content batches
- creating new categories
- changing taxonomy rules
- changing deployment workflows
- changing domain, DNS, analytics, ads, privacy, or legal pages
- force-regenerating already published content at scale
- deleting existing content
- submitting URLs to Google indexing tools
- using private, customer, or sensitive source material

Human review is also required when automation reports unresolved warnings, thin content risk, duplicate content risk, or uncertain technical claims.

## Branch And Push Workflow

All routine Codex development work in this repository should happen on `main`.

After a task is completed and local validation passes, Codex should:
- stage only relevant files
- commit with a concise message
- push the commit to the remote `main` branch
- report the commit hash, validation result, push result, and final working tree status

This automatic push workflow applies to normal code, content, style, automation, and documentation changes. It does not remove the human approval requirements for large content batches, taxonomy expansion, deployment workflow changes, legal/domain/analytics/ads changes, destructive actions, pull requests, or Google indexing submissions.

---

# Long-Term Vision

This repository is part of AtlasForge:
An AI-powered SEO infrastructure platform designed to build scalable, low-cost, high-traffic web properties.

Engineering decisions should prioritize:
- scalability
- automation
- low operational cost
- SEO durability
- maintainability
