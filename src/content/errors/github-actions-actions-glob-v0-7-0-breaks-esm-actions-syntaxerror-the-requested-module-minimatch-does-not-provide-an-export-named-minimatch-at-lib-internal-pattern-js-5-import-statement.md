---
title: "@actions/glob v0.7.0 breaks ESM actions with SyntaxError from minimatch v10 migration"
description: "Fix ESM action crash caused by @actions/glob v0.7.0 bumping minimatch to v10 without updating named import compatibility Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "@actions/glob v0.7.0 breaks ESM actions: SyntaxError — The requested module minimatch does not provide an export named Minimatch at lib/internal-pattern.js:5 import statement"
common_causes:
  - "GitHub issue #2408 on actions/toolkit, created 2026-05-15. Clear root cause: PR #2355 bumped minimatch v3→v10 but internal-pattern.js still uses named import { Minimatch }. minimmate v10 doesn't export Minimatch as named export, crashing ESM contexts. Impacts any ESM-based GitHub Action using @actions/glob. Not in covered-errors.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-26"
published_at: "2026-05-26T08:43:16.345Z"
updated_at: "2026-05-26T08:43:16.345Z"
---

## What this error means

`@actions/glob v0.7.0 breaks ESM actions: SyntaxError — The requested module minimatch does not provide an export named Minimatch at lib/internal-pattern.js:5 import statement` is a GitHub Actions failure pattern reported for developers trying to fix esm action crash caused by @actions/glob v0.7.0 bumping minimatch to v10 without updating named import compatibility. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #2408 on actions/toolkit, created 2026-05-15. Clear root cause: PR #2355 bumped minimatch v3→v10 but internal-pattern.js still uses named import { Minimatch }. minimmate v10 doesn't export Minimatch as named export, crashing ESM contexts. Impacts any ESM-based GitHub Action using @actions/glob. Not in covered-errors.md.

## Common causes

- GitHub issue #2408 on actions/toolkit, created 2026-05-15. Clear root cause: PR #2355 bumped minimatch v3→v10 but internal-pattern.js still uses named import { Minimatch }. minimmate v10 doesn't export Minimatch as named export, crashing ESM contexts. Impacts any ESM-based GitHub Action using @actions/glob. Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `@actions/glob v0.7.0 breaks ESM actions: SyntaxError — The requested module minimatch does not provide an export named Minimatch at lib/internal-pattern.js:5 import statement`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/actions/toolkit/issues/2408

Evidence note: GitHub issue #2408 on actions/toolkit, created 2026-05-15. Clear root cause: PR #2355 bumped minimatch v3→v10 but internal-pattern.js still uses named import { Minimatch }. minimmate v10 doesn't export Minimatch as named export, crashing ESM contexts. Impacts any ESM-based GitHub Action using @actions/glob. Not in covered-errors.md.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `@actions/glob v0.7.0 breaks ESM actions: SyntaxError — The requested module minimatch does not provide an export named Minimatch at lib/internal-pattern.js:5 import statement` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `@actions/glob v0.7.0 breaks ESM actions: SyntaxError — The requested module minimatch does not provide an export named Minimatch at lib/internal-pattern.js:5 import statement`.
