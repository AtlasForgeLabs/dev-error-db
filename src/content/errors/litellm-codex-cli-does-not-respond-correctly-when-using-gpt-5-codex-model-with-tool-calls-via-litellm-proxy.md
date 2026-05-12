---
title: "LiteLLM Proxy Codex CLI Tool Calls Fail — gpt-5-codex Model Returns No Response"
description: "Fix LiteLLM proxy failing with OpenAI Codex CLI when using gpt-5-codex model with tool/function calls Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Codex CLI does not respond correctly when using gpt-5-codex model with tool calls via LiteLLM proxy"
common_causes:
  - "When using LiteLLM proxy with OpenAI Codex CLI and gpt-5-codex model, tool call requests fail while simple prompts work. This indicates a LiteLLM proxy issue with tool/function call routing for the Codex model. Developers need to use LiteLLM as a unified gateway but this blocks Codex CLI workflows."
  - "GitHub issue #14846: Codex CLI does not respond correctly with gpt-5-codex model via LiteLLM proxy. Simple prompts (e.g., 'Tell me a poem') work, but tool call requests (e.g., 'Explore this repository') fail. Video evidence provided showing both success and failure cases."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM tool call routing error"
  - "OpenAI Codex CLI proxy configuration error"
updated: "2026-05-12"
published_at: "2026-05-12T08:10:49.632Z"
updated_at: "2026-05-12T08:10:49.632Z"
---

## What this error means

`Codex CLI does not respond correctly when using gpt-5-codex model with tool calls via LiteLLM proxy` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy failing with openai codex cli when using gpt-5-codex model with tool/function calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #14846: Codex CLI does not respond correctly with gpt-5-codex model via LiteLLM proxy. Simple prompts (e.g., 'Tell me a poem') work, but tool call requests (e.g., 'Explore this repository') fail. Video evidence provided showing both success and failure cases.

## Common causes

- When using LiteLLM proxy with OpenAI Codex CLI and gpt-5-codex model, tool call requests fail while simple prompts work. This indicates a LiteLLM proxy issue with tool/function call routing for the Codex model. Developers need to use LiteLLM as a unified gateway but this blocks Codex CLI workflows.
- GitHub issue #14846: Codex CLI does not respond correctly with gpt-5-codex model via LiteLLM proxy. Simple prompts (e.g., 'Tell me a poem') work, but tool call requests (e.g., 'Explore this repository') fail. Video evidence provided showing both success and failure cases.

## Quick fixes

1. Confirm the exact error signature matches `Codex CLI does not respond correctly when using gpt-5-codex model with tool calls via LiteLLM proxy`.
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

- https://github.com/BerriAI/litellm/issues/14846

Evidence note: GitHub issue #14846: Codex CLI does not respond correctly with gpt-5-codex model via LiteLLM proxy. Simple prompts (e.g., 'Tell me a poem') work, but tool call requests (e.g., 'Explore this repository') fail. Video evidence provided showing both success and failure cases.

## Related errors

- LiteLLM tool call routing error
- OpenAI Codex CLI proxy configuration error

## FAQ

### What should I check first?

Start with the exact `Codex CLI does not respond correctly when using gpt-5-codex model with tool calls via LiteLLM proxy` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Codex CLI does not respond correctly when using gpt-5-codex model with tool calls via LiteLLM proxy`.
