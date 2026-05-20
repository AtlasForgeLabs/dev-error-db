---
title: "actions/checkout Fails: 'repository not found' AND 'Could not read Username' — GITHUB_TOKEN Missing contents Scope"
description: "Developer's GitHub Actions workflow using actions/checkout fails with credential prompt disabled error after restricting GITHUB_TOKEN permissions to non-default scopes, causing private/internal repo checkout to fail Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "could not read Username for 'https://github.com': terminal prompts disabled"
common_causes:
  - "Fetched via normal_fetch from mickeygousset.com — detailed analysis of two distinct errors when permissions scope excludes contents: read. Root cause: specifying any permissions key overrides defaults, leaving unspecified scopes at none. Public repos exempt; private/internal repos require explicit contents: read. Also affects GitHub Enterprise Cloud & Managed Users. Duplicate check against covered-errors.md: no exact match — existing entry covers generic 'permission denied publickey', this is a specific GITHUB_TOKEN scope defaulting-to-none issue unique to workflows with custom permissions blocks."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-20"
published_at: "2026-05-20T11:38:29.335Z"
updated_at: "2026-05-20T11:38:29.335Z"
---

## What this error means

`could not read Username for 'https://github.com': terminal prompts disabled` is a GitHub Actions failure pattern reported for developers trying to developer's github actions workflow using actions/checkout fails with credential prompt disabled error after restricting github_token permissions to non-default scopes, causing private/internal repo checkout to fail. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Fetched via normal_fetch from mickeygousset.com — detailed analysis of two distinct errors when permissions scope excludes contents: read. Root cause: specifying any permissions key overrides defaults, leaving unspecified scopes at none. Public repos exempt; private/internal repos require explicit contents: read. Also affects GitHub Enterprise Cloud & Managed Users. Duplicate check against covered-errors.md: no exact match — existing entry covers generic 'permission denied publickey', this is a specific GITHUB_TOKEN scope defaulting-to-none issue unique to workflows with custom permissions blocks.

## Common causes

- Fetched via normal_fetch from mickeygousset.com — detailed analysis of two distinct errors when permissions scope excludes contents: read. Root cause: specifying any permissions key overrides defaults, leaving unspecified scopes at none. Public repos exempt; private/internal repos require explicit contents: read. Also affects GitHub Enterprise Cloud & Managed Users. Duplicate check against covered-errors.md: no exact match — existing entry covers generic 'permission denied publickey', this is a specific GITHUB_TOKEN scope defaulting-to-none issue unique to workflows with custom permissions blocks.

## Quick fixes

1. Confirm the exact error signature matches `could not read Username for 'https://github.com': terminal prompts disabled`.
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

- https://mickeygousset.com/posts/github-actions-checkout-fails-with-two-possible-error-messages/

Evidence note: Fetched via normal_fetch from mickeygousset.com — detailed analysis of two distinct errors when permissions scope excludes contents: read. Root cause: specifying any permissions key overrides defaults, leaving unspecified scopes at none. Public repos exempt; private/internal repos require explicit contents: read. Also affects GitHub Enterprise Cloud & Managed Users. Duplicate check against covered-errors.md: no exact match — existing entry covers generic 'permission denied publickey', this is a specific GITHUB_TOKEN scope defaulting-to-none issue unique to workflows with custom permissions blocks.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `could not read Username for 'https://github.com': terminal prompts disabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `could not read Username for 'https://github.com': terminal prompts disabled`.
