---
title: "Cloudflare create-cloudflare ERR_PNPM_IGNORED_BUILDS on pnpm 10 and 11"
description: "Fix Cloudflare scaffolding failure with pnpm 10+ due to ERR_PNPM_IGNORED_BUILDS Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "ERR_PNPM_IGNORED_BUILDS: Ignored builds during pnpm create cloudflare"
common_causes:
  - "Running pnpm create cloudflare on machines with pnpm 10+ fails with ERR_PNPM_IGNORED_BUILDS after install completes. Red error blocks project creation. Affects new Cloudflare Workers projects. Category: Cloudflare."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-16"
published_at: "2026-05-16T00:13:24.013Z"
updated_at: "2026-05-16T00:13:24.013Z"
---

## What this error means

`ERR_PNPM_IGNORED_BUILDS: Ignored builds during pnpm create cloudflare` is a Cloudflare failure pattern reported for developers trying to fix cloudflare scaffolding failure with pnpm 10+ due to err_pnpm_ignored_builds. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Running pnpm create cloudflare on machines with pnpm 10+ fails with ERR_PNPM_IGNORED_BUILDS after install completes. Red error blocks project creation. Affects new Cloudflare Workers projects. Category: Cloudflare.

## Common causes

- Running pnpm create cloudflare on machines with pnpm 10+ fails with ERR_PNPM_IGNORED_BUILDS after install completes. Red error blocks project creation. Affects new Cloudflare Workers projects. Category: Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `ERR_PNPM_IGNORED_BUILDS: Ignored builds during pnpm create cloudflare`.
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

- https://github.com/cloudflare/workers-sdk/issues/13928

Evidence note: Running pnpm create cloudflare on machines with pnpm 10+ fails with ERR_PNPM_IGNORED_BUILDS after install completes. Red error blocks project creation. Affects new Cloudflare Workers projects. Category: Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `ERR_PNPM_IGNORED_BUILDS: Ignored builds during pnpm create cloudflare` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERR_PNPM_IGNORED_BUILDS: Ignored builds during pnpm create cloudflare`.
