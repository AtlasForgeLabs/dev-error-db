---
title: "GitHub Copilot CLI Auth Flow Silently Swallows Quota Exceeded (402) Errors"
description: "Resolve misleading Copilot CLI authentication error caused by underlying quota/rate-limit 429 or 402 errors being suppressed Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "CLI auth flow silently swallows REST quota / rate-limit errors during token validation, surfaces them as 'Session was not created with authentication info or custom provider'"
common_causes:
  - "Two related issues: #3311 (auth flow swallows 429/402) and #3431 (quota_exceeded 402 despite paid over-quota enabled) on github/copilot-cli. Paid Copilot Pro users blocked by confusing error messages. High commercial value — affects paying subscribers' core workflow. Category: GitHub Copilot. P0 tier."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-01"
published_at: "2026-06-01T07:44:26.359Z"
updated_at: "2026-06-01T07:44:26.359Z"
---

## What this error means

`CLI auth flow silently swallows REST quota / rate-limit errors during token validation, surfaces them as 'Session was not created with authentication info or custom provider'` is a GitHub Copilot failure pattern reported for developers trying to resolve misleading copilot cli authentication error caused by underlying quota/rate-limit 429 or 402 errors being suppressed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Two related issues: #3311 (auth flow swallows 429/402) and #3431 (quota_exceeded 402 despite paid over-quota enabled) on github/copilot-cli. Paid Copilot Pro users blocked by confusing error messages. High commercial value — affects paying subscribers' core workflow. Category: GitHub Copilot. P0 tier.

## Common causes

- Two related issues: #3311 (auth flow swallows 429/402) and #3431 (quota_exceeded 402 despite paid over-quota enabled) on github/copilot-cli. Paid Copilot Pro users blocked by confusing error messages. High commercial value — affects paying subscribers' core workflow. Category: GitHub Copilot. P0 tier.

## Quick fixes

1. Confirm the exact error signature matches `CLI auth flow silently swallows REST quota / rate-limit errors during token validation, surfaces them as 'Session was not created with authentication info or custom provider'`.
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

- https://github.com/github/copilot-cli/issues/3311
- https://github.com/github/copilot-cli/issues/3431

Evidence note: Two related issues: #3311 (auth flow swallows 429/402) and #3431 (quota_exceeded 402 despite paid over-quota enabled) on github/copilot-cli. Paid Copilot Pro users blocked by confusing error messages. High commercial value — affects paying subscribers' core workflow. Category: GitHub Copilot. P0 tier.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `CLI auth flow silently swallows REST quota / rate-limit errors during token validation, surfaces them as 'Session was not created with authentication info or custom provider'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CLI auth flow silently swallows REST quota / rate-limit errors during token validation, surfaces them as 'Session was not created with authentication info or custom provider'`.
