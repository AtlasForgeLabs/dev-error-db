---
title: "GitHub Actions Runner Registration Token 502 Bad Gateway Fix"
description: "Fix GitHub Actions runner registration failing with 502 Bad Gateway during autoscaler bursts Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Registration token endpoint returns 502 Bad Gateway — ephemeral runners die before registering"
common_causes:
  - "Teams using autoscalers for ephemeral GHA runners hit 502 errors during burst registration. Without proper retry logic, runners die and CI/CD pipelines stall. Affects all organizations using self-hosted runners at scale."
  - "Open issue on actions/runner repo. POST to registration-token endpoint returns 502 Bad Gateway under concurrent bursts. Ephemeral runners from autoscalers (e.g., Modal-hosted) fail to register, stalling CI/CD."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions runner registration timeout"
  - "GitHub Actions 502 error self-hosted"
  - "GitHub Actions autoscaler runner setup failed"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`Registration token endpoint returns 502 Bad Gateway — ephemeral runners die before registering` is a GitHub Actions failure pattern reported for developers trying to fix github actions runner registration failing with 502 bad gateway during autoscaler bursts. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on actions/runner repo. POST to registration-token endpoint returns 502 Bad Gateway under concurrent bursts. Ephemeral runners from autoscalers (e.g., Modal-hosted) fail to register, stalling CI/CD.

## Common causes

- Teams using autoscalers for ephemeral GHA runners hit 502 errors during burst registration. Without proper retry logic, runners die and CI/CD pipelines stall. Affects all organizations using self-hosted runners at scale.
- Open issue on actions/runner repo. POST to registration-token endpoint returns 502 Bad Gateway under concurrent bursts. Ephemeral runners from autoscalers (e.g., Modal-hosted) fail to register, stalling CI/CD.

## Quick fixes

1. Confirm the exact error signature matches `Registration token endpoint returns 502 Bad Gateway — ephemeral runners die before registering`.
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

Evidence note: Open issue on actions/runner repo. POST to registration-token endpoint returns 502 Bad Gateway under concurrent bursts. Ephemeral runners from autoscalers (e.g., Modal-hosted) fail to register, stalling CI/CD.

## Related errors

- GitHub Actions runner registration timeout
- GitHub Actions 502 error self-hosted
- GitHub Actions autoscaler runner setup failed

## FAQ

### What should I check first?

Start with the exact `Registration token endpoint returns 502 Bad Gateway — ephemeral runners die before registering` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Registration token endpoint returns 502 Bad Gateway — ephemeral runners die before registering`.
