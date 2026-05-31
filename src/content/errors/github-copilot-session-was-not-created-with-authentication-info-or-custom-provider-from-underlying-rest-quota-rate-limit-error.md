---
title: "GitHub Copilot CLI auth flow swallows REST quota errors, shows misleading message"
description: "Fix GitHub Copilot CLI silently swallowing REST API rate-limit errors during token validation, surfacing them as generic 'Session was not created...' auth failure instead of actual rate-limit message Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "\"Session was not created with authentication info or custom provider\" (from underlying REST quota/rate-limit error)"
common_causes:
  - "Issue #3311 on github/copilot-cli: The CLI auth flow hides the real cause (REST quota exceeded) behind a misleading session auth message. Also issue #3459 confirms auto-update check makes unauthenticated requests hitting rate limits in shared-NAT environments. Affects paying Copilot Pro+ users."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-31"
published_at: "2026-05-31T13:44:24.803Z"
updated_at: "2026-05-31T13:44:24.803Z"
---

## What this error means

`"Session was not created with authentication info or custom provider" (from underlying REST quota/rate-limit error)` is a GitHub Copilot failure pattern reported for developers trying to fix github copilot cli silently swallowing rest api rate-limit errors during token validation, surfacing them as generic 'session was not created...' auth failure instead of actual rate-limit message. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3311 on github/copilot-cli: The CLI auth flow hides the real cause (REST quota exceeded) behind a misleading session auth message. Also issue #3459 confirms auto-update check makes unauthenticated requests hitting rate limits in shared-NAT environments. Affects paying Copilot Pro+ users.

## Common causes

- Issue #3311 on github/copilot-cli: The CLI auth flow hides the real cause (REST quota exceeded) behind a misleading session auth message. Also issue #3459 confirms auto-update check makes unauthenticated requests hitting rate limits in shared-NAT environments. Affects paying Copilot Pro+ users.

## Quick fixes

1. Confirm the exact error signature matches `"Session was not created with authentication info or custom provider" (from underlying REST quota/rate-limit error)`.
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
- https://github.com/github/copilot-cli/issues/3459

Evidence note: Issue #3311 on github/copilot-cli: The CLI auth flow hides the real cause (REST quota exceeded) behind a misleading session auth message. Also issue #3459 confirms auto-update check makes unauthenticated requests hitting rate limits in shared-NAT environments. Affects paying Copilot Pro+ users.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `"Session was not created with authentication info or custom provider" (from underlying REST quota/rate-limit error)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Session was not created with authentication info or custom provider" (from underlying REST quota/rate-limit error)`.
