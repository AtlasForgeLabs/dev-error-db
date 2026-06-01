---
title: "Cloudflare Error 522 Origin Connection Timed Out: TCP Handshake Fails Between Edge and Origin Server"
description: "Diagnose and fix Cloudflare 522 errors where origin server doesn't respond to TCP handshake — caused by server overload, firewall blocking Cloudflare IPs, KeepAlive disabled, or DNS misconfiguration Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: connection timed out — Cloudflare times out contacting the origin web server within ~15 seconds, TCP handshake never establishes"
common_causes:
  - "Sources: Cloudflare official docs (updated May 15 2026), contabo.com blog, elementor.com guide. Error 522 means TCP connection between Cloudflare edge and origin never completes — unlike 524 where connection succeeds but response is slow. Causes: overloaded origin, firewall blocking CF IPs, incorrect DNS/IP, disabled KeepAlive. Very high volume daily search, blocks production websites."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`Error 522: connection timed out — Cloudflare times out contacting the origin web server within ~15 seconds, TCP handshake never establishes` is a Cloudflare failure pattern reported for developers trying to diagnose and fix cloudflare 522 errors where origin server doesn't respond to tcp handshake — caused by server overload, firewall blocking cloudflare ips, keepalive disabled, or dns misconfiguration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Sources: Cloudflare official docs (updated May 15 2026), contabo.com blog, elementor.com guide. Error 522 means TCP connection between Cloudflare edge and origin never completes — unlike 524 where connection succeeds but response is slow. Causes: overloaded origin, firewall blocking CF IPs, incorrect DNS/IP, disabled KeepAlive. Very high volume daily search, blocks production websites.

## Common causes

- Sources: Cloudflare official docs (updated May 15 2026), contabo.com blog, elementor.com guide. Error 522 means TCP connection between Cloudflare edge and origin never completes — unlike 524 where connection succeeds but response is slow. Causes: overloaded origin, firewall blocking CF IPs, incorrect DNS/IP, disabled KeepAlive. Very high volume daily search, blocks production websites.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: connection timed out — Cloudflare times out contacting the origin web server within ~15 seconds, TCP handshake never establishes`.
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

- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522
- https://contabo.com/blog/error-522-connection-timed-out-causes-and-ways-to-fix
- https://elementor.com/blog/cloudflare-error-522

Evidence note: Sources: Cloudflare official docs (updated May 15 2026), contabo.com blog, elementor.com guide. Error 522 means TCP connection between Cloudflare edge and origin never completes — unlike 524 where connection succeeds but response is slow. Causes: overloaded origin, firewall blocking CF IPs, incorrect DNS/IP, disabled KeepAlive. Very high volume daily search, blocks production websites.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: connection timed out — Cloudflare times out contacting the origin web server within ~15 seconds, TCP handshake never establishes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: connection timed out — Cloudflare times out contacting the origin web server within ~15 seconds, TCP handshake never establishes`.
