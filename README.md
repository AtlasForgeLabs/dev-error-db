# Dev Error DB

Static SEO website for developer error messages and troubleshooting pages.

Production domain: <https://dev-error-db.com>

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content

Error pages live in `src/content/errors/` as Markdown files. Each page uses frontmatter for SEO and classification metadata, then a readable troubleshooting body with causes, fixes, steps, related errors, and FAQ content.

The site is built with Astro, outputs static files, and is intended for GitHub Pages plus Cloudflare.
