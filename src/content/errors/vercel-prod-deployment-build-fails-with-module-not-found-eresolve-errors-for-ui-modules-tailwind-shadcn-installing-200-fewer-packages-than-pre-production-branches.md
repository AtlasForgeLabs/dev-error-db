---
title: "Vercel Production Build Fails With Module Not Found While Dev Branches Succeed"
description: "Fix Vercel production build failures where node_modules installs fewer dependencies on production branch compared to dev/preview branches Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Prod deployment build fails with 'module not found' / ERESOLVE errors for UI modules (tailwind/shadCN), installing ~200 fewer packages than pre-production branches"
common_causes:
  - "Vercel Community thread: Production deployment fails while all pre-production branches (Dev, Test, Previews) deploy fine. The prod build installs ~200 fewer packages, leading to module not found errors for tailwind/shadCN components. Root cause linked to how Next.js/Vercel CLI treats devDependencies differently in production builds — required converting all dev dependencies to regular dependencies as workaround. Strong commercial value: production site is DOWN. Covers edge case not captured by general 'Vercel build command failed' or 'Vercel module not found' entries in covered-errors.md."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-31"
published_at: "2026-05-31T15:44:24.853Z"
updated_at: "2026-05-31T15:44:24.853Z"
---

## What this error means

`Prod deployment build fails with 'module not found' / ERESOLVE errors for UI modules (tailwind/shadCN), installing ~200 fewer packages than pre-production branches` is a Vercel failure pattern reported for developers trying to fix vercel production build failures where node_modules installs fewer dependencies on production branch compared to dev/preview branches. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Vercel Community thread: Production deployment fails while all pre-production branches (Dev, Test, Previews) deploy fine. The prod build installs ~200 fewer packages, leading to module not found errors for tailwind/shadCN components. Root cause linked to how Next.js/Vercel CLI treats devDependencies differently in production builds — required converting all dev dependencies to regular dependencies as workaround. Strong commercial value: production site is DOWN. Covers edge case not captured by general 'Vercel build command failed' or 'Vercel module not found' entries in covered-errors.md.

## Common causes

- Vercel Community thread: Production deployment fails while all pre-production branches (Dev, Test, Previews) deploy fine. The prod build installs ~200 fewer packages, leading to module not found errors for tailwind/shadCN components. Root cause linked to how Next.js/Vercel CLI treats devDependencies differently in production builds — required converting all dev dependencies to regular dependencies as workaround. Strong commercial value: production site is DOWN. Covers edge case not captured by general 'Vercel build command failed' or 'Vercel module not found' entries in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `Prod deployment build fails with 'module not found' / ERESOLVE errors for UI modules (tailwind/shadCN), installing ~200 fewer packages than pre-production branches`.
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

- https://community.vercel.com/t/prod-deployment-build-fails-every-other-branch-is-fine/7588

Evidence note: Vercel Community thread: Production deployment fails while all pre-production branches (Dev, Test, Previews) deploy fine. The prod build installs ~200 fewer packages, leading to module not found errors for tailwind/shadCN components. Root cause linked to how Next.js/Vercel CLI treats devDependencies differently in production builds — required converting all dev dependencies to regular dependencies as workaround. Strong commercial value: production site is DOWN. Covers edge case not captured by general 'Vercel build command failed' or 'Vercel module not found' entries in covered-errors.md.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Prod deployment build fails with 'module not found' / ERESOLVE errors for UI modules (tailwind/shadCN), installing ~200 fewer packages than pre-production branches` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Prod deployment build fails with 'module not found' / ERESOLVE errors for UI modules (tailwind/shadCN), installing ~200 fewer packages than pre-production branches`.
