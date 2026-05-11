---
title: "LiteLLM gpt-4o-transcribe-diarize chunking_strategy Required Error"
description: "Fix LiteLLM 400 error requiring chunking_strategy for gpt-4o-transcribe-diarize model Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "400 litellm.BadRequestError: OpenAIException - chunking_strategy is required for diarization models"
common_causes:
  - "Using OpenAI's gpt-4o-transcribe-diarize model through LiteLLM returns a 400 BadRequestError stating 'chunking_strategy is required for diarization models'. Developers need to know how to pass this parameter correctly through LiteLLM."
  - "GitHub issue #18125 in BerriAI/litellm with exact error message and model group context. Affects OpenAI diarization models via LiteLLM proxy."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM OpenAI transcription error"
  - "OpenAI gpt-4o-transcribe error"
  - "LiteLLM audio model 400 error"
updated: "2026-05-11"
---

## What this error means

`400 litellm.BadRequestError: OpenAIException - chunking_strategy is required for diarization models` is a LiteLLM failure pattern reported for developers trying to fix litellm 400 error requiring chunking_strategy for gpt-4o-transcribe-diarize model. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #18125 in BerriAI/litellm with exact error message and model group context. Affects OpenAI diarization models via LiteLLM proxy.

## Common causes

- Using OpenAI's gpt-4o-transcribe-diarize model through LiteLLM returns a 400 BadRequestError stating 'chunking_strategy is required for diarization models'. Developers need to know how to pass this parameter correctly through LiteLLM.
- GitHub issue #18125 in BerriAI/litellm with exact error message and model group context. Affects OpenAI diarization models via LiteLLM proxy.

## Quick fixes

1. Confirm the exact error signature matches `400 litellm.BadRequestError: OpenAIException - chunking_strategy is required for diarization models`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/BerriAI/litellm/issues/18125

Evidence note: GitHub issue #18125 in BerriAI/litellm with exact error message and model group context. Affects OpenAI diarization models via LiteLLM proxy.

## Related errors

- LiteLLM OpenAI transcription error
- OpenAI gpt-4o-transcribe error
- LiteLLM audio model 400 error

## FAQ

### What should I check first?

Start with the exact `400 litellm.BadRequestError: OpenAIException - chunking_strategy is required for diarization models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400 litellm.BadRequestError: OpenAIException - chunking_strategy is required for diarization models`.
