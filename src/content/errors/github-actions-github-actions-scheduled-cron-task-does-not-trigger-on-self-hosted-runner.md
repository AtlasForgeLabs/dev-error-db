---
title: "GitHub Actions Scheduled Cron Workflows Not Triggering on Self-Hosted Runners"
description: "Fix GitHub Actions cron-scheduled workflows that don't run on self-hosted runners Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "GitHub Actions scheduled cron task does not trigger on self-hosted runner"
common_causes:
  - "Self-hosted GitHub Actions runners don't trigger scheduled cron workflows even though the workflow YAML is correctly configured. Multiple developers report this on GitHub Discussions. This breaks automated tasks like nightly builds, cleanup jobs, and periodic deployments."
  - "GitHub Actions runner issue #4210 confirms scheduled cron tasks don't trigger on self-hosted runners. Multiple people report the same problem on community discussions forum (#185024). Affects automated CI/CD pipelines relying on self-hosted infrastructure."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions self-hosted runner offline after cron timeout"
  - "GitHub Actions schedule trigger not working"
updated: "2026-05-13"
published_at: "2026-05-13T18:13:17.420Z"
updated_at: "2026-05-13T18:13:17.420Z"
---

## What this error means

`GitHub Actions scheduled cron task does not trigger on self-hosted runner` is a GitHub Actions failure pattern reported for developers trying to fix github actions cron-scheduled workflows that don't run on self-hosted runners. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Actions runner issue #4210 confirms scheduled cron tasks don't trigger on self-hosted runners. Multiple people report the same problem on community discussions forum (#185024). Affects automated CI/CD pipelines relying on self-hosted infrastructure.

## Common causes

- Self-hosted GitHub Actions runners don't trigger scheduled cron workflows even though the workflow YAML is correctly configured. Multiple developers report this on GitHub Discussions. This breaks automated tasks like nightly builds, cleanup jobs, and periodic deployments.
- GitHub Actions runner issue #4210 confirms scheduled cron tasks don't trigger on self-hosted runners. Multiple people report the same problem on community discussions forum (#185024). Affects automated CI/CD pipelines relying on self-hosted infrastructure.

## Quick fixes

1. Confirm the exact error signature matches `GitHub Actions scheduled cron task does not trigger on self-hosted runner`.
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

- https://github.com/actions/runner/issues/4210
- https://github.com/orgs/community/discussions/185024

Evidence note: GitHub Actions runner issue #4210 confirms scheduled cron tasks don't trigger on self-hosted runners. Multiple people report the same problem on community discussions forum (#185024). Affects automated CI/CD pipelines relying on self-hosted infrastructure.

## Related errors

- GitHub Actions self-hosted runner offline after cron timeout
- GitHub Actions schedule trigger not working

## FAQ

### What should I check first?

Start with the exact `GitHub Actions scheduled cron task does not trigger on self-hosted runner` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Actions scheduled cron task does not trigger on self-hosted runner`.
