---
title: "Fix Cloudflare create-cloudflare ERR_PNPM_IGNORED_BUILDS on pnpm 10/11 — Scaffolding Fails"
description: "fix Cloudflare create-cloudflare ERR_PNPM_IGNORED_BUILDS pnpm 10 11 ignored build scripts Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "ERR_PNPM_IGNORED_BUILDS"
common_causes:
  - "Running 'pnpm create cloudflare@latest' fails with ERR_PNPM_IGNORED_BUILDS on pnpm 10+. The c3 scaffolder writes invalid YAML boolean placeholders for allowBuilds config, causing pnpm to reject build scripts for esbuild, sharp, and workerd."
  - "Reproducible on any machine with pnpm ≥ 10. c3 writes allowBuilds with string placeholders ('set this to true or false') instead of valid YAML booleans. pnpm rejects builds, c3 treats non-zero exit as fatal. First-time user experience broken."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare wrangler install failed"
  - "pnpm approve-builds workerd esbuild sharp"
  - "Cloudflare Workers project setup error"
updated: "2026-05-15"
published_at: "2026-05-15T13:13:22.740Z"
updated_at: "2026-05-15T13:13:22.740Z"
---

## What this error means

`ERR_PNPM_IGNORED_BUILDS` is a Cloudflare failure pattern reported for developers trying to fix cloudflare create-cloudflare err_pnpm_ignored_builds pnpm 10 11 ignored build scripts. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reproducible on any machine with pnpm ≥ 10. c3 writes allowBuilds with string placeholders ('set this to true or false') instead of valid YAML booleans. pnpm rejects builds, c3 treats non-zero exit as fatal. First-time user experience broken.

## Common causes

- Running 'pnpm create cloudflare@latest' fails with ERR_PNPM_IGNORED_BUILDS on pnpm 10+. The c3 scaffolder writes invalid YAML boolean placeholders for allowBuilds config, causing pnpm to reject build scripts for esbuild, sharp, and workerd.
- Reproducible on any machine with pnpm ≥ 10. c3 writes allowBuilds with string placeholders ('set this to true or false') instead of valid YAML booleans. pnpm rejects builds, c3 treats non-zero exit as fatal. First-time user experience broken.

## Quick fixes

1. Confirm the exact error signature matches `ERR_PNPM_IGNORED_BUILDS`.
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

Evidence note: Reproducible on any machine with pnpm ≥ 10. c3 writes allowBuilds with string placeholders ('set this to true or false') instead of valid YAML booleans. pnpm rejects builds, c3 treats non-zero exit as fatal. First-time user experience broken.

## Related errors

- Cloudflare wrangler install failed
- pnpm approve-builds workerd esbuild sharp
- Cloudflare Workers project setup error

## FAQ

### What should I check first?

Start with the exact `ERR_PNPM_IGNORED_BUILDS` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERR_PNPM_IGNORED_BUILDS`.
