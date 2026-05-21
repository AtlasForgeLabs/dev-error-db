---
title: "Next.js Turbopack crashes in pages/_app.tsx when next/font is imported"
description: "Fix Turbopack runtime crash triggered by importing next/font in _app.tsx — breaking font optimization for Pages Router projects migrating to or using Turbopack on Vercel Includes evidence for Vercel / Next.js troubleshooting demand."
category: "Deployment"
technology: "Vercel / Next.js"
error_signature: "Turbopack crashes in pages/_app.tsx when next/font is imported"
common_causes:
  - "Found in vercel/next.js GitHub Issues #93162 (opened Apr 23, 2026). Labeled CSS + Font(next/font) + Pages Router + Turbopack. Intersects multiple feature surfaces. Non-deterministic crash makes debugging difficult. Pages Router legacy codebases facing migration pressure."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-21"
published_at: "2026-05-21T00:38:30.922Z"
updated_at: "2026-05-21T00:38:30.922Z"
---

## What this error means

`Turbopack crashes in pages/_app.tsx when next/font is imported` is a Vercel / Next.js failure pattern reported for developers trying to fix turbopack runtime crash triggered by importing next/font in _app.tsx — breaking font optimization for pages router projects migrating to or using turbopack on vercel. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in vercel/next.js GitHub Issues #93162 (opened Apr 23, 2026). Labeled CSS + Font(next/font) + Pages Router + Turbopack. Intersects multiple feature surfaces. Non-deterministic crash makes debugging difficult. Pages Router legacy codebases facing migration pressure.

## Common causes

- Found in vercel/next.js GitHub Issues #93162 (opened Apr 23, 2026). Labeled CSS + Font(next/font) + Pages Router + Turbopack. Intersects multiple feature surfaces. Non-deterministic crash makes debugging difficult. Pages Router legacy codebases facing migration pressure.

## Quick fixes

1. Confirm the exact error signature matches `Turbopack crashes in pages/_app.tsx when next/font is imported`.
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

- https://github.com/vercel/next.js/issues/93162

Evidence note: Found in vercel/next.js GitHub Issues #93162 (opened Apr 23, 2026). Labeled CSS + Font(next/font) + Pages Router + Turbopack. Intersects multiple feature surfaces. Non-deterministic crash makes debugging difficult. Pages Router legacy codebases facing migration pressure.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Turbopack crashes in pages/_app.tsx when next/font is imported` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel / Next.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Turbopack crashes in pages/_app.tsx when next/font is imported`.
