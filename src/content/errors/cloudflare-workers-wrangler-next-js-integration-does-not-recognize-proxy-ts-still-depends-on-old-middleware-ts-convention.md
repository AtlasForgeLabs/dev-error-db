---
title: "Cloudflare Wrangler Does Not Support Next.js 16 proxy.ts Convention"
description: "Fix Cloudflare Wrangler failing to bundle Next.js 16 apps that use proxy.ts instead of deprecated middleware.ts Includes evidence for Cloudflare Workers troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Workers"
error_signature: "wrangler Next.js integration does not recognize proxy.ts; still depends on old middleware.ts convention"
common_causes:
  - "Official cloudflare/workers-sdk issue #13937. Next.js 16 renamed middleware.ts to proxy.ts and exported function from middleware() to proxy(). Wrangler 4.90.1 does not recognize new convention, causing proxy handling failures. Highly relevant for teams migrating to Next.js 16 on Cloudflare Pages. Strong commercial value: deployment-blocking for paid Cloudflare plans."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-17"
published_at: "2026-05-17T02:13:51.888Z"
updated_at: "2026-05-17T02:13:51.888Z"
---

## What this error means

`wrangler Next.js integration does not recognize proxy.ts; still depends on old middleware.ts convention` is a Cloudflare Workers failure pattern reported for developers trying to fix cloudflare wrangler failing to bundle next.js 16 apps that use proxy.ts instead of deprecated middleware.ts. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official cloudflare/workers-sdk issue #13937. Next.js 16 renamed middleware.ts to proxy.ts and exported function from middleware() to proxy(). Wrangler 4.90.1 does not recognize new convention, causing proxy handling failures. Highly relevant for teams migrating to Next.js 16 on Cloudflare Pages. Strong commercial value: deployment-blocking for paid Cloudflare plans.

## Common causes

- Official cloudflare/workers-sdk issue #13937. Next.js 16 renamed middleware.ts to proxy.ts and exported function from middleware() to proxy(). Wrangler 4.90.1 does not recognize new convention, causing proxy handling failures. Highly relevant for teams migrating to Next.js 16 on Cloudflare Pages. Strong commercial value: deployment-blocking for paid Cloudflare plans.

## Quick fixes

1. Confirm the exact error signature matches `wrangler Next.js integration does not recognize proxy.ts; still depends on old middleware.ts convention`.
2. Check the Cloudflare Workers account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/13937

Evidence note: Official cloudflare/workers-sdk issue #13937. Next.js 16 renamed middleware.ts to proxy.ts and exported function from middleware() to proxy(). Wrangler 4.90.1 does not recognize new convention, causing proxy handling failures. Highly relevant for teams migrating to Next.js 16 on Cloudflare Pages. Strong commercial value: deployment-blocking for paid Cloudflare plans.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `wrangler Next.js integration does not recognize proxy.ts; still depends on old middleware.ts convention` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Workers workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler Next.js integration does not recognize proxy.ts; still depends on old middleware.ts convention`.
