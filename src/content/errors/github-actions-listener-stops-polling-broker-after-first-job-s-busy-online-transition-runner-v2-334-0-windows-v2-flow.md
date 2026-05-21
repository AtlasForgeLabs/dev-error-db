---
title: "GitHub Actions runner listener stops polling broker after Busy→Online transition on Windows"
description: "Fix GitHub Actions self-hosted runner on Windows where listener stops accepting new jobs after completing the first one Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Listener stops polling broker after first job's Busy→Online transition (runner v2.334.0, Windows, V2 flow)"
common_causes:
  - "GitHub issue actions/runner#4444 — self-hosted runner on Windows v2.334.0 stops receiving jobs after first job transitions from Busy back to Online. Blocks entire CI/CD pipeline for teams relying on self-hosted runners. High urgency for production environments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-21"
published_at: "2026-05-21T19:39:45.463Z"
updated_at: "2026-05-21T19:39:45.463Z"
---

## What this error means

`Listener stops polling broker after first job's Busy→Online transition (runner v2.334.0, Windows, V2 flow)` is a GitHub Actions failure pattern reported for developers trying to fix github actions self-hosted runner on windows where listener stops accepting new jobs after completing the first one. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue actions/runner#4444 — self-hosted runner on Windows v2.334.0 stops receiving jobs after first job transitions from Busy back to Online. Blocks entire CI/CD pipeline for teams relying on self-hosted runners. High urgency for production environments.

## Common causes

- GitHub issue actions/runner#4444 — self-hosted runner on Windows v2.334.0 stops receiving jobs after first job transitions from Busy back to Online. Blocks entire CI/CD pipeline for teams relying on self-hosted runners. High urgency for production environments.

## Quick fixes

1. Confirm the exact error signature matches `Listener stops polling broker after first job's Busy→Online transition (runner v2.334.0, Windows, V2 flow)`.
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

- https://github.com/actions/runner/issues/4444

Evidence note: GitHub issue actions/runner#4444 — self-hosted runner on Windows v2.334.0 stops receiving jobs after first job transitions from Busy back to Online. Blocks entire CI/CD pipeline for teams relying on self-hosted runners. High urgency for production environments.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Listener stops polling broker after first job's Busy→Online transition (runner v2.334.0, Windows, V2 flow)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Listener stops polling broker after first job's Busy→Online transition (runner v2.334.0, Windows, V2 flow)`.
