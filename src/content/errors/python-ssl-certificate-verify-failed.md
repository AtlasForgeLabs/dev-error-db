---
title: "Python SSL: certificate verify failed"
slug: "python-ssl-certificate-verify-failed"
description: "Fix Python SSL certificate verification failures in pip, requests, urllib, and API clients."
category: "Networking"
technology: "Python"
error_signature: "SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed"
common_causes:
  - "Outdated certificate authority bundle"
  - "Corporate proxy replacing TLS certificates"
  - "System clock is incorrect"
  - "Python installation cannot find trusted root certificates"
quick_fix: "Update certifi and your system certificates, then retry the Python command."
updated: "2026-05-10"
---

## What this error means

Python raised `CERTIFICATE_VERIFY_FAILED` because it could not build a trusted TLS certificate chain for the server it contacted.

## Common causes

- The local CA bundle is outdated.
- A proxy or antivirus tool intercepts HTTPS traffic with a custom certificate.
- The server certificate is expired, incomplete, or issued for a different hostname.
- Your machine clock is wrong, making a valid certificate appear expired or not yet valid.

## Quick fixes

1. Upgrade Python certificate packages:

   ```bash
   python -m pip install --upgrade pip certifi
   ```

2. Check your system date and time.
3. If you are on a corporate network, install the organization root certificate through the approved system process.
4. Retry the command.

## Step-by-step troubleshooting

1. Identify whether the failure happens in `pip`, `requests`, `urllib`, or a specific SDK.
2. Visit the target URL in a browser and inspect the certificate chain.
3. Run the command from a different network to check whether a proxy is involved.
4. Update operating system certificate bundles.
5. Configure the client to use the correct trusted CA bundle instead of disabling verification.

## Related errors

- `pip is configured with locations that require TLS/SSL`
- `requests.exceptions.SSLError`
- `certificate has expired`

## FAQ

### Should I set verify=False?

Only as a temporary local diagnostic. Disabling TLS verification hides real security problems and should not be committed.

### Why does the browser work but Python fails?

Browsers and Python may use different certificate stores, especially on custom Python installations.

### Can this be caused by the server?

Yes. The server may be missing an intermediate certificate or serving a certificate for the wrong hostname.
