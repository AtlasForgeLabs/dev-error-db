---
title: "LiteLLM Responses API → Chat Completions bridge drops function tool names, rejects unsupported tool types"
description: "Fix LiteLLM Responses API bridge dropping nested function tool names and forwarding Responses-only tool types that downstream providers (DeepSeek, GLM, MiniMax) reject Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Responses bridge: normalize function tools and drop unsupported tool types — Invalid 'tools[0].function.name': empty string; tools[0].type: unknown variant 'custom'"
common_causes:
  - "GitHub PR #28696 on BerriAI/litellm (created May 23 2026, same day). Two bugs in transform_responses_api_tools_to_chat_completion_tools: Bug 1 reads tool name only from top level, ignoring nested 'function' object, producing empty string name that triggers Invalid tools[0].function.name errors. Bug 2 passes unrecognized tool types (custom, shell, file_search, code_interpreter) unchanged, triggering Unknown variant rejection. Affects cross-provider routing for DeepSeek, GLM/Z.AI, MiniMax. Fresh open PR indicates unpatched production bug. Category: LiteLLM (proxy routing error on paid multi-model gateway)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-23"
published_at: "2026-05-23T12:39:50.534Z"
updated_at: "2026-05-23T12:39:50.534Z"
---

## What this error means

`Responses bridge: normalize function tools and drop unsupported tool types — Invalid 'tools[0].function.name': empty string; tools[0].type: unknown variant 'custom'` is a LiteLLM failure pattern reported for developers trying to fix litellm responses api bridge dropping nested function tool names and forwarding responses-only tool types that downstream providers (deepseek, glm, minimax) reject. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub PR #28696 on BerriAI/litellm (created May 23 2026, same day). Two bugs in transform_responses_api_tools_to_chat_completion_tools: Bug 1 reads tool name only from top level, ignoring nested 'function' object, producing empty string name that triggers Invalid tools[0].function.name errors. Bug 2 passes unrecognized tool types (custom, shell, file_search, code_interpreter) unchanged, triggering Unknown variant rejection. Affects cross-provider routing for DeepSeek, GLM/Z.AI, MiniMax. Fresh open PR indicates unpatched production bug. Category: LiteLLM (proxy routing error on paid multi-model gateway).

## Common causes

- GitHub PR #28696 on BerriAI/litellm (created May 23 2026, same day). Two bugs in transform_responses_api_tools_to_chat_completion_tools: Bug 1 reads tool name only from top level, ignoring nested 'function' object, producing empty string name that triggers Invalid tools[0].function.name errors. Bug 2 passes unrecognized tool types (custom, shell, file_search, code_interpreter) unchanged, triggering Unknown variant rejection. Affects cross-provider routing for DeepSeek, GLM/Z.AI, MiniMax. Fresh open PR indicates unpatched production bug. Category: LiteLLM (proxy routing error on paid multi-model gateway).

## Quick fixes

1. Confirm the exact error signature matches `Responses bridge: normalize function tools and drop unsupported tool types — Invalid 'tools[0].function.name': empty string; tools[0].type: unknown variant 'custom'`.
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

- https://github.com/BerriAI/litellm/pull/28696

Evidence note: GitHub PR #28696 on BerriAI/litellm (created May 23 2026, same day). Two bugs in transform_responses_api_tools_to_chat_completion_tools: Bug 1 reads tool name only from top level, ignoring nested 'function' object, producing empty string name that triggers Invalid tools[0].function.name errors. Bug 2 passes unrecognized tool types (custom, shell, file_search, code_interpreter) unchanged, triggering Unknown variant rejection. Affects cross-provider routing for DeepSeek, GLM/Z.AI, MiniMax. Fresh open PR indicates unpatched production bug. Category: LiteLLM (proxy routing error on paid multi-model gateway).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Responses bridge: normalize function tools and drop unsupported tool types — Invalid 'tools[0].function.name': empty string; tools[0].type: unknown variant 'custom'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Responses bridge: normalize function tools and drop unsupported tool types — Invalid 'tools[0].function.name': empty string; tools[0].type: unknown variant 'custom'`.
