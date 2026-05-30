---
title: "GitHub Copilot Chat Not Showing Local Ollama Models in Model Selection Menu"
description: "开发者在 VS Code Copilot Chat 的模型选择菜单中看不到本地 Ollama 模型，即使已配置 OLLAMA_ORIGINS 环境变量且启用了管理模型可见性切换。 Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "VS Code Copilot Chat not displaying local Ollama models despite OLLAMA_ORIGINS configured and Manage Models toggles enabled"
common_causes:
  - "来自 Stack Overflow 问题报告：2026年最新更新中，Copilot Chat UI 未正确显示本地 LLM 提供者。涉及环境变量 OLLAMA_ORIGINS 设置、Settings.json 中的 manageModelsVisibility 配置以及新版本的模型注册逻辑。该问题直接影响 AI 编码工具的可用性且有付费订阅背景。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-30"
published_at: "2026-05-30T01:43:27.914Z"
updated_at: "2026-05-30T01:43:27.914Z"
---

## What this error means

`VS Code Copilot Chat not displaying local Ollama models despite OLLAMA_ORIGINS configured and Manage Models toggles enabled` is a GitHub Copilot failure pattern reported for developers trying to 开发者在 vs code copilot chat 的模型选择菜单中看不到本地 ollama 模型，即使已配置 ollama_origins 环境变量且启用了管理模型可见性切换。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

来自 Stack Overflow 问题报告：2026年最新更新中，Copilot Chat UI 未正确显示本地 LLM 提供者。涉及环境变量 OLLAMA_ORIGINS 设置、Settings.json 中的 manageModelsVisibility 配置以及新版本的模型注册逻辑。该问题直接影响 AI 编码工具的可用性且有付费订阅背景。

## Common causes

- 来自 Stack Overflow 问题报告：2026年最新更新中，Copilot Chat UI 未正确显示本地 LLM 提供者。涉及环境变量 OLLAMA_ORIGINS 设置、Settings.json 中的 manageModelsVisibility 配置以及新版本的模型注册逻辑。该问题直接影响 AI 编码工具的可用性且有付费订阅背景。

## Quick fixes

1. Confirm the exact error signature matches `VS Code Copilot Chat not displaying local Ollama models despite OLLAMA_ORIGINS configured and Manage Models toggles enabled`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79888998/vs-code-copilot-chat-not-showing-local-ollama-models-in-selection-menu-despite-b

Evidence note: 来自 Stack Overflow 问题报告：2026年最新更新中，Copilot Chat UI 未正确显示本地 LLM 提供者。涉及环境变量 OLLAMA_ORIGINS 设置、Settings.json 中的 manageModelsVisibility 配置以及新版本的模型注册逻辑。该问题直接影响 AI 编码工具的可用性且有付费订阅背景。

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `VS Code Copilot Chat not displaying local Ollama models despite OLLAMA_ORIGINS configured and Manage Models toggles enabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `VS Code Copilot Chat not displaying local Ollama models despite OLLAMA_ORIGINS configured and Manage Models toggles enabled`.
