---
title: "Cloudflare Wrangler dev EMFILE Too Many Open Files with Static Assets"
description: "Fix wrangler dev crashing with EMFILE too many open files when Workers Static Assets directory has many subdirectories Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "EMFILE: too many open files, watch at FSWatcher._handle.onchange"
common_causes:
  - "Cloudflare Wrangler dev crashes with EMFILE error when the Workers Static Assets directory contains more than 4,095 subdirectories. The crash happens at watcher setup before the local server is ready. The threshold is exact at 4,096 directories (power-of-two suggests hardcoded watcher cap). .assetsignore does not help because it filters deploy/upload but not the dev watcher. This is a significant limitation for developers with large static asset structures."
  - "Open issue. wrangler 4.86.0, Node 20.19.2, macOS. Cutoff exact at 4,096 directories regardless of file count. .assetsignore does not prevent the crash. System rlimit is 1,048,576, so this is a Wrangler/libuv watcher cap, not an OS limit."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "wrangler pages dev file watch limit"
  - "Cloudflare Workers hot reload not working"
  - "wrangler dev ENOSPC no space left"
updated: "2026-05-11"
---

## What this error means

`EMFILE: too many open files, watch at FSWatcher._handle.onchange` is a Cloudflare failure pattern reported for developers trying to fix wrangler dev crashing with emfile too many open files when workers static assets directory has many subdirectories. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue. wrangler 4.86.0, Node 20.19.2, macOS. Cutoff exact at 4,096 directories regardless of file count. .assetsignore does not prevent the crash. System rlimit is 1,048,576, so this is a Wrangler/libuv watcher cap, not an OS limit.

## Common causes

- Cloudflare Wrangler dev crashes with EMFILE error when the Workers Static Assets directory contains more than 4,095 subdirectories. The crash happens at watcher setup before the local server is ready. The threshold is exact at 4,096 directories (power-of-two suggests hardcoded watcher cap). .assetsignore does not help because it filters deploy/upload but not the dev watcher. This is a significant limitation for developers with large static asset structures.
- Open issue. wrangler 4.86.0, Node 20.19.2, macOS. Cutoff exact at 4,096 directories regardless of file count. .assetsignore does not prevent the crash. System rlimit is 1,048,576, so this is a Wrangler/libuv watcher cap, not an OS limit.

## Quick fixes

1. Confirm the exact error signature matches `EMFILE: too many open files, watch at FSWatcher._handle.onchange`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

- https://github.com/cloudflare/workers-sdk/issues/13890

Evidence note: Open issue. wrangler 4.86.0, Node 20.19.2, macOS. Cutoff exact at 4,096 directories regardless of file count. .assetsignore does not prevent the crash. System rlimit is 1,048,576, so this is a Wrangler/libuv watcher cap, not an OS limit.

## Related errors

- wrangler pages dev file watch limit
- Cloudflare Workers hot reload not working
- wrangler dev ENOSPC no space left

## FAQ

### What should I check first?

Start with the exact `EMFILE: too many open files, watch at FSWatcher._handle.onchange` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `EMFILE: too many open files, watch at FSWatcher._handle.onchange`.
