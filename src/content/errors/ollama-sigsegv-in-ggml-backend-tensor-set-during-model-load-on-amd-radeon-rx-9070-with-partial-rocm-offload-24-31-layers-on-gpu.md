---
title: "Ollama AMD Radeon RX 9070 segfaults during partial offload model load"
description: "Fix segfault crash when loading models that exceed VRAM and require partial GPU offload on RDNA4 GPUs Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "SIGSEGV in ggml_backend_tensor_set during model load on AMD Radeon RX 9070 with partial ROCm offload (24/31 layers on GPU)"
common_causes:
  - "GitHub issue ollama/ollama#16261. gemma4:26b (Q4_K_M) crashes with SIGSEGV during partial offload on AMD RX 9070 (gfx1201, 16GB VRAM). Model weights 16.6 GiB vs ~13-14 GiB available after driver reservation. Crash occurs within seconds of load start. Direct segfault — not graceful error handling. Category: Ollama."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-25"
published_at: "2026-05-25T23:43:15.240Z"
updated_at: "2026-05-25T23:43:15.240Z"
---

## What this error means

`SIGSEGV in ggml_backend_tensor_set during model load on AMD Radeon RX 9070 with partial ROCm offload (24/31 layers on GPU)` is a Ollama failure pattern reported for developers trying to fix segfault crash when loading models that exceed vram and require partial gpu offload on rdna4 gpus. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue ollama/ollama#16261. gemma4:26b (Q4_K_M) crashes with SIGSEGV during partial offload on AMD RX 9070 (gfx1201, 16GB VRAM). Model weights 16.6 GiB vs ~13-14 GiB available after driver reservation. Crash occurs within seconds of load start. Direct segfault — not graceful error handling. Category: Ollama.

## Common causes

- GitHub issue ollama/ollama#16261. gemma4:26b (Q4_K_M) crashes with SIGSEGV during partial offload on AMD RX 9070 (gfx1201, 16GB VRAM). Model weights 16.6 GiB vs ~13-14 GiB available after driver reservation. Crash occurs within seconds of load start. Direct segfault — not graceful error handling. Category: Ollama.

## Quick fixes

1. Confirm the exact error signature matches `SIGSEGV in ggml_backend_tensor_set during model load on AMD Radeon RX 9070 with partial ROCm offload (24/31 layers on GPU)`.
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

- https://github.com/ollama/ollama/issues/16261

Evidence note: GitHub issue ollama/ollama#16261. gemma4:26b (Q4_K_M) crashes with SIGSEGV during partial offload on AMD RX 9070 (gfx1201, 16GB VRAM). Model weights 16.6 GiB vs ~13-14 GiB available after driver reservation. Crash occurs within seconds of load start. Direct segfault — not graceful error handling. Category: Ollama.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `SIGSEGV in ggml_backend_tensor_set during model load on AMD Radeon RX 9070 with partial ROCm offload (24/31 layers on GPU)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SIGSEGV in ggml_backend_tensor_set during model load on AMD Radeon RX 9070 with partial ROCm offload (24/31 layers on GPU)`.
