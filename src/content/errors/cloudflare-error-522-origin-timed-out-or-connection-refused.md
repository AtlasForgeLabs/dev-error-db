---
title: "Cloudflare Workers Error 522 Connection Timed Out"
description: "Fix Cloudflare 522 origin timeout error — website hosted behind Cloudflare returns 522 because origin server fails to respond within Cloudflare's timeout window. Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: Origin timed out (or connection refused)"
common_causes:
  - "From sources-guide.md query pattern for Cloudflare error codes 522/524. Common production outage pattern: Cloudflare CDN proxies to origin, origin becomes unresponsive → 522 served to end users. High commercial impact for businesses relying on CF-backed services. Error 522 already partially covered but 522 vs 524 differentiation page missing. Search demand consistently high for both error codes. Maps to Cloudflare per category rules."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "Cloudflare"
updated: "2026-05-28"
published_at: "2026-05-28T00:43:21.540Z"
updated_at: "2026-05-28T00:43:21.540Z"
---

## What this error means

`Error 522: Origin timed out (or connection refused)` is a Cloudflare failure pattern reported for developers trying to fix cloudflare 522 origin timeout error — website hosted behind cloudflare returns 522 because origin server fails to respond within cloudflare's timeout window.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

From sources-guide.md query pattern for Cloudflare error codes 522/524. Common production outage pattern: Cloudflare CDN proxies to origin, origin becomes unresponsive → 522 served to end users. High commercial impact for businesses relying on CF-backed services. Error 522 already partially covered but 522 vs 524 differentiation page missing. Search demand consistently high for both error codes. Maps to Cloudflare per category rules.

## Common causes

- From sources-guide.md query pattern for Cloudflare error codes 522/524. Common production outage pattern: Cloudflare CDN proxies to origin, origin becomes unresponsive → 522 served to end users. High commercial impact for businesses relying on CF-backed services. Error 522 already partially covered but 522 vs 524 differentiation page missing. Search demand consistently high for both error codes. Maps to Cloudflare per category rules.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: Origin timed out (or connection refused)`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

Evidence note: From sources-guide.md query pattern for Cloudflare error codes 522/524. Common production outage pattern: Cloudflare CDN proxies to origin, origin becomes unresponsive → 522 served to end users. High commercial impact for businesses relying on CF-backed services. Error 522 already partially covered but 522 vs 524 differentiation page missing. Search demand consistently high for both error codes. Maps to Cloudflare per category rules.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: Origin timed out (or connection refused)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: Origin timed out (or connection refused)`.
