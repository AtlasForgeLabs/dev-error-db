---
title: "Ollama bge-m3 Embedding Returns HTTP 500 with NaN JSON Error"
description: "Fix Ollama bge-m3 embedding model returning HTTP 500 with NaN JSON serialization error Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "bge-m3 returns HTTP 500 with 'json: unsupported value: NaN' when embedding certain markdown files"
common_causes:
  - "Embedding models are critical for RAG pipelines. When bge-m3 produces NaN values that the JSON serializer cannot encode, it breaks the entire embedding pipeline for specific files deterministically."
  - "Active GitHub issue (May 2026) reports bge-m3 model returns HTTP 500 with 'json: unsupported value: NaN' for specific markdown files. The error is deterministic — the same file consistently triggers it across restarts. Other files in the same corpus embed without issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama model failed to load with 500 Internal Server Error"
  - "Ollama image generation failed with v0.23.x"
updated: "2026-05-13"
published_at: "2026-05-13T12:13:16.710Z"
updated_at: "2026-05-13T12:13:16.710Z"
---

## What this error means

`bge-m3 returns HTTP 500 with 'json: unsupported value: NaN' when embedding certain markdown files` is a Ollama failure pattern reported for developers trying to fix ollama bge-m3 embedding model returning http 500 with nan json serialization error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue (May 2026) reports bge-m3 model returns HTTP 500 with 'json: unsupported value: NaN' for specific markdown files. The error is deterministic — the same file consistently triggers it across restarts. Other files in the same corpus embed without issue.

## Common causes

- Embedding models are critical for RAG pipelines. When bge-m3 produces NaN values that the JSON serializer cannot encode, it breaks the entire embedding pipeline for specific files deterministically.
- Active GitHub issue (May 2026) reports bge-m3 model returns HTTP 500 with 'json: unsupported value: NaN' for specific markdown files. The error is deterministic — the same file consistently triggers it across restarts. Other files in the same corpus embed without issue.

## Quick fixes

1. Confirm the exact error signature matches `bge-m3 returns HTTP 500 with 'json: unsupported value: NaN' when embedding certain markdown files`.
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

- https://github.com/ollama/ollama/issues/15582

Evidence note: Active GitHub issue (May 2026) reports bge-m3 model returns HTTP 500 with 'json: unsupported value: NaN' for specific markdown files. The error is deterministic — the same file consistently triggers it across restarts. Other files in the same corpus embed without issue.

## Related errors

- Ollama model failed to load with 500 Internal Server Error
- Ollama image generation failed with v0.23.x

## FAQ

### What should I check first?

Start with the exact `bge-m3 returns HTTP 500 with 'json: unsupported value: NaN' when embedding certain markdown files` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `bge-m3 returns HTTP 500 with 'json: unsupported value: NaN' when embedding certain markdown files`.
