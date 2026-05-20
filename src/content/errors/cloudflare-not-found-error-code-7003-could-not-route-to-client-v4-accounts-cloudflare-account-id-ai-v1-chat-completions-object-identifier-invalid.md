---
title: "Cloudflare Workers AI returns 7003 Not Found due to invalid object identifier"
description: "Cloudflare Workers AI API call fails with 7003 routing error when CLOUDFLARE_ACCOUNT_ID placeholder not properly substituted in curl/base URL Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Not Found: error code 7003 Could not route to /client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions — object identifier invalid"
common_causes:
  - "GitHub issue #18552 on anomalyco/opencode — Cloudflare Workers AI returns 7003 error with templated $CLOUDFLARE_ACCOUNT_ID literally present in path. Developer confusion about proper credential substitution for Workers AI endpoint. Covers 7003 error code not in covered-errors (only 522/525 listed). Category: Cloudflare."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-20"
published_at: "2026-05-20T04:38:28.367Z"
updated_at: "2026-05-20T04:38:28.367Z"
---

## What this error means

`Not Found: error code 7003 Could not route to /client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions — object identifier invalid` is a Cloudflare failure pattern reported for developers trying to cloudflare workers ai api call fails with 7003 routing error when cloudflare_account_id placeholder not properly substituted in curl/base url. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #18552 on anomalyco/opencode — Cloudflare Workers AI returns 7003 error with templated $CLOUDFLARE_ACCOUNT_ID literally present in path. Developer confusion about proper credential substitution for Workers AI endpoint. Covers 7003 error code not in covered-errors (only 522/525 listed). Category: Cloudflare.

## Common causes

- GitHub issue #18552 on anomalyco/opencode — Cloudflare Workers AI returns 7003 error with templated $CLOUDFLARE_ACCOUNT_ID literally present in path. Developer confusion about proper credential substitution for Workers AI endpoint. Covers 7003 error code not in covered-errors (only 522/525 listed). Category: Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `Not Found: error code 7003 Could not route to /client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions — object identifier invalid`.
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

- https://github.com/anomalyco/opencode/issues/18552

Evidence note: GitHub issue #18552 on anomalyco/opencode — Cloudflare Workers AI returns 7003 error with templated $CLOUDFLARE_ACCOUNT_ID literally present in path. Developer confusion about proper credential substitution for Workers AI endpoint. Covers 7003 error code not in covered-errors (only 522/525 listed). Category: Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Not Found: error code 7003 Could not route to /client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions — object identifier invalid` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Not Found: error code 7003 Could not route to /client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/v1/chat/completions — object identifier invalid`.
