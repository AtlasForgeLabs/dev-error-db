---
title: "GitHub Actions workflow_run trigger keeps firing with old cached commit SHA"
description: "Stop GitHub Actions from re-running with stale commit SHA in workflow_run triggers — need reliable way to ensure correct branch HEAD is checked out instead of cached/stale refs Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "GitHub Actions workflow_run trigger checks out wrong/broken commit SHA (stale cached head_sha) even after deleting workflow file"
common_causes:
  - "Stack Overflow Q79941021 (May 2026) — workflow_run fires with b0d819c (a main-branch commit merged into develop) instead of latest develop HEAD. User tried explicit ref settings, branch guards, and even deleted the workflow YAML but GitHub caches/runs stale version for hours. Directly impacts CI/CD reliability for paid team accounts deploying via automated pipelines."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-27"
published_at: "2026-05-27T12:43:19.992Z"
updated_at: "2026-05-27T12:43:19.992Z"
---

## What this error means

`GitHub Actions workflow_run trigger checks out wrong/broken commit SHA (stale cached head_sha) even after deleting workflow file` is a GitHub Actions failure pattern reported for developers trying to stop github actions from re-running with stale commit sha in workflow_run triggers — need reliable way to ensure correct branch head is checked out instead of cached/stale refs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79941021 (May 2026) — workflow_run fires with b0d819c (a main-branch commit merged into develop) instead of latest develop HEAD. User tried explicit ref settings, branch guards, and even deleted the workflow YAML but GitHub caches/runs stale version for hours. Directly impacts CI/CD reliability for paid team accounts deploying via automated pipelines.

## Common causes

- Stack Overflow Q79941021 (May 2026) — workflow_run fires with b0d819c (a main-branch commit merged into develop) instead of latest develop HEAD. User tried explicit ref settings, branch guards, and even deleted the workflow YAML but GitHub caches/runs stale version for hours. Directly impacts CI/CD reliability for paid team accounts deploying via automated pipelines.

## Quick fixes

1. Confirm the exact error signature matches `GitHub Actions workflow_run trigger checks out wrong/broken commit SHA (stale cached head_sha) even after deleting workflow file`.
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

- https://stackoverflow.com/questions/79941021/github-actions-workflow-run-trigger-keeps-firing-with-old-commit-sha-even-after

Evidence note: Stack Overflow Q79941021 (May 2026) — workflow_run fires with b0d819c (a main-branch commit merged into develop) instead of latest develop HEAD. User tried explicit ref settings, branch guards, and even deleted the workflow YAML but GitHub caches/runs stale version for hours. Directly impacts CI/CD reliability for paid team accounts deploying via automated pipelines.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `GitHub Actions workflow_run trigger checks out wrong/broken commit SHA (stale cached head_sha) even after deleting workflow file` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Actions workflow_run trigger checks out wrong/broken commit SHA (stale cached head_sha) even after deleting workflow file`.
