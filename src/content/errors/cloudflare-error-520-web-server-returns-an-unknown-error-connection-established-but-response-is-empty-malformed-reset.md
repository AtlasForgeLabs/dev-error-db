---
title: "Cloudflare Error 520 vs 522 vs 524 — Origin Server Returns Garbled Response After Connection Succeeds"
description: "Diagnose and fix Cloudflare 520 error when origin server returns garbled or empty response after TCP connection succeeds, distinguishing from 522 timeout and 524 gateway timeout Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "\"Error 520: web server returns an unknown error\" — connection established but response is empty/malformed/reset"
common_causes:
  - "Critical infrastructure error affecting production sites globally. 520 is distinct from 522 (connection timeout before response) and 524 (gateway timeout after 100s wait). Common causes: server crashes/resource exhaustion, oversized response headers (>128KB), HTTP/2 misconfiguration, firewall blocking Cloudflare IPs. Official Cloudflare docs + independent analysis both provide detailed troubleshooting. High search demand given it's a common production outage symptom."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-02"
published_at: "2026-06-02T17:44:30.392Z"
updated_at: "2026-06-02T17:44:30.392Z"
---

## What this error means

`"Error 520: web server returns an unknown error" — connection established but response is empty/malformed/reset` is a Cloudflare failure pattern reported for developers trying to diagnose and fix cloudflare 520 error when origin server returns garbled or empty response after tcp connection succeeds, distinguishing from 522 timeout and 524 gateway timeout. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Critical infrastructure error affecting production sites globally. 520 is distinct from 522 (connection timeout before response) and 524 (gateway timeout after 100s wait). Common causes: server crashes/resource exhaustion, oversized response headers (>128KB), HTTP/2 misconfiguration, firewall blocking Cloudflare IPs. Official Cloudflare docs + independent analysis both provide detailed troubleshooting. High search demand given it's a common production outage symptom.

## Common causes

- Critical infrastructure error affecting production sites globally. 520 is distinct from 522 (connection timeout before response) and 524 (gateway timeout after 100s wait). Common causes: server crashes/resource exhaustion, oversized response headers (>128KB), HTTP/2 misconfiguration, firewall blocking Cloudflare IPs. Official Cloudflare docs + independent analysis both provide detailed troubleshooting. High search demand given it's a common production outage symptom.

## Quick fixes

1. Confirm the exact error signature matches `"Error 520: web server returns an unknown error" — connection established but response is empty/malformed/reset`.
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

- https://contabo.com/blog/cloudflare-error-520-causes-and-how-to-fix-it/
- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520
- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522

Evidence note: Critical infrastructure error affecting production sites globally. 520 is distinct from 522 (connection timeout before response) and 524 (gateway timeout after 100s wait). Common causes: server crashes/resource exhaustion, oversized response headers (>128KB), HTTP/2 misconfiguration, firewall blocking Cloudflare IPs. Official Cloudflare docs + independent analysis both provide detailed troubleshooting. High search demand given it's a common production outage symptom.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `"Error 520: web server returns an unknown error" — connection established but response is empty/malformed/reset` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Error 520: web server returns an unknown error" — connection established but response is empty/malformed/reset`.
