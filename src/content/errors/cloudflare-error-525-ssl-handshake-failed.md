---
title: "Cloudflare error 525 SSL handshake failed"
description: "Fix Cloudflare 525 SSL handshake failures between Cloudflare and the origin server."
category: "Networking"
technology: "Cloudflare"
error_signature: "Error 525: SSL handshake failed"
common_causes:
  - "Origin certificate is invalid or expired"
  - "Origin does not support compatible TLS settings"
  - "Cloudflare SSL mode does not match origin configuration"
  - "Server name indication is not configured correctly"
quick_fix: "Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup."
updated: "2026-05-10"
---

## What this error means

`Error 525: SSL handshake failed` means the browser, DNS resolver, or Cloudflare edge could not reach the expected origin in a healthy way. The important checks are authoritative DNS records, proxy status, origin availability, firewall rules, and TLS mode. This page helps you resolve TLS handshake failures on Cloudflare proxied domains.

## Common causes

- Origin certificate is invalid or expired
- Origin does not support compatible TLS settings
- Cloudflare SSL mode does not match origin configuration
- Server name indication is not configured correctly

## Quick fixes

1. Check the authoritative DNS record for the exact hostname, not only the browser result.
2. Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup.
3. Test the origin directly when possible, bypassing the proxy or CDN.
4. Flush local DNS cache or wait for TTL before judging propagation.

## Step-by-step troubleshooting

1. Start with the exact signature: `Error 525: SSL handshake failed`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Query authoritative DNS with `dig` or your DNS provider UI for the exact hostname.
3. Check whether Cloudflare proxy mode, SSL mode, and origin firewall rules match the deployment.
4. Compare direct origin response with proxied response to separate DNS, CDN, and origin problems.
5. Make the targeted change: Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- SSL certificate has expired
- Cloudflare error 522 connection timed out
- unable to get local issuer certificate

## FAQ

### What should I check first?

Start with the exact `Error 525: SSL handshake failed` message and the authoritative DNS record, Cloudflare mode, and origin health. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Cloudflare step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Error 525: SSL handshake failed`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
