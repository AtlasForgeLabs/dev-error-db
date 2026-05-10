---
title: "Cloudflare error 522 connection timed out"
description: "Fix Cloudflare 522 errors when Cloudflare cannot establish a timely connection to the origin server."
category: "Networking"
technology: "Cloudflare"
error_signature: "Error 522: Connection timed out"
common_causes:
  - "Origin server is down or overloaded"
  - "Firewall blocks Cloudflare IP ranges"
  - "Origin network drops connections"
  - "DNS points to the wrong origin IP"
quick_fix: "Confirm the origin responds directly, allow Cloudflare IP ranges, and verify DNS points to the correct server."
updated: "2026-05-10"
---

## What this error means

`Error 522: Connection timed out` means the browser, DNS resolver, or Cloudflare edge could not reach the expected origin in a healthy way. The important checks are authoritative DNS records, proxy status, origin availability, firewall rules, and TLS mode. This page helps you troubleshoot Cloudflare 522 origin connection timeouts.

## Common causes

- Origin server is down or overloaded
- Firewall blocks Cloudflare IP ranges
- Origin network drops connections
- DNS points to the wrong origin IP

## Quick fixes

1. Check the authoritative DNS record for the exact hostname, not only the browser result.
2. Confirm the origin responds directly, allow Cloudflare IP ranges, and verify DNS points to the correct server.
3. Test the origin directly when possible, bypassing the proxy or CDN.
4. Flush local DNS cache or wait for TTL before judging propagation.

## Step-by-step troubleshooting

1. Start with the exact signature: `Error 522: Connection timed out`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Query authoritative DNS with `dig` or your DNS provider UI for the exact hostname.
3. Check whether Cloudflare proxy mode, SSL mode, and origin firewall rules match the deployment.
4. Compare direct origin response with proxied response to separate DNS, CDN, and origin problems.
5. Make the targeted change: Confirm the origin responds directly, allow Cloudflare IP ranges, and verify DNS points to the correct server.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Cloudflare error 525 SSL handshake failed
- DNS_PROBE_FINISHED_NXDOMAIN
- ERR_TOO_MANY_REDIRECTS

## FAQ

### What should I check first?

Start with the exact `Error 522: Connection timed out` message and the authoritative DNS record, Cloudflare mode, and origin health. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Cloudflare step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Error 522: Connection timed out`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
