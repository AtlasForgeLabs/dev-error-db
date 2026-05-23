---
title: "Cloudflare Wrangler login hangs indefinitely on OAuth callback rejection"
description: "Debug Cloudflare Wrangler CLI login command hanging when OAuth callback returns an error (not access_denied), waiting full 120s timeout instead of surfacing the actual OAuth error to the user Includes evidence for Cloudflare Workers troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Workers"
error_signature: "wrangler login hangs until 120s OAuth timeout — OAuth provider redirect with error code not shown to user"
common_causes:
  - "Related GitHub PR #14022 in cloudflare/workers-sdk (opened May 23, 2026). When OAuth provider rejects the callback, Wrangler writes no HTTP response; server.close() blocks until connections end. Users see generic timeout, not the actual OAuth error_description (RFC 6749 §4.1.2.1). Affects every developer authenticating with Cloudflare."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloudflare"
updated: "2026-05-23"
published_at: "2026-05-23T10:39:50.317Z"
updated_at: "2026-05-23T10:39:50.317Z"
---

## What this error means

`wrangler login hangs until 120s OAuth timeout — OAuth provider redirect with error code not shown to user` is a Cloudflare Workers failure pattern reported for developers trying to debug cloudflare wrangler cli login command hanging when oauth callback returns an error (not access_denied), waiting full 120s timeout instead of surfacing the actual oauth error to the user. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Related GitHub PR #14022 in cloudflare/workers-sdk (opened May 23, 2026). When OAuth provider rejects the callback, Wrangler writes no HTTP response; server.close() blocks until connections end. Users see generic timeout, not the actual OAuth error_description (RFC 6749 §4.1.2.1). Affects every developer authenticating with Cloudflare.

## Common causes

- Related GitHub PR #14022 in cloudflare/workers-sdk (opened May 23, 2026). When OAuth provider rejects the callback, Wrangler writes no HTTP response; server.close() blocks until connections end. Users see generic timeout, not the actual OAuth error_description (RFC 6749 §4.1.2.1). Affects every developer authenticating with Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `wrangler login hangs until 120s OAuth timeout — OAuth provider redirect with error code not shown to user`.
2. Check the Cloudflare Workers account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/cloudflare/workers-sdk/pull/14022

Evidence note: Related GitHub PR #14022 in cloudflare/workers-sdk (opened May 23, 2026). When OAuth provider rejects the callback, Wrangler writes no HTTP response; server.close() blocks until connections end. Users see generic timeout, not the actual OAuth error_description (RFC 6749 §4.1.2.1). Affects every developer authenticating with Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `wrangler login hangs until 120s OAuth timeout — OAuth provider redirect with error code not shown to user` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Workers workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler login hangs until 120s OAuth timeout — OAuth provider redirect with error code not shown to user`.
