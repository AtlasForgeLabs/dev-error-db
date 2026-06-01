---
title: "Ollama 'pull model manifest: file does not exist' on macOS Apple Silicon despite running serve"
description: "Fix Ollama manifest pull failure on macOS Apple Silicon M4 where registry.ollama.ai cannot be reached by the binary despite functional network and working lsof connections on port 11434 Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: pull model manifest: file does not exist (occurs immediately under 1 second despite ollama serve running on port 11434)"
common_causes:
  - "GitHub Issue #16278 on ollama/ollama documents a specific macOS Apple Silicon scenario where ollama pull fails immediately with 'file does not exist' — a generic mask for network/registry resolution failure. Process is alive (lsof confirms ESTABLISHED on :11434), firewall allows local connections, DNS tested with multiple resolvers. Affects self-hosted LLM users. Source: https://github.com/ollama/ollama/issues/16278."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama"
updated: "2026-06-01"
published_at: "2026-06-01T11:44:26.819Z"
updated_at: "2026-06-01T11:44:26.819Z"
---

## What this error means

`Error: pull model manifest: file does not exist (occurs immediately under 1 second despite ollama serve running on port 11434)` is a Ollama failure pattern reported for developers trying to fix ollama manifest pull failure on macos apple silicon m4 where registry.ollama.ai cannot be reached by the binary despite functional network and working lsof connections on port 11434. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #16278 on ollama/ollama documents a specific macOS Apple Silicon scenario where ollama pull fails immediately with 'file does not exist' — a generic mask for network/registry resolution failure. Process is alive (lsof confirms ESTABLISHED on :11434), firewall allows local connections, DNS tested with multiple resolvers. Affects self-hosted LLM users. Source: https://github.com/ollama/ollama/issues/16278.

## Common causes

- GitHub Issue #16278 on ollama/ollama documents a specific macOS Apple Silicon scenario where ollama pull fails immediately with 'file does not exist' — a generic mask for network/registry resolution failure. Process is alive (lsof confirms ESTABLISHED on :11434), firewall allows local connections, DNS tested with multiple resolvers. Affects self-hosted LLM users. Source: https://github.com/ollama/ollama/issues/16278.

## Quick fixes

1. Confirm the exact error signature matches `Error: pull model manifest: file does not exist (occurs immediately under 1 second despite ollama serve running on port 11434)`.
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

- https://github.com/ollama/ollama/issues/16278

Evidence note: GitHub Issue #16278 on ollama/ollama documents a specific macOS Apple Silicon scenario where ollama pull fails immediately with 'file does not exist' — a generic mask for network/registry resolution failure. Process is alive (lsof confirms ESTABLISHED on :11434), firewall allows local connections, DNS tested with multiple resolvers. Affects self-hosted LLM users. Source: https://github.com/ollama/ollama/issues/16278.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: pull model manifest: file does not exist (occurs immediately under 1 second despite ollama serve running on port 11434)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: pull model manifest: file does not exist (occurs immediately under 1 second despite ollama serve running on port 11434)`.
