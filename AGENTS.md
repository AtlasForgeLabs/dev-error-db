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

Do NOT:
- auto-push to GitHub
- auto-delete existing content
- rewrite architecture without explicit instruction

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