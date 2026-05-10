---
title: "Vercel module not found"
description: "Fix Vercel module not found errors caused by case-sensitive paths, missing dependencies, or wrong build roots."
category: "Deployment"
technology: "Vercel"
error_signature: "Module not found: Can't resolve"
common_causes:
  - "Import path case differs from the actual filename"
  - "Dependency is listed in the wrong package.json section"
  - "Build root points to the wrong directory"
  - "Generated files are not created before the build"
quick_fix: "Fix import paths exactly, commit missing files, and verify Vercel uses the intended project root."
updated: "2026-05-10"
---

## What this error means

`Module not found: Can't resolve` means npm or Node.js could not install, resolve, or load the package metadata it needs for the current project. The practical issue is usually a dependency conflict, missing `package.json`, stale lockfile, module path, or runtime version problem. This page helps you resolve module resolution failures during Vercel deployments.

## Common causes

- Import path case differs from the actual filename
- Dependency is listed in the wrong package.json section
- Build root points to the wrong directory
- Generated files are not created before the build

## Quick fixes

1. Run the command from the directory that contains `package.json`.
2. Fix import paths exactly, commit missing files, and verify Vercel uses the intended project root.
3. If install state is suspect, remove `node_modules` and reinstall from the committed lockfile.
4. Use the same Node and npm versions locally and in CI.

## Step-by-step troubleshooting

1. Start with the exact signature: `Module not found: Can't resolve`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Confirm `package.json` and `package-lock.json` are both present when using `npm ci`.
3. Check the package named in the npm error and compare its required peer dependency range with the installed version.
4. Regenerate the lockfile only after deciding the correct dependency versions.
5. Check Vercel build logs for the first module, command, or environment variable that fails.
6. Verify the project root and build command match the folder that contains `package.json`.
7. Check file-name casing because Vercel builds on a case-sensitive filesystem.

## Related errors

- Node.js cannot find module
- Vercel build command failed
- ERR_MODULE_NOT_FOUND

## FAQ

### What should I check first?

Start with the exact `Module not found: Can't resolve` message and the `package.json`, `package-lock.json`, and npm version. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Vercel step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Module not found: Can't resolve`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
