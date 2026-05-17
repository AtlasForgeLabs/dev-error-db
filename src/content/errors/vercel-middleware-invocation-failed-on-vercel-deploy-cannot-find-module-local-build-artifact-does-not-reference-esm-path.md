---
title: "Vercel MIDDLEWARE_INVOCATION_FAILED: Cannot find module (ESM resolver mismatch)"
description: "Fix Vercel deployment failure caused by Vercel runtime resolver using require() instead of ESM path for middleware modules Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "MIDDLEWARE_INVOCATION_FAILED on Vercel deploy: Cannot find module — local build artifact does not reference ESM path"
common_causes:
  - "Found via Vercel/Next.js GitHub issue #93852. The Sentry static import triggers an ESM path resolution bug: local build succeeds but Vercel deploy fails with MIDDLEWARE_INVOCATION_FAILED because Vercel's runtime resolver tries to require() the ESM path. Direct deployment blocker for teams using Sentry + Vercel."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-17"
published_at: "2026-05-17T04:13:52.129Z"
updated_at: "2026-05-17T04:13:52.129Z"
---

## What this error means

`MIDDLEWARE_INVOCATION_FAILED on Vercel deploy: Cannot find module — local build artifact does not reference ESM path` is a Vercel failure pattern reported for developers trying to fix vercel deployment failure caused by vercel runtime resolver using require() instead of esm path for middleware modules. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via Vercel/Next.js GitHub issue #93852. The Sentry static import triggers an ESM path resolution bug: local build succeeds but Vercel deploy fails with MIDDLEWARE_INVOCATION_FAILED because Vercel's runtime resolver tries to require() the ESM path. Direct deployment blocker for teams using Sentry + Vercel.

## Common causes

- Found via Vercel/Next.js GitHub issue #93852. The Sentry static import triggers an ESM path resolution bug: local build succeeds but Vercel deploy fails with MIDDLEWARE_INVOCATION_FAILED because Vercel's runtime resolver tries to require() the ESM path. Direct deployment blocker for teams using Sentry + Vercel.

## Quick fixes

1. Confirm the exact error signature matches `MIDDLEWARE_INVOCATION_FAILED on Vercel deploy: Cannot find module — local build artifact does not reference ESM path`.
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

Evidence note: Found via Vercel/Next.js GitHub issue #93852. The Sentry static import triggers an ESM path resolution bug: local build succeeds but Vercel deploy fails with MIDDLEWARE_INVOCATION_FAILED because Vercel's runtime resolver tries to require() the ESM path. Direct deployment blocker for teams using Sentry + Vercel.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `MIDDLEWARE_INVOCATION_FAILED on Vercel deploy: Cannot find module — local build artifact does not reference ESM path` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MIDDLEWARE_INVOCATION_FAILED on Vercel deploy: Cannot find module — local build artifact does not reference ESM path`.
