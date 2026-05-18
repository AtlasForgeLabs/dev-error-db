---
title: "Bug: history.pushState to a new URL reverts when route has a prefetched Link + proxy.ts cookie-based redirect"
description: "Fix Next.js URL reversion bug where client-side navigation via history.pushState gets reverted by RSC tree when middleware uses proxy.ts with cookies Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "history.pushState to a new URL reverts when route has a prefetched <Link> + proxy.ts cookie-based redirect"
common_causes:
  - "GitHub issue #93923 in vercel/next.js (opened May 18, 2026). In Next.js 16.x, calling history.pushState to navigate to a new URL on the same route appears to succeed but immediately reverts within ~1 frame. Server-rendered RSC tree remains for old URL. Affected areas: Middleware, Linking and Navigating, Runtime, Dynamic Routes. Has minimal repro repo."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Deployment"
updated: "2026-05-18"
published_at: "2026-05-18T19:37:13.961Z"
updated_at: "2026-05-18T19:37:13.961Z"
---

## What this error means

`history.pushState to a new URL reverts when route has a prefetched <Link> + proxy.ts cookie-based redirect` is a Vercel failure pattern reported for developers trying to fix next.js url reversion bug where client-side navigation via history.pushstate gets reverted by rsc tree when middleware uses proxy.ts with cookies. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #93923 in vercel/next.js (opened May 18, 2026). In Next.js 16.x, calling history.pushState to navigate to a new URL on the same route appears to succeed but immediately reverts within ~1 frame. Server-rendered RSC tree remains for old URL. Affected areas: Middleware, Linking and Navigating, Runtime, Dynamic Routes. Has minimal repro repo.

## Common causes

- GitHub issue #93923 in vercel/next.js (opened May 18, 2026). In Next.js 16.x, calling history.pushState to navigate to a new URL on the same route appears to succeed but immediately reverts within ~1 frame. Server-rendered RSC tree remains for old URL. Affected areas: Middleware, Linking and Navigating, Runtime, Dynamic Routes. Has minimal repro repo.

## Quick fixes

1. Confirm the exact error signature matches `history.pushState to a new URL reverts when route has a prefetched <Link> + proxy.ts cookie-based redirect`.
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

- https://github.com/vercel/next.js/issues/93923

Evidence note: GitHub issue #93923 in vercel/next.js (opened May 18, 2026). In Next.js 16.x, calling history.pushState to navigate to a new URL on the same route appears to succeed but immediately reverts within ~1 frame. Server-rendered RSC tree remains for old URL. Affected areas: Middleware, Linking and Navigating, Runtime, Dynamic Routes. Has minimal repro repo.

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `history.pushState to a new URL reverts when route has a prefetched <Link> + proxy.ts cookie-based redirect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `history.pushState to a new URL reverts when route has a prefetched <Link> + proxy.ts cookie-based redirect`.
