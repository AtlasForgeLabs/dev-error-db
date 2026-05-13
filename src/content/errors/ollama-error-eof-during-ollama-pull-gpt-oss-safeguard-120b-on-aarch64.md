---
title: "Ollama: Pull Fails with EOF Error for Large Models on aarch64 (DGX Spark / GB10)"
description: "Fix Ollama pull failing with EOF error when downloading large models on ARM64/aarch64 systems Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: EOF during ollama pull gpt-oss-safeguard:120b on aarch64"
common_causes:
  - "On NVIDIA DGX Spark / GB10 (aarch64), pulling the 20GB gpt-oss-safeguard:120b model fails with Error: EOF. The smaller 20b sibling and unrelated models pull normally on the same host. Affects enterprise AI/ML engineers using DGX hardware with Ollama."
  - "Reproduces on Ollama 0.23.2 and 0.23.3-rc1, including official Docker images. Issue is model-specific (120b variant), not registry/network. aarch64 enterprise hardware (DGX Spark) audience with high commercial intent."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama large model pull failures on ARM64"
  - "Ollama Docker container pull errors"
  - "Ollama registry download timeout errors"
updated: "2026-05-13"
published_at: "2026-05-13T17:13:17.288Z"
updated_at: "2026-05-13T17:13:17.288Z"
---

## What this error means

`Error: EOF during ollama pull gpt-oss-safeguard:120b on aarch64` is a Ollama failure pattern reported for developers trying to fix ollama pull failing with eof error when downloading large models on arm64/aarch64 systems. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reproduces on Ollama 0.23.2 and 0.23.3-rc1, including official Docker images. Issue is model-specific (120b variant), not registry/network. aarch64 enterprise hardware (DGX Spark) audience with high commercial intent.

## Common causes

- On NVIDIA DGX Spark / GB10 (aarch64), pulling the 20GB gpt-oss-safeguard:120b model fails with Error: EOF. The smaller 20b sibling and unrelated models pull normally on the same host. Affects enterprise AI/ML engineers using DGX hardware with Ollama.
- Reproduces on Ollama 0.23.2 and 0.23.3-rc1, including official Docker images. Issue is model-specific (120b variant), not registry/network. aarch64 enterprise hardware (DGX Spark) audience with high commercial intent.

## Quick fixes

1. Confirm the exact error signature matches `Error: EOF during ollama pull gpt-oss-safeguard:120b on aarch64`.
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

Evidence note: Reproduces on Ollama 0.23.2 and 0.23.3-rc1, including official Docker images. Issue is model-specific (120b variant), not registry/network. aarch64 enterprise hardware (DGX Spark) audience with high commercial intent.

## Related errors

- Ollama large model pull failures on ARM64
- Ollama Docker container pull errors
- Ollama registry download timeout errors

## FAQ

### What should I check first?

Start with the exact `Error: EOF during ollama pull gpt-oss-safeguard:120b on aarch64` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: EOF during ollama pull gpt-oss-safeguard:120b on aarch64`.
