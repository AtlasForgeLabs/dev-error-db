---
title: "Cursor GPT-5.5 BYOK custom endpoint incorrectly intercepts with local rate limit error"
description: "Developer uses BYOK/custom OpenAI-compatible endpoint in Cursor; GPT-5.5 requests never reach the custom backend because Cursor inserts its own rate-limit check, showing a misleading error Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "User API key rate limit exceeded — Cursor blocks request before it reaches configured custom backend, shows this error for GPT-5.5 specifically while GPT-5.4 works fine with same BYOK setup"
common_causes:
  - "Source: Cursor Community Forum post #160004. Cursor IDE silently intercepts GPT-5.5 requests with 'User-provided API key rate limit exceeded' even when using a configured custom backend that successfully handles other models (GPT-5.4). Only affects GPT-5.5 model in Cursor. Clear, reproducible bug. Category: Cursor per SKILL.md."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Cursor"
updated: "2026-06-03"
published_at: "2026-06-03T02:44:31.544Z"
updated_at: "2026-06-03T02:44:31.544Z"
---

## What this error means

`User API key rate limit exceeded — Cursor blocks request before it reaches configured custom backend, shows this error for GPT-5.5 specifically while GPT-5.4 works fine with same BYOK setup` is a Cursor failure pattern reported for developers trying to developer uses byok/custom openai-compatible endpoint in cursor; gpt-5.5 requests never reach the custom backend because cursor inserts its own rate-limit check, showing a misleading error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Cursor Community Forum post #160004. Cursor IDE silently intercepts GPT-5.5 requests with 'User-provided API key rate limit exceeded' even when using a configured custom backend that successfully handles other models (GPT-5.4). Only affects GPT-5.5 model in Cursor. Clear, reproducible bug. Category: Cursor per SKILL.md.

## Common causes

- Source: Cursor Community Forum post #160004. Cursor IDE silently intercepts GPT-5.5 requests with 'User-provided API key rate limit exceeded' even when using a configured custom backend that successfully handles other models (GPT-5.4). Only affects GPT-5.5 model in Cursor. Clear, reproducible bug. Category: Cursor per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `User API key rate limit exceeded — Cursor blocks request before it reaches configured custom backend, shows this error for GPT-5.5 specifically while GPT-5.4 works fine with same BYOK setup`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://forum.cursor.com/t/gpt-5-5-byok-not-working/160004

Evidence note: Source: Cursor Community Forum post #160004. Cursor IDE silently intercepts GPT-5.5 requests with 'User-provided API key rate limit exceeded' even when using a configured custom backend that successfully handles other models (GPT-5.4). Only affects GPT-5.5 model in Cursor. Clear, reproducible bug. Category: Cursor per SKILL.md.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `User API key rate limit exceeded — Cursor blocks request before it reaches configured custom backend, shows this error for GPT-5.5 specifically while GPT-5.4 works fine with same BYOK setup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `User API key rate limit exceeded — Cursor blocks request before it reaches configured custom backend, shows this error for GPT-5.5 specifically while GPT-5.4 works fine with same BYOK setup`.
