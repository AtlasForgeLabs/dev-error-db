---
title: "Fix Cloudflare Error 521 Web Server Is Down"
description: "Fix Cloudflare 521 error when origin web server is down Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Cloudflare Error 521 Web server is down"
common_causes:
  - "Cloudflare 521 means the origin server refused the connection; common when origin is misconfigured or firewalled"
  - "Cloudflare official docs document 521 as 'Web server is down' — origin refused connection. dev-error-db.com covers 522/525 but not 521."
quick_fix: "Review the source evidence and rerun the smallest failing command."
related_errors:
  - "Cloudflare Error 522"
  - "Cloudflare Error 523"
  - "Cloudflare Error 525"
updated: "2026-05-24"
published_at: "2026-05-24T05:56:57.159Z"
updated_at: "2026-05-24T05:56:57.159Z"
---

## What this error means

`Cloudflare Error 521 Web server is down` means Cloudflare could not complete the request because DNS, origin connectivity, proxy mode, firewall rules, or TLS settings blocked the path to your origin server.

## Common causes

- Cloudflare 521 means the origin server refused the connection; common when origin is misconfigured or firewalled
- Cloudflare official docs document 521 as 'Web server is down' — origin refused connection. dev-error-db.com covers 522/525 but not 521.

## How to fix Cloudflare Error 521 Web server is down

1. Confirm the origin server is running and listening on the expected host and port.
2. Check Cloudflare DNS records point to the correct origin IP or hostname.
3. Review the source evidence and rerun the smallest failing command.
4. Test the origin directly, then retest through the Cloudflare-proxied hostname.

## Copy-paste commands

### Query DNS records for the hostname

```bash
dig example.com A

dig example.com CNAME
```

### Check response headers through Cloudflare

```bash
curl -I https://example.com
```

### Test the origin directly when you know its address

```bash
curl -I --resolve example.com:443:ORIGIN_IP https://example.com
```

### Inspect the TLS certificate chain

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null
```

## Quick fixes

1. Confirm the origin server is running and listening on the expected host and port.
2. Check Cloudflare DNS records point to the correct origin IP or hostname.
3. Review the source evidence and rerun the smallest failing command.
4. Test the origin directly, then retest through the Cloudflare-proxied hostname.

## Step-by-step troubleshooting

1. Confirm the browser, client, or log reports `Cloudflare Error 521 Web server is down` for the same hostname.
2. Use `dig` to verify the DNS answer Cloudflare and clients receive.
3. Use `curl -I` against the proxied hostname and, when possible, against the origin directly.
4. Check origin firewall rules, service health, and SSL mode in Cloudflare.
5. Retry after DNS TTL or certificate changes have propagated.

## Platform-specific fixes

### macOS

- Use `dscacheutil -flushcache; sudo killall -HUP mDNSResponder` after DNS changes, then retest the exact hostname.

### Linux

- Use `dig` or `resolvectl query` to compare resolver answers with the authoritative DNS target.

### Windows

- Use `ipconfig /flushdns` after DNS changes, then retest the proxied hostname.

## Real-world fixes

- If only proxied traffic fails, the origin may block Cloudflare IP ranges or listen on the wrong port.
- If the error started after a deploy, verify the origin service restarted and the firewall still allows inbound traffic.
- Review the source evidence and rerun the smallest failing command.

## How to prevent it

- Document origin IP, port, SSL mode, and required firewall ranges.
- Monitor origin uptime separately from edge availability.
- Keep a direct-origin health check outside the CDN path.

## Related errors

- Cloudflare Error 522
- Cloudflare Error 523
- Cloudflare Error 525

## FAQ

### What should I check first?

Start with the exact `Cloudflare Error 521 Web server is down` line and the command, request, or workflow step that produced it. In Cloudflare, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed Cloudflare step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Cloudflare Error 521 Web server is down`. The fix is working when that step completes without the same signature and produces the expected output.

## Sources checked

- https://developers.cloudflare.com/support/troubleshooting/cloudflare-errors/troubleshooting-cloudflare-5xx-errors/
