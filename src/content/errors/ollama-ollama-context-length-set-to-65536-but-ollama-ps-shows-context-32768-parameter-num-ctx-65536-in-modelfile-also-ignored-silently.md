---
title: "Ollama num_ctx silently capped at 32768 on RTX 5070 Blackwell GPUs"
description: "Troubleshoot why Ollama ignores context length settings on new RTX 50xx Blackwell GPUs, causing truncated model outputs Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "OLLAMA_CONTEXT_LENGTH set to 65536 but ollama ps shows CONTEXT 32768; PARAMETER num_ctx 65536 in Modelfile also ignored silently"
common_causes:
  - "GitHub issue #16346 (created 2026-05-29, today!): User sets OLLAMA_CONTEXT_LENGTH=65536 and Modelfile PARAMETER num_ctx 65536 but ollama ps shows only 32768. Silent failure — no error raised, just incorrect behavior. Affects developers deploying larger context windows for RAG, code analysis. Reproducible on qwen2.5:7b-instruct-q4_K_M. Tier 0 API direct fetch (individual issue endpoint)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama"
updated: "2026-05-29"
published_at: "2026-05-29T07:43:25.657Z"
updated_at: "2026-05-29T07:43:25.657Z"
---

## What this error means

`OLLAMA_CONTEXT_LENGTH set to 65536 but ollama ps shows CONTEXT 32768; PARAMETER num_ctx 65536 in Modelfile also ignored silently` is a Ollama failure pattern reported for developers trying to troubleshoot why ollama ignores context length settings on new rtx 50xx blackwell gpus, causing truncated model outputs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #16346 (created 2026-05-29, today!): User sets OLLAMA_CONTEXT_LENGTH=65536 and Modelfile PARAMETER num_ctx 65536 but ollama ps shows only 32768. Silent failure — no error raised, just incorrect behavior. Affects developers deploying larger context windows for RAG, code analysis. Reproducible on qwen2.5:7b-instruct-q4_K_M. Tier 0 API direct fetch (individual issue endpoint).

## Common causes

- GitHub issue #16346 (created 2026-05-29, today!): User sets OLLAMA_CONTEXT_LENGTH=65536 and Modelfile PARAMETER num_ctx 65536 but ollama ps shows only 32768. Silent failure — no error raised, just incorrect behavior. Affects developers deploying larger context windows for RAG, code analysis. Reproducible on qwen2.5:7b-instruct-q4_K_M. Tier 0 API direct fetch (individual issue endpoint).

## Quick fixes

1. Confirm the exact error signature matches `OLLAMA_CONTEXT_LENGTH set to 65536 but ollama ps shows CONTEXT 32768; PARAMETER num_ctx 65536 in Modelfile also ignored silently`.
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

- https://github.com/ollama/ollama/issues/16346

Evidence note: GitHub issue #16346 (created 2026-05-29, today!): User sets OLLAMA_CONTEXT_LENGTH=65536 and Modelfile PARAMETER num_ctx 65536 but ollama ps shows only 32768. Silent failure — no error raised, just incorrect behavior. Affects developers deploying larger context windows for RAG, code analysis. Reproducible on qwen2.5:7b-instruct-q4_K_M. Tier 0 API direct fetch (individual issue endpoint).

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `OLLAMA_CONTEXT_LENGTH set to 65536 but ollama ps shows CONTEXT 32768; PARAMETER num_ctx 65536 in Modelfile also ignored silently` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OLLAMA_CONTEXT_LENGTH set to 65536 but ollama ps shows CONTEXT 32768; PARAMETER num_ctx 65536 in Modelfile also ignored silently`.
