---
title: "GitHub Actions Resource Not Accessible by Integration — OIDC Explicit Permission Mode Trap"
description: "Developer adding OIDC authentication to GitHub Actions workflow gets permission denied because specifying ANY permission switches workflow to explicit mode, requiring ALL needed permissions to be declared Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "\"Resource not accessible by integration\" when using GITHUB_TOKEN with id-token: write OIDC config"
common_causes:
  - "sjramblings.io has a 2026 guide on this exact issue. The key insight: explicit permissions override defaults — if you add id-token: write for OIDC, you must also declare contents, issues, pull-requests etc. PRs are treated as issues in GitHub API so they need issues: write. High commercial value because CI/CD failure blocks paid teams. Category: GitHub Actions per mapping."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T03:44:28.659Z"
updated_at: "2026-06-02T03:44:28.659Z"
---

## What this error means

`"Resource not accessible by integration" when using GITHUB_TOKEN with id-token: write OIDC config` is a GitHub Actions failure pattern reported for developers trying to developer adding oidc authentication to github actions workflow gets permission denied because specifying any permission switches workflow to explicit mode, requiring all needed permissions to be declared. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

sjramblings.io has a 2026 guide on this exact issue. The key insight: explicit permissions override defaults — if you add id-token: write for OIDC, you must also declare contents, issues, pull-requests etc. PRs are treated as issues in GitHub API so they need issues: write. High commercial value because CI/CD failure blocks paid teams. Category: GitHub Actions per mapping.

## Common causes

- sjramblings.io has a 2026 guide on this exact issue. The key insight: explicit permissions override defaults — if you add id-token: write for OIDC, you must also declare contents, issues, pull-requests etc. PRs are treated as issues in GitHub API so they need issues: write. High commercial value because CI/CD failure blocks paid teams. Category: GitHub Actions per mapping.

## Quick fixes

1. Confirm the exact error signature matches `"Resource not accessible by integration" when using GITHUB_TOKEN with id-token: write OIDC config`.
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

- https://sjramblings.io/github-actions-resource-not-accessible-by-integration
- https://github.com/orgs/community/discussions/156921

Evidence note: sjramblings.io has a 2026 guide on this exact issue. The key insight: explicit permissions override defaults — if you add id-token: write for OIDC, you must also declare contents, issues, pull-requests etc. PRs are treated as issues in GitHub API so they need issues: write. High commercial value because CI/CD failure blocks paid teams. Category: GitHub Actions per mapping.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `"Resource not accessible by integration" when using GITHUB_TOKEN with id-token: write OIDC config` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Resource not accessible by integration" when using GITHUB_TOKEN with id-token: write OIDC config`.
