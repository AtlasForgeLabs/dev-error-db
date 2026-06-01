---
title: "LiteLLM Claude Code Proxy \"model not found\" — Missing Multi-Slot Configuration for Haiku/Sonnet/Opus"
description: "Fix Claude Code 'model not found' error when routing through LiteLLM proxy — requires setting ALL THREE env vars (ANTHROPIC_DEFAULT_HAIKU_MODEL, SONNET_MODEL, OPUS_MODEL) even if changing only one slot via /model command Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "\"model not found\" error when setting ANTHROPIC_BASE_URL but forgetting to map all three model slots (Haiku, Sonnet, Opus)"
common_causes:
  - "Techsy.io blog documents the most common LiteLLM/Claude Code integration error: Claude Code internally uses three separate model slots (Haiku for background tasks, Sonnet for default coding, Opus for complex reasoning). Changing only ONE slot via /model command still causes remaining two slots to fail with 'model not found'. Requires all three ANTHROPIC_DEFAULT_*_MODEL env vars to be set simultaneously. Affects many teams using LiteLLM as AI gateway proxy. Maps to 'LiteLLM' approved category."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T18:44:27.548Z"
updated_at: "2026-06-01T18:44:27.548Z"
---

## What this error means

`"model not found" error when setting ANTHROPIC_BASE_URL but forgetting to map all three model slots (Haiku, Sonnet, Opus)` is a LiteLLM failure pattern reported for developers trying to fix claude code 'model not found' error when routing through litellm proxy — requires setting all three env vars (anthropic_default_haiku_model, sonnet_model, opus_model) even if changing only one slot via /model command. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Techsy.io blog documents the most common LiteLLM/Claude Code integration error: Claude Code internally uses three separate model slots (Haiku for background tasks, Sonnet for default coding, Opus for complex reasoning). Changing only ONE slot via /model command still causes remaining two slots to fail with 'model not found'. Requires all three ANTHROPIC_DEFAULT_*_MODEL env vars to be set simultaneously. Affects many teams using LiteLLM as AI gateway proxy. Maps to 'LiteLLM' approved category.

## Common causes

- Techsy.io blog documents the most common LiteLLM/Claude Code integration error: Claude Code internally uses three separate model slots (Haiku for background tasks, Sonnet for default coding, Opus for complex reasoning). Changing only ONE slot via /model command still causes remaining two slots to fail with 'model not found'. Requires all three ANTHROPIC_DEFAULT_*_MODEL env vars to be set simultaneously. Affects many teams using LiteLLM as AI gateway proxy. Maps to 'LiteLLM' approved category.

## Quick fixes

1. Confirm the exact error signature matches `"model not found" error when setting ANTHROPIC_BASE_URL but forgetting to map all three model slots (Haiku, Sonnet, Opus)`.
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

- https://techsy.io/en/blog/claude-code-use-different-models

Evidence note: Techsy.io blog documents the most common LiteLLM/Claude Code integration error: Claude Code internally uses three separate model slots (Haiku for background tasks, Sonnet for default coding, Opus for complex reasoning). Changing only ONE slot via /model command still causes remaining two slots to fail with 'model not found'. Requires all three ANTHROPIC_DEFAULT_*_MODEL env vars to be set simultaneously. Affects many teams using LiteLLM as AI gateway proxy. Maps to 'LiteLLM' approved category.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `"model not found" error when setting ANTHROPIC_BASE_URL but forgetting to map all three model slots (Haiku, Sonnet, Opus)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"model not found" error when setting ANTHROPIC_BASE_URL but forgetting to map all three model slots (Haiku, Sonnet, Opus)`.
