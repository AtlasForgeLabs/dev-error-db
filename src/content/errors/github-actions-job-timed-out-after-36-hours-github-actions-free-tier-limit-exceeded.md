---
title: "GitHub Actions Workflow Run Time Limit Exceeded (36h)"
description: "Fix or work around GitHub Actions job timeout limits for long-running CI/CD pipelines, especially Windows runner builds and large ETL jobs Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Job timed out after 36 hours — GitHub Actions free tier limit exceeded"
common_causes:
  - "Paid GitHub Team/Org users hit hard when long-running workflows get killed. Many search for workarounds including self-hosted runners, caching strategies, and build splitting. Strong commercial intent as it directly affects team productivity and deployment velocity."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-16"
published_at: "2026-05-16T23:13:51.513Z"
updated_at: "2026-05-16T23:13:51.513Z"
---

## What this error means

`Job timed out after 36 hours — GitHub Actions free tier limit exceeded` is a GitHub Actions failure pattern reported for developers trying to fix or work around github actions job timeout limits for long-running ci/cd pipelines, especially windows runner builds and large etl jobs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Paid GitHub Team/Org users hit hard when long-running workflows get killed. Many search for workarounds including self-hosted runners, caching strategies, and build splitting. Strong commercial intent as it directly affects team productivity and deployment velocity.

## Common causes

- Paid GitHub Team/Org users hit hard when long-running workflows get killed. Many search for workarounds including self-hosted runners, caching strategies, and build splitting. Strong commercial intent as it directly affects team productivity and deployment velocity.

## Quick fixes

1. Confirm the exact error signature matches `Job timed out after 36 hours — GitHub Actions free tier limit exceeded`.
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

- https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners

Evidence note: Paid GitHub Team/Org users hit hard when long-running workflows get killed. Many search for workarounds including self-hosted runners, caching strategies, and build splitting. Strong commercial intent as it directly affects team productivity and deployment velocity.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Job timed out after 36 hours — GitHub Actions free tier limit exceeded` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Job timed out after 36 hours — GitHub Actions free tier limit exceeded`.
