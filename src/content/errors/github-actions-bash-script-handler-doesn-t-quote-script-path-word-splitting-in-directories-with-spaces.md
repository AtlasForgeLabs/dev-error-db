---
title: "GitHub Actions Runner Bash Script Path Word Splitting with Spaces in Directory Names"
description: "Fix GitHub Actions runner bash script handler failing when script path contains spaces due to unquoted path placeholder Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Bash script handler doesn't quote script path — word splitting in directories with spaces"
common_causes:
  - "GitHub Actions self-hosted runners fail silently when project paths contain spaces. The unquoted {0} placeholder in ScriptHandlerHelpers.cs causes word splitting, breaking CI/CD for teams with spaces in directory names."
  - "Open issue on actions/runner. Bash script handler template doesn't quote {0} placeholder, causing word splitting when script path contains spaces. Affects self-hosted runners on Windows/macOS with space-containing paths."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions runner spaces in path"
  - "GitHub Actions bash script path quoting"
  - "GitHub Actions self-hosted runner error"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`Bash script handler doesn't quote script path — word splitting in directories with spaces` is a GitHub Actions failure pattern reported for developers trying to fix github actions runner bash script handler failing when script path contains spaces due to unquoted path placeholder. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on actions/runner. Bash script handler template doesn't quote {0} placeholder, causing word splitting when script path contains spaces. Affects self-hosted runners on Windows/macOS with space-containing paths.

## Common causes

- GitHub Actions self-hosted runners fail silently when project paths contain spaces. The unquoted {0} placeholder in ScriptHandlerHelpers.cs causes word splitting, breaking CI/CD for teams with spaces in directory names.
- Open issue on actions/runner. Bash script handler template doesn't quote {0} placeholder, causing word splitting when script path contains spaces. Affects self-hosted runners on Windows/macOS with space-containing paths.

## Quick fixes

1. Confirm the exact error signature matches `Bash script handler doesn't quote script path — word splitting in directories with spaces`.
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

- https://github.com/actions/runner/issues/4404

Evidence note: Open issue on actions/runner. Bash script handler template doesn't quote {0} placeholder, causing word splitting when script path contains spaces. Affects self-hosted runners on Windows/macOS with space-containing paths.

## Related errors

- GitHub Actions runner spaces in path
- GitHub Actions bash script path quoting
- GitHub Actions self-hosted runner error

## FAQ

### What should I check first?

Start with the exact `Bash script handler doesn't quote script path — word splitting in directories with spaces` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Bash script handler doesn't quote script path — word splitting in directories with spaces`.
