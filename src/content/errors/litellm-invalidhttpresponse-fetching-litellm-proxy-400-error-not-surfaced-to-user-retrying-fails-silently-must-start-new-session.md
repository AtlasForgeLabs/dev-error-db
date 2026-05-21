---
title: "LiteLLM 400 Errors swallowed by opencode session — user sees no actionable feedback"
description: "开发者在使用 LiteLLM 代理后端时遇到 400 错误但 opencode 不显示日志或错误信息，需要调试和解决请求格式问题 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "InvalidHTTPResponse fetching litellm proxy — 400 error not surfaced to user, retrying fails silently, must start new session"
common_causes:
  - "来源：GitHub Issues (anomalyco/opencode#16052)。LiteLLM 返回 400 错误但 opencode 框架不展示日志内容，用户只能重启会话重试。这是代理层错误处理的典型痛点，影响开发体验和调试效率。分类：LiteLLM（按规则表映射）。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T14:39:44.746Z"
updated_at: "2026-05-21T14:39:44.746Z"
---

## What this error means

`InvalidHTTPResponse fetching litellm proxy — 400 error not surfaced to user, retrying fails silently, must start new session` is a LiteLLM failure pattern reported for developers trying to 开发者在使用 litellm 代理后端时遇到 400 错误但 opencode 不显示日志或错误信息，需要调试和解决请求格式问题. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

来源：GitHub Issues (anomalyco/opencode#16052)。LiteLLM 返回 400 错误但 opencode 框架不展示日志内容，用户只能重启会话重试。这是代理层错误处理的典型痛点，影响开发体验和调试效率。分类：LiteLLM（按规则表映射）。

## Common causes

- 来源：GitHub Issues (anomalyco/opencode#16052)。LiteLLM 返回 400 错误但 opencode 框架不展示日志内容，用户只能重启会话重试。这是代理层错误处理的典型痛点，影响开发体验和调试效率。分类：LiteLLM（按规则表映射）。

## Quick fixes

1. Confirm the exact error signature matches `InvalidHTTPResponse fetching litellm proxy — 400 error not surfaced to user, retrying fails silently, must start new session`.
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

- https://github.com/anomalyco/opencode/issues/16052

Evidence note: 来源：GitHub Issues (anomalyco/opencode#16052)。LiteLLM 返回 400 错误但 opencode 框架不展示日志内容，用户只能重启会话重试。这是代理层错误处理的典型痛点，影响开发体验和调试效率。分类：LiteLLM（按规则表映射）。

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `InvalidHTTPResponse fetching litellm proxy — 400 error not surfaced to user, retrying fails silently, must start new session` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `InvalidHTTPResponse fetching litellm proxy — 400 error not surfaced to user, retrying fails silently, must start new session`.
