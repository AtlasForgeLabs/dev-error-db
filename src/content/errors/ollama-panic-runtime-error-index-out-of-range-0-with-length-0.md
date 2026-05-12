---
title: "Ollama Image Generation Panics on macOS 0.23.1 — Z-Image MLX Runner Bug"
description: "Fix Ollama image generation panic and segfault after upgrading to 0.23.1 on macOS Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "panic: runtime error: index out of range [0] with length 0"
common_causes:
  - "Ollama's experimental image generation feature crashes with panic and segfault after 0.23.1 upgrade. Users upgrading from 0.22.1 (where it worked) lose image generation capability entirely."
  - "Ollama image generation on macOS broken in 0.23.1. Panic: 'index out of range [0] with length 0' in GroupNormLayer.Forward (zimage/vae.go:48), followed by segfault in ArrayToImage/EncodeImageBase64. Worked in 0.22.1. 5 comments confirm."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama MLX runner crash"
  - "Ollama image generation not working"
  - "Ollama z-image model error"
updated: "2026-05-12"
published_at: "2026-05-12T06:10:49.195Z"
updated_at: "2026-05-12T06:10:49.195Z"
---

## What this error means

`panic: runtime error: index out of range [0] with length 0` is a Ollama failure pattern reported for developers trying to fix ollama image generation panic and segfault after upgrading to 0.23.1 on macos. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Ollama image generation on macOS broken in 0.23.1. Panic: 'index out of range [0] with length 0' in GroupNormLayer.Forward (zimage/vae.go:48), followed by segfault in ArrayToImage/EncodeImageBase64. Worked in 0.22.1. 5 comments confirm.

## Common causes

- Ollama's experimental image generation feature crashes with panic and segfault after 0.23.1 upgrade. Users upgrading from 0.22.1 (where it worked) lose image generation capability entirely.
- Ollama image generation on macOS broken in 0.23.1. Panic: 'index out of range [0] with length 0' in GroupNormLayer.Forward (zimage/vae.go:48), followed by segfault in ArrayToImage/EncodeImageBase64. Worked in 0.22.1. 5 comments confirm.

## Quick fixes

1. Confirm the exact error signature matches `panic: runtime error: index out of range [0] with length 0`.
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

- https://github.com/ollama/ollama/issues/15995

Evidence note: Ollama image generation on macOS broken in 0.23.1. Panic: 'index out of range [0] with length 0' in GroupNormLayer.Forward (zimage/vae.go:48), followed by segfault in ArrayToImage/EncodeImageBase64. Worked in 0.22.1. 5 comments confirm.

## Related errors

- Ollama MLX runner crash
- Ollama image generation not working
- Ollama z-image model error

## FAQ

### What should I check first?

Start with the exact `panic: runtime error: index out of range [0] with length 0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `panic: runtime error: index out of range [0] with length 0`.
