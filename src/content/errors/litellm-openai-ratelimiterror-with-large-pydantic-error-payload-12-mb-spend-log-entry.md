---
title: "LiteLLM Spend Logs Overflow from Verbose RateLimitError Error Payloads"
description: "Fix LiteLLM spend logs too large from verbose OpenAI RateLimitError payloads Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "OpenAI RateLimitError with large pydantic error payload (>12 MB spend log entry)"
common_causes:
  - "When OpenAI returns RateLimitError responses containing large pydantic validation error arrays (178+ errors with full 'input'/'messages' values), LiteLLM stores the entire exception verbatim in spend logs via str(original_exception). This produces individual log rows exceeding 12 MB, causing database bloat and performance issues for teams using LiteLLM as an API gateway."
  - "LiteLLM PR #27689 (May 2026). Provider validation errors (e.g., OpenAI RateLimitError carrying 178 pydantic errors each with their own 'input' array) were stored verbatim in LiteLLM_SpendLogs.metadata.error_information.error_message via str(original_exception), producing rows >12 MB."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM spend logs database too large"
  - "OpenAI RateLimitError verbose response"
  - "LiteLLM error_information truncation"
updated: "2026-05-12"
---

## What this error means

`OpenAI RateLimitError with large pydantic error payload (>12 MB spend log entry)` is a LiteLLM failure pattern reported for developers trying to fix litellm spend logs too large from verbose openai ratelimiterror payloads. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM PR #27689 (May 2026). Provider validation errors (e.g., OpenAI RateLimitError carrying 178 pydantic errors each with their own 'input' array) were stored verbatim in LiteLLM_SpendLogs.metadata.error_information.error_message via str(original_exception), producing rows >12 MB.

## Common causes

- When OpenAI returns RateLimitError responses containing large pydantic validation error arrays (178+ errors with full 'input'/'messages' values), LiteLLM stores the entire exception verbatim in spend logs via str(original_exception). This produces individual log rows exceeding 12 MB, causing database bloat and performance issues for teams using LiteLLM as an API gateway.
- LiteLLM PR #27689 (May 2026). Provider validation errors (e.g., OpenAI RateLimitError carrying 178 pydantic errors each with their own 'input' array) were stored verbatim in LiteLLM_SpendLogs.metadata.error_information.error_message via str(original_exception), producing rows >12 MB.

## Quick fixes

1. Confirm the exact error signature matches `OpenAI RateLimitError with large pydantic error payload (>12 MB spend log entry)`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/pull/27689

Evidence note: LiteLLM PR #27689 (May 2026). Provider validation errors (e.g., OpenAI RateLimitError carrying 178 pydantic errors each with their own 'input' array) were stored verbatim in LiteLLM_SpendLogs.metadata.error_information.error_message via str(original_exception), producing rows >12 MB.

## Related errors

- LiteLLM spend logs database too large
- OpenAI RateLimitError verbose response
- LiteLLM error_information truncation

## FAQ

### What should I check first?

Start with the exact `OpenAI RateLimitError with large pydantic error payload (>12 MB spend log entry)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OpenAI RateLimitError with large pydantic error payload (>12 MB spend log entry)`.
