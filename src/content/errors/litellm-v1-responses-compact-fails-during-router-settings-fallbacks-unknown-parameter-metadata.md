---
title: "LiteLLM /v1/responses/compact Fails During Fallback with 'Unknown parameter: metadata'"
description: "Fix LiteLLM fallback failure when /v1/responses/compact endpoint returns 400 Unknown parameter metadata Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "/v1/responses/compact fails during router_settings.fallbacks — Unknown parameter: metadata"
common_causes:
  - "LiteLLM is a widely used API proxy for routing between multiple LLM providers. Fallback failures mean production AI services degrade without proper error handling."
  - "/v1/responses/compact fails during router_settings.fallbacks failover from primary to fallback model, with Azure returning 400 'Unknown parameter: metadata'. Hardcoded metadata key in run_async_fallback causes the error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Azure fallback error"
  - "LiteLLM router_settings failed"
  - "LiteLLM metadata parameter error"
updated: "2026-05-12"
published_at: "2026-05-12T04:10:49.025Z"
updated_at: "2026-05-12T04:10:49.025Z"
---

## What this error means

`/v1/responses/compact fails during router_settings.fallbacks — Unknown parameter: metadata` is a LiteLLM failure pattern reported for developers trying to fix litellm fallback failure when /v1/responses/compact endpoint returns 400 unknown parameter metadata. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

/v1/responses/compact fails during router_settings.fallbacks failover from primary to fallback model, with Azure returning 400 'Unknown parameter: metadata'. Hardcoded metadata key in run_async_fallback causes the error.

## Common causes

- LiteLLM is a widely used API proxy for routing between multiple LLM providers. Fallback failures mean production AI services degrade without proper error handling.
- /v1/responses/compact fails during router_settings.fallbacks failover from primary to fallback model, with Azure returning 400 'Unknown parameter: metadata'. Hardcoded metadata key in run_async_fallback causes the error.

## Quick fixes

1. Confirm the exact error signature matches `/v1/responses/compact fails during router_settings.fallbacks — Unknown parameter: metadata`.
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

- https://github.com/BerriAI/litellm/issues/25402

Evidence note: /v1/responses/compact fails during router_settings.fallbacks failover from primary to fallback model, with Azure returning 400 'Unknown parameter: metadata'. Hardcoded metadata key in run_async_fallback causes the error.

## Related errors

- LiteLLM Azure fallback error
- LiteLLM router_settings failed
- LiteLLM metadata parameter error

## FAQ

### What should I check first?

Start with the exact `/v1/responses/compact fails during router_settings.fallbacks — Unknown parameter: metadata` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/v1/responses/compact fails during router_settings.fallbacks — Unknown parameter: metadata`.
