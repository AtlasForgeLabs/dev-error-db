---
title: "Vercel Next.js Build Fails — Cannot Find Module @swc/helpers/esm/_interop_require_default.js in Edge Functions"
description: "Fix Vercel deployment failure where Next.js Edge functions crash at runtime due to missing @swc/helpers module — works locally but fails on Vercel deploy; caused by framework bundling layer bug Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js'; Did you forget to add it to \"dependencies\" in package.json?"
common_causes:
  - "GitHub issue vercel/next.js#93850 documents MIDDLEWARE_INVOCATION_FAILED and FUNCTION_INVOCATION_FAILED on Vercel deploy with missing @swc/helpers module path. Error occurs only in Vercel's deploy-time pipeline, not locally. Affects Vercel Hobby plan users deploying Next.js 16.2.x projects. The stack trace points to a framework runtime bundling layer bug. Source-backed from vercel/next.js official repo. Category mapped to Deployment (Vercel → Deployment, exact match in approved categories)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-06-03"
published_at: "2026-06-03T00:44:31.296Z"
updated_at: "2026-06-03T00:44:31.296Z"
---

## What this error means

`Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js'; Did you forget to add it to "dependencies" in package.json?` is a Vercel failure pattern reported for developers trying to fix vercel deployment failure where next.js edge functions crash at runtime due to missing @swc/helpers module — works locally but fails on vercel deploy; caused by framework bundling layer bug. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue vercel/next.js#93850 documents MIDDLEWARE_INVOCATION_FAILED and FUNCTION_INVOCATION_FAILED on Vercel deploy with missing @swc/helpers module path. Error occurs only in Vercel's deploy-time pipeline, not locally. Affects Vercel Hobby plan users deploying Next.js 16.2.x projects. The stack trace points to a framework runtime bundling layer bug. Source-backed from vercel/next.js official repo. Category mapped to Deployment (Vercel → Deployment, exact match in approved categories).

## Common causes

- GitHub issue vercel/next.js#93850 documents MIDDLEWARE_INVOCATION_FAILED and FUNCTION_INVOCATION_FAILED on Vercel deploy with missing @swc/helpers module path. Error occurs only in Vercel's deploy-time pipeline, not locally. Affects Vercel Hobby plan users deploying Next.js 16.2.x projects. The stack trace points to a framework runtime bundling layer bug. Source-backed from vercel/next.js official repo. Category mapped to Deployment (Vercel → Deployment, exact match in approved categories).

## Quick fixes

1. Confirm the exact error signature matches `Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js'; Did you forget to add it to "dependencies" in package.json?`.
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

- https://github.com/vercel/next.js/issues/93850

Evidence note: GitHub issue vercel/next.js#93850 documents MIDDLEWARE_INVOCATION_FAILED and FUNCTION_INVOCATION_FAILED on Vercel deploy with missing @swc/helpers module path. Error occurs only in Vercel's deploy-time pipeline, not locally. Affects Vercel Hobby plan users deploying Next.js 16.2.x projects. The stack trace points to a framework runtime bundling layer bug. Source-backed from vercel/next.js official repo. Category mapped to Deployment (Vercel → Deployment, exact match in approved categories).

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js'; Did you forget to add it to "dependencies" in package.json?` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cannot find module '/var/task/node_modules/@swc/helpers/esm/_interop_require_default.js'; Did you forget to add it to "dependencies" in package.json?`.
