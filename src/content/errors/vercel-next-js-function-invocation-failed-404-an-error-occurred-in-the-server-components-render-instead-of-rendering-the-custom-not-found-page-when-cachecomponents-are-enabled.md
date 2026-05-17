---
title: "FUNCTION_INVOCATION_FAILED — Server Components not-found.tsx throws 500 instead of custom 404 page"
description: "Fix production deployment error where notFound() triggers FUNCTION_INVOCATION_FAILED 500 error instead of serving custom 404 page in Next.js 16+ Includes evidence for Vercel / Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel / Next.js"
error_signature: "FUNCTION_INVOCATION_FAILED;404 — An error occurred in the Server Components render instead of rendering the custom not-found page when cacheComponents are enabled"
common_causes:
  - "GitHub Issue #93902 in vercel/next.js (created 2026-05-17). Regression between 16.2.3 and 16.2.6 affecting production environments with cacheComponents enabled. Blocks customer-facing 404 handling in deployed apps. Category: Deployment — Vercel hosting platform error."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-17"
published_at: "2026-05-17T13:36:46.106Z"
updated_at: "2026-05-17T13:36:46.106Z"
---

## What this error means

`FUNCTION_INVOCATION_FAILED;404 — An error occurred in the Server Components render instead of rendering the custom not-found page when cacheComponents are enabled` is a Vercel / Next.js failure pattern reported for developers trying to fix production deployment error where notfound() triggers function_invocation_failed 500 error instead of serving custom 404 page in next.js 16+. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #93902 in vercel/next.js (created 2026-05-17). Regression between 16.2.3 and 16.2.6 affecting production environments with cacheComponents enabled. Blocks customer-facing 404 handling in deployed apps. Category: Deployment — Vercel hosting platform error.

## Common causes

- GitHub Issue #93902 in vercel/next.js (created 2026-05-17). Regression between 16.2.3 and 16.2.6 affecting production environments with cacheComponents enabled. Blocks customer-facing 404 handling in deployed apps. Category: Deployment — Vercel hosting platform error.

## Quick fixes

1. Confirm the exact error signature matches `FUNCTION_INVOCATION_FAILED;404 — An error occurred in the Server Components render instead of rendering the custom not-found page when cacheComponents are enabled`.
2. Check the Vercel / Next.js account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/next.js/issues/93902

Evidence note: GitHub Issue #93902 in vercel/next.js (created 2026-05-17). Regression between 16.2.3 and 16.2.6 affecting production environments with cacheComponents enabled. Blocks customer-facing 404 handling in deployed apps. Category: Deployment — Vercel hosting platform error.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `FUNCTION_INVOCATION_FAILED;404 — An error occurred in the Server Components render instead of rendering the custom not-found page when cacheComponents are enabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel / Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `FUNCTION_INVOCATION_FAILED;404 — An error occurred in the Server Components render instead of rendering the custom not-found page when cacheComponents are enabled`.
