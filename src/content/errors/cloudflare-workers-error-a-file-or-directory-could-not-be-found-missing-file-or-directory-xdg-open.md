---
title: "Wrangler deploy crashes with 'Missing file or directory: xdg-open' in headless Linux servers"
description: "Fix Cloudflare Wrangler deployment crash on headless Linux when browser-based OAuth login fails due to missing xdg-open binary Includes evidence for Cloudflare Workers troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Workers"
error_signature: "[ERROR] A file or directory could not be found. Missing file or directory: xdg-open"
common_causes:
  - "GitHub Issue #14023 in cloudflare/workers-sdk (opened May 23, 2026). Wrangler tries to launch system browser for OAuth login; fails in Docker/headless environments without xdg-open. Affects paying teams deploying Worker scripts via CI. Not in covered-errors.md."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloudflare"
updated: "2026-05-23"
published_at: "2026-05-23T10:39:50.317Z"
updated_at: "2026-05-23T10:39:50.317Z"
---

## What this error means

`[ERROR] A file or directory could not be found. Missing file or directory: xdg-open` is a Cloudflare Workers failure pattern reported for developers trying to fix cloudflare wrangler deployment crash on headless linux when browser-based oauth login fails due to missing xdg-open binary. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #14023 in cloudflare/workers-sdk (opened May 23, 2026). Wrangler tries to launch system browser for OAuth login; fails in Docker/headless environments without xdg-open. Affects paying teams deploying Worker scripts via CI. Not in covered-errors.md.

## Common causes

- GitHub Issue #14023 in cloudflare/workers-sdk (opened May 23, 2026). Wrangler tries to launch system browser for OAuth login; fails in Docker/headless environments without xdg-open. Affects paying teams deploying Worker scripts via CI. Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `[ERROR] A file or directory could not be found. Missing file or directory: xdg-open`.
2. Check the Cloudflare Workers account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/cloudflare/workers-sdk/issues/14023

Evidence note: GitHub Issue #14023 in cloudflare/workers-sdk (opened May 23, 2026). Wrangler tries to launch system browser for OAuth login; fails in Docker/headless environments without xdg-open. Affects paying teams deploying Worker scripts via CI. Not in covered-errors.md.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `[ERROR] A file or directory could not be found. Missing file or directory: xdg-open` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Workers workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[ERROR] A file or directory could not be found. Missing file or directory: xdg-open`.
