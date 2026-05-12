---
title: "LiteLLM BadRequestError when using llm_as_a_judge guardrail with self-hosted vLLM model"
description: "Fix LiteLLM llm_as_a_judge guardrail failing with BadRequestError when using vLLM self-hosted model Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call."
common_causes:
  - "Developers running self-hosted LLMs via vLLM through LiteLLM proxy encounter a BadRequestError when using the llm_as_a_judge guardrail feature. The model works fine for normal queries but fails specifically in guardrail evaluation, blocking AI safety/quality pipelines in production Kubernetes deployments."
  - "Official BerriAI/litellm GitHub issue (v1.83.14). Self-hosted vLLM model (google/gemma-4-31B-it) works in LiteLLM playground but fails with litellm.BadRequestError in llm_as_a_judge guardrail. Both vllm and OpenAI compatible endpoint providers affected. Kubernetes helm chart deployment."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM guardrail vLLM provider error"
  - "LiteLLM llm_as_a_judge fails with custom endpoint"
  - "LiteLLM provider not detected for self-hosted model"
updated: "2026-05-12"
published_at: "2026-05-12T21:12:18.504Z"
updated_at: "2026-05-12T21:12:18.504Z"
---

## What this error means

`litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call.` is a LiteLLM failure pattern reported for developers trying to fix litellm llm_as_a_judge guardrail failing with badrequesterror when using vllm self-hosted model. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official BerriAI/litellm GitHub issue (v1.83.14). Self-hosted vLLM model (google/gemma-4-31B-it) works in LiteLLM playground but fails with litellm.BadRequestError in llm_as_a_judge guardrail. Both vllm and OpenAI compatible endpoint providers affected. Kubernetes helm chart deployment.

## Common causes

- Developers running self-hosted LLMs via vLLM through LiteLLM proxy encounter a BadRequestError when using the llm_as_a_judge guardrail feature. The model works fine for normal queries but fails specifically in guardrail evaluation, blocking AI safety/quality pipelines in production Kubernetes deployments.
- Official BerriAI/litellm GitHub issue (v1.83.14). Self-hosted vLLM model (google/gemma-4-31B-it) works in LiteLLM playground but fails with litellm.BadRequestError in llm_as_a_judge guardrail. Both vllm and OpenAI compatible endpoint providers affected. Kubernetes helm chart deployment.

## Quick fixes

1. Confirm the exact error signature matches `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call.`.
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

- https://github.com/BerriAI/litellm/issues/27767

Evidence note: Official BerriAI/litellm GitHub issue (v1.83.14). Self-hosted vLLM model (google/gemma-4-31B-it) works in LiteLLM playground but fails with litellm.BadRequestError in llm_as_a_judge guardrail. Both vllm and OpenAI compatible endpoint providers affected. Kubernetes helm chart deployment.

## Related errors

- LiteLLM guardrail vLLM provider error
- LiteLLM llm_as_a_judge fails with custom endpoint
- LiteLLM provider not detected for self-hosted model

## FAQ

### What should I check first?

Start with the exact `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.BadRequestError: LLM Provider NOT provided. Pass in the LLM provider you are trying to call.`.
