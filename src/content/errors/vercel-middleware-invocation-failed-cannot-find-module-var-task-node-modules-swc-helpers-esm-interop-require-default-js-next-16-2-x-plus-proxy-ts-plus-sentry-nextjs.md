---
title: "Vercel deploy MIDDLEWARE_INVOCATION_FAILED + Cannot find module @swc/helpers — Next.js 16.2.x + proxy.ts middleware regression"
description: "Fix HTTP 500 MIDDLEWARE_INVOCATION_FAILED on Vercel production deployment caused by @swc/helpers module resolution failure when using Next.js 16.2.x App Router with proxy.ts middleware convention and Sentry installed Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "MIDDLEWARE_INVOCATION_FAILED: Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js' — next@16.2.x + proxy.ts + @sentry/nextjs"
common_causes:
  - "GitHub vercel/next.js issues #93852 (#93850) reported May 2026 with minimal repro. Local build succeeds but Vercel deploy fails with HTTP 500. Blocking production deployments for teams using Next.js 16.2.x + sentry. Not in covered-errors (only generic 'Vercel build failed' exists, this is a specific deployment/runtime error). Category: Deployment."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-17"
published_at: "2026-05-17T03:13:52.023Z"
updated_at: "2026-05-17T03:13:52.023Z"
---

## What this error means

`MIDDLEWARE_INVOCATION_FAILED: Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js' — next@16.2.x + proxy.ts + @sentry/nextjs` is a Vercel failure pattern reported for developers trying to fix http 500 middleware_invocation_failed on vercel production deployment caused by @swc/helpers module resolution failure when using next.js 16.2.x app router with proxy.ts middleware convention and sentry installed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub vercel/next.js issues #93852 (#93850) reported May 2026 with minimal repro. Local build succeeds but Vercel deploy fails with HTTP 500. Blocking production deployments for teams using Next.js 16.2.x + sentry. Not in covered-errors (only generic 'Vercel build failed' exists, this is a specific deployment/runtime error). Category: Deployment.

## Common causes

- GitHub vercel/next.js issues #93852 (#93850) reported May 2026 with minimal repro. Local build succeeds but Vercel deploy fails with HTTP 500. Blocking production deployments for teams using Next.js 16.2.x + sentry. Not in covered-errors (only generic 'Vercel build failed' exists, this is a specific deployment/runtime error). Category: Deployment.

## Quick fixes

1. Confirm the exact error signature matches `MIDDLEWARE_INVOCATION_FAILED: Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js' — next@16.2.x + proxy.ts + @sentry/nextjs`.
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

- https://github.com/vercel/next.js/issues/93852
- https://github.com/vercel/next.js/issues/93850

Evidence note: GitHub vercel/next.js issues #93852 (#93850) reported May 2026 with minimal repro. Local build succeeds but Vercel deploy fails with HTTP 500. Blocking production deployments for teams using Next.js 16.2.x + sentry. Not in covered-errors (only generic 'Vercel build failed' exists, this is a specific deployment/runtime error). Category: Deployment.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `MIDDLEWARE_INVOCATION_FAILED: Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js' — next@16.2.x + proxy.ts + @sentry/nextjs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MIDDLEWARE_INVOCATION_FAILED: Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js' — next@16.2.x + proxy.ts + @sentry/nextjs`.
