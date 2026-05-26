---
title: "Ollama Cloud model tag -cloud stripped during run and API calls on Windows"
description: "Fix Ollama Cloud model tags being truncated (removing -cloud suffix) causing model-not-found errors when running cloud models via CLI/API Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: model 'leckminartor/qwen3.5-uncensored:397b' not found"
common_causes:
  - "Found in ollama/ollama GitHub issues #16314 (opened today 2026-05-26). When using Ollama Pro Cloud on Windows, ollama pull correctly registers tags like :397b-cloud, but ollama run and /api/chat strip the -cloud suffix, resulting in model-not-found. Affects Ollama Pro paid users specifically. Works around via Modelfile alias. Category mapping: Ollama local LLM serving error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-26"
published_at: "2026-05-26T15:43:17.231Z"
updated_at: "2026-05-26T15:43:17.231Z"
---

## What this error means

`Error: model 'leckminartor/qwen3.5-uncensored:397b' not found` is a Ollama failure pattern reported for developers trying to fix ollama cloud model tags being truncated (removing -cloud suffix) causing model-not-found errors when running cloud models via cli/api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in ollama/ollama GitHub issues #16314 (opened today 2026-05-26). When using Ollama Pro Cloud on Windows, ollama pull correctly registers tags like :397b-cloud, but ollama run and /api/chat strip the -cloud suffix, resulting in model-not-found. Affects Ollama Pro paid users specifically. Works around via Modelfile alias. Category mapping: Ollama local LLM serving error.

## Common causes

- Found in ollama/ollama GitHub issues #16314 (opened today 2026-05-26). When using Ollama Pro Cloud on Windows, ollama pull correctly registers tags like :397b-cloud, but ollama run and /api/chat strip the -cloud suffix, resulting in model-not-found. Affects Ollama Pro paid users specifically. Works around via Modelfile alias. Category mapping: Ollama local LLM serving error.

## Quick fixes

1. Confirm the exact error signature matches `Error: model 'leckminartor/qwen3.5-uncensored:397b' not found`.
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

- https://github.com/ollama/ollama/issues/16314

Evidence note: Found in ollama/ollama GitHub issues #16314 (opened today 2026-05-26). When using Ollama Pro Cloud on Windows, ollama pull correctly registers tags like :397b-cloud, but ollama run and /api/chat strip the -cloud suffix, resulting in model-not-found. Affects Ollama Pro paid users specifically. Works around via Modelfile alias. Category mapping: Ollama local LLM serving error.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: model 'leckminartor/qwen3.5-uncensored:397b' not found` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: model 'leckminartor/qwen3.5-uncensored:397b' not found`.
