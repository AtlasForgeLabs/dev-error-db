---
title: "GitHub Actions Self-hosted Worker Hangs Holding Runner Slot After workflow instance not found"
description: "Fix GitHub Actions self-hosted runner stuck in busy state after workflow instance not found error Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Self-hosted Worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'"
common_causes:
  - "GitHub issue #4418 on actions/runner: self-hosted worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'. Runner becomes permanently busy, blocking CI/CD pipelines for paid GitHub teams using self-hosted runners."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-16"
published_at: "2026-05-16T06:13:24.754Z"
updated_at: "2026-05-16T06:13:24.754Z"
---

## What this error means

`Self-hosted Worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner stuck in busy state after workflow instance not found error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #4418 on actions/runner: self-hosted worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'. Runner becomes permanently busy, blocking CI/CD pipelines for paid GitHub teams using self-hosted runners.

## Common causes

- GitHub issue #4418 on actions/runner: self-hosted worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'. Runner becomes permanently busy, blocking CI/CD pipelines for paid GitHub teams using self-hosted runners.

## Quick fixes

1. Confirm the exact error signature matches `Self-hosted Worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'`.
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

- https://github.com/actions/runner/issues/4418

Evidence note: GitHub issue #4418 on actions/runner: self-hosted worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'. Runner becomes permanently busy, blocking CI/CD pipelines for paid GitHub teams using self-hosted runners.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Self-hosted Worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Self-hosted Worker hangs holding runner slot after CompleteJobAsync hits 'workflow instance not found'`.
