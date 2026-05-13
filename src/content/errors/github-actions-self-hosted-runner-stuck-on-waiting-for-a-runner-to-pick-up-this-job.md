---
title: "GitHub Actions Self-Hosted Runner Stuck Waiting for Job"
description: "Fix GitHub Actions self-hosted runner stuck waiting to pick up jobs Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Self-hosted runner stuck on 'Waiting for a runner to pick up this job...'"
common_causes:
  - "Self-hosted runners are essential for enterprise CI/CD; jobs stuck in 'waiting' state block entire deployment pipelines and waste developer time"
  - "Open issue (141 comments) on official GitHub Actions runner repo. Multi-step jobs cause runner to hang in 'waiting' state, blocking CI/CD pipelines. High enterprise impact."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions runner connection lost"
  - "GitHub Actions self-hosted runner offline"
  - "GitHub Actions job timeout on self-hosted runner"
updated: "2026-05-13"
published_at: "2026-05-13T19:13:17.554Z"
updated_at: "2026-05-13T19:13:17.554Z"
---

## What this error means

`Self-hosted runner stuck on 'Waiting for a runner to pick up this job...'` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner stuck waiting to pick up jobs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue (141 comments) on official GitHub Actions runner repo. Multi-step jobs cause runner to hang in 'waiting' state, blocking CI/CD pipelines. High enterprise impact.

## Common causes

- Self-hosted runners are essential for enterprise CI/CD; jobs stuck in 'waiting' state block entire deployment pipelines and waste developer time
- Open issue (141 comments) on official GitHub Actions runner repo. Multi-step jobs cause runner to hang in 'waiting' state, blocking CI/CD pipelines. High enterprise impact.

## Quick fixes

1. Confirm the exact error signature matches `Self-hosted runner stuck on 'Waiting for a runner to pick up this job...'`.
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

- https://github.com/actions/runner/issues/3609

Evidence note: Open issue (141 comments) on official GitHub Actions runner repo. Multi-step jobs cause runner to hang in 'waiting' state, blocking CI/CD pipelines. High enterprise impact.

## Related errors

- GitHub Actions runner connection lost
- GitHub Actions self-hosted runner offline
- GitHub Actions job timeout on self-hosted runner

## FAQ

### What should I check first?

Start with the exact `Self-hosted runner stuck on 'Waiting for a runner to pick up this job...'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Self-hosted runner stuck on 'Waiting for a runner to pick up this job...'`.
