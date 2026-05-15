---
title: "LiteLLM OpenRouter Image Generation Fails with ImageUsage Validation Error (int_from_float)"
description: "Fix LiteLLM OpenRouter image generation failure with ImageUsage Pydantic validation error Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Error transforming OpenRouter image generation response: 2 validation errors for ImageUsage output_tokens: Input should be a valid integer, got a number with a fractional part [type=int_from_float, input_value=14417.92]"
common_causes:
  - "GitHub issue BerriAI/litellm#28001 (May 15, 2026): When generating images via OpenRouter through dockerized LiteLLM, the response contains fractional token counts (float) but ImageUsage Pydantic model expects integers. Causes APIError for all OpenRouter image generation requests. Category: LiteLLM (proxy/model routing layer)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-15"
published_at: "2026-05-15T20:13:23.513Z"
updated_at: "2026-05-15T20:13:23.513Z"
---

## What this error means

`Error transforming OpenRouter image generation response: 2 validation errors for ImageUsage output_tokens: Input should be a valid integer, got a number with a fractional part [type=int_from_float, input_value=14417.92]` is a LiteLLM failure pattern reported for developers trying to fix litellm openrouter image generation failure with imageusage pydantic validation error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#28001 (May 15, 2026): When generating images via OpenRouter through dockerized LiteLLM, the response contains fractional token counts (float) but ImageUsage Pydantic model expects integers. Causes APIError for all OpenRouter image generation requests. Category: LiteLLM (proxy/model routing layer).

## Common causes

- GitHub issue BerriAI/litellm#28001 (May 15, 2026): When generating images via OpenRouter through dockerized LiteLLM, the response contains fractional token counts (float) but ImageUsage Pydantic model expects integers. Causes APIError for all OpenRouter image generation requests. Category: LiteLLM (proxy/model routing layer).

## Quick fixes

1. Confirm the exact error signature matches `Error transforming OpenRouter image generation response: 2 validation errors for ImageUsage output_tokens: Input should be a valid integer, got a number with a fractional part [type=int_from_float, input_value=14417.92]`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/28001

Evidence note: GitHub issue BerriAI/litellm#28001 (May 15, 2026): When generating images via OpenRouter through dockerized LiteLLM, the response contains fractional token counts (float) but ImageUsage Pydantic model expects integers. Causes APIError for all OpenRouter image generation requests. Category: LiteLLM (proxy/model routing layer).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Error transforming OpenRouter image generation response: 2 validation errors for ImageUsage output_tokens: Input should be a valid integer, got a number with a fractional part [type=int_from_float, input_value=14417.92]` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error transforming OpenRouter image generation response: 2 validation errors for ImageUsage output_tokens: Input should be a valid integer, got a number with a fractional part [type=int_from_float, input_value=14417.92]`.
