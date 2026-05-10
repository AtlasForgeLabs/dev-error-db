---
title: "SSL certificate has expired"
description: "Fix SSL certificate has expired errors by renewing certificates and checking intermediate certificate chains."
category: "Networking"
technology: "SSL/TLS"
error_signature: "certificate has expired"
common_causes:
  - "Server certificate expired"
  - "Intermediate certificate expired"
  - "Certificate automation failed"
  - "Client system clock is incorrect"
quick_fix: "Renew and deploy the certificate, then verify the full chain and server time."
updated: "2026-05-10"
---

## What this error means

`certificate has expired` means a TLS client could not verify the certificate chain or validity period for the server it contacted. The problem can be on the server certificate, an intermediate certificate, the local trust store, or an intercepting proxy. This page helps you resolve expired TLS certificate errors in browsers, APIs, and command-line clients.

## Common causes

- Server certificate expired
- Intermediate certificate expired
- Certificate automation failed
- Client system clock is incorrect

## Quick fixes

1. Inspect the certificate chain and expiry for the exact hostname.
2. Renew and deploy the certificate, then verify the full chain and server time.
3. Update the client trust store or CA bundle instead of disabling verification.
4. Retry from another network if a proxy or antivirus tool may intercept TLS.

## Step-by-step troubleshooting

1. Start with the exact signature: `certificate has expired`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Use a certificate checker or `openssl s_client` to inspect the served certificate and intermediates.
3. Check the local system clock, because an incorrect date can make valid certificates fail.
4. If a corporate proxy is involved, install the approved root CA rather than bypassing TLS checks.
5. Make the targeted change: Renew and deploy the certificate, then verify the full chain and server time.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Python SSL certificate verify failed
- unable to get local issuer certificate
- NET::ERR_CERT_DATE_INVALID

## FAQ

### What should I check first?

Start with the exact `certificate has expired` message and the certificate chain, expiry, hostname, and local trust store. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed SSL/TLS step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `certificate has expired`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
