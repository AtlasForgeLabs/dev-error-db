---
title: "GitHub Actions self-hosted runner registration token returns 502 Bad Gateway in bursts"
description: "Fix GitHub Actions self-hosted runner registration 502 errors during autoscaler bursts Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "POST /repos/{owner}/{repo}/actions/runners/registration-token returns 502 Bad Gateway under concurrent requests"
common_causes:
  - "Registration token endpoint returns 502 under burst concurrency from autoscaled ephemeral runners. ~21 containers died mid-registration, requiring manual cleanup. No retry hint provided. actions/runner issue #4399 (2026-05-04). Affects paid teams with self-hosted runner infrastructure."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-15"
published_at: "2026-05-15T16:13:22.988Z"
updated_at: "2026-05-15T16:13:22.988Z"
---

## What this error means

`POST /repos/{owner}/{repo}/actions/runners/registration-token returns 502 Bad Gateway under concurrent requests` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner registration 502 errors during autoscaler bursts. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Registration token endpoint returns 502 under burst concurrency from autoscaled ephemeral runners. ~21 containers died mid-registration, requiring manual cleanup. No retry hint provided. actions/runner issue #4399 (2026-05-04). Affects paid teams with self-hosted runner infrastructure.

## Common causes

- Registration token endpoint returns 502 under burst concurrency from autoscaled ephemeral runners. ~21 containers died mid-registration, requiring manual cleanup. No retry hint provided. actions/runner issue #4399 (2026-05-04). Affects paid teams with self-hosted runner infrastructure.

## Quick fixes

1. Confirm the exact error signature matches `POST /repos/{owner}/{repo}/actions/runners/registration-token returns 502 Bad Gateway under concurrent requests`.
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

- https://github.com/actions/runner/issues/4399

Evidence note: Registration token endpoint returns 502 under burst concurrency from autoscaled ephemeral runners. ~21 containers died mid-registration, requiring manual cleanup. No retry hint provided. actions/runner issue #4399 (2026-05-04). Affects paid teams with self-hosted runner infrastructure.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `POST /repos/{owner}/{repo}/actions/runners/registration-token returns 502 Bad Gateway under concurrent requests` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `POST /repos/{owner}/{repo}/actions/runners/registration-token returns 502 Bad Gateway under concurrent requests`.
