---
title: "Self-hosted GitHub Actions runner EACCES permission denied in container checkout"
description: "Fix self-hosted Linux runner permissions error when running GitHub Actions workflows inside containers — checkout step throws permission denied saving state files Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_*'"
common_causes:
  - "Issue #1014 on actions/checkout (open since 2022-11-17, active discussions until 2026-05-12, 29 comments). Occurs on self-hosted Ubuntu 20.04 runners running workflows inside containers with custom Docker images. The checkout action cannot write temporary files due to user mapping differences. Persistent issue affecting enterprise CI/CD pipelines."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-23"
published_at: "2026-05-23T08:39:50.052Z"
updated_at: "2026-05-23T08:39:50.052Z"
---

## What this error means

`Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_*'` is a GitHub Actions failure pattern reported for developers trying to fix self-hosted linux runner permissions error when running github actions workflows inside containers — checkout step throws permission denied saving state files. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #1014 on actions/checkout (open since 2022-11-17, active discussions until 2026-05-12, 29 comments). Occurs on self-hosted Ubuntu 20.04 runners running workflows inside containers with custom Docker images. The checkout action cannot write temporary files due to user mapping differences. Persistent issue affecting enterprise CI/CD pipelines.

## Common causes

- Issue #1014 on actions/checkout (open since 2022-11-17, active discussions until 2026-05-12, 29 comments). Occurs on self-hosted Ubuntu 20.04 runners running workflows inside containers with custom Docker images. The checkout action cannot write temporary files due to user mapping differences. Persistent issue affecting enterprise CI/CD pipelines.

## Quick fixes

1. Confirm the exact error signature matches `Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_*'`.
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

- https://github.com/actions/checkout/issues/1014

Evidence note: Issue #1014 on actions/checkout (open since 2022-11-17, active discussions until 2026-05-12, 29 comments). Occurs on self-hosted Ubuntu 20.04 runners running workflows inside containers with custom Docker images. The checkout action cannot write temporary files due to user mapping differences. Persistent issue affecting enterprise CI/CD pipelines.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_*'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/save_state_*'`.
