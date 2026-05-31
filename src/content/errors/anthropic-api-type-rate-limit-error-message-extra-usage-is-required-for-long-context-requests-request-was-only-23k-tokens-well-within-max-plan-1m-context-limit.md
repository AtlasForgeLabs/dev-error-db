---
title: "Anthropic Spurious 429 'Extra Usage Required for Long Context' on Max Plan"
description: "Fix Anthropic API incorrectly rejecting Max plan requests with 429 errors despite being within plan token limits Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "{\"type\":\"rate_limit_error\",\"message\":\"Extra usage is required for long context requests.\"} — request was only ~23K tokens, well within Max plan 1M context limit"
common_causes:
  - "Source: anthropics/claude-code #42616. False-positive rate limit on Max plan with 1M context enabled. User paid for 1M context but gets 429 on 23K token request. Very specific edge case with clear reproduction steps. Maps to Anthropic API. High commercial value — billing-related bugs always attract search volume. Low competition since it's a very narrow bug report."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-31"
published_at: "2026-05-31T06:44:23.637Z"
updated_at: "2026-05-31T06:44:23.637Z"
---

## What this error means

`{"type":"rate_limit_error","message":"Extra usage is required for long context requests."} — request was only ~23K tokens, well within Max plan 1M context limit` is a Anthropic API failure pattern reported for developers trying to fix anthropic api incorrectly rejecting max plan requests with 429 errors despite being within plan token limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: anthropics/claude-code #42616. False-positive rate limit on Max plan with 1M context enabled. User paid for 1M context but gets 429 on 23K token request. Very specific edge case with clear reproduction steps. Maps to Anthropic API. High commercial value — billing-related bugs always attract search volume. Low competition since it's a very narrow bug report.

## Common causes

- Source: anthropics/claude-code #42616. False-positive rate limit on Max plan with 1M context enabled. User paid for 1M context but gets 429 on 23K token request. Very specific edge case with clear reproduction steps. Maps to Anthropic API. High commercial value — billing-related bugs always attract search volume. Low competition since it's a very narrow bug report.

## Quick fixes

1. Confirm the exact error signature matches `{"type":"rate_limit_error","message":"Extra usage is required for long context requests."} — request was only ~23K tokens, well within Max plan 1M context limit`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/42616

Evidence note: Source: anthropics/claude-code #42616. False-positive rate limit on Max plan with 1M context enabled. User paid for 1M context but gets 429 on 23K token request. Very specific edge case with clear reproduction steps. Maps to Anthropic API. High commercial value — billing-related bugs always attract search volume. Low competition since it's a very narrow bug report.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `{"type":"rate_limit_error","message":"Extra usage is required for long context requests."} — request was only ~23K tokens, well within Max plan 1M context limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `{"type":"rate_limit_error","message":"Extra usage is required for long context requests."} — request was only ~23K tokens, well within Max plan 1M context limit`.
