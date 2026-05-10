---
title: "GitHub Actions npm ci lockfile error"
description: "Fix GitHub Actions npm ci failures caused by missing or out-of-sync package lock files."
category: "CI/CD"
technology: "GitHub Actions"
error_signature: "npm ci can only install packages when your package.json and package-lock.json are in sync"
common_causes:
  - "package.json changed without updating package-lock.json"
  - "Lockfile was not committed"
  - "Different npm versions generated incompatible lockfile metadata"
  - "Dependency changes were made on another branch"
quick_fix: "Run npm install locally with the intended Node and npm versions, commit the updated lockfile, and rerun the workflow."
updated: "2026-05-10"
---

## What this error means

`npm ci can only install packages when your package.json and package-lock.json are in sync` means a GitHub Actions runner failed in a clean CI environment, not necessarily on your local machine. The usual gap is workflow configuration: Node version, lockfile state, secrets, SSH setup, or project paths. This page helps you resolve npm ci lockfile errors in GitHub Actions builds.

## Common causes

- package.json changed without updating package-lock.json
- Lockfile was not committed
- Different npm versions generated incompatible lockfile metadata
- Dependency changes were made on another branch

## Quick fixes

1. Open the failed workflow step and copy the first real error above the stack trace.
2. Run npm install locally with the intended Node and npm versions, commit the updated lockfile, and rerun the workflow.
3. Check `.github/workflows/*` for Node version, working-directory, secrets, and deploy permissions.
4. Rerun the job after committing lockfile or workflow changes.

## Step-by-step troubleshooting

1. Start with the exact signature: `npm ci can only install packages when your package.json and package-lock.json are in sync`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Confirm `package.json` and `package-lock.json` are both present when using `npm ci`.
3. Check the package named in the npm error and compare its required peer dependency range with the installed version.
4. Regenerate the lockfile only after deciding the correct dependency versions.
5. Check the runner log for Node version, working directory, and whether secrets are available to the event type.
6. Verify `package-lock.json` is committed and matches `package.json`.
7. Check that `actions/setup-node` uses the same major Node version you use to regenerate the lockfile.

## Related errors

- npm ERR! code ERESOLVE
- npm ERR! code ENOLOCK
- GitHub Actions Node version mismatch

## FAQ

### What should I check first?

Start with the exact `npm ci can only install packages when your package.json and package-lock.json are in sync` message and the `package.json`, `package-lock.json`, and npm version. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `npm ci can only install packages when your package.json and package-lock.json are in sync`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
