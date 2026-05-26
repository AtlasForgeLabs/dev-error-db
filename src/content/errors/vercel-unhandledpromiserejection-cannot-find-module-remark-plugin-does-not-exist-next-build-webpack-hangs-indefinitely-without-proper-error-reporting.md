---
title: "Next.js @next/mdx plugin path resolution throws UnhandledPromiseRejection causing build hang"
description: "Fix Next.js build process hanging when @next/mdx webpack loader fails to resolve a remark plugin — should throw readable error instead of hanging silently or throwing unhandled promise rejection. Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "UnhandledPromiseRejection: Cannot find module 'remark-plugin-does-not-exist' — next build --webpack hangs indefinitely without proper error reporting"
common_causes:
  - "GitHub issue vercel/next.js#94118 opened May 26 2026 (today!). Reproduction repo provided (@Jinoko01/mdx-catch-bug). Build hangs without error message or throws Node.js UnhandledPromiseRejection. Blocks CI/CD builds for Vercel deployment pipelines. Very recent and still unresolved. Category: Deployment per mapping table (Vercel)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-26"
published_at: "2026-05-26T07:43:16.222Z"
updated_at: "2026-05-26T07:43:16.222Z"
---

## What this error means

`UnhandledPromiseRejection: Cannot find module 'remark-plugin-does-not-exist' — next build --webpack hangs indefinitely without proper error reporting` is a Vercel failure pattern reported for developers trying to fix next.js build process hanging when @next/mdx webpack loader fails to resolve a remark plugin — should throw readable error instead of hanging silently or throwing unhandled promise rejection.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue vercel/next.js#94118 opened May 26 2026 (today!). Reproduction repo provided (@Jinoko01/mdx-catch-bug). Build hangs without error message or throws Node.js UnhandledPromiseRejection. Blocks CI/CD builds for Vercel deployment pipelines. Very recent and still unresolved. Category: Deployment per mapping table (Vercel).

## Common causes

- GitHub issue vercel/next.js#94118 opened May 26 2026 (today!). Reproduction repo provided (@Jinoko01/mdx-catch-bug). Build hangs without error message or throws Node.js UnhandledPromiseRejection. Blocks CI/CD builds for Vercel deployment pipelines. Very recent and still unresolved. Category: Deployment per mapping table (Vercel).

## Quick fixes

1. Confirm the exact error signature matches `UnhandledPromiseRejection: Cannot find module 'remark-plugin-does-not-exist' — next build --webpack hangs indefinitely without proper error reporting`.
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

- https://github.com/vercel/next.js/issues/94118

Evidence note: GitHub issue vercel/next.js#94118 opened May 26 2026 (today!). Reproduction repo provided (@Jinoko01/mdx-catch-bug). Build hangs without error message or throws Node.js UnhandledPromiseRejection. Blocks CI/CD builds for Vercel deployment pipelines. Very recent and still unresolved. Category: Deployment per mapping table (Vercel).

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `UnhandledPromiseRejection: Cannot find module 'remark-plugin-does-not-exist' — next build --webpack hangs indefinitely without proper error reporting` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `UnhandledPromiseRejection: Cannot find module 'remark-plugin-does-not-exist' — next build --webpack hangs indefinitely without proper error reporting`.
