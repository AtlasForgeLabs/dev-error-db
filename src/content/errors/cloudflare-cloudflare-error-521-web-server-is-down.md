---
title: "Fix Cloudflare Error 521 Web Server Is Down"
description: "Fix Cloudflare 521 error when origin web server is down Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Cloudflare Error 521 Web server is down"
common_causes:
  - "Cloudflare 521 means the origin server refused the connection; common when origin is misconfigured or firewalled"
  - "Cloudflare official docs document 521 as 'Web server is down' — origin refused connection. dev-error-db.com covers 522/525 but not 521."
quick_fix: "Review the source evidence, verify configuration, and rerun the smallest failing command."
related_errors:
  - "Cloudflare Error 522"
  - "Cloudflare Error 523"
  - "Cloudflare Error 525"
updated: "2026-05-24"
published_at: "2026-05-24T05:36:58.175Z"
updated_at: "2026-05-24T05:36:58.175Z"
---

## What this error means

`Cloudflare Error 521 Web server is down` means name resolution, origin connectivity, or TLS certificate validation failed before the application request could complete.

## Common causes

- Cloudflare 521 means the origin server refused the connection; common when origin is misconfigured or firewalled
- Cloudflare official docs document 521 as 'Web server is down' — origin refused connection. dev-error-db.com covers 522/525 but not 521.

## How to fix Cloudflare Error 521 Web server is down

1. Check the exact hostname, not just the apex domain.
2. Review the source evidence, verify configuration, and rerun the smallest failing command.
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

## Quick fix

1. Check the exact hostname, not just the apex domain.
2. Review the source evidence, verify configuration, and rerun the smallest failing command.
3. Compare direct origin behavior with proxied/CDN behavior when possible.
4. Retry after DNS TTL or certificate deployment has had time to propagate.

## Step-by-step troubleshooting

1. Confirm the browser, client, or log reports `Cloudflare Error 521 Web server is down` for the same hostname.
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

## Real-world fixes

- If Cloudflare is enabled, test whether the origin responds when accessed directly.
- If only one network fails, compare DNS resolver answers before changing server config.
- Review the source evidence, verify configuration, and rerun the smallest failing command.

## How to prevent it

- Track DNS changes with owner, TTL, and expected target.
- Monitor certificate expiry before renewal windows close.
- Keep CDN SSL mode and origin certificate configuration documented.

## Related errors

- Cloudflare Error 522
- Cloudflare Error 523
- Cloudflare Error 525

## FAQ

### What should I check first?

Start with the exact `Cloudflare Error 521 Web server is down` line and the command, request, or workflow step that produced it. In DNS or SSL/TLS, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed DNS or SSL/TLS step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Cloudflare Error 521 Web server is down`. The fix is working when that step completes without the same signature and produces the expected output.

## Sources checked

- https://developers.cloudflare.com/support/troubleshooting/cloudflare-errors/troubleshooting-cloudflare-5xx-errors/
