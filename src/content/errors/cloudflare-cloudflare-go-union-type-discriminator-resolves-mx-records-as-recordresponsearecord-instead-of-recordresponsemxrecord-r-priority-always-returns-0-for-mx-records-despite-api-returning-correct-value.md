---
title: "Cloudflare Go SDK Misclassifies DNS MX Records as ARecord Losing Priority Field"
description: "Fix Cloudflare Go SDK DNS deserialization bug where MX records lose their priority field because union type discriminator incorrectly picks ARecord type Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "cloudflare-go union type discriminator resolves MX records as RecordResponseARecord instead of RecordResponseMXRecord; r.Priority always returns 0 for MX records despite API returning correct value"
common_causes:
  - "GitHub cloudflare/cloudflare-go #4300 (open since 2026-05-15, 3 comments). Confirmed bug in v4.6.0 raw REST API returns correct priority but SDK deserializes incorrectly. Workaround requires manual raw HTTP calls. Affects developers integrating Cloudflare DNS programmatically via Go. Category: Cloudflare (CDN/DNS service used by enterprises)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-22"
published_at: "2026-05-22T16:39:48.065Z"
updated_at: "2026-05-22T16:39:48.065Z"
---

## What this error means

`cloudflare-go union type discriminator resolves MX records as RecordResponseARecord instead of RecordResponseMXRecord; r.Priority always returns 0 for MX records despite API returning correct value` is a Cloudflare failure pattern reported for developers trying to fix cloudflare go sdk dns deserialization bug where mx records lose their priority field because union type discriminator incorrectly picks arecord type. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub cloudflare/cloudflare-go #4300 (open since 2026-05-15, 3 comments). Confirmed bug in v4.6.0 raw REST API returns correct priority but SDK deserializes incorrectly. Workaround requires manual raw HTTP calls. Affects developers integrating Cloudflare DNS programmatically via Go. Category: Cloudflare (CDN/DNS service used by enterprises).

## Common causes

- GitHub cloudflare/cloudflare-go #4300 (open since 2026-05-15, 3 comments). Confirmed bug in v4.6.0 raw REST API returns correct priority but SDK deserializes incorrectly. Workaround requires manual raw HTTP calls. Affects developers integrating Cloudflare DNS programmatically via Go. Category: Cloudflare (CDN/DNS service used by enterprises).

## Quick fixes

1. Confirm the exact error signature matches `cloudflare-go union type discriminator resolves MX records as RecordResponseARecord instead of RecordResponseMXRecord; r.Priority always returns 0 for MX records despite API returning correct value`.
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

- https://github.com/cloudflare/cloudflare-go/issues/4300

Evidence note: GitHub cloudflare/cloudflare-go #4300 (open since 2026-05-15, 3 comments). Confirmed bug in v4.6.0 raw REST API returns correct priority but SDK deserializes incorrectly. Workaround requires manual raw HTTP calls. Affects developers integrating Cloudflare DNS programmatically via Go. Category: Cloudflare (CDN/DNS service used by enterprises).

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `cloudflare-go union type discriminator resolves MX records as RecordResponseARecord instead of RecordResponseMXRecord; r.Priority always returns 0 for MX records despite API returning correct value` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `cloudflare-go union type discriminator resolves MX records as RecordResponseARecord instead of RecordResponseMXRecord; r.Priority always returns 0 for MX records despite API returning correct value`.
