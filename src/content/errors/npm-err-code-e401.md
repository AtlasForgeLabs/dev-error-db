---
title: "npm ERR! code E401"
slug: "npm-err-code-e401"
description: "Fix npm ERR! code E401 authentication failures when installing or publishing packages."
category: "Package managers"
technology: "npm"
error_signature: "npm ERR! code E401"
common_causes:
  - "Expired npm authentication token"
  - "Missing or incorrect registry credentials"
  - "Package scope points to the wrong registry"
  - "Two-factor authentication is required for publishing"
quick_fix: "Run npm login for the correct registry, then retry the install or publish command."
updated: "2026-05-10"
---

## What this error means

`npm ERR! code E401` means npm reached a registry that requires authentication, but the current credentials were missing, expired, or rejected.

## Common causes

- Your npm token expired or was revoked.
- The project uses a private package scope and the matching registry is not configured.
- `.npmrc` contains an old token, wrong registry URL, or malformed auth line.
- Publishing requires two-factor authentication and the command did not include an OTP.

## Quick fixes

1. Check which registry npm is using:

   ```bash
   npm config get registry
   ```

2. Log in again:

   ```bash
   npm login
   ```

3. If the package uses a scope, verify the scoped registry:

   ```bash
   npm config get @your-scope:registry
   ```

4. Retry the original command.

## Step-by-step troubleshooting

1. Run `npm whoami` to confirm whether npm sees a valid logged-in user.
2. Inspect project and user `.npmrc` files for stale registry or token entries.
3. Confirm that private package scopes point to the correct registry host.
4. For publishing, add the OTP when your npm account requires two-factor authentication.
5. If CI fails, rotate the npm token and update the CI secret value.

## Related errors

- `npm ERR! 403 Forbidden`
- `npm ERR! 404 Not Found`
- `npm ERR! code EINVALIDNPMTOKEN`

## FAQ

### Does E401 always mean my password is wrong?

No. It usually means npm did not send an accepted token for the registry it contacted.

### Should I commit my npm token?

No. Keep tokens in your user `.npmrc` or CI secrets, never in source control.

### Can this happen for public packages?

Yes, if your npm config points public installs at a private registry that requires authentication.
