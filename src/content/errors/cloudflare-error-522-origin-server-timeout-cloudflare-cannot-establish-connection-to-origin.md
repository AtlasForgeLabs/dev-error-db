---
title: "Cloudflare Error 522 Origin Server Timeout for Workers Apps"
description: "Diagnose and fix 522 timeout errors affecting Cloudflare-backed sites, especially Workers applications and proxied DNS zones Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: Origin server timeout — Cloudflare cannot establish connection to origin"
common_causes:
  - "Error 522 is one of Cloudflare's most commonly searched errors. Affects paying Cloudflare Pro/Business customers whose sites go down unexpectedly. Many root causes (firewall rules, WAF blocks, origin overload) make troubleshooting complex and searchable. Covered-errors has basic entry but no Workers-specific variant."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-16"
published_at: "2026-05-16T23:13:51.513Z"
updated_at: "2026-05-16T23:13:51.513Z"
---

## What this error means

`Error 522: Origin server timeout — Cloudflare cannot establish connection to origin` is a Cloudflare failure pattern reported for developers trying to diagnose and fix 522 timeout errors affecting cloudflare-backed sites, especially workers applications and proxied dns zones. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Error 522 is one of Cloudflare's most commonly searched errors. Affects paying Cloudflare Pro/Business customers whose sites go down unexpectedly. Many root causes (firewall rules, WAF blocks, origin overload) make troubleshooting complex and searchable. Covered-errors has basic entry but no Workers-specific variant.

## Common causes

- Error 522 is one of Cloudflare's most commonly searched errors. Affects paying Cloudflare Pro/Business customers whose sites go down unexpectedly. Many root causes (firewall rules, WAF blocks, origin overload) make troubleshooting complex and searchable. Covered-errors has basic entry but no Workers-specific variant.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: Origin server timeout — Cloudflare cannot establish connection to origin`.
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

- https://cloudflare.com/learning/dns/getting-started/refused-requests/

Evidence note: Error 522 is one of Cloudflare's most commonly searched errors. Affects paying Cloudflare Pro/Business customers whose sites go down unexpectedly. Many root causes (firewall rules, WAF blocks, origin overload) make troubleshooting complex and searchable. Covered-errors has basic entry but no Workers-specific variant.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: Origin server timeout — Cloudflare cannot establish connection to origin` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: Origin server timeout — Cloudflare cannot establish connection to origin`.
