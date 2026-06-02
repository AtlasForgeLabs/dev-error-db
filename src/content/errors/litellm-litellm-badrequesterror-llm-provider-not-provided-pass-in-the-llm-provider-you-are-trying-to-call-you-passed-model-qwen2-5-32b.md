---
title: "LiteLLM Proxy 'litellm.BadRequestError: LLM Provider NOT provided'"
description: "Fix LiteLLM BadRequestError when model name lacks provider prefix in CrewAI or similar agent frameworks Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call. You passed model=qwen2.5:32b"
common_causes:
  - "Stack Overflow question with thousands of views. Occurs when using litellm completion() with bare model names instead of prefixed ones (e.g., 'ollama/qwen2.5:32b' vs 'qwen2.5:32b'). Critical for production LiteLLM proxy setups routing to Ollama, Azure, Bedrock. The LiteLLM supply chain security incident (March 2026, v1.82.7/v1.82.8) also drives renewed search interest in proper proxy configuration. Moderate competition — Stack Overflow has good answer but forum posts still active."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T08:44:29.318Z"
updated_at: "2026-06-02T08:44:29.318Z"
---

## What this error means

`litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call. You passed model=qwen2.5:32b` is a LiteLLM failure pattern reported for developers trying to fix litellm badrequesterror when model name lacks provider prefix in crewai or similar agent frameworks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow question with thousands of views. Occurs when using litellm completion() with bare model names instead of prefixed ones (e.g., 'ollama/qwen2.5:32b' vs 'qwen2.5:32b'). Critical for production LiteLLM proxy setups routing to Ollama, Azure, Bedrock. The LiteLLM supply chain security incident (March 2026, v1.82.7/v1.82.8) also drives renewed search interest in proper proxy configuration. Moderate competition — Stack Overflow has good answer but forum posts still active.

## Common causes

- Stack Overflow question with thousands of views. Occurs when using litellm completion() with bare model names instead of prefixed ones (e.g., 'ollama/qwen2.5:32b' vs 'qwen2.5:32b'). Critical for production LiteLLM proxy setups routing to Ollama, Azure, Bedrock. The LiteLLM supply chain security incident (March 2026, v1.82.7/v1.82.8) also drives renewed search interest in proper proxy configuration. Moderate competition — Stack Overflow has good answer but forum posts still active.

## Quick fixes

1. Confirm the exact error signature matches `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call. You passed model=qwen2.5:32b`.
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

- https://stackoverflow.com/questions/79111773/litellm-badrequesterror-llm-provider-not-provided-pass-in-the-llm-provider-you
- https://docs.litellm.ai/blog/security-update-march-2026

Evidence note: Stack Overflow question with thousands of views. Occurs when using litellm completion() with bare model names instead of prefixed ones (e.g., 'ollama/qwen2.5:32b' vs 'qwen2.5:32b'). Critical for production LiteLLM proxy setups routing to Ollama, Azure, Bedrock. The LiteLLM supply chain security incident (March 2026, v1.82.7/v1.82.8) also drives renewed search interest in proper proxy configuration. Moderate competition — Stack Overflow has good answer but forum posts still active.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call. You passed model=qwen2.5:32b` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call. You passed model=qwen2.5:32b`.
