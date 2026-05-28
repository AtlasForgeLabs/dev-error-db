---
title: "ERR_PACKAGE_PATH_NOT_EXPORTED: Package subpath ./server.edge not defined by exports"
description: "Fix Next.js build error in custom server.js mode where server.edge module path is not exported after upgrading past 13.3.1 Includes evidence for Vercel / Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel / Next.js"
error_signature: "Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by \"exports\""
common_causes:
  - "Found in vercel/next.js#49169 on GitHub — developer reporting ERR_PACKAGE_PATH_NOT_EXPORTED on server-edge subpath after upgrading from next@13.3.1 to canary. Reproduces in both development and production modes on pages under dynamic routes like news-media/[slug]. User uses custom server.js with https.createServer + next(). The error blocks deployment of projects using custom Express/Node servers with Next.js. Category 'Deployment' fits as this prevents Vercel-compatible deploys."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-28"
published_at: "2026-05-28T06:43:22.272Z"
updated_at: "2026-05-28T06:43:22.272Z"
---

## What this error means

`Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports"` is a Vercel / Next.js failure pattern reported for developers trying to fix next.js build error in custom server.js mode where server.edge module path is not exported after upgrading past 13.3.1. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in vercel/next.js#49169 on GitHub — developer reporting ERR_PACKAGE_PATH_NOT_EXPORTED on server-edge subpath after upgrading from next@13.3.1 to canary. Reproduces in both development and production modes on pages under dynamic routes like news-media/[slug]. User uses custom server.js with https.createServer + next(). The error blocks deployment of projects using custom Express/Node servers with Next.js. Category 'Deployment' fits as this prevents Vercel-compatible deploys.

## Common causes

- Found in vercel/next.js#49169 on GitHub — developer reporting ERR_PACKAGE_PATH_NOT_EXPORTED on server-edge subpath after upgrading from next@13.3.1 to canary. Reproduces in both development and production modes on pages under dynamic routes like news-media/[slug]. User uses custom server.js with https.createServer + next(). The error blocks deployment of projects using custom Express/Node servers with Next.js. Category 'Deployment' fits as this prevents Vercel-compatible deploys.

## Quick fixes

1. Confirm the exact error signature matches `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports"`.
2. Check the Vercel / Next.js account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/vercel/next.js/issues/49169

Evidence note: Found in vercel/next.js#49169 on GitHub — developer reporting ERR_PACKAGE_PATH_NOT_EXPORTED on server-edge subpath after upgrading from next@13.3.1 to canary. Reproduces in both development and production modes on pages under dynamic routes like news-media/[slug]. User uses custom server.js with https.createServer + next(). The error blocks deployment of projects using custom Express/Node servers with Next.js. Category 'Deployment' fits as this prevents Vercel-compatible deploys.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel / Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server.edge' is not defined by "exports"`.
