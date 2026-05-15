---
title: "Next.js proxy.ts Does Not Execute in Production Behind Cloudflare Proxy"
description: "Fix Next.js proxy.ts route handler not running in production deployment behind Cloudflare reverse proxy Includes evidence for Vercel troubleshooting demand."
category: "Deployment"
technology: "Vercel"
error_signature: "proxy.ts does not execute in production when behind Cloudflare Proxy (middleware.ts works fine)"
common_causes:
  - "GitHub issue vercel/next.js#72915: In Next.js 16.0.3+, proxy.ts does not execute in production when deployed behind Cloudflare Proxy, while middleware.ts works correctly. 58 comments. Category mapping: Deployment (Vercel/Next.js deployment + Cloudflare proxy interaction)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Deployment"
updated: "2026-05-15"
published_at: "2026-05-15T18:13:23.227Z"
updated_at: "2026-05-15T18:13:23.227Z"
---

## What this error means

`proxy.ts does not execute in production when behind Cloudflare Proxy (middleware.ts works fine)` is a Vercel failure pattern reported for developers trying to fix next.js proxy.ts route handler not running in production deployment behind cloudflare reverse proxy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue vercel/next.js#72915: In Next.js 16.0.3+, proxy.ts does not execute in production when deployed behind Cloudflare Proxy, while middleware.ts works correctly. 58 comments. Category mapping: Deployment (Vercel/Next.js deployment + Cloudflare proxy interaction).

## Common causes

- GitHub issue vercel/next.js#72915: In Next.js 16.0.3+, proxy.ts does not execute in production when deployed behind Cloudflare Proxy, while middleware.ts works correctly. 58 comments. Category mapping: Deployment (Vercel/Next.js deployment + Cloudflare proxy interaction).

## Quick fixes

1. Confirm the exact error signature matches `proxy.ts does not execute in production when behind Cloudflare Proxy (middleware.ts works fine)`.
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

- https://github.com/vercel/next.js/issues/72915

Evidence note: GitHub issue vercel/next.js#72915: In Next.js 16.0.3+, proxy.ts does not execute in production when deployed behind Cloudflare Proxy, while middleware.ts works correctly. 58 comments. Category mapping: Deployment (Vercel/Next.js deployment + Cloudflare proxy interaction).

## Related errors

- Deployment

## FAQ

### What should I check first?

Start with the exact `proxy.ts does not execute in production when behind Cloudflare Proxy (middleware.ts works fine)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vercel workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `proxy.ts does not execute in production when behind Cloudflare Proxy (middleware.ts works fine)`.
