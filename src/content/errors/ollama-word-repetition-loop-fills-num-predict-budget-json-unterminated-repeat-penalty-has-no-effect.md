---
title: "Ollama gemma4 repetition loop during constrained JSON generation"
description: "Fix Ollama gemma4 repetition loop when generating structured JSON with format parameter Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Word repetition loop fills num_predict budget, JSON unterminated — repeat_penalty has no effect"
common_causes:
  - "Ollama issue #15502: gemma4:31b enters word-repetition loops during constrained JSON generation with free-text string fields. repeat_penalty parameter has no effect at any value (1.0, 1.15, 1.5). Bug rate 60-100% across 39 trials. Three conditions required: gemma4 dense model, format= with JSON schema, free-text string fields. Category mapped to Ollama per approved list."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-15"
published_at: "2026-05-15T23:13:23.885Z"
updated_at: "2026-05-15T23:13:23.885Z"
---

## What this error means

`Word repetition loop fills num_predict budget, JSON unterminated — repeat_penalty has no effect` is a Ollama failure pattern reported for developers trying to fix ollama gemma4 repetition loop when generating structured json with format parameter. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Ollama issue #15502: gemma4:31b enters word-repetition loops during constrained JSON generation with free-text string fields. repeat_penalty parameter has no effect at any value (1.0, 1.15, 1.5). Bug rate 60-100% across 39 trials. Three conditions required: gemma4 dense model, format= with JSON schema, free-text string fields. Category mapped to Ollama per approved list.

## Common causes

- Ollama issue #15502: gemma4:31b enters word-repetition loops during constrained JSON generation with free-text string fields. repeat_penalty parameter has no effect at any value (1.0, 1.15, 1.5). Bug rate 60-100% across 39 trials. Three conditions required: gemma4 dense model, format= with JSON schema, free-text string fields. Category mapped to Ollama per approved list.

## Quick fixes

1. Confirm the exact error signature matches `Word repetition loop fills num_predict budget, JSON unterminated — repeat_penalty has no effect`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/ollama/ollama/issues/15502

Evidence note: Ollama issue #15502: gemma4:31b enters word-repetition loops during constrained JSON generation with free-text string fields. repeat_penalty parameter has no effect at any value (1.0, 1.15, 1.5). Bug rate 60-100% across 39 trials. Three conditions required: gemma4 dense model, format= with JSON schema, free-text string fields. Category mapped to Ollama per approved list.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Word repetition loop fills num_predict budget, JSON unterminated — repeat_penalty has no effect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Word repetition loop fills num_predict budget, JSON unterminated — repeat_penalty has no effect`.
