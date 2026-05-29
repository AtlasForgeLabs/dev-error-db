---
title: "Ollama 'pulling manifest' i/o timeout error fetching models from registry"
description: "Fix Ollama model download failures caused by network timeouts when connecting to the Ollama registry Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: pull model manifest: Get \"https://registry.ollama.ai/v2/library/...\": dial tcp <IP>:443: i/o timeout"
common_causes:
  - "GitHub issue #16330 (created 2026-05-27, updated 2026-05-28): Raspberry Pi 5 and general Linux setups fail to pull any models with explicit i/o timeout when resolving registry.ollama.ai. Error matches real developer scenario — building local LLM environments. High commercial intent from developers running local inference services."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama"
updated: "2026-05-29"
published_at: "2026-05-29T07:43:25.657Z"
updated_at: "2026-05-29T07:43:25.657Z"
---

## What this error means

`Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/...": dial tcp <IP>:443: i/o timeout` is a Ollama failure pattern reported for developers trying to fix ollama model download failures caused by network timeouts when connecting to the ollama registry. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #16330 (created 2026-05-27, updated 2026-05-28): Raspberry Pi 5 and general Linux setups fail to pull any models with explicit i/o timeout when resolving registry.ollama.ai. Error matches real developer scenario — building local LLM environments. High commercial intent from developers running local inference services.

## Common causes

- GitHub issue #16330 (created 2026-05-27, updated 2026-05-28): Raspberry Pi 5 and general Linux setups fail to pull any models with explicit i/o timeout when resolving registry.ollama.ai. Error matches real developer scenario — building local LLM environments. High commercial intent from developers running local inference services.

## Quick fixes

1. Confirm the exact error signature matches `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/...": dial tcp <IP>:443: i/o timeout`.
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

- https://github.com/ollama/ollama/issues/16330
- https://github.com/ollama/ollama/issues/7652
- https://github.com/ollama/ollama/issues/10329

Evidence note: GitHub issue #16330 (created 2026-05-27, updated 2026-05-28): Raspberry Pi 5 and general Linux setups fail to pull any models with explicit i/o timeout when resolving registry.ollama.ai. Error matches real developer scenario — building local LLM environments. High commercial intent from developers running local inference services.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/...": dial tcp <IP>:443: i/o timeout` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: pull model manifest: Get "https://registry.ollama.ai/v2/library/...": dial tcp <IP>:443: i/o timeout`.
