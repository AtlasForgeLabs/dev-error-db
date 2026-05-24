---
title: "Ollama MLX bf16 cold prefill is 60–400× slower than warm on Apple Silicon under memory pressure"
description: "Fix extreme slowdown in MLX backend on Macs when generating first tokens (cold prefill) despite sufficient memory — makes initial response unusably slow Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "MLX bf16 cold prefill is 60–400x slower than warm, even when peak memory fits in physical RAM"
common_causes:
  - "GitHub issue #16051 opened May 9, 2026 on ollama/ollama with label bug. Affects Apple Silicon users running Ollama via MLX runner. Extremely visible performance bug on popular hardware (MacBook, Mac Mini). Category is Ollama since this is specific to Ollama's implementation. 60-400x slowdown is dramatic enough to generate significant search traffic."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-24"
published_at: "2026-05-24T21:43:11.770Z"
updated_at: "2026-05-24T21:43:11.770Z"
---

## What this error means

`MLX bf16 cold prefill is 60–400x slower than warm, even when peak memory fits in physical RAM` is a Ollama failure pattern reported for developers trying to fix extreme slowdown in mlx backend on macs when generating first tokens (cold prefill) despite sufficient memory — makes initial response unusably slow. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #16051 opened May 9, 2026 on ollama/ollama with label bug. Affects Apple Silicon users running Ollama via MLX runner. Extremely visible performance bug on popular hardware (MacBook, Mac Mini). Category is Ollama since this is specific to Ollama's implementation. 60-400x slowdown is dramatic enough to generate significant search traffic.

## Common causes

- GitHub issue #16051 opened May 9, 2026 on ollama/ollama with label bug. Affects Apple Silicon users running Ollama via MLX runner. Extremely visible performance bug on popular hardware (MacBook, Mac Mini). Category is Ollama since this is specific to Ollama's implementation. 60-400x slowdown is dramatic enough to generate significant search traffic.

## Quick fixes

1. Confirm the exact error signature matches `MLX bf16 cold prefill is 60–400x slower than warm, even when peak memory fits in physical RAM`.
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

- https://github.com/ollama/ollama/issues/16051

Evidence note: GitHub issue #16051 opened May 9, 2026 on ollama/ollama with label bug. Affects Apple Silicon users running Ollama via MLX runner. Extremely visible performance bug on popular hardware (MacBook, Mac Mini). Category is Ollama since this is specific to Ollama's implementation. 60-400x slowdown is dramatic enough to generate significant search traffic.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `MLX bf16 cold prefill is 60–400x slower than warm, even when peak memory fits in physical RAM` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MLX bf16 cold prefill is 60–400x slower than warm, even when peak memory fits in physical RAM`.
