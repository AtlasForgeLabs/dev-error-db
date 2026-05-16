---
title: "GitHub Actions Workflow Permission Denied — pull-requests: write Not Sufficient"
description: "GitHub Actions job fails when trying to interact with PRs despite having pull-requests permission. Developer needs granular permission fixes for workflow secrets and OIDC tokens Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Job fails despite pull-requests: write permission in workflow — permission denied commenting on PR"
common_causes:
  - "Stack Overflow question (ID 79404590) documents exact scenario where workflows fail despite correct YAML permissions. Hacker News-style deep dive by developer who spent 2 days testing every permission combination. Affects paid team CI/CD pipelines. Category: GitHub Actions (exact match)."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "GitHub Actions"
updated: "2026-05-16"
published_at: "2026-05-16T18:13:50.912Z"
updated_at: "2026-05-16T18:13:50.912Z"
---

## What this error means

`Job fails despite pull-requests: write permission in workflow — permission denied commenting on PR` is a GitHub Actions failure pattern reported for developers trying to github actions job fails when trying to interact with prs despite having pull-requests permission. developer needs granular permission fixes for workflow secrets and oidc tokens. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow question (ID 79404590) documents exact scenario where workflows fail despite correct YAML permissions. Hacker News-style deep dive by developer who spent 2 days testing every permission combination. Affects paid team CI/CD pipelines. Category: GitHub Actions (exact match).

## Common causes

- Stack Overflow question (ID 79404590) documents exact scenario where workflows fail despite correct YAML permissions. Hacker News-style deep dive by developer who spent 2 days testing every permission combination. Affects paid team CI/CD pipelines. Category: GitHub Actions (exact match).

## Quick fixes

1. Confirm the exact error signature matches `Job fails despite pull-requests: write permission in workflow — permission denied commenting on PR`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://stackoverflow.com/questions/79404590/job-fails-despite-pull-requests-write-permission-in-workflow
- https://markaicode.com/github-actions-permissions-fix/

Evidence note: Stack Overflow question (ID 79404590) documents exact scenario where workflows fail despite correct YAML permissions. Hacker News-style deep dive by developer who spent 2 days testing every permission combination. Affects paid team CI/CD pipelines. Category: GitHub Actions (exact match).

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Job fails despite pull-requests: write permission in workflow — permission denied commenting on PR` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Job fails despite pull-requests: write permission in workflow — permission denied commenting on PR`.
