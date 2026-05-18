---
title: "GitHub Actions REST API reports wrong runner busy state"
description: "Enterprise team using self-hosted GitHub Actions runners finds REST API returning stale busy=false state while actual job execution confirms busy=true — causes scheduling conflicts and wasted capacity allocation Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "/runners REST API reports busy: false for a self-hosted runner that is actively executing a job (broker says busy, REST says idle)"
common_causes:
  - "GitHub issue #4422 on actions/runner (fabgo, May 14 2026). Critical discrepancy between broker state and REST API state for self-hosted runners. Blocks CI/CD pipeline efficiency for paid teams. Category: GitHub Actions per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-18"
published_at: "2026-05-18T07:37:12.390Z"
updated_at: "2026-05-18T07:37:12.390Z"
---

## What this error means

`/runners REST API reports busy: false for a self-hosted runner that is actively executing a job (broker says busy, REST says idle)` is a GitHub Actions failure pattern reported for developers trying to enterprise team using self-hosted github actions runners finds rest api returning stale busy=false state while actual job execution confirms busy=true — causes scheduling conflicts and wasted capacity allocation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #4422 on actions/runner (fabgo, May 14 2026). Critical discrepancy between broker state and REST API state for self-hosted runners. Blocks CI/CD pipeline efficiency for paid teams. Category: GitHub Actions per mapping rules.

## Common causes

- GitHub issue #4422 on actions/runner (fabgo, May 14 2026). Critical discrepancy between broker state and REST API state for self-hosted runners. Blocks CI/CD pipeline efficiency for paid teams. Category: GitHub Actions per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `/runners REST API reports busy: false for a self-hosted runner that is actively executing a job (broker says busy, REST says idle)`.
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

Evidence note: GitHub issue #4422 on actions/runner (fabgo, May 14 2026). Critical discrepancy between broker state and REST API state for self-hosted runners. Blocks CI/CD pipeline efficiency for paid teams. Category: GitHub Actions per mapping rules.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `/runners REST API reports busy: false for a self-hosted runner that is actively executing a job (broker says busy, REST says idle)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/runners REST API reports busy: false for a self-hosted runner that is actively executing a job (broker says busy, REST says idle)`.
