---
title: "GitHub Actions Cancel Workflow Leaves Dependent Jobs Stuck in Queued State"
description: "Fix GitHub Actions stuck queued jobs after workflow cancellation with matrix and needs dependencies Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "GitHub Actions workflow cancellation leaves downstream jobs stuck queued"
common_causes:
  - "Canceling a workflow from the Actions runs list page leaves dependent jobs stuck queued/pending — requires manual cancellation from inside run page, wasting CI minutes"
  - "Canceling workflow from runs list doesn't fully cancel queued/dependent jobs in matrix+needs workflows. Jobs appear canceled but remain queued, consuming CI minutes on paid GitHub plans."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions stuck jobs"
  - "GitHub Actions matrix cancellation"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`GitHub Actions workflow cancellation leaves downstream jobs stuck queued` is a GitHub Actions failure pattern reported for developers trying to fix github actions stuck queued jobs after workflow cancellation with matrix and needs dependencies. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Canceling workflow from runs list doesn't fully cancel queued/dependent jobs in matrix+needs workflows. Jobs appear canceled but remain queued, consuming CI minutes on paid GitHub plans.

## Common causes

- Canceling a workflow from the Actions runs list page leaves dependent jobs stuck queued/pending — requires manual cancellation from inside run page, wasting CI minutes
- Canceling workflow from runs list doesn't fully cancel queued/dependent jobs in matrix+needs workflows. Jobs appear canceled but remain queued, consuming CI minutes on paid GitHub plans.

## Quick fixes

1. Confirm the exact error signature matches `GitHub Actions workflow cancellation leaves downstream jobs stuck queued`.
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

- https://github.com/actions/runner/issues/4411

Evidence note: Canceling workflow from runs list doesn't fully cancel queued/dependent jobs in matrix+needs workflows. Jobs appear canceled but remain queued, consuming CI minutes on paid GitHub plans.

## Related errors

- GitHub Actions stuck jobs
- GitHub Actions matrix cancellation

## FAQ

### What should I check first?

Start with the exact `GitHub Actions workflow cancellation leaves downstream jobs stuck queued` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Actions workflow cancellation leaves downstream jobs stuck queued`.
