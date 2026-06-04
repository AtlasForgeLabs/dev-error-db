---
title: "LiteLLM GPT-5.4 tool calls with reasoning_effort fail"
description: "Fix incompatible combination of function tool calls and reasoning_effort parameter when routing through LiteLLM proxy to OpenAI GPT-5.4 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Function tools with reasoning_effort set fails through openai-agents SDK via LiteLLM proxy: 'Function tools with reasoning are not supported'"
common_causes:
  - "Found via GitHub API on BerriAI/litellm repo (#23156, created 2026-03-09). Error occurs when using openai-agents SDK with OpenAI GPT-5.4 + function tools + reasoning_effort='low'. P1 technology, blocking production AI workflow when teams use reasoning models with tool calling. Not in covered-errors list."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-04"
published_at: "2026-06-04T14:44:36.138Z"
updated_at: "2026-06-04T14:44:36.138Z"
---

## What this error means

`Function tools with reasoning_effort set fails through openai-agents SDK via LiteLLM proxy: 'Function tools with reasoning are not supported'` is a LiteLLM failure pattern reported for developers trying to fix incompatible combination of function tool calls and reasoning_effort parameter when routing through litellm proxy to openai gpt-5.4. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub API on BerriAI/litellm repo (#23156, created 2026-03-09). Error occurs when using openai-agents SDK with OpenAI GPT-5.4 + function tools + reasoning_effort='low'. P1 technology, blocking production AI workflow when teams use reasoning models with tool calling. Not in covered-errors list.

## Common causes

- Found via GitHub API on BerriAI/litellm repo (#23156, created 2026-03-09). Error occurs when using openai-agents SDK with OpenAI GPT-5.4 + function tools + reasoning_effort='low'. P1 technology, blocking production AI workflow when teams use reasoning models with tool calling. Not in covered-errors list.

## Quick fixes

1. Confirm the exact error signature matches `Function tools with reasoning_effort set fails through openai-agents SDK via LiteLLM proxy: 'Function tools with reasoning are not supported'`.
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

- https://github.com/BerriAI/litellm/issues/23156

Evidence note: Found via GitHub API on BerriAI/litellm repo (#23156, created 2026-03-09). Error occurs when using openai-agents SDK with OpenAI GPT-5.4 + function tools + reasoning_effort='low'. P1 technology, blocking production AI workflow when teams use reasoning models with tool calling. Not in covered-errors list.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Function tools with reasoning_effort set fails through openai-agents SDK via LiteLLM proxy: 'Function tools with reasoning are not supported'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Function tools with reasoning_effort set fails through openai-agents SDK via LiteLLM proxy: 'Function tools with reasoning are not supported'`.
