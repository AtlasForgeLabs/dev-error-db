---
title: "Ollama llama runner cgo crash — exit status 2 on specific GPU/CUDA combos"
description: "Fix Ollama llama runner crash with 'signal arrived during cgo execution' on NVIDIA GPU Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "llama runner process has terminated: signal arrived during cgo execution"
common_causes:
  - "Ollama users with older NVIDIA GPUs (Maxwell architecture) and CUDA 13 drivers experience immediate crashes when loading Qwen2.5 14B models. The 7B models work fine, suggesting a backend compatibility issue with specific model sizes. Error surfaces as HTTP 500 with 'exit status 2' in Ollama logs."
  - "Fresh GitHub issue (#16102, created 2026-05-11) on ollama/ollama. GTX TITAN X (12 GB VRAM) + CUDA 13 + Ubuntu crashes on Qwen2.5 14B with 'llama runner process has terminated: signal arrived during cgo execution'. VRAM only reaches ~1 GB before crash, ruling out OOM. 7B models load fine on same hardware."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama GPU memory allocation failed"
  - "Ollama CUDA driver incompatibility"
  - "Ollama model pull fails with connection refused"
updated: "2026-05-11"
---

## What this error means

`llama runner process has terminated: signal arrived during cgo execution` is a Ollama failure pattern reported for developers trying to fix ollama llama runner crash with 'signal arrived during cgo execution' on nvidia gpu. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Fresh GitHub issue (#16102, created 2026-05-11) on ollama/ollama. GTX TITAN X (12 GB VRAM) + CUDA 13 + Ubuntu crashes on Qwen2.5 14B with 'llama runner process has terminated: signal arrived during cgo execution'. VRAM only reaches ~1 GB before crash, ruling out OOM. 7B models load fine on same hardware.

## Common causes

- Ollama users with older NVIDIA GPUs (Maxwell architecture) and CUDA 13 drivers experience immediate crashes when loading Qwen2.5 14B models. The 7B models work fine, suggesting a backend compatibility issue with specific model sizes. Error surfaces as HTTP 500 with 'exit status 2' in Ollama logs.
- Fresh GitHub issue (#16102, created 2026-05-11) on ollama/ollama. GTX TITAN X (12 GB VRAM) + CUDA 13 + Ubuntu crashes on Qwen2.5 14B with 'llama runner process has terminated: signal arrived during cgo execution'. VRAM only reaches ~1 GB before crash, ruling out OOM. 7B models load fine on same hardware.

## Quick fixes

1. Confirm the exact error signature matches `llama runner process has terminated: signal arrived during cgo execution`.
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

- https://github.com/ollama/ollama/issues/16102

Evidence note: Fresh GitHub issue (#16102, created 2026-05-11) on ollama/ollama. GTX TITAN X (12 GB VRAM) + CUDA 13 + Ubuntu crashes on Qwen2.5 14B with 'llama runner process has terminated: signal arrived during cgo execution'. VRAM only reaches ~1 GB before crash, ruling out OOM. 7B models load fine on same hardware.

## Related errors

- Ollama GPU memory allocation failed
- Ollama CUDA driver incompatibility
- Ollama model pull fails with connection refused

## FAQ

### What should I check first?

Start with the exact `llama runner process has terminated: signal arrived during cgo execution` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `llama runner process has terminated: signal arrived during cgo execution`.
