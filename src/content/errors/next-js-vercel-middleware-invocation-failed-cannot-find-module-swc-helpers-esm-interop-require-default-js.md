---
title: "Vercel deployment MIDDLEWARE_INVOCATION_FAILED with @swc/helpers module not found"
description: "fix Vercel MIDDLEWARE_INVOCATION_FAILED cannot find module @swc/helpers Includes evidence for Next.js / Vercel troubleshooting demand."
category: "Deployment"
technology: "Next.js / Vercel"
error_signature: "MIDDLEWARE_INVOCATION_FAILED: Cannot find module @swc/helpers/esm/_interop_require_default.js"
common_causes:
  - "Deploying Next.js 16.2.x with proxy.ts middleware and Sentry import breaks Vercel deployment. Common stack (Next.js + Sentry) makes this widespread. Build succeeds locally but fails on Vercel."
  - "Next.js 16.2.6 + proxy.ts middleware + @sentry/nextjs import triggers MIDDLEWARE_INVOCATION_FAILED. @swc/helpers/esm/_interop_require_default.js not found at runtime. Multiple duplicate reports. Closed as duplicate but root cause unresolved."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Next.js Turbopack pino external alias not resolvable"
  - "Next.js build emits page.js with missing chunks"
updated: "2026-05-15"
published_at: "2026-05-15T07:13:21.988Z"
updated_at: "2026-05-15T07:13:21.988Z"
---

## What this error means

`MIDDLEWARE_INVOCATION_FAILED: Cannot find module @swc/helpers/esm/_interop_require_default.js` is a Next.js / Vercel failure pattern reported for developers trying to fix vercel middleware_invocation_failed cannot find module @swc/helpers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Next.js 16.2.6 + proxy.ts middleware + @sentry/nextjs import triggers MIDDLEWARE_INVOCATION_FAILED. @swc/helpers/esm/_interop_require_default.js not found at runtime. Multiple duplicate reports. Closed as duplicate but root cause unresolved.

## Common causes

- Deploying Next.js 16.2.x with proxy.ts middleware and Sentry import breaks Vercel deployment. Common stack (Next.js + Sentry) makes this widespread. Build succeeds locally but fails on Vercel.
- Next.js 16.2.6 + proxy.ts middleware + @sentry/nextjs import triggers MIDDLEWARE_INVOCATION_FAILED. @swc/helpers/esm/_interop_require_default.js not found at runtime. Multiple duplicate reports. Closed as duplicate but root cause unresolved.

## Quick fixes

1. Confirm the exact error signature matches `MIDDLEWARE_INVOCATION_FAILED: Cannot find module @swc/helpers/esm/_interop_require_default.js`.
2. Check the Next.js / Vercel account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/next.js/issues/93852
- https://github.com/vercel/next.js/issues/93850

Evidence note: Next.js 16.2.6 + proxy.ts middleware + @sentry/nextjs import triggers MIDDLEWARE_INVOCATION_FAILED. @swc/helpers/esm/_interop_require_default.js not found at runtime. Multiple duplicate reports. Closed as duplicate but root cause unresolved.

## Related errors

- Next.js Turbopack pino external alias not resolvable
- Next.js build emits page.js with missing chunks

## FAQ

### What should I check first?

Start with the exact `MIDDLEWARE_INVOCATION_FAILED: Cannot find module @swc/helpers/esm/_interop_require_default.js` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Next.js / Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MIDDLEWARE_INVOCATION_FAILED: Cannot find module @swc/helpers/esm/_interop_require_default.js`.
