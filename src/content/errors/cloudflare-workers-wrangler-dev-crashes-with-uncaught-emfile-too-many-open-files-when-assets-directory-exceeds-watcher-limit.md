---
title: "Cloudflare Wrangler dev crashes with EMFILE too many open files on large asset directories"
description: "fix wrangler dev EMFILE too many open files error Includes evidence for Cloudflare Workers troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Workers"
error_signature: "wrangler dev crashes with uncaught EMFILE: too many open files when assets directory exceeds watcher limit"
common_causes:
  - "Projects with large static asset directories cause wrangler dev to crash with uncaught EMFILE rejection. File watcher hits OS limit. Common in image-heavy sites or monorepos."
  - "wrangler 4.86.0 on macOS with assets directory exceeding watcher limit. Looping uncaught EMFILE rejection. No graceful fallback or retry. Developer must manually increase ulimit or restructure project."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare wrangler deploy silently fails in CI"
  - "Cloudflare websocket connection fails persistently"
updated: "2026-05-15"
published_at: "2026-05-15T07:13:21.988Z"
updated_at: "2026-05-15T07:13:21.988Z"
---

## What this error means

`wrangler dev crashes with uncaught EMFILE: too many open files when assets directory exceeds watcher limit` is a Cloudflare Workers failure pattern reported for developers trying to fix wrangler dev emfile too many open files error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

wrangler 4.86.0 on macOS with assets directory exceeding watcher limit. Looping uncaught EMFILE rejection. No graceful fallback or retry. Developer must manually increase ulimit or restructure project.

## Common causes

- Projects with large static asset directories cause wrangler dev to crash with uncaught EMFILE rejection. File watcher hits OS limit. Common in image-heavy sites or monorepos.
- wrangler 4.86.0 on macOS with assets directory exceeding watcher limit. Looping uncaught EMFILE rejection. No graceful fallback or retry. Developer must manually increase ulimit or restructure project.

## Quick fixes

1. Confirm the exact error signature matches `wrangler dev crashes with uncaught EMFILE: too many open files when assets directory exceeds watcher limit`.
2. Check the Cloudflare Workers account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: wrangler 4.86.0 on macOS with assets directory exceeding watcher limit. Looping uncaught EMFILE rejection. No graceful fallback or retry. Developer must manually increase ulimit or restructure project.

## Related errors

- Cloudflare wrangler deploy silently fails in CI
- Cloudflare websocket connection fails persistently

## FAQ

### What should I check first?

Start with the exact `wrangler dev crashes with uncaught EMFILE: too many open files when assets directory exceeds watcher limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Workers workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler dev crashes with uncaught EMFILE: too many open files when assets directory exceeds watcher limit`.
