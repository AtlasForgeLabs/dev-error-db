---
title: "LiteLLM Proxied Anthropic Responses Buffered Despite stream=true Setting"
description: "Fix LiteLLM proxy buffering Anthropic SSE streams instead of sending real-time deltas, when both OpenAI and Anthropic share same proxy config Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Anthropic proxied response is buffered: delta JSON lines sent in one large batch despite stream=true configuration"
common_causes:
  - "GitHub issue #28384 on BerriAI/litellm opened May 20, 2026. User runs LiteLLM v1.85.0 in Kubernetes with Anthropic + OpenAI models. Streaming works for OpenAI but Anthropic responses arrive as single batch. Config includes proxy_buffering off in nginx, Redis cache, Prometheus callbacks. Not a network issue — pure LiteLLM proxy behavior difference between providers. High-value P1 tech with 47.9k GitHub stars."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-22"
published_at: "2026-05-22T03:39:46.540Z"
updated_at: "2026-05-22T03:39:46.540Z"
---

## What this error means

`Anthropic proxied response is buffered: delta JSON lines sent in one large batch despite stream=true configuration` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy buffering anthropic sse streams instead of sending real-time deltas, when both openai and anthropic share same proxy config. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28384 on BerriAI/litellm opened May 20, 2026. User runs LiteLLM v1.85.0 in Kubernetes with Anthropic + OpenAI models. Streaming works for OpenAI but Anthropic responses arrive as single batch. Config includes proxy_buffering off in nginx, Redis cache, Prometheus callbacks. Not a network issue — pure LiteLLM proxy behavior difference between providers. High-value P1 tech with 47.9k GitHub stars.

## Common causes

- GitHub issue #28384 on BerriAI/litellm opened May 20, 2026. User runs LiteLLM v1.85.0 in Kubernetes with Anthropic + OpenAI models. Streaming works for OpenAI but Anthropic responses arrive as single batch. Config includes proxy_buffering off in nginx, Redis cache, Prometheus callbacks. Not a network issue — pure LiteLLM proxy behavior difference between providers. High-value P1 tech with 47.9k GitHub stars.

## Quick fixes

1. Confirm the exact error signature matches `Anthropic proxied response is buffered: delta JSON lines sent in one large batch despite stream=true configuration`.
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

- https://github.com/BerriAI/litellm/issues/28384

Evidence note: GitHub issue #28384 on BerriAI/litellm opened May 20, 2026. User runs LiteLLM v1.85.0 in Kubernetes with Anthropic + OpenAI models. Streaming works for OpenAI but Anthropic responses arrive as single batch. Config includes proxy_buffering off in nginx, Redis cache, Prometheus callbacks. Not a network issue — pure LiteLLM proxy behavior difference between providers. High-value P1 tech with 47.9k GitHub stars.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Anthropic proxied response is buffered: delta JSON lines sent in one large batch despite stream=true configuration` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Anthropic proxied response is buffered: delta JSON lines sent in one large batch despite stream=true configuration`.
