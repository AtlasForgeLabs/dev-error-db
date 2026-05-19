---
title: "Next.js 16 FUNCTION_INVOCATION_FAILED on app/not-found.tsx with cacheComponents Enabled"
description: "Fix regression in Next.js 16.2.6+ where not-found.tsx fails with FUNCTION_INVOCATION_FAILED in production when cacheComponents is enabled Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering the custom error page when cacheComponents are enabled"
common_causes:
  - "GitHub Issue #93902 (vercel/next.js), opened 2026-05-17T11:03:25Z. Regression between 16.2.3 and 16.2.6. Production-only error causing deployment failures. Mapping: Vercel/Next.js deployment error → Deployment."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-19"
published_at: "2026-05-19T03:37:15.016Z"
updated_at: "2026-05-19T03:37:15.016Z"
---

## What this error means

`[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering the custom error page when cacheComponents are enabled` is a Vercel failure pattern reported for developers trying to fix regression in next.js 16.2.6+ where not-found.tsx fails with function_invocation_failed in production when cachecomponents is enabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #93902 (vercel/next.js), opened 2026-05-17T11:03:25Z. Regression between 16.2.3 and 16.2.6. Production-only error causing deployment failures. Mapping: Vercel/Next.js deployment error → Deployment.

## Common causes

- GitHub Issue #93902 (vercel/next.js), opened 2026-05-17T11:03:25Z. Regression between 16.2.3 and 16.2.6. Production-only error causing deployment failures. Mapping: Vercel/Next.js deployment error → Deployment.

## Quick fixes

1. Confirm the exact error signature matches `[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering the custom error page when cacheComponents are enabled`.
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

- https://github.com/vercel/next.js/issues/93902

Evidence note: GitHub Issue #93902 (vercel/next.js), opened 2026-05-17T11:03:25Z. Regression between 16.2.3 and 16.2.6. Production-only error causing deployment failures. Mapping: Vercel/Next.js deployment error → Deployment.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering the custom error page when cacheComponents are enabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[regression] app/not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering the custom error page when cacheComponents are enabled`.
