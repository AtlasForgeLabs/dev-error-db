---
title: "%%drp internal params leak into generateStaticParams() during Next.js build with Cache Components"
description: "Fix internal placeholder param %%drp:slugs:...%% leaking as catch-all segment params during Next.js production build with Cache Components + Parallel Routes, causing prerender failure Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Received slug: %%drp:slugs:9ca6cb0ae51f1%% TypeError: c.join is not a function"
common_causes:
  - "GitHub Issue #93897 opened May 16, 2026 by user alexortizl — During Next.js 16.3.0-canary.21 production build with Turbopack + Cache Components + Parallel Routes, internal param placeholder %%drp:slugs:9ca6cb0ae51f1%% leaks into catch-all segment params as string instead of string array. Calling .join() fails with TypeError: c.join is not a function. Blocks production build/export. Areas: Partial Prerendering, Dynamic Routes, Parallel & Intercepting Routes."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Deployment"
updated: "2026-05-23"
published_at: "2026-05-23T11:39:50.405Z"
updated_at: "2026-05-23T11:39:50.405Z"
---

## What this error means

`Received slug: %%drp:slugs:9ca6cb0ae51f1%% TypeError: c.join is not a function` is a Vercel failure pattern reported for developers trying to fix internal placeholder param %%drp:slugs:...%% leaking as catch-all segment params during next.js production build with cache components + parallel routes, causing prerender failure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #93897 opened May 16, 2026 by user alexortizl — During Next.js 16.3.0-canary.21 production build with Turbopack + Cache Components + Parallel Routes, internal param placeholder %%drp:slugs:9ca6cb0ae51f1%% leaks into catch-all segment params as string instead of string array. Calling .join() fails with TypeError: c.join is not a function. Blocks production build/export. Areas: Partial Prerendering, Dynamic Routes, Parallel & Intercepting Routes.

## Common causes

- GitHub Issue #93897 opened May 16, 2026 by user alexortizl — During Next.js 16.3.0-canary.21 production build with Turbopack + Cache Components + Parallel Routes, internal param placeholder %%drp:slugs:9ca6cb0ae51f1%% leaks into catch-all segment params as string instead of string array. Calling .join() fails with TypeError: c.join is not a function. Blocks production build/export. Areas: Partial Prerendering, Dynamic Routes, Parallel & Intercepting Routes.

## Quick fixes

1. Confirm the exact error signature matches `Received slug: %%drp:slugs:9ca6cb0ae51f1%% TypeError: c.join is not a function`.
2. Check the Vercel account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/vercel/next.js/issues/93897

Evidence note: GitHub Issue #93897 opened May 16, 2026 by user alexortizl — During Next.js 16.3.0-canary.21 production build with Turbopack + Cache Components + Parallel Routes, internal param placeholder %%drp:slugs:9ca6cb0ae51f1%% leaks into catch-all segment params as string instead of string array. Calling .join() fails with TypeError: c.join is not a function. Blocks production build/export. Areas: Partial Prerendering, Dynamic Routes, Parallel & Intercepting Routes.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Received slug: %%drp:slugs:9ca6cb0ae51f1%% TypeError: c.join is not a function` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Received slug: %%drp:slugs:9ca6cb0ae51f1%% TypeError: c.join is not a function`.
