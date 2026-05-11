---
title: "LiteLLM Chat Completions to Responses API Bridge tool_choice 400 Error"
description: "Fix LiteLLM 400 error when using tool_choice named function format with GPT-5.4/5.5 models Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "400 Bad Request - tool_choice named function format"
common_causes:
  - "Calling GPT-5.4 or GPT-5.5 through LiteLLM's Chat Completions endpoint with named tool_choice (type: function, function: {name: ...}) causes a 400 error because LiteLLM's bridge to the Responses API passes the parameter incorrectly."
  - "GitHub issue #27611 in BerriAI/litellm. Affects all GPT-5.4 and GPT-5.5 models through LiteLLM's Chat Completions → Responses API bridge."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM tool use error OpenAI"
  - "LiteLLM function calling 400"
  - "OpenAI Responses API tool_choice error"
updated: "2026-05-11"
---

## What this error means

`400 Bad Request - tool_choice named function format` is a LiteLLM failure pattern reported for developers trying to fix litellm 400 error when using tool_choice named function format with gpt-5.4/5.5 models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #27611 in BerriAI/litellm. Affects all GPT-5.4 and GPT-5.5 models through LiteLLM's Chat Completions → Responses API bridge.

## Common causes

- Calling GPT-5.4 or GPT-5.5 through LiteLLM's Chat Completions endpoint with named tool_choice (type: function, function: {name: ...}) causes a 400 error because LiteLLM's bridge to the Responses API passes the parameter incorrectly.
- GitHub issue #27611 in BerriAI/litellm. Affects all GPT-5.4 and GPT-5.5 models through LiteLLM's Chat Completions → Responses API bridge.

## Quick fixes

1. Confirm the exact error signature matches `400 Bad Request - tool_choice named function format`.
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

- https://github.com/BerriAI/litellm/issues/27611

Evidence note: GitHub issue #27611 in BerriAI/litellm. Affects all GPT-5.4 and GPT-5.5 models through LiteLLM's Chat Completions → Responses API bridge.

## Related errors

- LiteLLM tool use error OpenAI
- LiteLLM function calling 400
- OpenAI Responses API tool_choice error

## FAQ

### What should I check first?

Start with the exact `400 Bad Request - tool_choice named function format` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400 Bad Request - tool_choice named function format`.
