---
title: "LiteLLM Codex CLI returns 400 error with Chinese models due to unsupported protocol parameters"
description: "Fix LiteLLM returning 400 errors when using OpenAI Codex CLI with Chinese domestic models via protocol translation Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "400 Bad Request — LiteLLM passes unsupported parameters to Chinese models for Codex CLI"
common_causes:
  - "OpenAI Codex CLI uses the Responses API protocol, but Chinese domestic models only support Chat Completions API. LiteLLM's protocol translation layer passes parameters that domestic models don't support (client_metadata, reasoning_effort, parallel_tool_calls, etc.), causing 400 errors"
  - "LiteLLM PR #27604 (created 2026-05-10, 5 comments). Codex CLI 0.130.0 passes unsupported fields to Chinese models via LiteLLM's protocol translation: client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include. Results in 400 Bad Request."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM 400 error with Chinese models"
  - "Codex CLI not working with non-OpenAI models"
  - "LiteLLM Responses API compatibility issue"
updated: "2026-05-12"
published_at: "2026-05-12T19:12:17.878Z"
updated_at: "2026-05-12T19:12:17.878Z"
---

## What this error means

`400 Bad Request — LiteLLM passes unsupported parameters to Chinese models for Codex CLI` is a LiteLLM failure pattern reported for developers trying to fix litellm returning 400 errors when using openai codex cli with chinese domestic models via protocol translation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM PR #27604 (created 2026-05-10, 5 comments). Codex CLI 0.130.0 passes unsupported fields to Chinese models via LiteLLM's protocol translation: client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include. Results in 400 Bad Request.

## Common causes

- OpenAI Codex CLI uses the Responses API protocol, but Chinese domestic models only support Chat Completions API. LiteLLM's protocol translation layer passes parameters that domestic models don't support (client_metadata, reasoning_effort, parallel_tool_calls, etc.), causing 400 errors
- LiteLLM PR #27604 (created 2026-05-10, 5 comments). Codex CLI 0.130.0 passes unsupported fields to Chinese models via LiteLLM's protocol translation: client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include. Results in 400 Bad Request.

## Quick fixes

1. Confirm the exact error signature matches `400 Bad Request — LiteLLM passes unsupported parameters to Chinese models for Codex CLI`.
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

Evidence note: LiteLLM PR #27604 (created 2026-05-10, 5 comments). Codex CLI 0.130.0 passes unsupported fields to Chinese models via LiteLLM's protocol translation: client_metadata, reasoning_effort, reasoning, coding_plan, parallel_tool_calls, stream_options, modalities, prediction, audio, store, include. Results in 400 Bad Request.

## Related errors

- LiteLLM 400 error with Chinese models
- Codex CLI not working with non-OpenAI models
- LiteLLM Responses API compatibility issue

## FAQ

### What should I check first?

Start with the exact `400 Bad Request — LiteLLM passes unsupported parameters to Chinese models for Codex CLI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400 Bad Request — LiteLLM passes unsupported parameters to Chinese models for Codex CLI`.
