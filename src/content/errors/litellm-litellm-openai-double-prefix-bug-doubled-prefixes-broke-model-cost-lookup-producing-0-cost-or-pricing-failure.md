---
title: "LiteLLM double prefix bug — model cost lookup fails when provider prefix appears twice in deployment name"
description: "使用 LiteLLM proxy/router 时将包含重复 provider prefix（如 openai/openai/gpt-5.5）的部署名称传入，导致 token 成本和定价计算全部异常。计费错误的商业化影响显著。 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Litellm OpenAI double prefix bug — doubled prefixes broke model_cost lookup producing $0 cost or pricing failure"
common_causes:
  - "来自 BerriAI/litellm#28661（Open Issue, updated 2026-05-26）。Proxy 路由场景中 model string 含两次 provider prefix 时，cost_per_token 查找 key 生成错误，返回 $0 成本。高商业价值：直接影响代理层的计费准确性。Category mapping: LiteLLM proxy issue → LiteLLM。"
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T18:43:17.604Z"
updated_at: "2026-05-26T18:43:17.604Z"
---

## What this error means

`Litellm OpenAI double prefix bug — doubled prefixes broke model_cost lookup producing $0 cost or pricing failure` is a LiteLLM failure pattern reported for developers trying to 使用 litellm proxy/router 时将包含重复 provider prefix（如 openai/openai/gpt-5.5）的部署名称传入，导致 token 成本和定价计算全部异常。计费错误的商业化影响显著。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

来自 BerriAI/litellm#28661（Open Issue, updated 2026-05-26）。Proxy 路由场景中 model string 含两次 provider prefix 时，cost_per_token 查找 key 生成错误，返回 $0 成本。高商业价值：直接影响代理层的计费准确性。Category mapping: LiteLLM proxy issue → LiteLLM。

## Common causes

- 来自 BerriAI/litellm#28661（Open Issue, updated 2026-05-26）。Proxy 路由场景中 model string 含两次 provider prefix 时，cost_per_token 查找 key 生成错误，返回 $0 成本。高商业价值：直接影响代理层的计费准确性。Category mapping: LiteLLM proxy issue → LiteLLM。

## Quick fixes

1. Confirm the exact error signature matches `Litellm OpenAI double prefix bug — doubled prefixes broke model_cost lookup producing $0 cost or pricing failure`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/BerriAI/litellm/issues/28661

Evidence note: 来自 BerriAI/litellm#28661（Open Issue, updated 2026-05-26）。Proxy 路由场景中 model string 含两次 provider prefix 时，cost_per_token 查找 key 生成错误，返回 $0 成本。高商业价值：直接影响代理层的计费准确性。Category mapping: LiteLLM proxy issue → LiteLLM。

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Litellm OpenAI double prefix bug — doubled prefixes broke model_cost lookup producing $0 cost or pricing failure` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Litellm OpenAI double prefix bug — doubled prefixes broke model_cost lookup producing $0 cost or pricing failure`.
