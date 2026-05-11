---
title: "LiteLLM Proxy Cost Override Ignored in Upstream Proxy Chaining"
description: "Fix LiteLLM model_info cost_per_token override being ignored when calling upstream LiteLLM proxy Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "model_info cost override (input_cost_per_token/output_cost_per_token) ignored when using litellm_proxy/ prefix"
common_causes:
  - "When chaining LiteLLM proxy instances (Y calls X via litellm_proxy/ prefix), setting input_cost_per_token: 0 or output_cost_per_token: 0 in model_info has no effect. The upstream proxy's costs are always used instead. This breaks cost tracking accuracy for organizations running multi-layer LiteLLM proxy setups, making budget monitoring unreliable."
  - "GitHub issue 27656 (2026-05-11) reports that when a LiteLLM proxy (Y) calls another LiteLLM proxy (X) using litellm_proxy/ model prefix, cost overrides in model_info (input_cost_per_token, output_cost_per_token) are completely ignored. Upstream proxy costs are always used, breaking cost tracking for multi-layer proxy deployments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM cost tracking inaccurate with model routing"
  - "LiteLLM proxy chain double-counts token costs"
  - "LiteLLM custom model pricing not applied to routed requests"
updated: "2026-05-11"
---

## What this error means

`model_info cost override (input_cost_per_token/output_cost_per_token) ignored when using litellm_proxy/ prefix` is a LiteLLM failure pattern reported for developers trying to fix litellm model_info cost_per_token override being ignored when calling upstream litellm proxy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue 27656 (2026-05-11) reports that when a LiteLLM proxy (Y) calls another LiteLLM proxy (X) using litellm_proxy/ model prefix, cost overrides in model_info (input_cost_per_token, output_cost_per_token) are completely ignored. Upstream proxy costs are always used, breaking cost tracking for multi-layer proxy deployments.

## Common causes

- When chaining LiteLLM proxy instances (Y calls X via litellm_proxy/ prefix), setting input_cost_per_token: 0 or output_cost_per_token: 0 in model_info has no effect. The upstream proxy's costs are always used instead. This breaks cost tracking accuracy for organizations running multi-layer LiteLLM proxy setups, making budget monitoring unreliable.
- GitHub issue 27656 (2026-05-11) reports that when a LiteLLM proxy (Y) calls another LiteLLM proxy (X) using litellm_proxy/ model prefix, cost overrides in model_info (input_cost_per_token, output_cost_per_token) are completely ignored. Upstream proxy costs are always used, breaking cost tracking for multi-layer proxy deployments.

## Quick fixes

1. Confirm the exact error signature matches `model_info cost override (input_cost_per_token/output_cost_per_token) ignored when using litellm_proxy/ prefix`.
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

- https://github.com/BerriAI/litellm/issues/27656

Evidence note: GitHub issue 27656 (2026-05-11) reports that when a LiteLLM proxy (Y) calls another LiteLLM proxy (X) using litellm_proxy/ model prefix, cost overrides in model_info (input_cost_per_token, output_cost_per_token) are completely ignored. Upstream proxy costs are always used, breaking cost tracking for multi-layer proxy deployments.

## Related errors

- LiteLLM cost tracking inaccurate with model routing
- LiteLLM proxy chain double-counts token costs
- LiteLLM custom model pricing not applied to routed requests

## FAQ

### What should I check first?

Start with the exact `model_info cost override (input_cost_per_token/output_cost_per_token) ignored when using litellm_proxy/ prefix` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model_info cost override (input_cost_per_token/output_cost_per_token) ignored when using litellm_proxy/ prefix`.
