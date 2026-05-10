---
title: "DNS_PROBE_FINISHED_NXDOMAIN"
description: "Fix DNS_PROBE_FINISHED_NXDOMAIN errors caused by missing, incorrect, or not-yet-propagated DNS records."
category: "Networking"
technology: "DNS"
error_signature: "DNS_PROBE_FINISHED_NXDOMAIN"
common_causes:
  - "Domain has no matching DNS record"
  - "Nameservers are not configured correctly"
  - "DNS record was recently changed and has not propagated"
  - "Local DNS cache contains stale data"
quick_fix: "Check authoritative DNS records, verify nameservers, and flush local DNS cache after changes."
updated: "2026-05-10"
---

## What this error means

`DNS_PROBE_FINISHED_NXDOMAIN` means the browser, DNS resolver, or Cloudflare edge could not reach the expected origin in a healthy way. The important checks are authoritative DNS records, proxy status, origin availability, firewall rules, and TLS mode. This page helps you troubleshoot domains that do not resolve in browsers or deployment checks.

## Common causes

- Domain has no matching DNS record
- Nameservers are not configured correctly
- DNS record was recently changed and has not propagated
- Local DNS cache contains stale data

## Quick fixes

1. Check the authoritative DNS record for the exact hostname, not only the browser result.
2. Check authoritative DNS records, verify nameservers, and flush local DNS cache after changes.
3. Test the origin directly when possible, bypassing the proxy or CDN.
4. Flush local DNS cache or wait for TTL before judging propagation.

## Step-by-step troubleshooting

1. Start with the exact signature: `DNS_PROBE_FINISHED_NXDOMAIN`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Query authoritative DNS with `dig` or your DNS provider UI for the exact hostname.
3. Check whether Cloudflare proxy mode, SSL mode, and origin firewall rules match the deployment.
4. Compare direct origin response with proxied response to separate DNS, CDN, and origin problems.
5. Make the targeted change: Check authoritative DNS records, verify nameservers, and flush local DNS cache after changes.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Cloudflare error 522 connection timed out
- Vercel invalid domain configuration
- ERR_NAME_NOT_RESOLVED

## FAQ

### What should I check first?

Start with the exact `DNS_PROBE_FINISHED_NXDOMAIN` message and the authoritative DNS record, Cloudflare mode, and origin health. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed DNS step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `DNS_PROBE_FINISHED_NXDOMAIN`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
