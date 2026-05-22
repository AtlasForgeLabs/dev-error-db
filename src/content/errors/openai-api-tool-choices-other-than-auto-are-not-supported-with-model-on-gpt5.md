---
title: "GPT5 Models | Tool choices other than auto are not supported with model"
description: "Fix error when specifying explicit tool_choice (e.g., 'required', 'none', or function name) with GPT-5 models, forcing fallback to auto mode Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Tool choices other than 'auto' are not supported with model on GPT5"
common_causes:
  - "GitHub Issue #2537 on openai/openai-python (opened Aug 9, 2025, by hayescode). GPT-5 models reject non-auto tool choices, breaking function calling patterns for developers who need deterministic tool invocation. 17 comments indicate active community engagement. High value: function calling is core to paid API usage."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-22"
published_at: "2026-05-22T01:39:46.234Z"
updated_at: "2026-05-22T01:39:46.234Z"
---

## What this error means

`Tool choices other than 'auto' are not supported with model on GPT5` is a OpenAI API failure pattern reported for developers trying to fix error when specifying explicit tool_choice (e.g., 'required', 'none', or function name) with gpt-5 models, forcing fallback to auto mode. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2537 on openai/openai-python (opened Aug 9, 2025, by hayescode). GPT-5 models reject non-auto tool choices, breaking function calling patterns for developers who need deterministic tool invocation. 17 comments indicate active community engagement. High value: function calling is core to paid API usage.

## Common causes

- GitHub Issue #2537 on openai/openai-python (opened Aug 9, 2025, by hayescode). GPT-5 models reject non-auto tool choices, breaking function calling patterns for developers who need deterministic tool invocation. 17 comments indicate active community engagement. High value: function calling is core to paid API usage.

## Quick fixes

1. Confirm the exact error signature matches `Tool choices other than 'auto' are not supported with model on GPT5`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/2537

Evidence note: GitHub Issue #2537 on openai/openai-python (opened Aug 9, 2025, by hayescode). GPT-5 models reject non-auto tool choices, breaking function calling patterns for developers who need deterministic tool invocation. 17 comments indicate active community engagement. High value: function calling is core to paid API usage.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Tool choices other than 'auto' are not supported with model on GPT5` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Tool choices other than 'auto' are not supported with model on GPT5`.
