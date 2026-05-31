---
title: "Cloudflare Error 522 Connection Timed Out — TCP handshake failure between CF and origin"
description: "Site owner sees Cloudflare Error 522 and needs to diagnose whether it's caused by server overload, firewall blocking CF IPs, incorrect DNS/A record, or network issues — then implement fixes. Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "522 Connection Timed Out — Failed TCP handshakes between Cloudflare and the origin server. The origin did not return a SYN-ACK within the timeout window (15 seconds)."
common_causes:
  - "Contabo blog (updated 2026) provides comprehensive troubleshooting for 522: six root causes including server crash/crash/reboot/maintenance, firewall dropping CF IP ranges, wrong A/AAAA records post-migration, and general connectivity problems. Also distinguished from 521 (connection refused) and 524 (connection established but slow response). High search intent from sysadmins and DevOps operators. Category: Cloudflare."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-31"
published_at: "2026-05-31T22:44:25.443Z"
updated_at: "2026-05-31T22:44:25.443Z"
---

## What this error means

`522 Connection Timed Out — Failed TCP handshakes between Cloudflare and the origin server. The origin did not return a SYN-ACK within the timeout window (15 seconds).` is a Cloudflare failure pattern reported for developers trying to site owner sees cloudflare error 522 and needs to diagnose whether it's caused by server overload, firewall blocking cf ips, incorrect dns/a record, or network issues — then implement fixes.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Contabo blog (updated 2026) provides comprehensive troubleshooting for 522: six root causes including server crash/crash/reboot/maintenance, firewall dropping CF IP ranges, wrong A/AAAA records post-migration, and general connectivity problems. Also distinguished from 521 (connection refused) and 524 (connection established but slow response). High search intent from sysadmins and DevOps operators. Category: Cloudflare.

## Common causes

- Contabo blog (updated 2026) provides comprehensive troubleshooting for 522: six root causes including server crash/crash/reboot/maintenance, firewall dropping CF IP ranges, wrong A/AAAA records post-migration, and general connectivity problems. Also distinguished from 521 (connection refused) and 524 (connection established but slow response). High search intent from sysadmins and DevOps operators. Category: Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `522 Connection Timed Out — Failed TCP handshakes between Cloudflare and the origin server. The origin did not return a SYN-ACK within the timeout window (15 seconds).`.
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

- https://contabo.com/blog/error-522-connection-timed-out-causes-and-ways-to-fix
- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524
- https://elementor.com/blog/cloudflare-error-522
- https://http.dev/522

Evidence note: Contabo blog (updated 2026) provides comprehensive troubleshooting for 522: six root causes including server crash/crash/reboot/maintenance, firewall dropping CF IP ranges, wrong A/AAAA records post-migration, and general connectivity problems. Also distinguished from 521 (connection refused) and 524 (connection established but slow response). High search intent from sysadmins and DevOps operators. Category: Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `522 Connection Timed Out — Failed TCP handshakes between Cloudflare and the origin server. The origin did not return a SYN-ACK within the timeout window (15 seconds).` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `522 Connection Timed Out — Failed TCP handshakes between Cloudflare and the origin server. The origin did not return a SYN-ACK within the timeout window (15 seconds).`.
