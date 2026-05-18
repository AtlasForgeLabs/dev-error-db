---
title: "Vercel Next.js app/not-found.tsx Throws FUNCTION_INVOCATION_FAILED Instead of Rendering Custom Error Page"
description: "在 Vercel 部署的 Next.js 项目中启用了 cacheComponents 时，app/not-found.tsx 页面抛出 SERVER_INVOKE_FUNCTION_FAILED 而不是渲染自定义错误页面，用户看不到友好的 404/500 错误页面 Includes evidence for Vercel / Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel / Next.js"
error_signature: "FUNCTION_INVOCATION_FAILED server error"
common_causes:
  - "GitHub Issue #93902 on vercel/next.js (updated 2026-05-17). Regression where not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering custom error page when cacheComponents are enabled. Affects production deployments on Vercel — customers see raw error instead of friendly UI. Strong commercial value as it blocks proper error UX on deployed apps. P0 technology."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-18"
published_at: "2026-05-18T02:37:11.757Z"
updated_at: "2026-05-18T02:37:11.757Z"
---

## What this error means

`FUNCTION_INVOCATION_FAILED server error` is a Vercel / Next.js failure pattern reported for developers trying to 在 vercel 部署的 next.js 项目中启用了 cachecomponents 时，app/not-found.tsx 页面抛出 server_invoke_function_failed 而不是渲染自定义错误页面，用户看不到友好的 404/500 错误页面. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #93902 on vercel/next.js (updated 2026-05-17). Regression where not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering custom error page when cacheComponents are enabled. Affects production deployments on Vercel — customers see raw error instead of friendly UI. Strong commercial value as it blocks proper error UX on deployed apps. P0 technology.

## Common causes

- GitHub Issue #93902 on vercel/next.js (updated 2026-05-17). Regression where not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering custom error page when cacheComponents are enabled. Affects production deployments on Vercel — customers see raw error instead of friendly UI. Strong commercial value as it blocks proper error UX on deployed apps. P0 technology.

## Quick fixes

1. Confirm the exact error signature matches `FUNCTION_INVOCATION_FAILED server error`.
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

Evidence note: GitHub Issue #93902 on vercel/next.js (updated 2026-05-17). Regression where not-found.tsx throws FUNCTION_INVOCATION_FAILED server error instead of rendering custom error page when cacheComponents are enabled. Affects production deployments on Vercel — customers see raw error instead of friendly UI. Strong commercial value as it blocks proper error UX on deployed apps. P0 technology.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `FUNCTION_INVOCATION_FAILED server error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel / Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `FUNCTION_INVOCATION_FAILED server error`.
