---
title: "Node.js cannot find module"
description: "Fix Node.js cannot find module errors caused by missing installs, wrong paths, or package export issues."
category: "Node.js"
technology: "Node.js"
error_signature: "Error: Cannot find module"
common_causes:
  - "Dependencies were not installed"
  - "Import path is misspelled"
  - "File extension or case does not match"
  - "Package exports do not expose the requested path"
quick_fix: "Install dependencies, verify the import path, and check that the target file or package export exists."
related_errors:
  - "ERR_MODULE_NOT_FOUND"
  - "npm ERR! enoent package.json"
  - "Cannot use import statement outside a module"
updated: "2026-05-10"
---

## What this error means

`Error: Cannot find module` means npm or Node.js cannot resolve the project files, package metadata, dependency graph, or module path required by the command. Check the project root, lockfile, and Node version first.

## Common causes

- Dependencies were not installed
- Import path is misspelled
- File extension or case does not match
- Package exports do not expose the requested path

## Copy-paste commands

### Check runtime versions

```bash
node --version
npm --version
```

### Install dependencies

```bash
npm install
```

### Clean CI-style install

```bash
npm ci
```

### Clear npm cache

```bash
npm cache clean --force
```

### Reset local install state

```bash
rm -rf node_modules package-lock.json
npm install
```

## Quick fixes

1. Run the command from the folder containing `package.json`.
2. Install dependencies, verify the import path, and check that the target file or package export exists.
3. Check `node --version` and `npm --version`.
4. Use `npm ci` for a clean lockfile-based install when a lockfile exists.

## Step-by-step troubleshooting

1. Find the first `Error: Cannot find module` occurrence in the npm output; later stack lines are often symptoms.
2. Confirm the command is running in the intended package directory.
3. Compare `package.json` and `package-lock.json` after dependency changes.
4. Remove stale `node_modules` only after checking whether the lockfile is committed.
5. Rerun the failing command with the same Node version used in CI or production.

## Platform-specific fixes

### CI/CD

- Prefer `npm ci` in CI so the build fails when `package.json` and `package-lock.json` drift apart.

## Real-world fixes

- If the error names a peer dependency, update the plugin and framework versions together.
- If the error names a missing file, check filename casing; CI often runs on a case-sensitive filesystem.
- Install dependencies, verify the import path, and check that the target file or package export exists.

## How to prevent it

- Commit lockfile changes with dependency changes.
- Pin the project Node version in `.nvmrc`, `.node-version`, or CI configuration.
- Use CI to catch dependency drift before deploy.

## Related errors

- ERR_MODULE_NOT_FOUND
- npm ERR! enoent package.json
- Cannot use import statement outside a module

## FAQ

### What should I check first?

Start with the exact `Error: Cannot find module` line and the command, request, or workflow step that produced it. In npm or Node.js, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed npm or Node.js step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Error: Cannot find module`. The fix is working when that step completes without the same signature and produces the expected output.
