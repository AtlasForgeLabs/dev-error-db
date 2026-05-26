---
title: "LiteLLM silently under-bills cache hits due to dead pricing field input_cost_per_token_cache_hit"
description: "Understand and fix silent under-billing in LiteLLM when cache hits are not being properly priced Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "input_cost_per_token_cache_hit field is dead, causing silent under-billing of cache hit costs"
common_causes:
  - "GitHub BerriAI/litellm issue #28854 identifies a critical billing bug where the input_cost_per_token_cache_hit field has stopped working, silently under-billing cache hit requests. Direct revenue impact: +3 boost factor for billing error on paid service. Category mapping: LiteLLM proxy billing → LiteLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T17:43:17.487Z"
updated_at: "2026-05-26T17:43:17.487Z"
---

## What this error means

`input_cost_per_token_cache_hit field is dead, causing silent under-billing of cache hit costs` is a LiteLLM failure pattern reported for developers trying to understand and fix silent under-billing in litellm when cache hits are not being properly priced. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub BerriAI/litellm issue #28854 identifies a critical billing bug where the input_cost_per_token_cache_hit field has stopped working, silently under-billing cache hit requests. Direct revenue impact: +3 boost factor for billing error on paid service. Category mapping: LiteLLM proxy billing → LiteLLM.

## Common causes

- GitHub BerriAI/litellm issue #28854 identifies a critical billing bug where the input_cost_per_token_cache_hit field has stopped working, silently under-billing cache hit requests. Direct revenue impact: +3 boost factor for billing error on paid service. Category mapping: LiteLLM proxy billing → LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `input_cost_per_token_cache_hit field is dead, causing silent under-billing of cache hit costs`.
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

- https://github.com/BerriAI/litellm/issues/28854

Evidence note: GitHub BerriAI/litellm issue #28854 identifies a critical billing bug where the input_cost_per_token_cache_hit field has stopped working, silently under-billing cache hit requests. Direct revenue impact: +3 boost factor for billing error on paid service. Category mapping: LiteLLM proxy billing → LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `input_cost_per_token_cache_hit field is dead, causing silent under-billing of cache hit costs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `input_cost_per_token_cache_hit field is dead, causing silent under-billing of cache hit costs`.
