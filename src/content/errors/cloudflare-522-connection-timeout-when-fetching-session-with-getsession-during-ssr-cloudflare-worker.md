---
title: "Cloudflare Error 522 During SSR Session Fetch with Cloudflare Workers — getSession Connection Timeout"
description: "Fix Cloudflare Error 522 (origin connection timed out) occurring specifically when calling getSession() during server-side rendering with Cloudflare Workers, blocking user authentication flows in production Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "\"522 Connection timeout\" when fetching session with getSession during SSR [Cloudflare Worker]"
common_causes:
  - "GitHub discussion #2644 on better-auth/better-auth (https://github.com/better-auth/better-auth/discussions/2644). Error 522 occurs when Cloudflare times out contacting the origin server during SSR session retrieval. Affects developers using Cloudflare Workers as edge functions — production-grade auth integration. The error directly impacts paying users unable to authenticate, creating immediate business impact."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloudflare"
updated: "2026-05-24"
published_at: "2026-05-24T17:43:11.267Z"
updated_at: "2026-05-24T17:43:11.267Z"
---

## What this error means

`"522 Connection timeout" when fetching session with getSession during SSR [Cloudflare Worker]` is a Cloudflare failure pattern reported for developers trying to fix cloudflare error 522 (origin connection timed out) occurring specifically when calling getsession() during server-side rendering with cloudflare workers, blocking user authentication flows in production. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub discussion #2644 on better-auth/better-auth (https://github.com/better-auth/better-auth/discussions/2644). Error 522 occurs when Cloudflare times out contacting the origin server during SSR session retrieval. Affects developers using Cloudflare Workers as edge functions — production-grade auth integration. The error directly impacts paying users unable to authenticate, creating immediate business impact.

## Common causes

- GitHub discussion #2644 on better-auth/better-auth (https://github.com/better-auth/better-auth/discussions/2644). Error 522 occurs when Cloudflare times out contacting the origin server during SSR session retrieval. Affects developers using Cloudflare Workers as edge functions — production-grade auth integration. The error directly impacts paying users unable to authenticate, creating immediate business impact.

## Quick fixes

1. Confirm the exact error signature matches `"522 Connection timeout" when fetching session with getSession during SSR [Cloudflare Worker]`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/better-auth/better-auth/discussions/2644
- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/

Evidence note: GitHub discussion #2644 on better-auth/better-auth (https://github.com/better-auth/better-auth/discussions/2644). Error 522 occurs when Cloudflare times out contacting the origin server during SSR session retrieval. Affects developers using Cloudflare Workers as edge functions — production-grade auth integration. The error directly impacts paying users unable to authenticate, creating immediate business impact.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `"522 Connection timeout" when fetching session with getSession during SSR [Cloudflare Worker]` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"522 Connection timeout" when fetching session with getSession during SSR [Cloudflare Worker]`.
