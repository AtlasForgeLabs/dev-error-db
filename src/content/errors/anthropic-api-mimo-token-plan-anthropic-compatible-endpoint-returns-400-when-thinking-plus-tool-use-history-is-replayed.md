---
title: "Xiaomi MiMo Token Plan Anthropic-Compatible Endpoint: 400 Error with Thinking and Tool Use Replay"
description: "Fix 400 error when using Xiaomi MiMo Token Plan Anthropic-compatible endpoint with thinking mode and tool_use message replay Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "MiMo Token Plan Anthropic-compatible endpoint returns 400 when thinking + tool_use history is replayed"
common_causes:
  - "Developers using Xiaomi MiMo Token Plan's Anthropic-compatible API endpoint encounter 400 errors when the conversation history contains both thinking blocks and tool_use messages. The endpoint implements a subset of the Anthropic Messages API but fails to handle the thinking + tool_use combination correctly, breaking multi-turn agentic workflows."
  - "Reproducible on macOS Apple Silicon with Craft Agents 0.9.2. MiMo Token Plan is a paid Xiaomi AI service. The endpoint at token-plan-cn.xiaomimimo.com/anthropic implements a subset of Anthropic Messages API. Thinking + tool_use replay triggers 400."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API thinking block compatibility errors"
  - "Anthropic Messages API tool_use replay failures"
  - "Anthropic-compatible endpoint 400 errors with agentic workflows"
updated: "2026-05-13"
published_at: "2026-05-13T17:13:17.288Z"
updated_at: "2026-05-13T17:13:17.288Z"
---

## What this error means

`MiMo Token Plan Anthropic-compatible endpoint returns 400 when thinking + tool_use history is replayed` is a Anthropic API failure pattern reported for developers trying to fix 400 error when using xiaomi mimo token plan anthropic-compatible endpoint with thinking mode and tool_use message replay. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reproducible on macOS Apple Silicon with Craft Agents 0.9.2. MiMo Token Plan is a paid Xiaomi AI service. The endpoint at token-plan-cn.xiaomimimo.com/anthropic implements a subset of Anthropic Messages API. Thinking + tool_use replay triggers 400.

## Common causes

- Developers using Xiaomi MiMo Token Plan's Anthropic-compatible API endpoint encounter 400 errors when the conversation history contains both thinking blocks and tool_use messages. The endpoint implements a subset of the Anthropic Messages API but fails to handle the thinking + tool_use combination correctly, breaking multi-turn agentic workflows.
- Reproducible on macOS Apple Silicon with Craft Agents 0.9.2. MiMo Token Plan is a paid Xiaomi AI service. The endpoint at token-plan-cn.xiaomimimo.com/anthropic implements a subset of Anthropic Messages API. Thinking + tool_use replay triggers 400.

## Quick fixes

1. Confirm the exact error signature matches `MiMo Token Plan Anthropic-compatible endpoint returns 400 when thinking + tool_use history is replayed`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/craft-ai-agents/craft-agents-oss/issues/746

Evidence note: Reproducible on macOS Apple Silicon with Craft Agents 0.9.2. MiMo Token Plan is a paid Xiaomi AI service. The endpoint at token-plan-cn.xiaomimimo.com/anthropic implements a subset of Anthropic Messages API. Thinking + tool_use replay triggers 400.

## Related errors

- Anthropic API thinking block compatibility errors
- Anthropic Messages API tool_use replay failures
- Anthropic-compatible endpoint 400 errors with agentic workflows

## FAQ

### What should I check first?

Start with the exact `MiMo Token Plan Anthropic-compatible endpoint returns 400 when thinking + tool_use history is replayed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MiMo Token Plan Anthropic-compatible endpoint returns 400 when thinking + tool_use history is replayed`.
