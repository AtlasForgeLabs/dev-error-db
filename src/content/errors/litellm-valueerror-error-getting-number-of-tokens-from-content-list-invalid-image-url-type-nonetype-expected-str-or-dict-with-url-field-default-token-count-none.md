---
title: "LiteLLM token_counter ValueError crash when message content has null image_url"
description: "Fix LiteLLM token_counter crashing with ValueError when optional image_url field is null in multimodal messages, causing billing calculation to fail Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "ValueError: Error getting number of tokens from content list: Invalid image_url type: NoneType. Expected str or dict with 'url' field., default_token_count=None"
common_causes:
  - "GitHub Issue #28119 in BerriAI/litellm (created 2026-05-17). token_counter() raises unhandled ValueError on valid edge case (None image_url) instead of returning a default count. Affects billing accuracy for multimodal API calls routed through LiteLLM proxy. Category: LiteLLM — proxy billing layer error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T13:36:46.106Z"
updated_at: "2026-05-17T13:36:46.106Z"
---

## What this error means

`ValueError: Error getting number of tokens from content list: Invalid image_url type: NoneType. Expected str or dict with 'url' field., default_token_count=None` is a LiteLLM failure pattern reported for developers trying to fix litellm token_counter crashing with valueerror when optional image_url field is null in multimodal messages, causing billing calculation to fail. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #28119 in BerriAI/litellm (created 2026-05-17). token_counter() raises unhandled ValueError on valid edge case (None image_url) instead of returning a default count. Affects billing accuracy for multimodal API calls routed through LiteLLM proxy. Category: LiteLLM — proxy billing layer error.

## Common causes

- GitHub Issue #28119 in BerriAI/litellm (created 2026-05-17). token_counter() raises unhandled ValueError on valid edge case (None image_url) instead of returning a default count. Affects billing accuracy for multimodal API calls routed through LiteLLM proxy. Category: LiteLLM — proxy billing layer error.

## Quick fixes

1. Confirm the exact error signature matches `ValueError: Error getting number of tokens from content list: Invalid image_url type: NoneType. Expected str or dict with 'url' field., default_token_count=None`.
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

- https://github.com/BerriAI/litellm/issues/28119

Evidence note: GitHub Issue #28119 in BerriAI/litellm (created 2026-05-17). token_counter() raises unhandled ValueError on valid edge case (None image_url) instead of returning a default count. Affects billing accuracy for multimodal API calls routed through LiteLLM proxy. Category: LiteLLM — proxy billing layer error.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `ValueError: Error getting number of tokens from content list: Invalid image_url type: NoneType. Expected str or dict with 'url' field., default_token_count=None` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ValueError: Error getting number of tokens from content list: Invalid image_url type: NoneType. Expected str or dict with 'url' field., default_token_count=None`.
