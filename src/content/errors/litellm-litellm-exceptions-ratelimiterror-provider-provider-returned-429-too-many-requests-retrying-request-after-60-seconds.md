---
title: "LiteLLM Rate Limit Fix: Configure Token Buckets and Fallbacks"
description: "LiteLLM 代理部署者遇到由 provider rate limit 不匹配导致的级联 429 错误，需要配置 per-model rpm/tpm、token bucket retry 和 fallback 模型以恢复代理服务稳定运行。 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.exceptions.RateLimitError: Provider <provider> returned 429 Too Many Requests. Retrying request after 60 seconds..."
common_causes:
  - "source: https://markaicode.com/errors/litellm-rate-limit-fix/ — 深入分析 LiteLLM 默认 5 req/s 超过 OpenAI tier-1 3 req/s 限制导致 60% 新部署出现 429 问题，提供 litellm_config.yaml 精确配置示例。Covered errors 中无 LiteLLM 相关条目。此错误影响生产级 LLM 代理服务的多 provider 路由，商业价值极高。Category 映射 LiteLLM。"
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-04"
published_at: "2026-06-04T09:44:35.524Z"
updated_at: "2026-06-04T09:44:35.524Z"
---

## What this error means

`litellm.exceptions.RateLimitError: Provider <provider> returned 429 Too Many Requests. Retrying request after 60 seconds...` is a LiteLLM failure pattern reported for developers trying to litellm 代理部署者遇到由 provider rate limit 不匹配导致的级联 429 错误，需要配置 per-model rpm/tpm、token bucket retry 和 fallback 模型以恢复代理服务稳定运行。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

source: https://markaicode.com/errors/litellm-rate-limit-fix/ — 深入分析 LiteLLM 默认 5 req/s 超过 OpenAI tier-1 3 req/s 限制导致 60% 新部署出现 429 问题，提供 litellm_config.yaml 精确配置示例。Covered errors 中无 LiteLLM 相关条目。此错误影响生产级 LLM 代理服务的多 provider 路由，商业价值极高。Category 映射 LiteLLM。

## Common causes

- source: https://markaicode.com/errors/litellm-rate-limit-fix/ — 深入分析 LiteLLM 默认 5 req/s 超过 OpenAI tier-1 3 req/s 限制导致 60% 新部署出现 429 问题，提供 litellm_config.yaml 精确配置示例。Covered errors 中无 LiteLLM 相关条目。此错误影响生产级 LLM 代理服务的多 provider 路由，商业价值极高。Category 映射 LiteLLM。

## Quick fixes

1. Confirm the exact error signature matches `litellm.exceptions.RateLimitError: Provider <provider> returned 429 Too Many Requests. Retrying request after 60 seconds...`.
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

- https://markaicode.com/errors/litellm-rate-limit-fix/
- https://docs.litellm.ai/docs/proxy/error_diagnosis
- https://github.com/BerriAI/litellm/issues/28146

Evidence note: source: https://markaicode.com/errors/litellm-rate-limit-fix/ — 深入分析 LiteLLM 默认 5 req/s 超过 OpenAI tier-1 3 req/s 限制导致 60% 新部署出现 429 问题，提供 litellm_config.yaml 精确配置示例。Covered errors 中无 LiteLLM 相关条目。此错误影响生产级 LLM 代理服务的多 provider 路由，商业价值极高。Category 映射 LiteLLM。

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.exceptions.RateLimitError: Provider <provider> returned 429 Too Many Requests. Retrying request after 60 seconds...` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.exceptions.RateLimitError: Provider <provider> returned 429 Too Many Requests. Retrying request after 60 seconds...`.
