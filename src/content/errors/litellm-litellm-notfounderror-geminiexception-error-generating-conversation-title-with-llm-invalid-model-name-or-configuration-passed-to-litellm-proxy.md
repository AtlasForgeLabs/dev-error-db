---
title: "litellm.NotFoundError: GeminiException — conversation title generation fails with invalid model config"
description: "开发者配置 LiteLLM 代理后，Gemini 模型返回 NotFoundError 导致标题生成失败，需要正确的模型映射配置 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.NotFoundError: GeminiException — Error generating conversation title with LLM: Invalid model name or configuration passed to LiteLLM proxy"
common_causes:
  - "来源：GitHub Issues (OpenHands/OpenHands#13645)。OpenHands 项目使用 LiteLLM 代理调用 Gemini 模型时发生 NotFoundError，根因是模型名称或配置传递有误。这是多模型路由场景下的典型 LiteLLM 配置错误。分类：LiteLLM（代理配置错误）。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T14:39:44.746Z"
updated_at: "2026-05-21T14:39:44.746Z"
---

## What this error means

`litellm.NotFoundError: GeminiException — Error generating conversation title with LLM: Invalid model name or configuration passed to LiteLLM proxy` is a LiteLLM failure pattern reported for developers trying to 开发者配置 litellm 代理后，gemini 模型返回 notfounderror 导致标题生成失败，需要正确的模型映射配置. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

来源：GitHub Issues (OpenHands/OpenHands#13645)。OpenHands 项目使用 LiteLLM 代理调用 Gemini 模型时发生 NotFoundError，根因是模型名称或配置传递有误。这是多模型路由场景下的典型 LiteLLM 配置错误。分类：LiteLLM（代理配置错误）。

## Common causes

- 来源：GitHub Issues (OpenHands/OpenHands#13645)。OpenHands 项目使用 LiteLLM 代理调用 Gemini 模型时发生 NotFoundError，根因是模型名称或配置传递有误。这是多模型路由场景下的典型 LiteLLM 配置错误。分类：LiteLLM（代理配置错误）。

## Quick fixes

1. Confirm the exact error signature matches `litellm.NotFoundError: GeminiException — Error generating conversation title with LLM: Invalid model name or configuration passed to LiteLLM proxy`.
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

- https://github.com/OpenHands/OpenHands/issues/13645

Evidence note: 来源：GitHub Issues (OpenHands/OpenHands#13645)。OpenHands 项目使用 LiteLLM 代理调用 Gemini 模型时发生 NotFoundError，根因是模型名称或配置传递有误。这是多模型路由场景下的典型 LiteLLM 配置错误。分类：LiteLLM（代理配置错误）。

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.NotFoundError: GeminiException — Error generating conversation title with LLM: Invalid model name or configuration passed to LiteLLM proxy` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.NotFoundError: GeminiException — Error generating conversation title with LLM: Invalid model name or configuration passed to LiteLLM proxy`.
