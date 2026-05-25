---
title: "Inverted VRAM / KV Cache Estimation Logic for Qwen 3.6 and Gemma 4 Architectures on Multi-GPU Platform"
description: "Fix Ollama VRAM underestimation that causes API 500 crashes during long-context inference with large models (Qwen 3.6, Gemma 4) on multi-GPU ROCm setups Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "API Error 500 (runner unexpectedly stopped) — deterministic OOM crash when num_ctx ≥ 75k tokens on multi-GPU AMD ROCm setup"
common_causes:
  - "Source: github.com/ollama/ollama/issues/16310. Specific VRAM estimation anomaly where larger models allocate less static VRAM than smaller ones, leading to deterministic OOM crashes at ~75k prompt tokens. Affects production RAG workflows using LlamaIndex tree_summarize mode."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-25"
published_at: "2026-05-25T22:43:15.060Z"
updated_at: "2026-05-25T22:43:15.060Z"
---

## What this error means

`API Error 500 (runner unexpectedly stopped) — deterministic OOM crash when num_ctx ≥ 75k tokens on multi-GPU AMD ROCm setup` is a Ollama failure pattern reported for developers trying to fix ollama vram underestimation that causes api 500 crashes during long-context inference with large models (qwen 3.6, gemma 4) on multi-gpu rocm setups. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/ollama/ollama/issues/16310. Specific VRAM estimation anomaly where larger models allocate less static VRAM than smaller ones, leading to deterministic OOM crashes at ~75k prompt tokens. Affects production RAG workflows using LlamaIndex tree_summarize mode.

## Common causes

- Source: github.com/ollama/ollama/issues/16310. Specific VRAM estimation anomaly where larger models allocate less static VRAM than smaller ones, leading to deterministic OOM crashes at ~75k prompt tokens. Affects production RAG workflows using LlamaIndex tree_summarize mode.

## Quick fixes

1. Confirm the exact error signature matches `API Error 500 (runner unexpectedly stopped) — deterministic OOM crash when num_ctx ≥ 75k tokens on multi-GPU AMD ROCm setup`.
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

- https://github.com/ollama/ollama/issues/16310

Evidence note: Source: github.com/ollama/ollama/issues/16310. Specific VRAM estimation anomaly where larger models allocate less static VRAM than smaller ones, leading to deterministic OOM crashes at ~75k prompt tokens. Affects production RAG workflows using LlamaIndex tree_summarize mode.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `API Error 500 (runner unexpectedly stopped) — deterministic OOM crash when num_ctx ≥ 75k tokens on multi-GPU AMD ROCm setup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error 500 (runner unexpectedly stopped) — deterministic OOM crash when num_ctx ≥ 75k tokens on multi-GPU AMD ROCm setup`.
