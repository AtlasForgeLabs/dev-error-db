---
title: "Anthropic beta.skills.create undocumented file path requirement fails with confusing multi-step 400 errors"
description: "Fix confusing 400 errors when uploading skills to Anthropic API - first error is wrong, second error is still misleading Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "SKILL.md file must be exactly in the top-level folder."
common_causes:
  - "GitHub issue #1575 shows developer hitting two sequential 400 errors with cryptic messages before finally discovering the hidden constraint (directory name must match name frontmatter). No docs or README mention this. Affects paid API users building Claude skills. Tier bonus +1 applied."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-23"
published_at: "2026-05-23T03:39:49.550Z"
updated_at: "2026-05-23T03:39:49.550Z"
---

## What this error means

`SKILL.md file must be exactly in the top-level folder.` is a Anthropic API failure pattern reported for developers trying to fix confusing 400 errors when uploading skills to anthropic api - first error is wrong, second error is still misleading. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1575 shows developer hitting two sequential 400 errors with cryptic messages before finally discovering the hidden constraint (directory name must match name frontmatter). No docs or README mention this. Affects paid API users building Claude skills. Tier bonus +1 applied.

## Common causes

- GitHub issue #1575 shows developer hitting two sequential 400 errors with cryptic messages before finally discovering the hidden constraint (directory name must match name frontmatter). No docs or README mention this. Affects paid API users building Claude skills. Tier bonus +1 applied.

## Quick fixes

1. Confirm the exact error signature matches `SKILL.md file must be exactly in the top-level folder.`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1575

Evidence note: GitHub issue #1575 shows developer hitting two sequential 400 errors with cryptic messages before finally discovering the hidden constraint (directory name must match name frontmatter). No docs or README mention this. Affects paid API users building Claude skills. Tier bonus +1 applied.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `SKILL.md file must be exactly in the top-level folder.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SKILL.md file must be exactly in the top-level folder.`.
