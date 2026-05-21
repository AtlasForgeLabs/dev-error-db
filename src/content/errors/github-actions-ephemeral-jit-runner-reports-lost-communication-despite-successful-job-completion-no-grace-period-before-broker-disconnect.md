---
title: "Ephemeral/JIT Runner Reports Lost Communication Despite Successful Job Completion"
description: "Teams using ephemeral/self-hosted runners see jobs fail with 'lost communication' right after successful completion; need graceful shutdown handling to prevent false CI/CD failures Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Ephemeral/JIT runner reports lost communication despite successful job completion — no grace period before broker disconnect"
common_causes:
  - "Issue #4309 opened Mar 21 2026 on actions/runner. Affects self-hosted runner setups where transient network issues cause false failure reports. CI/CD blockage for paid teams. Maps to 'GitHub Actions'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-21"
published_at: "2026-05-21T01:38:31.070Z"
updated_at: "2026-05-21T01:38:31.070Z"
---

## What this error means

`Ephemeral/JIT runner reports lost communication despite successful job completion — no grace period before broker disconnect` is a GitHub Actions failure pattern reported for developers trying to teams using ephemeral/self-hosted runners see jobs fail with 'lost communication' right after successful completion; need graceful shutdown handling to prevent false ci/cd failures. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #4309 opened Mar 21 2026 on actions/runner. Affects self-hosted runner setups where transient network issues cause false failure reports. CI/CD blockage for paid teams. Maps to 'GitHub Actions'.

## Common causes

- Issue #4309 opened Mar 21 2026 on actions/runner. Affects self-hosted runner setups where transient network issues cause false failure reports. CI/CD blockage for paid teams. Maps to 'GitHub Actions'.

## Quick fixes

1. Confirm the exact error signature matches `Ephemeral/JIT runner reports lost communication despite successful job completion — no grace period before broker disconnect`.
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

- https://github.com/actions/runner/issues/4309

Evidence note: Issue #4309 opened Mar 21 2026 on actions/runner. Affects self-hosted runner setups where transient network issues cause false failure reports. CI/CD blockage for paid teams. Maps to 'GitHub Actions'.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Ephemeral/JIT runner reports lost communication despite successful job completion — no grace period before broker disconnect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ephemeral/JIT runner reports lost communication despite successful job completion — no grace period before broker disconnect`.
