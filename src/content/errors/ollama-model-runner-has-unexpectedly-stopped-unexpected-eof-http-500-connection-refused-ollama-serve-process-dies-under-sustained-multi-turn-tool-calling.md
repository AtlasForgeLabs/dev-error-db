---
title: "Ollama runner crashes under sustained multi-turn tool-calling (72% crash rate)"
description: "Fix Ollama runner crashing mid-conversation during sustained tool-use workloads, regressing from v0.19.x stability Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "model runner has unexpectedly stopped / unexpected EOF (HTTP 500) / connection refused (Ollama serve process dies) under sustained multi-turn tool-calling"
common_causes:
  - "GitHub issue #15923 on ollama/ollama reports 72% crash rate across 7 models in a 138-run benchmark suite. Three error signatures: 500 unexpected stop, 500 unexpected EOF, connection refused. Regression from v0.19.x. Directly affects self-hosted production LLM inference reliability. Category: Ollama."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Ollama"
updated: "2026-05-27"
published_at: "2026-05-27T09:43:19.607Z"
updated_at: "2026-05-27T09:43:19.607Z"
---

## What this error means

`model runner has unexpectedly stopped / unexpected EOF (HTTP 500) / connection refused (Ollama serve process dies) under sustained multi-turn tool-calling` is a Ollama failure pattern reported for developers trying to fix ollama runner crashing mid-conversation during sustained tool-use workloads, regressing from v0.19.x stability. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #15923 on ollama/ollama reports 72% crash rate across 7 models in a 138-run benchmark suite. Three error signatures: 500 unexpected stop, 500 unexpected EOF, connection refused. Regression from v0.19.x. Directly affects self-hosted production LLM inference reliability. Category: Ollama.

## Common causes

- GitHub issue #15923 on ollama/ollama reports 72% crash rate across 7 models in a 138-run benchmark suite. Three error signatures: 500 unexpected stop, 500 unexpected EOF, connection refused. Regression from v0.19.x. Directly affects self-hosted production LLM inference reliability. Category: Ollama.

## Quick fixes

1. Confirm the exact error signature matches `model runner has unexpectedly stopped / unexpected EOF (HTTP 500) / connection refused (Ollama serve process dies) under sustained multi-turn tool-calling`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/ollama/ollama/issues/15923

Evidence note: GitHub issue #15923 on ollama/ollama reports 72% crash rate across 7 models in a 138-run benchmark suite. Three error signatures: 500 unexpected stop, 500 unexpected EOF, connection refused. Regression from v0.19.x. Directly affects self-hosted production LLM inference reliability. Category: Ollama.

## Related errors

- Ollama

## FAQ

### What should I check first?

Start with the exact `model runner has unexpectedly stopped / unexpected EOF (HTTP 500) / connection refused (Ollama serve process dies) under sustained multi-turn tool-calling` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model runner has unexpectedly stopped / unexpected EOF (HTTP 500) / connection refused (Ollama serve process dies) under sustained multi-turn tool-calling`.
