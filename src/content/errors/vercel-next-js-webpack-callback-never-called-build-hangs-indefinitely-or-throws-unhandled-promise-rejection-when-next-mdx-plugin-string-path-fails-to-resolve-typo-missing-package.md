---
title: "Vercel next-mdx Loader Plugin Resolution Failure Hangs Build Indefinitely"
description: "Developer deploying Next.js on Vercel with MDX config has a typo in plugin path or missing dependency; the build process silently hangs for minutes before eventually timing out with an unhandled promise rejection instead of a clear error identifying the bad plugin. Includes evidence for Vercel Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel Next.js"
error_signature: "Webpack callback never called → build hangs indefinitely or throws unhandled promise rejection when next-mdx plugin string path fails to resolve (typo, missing package)"
common_causes:
  - "Found via GitHub API on vercel/next.js/pull/94119 resolving #94117 (2026-05-26). The next-mdx webpack loader does not chain .catch() after Promise resolution, so when a plugin path fails to resolve (typo, missing package), the webpack callback is never invoked. Result: build hangs indefinitely instead of producing a clear error. Category: Deployment — Vercel/Next.js deployment build error that blocks CI/CD pipeline completion."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-26"
published_at: "2026-05-26T09:43:16.508Z"
updated_at: "2026-05-26T09:43:16.508Z"
---

## What this error means

`Webpack callback never called → build hangs indefinitely or throws unhandled promise rejection when next-mdx plugin string path fails to resolve (typo, missing package)` is a Vercel Next.js failure pattern reported for developers trying to developer deploying next.js on vercel with mdx config has a typo in plugin path or missing dependency; the build process silently hangs for minutes before eventually timing out with an unhandled promise rejection instead of a clear error identifying the bad plugin.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub API on vercel/next.js/pull/94119 resolving #94117 (2026-05-26). The next-mdx webpack loader does not chain .catch() after Promise resolution, so when a plugin path fails to resolve (typo, missing package), the webpack callback is never invoked. Result: build hangs indefinitely instead of producing a clear error. Category: Deployment — Vercel/Next.js deployment build error that blocks CI/CD pipeline completion.

## Common causes

- Found via GitHub API on vercel/next.js/pull/94119 resolving #94117 (2026-05-26). The next-mdx webpack loader does not chain .catch() after Promise resolution, so when a plugin path fails to resolve (typo, missing package), the webpack callback is never invoked. Result: build hangs indefinitely instead of producing a clear error. Category: Deployment — Vercel/Next.js deployment build error that blocks CI/CD pipeline completion.

## Quick fixes

1. Confirm the exact error signature matches `Webpack callback never called → build hangs indefinitely or throws unhandled promise rejection when next-mdx plugin string path fails to resolve (typo, missing package)`.
2. Check the Vercel Next.js account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/next.js/pull/94119
- https://github.com/vercel/next.js/issues/94117

Evidence note: Found via GitHub API on vercel/next.js/pull/94119 resolving #94117 (2026-05-26). The next-mdx webpack loader does not chain .catch() after Promise resolution, so when a plugin path fails to resolve (typo, missing package), the webpack callback is never invoked. Result: build hangs indefinitely instead of producing a clear error. Category: Deployment — Vercel/Next.js deployment build error that blocks CI/CD pipeline completion.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Webpack callback never called → build hangs indefinitely or throws unhandled promise rejection when next-mdx plugin string path fails to resolve (typo, missing package)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Webpack callback never called → build hangs indefinitely or throws unhandled promise rejection when next-mdx plugin string path fails to resolve (typo, missing package)`.
