---
title: "GitHub Actions Azure Login Fails With No Subscriptions Found Using Student Subscription"
description: "Fix GitHub Actions azure/login@v2 failing with 'No subscriptions found' when using Azure Student Subscription service principal Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Error: No subscriptions found for ***. — Error: Login failed with Error: The process '/usr/bin/az' failed with exit code 1"
common_causes:
  - "Stack Overflow user running ML retraining pipeline with GitHub Actions + Azure Student Subscription. azure/login@v2 with service principal creds fails with 'No subscriptions found'. Affects CI/CD for paid Azure workloads. Category is GitHub Actions (CI/CD failure blocking paid pipeline)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "GitHub Actions"
updated: "2026-05-16"
published_at: "2026-05-16T10:13:25.259Z"
updated_at: "2026-05-16T10:13:25.259Z"
---

## What this error means

`Error: No subscriptions found for ***. — Error: Login failed with Error: The process '/usr/bin/az' failed with exit code 1` is a GitHub Actions failure pattern reported for developers trying to fix github actions azure/login@v2 failing with 'no subscriptions found' when using azure student subscription service principal. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow user running ML retraining pipeline with GitHub Actions + Azure Student Subscription. azure/login@v2 with service principal creds fails with 'No subscriptions found'. Affects CI/CD for paid Azure workloads. Category is GitHub Actions (CI/CD failure blocking paid pipeline).

## Common causes

- Stack Overflow user running ML retraining pipeline with GitHub Actions + Azure Student Subscription. azure/login@v2 with service principal creds fails with 'No subscriptions found'. Affects CI/CD for paid Azure workloads. Category is GitHub Actions (CI/CD failure blocking paid pipeline).

## Quick fixes

1. Confirm the exact error signature matches `Error: No subscriptions found for ***. — Error: Login failed with Error: The process '/usr/bin/az' failed with exit code 1`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://stackoverflow.com/questions/79912919/azure-login-via-github-actions-fails-with-no-subscriptions-found-using-student

Evidence note: Stack Overflow user running ML retraining pipeline with GitHub Actions + Azure Student Subscription. azure/login@v2 with service principal creds fails with 'No subscriptions found'. Affects CI/CD for paid Azure workloads. Category is GitHub Actions (CI/CD failure blocking paid pipeline).

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Error: No subscriptions found for ***. — Error: Login failed with Error: The process '/usr/bin/az' failed with exit code 1` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: No subscriptions found for ***. — Error: Login failed with Error: The process '/usr/bin/az' failed with exit code 1`.
