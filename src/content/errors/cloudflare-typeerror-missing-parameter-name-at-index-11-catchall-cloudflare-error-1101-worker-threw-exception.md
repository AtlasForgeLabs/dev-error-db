---
title: "Cloudflare Pages Functions catchall routes return 1101 due to path-to-regexp v6/v8 syntax mismatch"
description: "Fix Cloudflare Pages Functions returning 1101 error on all URLs when using [[name]].ts catchall route files (wrangler 4.77+) Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "TypeError: Missing parameter name at index 11: /:catchall* → Cloudflare Error 1101 Worker threw exception"
common_causes:
  - "GitHub issue #13643 on cloudflare/workers-sdk is a deterministic, reproducible bug: wrangler emits path-to-regexp v6 syntax (/\\:name*) in the routes manifest, but bundles v8 which rejects it. Affects ALL Pages projects using documented catchall filename convention. Clear error signature, specific workaround exists (rename to _middleware.ts), and cross-verified across two wrangler versions (4.77.0, 4.84.1). Very high commercial value — breaks live deployments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-22"
published_at: "2026-05-22T22:39:48.616Z"
updated_at: "2026-05-22T22:39:48.616Z"
---

## What this error means

`TypeError: Missing parameter name at index 11: /:catchall* → Cloudflare Error 1101 Worker threw exception` is a Cloudflare failure pattern reported for developers trying to fix cloudflare pages functions returning 1101 error on all urls when using [[name]].ts catchall route files (wrangler 4.77+). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #13643 on cloudflare/workers-sdk is a deterministic, reproducible bug: wrangler emits path-to-regexp v6 syntax (/\:name*) in the routes manifest, but bundles v8 which rejects it. Affects ALL Pages projects using documented catchall filename convention. Clear error signature, specific workaround exists (rename to _middleware.ts), and cross-verified across two wrangler versions (4.77.0, 4.84.1). Very high commercial value — breaks live deployments.

## Common causes

- GitHub issue #13643 on cloudflare/workers-sdk is a deterministic, reproducible bug: wrangler emits path-to-regexp v6 syntax (/\:name*) in the routes manifest, but bundles v8 which rejects it. Affects ALL Pages projects using documented catchall filename convention. Clear error signature, specific workaround exists (rename to _middleware.ts), and cross-verified across two wrangler versions (4.77.0, 4.84.1). Very high commercial value — breaks live deployments.

## Quick fixes

1. Confirm the exact error signature matches `TypeError: Missing parameter name at index 11: /:catchall* → Cloudflare Error 1101 Worker threw exception`.
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

- https://github.com/cloudflare/workers-sdk/issues/13643

Evidence note: GitHub issue #13643 on cloudflare/workers-sdk is a deterministic, reproducible bug: wrangler emits path-to-regexp v6 syntax (/\:name*) in the routes manifest, but bundles v8 which rejects it. Affects ALL Pages projects using documented catchall filename convention. Clear error signature, specific workaround exists (rename to _middleware.ts), and cross-verified across two wrangler versions (4.77.0, 4.84.1). Very high commercial value — breaks live deployments.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `TypeError: Missing parameter name at index 11: /:catchall* → Cloudflare Error 1101 Worker threw exception` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TypeError: Missing parameter name at index 11: /:catchall* → Cloudflare Error 1101 Worker threw exception`.
