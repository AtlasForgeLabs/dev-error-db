---
title: "Node.js cannot find module"
description: "Fix Node.js cannot find module errors caused by missing installs, wrong paths, or package export issues."
category: "Runtime"
technology: "Node.js"
error_signature: "Error: Cannot find module"
common_causes:
  - "Dependencies were not installed"
  - "Import path is misspelled"
  - "File extension or case does not match"
  - "Package exports do not expose the requested path"
quick_fix: "Install dependencies, verify the import path, and check that the target file or package export exists."
updated: "2026-05-10"
---

## What this error means

`Error: Cannot find module` means npm or Node.js could not install, resolve, or load the package metadata it needs for the current project. The practical issue is usually a dependency conflict, missing `package.json`, stale lockfile, module path, or runtime version problem. This page helps you resolve Node.js module resolution failures in scripts, apps, and tests.

## Common causes

- Dependencies were not installed
- Import path is misspelled
- File extension or case does not match
- Package exports do not expose the requested path

## Quick fixes

1. Run the command from the directory that contains `package.json`.
2. Install dependencies, verify the import path, and check that the target file or package export exists.
3. If install state is suspect, remove `node_modules` and reinstall from the committed lockfile.
4. Use the same Node and npm versions locally and in CI.

## Step-by-step troubleshooting

1. Start with the exact signature: `Error: Cannot find module`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Confirm `package.json` and `package-lock.json` are both present when using `npm ci`.
3. Check the package named in the npm error and compare its required peer dependency range with the installed version.
4. Regenerate the lockfile only after deciding the correct dependency versions.
5. Make the targeted change: Install dependencies, verify the import path, and check that the target file or package export exists.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- ERR_MODULE_NOT_FOUND
- npm ERR! enoent package.json
- Cannot use import statement outside a module

## FAQ

### What should I check first?

Start with the exact `Error: Cannot find module` message and the `package.json`, `package-lock.json`, and npm version. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Node.js step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Error: Cannot find module`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
