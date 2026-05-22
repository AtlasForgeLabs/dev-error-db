---
title: "Cloudflare Minor Service Outage affecting production"
description: "Identify what Cloudflare services are currently experiencing outages or degradation so affected sites can diagnose root cause and implement mitigation Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Minor Service Outage — Cloudflare page indicator shows 'minor' severity (updated 2026-05-22T18:52:06.999Z)"
common_causes:
  - "Direct fetch from https://www.cloudflarestatus.com/api/v2/status.json confirmed active minor outage on Cloudflare platform. Recent incidents include Audit Log Delays (active), resolved Dashboard/API issues, DNS .internal zone issues, and increased 5xx errors to us-east-1. Cloud real-time status indicates ongoing infrastructure problems affecting paying enterprises. Category: Cloudflare per exact mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-22"
published_at: "2026-05-22T19:39:48.595Z"
updated_at: "2026-05-22T19:39:48.595Z"
---

## What this error means

`Minor Service Outage — Cloudflare page indicator shows 'minor' severity (updated 2026-05-22T18:52:06.999Z)` is a Cloudflare failure pattern reported for developers trying to identify what cloudflare services are currently experiencing outages or degradation so affected sites can diagnose root cause and implement mitigation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Direct fetch from https://www.cloudflarestatus.com/api/v2/status.json confirmed active minor outage on Cloudflare platform. Recent incidents include Audit Log Delays (active), resolved Dashboard/API issues, DNS .internal zone issues, and increased 5xx errors to us-east-1. Cloud real-time status indicates ongoing infrastructure problems affecting paying enterprises. Category: Cloudflare per exact mapping.

## Common causes

- Direct fetch from https://www.cloudflarestatus.com/api/v2/status.json confirmed active minor outage on Cloudflare platform. Recent incidents include Audit Log Delays (active), resolved Dashboard/API issues, DNS .internal zone issues, and increased 5xx errors to us-east-1. Cloud real-time status indicates ongoing infrastructure problems affecting paying enterprises. Category: Cloudflare per exact mapping.

## Quick fixes

1. Confirm the exact error signature matches `Minor Service Outage — Cloudflare page indicator shows 'minor' severity (updated 2026-05-22T18:52:06.999Z)`.
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

- https://www.cloudflarestatus.com/api/v2/status.json
- https://www.cloudflarestatus.com/api/v2/incidents.json

Evidence note: Direct fetch from https://www.cloudflarestatus.com/api/v2/status.json confirmed active minor outage on Cloudflare platform. Recent incidents include Audit Log Delays (active), resolved Dashboard/API issues, DNS .internal zone issues, and increased 5xx errors to us-east-1. Cloud real-time status indicates ongoing infrastructure problems affecting paying enterprises. Category: Cloudflare per exact mapping.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Minor Service Outage — Cloudflare page indicator shows 'minor' severity (updated 2026-05-22T18:52:06.999Z)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Minor Service Outage — Cloudflare page indicator shows 'minor' severity (updated 2026-05-22T18:52:06.999Z)`.
