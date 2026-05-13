---
title: "Ollama Pull Error EOF on aarch64 — Model Download Fix"
description: "Fix Ollama model pull failing with Error: EOF on ARM64/aarch64 architecture Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "pull gpt-oss-safeguard:120b fails with Error: EOF on aarch64"
common_causes:
  - "Ollama model downloads fail with `Error: EOF` on aarch64 (NVIDIA DGX Spark / GB10) for specific large models like gpt-oss-safeguard:120b, while smaller models work fine. This is an architecture-specific regression that blocks AI model deployment on ARM servers."
  - "GitHub issue (2026-05-12) with reproducible steps on aarch64. Specific model and architecture combination. Affects server-grade AI deployment (DGX Spark)."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama pull fails on ARM"
  - "Ollama model download EOF error"
updated: "2026-05-13"
published_at: "2026-05-13T14:13:16.961Z"
updated_at: "2026-05-13T14:13:16.961Z"
---

## What this error means

`pull gpt-oss-safeguard:120b fails with Error: EOF on aarch64` is a Ollama failure pattern reported for developers trying to fix ollama model pull failing with error: eof on arm64/aarch64 architecture. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue (2026-05-12) with reproducible steps on aarch64. Specific model and architecture combination. Affects server-grade AI deployment (DGX Spark).

## Common causes

- Ollama model downloads fail with `Error: EOF` on aarch64 (NVIDIA DGX Spark / GB10) for specific large models like gpt-oss-safeguard:120b, while smaller models work fine. This is an architecture-specific regression that blocks AI model deployment on ARM servers.
- GitHub issue (2026-05-12) with reproducible steps on aarch64. Specific model and architecture combination. Affects server-grade AI deployment (DGX Spark).

## Quick fixes

1. Confirm the exact error signature matches `pull gpt-oss-safeguard:120b fails with Error: EOF on aarch64`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/ollama/ollama/issues/16121

Evidence note: GitHub issue (2026-05-12) with reproducible steps on aarch64. Specific model and architecture combination. Affects server-grade AI deployment (DGX Spark).

## Related errors

- Ollama pull fails on ARM
- Ollama model download EOF error

## FAQ

### What should I check first?

Start with the exact `pull gpt-oss-safeguard:120b fails with Error: EOF on aarch64` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pull gpt-oss-safeguard:120b fails with Error: EOF on aarch64`.
