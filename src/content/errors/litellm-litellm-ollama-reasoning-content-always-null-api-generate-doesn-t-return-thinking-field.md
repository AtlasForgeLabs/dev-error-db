---
title: "LiteLLM Ollama Reasoning Content Always Null — /api/generate Missing Thinking Field"
description: "Fix LiteLLM not capturing reasoning/thinking content from Ollama models like Qwen3 and DeepSeek-R1 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM Ollama reasoning_content always null — /api/generate doesn't return thinking field"
common_causes:
  - "LiteLLM always calls Ollama's /api/generate which doesn't return a thinking field. Reasoning models (Qwen3, DeepSeek-R1) generate internal reasoning that is lost. /api/chat returns thinking correctly but LiteLLM uses /api/generate."
  - "LiteLLM 1.83.10 hardcodes /api/generate endpoint for Ollama. /api/generate returns {response: '...', context: [...]} without thinking field. /api/chat returns thinking correctly. reasoning_content always None."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama thinking field not returned"
  - "LiteLLM Ollama reasoning model support"
  - "Ollama /api/chat vs /api/generate difference"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`LiteLLM Ollama reasoning_content always null — /api/generate doesn't return thinking field` is a LiteLLM failure pattern reported for developers trying to fix litellm not capturing reasoning/thinking content from ollama models like qwen3 and deepseek-r1. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM 1.83.10 hardcodes /api/generate endpoint for Ollama. /api/generate returns {response: '...', context: [...]} without thinking field. /api/chat returns thinking correctly. reasoning_content always None.

## Common causes

- LiteLLM always calls Ollama's /api/generate which doesn't return a thinking field. Reasoning models (Qwen3, DeepSeek-R1) generate internal reasoning that is lost. /api/chat returns thinking correctly but LiteLLM uses /api/generate.
- LiteLLM 1.83.10 hardcodes /api/generate endpoint for Ollama. /api/generate returns {response: '...', context: [...]} without thinking field. /api/chat returns thinking correctly. reasoning_content always None.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM Ollama reasoning_content always null — /api/generate doesn't return thinking field`.
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

- https://github.com/BerriAI/litellm/issues/27956

Evidence note: LiteLLM 1.83.10 hardcodes /api/generate endpoint for Ollama. /api/generate returns {response: '...', context: [...]} without thinking field. /api/chat returns thinking correctly. reasoning_content always None.

## Related errors

- Ollama thinking field not returned
- LiteLLM Ollama reasoning model support
- Ollama /api/chat vs /api/generate difference

## FAQ

### What should I check first?

Start with the exact `LiteLLM Ollama reasoning_content always null — /api/generate doesn't return thinking field` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM Ollama reasoning_content always null — /api/generate doesn't return thinking field`.
