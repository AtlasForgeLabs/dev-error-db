---
title: "Local Build Works But Vercel Fails: Module Resolution Mismatch with Path Aliases (shadcn-ui + tsconfig)"
description: "Fix Vercel deploy failure caused by tsconfig path aliases not resolving correctly in build container Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Module not found: Can't resolve '<component>' on Vercel despite working locally (shadcn-ui path alias issue)"
common_causes:
  - "Multiple reports on vercel/next.js#69390 and shadcn-ui/ui#3683. Build succeeds locally but Vercel cannot resolve components referenced via tsconfig.json path aliases (common with shadcn-ui setups). The RegisterForm component, etc. fail with 'Module not found: Can't resolve'. Developers lose deployed builds until manually correcting alias paths. High urgency as it blocks production deployment. Covers edge case beyond generic 'Vercel build command failed' in covered-errors. Category: Deployment per mapping for Vercel."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-19"
published_at: "2026-05-19T16:37:16.923Z"
updated_at: "2026-05-19T16:37:16.923Z"
---

## What this error means

`Module not found: Can't resolve '<component>' on Vercel despite working locally (shadcn-ui path alias issue)` is a Vercel failure pattern reported for developers trying to fix vercel deploy failure caused by tsconfig path aliases not resolving correctly in build container. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple reports on vercel/next.js#69390 and shadcn-ui/ui#3683. Build succeeds locally but Vercel cannot resolve components referenced via tsconfig.json path aliases (common with shadcn-ui setups). The RegisterForm component, etc. fail with 'Module not found: Can't resolve'. Developers lose deployed builds until manually correcting alias paths. High urgency as it blocks production deployment. Covers edge case beyond generic 'Vercel build command failed' in covered-errors. Category: Deployment per mapping for Vercel.

## Common causes

- Multiple reports on vercel/next.js#69390 and shadcn-ui/ui#3683. Build succeeds locally but Vercel cannot resolve components referenced via tsconfig.json path aliases (common with shadcn-ui setups). The RegisterForm component, etc. fail with 'Module not found: Can't resolve'. Developers lose deployed builds until manually correcting alias paths. High urgency as it blocks production deployment. Covers edge case beyond generic 'Vercel build command failed' in covered-errors. Category: Deployment per mapping for Vercel.

## Quick fixes

1. Confirm the exact error signature matches `Module not found: Can't resolve '<component>' on Vercel despite working locally (shadcn-ui path alias issue)`.
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

- https://github.com/vercel/next.js/issues/69390
- https://github.com/shadcn-ui/ui/discussions/3683

Evidence note: Multiple reports on vercel/next.js#69390 and shadcn-ui/ui#3683. Build succeeds locally but Vercel cannot resolve components referenced via tsconfig.json path aliases (common with shadcn-ui setups). The RegisterForm component, etc. fail with 'Module not found: Can't resolve'. Developers lose deployed builds until manually correcting alias paths. High urgency as it blocks production deployment. Covers edge case beyond generic 'Vercel build command failed' in covered-errors. Category: Deployment per mapping for Vercel.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Module not found: Can't resolve '<component>' on Vercel despite working locally (shadcn-ui path alias issue)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Module not found: Can't resolve '<component>' on Vercel despite working locally (shadcn-ui path alias issue)`.
