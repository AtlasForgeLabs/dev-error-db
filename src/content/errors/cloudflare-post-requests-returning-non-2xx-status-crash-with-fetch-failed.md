---
title: "Cloudflare Vite Plugin: POST Requests Returning Non-2xx Status Crash with 'fetch failed' in Miniflare"
description: "Fix Cloudflare Vite plugin crash when POST request handler returns non-2xx status code in Miniflare dev server Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "POST requests returning non-2xx status crash with 'fetch failed'"
common_causes:
  - "When using @cloudflare/vite-plugin with Vite dev server, any POST request handler returning non-2xx status (401, 400, 403, 404) crashes the Miniflare proxy with 'fetch failed'. GET requests with same status codes work fine. The actual worker response is lost."
  - "Closed issue on cloudflare/workers-sdk with 10 comments. Specific to dev mode (vite dev). POST non-2xx crashes Miniflare proxy. GET with same status codes works. Clear reproduction path."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare Python Worker Can't serialize top-level variable"
  - "Cloudflare wrangler dev truncates deferred chunks"
updated: "2026-05-14"
published_at: "2026-05-14T15:13:20.163Z"
updated_at: "2026-05-14T15:13:20.163Z"
---

## What this error means

`POST requests returning non-2xx status crash with 'fetch failed'` is a Cloudflare failure pattern reported for developers trying to fix cloudflare vite plugin crash when post request handler returns non-2xx status code in miniflare dev server. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Closed issue on cloudflare/workers-sdk with 10 comments. Specific to dev mode (vite dev). POST non-2xx crashes Miniflare proxy. GET with same status codes works. Clear reproduction path.

## Common causes

- When using @cloudflare/vite-plugin with Vite dev server, any POST request handler returning non-2xx status (401, 400, 403, 404) crashes the Miniflare proxy with 'fetch failed'. GET requests with same status codes work fine. The actual worker response is lost.
- Closed issue on cloudflare/workers-sdk with 10 comments. Specific to dev mode (vite dev). POST non-2xx crashes Miniflare proxy. GET with same status codes works. Clear reproduction path.

## Quick fixes

1. Confirm the exact error signature matches `POST requests returning non-2xx status crash with 'fetch failed'`.
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

- https://github.com/cloudflare/workers-sdk/issues/13013

Evidence note: Closed issue on cloudflare/workers-sdk with 10 comments. Specific to dev mode (vite dev). POST non-2xx crashes Miniflare proxy. GET with same status codes works. Clear reproduction path.

## Related errors

- Cloudflare Python Worker Can't serialize top-level variable
- Cloudflare wrangler dev truncates deferred chunks

## FAQ

### What should I check first?

Start with the exact `POST requests returning non-2xx status crash with 'fetch failed'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `POST requests returning non-2xx status crash with 'fetch failed'`.
