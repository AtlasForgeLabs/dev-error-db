---
title: "GitHub Actions Secret Not Found on Pull Request Workflows"
description: "Fix GitHub Actions workflows failing on pull requests due to repository secrets not being accessible in fork/PR context, while succeeding on direct branch pushes Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Workflow succeeds on main but fails on PR with 'secret not found' error"
common_causes:
  - "GitHub community discussion #176252 (Oct 2025): Workflow succeeds on main branch but consistently fails on PR with 'secret not found'. This is a well-known security restriction but still causes frequent confusion and production blockers for teams using PR-based CI. Multiple referenced discussions show persistent community struggle. Distinct angle from basic 429/permalink permission errors — focuses on the PR vs main secret accessibility gap. Maps to GitHub Actions."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "GitHub Actions"
updated: "2026-05-22"
published_at: "2026-05-22T18:39:48.315Z"
updated_at: "2026-05-22T18:39:48.315Z"
---

## What this error means

`Workflow succeeds on main but fails on PR with 'secret not found' error` is a GitHub Actions failure pattern reported for developers trying to fix github actions workflows failing on pull requests due to repository secrets not being accessible in fork/pr context, while succeeding on direct branch pushes. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub community discussion #176252 (Oct 2025): Workflow succeeds on main branch but consistently fails on PR with 'secret not found'. This is a well-known security restriction but still causes frequent confusion and production blockers for teams using PR-based CI. Multiple referenced discussions show persistent community struggle. Distinct angle from basic 429/permalink permission errors — focuses on the PR vs main secret accessibility gap. Maps to GitHub Actions.

## Common causes

- GitHub community discussion #176252 (Oct 2025): Workflow succeeds on main branch but consistently fails on PR with 'secret not found'. This is a well-known security restriction but still causes frequent confusion and production blockers for teams using PR-based CI. Multiple referenced discussions show persistent community struggle. Distinct angle from basic 429/permalink permission errors — focuses on the PR vs main secret accessibility gap. Maps to GitHub Actions.

## Quick fixes

1. Confirm the exact error signature matches `Workflow succeeds on main but fails on PR with 'secret not found' error`.
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

- https://github.com/orgs/community/discussions/176252
- https://github.com/orgs/community/discussions/156921

Evidence note: GitHub community discussion #176252 (Oct 2025): Workflow succeeds on main branch but consistently fails on PR with 'secret not found'. This is a well-known security restriction but still causes frequent confusion and production blockers for teams using PR-based CI. Multiple referenced discussions show persistent community struggle. Distinct angle from basic 429/permalink permission errors — focuses on the PR vs main secret accessibility gap. Maps to GitHub Actions.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Workflow succeeds on main but fails on PR with 'secret not found' error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Workflow succeeds on main but fails on PR with 'secret not found' error`.
