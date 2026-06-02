---
title: "Copilot CLI blocks usage with quota_exceeded (402) despite paid over-quota enabled"
description: "Fix Copilot CLI being blocked after hitting premium request quota despite over-quota billing being enabled and active on the account Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "quota_exceeded (402) — You have no quota"
common_causes:
  - "GitHub Issue #3431 on github/copilot-cli reports 402 quota_exceeded error rejecting all requests even though over-quota billing is enabled. Previously worked — requests continued beyond quota with overage billing. Started around May 19-20, 2026, shortly after GitHub moved to usage-based token billing. Affects paying users whose tool becomes completely unusable. Category mapping: direct GitHub Copilot product error."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-02"
published_at: "2026-06-02T09:44:29.474Z"
updated_at: "2026-06-02T09:44:29.474Z"
---

## What this error means

`quota_exceeded (402) — You have no quota` is a GitHub Copilot failure pattern reported for developers trying to fix copilot cli being blocked after hitting premium request quota despite over-quota billing being enabled and active on the account. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #3431 on github/copilot-cli reports 402 quota_exceeded error rejecting all requests even though over-quota billing is enabled. Previously worked — requests continued beyond quota with overage billing. Started around May 19-20, 2026, shortly after GitHub moved to usage-based token billing. Affects paying users whose tool becomes completely unusable. Category mapping: direct GitHub Copilot product error.

## Common causes

- GitHub Issue #3431 on github/copilot-cli reports 402 quota_exceeded error rejecting all requests even though over-quota billing is enabled. Previously worked — requests continued beyond quota with overage billing. Started around May 19-20, 2026, shortly after GitHub moved to usage-based token billing. Affects paying users whose tool becomes completely unusable. Category mapping: direct GitHub Copilot product error.

## Quick fixes

1. Confirm the exact error signature matches `quota_exceeded (402) — You have no quota`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/github/copilot-cli/issues/3431

Evidence note: GitHub Issue #3431 on github/copilot-cli reports 402 quota_exceeded error rejecting all requests even though over-quota billing is enabled. Previously worked — requests continued beyond quota with overage billing. Started around May 19-20, 2026, shortly after GitHub moved to usage-based token billing. Affects paying users whose tool becomes completely unusable. Category mapping: direct GitHub Copilot product error.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `quota_exceeded (402) — You have no quota` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `quota_exceeded (402) — You have no quota`.
