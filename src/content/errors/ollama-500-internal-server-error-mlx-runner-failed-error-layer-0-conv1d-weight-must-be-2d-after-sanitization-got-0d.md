---
title: "Ollama MLX Runner Failed - conv1d Weight Dimension Error on macOS"
description: "Fix Ollama MLX runner failed error with conv1d weight dimension mismatch on macOS Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "500 internal server error: mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d"
common_causes:
  - "Ollama v0.23.1 on macOS with Apple Silicon fails when running certain models (e.g., qwen3.6:27b-coding-mxfp8) with 'mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d'. Reverting to v0.23.0 resolves the issue."
  - "GitHub issue #16007 in ollama/ollama. Exact error message with version-specific reproduction (v0.23.1 only). Affects macOS Apple Silicon users running coding models."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama MLX error macOS"
  - "Ollama qwen model failed"
  - "Ollama Apple Silicon runner error"
updated: "2026-05-11"
---

## What this error means

`500 internal server error: mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d` is a Ollama failure pattern reported for developers trying to fix ollama mlx runner failed error with conv1d weight dimension mismatch on macos. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #16007 in ollama/ollama. Exact error message with version-specific reproduction (v0.23.1 only). Affects macOS Apple Silicon users running coding models.

## Common causes

- Ollama v0.23.1 on macOS with Apple Silicon fails when running certain models (e.g., qwen3.6:27b-coding-mxfp8) with 'mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d'. Reverting to v0.23.0 resolves the issue.
- GitHub issue #16007 in ollama/ollama. Exact error message with version-specific reproduction (v0.23.1 only). Affects macOS Apple Silicon users running coding models.

## Quick fixes

1. Confirm the exact error signature matches `500 internal server error: mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d`.
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

- https://github.com/ollama/ollama/issues/16007

Evidence note: GitHub issue #16007 in ollama/ollama. Exact error message with version-specific reproduction (v0.23.1 only). Affects macOS Apple Silicon users running coding models.

## Related errors

- Ollama MLX error macOS
- Ollama qwen model failed
- Ollama Apple Silicon runner error

## FAQ

### What should I check first?

Start with the exact `500 internal server error: mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `500 internal server error: mlx runner failed: error: layer 0: conv1d weight must be 2d after sanitization, got 0d`.
