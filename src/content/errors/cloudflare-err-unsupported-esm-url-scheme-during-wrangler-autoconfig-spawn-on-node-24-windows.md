---
title: "wrangler 4.86–4.95 fails on Node 24 + Windows with ERR_UNSUPPORTED_ESM_URL_SCHEME blocking @opennextjs/cloudflare compat"
description: "Fix Cloudflare Wrangler build failure on Windows with Node.js 24 causing peer-dependency conflicts with Next.js adapter Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "ERR_UNSUPPORTED_ESM_URL_SCHEME during wrangler autoconfig spawn on Node 24 / Windows"
common_causes:
  - "Issue #14054 on cloudflare/workers-sdk (created 2026-05-26): wrangler@4.86.0 through 4.95.x breaks on Windows + Node 24 due to ESM URL scheme regression in autoconfig. Forces pinning to v3 which conflicts with @opennextjs/cloudflare peer-dep requirement (^4.38.0). Directly blocks deploying Vercel+Cloudflare Next.js sites — high commercial impact for full-stack developers. Category: Cloudflare (wrangler is the official Cloudflare CLI)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-27"
published_at: "2026-05-27T20:43:21.012Z"
updated_at: "2026-05-27T20:43:21.012Z"
---

## What this error means

`ERR_UNSUPPORTED_ESM_URL_SCHEME during wrangler autoconfig spawn on Node 24 / Windows` is a Cloudflare failure pattern reported for developers trying to fix cloudflare wrangler build failure on windows with node.js 24 causing peer-dependency conflicts with next.js adapter. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #14054 on cloudflare/workers-sdk (created 2026-05-26): wrangler@4.86.0 through 4.95.x breaks on Windows + Node 24 due to ESM URL scheme regression in autoconfig. Forces pinning to v3 which conflicts with @opennextjs/cloudflare peer-dep requirement (^4.38.0). Directly blocks deploying Vercel+Cloudflare Next.js sites — high commercial impact for full-stack developers. Category: Cloudflare (wrangler is the official Cloudflare CLI).

## Common causes

- Issue #14054 on cloudflare/workers-sdk (created 2026-05-26): wrangler@4.86.0 through 4.95.x breaks on Windows + Node 24 due to ESM URL scheme regression in autoconfig. Forces pinning to v3 which conflicts with @opennextjs/cloudflare peer-dep requirement (^4.38.0). Directly blocks deploying Vercel+Cloudflare Next.js sites — high commercial impact for full-stack developers. Category: Cloudflare (wrangler is the official Cloudflare CLI).

## Quick fixes

1. Confirm the exact error signature matches `ERR_UNSUPPORTED_ESM_URL_SCHEME during wrangler autoconfig spawn on Node 24 / Windows`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/14054

Evidence note: Issue #14054 on cloudflare/workers-sdk (created 2026-05-26): wrangler@4.86.0 through 4.95.x breaks on Windows + Node 24 due to ESM URL scheme regression in autoconfig. Forces pinning to v3 which conflicts with @opennextjs/cloudflare peer-dep requirement (^4.38.0). Directly blocks deploying Vercel+Cloudflare Next.js sites — high commercial impact for full-stack developers. Category: Cloudflare (wrangler is the official Cloudflare CLI).

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `ERR_UNSUPPORTED_ESM_URL_SCHEME during wrangler autoconfig spawn on Node 24 / Windows` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERR_UNSUPPORTED_ESM_URL_SCHEME during wrangler autoconfig spawn on Node 24 / Windows`.
