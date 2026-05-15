---
title: "GitHub Actions Self-Hosted Runner — REST API Reports Idle While Job Running"
description: "Fix GitHub Actions self-hosted runner showing busy:false while actually executing jobs Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "/runners REST API reports busy: false for self-hosted runner actively executing job"
common_causes:
  - "GitHub Actions /runners REST API incorrectly reports busy:false for self-hosted runners that are actively running jobs, causing scheduling issues and resource allocation problems in self-hosted runner pools"
  - "Self-hosted runner REST API reports busy:false while the runner is actively executing a job. Broker says busy, REST API says idle. Causes duplicate job assignments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions runner stuck"
  - "GitHub Actions self-hosted runner busy"
  - "GitHub Actions runner not picking up jobs"
updated: "2026-05-15"
published_at: "2026-05-15T01:13:21.278Z"
updated_at: "2026-05-15T01:13:21.278Z"
---

## What this error means

`/runners REST API reports busy: false for self-hosted runner actively executing job` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner showing busy:false while actually executing jobs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Self-hosted runner REST API reports busy:false while the runner is actively executing a job. Broker says busy, REST API says idle. Causes duplicate job assignments.

## Common causes

- GitHub Actions /runners REST API incorrectly reports busy:false for self-hosted runners that are actively running jobs, causing scheduling issues and resource allocation problems in self-hosted runner pools
- Self-hosted runner REST API reports busy:false while the runner is actively executing a job. Broker says busy, REST API says idle. Causes duplicate job assignments.

## Quick fixes

1. Confirm the exact error signature matches `/runners REST API reports busy: false for self-hosted runner actively executing job`.
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

- https://github.com/actions/runner/issues/4422

Evidence note: Self-hosted runner REST API reports busy:false while the runner is actively executing a job. Broker says busy, REST API says idle. Causes duplicate job assignments.

## Related errors

- GitHub Actions runner stuck
- GitHub Actions self-hosted runner busy
- GitHub Actions runner not picking up jobs

## FAQ

### What should I check first?

Start with the exact `/runners REST API reports busy: false for self-hosted runner actively executing job` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/runners REST API reports busy: false for self-hosted runner actively executing job`.
