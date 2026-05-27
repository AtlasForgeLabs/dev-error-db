---
title: "Cloudflare Workers Outbound Request Timeout — 522/524 on All Fetch Calls"
description: "Debug Cloudflare Worker where all outbound fetch() requests return 522 connection timeout despite DNS and SSL being healthy Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Worker executes but fetch() to origin fails with 522 timeout; even simplified worker fetching google.com returns 522"
common_causes:
  - "Reported on AnswerOverflow showing complete Cloudflare Worker outbound fetch failure — DNS resolution works, SSL active, origin responds to direct curl (200 OK), but Worker's fetch() times out universally. Issue likely platform-wide affecting enterprise users. Cloudflare Error 522 already published on dev-error-db but this specific Workers-fetch-only manifestation is distinct. Source: web_search + answeroverflow.com. Category: Cloudflare Workers specific error path not yet covered."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-27"
published_at: "2026-05-27T13:43:20.143Z"
updated_at: "2026-05-27T13:43:20.143Z"
---

## What this error means

`Worker executes but fetch() to origin fails with 522 timeout; even simplified worker fetching google.com returns 522` is a Cloudflare failure pattern reported for developers trying to debug cloudflare worker where all outbound fetch() requests return 522 connection timeout despite dns and ssl being healthy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported on AnswerOverflow showing complete Cloudflare Worker outbound fetch failure — DNS resolution works, SSL active, origin responds to direct curl (200 OK), but Worker's fetch() times out universally. Issue likely platform-wide affecting enterprise users. Cloudflare Error 522 already published on dev-error-db but this specific Workers-fetch-only manifestation is distinct. Source: web_search + answeroverflow.com. Category: Cloudflare Workers specific error path not yet covered.

## Common causes

- Reported on AnswerOverflow showing complete Cloudflare Worker outbound fetch failure — DNS resolution works, SSL active, origin responds to direct curl (200 OK), but Worker's fetch() times out universally. Issue likely platform-wide affecting enterprise users. Cloudflare Error 522 already published on dev-error-db but this specific Workers-fetch-only manifestation is distinct. Source: web_search + answeroverflow.com. Category: Cloudflare Workers specific error path not yet covered.

## Quick fixes

1. Confirm the exact error signature matches `Worker executes but fetch() to origin fails with 522 timeout; even simplified worker fetching google.com returns 522`.
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

- https://www.answeroverflow.com/m/1397161520135409759

Evidence note: Reported on AnswerOverflow showing complete Cloudflare Worker outbound fetch failure — DNS resolution works, SSL active, origin responds to direct curl (200 OK), but Worker's fetch() times out universally. Issue likely platform-wide affecting enterprise users. Cloudflare Error 522 already published on dev-error-db but this specific Workers-fetch-only manifestation is distinct. Source: web_search + answeroverflow.com. Category: Cloudflare Workers specific error path not yet covered.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Worker executes but fetch() to origin fails with 522 timeout; even simplified worker fetching google.com returns 522` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Worker executes but fetch() to origin fails with 522 timeout; even simplified worker fetching google.com returns 522`.
