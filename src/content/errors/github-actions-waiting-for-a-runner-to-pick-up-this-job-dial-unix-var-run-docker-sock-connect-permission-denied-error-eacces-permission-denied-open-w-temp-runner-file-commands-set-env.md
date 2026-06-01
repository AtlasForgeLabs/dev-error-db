---
title: "GitHub Actions Workflow Stuck Waiting for Runner: Self-Hosted Runner Idle But Not Picking Up Jobs + Permission Denied EACCES"
description: "Fix GitHub Actions jobs stuck in queued state — self-hosted runners not picking up jobs due to permission denied on docker.sock, ARC non-root container EACCES errors, or org repository permissions blocking runner group Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Waiting for a runner to pick up this job... | dial unix /var/run/docker.sock: connect: permission denied | Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/set_env_*'"
common_causes:
  - "Sources: GitHub community discussions #31587, #120813, #147604 + aws-actions/configure-aws-credentials issue #1011. Three distinct sub-errors: (1) infinite queue wait on GitHub-hosted runners during outage, (2) self-hosted idle but not accepting jobs due to org repo permission settings, (3) EACCES permission denied on docker.sock when running non-root containers. Blocks paid team CI/CD pipelines — high commercial intent."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`Waiting for a runner to pick up this job... | dial unix /var/run/docker.sock: connect: permission denied | Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/set_env_*'` is a GitHub Actions failure pattern reported for developers trying to fix github actions jobs stuck in queued state — self-hosted runners not picking up jobs due to permission denied on docker.sock, arc non-root container eacces errors, or org repository permissions blocking runner group. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Sources: GitHub community discussions #31587, #120813, #147604 + aws-actions/configure-aws-credentials issue #1011. Three distinct sub-errors: (1) infinite queue wait on GitHub-hosted runners during outage, (2) self-hosted idle but not accepting jobs due to org repo permission settings, (3) EACCES permission denied on docker.sock when running non-root containers. Blocks paid team CI/CD pipelines — high commercial intent.

## Common causes

- Sources: GitHub community discussions #31587, #120813, #147604 + aws-actions/configure-aws-credentials issue #1011. Three distinct sub-errors: (1) infinite queue wait on GitHub-hosted runners during outage, (2) self-hosted idle but not accepting jobs due to org repo permission settings, (3) EACCES permission denied on docker.sock when running non-root containers. Blocks paid team CI/CD pipelines — high commercial intent.

## Quick fixes

1. Confirm the exact error signature matches `Waiting for a runner to pick up this job... | dial unix /var/run/docker.sock: connect: permission denied | Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/set_env_*'`.
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

- https://github.com/orgs/community/discussions/31587
- https://github.com/orgs/community/discussions/120813
- https://github.com/aws-actions/configure-aws-credentials/issues/1011

Evidence note: Sources: GitHub community discussions #31587, #120813, #147604 + aws-actions/configure-aws-credentials issue #1011. Three distinct sub-errors: (1) infinite queue wait on GitHub-hosted runners during outage, (2) self-hosted idle but not accepting jobs due to org repo permission settings, (3) EACCES permission denied on docker.sock when running non-root containers. Blocks paid team CI/CD pipelines — high commercial intent.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Waiting for a runner to pick up this job... | dial unix /var/run/docker.sock: connect: permission denied | Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/set_env_*'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Waiting for a runner to pick up this job... | dial unix /var/run/docker.sock: connect: permission denied | Error: EACCES: permission denied, open '/__w/_temp/_runner_file_commands/set_env_*'`.
