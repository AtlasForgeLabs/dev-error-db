---
title: "GitHub Actions Hosted Runner Internal Server Error — Jobs Stuck Queued"
description: "Resolve GitHub Actions hosted runner picking up failures where jobs never get acquired by a runner, leaving them stuck in queued state Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Failed to cancel workflow / runner acquisition internal server error — jobs stuck at 'queued' indefinitely"
common_causes:
  - "Community Discussion #186208 reports ongoing GHA incidents where self-referenced jobs fail before execution due to runner acquisition errors. Correlation IDs returned in failed runs. Jobs on ubuntu-latest with Node 20 CI/CD pipelines affected. Multiple past incidents reported. GitHub Status page shows degraded performance / incidents for GitHub Actions and Hosted Runners. This affects paid team workflows — blocked CI/CD = blocked deployments. Category mapping: GitHub Actions → GitHub Actions (direct match). Covered-errors lists npm ci lockfile, node version mismatch, and publickey but NOT runner acquisition failures."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T18:44:30.528Z"
updated_at: "2026-06-02T18:44:30.528Z"
---

## What this error means

`Failed to cancel workflow / runner acquisition internal server error — jobs stuck at 'queued' indefinitely` is a GitHub Actions failure pattern reported for developers trying to resolve github actions hosted runner picking up failures where jobs never get acquired by a runner, leaving them stuck in queued state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Community Discussion #186208 reports ongoing GHA incidents where self-referenced jobs fail before execution due to runner acquisition errors. Correlation IDs returned in failed runs. Jobs on ubuntu-latest with Node 20 CI/CD pipelines affected. Multiple past incidents reported. GitHub Status page shows degraded performance / incidents for GitHub Actions and Hosted Runners. This affects paid team workflows — blocked CI/CD = blocked deployments. Category mapping: GitHub Actions → GitHub Actions (direct match). Covered-errors lists npm ci lockfile, node version mismatch, and publickey but NOT runner acquisition failures.

## Common causes

- Community Discussion #186208 reports ongoing GHA incidents where self-referenced jobs fail before execution due to runner acquisition errors. Correlation IDs returned in failed runs. Jobs on ubuntu-latest with Node 20 CI/CD pipelines affected. Multiple past incidents reported. GitHub Status page shows degraded performance / incidents for GitHub Actions and Hosted Runners. This affects paid team workflows — blocked CI/CD = blocked deployments. Category mapping: GitHub Actions → GitHub Actions (direct match). Covered-errors lists npm ci lockfile, node version mismatch, and publickey but NOT runner acquisition failures.

## Quick fixes

1. Confirm the exact error signature matches `Failed to cancel workflow / runner acquisition internal server error — jobs stuck at 'queued' indefinitely`.
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

- https://github.com/orgs/community/discussions/186208

Evidence note: Community Discussion #186208 reports ongoing GHA incidents where self-referenced jobs fail before execution due to runner acquisition errors. Correlation IDs returned in failed runs. Jobs on ubuntu-latest with Node 20 CI/CD pipelines affected. Multiple past incidents reported. GitHub Status page shows degraded performance / incidents for GitHub Actions and Hosted Runners. This affects paid team workflows — blocked CI/CD = blocked deployments. Category mapping: GitHub Actions → GitHub Actions (direct match). Covered-errors lists npm ci lockfile, node version mismatch, and publickey but NOT runner acquisition failures.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Failed to cancel workflow / runner acquisition internal server error — jobs stuck at 'queued' indefinitely` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to cancel workflow / runner acquisition internal server error — jobs stuck at 'queued' indefinitely`.
