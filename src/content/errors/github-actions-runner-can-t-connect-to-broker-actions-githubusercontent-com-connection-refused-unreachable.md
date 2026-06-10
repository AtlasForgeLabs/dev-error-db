---
title: "Runner can't connect to broker.actions.githubusercontent.com — self-hosted runner network connectivity failure"
description: "Fix GitHub Actions self-hosted runner failing to connect to the GitHub Actions broker service Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Runner can't connect to broker.actions.githubusercontent.com — connection refused / unreachable"
common_causes:
  - "Issue #4090 on actions/runner repo: Self-hosted runners cannot connect to broker.actions.githubusercontent.com, blocking all workflow runs. This is a recurring network connectivity issue affecting enterprise CI/CD pipelines. Multiple similar reports including #4235 about tokenghub.actions.githubusercontent.com being unreachable."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "GitHub Actions"
updated: "2026-06-10"
published_at: "2026-06-10T09:36:11.355Z"
updated_at: "2026-06-10T09:36:11.355Z"
---

## What this error means

`Runner can't connect to broker.actions.githubusercontent.com — connection refused / unreachable` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner failing to connect to the github actions broker service. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #4090 on actions/runner repo: Self-hosted runners cannot connect to broker.actions.githubusercontent.com, blocking all workflow runs. This is a recurring network connectivity issue affecting enterprise CI/CD pipelines. Multiple similar reports including #4235 about tokenghub.actions.githubusercontent.com being unreachable.

## Common causes

- Issue #4090 on actions/runner repo: Self-hosted runners cannot connect to broker.actions.githubusercontent.com, blocking all workflow runs. This is a recurring network connectivity issue affecting enterprise CI/CD pipelines. Multiple similar reports including #4235 about tokenghub.actions.githubusercontent.com being unreachable.

## Quick fixes

1. Confirm the exact error signature matches `Runner can't connect to broker.actions.githubusercontent.com — connection refused / unreachable`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://github.com/actions/runner/issues/4090
- https://github.com/actions/runner/issues/4235

Evidence note: Issue #4090 on actions/runner repo: Self-hosted runners cannot connect to broker.actions.githubusercontent.com, blocking all workflow runs. This is a recurring network connectivity issue affecting enterprise CI/CD pipelines. Multiple similar reports including #4235 about tokenghub.actions.githubusercontent.com being unreachable.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Runner can't connect to broker.actions.githubusercontent.com — connection refused / unreachable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Runner can't connect to broker.actions.githubusercontent.com — connection refused / unreachable`.
