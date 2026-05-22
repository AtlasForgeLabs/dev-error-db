---
title: "proxy.ts middleware does not execute in production when deployed behind Cloudflare Proxy"
description: "Developer deploying Next.js on Vercel behind Cloudflare finds proxy.ts middleware silently skipped in production, breaking API proxy and security header functionality Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "proxy.ts does not execute in production when behind Cloudflare Proxy; middleware.ts works but proxy.ts bypassed entirely when Cloudflare is in the path"
common_causes:
  - "GitHub vercel/next.js#86122 opened Nov 14 2025 by shivaluma. 58 comments, labeled Bug + Runtime. Intersects Cloudflare CDN/proxy with Next.js edge runtime. Category mapping: Cloudflare listed as approved category; error involves Cloudflare interaction. Persistent community issue (still open, high engagement). Commercial value: cloud proxy misconfiguration can expose APIs or break auth flows."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloudflare"
updated: "2026-05-22"
published_at: "2026-05-22T05:39:46.769Z"
updated_at: "2026-05-22T05:39:46.769Z"
---

## What this error means

`proxy.ts does not execute in production when behind Cloudflare Proxy; middleware.ts works but proxy.ts bypassed entirely when Cloudflare is in the path` is a Cloudflare failure pattern reported for developers trying to developer deploying next.js on vercel behind cloudflare finds proxy.ts middleware silently skipped in production, breaking api proxy and security header functionality. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub vercel/next.js#86122 opened Nov 14 2025 by shivaluma. 58 comments, labeled Bug + Runtime. Intersects Cloudflare CDN/proxy with Next.js edge runtime. Category mapping: Cloudflare listed as approved category; error involves Cloudflare interaction. Persistent community issue (still open, high engagement). Commercial value: cloud proxy misconfiguration can expose APIs or break auth flows.

## Common causes

- GitHub vercel/next.js#86122 opened Nov 14 2025 by shivaluma. 58 comments, labeled Bug + Runtime. Intersects Cloudflare CDN/proxy with Next.js edge runtime. Category mapping: Cloudflare listed as approved category; error involves Cloudflare interaction. Persistent community issue (still open, high engagement). Commercial value: cloud proxy misconfiguration can expose APIs or break auth flows.

## Quick fixes

1. Confirm the exact error signature matches `proxy.ts does not execute in production when behind Cloudflare Proxy; middleware.ts works but proxy.ts bypassed entirely when Cloudflare is in the path`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/vercel/next.js/issues/86122

Evidence note: GitHub vercel/next.js#86122 opened Nov 14 2025 by shivaluma. 58 comments, labeled Bug + Runtime. Intersects Cloudflare CDN/proxy with Next.js edge runtime. Category mapping: Cloudflare listed as approved category; error involves Cloudflare interaction. Persistent community issue (still open, high engagement). Commercial value: cloud proxy misconfiguration can expose APIs or break auth flows.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `proxy.ts does not execute in production when behind Cloudflare Proxy; middleware.ts works but proxy.ts bypassed entirely when Cloudflare is in the path` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `proxy.ts does not execute in production when behind Cloudflare Proxy; middleware.ts works but proxy.ts bypassed entirely when Cloudflare is in the path`.
