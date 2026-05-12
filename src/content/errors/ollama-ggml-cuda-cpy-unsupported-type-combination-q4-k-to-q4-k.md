---
title: "Ollama CUDA Backend Crash on RTX 50-Series (Blackwell) with Q4_K_M Models"
description: "Fix Ollama ggml_cuda_cpy crash on RTX 50-series Blackwell GPUs Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "ggml_cuda_cpy: unsupported type combination (q4_K to q4_K)"
common_causes:
  - "Users with RTX 50-series (Blackwell, compute 12.0) GPUs cannot run any Q4_K_M GGUF models in Ollama. The CUDA backend fails immediately with 'unsupported type combination' error. Affects the latest GPU generation with no workaround except forcing Vulkan backend."
  - "GitHub issue (updated 2026-05-03). Loading any Q4_K_M GGUF model crashes on RTX 50-series (Blackwell, compute 12.0). ggml_cuda_cpy unsupported type combination. Runner exits with 500. Workaround: force Vulkan backend via OLLAMA_LLM_LIBRARY."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama GGML_ASSERT failed on CUDA"
  - "Ollama Blackwell GPU compatibility"
updated: "2026-05-12"
published_at: "2026-05-12T15:12:16.977Z"
updated_at: "2026-05-12T15:12:16.977Z"
---

## What this error means

`ggml_cuda_cpy: unsupported type combination (q4_K to q4_K)` is a Ollama failure pattern reported for developers trying to fix ollama ggml_cuda_cpy crash on rtx 50-series blackwell gpus. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue (updated 2026-05-03). Loading any Q4_K_M GGUF model crashes on RTX 50-series (Blackwell, compute 12.0). ggml_cuda_cpy unsupported type combination. Runner exits with 500. Workaround: force Vulkan backend via OLLAMA_LLM_LIBRARY.

## Common causes

- Users with RTX 50-series (Blackwell, compute 12.0) GPUs cannot run any Q4_K_M GGUF models in Ollama. The CUDA backend fails immediately with 'unsupported type combination' error. Affects the latest GPU generation with no workaround except forcing Vulkan backend.
- GitHub issue (updated 2026-05-03). Loading any Q4_K_M GGUF model crashes on RTX 50-series (Blackwell, compute 12.0). ggml_cuda_cpy unsupported type combination. Runner exits with 500. Workaround: force Vulkan backend via OLLAMA_LLM_LIBRARY.

## Quick fixes

1. Confirm the exact error signature matches `ggml_cuda_cpy: unsupported type combination (q4_K to q4_K)`.
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

- https://github.com/ollama/ollama/issues/15939

Evidence note: GitHub issue (updated 2026-05-03). Loading any Q4_K_M GGUF model crashes on RTX 50-series (Blackwell, compute 12.0). ggml_cuda_cpy unsupported type combination. Runner exits with 500. Workaround: force Vulkan backend via OLLAMA_LLM_LIBRARY.

## Related errors

- Ollama GGML_ASSERT failed on CUDA
- Ollama Blackwell GPU compatibility

## FAQ

### What should I check first?

Start with the exact `ggml_cuda_cpy: unsupported type combination (q4_K to q4_K)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ggml_cuda_cpy: unsupported type combination (q4_K to q4_K)`.
