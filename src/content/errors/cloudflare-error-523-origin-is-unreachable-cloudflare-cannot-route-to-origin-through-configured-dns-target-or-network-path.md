---
title: "Cloudflare Error 523 Origin Is Unreachable — DNS/Routing Misconfiguration"
description: "Diagnose and fix Cloudflare Error 523 distinguishing it from 521/522, involving DNS misconfiguration, wrong origin IP, routing table issues, or host network reachability failure Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 523: Origin Is Unreachable — Cloudflare cannot route to origin through configured DNS target or network path"
common_causes:
  - "Comprehensive guide article from Unknown Proxies (May 21, 2026) documenting Error 523 distinction from other 52x codes. Covers root causes: stale DNS records, hosting migrations without DNS updates, private/internal IPs, firewall routing issues, IPv6 unreachable hosts. Not already published on dev-error-db (no existing Error 523 page found in covered-errors.md; only 522 and 525 listed). Category mapping: direct Cloudflare origin-side error with actionable troubleshooting paths."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-02"
published_at: "2026-06-02T19:44:30.648Z"
updated_at: "2026-06-02T19:44:30.648Z"
---

## What this error means

`Error 523: Origin Is Unreachable — Cloudflare cannot route to origin through configured DNS target or network path` is a Cloudflare failure pattern reported for developers trying to diagnose and fix cloudflare error 523 distinguishing it from 521/522, involving dns misconfiguration, wrong origin ip, routing table issues, or host network reachability failure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Comprehensive guide article from Unknown Proxies (May 21, 2026) documenting Error 523 distinction from other 52x codes. Covers root causes: stale DNS records, hosting migrations without DNS updates, private/internal IPs, firewall routing issues, IPv6 unreachable hosts. Not already published on dev-error-db (no existing Error 523 page found in covered-errors.md; only 522 and 525 listed). Category mapping: direct Cloudflare origin-side error with actionable troubleshooting paths.

## Common causes

- Comprehensive guide article from Unknown Proxies (May 21, 2026) documenting Error 523 distinction from other 52x codes. Covers root causes: stale DNS records, hosting migrations without DNS updates, private/internal IPs, firewall routing issues, IPv6 unreachable hosts. Not already published on dev-error-db (no existing Error 523 page found in covered-errors.md; only 522 and 525 listed). Category mapping: direct Cloudflare origin-side error with actionable troubleshooting paths.

## Quick fixes

1. Confirm the exact error signature matches `Error 523: Origin Is Unreachable — Cloudflare cannot route to origin through configured DNS target or network path`.
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

- https://unknownproxies.com/blog/error-codes/cloudflare-error-523-origin-unreachable

Evidence note: Comprehensive guide article from Unknown Proxies (May 21, 2026) documenting Error 523 distinction from other 52x codes. Covers root causes: stale DNS records, hosting migrations without DNS updates, private/internal IPs, firewall routing issues, IPv6 unreachable hosts. Not already published on dev-error-db (no existing Error 523 page found in covered-errors.md; only 522 and 525 listed). Category mapping: direct Cloudflare origin-side error with actionable troubleshooting paths.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 523: Origin Is Unreachable — Cloudflare cannot route to origin through configured DNS target or network path` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 523: Origin Is Unreachable — Cloudflare cannot route to origin through configured DNS target or network path`.
