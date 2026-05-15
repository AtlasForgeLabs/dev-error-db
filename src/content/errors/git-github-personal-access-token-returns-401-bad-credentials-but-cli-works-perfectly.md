---
title: "GitHub Personal Access Token Returns 401 Bad Credentials via API/curl But CLI Works"
description: "fix GitHub PAT 401 bad credentials API works CLI Includes evidence for Git troubleshooting demand."
category: "Git"
technology: "Git"
error_signature: "GitHub Personal Access Token returns 401 Bad credentials but CLI works perfectly"
common_causes:
  - "Developers find their GitHub PATs return 401 when used directly in API calls but work fine with GitHub CLI; authentication discrepancy is confusing and blocks CI/CD pipelines"
  - "All GitHub PATs return 401 Bad credentials when used in curl or direct API calls, but gh CLI authentication works perfectly. Affects newly created tokens too. WSL2 environment. High community engagement (score 3)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "GitHub 401 Bad credentials"
  - "GitHub PAT authentication error"
  - "GitHub CLI vs API authentication"
updated: "2026-05-15"
published_at: "2026-05-15T06:13:21.857Z"
updated_at: "2026-05-15T06:13:21.857Z"
---

## What this error means

`GitHub Personal Access Token returns 401 Bad credentials but CLI works perfectly` is a Git failure pattern reported for developers trying to fix github pat 401 bad credentials api works cli. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

All GitHub PATs return 401 Bad credentials when used in curl or direct API calls, but gh CLI authentication works perfectly. Affects newly created tokens too. WSL2 environment. High community engagement (score 3).

## Common causes

- Developers find their GitHub PATs return 401 when used directly in API calls but work fine with GitHub CLI; authentication discrepancy is confusing and blocks CI/CD pipelines
- All GitHub PATs return 401 Bad credentials when used in curl or direct API calls, but gh CLI authentication works perfectly. Affects newly created tokens too. WSL2 environment. High community engagement (score 3).

## Quick fixes

1. Confirm the exact error signature matches `GitHub Personal Access Token returns 401 Bad credentials but CLI works perfectly`.
2. Check the Git account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79699917

Evidence note: All GitHub PATs return 401 Bad credentials when used in curl or direct API calls, but gh CLI authentication works perfectly. Affects newly created tokens too. WSL2 environment. High community engagement (score 3).

## Related errors

- GitHub 401 Bad credentials
- GitHub PAT authentication error
- GitHub CLI vs API authentication

## FAQ

### What should I check first?

Start with the exact `GitHub Personal Access Token returns 401 Bad credentials but CLI works perfectly` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Git workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub Personal Access Token returns 401 Bad credentials but CLI works perfectly`.
