---
title: "Cloudflare Workers 522 Origin Server Timeout Under Load"
description: "Fix Cloudflare 522 errors caused by origin server hanging behind Workers proxy Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Cloudflare Error 522: Origin server connection timeout — worker script executed but origin returned no data within 100s"
common_causes:
  - "Error 522 (connection timeout) is distinct from 521 (origin down) and 524 (timed out waiting for response). Many articles cover 521/524 but less coverage for 522 specific root causes under heavy load. Cloudflare Workers usage creates monthly billing impact ($5/base + $5 per million invocations). The 522 error often requires diagnosing between Cloudflare edge config, WAF rules, and origin server health — creating a rich content opportunity."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-22"
published_at: "2026-05-22T12:39:47.621Z"
updated_at: "2026-05-22T12:39:47.621Z"
---

## What this error means

`Cloudflare Error 522: Origin server connection timeout — worker script executed but origin returned no data within 100s` is a Cloudflare failure pattern reported for developers trying to fix cloudflare 522 errors caused by origin server hanging behind workers proxy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Error 522 (connection timeout) is distinct from 521 (origin down) and 524 (timed out waiting for response). Many articles cover 521/524 but less coverage for 522 specific root causes under heavy load. Cloudflare Workers usage creates monthly billing impact ($5/base + $5 per million invocations). The 522 error often requires diagnosing between Cloudflare edge config, WAF rules, and origin server health — creating a rich content opportunity.

## Common causes

- Error 522 (connection timeout) is distinct from 521 (origin down) and 524 (timed out waiting for response). Many articles cover 521/524 but less coverage for 522 specific root causes under heavy load. Cloudflare Workers usage creates monthly billing impact ($5/base + $5 per million invocations). The 522 error often requires diagnosing between Cloudflare edge config, WAF rules, and origin server health — creating a rich content opportunity.

## Quick fixes

1. Confirm the exact error signature matches `Cloudflare Error 522: Origin server connection timeout — worker script executed but origin returned no data within 100s`.
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

- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/

Evidence note: Error 522 (connection timeout) is distinct from 521 (origin down) and 524 (timed out waiting for response). Many articles cover 521/524 but less coverage for 522 specific root causes under heavy load. Cloudflare Workers usage creates monthly billing impact ($5/base + $5 per million invocations). The 522 error often requires diagnosing between Cloudflare edge config, WAF rules, and origin server health — creating a rich content opportunity.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Cloudflare Error 522: Origin server connection timeout — worker script executed but origin returned no data within 100s` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cloudflare Error 522: Origin server connection timeout — worker script executed but origin returned no data within 100s`.
