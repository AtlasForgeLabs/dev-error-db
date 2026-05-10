---
title: "SSL self signed certificate in certificate chain"
description: "Fix self signed certificate in certificate chain errors in Node.js, npm, Git, and corporate networks."
category: "Networking"
technology: "SSL/TLS"
error_signature: "self signed certificate in certificate chain"
common_causes:
  - "Corporate proxy intercepts HTTPS traffic"
  - "Private registry uses an internal CA"
  - "Local trust store does not include the signing root"
  - "Certificate chain is misconfigured"
quick_fix: "Install the trusted root certificate and configure the affected tool to use the correct CA bundle."
updated: "2026-05-10"
---

## What this error means

`self signed certificate in certificate chain` means SSL/TLS is protecting a usage limit: request rate, token volume, account quota, or project billing. The request may be valid, but the provider will not accept more work until the limit resets, usage is reduced, or account limits change. This page helps you configure trusted corporate or private CA certificates without disabling TLS verification.

## Common causes

- Corporate proxy intercepts HTTPS traffic
- Private registry uses an internal CA
- Local trust store does not include the signing root
- Certificate chain is misconfigured

## Quick fixes

1. Pause automatic retries so they do not keep increasing traffic.
2. Install the trusted root certificate and configure the affected tool to use the correct CA bundle.
3. Lower concurrency, prompt size, batch size, or requested output length before retrying.
4. Check usage, billing, or project limits in the provider dashboard.

## Step-by-step troubleshooting

1. Start with the exact signature: `self signed certificate in certificate chain`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Check whether the error is request rate, token volume, billing quota, or model access rather than treating all 429-style errors the same.
3. Review retry code for immediate loops; add backoff and a maximum retry count if retries are allowed.
4. Reduce parallel workers or batch size and confirm the error rate drops.
5. Use a certificate checker or `openssl s_client` to inspect the served certificate and intermediates.
6. Check the local system clock, because an incorrect date can make valid certificates fail.
7. If a corporate proxy is involved, install the approved root CA rather than bypassing TLS checks.

## Related errors

- unable to get local issuer certificate
- Python SSL certificate verify failed
- npm ERR! code E401

## FAQ

### What should I check first?

Start with the exact `self signed certificate in certificate chain` message and the certificate chain, expiry, hostname, and local trust store. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed SSL/TLS step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `self signed certificate in certificate chain`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
