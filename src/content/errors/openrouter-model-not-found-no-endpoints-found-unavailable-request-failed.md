---
title: "OpenRouter 'model_not_found' for unsupported models"
description: "Fix OpenRouter model availability errors when requesting discontinued or unsupported LLM endpoints Includes evidence for OpenRouter troubleshooting demand."
category: "LiteLLM"
technology: "OpenRouter"
error_signature: "model_not_found: No endpoints found, UNAVAILABLE: Request failed"
common_causes:
  - "OpenRouter returns model_not_found / UNAVAILABLE when requesting disabled or rate-limited models. Affects proxy/billing layer for paid users. Maps to LiteLLM category as it's a model-routing proxy error pattern widely applicable to LiteLLM users too."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-25"
published_at: "2026-05-25T02:43:12.473Z"
updated_at: "2026-05-25T02:43:12.473Z"
---

## What this error means

`model_not_found: No endpoints found, UNAVAILABLE: Request failed` is a OpenRouter failure pattern reported for developers trying to fix openrouter model availability errors when requesting discontinued or unsupported llm endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

OpenRouter returns model_not_found / UNAVAILABLE when requesting disabled or rate-limited models. Affects proxy/billing layer for paid users. Maps to LiteLLM category as it's a model-routing proxy error pattern widely applicable to LiteLLM users too.

## Common causes

- OpenRouter returns model_not_found / UNAVAILABLE when requesting disabled or rate-limited models. Affects proxy/billing layer for paid users. Maps to LiteLLM category as it's a model-routing proxy error pattern widely applicable to LiteLLM users too.

## Quick fixes

1. Confirm the exact error signature matches `model_not_found: No endpoints found, UNAVAILABLE: Request failed`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://openrouter.ai/docs/error-codes

Evidence note: OpenRouter returns model_not_found / UNAVAILABLE when requesting disabled or rate-limited models. Affects proxy/billing layer for paid users. Maps to LiteLLM category as it's a model-routing proxy error pattern widely applicable to LiteLLM users too.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `model_not_found: No endpoints found, UNAVAILABLE: Request failed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model_not_found: No endpoints found, UNAVAILABLE: Request failed`.
