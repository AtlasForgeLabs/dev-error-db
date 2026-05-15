---
title: "LiteLLM Responses API Drops cache_control on Input Text Blocks, Breaks Prompt Caching"
description: "fix LiteLLM cache_control dropped / Responses API input_text cache_control not working Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)"
common_causes:
  - "When using OpenAI Responses API endpoint with cache_control on input_text content blocks, the cache_control field is silently dropped during conversion. This breaks prompt caching for developers using the Responses API through LiteLLM."
  - "Reported 2026-05-14: cache_control on input_text silently dropped in Responses API conversion. Inconsistent behavior between content block types."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM cache_control not working"
  - "OpenAI Responses API caching issues"
updated: "2026-05-15"
published_at: "2026-05-15T11:13:22.484Z"
updated_at: "2026-05-15T11:13:22.484Z"
---

## What this error means

`Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)` is a LiteLLM failure pattern reported for developers trying to fix litellm cache_control dropped / responses api input_text cache_control not working. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported 2026-05-14: cache_control on input_text silently dropped in Responses API conversion. Inconsistent behavior between content block types.

## Common causes

- When using OpenAI Responses API endpoint with cache_control on input_text content blocks, the cache_control field is silently dropped during conversion. This breaks prompt caching for developers using the Responses API through LiteLLM.
- Reported 2026-05-14: cache_control on input_text silently dropped in Responses API conversion. Inconsistent behavior between content block types.

## Quick fixes

1. Confirm the exact error signature matches `Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)`.
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

- https://github.com/BerriAI/litellm/issues/27950

Evidence note: Reported 2026-05-14: cache_control on input_text silently dropped in Responses API conversion. Inconsistent behavior between content block types.

## Related errors

- LiteLLM cache_control not working
- OpenAI Responses API caching issues

## FAQ

### What should I check first?

Start with the exact `Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Responses API drops cache_control on input_text content blocks (inconsistent with tool cache_control)`.
