---
title: "LiteLLM Modal Endpoint Returns Persistent 404 Error Despite Working Outside Proxy"
description: "开发者通过 LiteLLM 代理调用 Modal Endpoint 时持续收到 404，但直接使用 Modal Client 和 Postman 正常，需要修复代理配置或排查兼容性问题 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "404 Error with Modal Endpoint — works via Modal Client and PostMan but fails through LiteLLM proxy"
common_causes:
  - "GitHub BerriAI/litellm#25129 (2026-04-04) 明确报告此问题：Modal Endpoint 在外部可访问但经 LiteLLM 代理后返回 404。这是典型的代理路由/路径兼容性 bug，影响企业级部署。mapped to 'LiteLLM' approved category."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T16:38:29.932Z"
updated_at: "2026-05-20T16:38:29.932Z"
---

## What this error means

`404 Error with Modal Endpoint — works via Modal Client and PostMan but fails through LiteLLM proxy` is a LiteLLM failure pattern reported for developers trying to 开发者通过 litellm 代理调用 modal endpoint 时持续收到 404，但直接使用 modal client 和 postman 正常，需要修复代理配置或排查兼容性问题. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub BerriAI/litellm#25129 (2026-04-04) 明确报告此问题：Modal Endpoint 在外部可访问但经 LiteLLM 代理后返回 404。这是典型的代理路由/路径兼容性 bug，影响企业级部署。mapped to 'LiteLLM' approved category.

## Common causes

- GitHub BerriAI/litellm#25129 (2026-04-04) 明确报告此问题：Modal Endpoint 在外部可访问但经 LiteLLM 代理后返回 404。这是典型的代理路由/路径兼容性 bug，影响企业级部署。mapped to 'LiteLLM' approved category.

## Quick fixes

1. Confirm the exact error signature matches `404 Error with Modal Endpoint — works via Modal Client and PostMan but fails through LiteLLM proxy`.
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

- https://github.com/BerriAI/litellm/issues/25129

Evidence note: GitHub BerriAI/litellm#25129 (2026-04-04) 明确报告此问题：Modal Endpoint 在外部可访问但经 LiteLLM 代理后返回 404。这是典型的代理路由/路径兼容性 bug，影响企业级部署。mapped to 'LiteLLM' approved category.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `404 Error with Modal Endpoint — works via Modal Client and PostMan but fails through LiteLLM proxy` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `404 Error with Modal Endpoint — works via Modal Client and PostMan but fails through LiteLLM proxy`.
