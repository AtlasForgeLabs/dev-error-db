---
title: "SSL self signed certificate in certificate chain"
description: "Fix self signed certificate in certificate chain errors in Node.js, npm, Git, and corporate networks."
category: "SSL/TLS"
technology: "SSL/TLS"
error_signature: "self signed certificate in certificate chain"
common_causes:
  - "Corporate proxy intercepts HTTPS traffic"
  - "Private registry uses an internal CA"
  - "Local trust store does not include the signing root"
  - "Certificate chain is misconfigured"
quick_fix: "Install the trusted root certificate and configure the affected tool to use the correct CA bundle."
related_errors:
  - "unable to get local issuer certificate"
  - "Python SSL certificate verify failed"
  - "npm ERR! code E401"
updated: "2026-05-10"
---

## What this error means

`self signed certificate in certificate chain` means name resolution, origin connectivity, or TLS certificate validation failed before the application request could complete.

## Why this happens

DNS and TLS failures often happen outside the application: resolver cache, authoritative records, proxy mode, origin firewall, or CA trust.

For SSL self signed certificate in certificate chain, separate DNS, CDN/proxy, origin, and certificate checks instead of changing app code first.

## Common causes

- Corporate proxy intercepts HTTPS traffic
- Private registry uses an internal CA
- Local trust store does not include the signing root
- Certificate chain is misconfigured

## Quick fixes

1. Check the exact hostname, not just the apex domain.
2. Install the trusted root certificate and configure the affected tool to use the correct CA bundle.
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

## Platform-specific fixes

### macOS

- Use `dscacheutil` to clear local DNS cache after changing records.

### Linux

- Use `dig` or `resolvectl query` to compare resolver answers.

### Windows

- Use `ipconfig /flushdns` after DNS changes, then retest the exact hostname.

## Real-world fixes

- If Cloudflare is enabled, test whether the origin responds when accessed directly.
- If only one network fails, compare DNS resolver answers before changing server config.
- Install the trusted root certificate and configure the affected tool to use the correct CA bundle.

## Step-by-step troubleshooting

1. Confirm the browser, client, or log reports `self signed certificate in certificate chain` for the same hostname.
2. Use `dig` to verify the authoritative DNS answer.
3. Use `curl -I` to check whether the hostname reaches the expected service.
4. Use `openssl s_client` to inspect certificate hostname, issuer, and expiry.
5. If a CDN is involved, compare proxied and direct-origin behavior.

## How to prevent it

- Track DNS changes with owner, TTL, and expected target.
- Monitor certificate expiry before renewal windows close.
- Keep CDN SSL mode and origin certificate configuration documented.

## Related errors

- unable to get local issuer certificate
- Python SSL certificate verify failed
- npm ERR! code E401

## FAQ

### What should I check first?

Start with the exact `self signed certificate in certificate chain` line and the command, request, or workflow step that produced it. In DNS or SSL/TLS, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed DNS or SSL/TLS step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `self signed certificate in certificate chain`. The fix is working when that step completes without the same signature and produces the expected output.
