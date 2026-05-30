---
title: "LiteLLM Proxy 'Model Not Found' for Unsupported Model Names"
description: "LiteLLM proxy returns model_not_found errors when routing requests to unsupported providers or misspelled model names; users need to configure model_aliases or check provider compatibility lists. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.exceptions.RateLimitError — Model 'xxx' not supported. Pass valid model name in model_aliases config.yaml"
common_causes:
  - "LiteLLM is widely adopted as an OpenAI-compatible proxy layer. When organizations add new provider endpoints (e.g., TogetherAI, Fireworks), unknown model names cause silent routing failures. Affects production inference pipelines serving multiple models through a single proxy. Category: LiteLLM."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-30"
published_at: "2026-05-30T00:43:27.798Z"
updated_at: "2026-05-30T00:43:27.798Z"
---

## What this error means

`litellm.exceptions.RateLimitError — Model 'xxx' not supported. Pass valid model name in model_aliases config.yaml` is a LiteLLM failure pattern reported for developers trying to litellm proxy returns model_not_found errors when routing requests to unsupported providers or misspelled model names; users need to configure model_aliases or check provider compatibility lists.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM is widely adopted as an OpenAI-compatible proxy layer. When organizations add new provider endpoints (e.g., TogetherAI, Fireworks), unknown model names cause silent routing failures. Affects production inference pipelines serving multiple models through a single proxy. Category: LiteLLM.

## Common causes

- LiteLLM is widely adopted as an OpenAI-compatible proxy layer. When organizations add new provider endpoints (e.g., TogetherAI, Fireworks), unknown model names cause silent routing failures. Affects production inference pipelines serving multiple models through a single proxy. Category: LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `litellm.exceptions.RateLimitError — Model 'xxx' not supported. Pass valid model name in model_aliases config.yaml`.
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

- https://github.com/BerriAI/litellm/issues?q=is%3Aissue+%22model+not+supported%22
- https://docs.litellm.ai/docs/providers

Evidence note: LiteLLM is widely adopted as an OpenAI-compatible proxy layer. When organizations add new provider endpoints (e.g., TogetherAI, Fireworks), unknown model names cause silent routing failures. Affects production inference pipelines serving multiple models through a single proxy. Category: LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.exceptions.RateLimitError — Model 'xxx' not supported. Pass valid model name in model_aliases config.yaml` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.exceptions.RateLimitError — Model 'xxx' not supported. Pass valid model name in model_aliases config.yaml`.
