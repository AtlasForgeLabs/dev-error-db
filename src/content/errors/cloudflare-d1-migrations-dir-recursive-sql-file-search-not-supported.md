---
title: "Cloudflare D1 migrations_dir Does Not Support Recursive SQL File Search"
description: "Fix Cloudflare D1 wrangler not finding migration SQL files in subdirectories Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "D1 migrations_dir recursive SQL file search not supported"
common_causes:
  - "Drizzle ORM v1+ stores migrations in individual subdirectories, but wrangler only reads flat migration directories — breaks modern ORM migration workflows"
  - "wrangler D1 migrations only reads flat directories, not recursive. Drizzle ORM v1 uses per-migration subdirectories. Blocks Cloudflare D1 adoption for projects using modern ORMs."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "D1 migration not found"
  - "wrangler D1 SQL file missing"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`D1 migrations_dir recursive SQL file search not supported` is a Cloudflare failure pattern reported for developers trying to fix cloudflare d1 wrangler not finding migration sql files in subdirectories. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

wrangler D1 migrations only reads flat directories, not recursive. Drizzle ORM v1 uses per-migration subdirectories. Blocks Cloudflare D1 adoption for projects using modern ORMs.

## Common causes

- Drizzle ORM v1+ stores migrations in individual subdirectories, but wrangler only reads flat migration directories — breaks modern ORM migration workflows
- wrangler D1 migrations only reads flat directories, not recursive. Drizzle ORM v1 uses per-migration subdirectories. Blocks Cloudflare D1 adoption for projects using modern ORMs.

## Quick fixes

1. Confirm the exact error signature matches `D1 migrations_dir recursive SQL file search not supported`.
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

- https://github.com/cloudflare/workers-sdk/issues/13257

Evidence note: wrangler D1 migrations only reads flat directories, not recursive. Drizzle ORM v1 uses per-migration subdirectories. Blocks Cloudflare D1 adoption for projects using modern ORMs.

## Related errors

- D1 migration not found
- wrangler D1 SQL file missing

## FAQ

### What should I check first?

Start with the exact `D1 migrations_dir recursive SQL file search not supported` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `D1 migrations_dir recursive SQL file search not supported`.
