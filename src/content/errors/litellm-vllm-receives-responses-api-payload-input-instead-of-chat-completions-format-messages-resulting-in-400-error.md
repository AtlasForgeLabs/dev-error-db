---
title: "LiteLLM: use_chat_completions_url_for_anthropic_messages config key not loaded from proxy YAML"
description: "Fix LiteLLM proxy config key not being read from YAML, causing Anthropic messages to be incorrectly routed to Responses API endpoint Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "vLLM receives Responses API payload (input: [...]) instead of chat completions format (messages: [...]), resulting in 400 error"
common_causes:
  - "Source: https://github.com/BerriAI/litellm/issues/28756. The config key use_chat_completions_url_for_anthropic_messages is not populated from proxy config YAML, causing requests to be sent as Responses API payloads instead of Chat Completions format. Produces 400 errors from vLLM backends. Critical for LiteLLM proxy deployments routing to vLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-25"
published_at: "2026-05-25T00:43:12.200Z"
updated_at: "2026-05-25T00:43:12.200Z"
---

## What this error means

`vLLM receives Responses API payload (input: [...]) instead of chat completions format (messages: [...]), resulting in 400 error` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy config key not being read from yaml, causing anthropic messages to be incorrectly routed to responses api endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/BerriAI/litellm/issues/28756. The config key use_chat_completions_url_for_anthropic_messages is not populated from proxy config YAML, causing requests to be sent as Responses API payloads instead of Chat Completions format. Produces 400 errors from vLLM backends. Critical for LiteLLM proxy deployments routing to vLLM.

## Common causes

- Source: https://github.com/BerriAI/litellm/issues/28756. The config key use_chat_completions_url_for_anthropic_messages is not populated from proxy config YAML, causing requests to be sent as Responses API payloads instead of Chat Completions format. Produces 400 errors from vLLM backends. Critical for LiteLLM proxy deployments routing to vLLM.

## Quick fixes

1. Confirm the exact error signature matches `vLLM receives Responses API payload (input: [...]) instead of chat completions format (messages: [...]), resulting in 400 error`.
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

- https://github.com/BerriAI/litellm/issues/28756

Evidence note: Source: https://github.com/BerriAI/litellm/issues/28756. The config key use_chat_completions_url_for_anthropic_messages is not populated from proxy config YAML, causing requests to be sent as Responses API payloads instead of Chat Completions format. Produces 400 errors from vLLM backends. Critical for LiteLLM proxy deployments routing to vLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `vLLM receives Responses API payload (input: [...]) instead of chat completions format (messages: [...]), resulting in 400 error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `vLLM receives Responses API payload (input: [...]) instead of chat completions format (messages: [...]), resulting in 400 error`.
