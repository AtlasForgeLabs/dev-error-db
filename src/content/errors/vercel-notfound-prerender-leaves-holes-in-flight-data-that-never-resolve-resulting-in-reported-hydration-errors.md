---
title: "Next.js prerendered notFound causes hydration errors when cacheComponents enabled"
description: "Fix Next.js notFound() prerender causing broken page hydration and flight data holes with cacheComponents enabled Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "notFound() prerender leaves holes in Flight data that never resolve resulting in reported hydration errors"
common_causes:
  - "PR #94037 relands previous fix #93988 after #92231 static prerender approach caused connection-closed issues with incomplete Flight data. Affects production Next.js deployments using cacheComponents with notFound error pages. Vercel P0 tech, tier bonus +1 applied."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-23"
published_at: "2026-05-23T03:39:49.550Z"
updated_at: "2026-05-23T03:39:49.550Z"
---

## What this error means

`notFound() prerender leaves holes in Flight data that never resolve resulting in reported hydration errors` is a Vercel failure pattern reported for developers trying to fix next.js notfound() prerender causing broken page hydration and flight data holes with cachecomponents enabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

PR #94037 relands previous fix #93988 after #92231 static prerender approach caused connection-closed issues with incomplete Flight data. Affects production Next.js deployments using cacheComponents with notFound error pages. Vercel P0 tech, tier bonus +1 applied.

## Common causes

- PR #94037 relands previous fix #93988 after #92231 static prerender approach caused connection-closed issues with incomplete Flight data. Affects production Next.js deployments using cacheComponents with notFound error pages. Vercel P0 tech, tier bonus +1 applied.

## Quick fixes

1. Confirm the exact error signature matches `notFound() prerender leaves holes in Flight data that never resolve resulting in reported hydration errors`.
2. Check the Vercel account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/next.js/pull/94037

Evidence note: PR #94037 relands previous fix #93988 after #92231 static prerender approach caused connection-closed issues with incomplete Flight data. Affects production Next.js deployments using cacheComponents with notFound error pages. Vercel P0 tech, tier bonus +1 applied.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `notFound() prerender leaves holes in Flight data that never resolve resulting in reported hydration errors` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `notFound() prerender leaves holes in Flight data that never resolve resulting in reported hydration errors`.
