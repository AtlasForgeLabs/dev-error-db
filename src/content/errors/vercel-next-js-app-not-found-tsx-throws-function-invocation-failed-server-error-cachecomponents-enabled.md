---
title: "[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering custom error page when cacheComponents enabled"
description: "Fix Next.js regression causing expensive FUNCTION_INVOCATION_FAILED errors instead of serving custom error pages when cacheComponents feature is enabled Includes evidence for Vercel / Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel / Next.js"
error_signature: "app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error cacheComponents enabled"
common_causes:
  - "GitHub Issue #93902 opened by Grod56 on May 17, 2026. Each failed invocation triggers a Lambda call costing money on Vercel Pro/Biz plans. Labeled 'Error Handling' + 'Bug'. Maps to 'Deployment' per approved mapping for Vercel deployment/build/runtime errors."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-18"
published_at: "2026-05-18T08:37:12.467Z"
updated_at: "2026-05-18T08:37:12.467Z"
---

## What this error means

`app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error cacheComponents enabled` is a Vercel / Next.js failure pattern reported for developers trying to fix next.js regression causing expensive function_invocation_failed errors instead of serving custom error pages when cachecomponents feature is enabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #93902 opened by Grod56 on May 17, 2026. Each failed invocation triggers a Lambda call costing money on Vercel Pro/Biz plans. Labeled 'Error Handling' + 'Bug'. Maps to 'Deployment' per approved mapping for Vercel deployment/build/runtime errors.

## Common causes

- GitHub Issue #93902 opened by Grod56 on May 17, 2026. Each failed invocation triggers a Lambda call costing money on Vercel Pro/Biz plans. Labeled 'Error Handling' + 'Bug'. Maps to 'Deployment' per approved mapping for Vercel deployment/build/runtime errors.

## Quick fixes

1. Confirm the exact error signature matches `app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error cacheComponents enabled`.
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

- https://github.com/vercel/next.js/issues/93902

Evidence note: GitHub Issue #93902 opened by Grod56 on May 17, 2026. Each failed invocation triggers a Lambda call costing money on Vercel Pro/Biz plans. Labeled 'Error Handling' + 'Bug'. Maps to 'Deployment' per approved mapping for Vercel deployment/build/runtime errors.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error cacheComponents enabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel / Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error cacheComponents enabled`.
