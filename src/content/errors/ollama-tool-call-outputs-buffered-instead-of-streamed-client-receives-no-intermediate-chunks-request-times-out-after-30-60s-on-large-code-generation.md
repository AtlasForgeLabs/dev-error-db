---
title: "Tool calling not streaming on macOS MLX backend causing client timeouts"
description: "Fix MLX backend tool call streaming on macOS so clients don't timeout during long tool outputs (e.g., 500+ line code files) Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Tool call outputs buffered instead of streamed; client receives no intermediate chunks; request times out after 30-60s on large code generation"
common_causes:
  - "GitHub Issue #16279 on ollama/ollama filed May 24, 2026. macOS Apple Silicon with MLX backend vs CUDA working correctly. Model: qwen3.6:27b-coding-nvfp4. Critical for agent workflows where tool calls generate large code. Not a regression — behavior mismatch between backends. High impact on developer productivity and AI coding assistant reliability."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-24"
published_at: "2026-05-24T14:43:10.831Z"
updated_at: "2026-05-24T14:43:10.831Z"
---

## What this error means

`Tool call outputs buffered instead of streamed; client receives no intermediate chunks; request times out after 30-60s on large code generation` is a Ollama failure pattern reported for developers trying to fix mlx backend tool call streaming on macos so clients don't timeout during long tool outputs (e.g., 500+ line code files). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #16279 on ollama/ollama filed May 24, 2026. macOS Apple Silicon with MLX backend vs CUDA working correctly. Model: qwen3.6:27b-coding-nvfp4. Critical for agent workflows where tool calls generate large code. Not a regression — behavior mismatch between backends. High impact on developer productivity and AI coding assistant reliability.

## Common causes

- GitHub Issue #16279 on ollama/ollama filed May 24, 2026. macOS Apple Silicon with MLX backend vs CUDA working correctly. Model: qwen3.6:27b-coding-nvfp4. Critical for agent workflows where tool calls generate large code. Not a regression — behavior mismatch between backends. High impact on developer productivity and AI coding assistant reliability.

## Quick fixes

1. Confirm the exact error signature matches `Tool call outputs buffered instead of streamed; client receives no intermediate chunks; request times out after 30-60s on large code generation`.
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

- https://api.github.com/repos/ollama/ollama/issues/16279

Evidence note: GitHub Issue #16279 on ollama/ollama filed May 24, 2026. macOS Apple Silicon with MLX backend vs CUDA working correctly. Model: qwen3.6:27b-coding-nvfp4. Critical for agent workflows where tool calls generate large code. Not a regression — behavior mismatch between backends. High impact on developer productivity and AI coding assistant reliability.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Tool call outputs buffered instead of streamed; client receives no intermediate chunks; request times out after 30-60s on large code generation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Tool call outputs buffered instead of streamed; client receives no intermediate chunks; request times out after 30-60s on large code generation`.
