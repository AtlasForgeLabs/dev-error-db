---
title: "LiteLLM Responses API Drops cache_control on input_text Content Blocks"
description: "Fix LiteLLM cache_control not forwarding to Anthropic when using Responses API Includes evidence for LiteLLM / Anthropic API troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM / Anthropic API"
error_signature: "LiteLLM Responses API silently drops cache_control on input_text content blocks during transformation"
common_causes:
  - "Prompt caching directives sent via Responses API are silently lost, causing higher API costs and slower responses. Tools correctly preserve cache_control but text content does not."
  - "Bug confirmed in litellm v1.83.14. In _transform_responses_api_content_to_chat_completion_content(), input_text handler builds output dict with only type and text, ignoring cache_control. Tools correctly preserve cache_control at lines ~1400-1401."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM cache_control on input_image dropped"
  - "Anthropic API prompt cache miss"
updated: "2026-05-14"
published_at: "2026-05-14T20:13:20.740Z"
updated_at: "2026-05-14T20:13:20.740Z"
---

## What this error means

`LiteLLM Responses API silently drops cache_control on input_text content blocks during transformation` is a LiteLLM / Anthropic API failure pattern reported for developers trying to fix litellm cache_control not forwarding to anthropic when using responses api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug confirmed in litellm v1.83.14. In _transform_responses_api_content_to_chat_completion_content(), input_text handler builds output dict with only type and text, ignoring cache_control. Tools correctly preserve cache_control at lines ~1400-1401.

## Common causes

- Prompt caching directives sent via Responses API are silently lost, causing higher API costs and slower responses. Tools correctly preserve cache_control but text content does not.
- Bug confirmed in litellm v1.83.14. In _transform_responses_api_content_to_chat_completion_content(), input_text handler builds output dict with only type and text, ignoring cache_control. Tools correctly preserve cache_control at lines ~1400-1401.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM Responses API silently drops cache_control on input_text content blocks during transformation`.
2. Check the LiteLLM / Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27950

Evidence note: Bug confirmed in litellm v1.83.14. In _transform_responses_api_content_to_chat_completion_content(), input_text handler builds output dict with only type and text, ignoring cache_control. Tools correctly preserve cache_control at lines ~1400-1401.

## Related errors

- LiteLLM cache_control on input_image dropped
- Anthropic API prompt cache miss

## FAQ

### What should I check first?

Start with the exact `LiteLLM Responses API silently drops cache_control on input_text content blocks during transformation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM / Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM Responses API silently drops cache_control on input_text content blocks during transformation`.
