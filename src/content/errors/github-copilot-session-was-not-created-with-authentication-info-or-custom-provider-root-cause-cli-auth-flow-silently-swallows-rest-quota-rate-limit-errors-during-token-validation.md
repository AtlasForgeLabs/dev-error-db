---
title: "GitHub Copilot CLI Auth Swallows REST Quota Errors — Session Was Not Created"
description: "Diagnose and fix GitHub Copilot CLI authentication failures caused by silent swallowing of REST quota exceeded and rate limit errors during token validation phase Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Session was not created with authentication info or custom provider (root cause: CLI auth flow silently swallows REST quota/rate-limit errors during token validation)"
common_causes:
  - "Copilot-cli GitHub issue #3311 specifically reports that the CLI auth flow silently swallows REST quota/rate-limit errors, surfacing them as opaque 'Session was not created' messages instead of actionable quota errors. Related issue microsoft/vscode #263822 shows rate limit exceeded for user sign-in with explicit request IDs. Another issue #13702 documents quota_exceeded server error. Category mapping: GitHub Copilot → GitHub Copilot."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-10"
published_at: "2026-06-10T16:36:12.194Z"
updated_at: "2026-06-10T16:36:12.194Z"
---

## What this error means

`Session was not created with authentication info or custom provider (root cause: CLI auth flow silently swallows REST quota/rate-limit errors during token validation)` is a GitHub Copilot failure pattern reported for developers trying to diagnose and fix github copilot cli authentication failures caused by silent swallowing of rest quota exceeded and rate limit errors during token validation phase. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Copilot-cli GitHub issue #3311 specifically reports that the CLI auth flow silently swallows REST quota/rate-limit errors, surfacing them as opaque 'Session was not created' messages instead of actionable quota errors. Related issue microsoft/vscode #263822 shows rate limit exceeded for user sign-in with explicit request IDs. Another issue #13702 documents quota_exceeded server error. Category mapping: GitHub Copilot → GitHub Copilot.

## Common causes

- Copilot-cli GitHub issue #3311 specifically reports that the CLI auth flow silently swallows REST quota/rate-limit errors, surfacing them as opaque 'Session was not created' messages instead of actionable quota errors. Related issue microsoft/vscode #263822 shows rate limit exceeded for user sign-in with explicit request IDs. Another issue #13702 documents quota_exceeded server error. Category mapping: GitHub Copilot → GitHub Copilot.

## Quick fixes

1. Confirm the exact error signature matches `Session was not created with authentication info or custom provider (root cause: CLI auth flow silently swallows REST quota/rate-limit errors during token validation)`.
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
- https://github.com/microsoft/vscode/issues/263822
- https://github.com/microsoft/vscode-copilot-release/issues/13702
- https://github.com/microsoft/vscode-copilot-release/issues/9994

Evidence note: Copilot-cli GitHub issue #3311 specifically reports that the CLI auth flow silently swallows REST quota/rate-limit errors, surfacing them as opaque 'Session was not created' messages instead of actionable quota errors. Related issue microsoft/vscode #263822 shows rate limit exceeded for user sign-in with explicit request IDs. Another issue #13702 documents quota_exceeded server error. Category mapping: GitHub Copilot → GitHub Copilot.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Session was not created with authentication info or custom provider (root cause: CLI auth flow silently swallows REST quota/rate-limit errors during token validation)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session was not created with authentication info or custom provider (root cause: CLI auth flow silently swallows REST quota/rate-limit errors during token validation)`.
