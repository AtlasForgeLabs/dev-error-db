---
title: "Fix OpenRouter BYOK prompt caching disabled — excessive token costs for Claude models in agent mode"
description: "Resolve OpenRouter silently disabling prompt caching for Anthropic Claude models via BYOK, causing full-context resends at full price in long agent sessions Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "OpenRouter BYOK: Claude models do not benefit from prompt caching, causing excessive token costs in agent mode"
common_causes:
  - "microsoft/vscode#312939 — When using OpenRouter BYOK with Claude models in GitHub Copilot, prompt caching is silently disabled. Every agentic request re-sends full conversation context at full price. High billing impact for paid users. Category mapping: OpenRouter with API compatibility issue → OpenAI API (context-dependent mapping per SKILL.md)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-16"
published_at: "2026-05-16T09:13:25.125Z"
updated_at: "2026-05-16T09:13:25.125Z"
---

## What this error means

`OpenRouter BYOK: Claude models do not benefit from prompt caching, causing excessive token costs in agent mode` is a OpenRouter failure pattern reported for developers trying to resolve openrouter silently disabling prompt caching for anthropic claude models via byok, causing full-context resends at full price in long agent sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

microsoft/vscode#312939 — When using OpenRouter BYOK with Claude models in GitHub Copilot, prompt caching is silently disabled. Every agentic request re-sends full conversation context at full price. High billing impact for paid users. Category mapping: OpenRouter with API compatibility issue → OpenAI API (context-dependent mapping per SKILL.md).

## Common causes

- microsoft/vscode#312939 — When using OpenRouter BYOK with Claude models in GitHub Copilot, prompt caching is silently disabled. Every agentic request re-sends full conversation context at full price. High billing impact for paid users. Category mapping: OpenRouter with API compatibility issue → OpenAI API (context-dependent mapping per SKILL.md).

## Quick fixes

1. Confirm the exact error signature matches `OpenRouter BYOK: Claude models do not benefit from prompt caching, causing excessive token costs in agent mode`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/microsoft/vscode/issues/312939

Evidence note: microsoft/vscode#312939 — When using OpenRouter BYOK with Claude models in GitHub Copilot, prompt caching is silently disabled. Every agentic request re-sends full conversation context at full price. High billing impact for paid users. Category mapping: OpenRouter with API compatibility issue → OpenAI API (context-dependent mapping per SKILL.md).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `OpenRouter BYOK: Claude models do not benefit from prompt caching, causing excessive token costs in agent mode` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OpenRouter BYOK: Claude models do not benefit from prompt caching, causing excessive token costs in agent mode`.
