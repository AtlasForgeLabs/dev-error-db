---
title: "LiteLLM proxy Gemini 3.5 Flash Vertex AI reasoning effort returns error"
description: "Fix proxy configuration error where vertex_ai/gemini-3.5-flash model fails when reasoning_effort parameter is set through LiteLLM Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Gemini 3.5 Flash via Vertex AI specifying reasoning_effort causes all requests to fail — regression between v1.85.1 and v1.86.2"
common_causes:
  - "Found via GitHub core API on BerriAI/litellm repo (issue #29298). Regression bug introduced in v1.86.2 breaking Gemini 3.5 Flash via Vertex AI when reasoning_effort is specified. Production proxy config uses litellm_settings.vertex_location + model_list. Affects enterprise deployments using LiteLLM proxy with Vertex AI billing."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-29"
published_at: "2026-05-29T19:43:27.110Z"
updated_at: "2026-05-29T19:43:27.110Z"
---

## What this error means

`Gemini 3.5 Flash via Vertex AI specifying reasoning_effort causes all requests to fail — regression between v1.85.1 and v1.86.2` is a LiteLLM failure pattern reported for developers trying to fix proxy configuration error where vertex_ai/gemini-3.5-flash model fails when reasoning_effort parameter is set through litellm. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub core API on BerriAI/litellm repo (issue #29298). Regression bug introduced in v1.86.2 breaking Gemini 3.5 Flash via Vertex AI when reasoning_effort is specified. Production proxy config uses litellm_settings.vertex_location + model_list. Affects enterprise deployments using LiteLLM proxy with Vertex AI billing.

## Common causes

- Found via GitHub core API on BerriAI/litellm repo (issue #29298). Regression bug introduced in v1.86.2 breaking Gemini 3.5 Flash via Vertex AI when reasoning_effort is specified. Production proxy config uses litellm_settings.vertex_location + model_list. Affects enterprise deployments using LiteLLM proxy with Vertex AI billing.

## Quick fixes

1. Confirm the exact error signature matches `Gemini 3.5 Flash via Vertex AI specifying reasoning_effort causes all requests to fail — regression between v1.85.1 and v1.86.2`.
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

- https://github.com/BerriAI/litellm/issues/29298

Evidence note: Found via GitHub core API on BerriAI/litellm repo (issue #29298). Regression bug introduced in v1.86.2 breaking Gemini 3.5 Flash via Vertex AI when reasoning_effort is specified. Production proxy config uses litellm_settings.vertex_location + model_list. Affects enterprise deployments using LiteLLM proxy with Vertex AI billing.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Gemini 3.5 Flash via Vertex AI specifying reasoning_effort causes all requests to fail — regression between v1.85.1 and v1.86.2` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Gemini 3.5 Flash via Vertex AI specifying reasoning_effort causes all requests to fail — regression between v1.85.1 and v1.86.2`.
