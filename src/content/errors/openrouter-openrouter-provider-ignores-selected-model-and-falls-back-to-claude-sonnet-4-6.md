---
title: "OpenRouter Provider Ignores Selected Model — Silently Falls Back to Default"
description: "Fix OpenRouter provider ignoring the user-selected model and falling back to the default Anthropic model Includes evidence for OpenRouter troubleshooting demand."
category: "AI Coding Tools"
technology: "OpenRouter"
error_signature: "OpenRouter provider ignores selected model and falls back to claude-sonnet-4-6"
common_causes:
  - "When using OpenRouter provider, the selected model (e.g. openai/gpt-4o) is not preserved. The plugin silently falls back to claude-sonnet-4-6 without warning. Users pay for OpenRouter credits but get wrong model."
  - "OpenRouter provider fails to preserve selected model parameter. Silently uses default Anthropic model instead. Users are charged for OpenRouter credits but receive responses from a different model."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenRouter model routing bug"
  - "OpenRouter wrong model used"
  - "OpenRouter silent fallback to default"
updated: "2026-05-15"
published_at: "2026-05-15T02:13:21.451Z"
updated_at: "2026-05-15T02:13:21.451Z"
---

## What this error means

`OpenRouter provider ignores selected model and falls back to claude-sonnet-4-6` is a OpenRouter failure pattern reported for developers trying to fix openrouter provider ignoring the user-selected model and falling back to the default anthropic model. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

OpenRouter provider fails to preserve selected model parameter. Silently uses default Anthropic model instead. Users are charged for OpenRouter credits but receive responses from a different model.

## Common causes

- When using OpenRouter provider, the selected model (e.g. openai/gpt-4o) is not preserved. The plugin silently falls back to claude-sonnet-4-6 without warning. Users pay for OpenRouter credits but get wrong model.
- OpenRouter provider fails to preserve selected model parameter. Silently uses default Anthropic model instead. Users are charged for OpenRouter credits but receive responses from a different model.

## Quick fixes

1. Confirm the exact error signature matches `OpenRouter provider ignores selected model and falls back to claude-sonnet-4-6`.
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

- https://github.com/openclaw/openclaw/issues/14

Evidence note: OpenRouter provider fails to preserve selected model parameter. Silently uses default Anthropic model instead. Users are charged for OpenRouter credits but receive responses from a different model.

## Related errors

- OpenRouter model routing bug
- OpenRouter wrong model used
- OpenRouter silent fallback to default

## FAQ

### What should I check first?

Start with the exact `OpenRouter provider ignores selected model and falls back to claude-sonnet-4-6` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OpenRouter provider ignores selected model and falls back to claude-sonnet-4-6`.
