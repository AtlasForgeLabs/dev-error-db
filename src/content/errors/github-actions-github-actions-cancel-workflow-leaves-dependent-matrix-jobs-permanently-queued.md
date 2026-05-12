---
title: "GitHub Actions Cancel Workflow Leaves Matrix Jobs Permanently Queued — Fix"
description: "Fix GitHub Actions where canceling a workflow from the runs list leaves dependent matrix jobs stuck in queued or pending state Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "GitHub Actions Cancel workflow leaves dependent matrix jobs permanently queued"
common_causes:
  - "When canceling a workflow from the main Actions runs list page, dependent jobs in matrix workflows with needs and if always conditions are not properly canceled. Jobs remain stuck in queued state, consuming runner capacity and requiring manual intervention to clear."
  - "Canceling a workflow from the main Actions runs list page does not fully cancel all queued dependent jobs in workflows with large matrices and needs dependencies. Workflow appears canceled but dependent jobs remain queued until manually canceled from inside the run page."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions job stuck queued"
  - "GitHub Actions cancel not working"
updated: "2026-05-12"
published_at: "2026-05-12T02:10:48.323Z"
updated_at: "2026-05-12T02:10:48.323Z"
---

## What this error means

`GitHub Actions Cancel workflow leaves dependent matrix jobs permanently queued` is a GitHub Actions failure pattern reported for developers trying to fix github actions where canceling a workflow from the runs list leaves dependent matrix jobs stuck in queued or pending state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Canceling a workflow from the main Actions runs list page does not fully cancel all queued dependent jobs in workflows with large matrices and needs dependencies. Workflow appears canceled but dependent jobs remain queued until manually canceled from inside the run page.

## Common causes

- When canceling a workflow from the main Actions runs list page, dependent jobs in matrix workflows with needs and if always conditions are not properly canceled. Jobs remain stuck in queued state, consuming runner capacity and requiring manual intervention to clear.
- Canceling a workflow from the main Actions runs list page does not fully cancel all queued dependent jobs in workflows with large matrices and needs dependencies. Workflow appears canceled but dependent jobs remain queued until manually canceled from inside the run page.

## Quick fixes

1. Confirm the exact error signature matches `GitHub Actions Cancel workflow leaves dependent matrix jobs permanently queued`.
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

Evidence note: Canceling a workflow from the main Actions runs list page does not fully cancel all queued dependent jobs in workflows with large matrices and needs dependencies. Workflow appears canceled but dependent jobs remain queued until manually canceled from inside the run page.

## Related errors

- GitHub Actions job stuck queued
- GitHub Actions cancel not working

## FAQ

### What should I check first?

Start with the exact `GitHub Actions Cancel workflow leaves dependent matrix jobs permanently queued` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Actions Cancel workflow leaves dependent matrix jobs permanently queued`.
