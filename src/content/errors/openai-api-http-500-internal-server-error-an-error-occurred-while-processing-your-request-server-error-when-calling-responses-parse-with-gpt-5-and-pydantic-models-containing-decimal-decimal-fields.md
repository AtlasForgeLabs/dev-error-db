---
title: "responses.parse() returns HTTP 500 for Pydantic models with Decimal fields (gpt-5 only)"
description: "Fix 500 error when using OpenAI Responses API structured output with Decimal type fields in Pydantic models Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP 500 Internal Server Error — An error occurred while processing your request (server_error) when calling responses.parse() with gpt-5 and Pydantic models containing decimal.Decimal fields"
common_causes:
  - "GitHub issue openai/openai-python#2718 — Confirmed reproducible: string/float types work fine, Decimal type triggers server_error with gpt-5 (gpt-5-mini works). Linked PR #2733 strips unsupported JSON Schema keywords. Covers a narrow edge case (Decimal in schema), not in covered-errors.md. Category mapping: OpenAI API — direct OpenAI SDK/API bug affecting paid API users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T17:39:45.123Z"
updated_at: "2026-05-21T17:39:45.123Z"
---

## What this error means

`HTTP 500 Internal Server Error — An error occurred while processing your request (server_error) when calling responses.parse() with gpt-5 and Pydantic models containing decimal.Decimal fields` is a OpenAI API failure pattern reported for developers trying to fix 500 error when using openai responses api structured output with decimal type fields in pydantic models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/openai-python#2718 — Confirmed reproducible: string/float types work fine, Decimal type triggers server_error with gpt-5 (gpt-5-mini works). Linked PR #2733 strips unsupported JSON Schema keywords. Covers a narrow edge case (Decimal in schema), not in covered-errors.md. Category mapping: OpenAI API — direct OpenAI SDK/API bug affecting paid API users.

## Common causes

- GitHub issue openai/openai-python#2718 — Confirmed reproducible: string/float types work fine, Decimal type triggers server_error with gpt-5 (gpt-5-mini works). Linked PR #2733 strips unsupported JSON Schema keywords. Covers a narrow edge case (Decimal in schema), not in covered-errors.md. Category mapping: OpenAI API — direct OpenAI SDK/API bug affecting paid API users.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 500 Internal Server Error — An error occurred while processing your request (server_error) when calling responses.parse() with gpt-5 and Pydantic models containing decimal.Decimal fields`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/2718

Evidence note: GitHub issue openai/openai-python#2718 — Confirmed reproducible: string/float types work fine, Decimal type triggers server_error with gpt-5 (gpt-5-mini works). Linked PR #2733 strips unsupported JSON Schema keywords. Covers a narrow edge case (Decimal in schema), not in covered-errors.md. Category mapping: OpenAI API — direct OpenAI SDK/API bug affecting paid API users.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 500 Internal Server Error — An error occurred while processing your request (server_error) when calling responses.parse() with gpt-5 and Pydantic models containing decimal.Decimal fields` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 500 Internal Server Error — An error occurred while processing your request (server_error) when calling responses.parse() with gpt-5 and Pydantic models containing decimal.Decimal fields`.
