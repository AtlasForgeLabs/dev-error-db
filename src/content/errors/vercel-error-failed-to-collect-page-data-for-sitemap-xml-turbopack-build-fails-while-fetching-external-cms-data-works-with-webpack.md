---
title: "Vercel/Turbopack build fails 'Failed to collect page data' on CMS-fed sitemap routes"
description: "Fix Next.js Turbopack build failures when app dir routes fetch data from external CMS (Sanity) during next build Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Error: Failed to collect page data for /sitemap.xml — Turbopack build fails while fetching external CMS data (works with --webpack)"
common_causes:
  - "GitHub issue #93144 on vercel/next.js repo: Turbopack default build fails on sitemap.xml/rss.xml routes that call external APIs. Switching to --webpack flag works as workaround. Reproducible in Next.js 16.2.3. Category mapping: Vercel/Next.js → Deployment. Strong commercial value as deployment failures block production releases."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-19"
published_at: "2026-05-19T08:37:15.668Z"
updated_at: "2026-05-19T08:37:15.668Z"
---

## What this error means

`Error: Failed to collect page data for /sitemap.xml — Turbopack build fails while fetching external CMS data (works with --webpack)` is a Vercel failure pattern reported for developers trying to fix next.js turbopack build failures when app dir routes fetch data from external cms (sanity) during next build. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #93144 on vercel/next.js repo: Turbopack default build fails on sitemap.xml/rss.xml routes that call external APIs. Switching to --webpack flag works as workaround. Reproducible in Next.js 16.2.3. Category mapping: Vercel/Next.js → Deployment. Strong commercial value as deployment failures block production releases.

## Common causes

- GitHub issue #93144 on vercel/next.js repo: Turbopack default build fails on sitemap.xml/rss.xml routes that call external APIs. Switching to --webpack flag works as workaround. Reproducible in Next.js 16.2.3. Category mapping: Vercel/Next.js → Deployment. Strong commercial value as deployment failures block production releases.

## Quick fixes

1. Confirm the exact error signature matches `Error: Failed to collect page data for /sitemap.xml — Turbopack build fails while fetching external CMS data (works with --webpack)`.
2. Check the Vercel account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

- https://github.com/vercel/next.js/issues/93144

Evidence note: GitHub issue #93144 on vercel/next.js repo: Turbopack default build fails on sitemap.xml/rss.xml routes that call external APIs. Switching to --webpack flag works as workaround. Reproducible in Next.js 16.2.3. Category mapping: Vercel/Next.js → Deployment. Strong commercial value as deployment failures block production releases.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Error: Failed to collect page data for /sitemap.xml — Turbopack build fails while fetching external CMS data (works with --webpack)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Failed to collect page data for /sitemap.xml — Turbopack build fails while fetching external CMS data (works with --webpack)`.
