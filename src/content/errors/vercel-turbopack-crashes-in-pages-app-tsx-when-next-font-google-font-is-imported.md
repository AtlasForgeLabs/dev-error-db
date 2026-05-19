---
title: "Vercel/Turbopack crashes when importing next/font in pages/_app.tsx"
description: "Fix Turbopack compiler crash triggered by next/font/google imports in _app.tsx pages router component Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "Turbopack crashes in pages/_app.tsx when next/font Google Font is imported"
common_causes:
  - "GitHub issue #93162 on vercel/next.js repo: Minimal reproducible crash — importing Geist_Mono from next/font/google causes Turbopack build to crash in _app.tsx. Works with webpack. Affects Next.js 16.x developers using Google Fonts in pages router. Category mapping: Vercel → Deployment. Fresh issue from April 2026."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-19"
published_at: "2026-05-19T08:37:15.668Z"
updated_at: "2026-05-19T08:37:15.668Z"
---

## What this error means

`Turbopack crashes in pages/_app.tsx when next/font Google Font is imported` is a Vercel failure pattern reported for developers trying to fix turbopack compiler crash triggered by next/font/google imports in _app.tsx pages router component. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #93162 on vercel/next.js repo: Minimal reproducible crash — importing Geist_Mono from next/font/google causes Turbopack build to crash in _app.tsx. Works with webpack. Affects Next.js 16.x developers using Google Fonts in pages router. Category mapping: Vercel → Deployment. Fresh issue from April 2026.

## Common causes

- GitHub issue #93162 on vercel/next.js repo: Minimal reproducible crash — importing Geist_Mono from next/font/google causes Turbopack build to crash in _app.tsx. Works with webpack. Affects Next.js 16.x developers using Google Fonts in pages router. Category mapping: Vercel → Deployment. Fresh issue from April 2026.

## Quick fixes

1. Confirm the exact error signature matches `Turbopack crashes in pages/_app.tsx when next/font Google Font is imported`.
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

- https://github.com/vercel/next.js/issues/93162

Evidence note: GitHub issue #93162 on vercel/next.js repo: Minimal reproducible crash — importing Geist_Mono from next/font/google causes Turbopack build to crash in _app.tsx. Works with webpack. Affects Next.js 16.x developers using Google Fonts in pages router. Category mapping: Vercel → Deployment. Fresh issue from April 2026.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `Turbopack crashes in pages/_app.tsx when next/font Google Font is imported` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Turbopack crashes in pages/_app.tsx when next/font Google Font is imported`.
