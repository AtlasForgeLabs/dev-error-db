---
title: "LiteLLM 400 Error with Codex CLI and Domestic LLM Models"
description: "Fix 400 error when using LiteLLM with Codex CLI and Chinese/domestic LLM models Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "400 Bad Request — unsupported parameter passed to model API"
common_causes:
  - "Developers using OpenAI Codex CLI (v0.130.0) with LiteLLM proxy and Chinese/domestic LLM models get 400 errors because LiteLLM's protocol translation layer passes Codex-specific parameters (client_metadata, reasoning_effort, coding_plan, parallel_tool_calls) that domestic models don't support."
  - "OpenAI Codex CLI uses Responses API protocol; domestic Chinese models only support Chat Completions API. LiteLLM's protocol translation passes unsupported fields (client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include, prompt_cache_key), causing 400 errors. Fix requires parameter filtering per model type."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API invalid parameter error"
  - "LiteLLM model routing error"
  - "Codex CLI API compatibility issue"
updated: "2026-05-12"
published_at: "2026-05-12T18:12:17.661Z"
updated_at: "2026-05-12T18:12:17.661Z"
---

## What this error means

`400 Bad Request — unsupported parameter passed to model API` is a LiteLLM failure pattern reported for developers trying to fix 400 error when using litellm with codex cli and chinese/domestic llm models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

OpenAI Codex CLI uses Responses API protocol; domestic Chinese models only support Chat Completions API. LiteLLM's protocol translation passes unsupported fields (client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include, prompt_cache_key), causing 400 errors. Fix requires parameter filtering per model type.

## Common causes

- Developers using OpenAI Codex CLI (v0.130.0) with LiteLLM proxy and Chinese/domestic LLM models get 400 errors because LiteLLM's protocol translation layer passes Codex-specific parameters (client_metadata, reasoning_effort, coding_plan, parallel_tool_calls) that domestic models don't support.
- OpenAI Codex CLI uses Responses API protocol; domestic Chinese models only support Chat Completions API. LiteLLM's protocol translation passes unsupported fields (client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include, prompt_cache_key), causing 400 errors. Fix requires parameter filtering per model type.

## Quick fixes

1. Confirm the exact error signature matches `400 Bad Request — unsupported parameter passed to model API`.
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

- https://github.com/BerriAI/litellm/pull/27604

Evidence note: OpenAI Codex CLI uses Responses API protocol; domestic Chinese models only support Chat Completions API. LiteLLM's protocol translation passes unsupported fields (client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include, prompt_cache_key), causing 400 errors. Fix requires parameter filtering per model type.

## Related errors

- OpenAI API invalid parameter error
- LiteLLM model routing error
- Codex CLI API compatibility issue

## FAQ

### What should I check first?

Start with the exact `400 Bad Request — unsupported parameter passed to model API` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400 Bad Request — unsupported parameter passed to model API`.
