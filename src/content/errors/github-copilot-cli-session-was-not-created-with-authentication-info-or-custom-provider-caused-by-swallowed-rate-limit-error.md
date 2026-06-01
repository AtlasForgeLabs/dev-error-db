---
title: "Copilot CLI Auth Flow Silently Swallows REST Rate Limit During Token Validation"
description: "Fix misleading Copilot CLI auth error that masks the real cause (REST rate limit exceeded during token exchange) Includes evidence for GitHub Copilot CLI troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot CLI"
error_signature: "Session was not created with authentication info or custom provider — caused by swallowed rate-limit error"
common_causes:
  - "Issue #3311 on github/copilot-cli: When Copilot CLI validates tokens via REST API, a 429 rate-limit is silently swallowed and surfaced as generic 'session not created' error. Developers waste time re-authenticating instead of addressing rate-limit throttling. Category mapping: GitHub Copilot CLI auth bug → GitHub Copilot."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-01"
published_at: "2026-06-01T14:44:27.164Z"
updated_at: "2026-06-01T14:44:27.164Z"
---

## What this error means

`Session was not created with authentication info or custom provider — caused by swallowed rate-limit error` is a GitHub Copilot CLI failure pattern reported for developers trying to fix misleading copilot cli auth error that masks the real cause (rest rate limit exceeded during token exchange). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3311 on github/copilot-cli: When Copilot CLI validates tokens via REST API, a 429 rate-limit is silently swallowed and surfaced as generic 'session not created' error. Developers waste time re-authenticating instead of addressing rate-limit throttling. Category mapping: GitHub Copilot CLI auth bug → GitHub Copilot.

## Common causes

- Issue #3311 on github/copilot-cli: When Copilot CLI validates tokens via REST API, a 429 rate-limit is silently swallowed and surfaced as generic 'session not created' error. Developers waste time re-authenticating instead of addressing rate-limit throttling. Category mapping: GitHub Copilot CLI auth bug → GitHub Copilot.

## Quick fixes

1. Confirm the exact error signature matches `Session was not created with authentication info or custom provider — caused by swallowed rate-limit error`.
2. Check the GitHub Copilot CLI account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: Issue #3311 on github/copilot-cli: When Copilot CLI validates tokens via REST API, a 429 rate-limit is silently swallowed and surfaced as generic 'session not created' error. Developers waste time re-authenticating instead of addressing rate-limit throttling. Category mapping: GitHub Copilot CLI auth bug → GitHub Copilot.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Session was not created with authentication info or custom provider — caused by swallowed rate-limit error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session was not created with authentication info or custom provider — caused by swallowed rate-limit error`.
