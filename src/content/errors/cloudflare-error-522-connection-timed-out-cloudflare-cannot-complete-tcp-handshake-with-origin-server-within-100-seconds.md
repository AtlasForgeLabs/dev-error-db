---
title: "Cloudflare Error 522 — Connection Timed Out Between Edge and Origin Server"
description: "Diagnose and fix Cloudflare 522 timeouts caused by overloaded origin, firewall blocking Cloudflare IPs, SSL/TLS misconfiguration, or Workers fetch-to-self routing Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: connection timed out — Cloudflare cannot complete TCP handshake with origin server within 100 seconds"
common_causes:
  - "Official Cloudflare support doc + multiple detailed troubleshooting guides cover 522 comprehensively. Specific advanced case: Workers fetch-to-self returns 522 when using custom domain (requires route or compatibility flag). Firewall IP whitelist, DNS mismatch, and KeepAlive settings all relevant. Strong search volume and moderate ranking difficulty. Not in covered-errors.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-01"
published_at: "2026-06-01T21:44:27.945Z"
updated_at: "2026-06-01T21:44:27.945Z"
---

## What this error means

`Error 522: connection timed out — Cloudflare cannot complete TCP handshake with origin server within 100 seconds` is a Cloudflare failure pattern reported for developers trying to diagnose and fix cloudflare 522 timeouts caused by overloaded origin, firewall blocking cloudflare ips, ssl/tls misconfiguration, or workers fetch-to-self routing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Cloudflare support doc + multiple detailed troubleshooting guides cover 522 comprehensively. Specific advanced case: Workers fetch-to-self returns 522 when using custom domain (requires route or compatibility flag). Firewall IP whitelist, DNS mismatch, and KeepAlive settings all relevant. Strong search volume and moderate ranking difficulty. Not in covered-errors.md.

## Common causes

- Official Cloudflare support doc + multiple detailed troubleshooting guides cover 522 comprehensively. Specific advanced case: Workers fetch-to-self returns 522 when using custom domain (requires route or compatibility flag). Firewall IP whitelist, DNS mismatch, and KeepAlive settings all relevant. Strong search volume and moderate ranking difficulty. Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: connection timed out — Cloudflare cannot complete TCP handshake with origin server within 100 seconds`.
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
- https://oxylabs.io/resources/error-codes/cloudflare-error-522

Evidence note: Official Cloudflare support doc + multiple detailed troubleshooting guides cover 522 comprehensively. Specific advanced case: Workers fetch-to-self returns 522 when using custom domain (requires route or compatibility flag). Firewall IP whitelist, DNS mismatch, and KeepAlive settings all relevant. Strong search volume and moderate ranking difficulty. Not in covered-errors.md.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: connection timed out — Cloudflare cannot complete TCP handshake with origin server within 100 seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: connection timed out — Cloudflare cannot complete TCP handshake with origin server within 100 seconds`.
