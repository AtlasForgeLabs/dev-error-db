---
title: "Node.js ERR_MODULE_NOT_FOUND"
description: "Fix Node.js ERR_MODULE_NOT_FOUND errors in ES module projects."
category: "Runtime"
technology: "Node.js"
error_signature: "Error [ERR_MODULE_NOT_FOUND]"
common_causes:
  - "Relative import is missing a file extension"
  - "Package is not installed"
  - "Path points to a CommonJS-only entry incorrectly"
  - "Case-sensitive filesystem reveals a path mismatch"
quick_fix: "Check the exact import specifier, include required file extensions for relative ESM imports, and reinstall dependencies."
updated: "2026-05-10"
---

## What this error means

`Error [ERR_MODULE_NOT_FOUND]` means npm or Node.js could not install, resolve, or load the package metadata it needs for the current project. The practical issue is usually a dependency conflict, missing `package.json`, stale lockfile, module path, or runtime version problem. This page helps you debug ES module import resolution errors in Node.js.

## Common causes

- Relative import is missing a file extension
- Package is not installed
- Path points to a CommonJS-only entry incorrectly
- Case-sensitive filesystem reveals a path mismatch

## Quick fixes

1. Run the command from the directory that contains `package.json`.
2. Check the exact import specifier, include required file extensions for relative ESM imports, and reinstall dependencies.
3. If install state is suspect, remove `node_modules` and reinstall from the committed lockfile.
4. Use the same Node and npm versions locally and in CI.

## Step-by-step troubleshooting

1. Start with the exact signature: `Error [ERR_MODULE_NOT_FOUND]`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Confirm `package.json` and `package-lock.json` are both present when using `npm ci`.
3. Check the package named in the npm error and compare its required peer dependency range with the installed version.
4. Regenerate the lockfile only after deciding the correct dependency versions.
5. Make the targeted change: Check the exact import specifier, include required file extensions for relative ESM imports, and reinstall dependencies.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Node.js cannot find module
- Cannot use import statement outside a module
- npm ERR! code ERESOLVE

## FAQ

### What should I check first?

Start with the exact `Error [ERR_MODULE_NOT_FOUND]` message and the `package.json`, `package-lock.json`, and npm version. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Node.js step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Error [ERR_MODULE_NOT_FOUND]`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
