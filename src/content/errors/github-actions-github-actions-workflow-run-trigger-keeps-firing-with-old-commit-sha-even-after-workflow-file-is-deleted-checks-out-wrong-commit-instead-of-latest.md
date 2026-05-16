---
title: "GitHub Actions workflow_run Trigger Uses Stale Commit SHA After Workflow Deletion"
description: "Fix GitHub Actions workflow_run using stale/wrong commit SHA after workflow file changes or deletion Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "GitHub Actions workflow_run trigger keeps firing with old commit SHA even after workflow file is deleted — checks out wrong commit instead of latest"
common_causes:
  - "Stack Overflow Q79941021: workflow_run trigger fires with old commit SHA (b0d819c) from main branch even after deleting the workflow file on develop. User tried multiple fixes. Distinct from existing Actions errors (npm ci lockfile, Node version, permission denied). Category: GitHub Actions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-16"
published_at: "2026-05-16T12:13:25.497Z"
updated_at: "2026-05-16T12:13:25.497Z"
---

## What this error means

`GitHub Actions workflow_run trigger keeps firing with old commit SHA even after workflow file is deleted — checks out wrong commit instead of latest` is a GitHub Actions failure pattern reported for developers trying to fix github actions workflow_run using stale/wrong commit sha after workflow file changes or deletion. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79941021: workflow_run trigger fires with old commit SHA (b0d819c) from main branch even after deleting the workflow file on develop. User tried multiple fixes. Distinct from existing Actions errors (npm ci lockfile, Node version, permission denied). Category: GitHub Actions.

## Common causes

- Stack Overflow Q79941021: workflow_run trigger fires with old commit SHA (b0d819c) from main branch even after deleting the workflow file on develop. User tried multiple fixes. Distinct from existing Actions errors (npm ci lockfile, Node version, permission denied). Category: GitHub Actions.

## Quick fixes

1. Confirm the exact error signature matches `GitHub Actions workflow_run trigger keeps firing with old commit SHA even after workflow file is deleted — checks out wrong commit instead of latest`.
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

- https://stackoverflow.com/q/79941021

Evidence note: Stack Overflow Q79941021: workflow_run trigger fires with old commit SHA (b0d819c) from main branch even after deleting the workflow file on develop. User tried multiple fixes. Distinct from existing Actions errors (npm ci lockfile, Node version, permission denied). Category: GitHub Actions.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `GitHub Actions workflow_run trigger keeps firing with old commit SHA even after workflow file is deleted — checks out wrong commit instead of latest` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Actions workflow_run trigger keeps firing with old commit SHA even after workflow file is deleted — checks out wrong commit instead of latest`.
