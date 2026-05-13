---
title: "Ollama Pull Model Fails with Error EOF on aarch64"
description: "Fix Ollama model pull failing with EOF error on aarch64 ARM systems Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: EOF"
common_causes:
  - "Ollama users on aarch64 platforms (NVIDIA DGX Spark / GB10) encounter EOF errors when pulling large models like gpt-oss-safeguard:120b. The issue is model-specific — smaller models pull normally on the same host — making it a tricky infrastructure debugging scenario for cloud GPU users."
  - "ollama pull gpt-oss-safeguard:120b fails with 'Error: EOF' on aarch64. Reproduces on both 0.23.2 (stable) and 0.23.3-rc1, and inside official Docker images. The 20 GB sibling model pulls normally, indicating the issue is specific to the 120b model size."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama pull timeout error"
  - "Ollama large model download failed"
  - "Ollama Docker pull error"
updated: "2026-05-13"
published_at: "2026-05-13T07:13:16.138Z"
updated_at: "2026-05-13T07:13:16.138Z"
---

## What this error means

`Error: EOF` is a Ollama failure pattern reported for developers trying to fix ollama model pull failing with eof error on aarch64 arm systems. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

ollama pull gpt-oss-safeguard:120b fails with 'Error: EOF' on aarch64. Reproduces on both 0.23.2 (stable) and 0.23.3-rc1, and inside official Docker images. The 20 GB sibling model pulls normally, indicating the issue is specific to the 120b model size.

## Common causes

- Ollama users on aarch64 platforms (NVIDIA DGX Spark / GB10) encounter EOF errors when pulling large models like gpt-oss-safeguard:120b. The issue is model-specific — smaller models pull normally on the same host — making it a tricky infrastructure debugging scenario for cloud GPU users.
- ollama pull gpt-oss-safeguard:120b fails with 'Error: EOF' on aarch64. Reproduces on both 0.23.2 (stable) and 0.23.3-rc1, and inside official Docker images. The 20 GB sibling model pulls normally, indicating the issue is specific to the 120b model size.

## Quick fixes

1. Confirm the exact error signature matches `Error: EOF`.
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

Evidence note: ollama pull gpt-oss-safeguard:120b fails with 'Error: EOF' on aarch64. Reproduces on both 0.23.2 (stable) and 0.23.3-rc1, and inside official Docker images. The 20 GB sibling model pulls normally, indicating the issue is specific to the 120b model size.

## Related errors

- Ollama pull timeout error
- Ollama large model download failed
- Ollama Docker pull error

## FAQ

### What should I check first?

Start with the exact `Error: EOF` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: EOF`.
