---
title: "Cloudflare error 525 SSL handshake failed"
description: "Fix Cloudflare 525 SSL handshake failures between Cloudflare and the origin server."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 525: SSL handshake failed"
common_causes:
  - "Origin certificate is invalid or expired"
  - "Origin does not support compatible TLS settings"
  - "Cloudflare SSL mode does not match origin configuration"
  - "Server name indication is not configured correctly"
quick_fix: "Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup."
related_errors:
  - "SSL certificate has expired"
  - "Cloudflare error 522 connection timed out"
  - "unable to get local issuer certificate"
updated: "2026-05-10"
---

## What this error means

`Error 525: SSL handshake failed` means name resolution, origin connectivity, or TLS certificate validation failed before the application request could complete.

## Why this happens

DNS and TLS failures often happen outside the application: resolver cache, authoritative records, proxy mode, origin firewall, or CA trust.

For Cloudflare error 525 SSL handshake failed, separate DNS, CDN/proxy, origin, and certificate checks instead of changing app code first.

## Quick fixes

1. Check the exact hostname, not just the apex domain.
2. Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup.
3. Compare direct origin behavior with proxied/CDN behavior when possible.
4. Retry after DNS TTL or certificate deployment has had time to propagate.

## Copy-paste commands

### Query DNS records

```bash
dig example.com A

dig example.com CNAME
```

### Check HTTP response headers

```bash
curl -I https://example.com
```

### Inspect TLS certificate chain

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null
```

### Flush macOS DNS cache

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

## Real-world fixes

- If Cloudflare is enabled, test whether the origin responds when accessed directly.
- If only one network fails, compare DNS resolver answers before changing server config.
- Install a valid origin certificate and use a Cloudflare SSL mode that matches the origin HTTPS setup.

## Step-by-step troubleshooting

1. Confirm the browser, client, or log reports `Error 525: SSL handshake failed` for the same hostname.
2. Use `dig` to verify the authoritative DNS answer.
3. Use `curl -I` to check whether the hostname reaches the expected service.
4. Use `openssl s_client` to inspect certificate hostname, issuer, and expiry.
5. If a CDN is involved, compare proxied and direct-origin behavior.

## Platform-specific fixes

### macOS

- Use `dscacheutil` to clear local DNS cache after changing records.

### Linux

- Use `dig` or `resolvectl query` to compare resolver answers.

### Windows

- Use `ipconfig /flushdns` after DNS changes, then retest the exact hostname.

## How to prevent it

- Track DNS changes with owner, TTL, and expected target.
- Monitor certificate expiry before renewal windows close.
- Keep CDN SSL mode and origin certificate configuration documented.

## Related errors

- SSL certificate has expired
- Cloudflare error 522 connection timed out
- unable to get local issuer certificate

## FAQ

### What should I check first?

Start with the exact `Error 525: SSL handshake failed` line and the command, request, or workflow step that produced it. In DNS or SSL/TLS, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed DNS or SSL/TLS step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Error 525: SSL handshake failed`. The fix is working when that step completes without the same signature and produces the expected output.
