---
title: "Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)"
description: "Fix missing usage/spend tracking in LiteLLM proxy when upstream provider (e.g., Ollama Cloud) returns duplicate response IDs causing log collision Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)"
common_causes:
  - "GitHub issue #28376 (May 21, 2026) on BerriAI/litellm, labeled 'llm translation'. Silent logging failure means enterprises cannot track per-model spend — direct billing visibility loss. Growing concern as organizations add cost monitoring."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T21:39:45.736Z"
updated_at: "2026-05-21T21:39:45.736Z"
---

## What this error means

`Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)` is a LiteLLM failure pattern reported for developers trying to fix missing usage/spend tracking in litellm proxy when upstream provider (e.g., ollama cloud) returns duplicate response ids causing log collision. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28376 (May 21, 2026) on BerriAI/litellm, labeled 'llm translation'. Silent logging failure means enterprises cannot track per-model spend — direct billing visibility loss. Growing concern as organizations add cost monitoring.

## Common causes

- GitHub issue #28376 (May 21, 2026) on BerriAI/litellm, labeled 'llm translation'. Silent logging failure means enterprises cannot track per-model spend — direct billing visibility loss. Growing concern as organizations add cost monitoring.

## Quick fixes

1. Confirm the exact error signature matches `Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/28376

Evidence note: GitHub issue #28376 (May 21, 2026) on BerriAI/litellm, labeled 'llm translation'. Silent logging failure means enterprises cannot track per-model spend — direct billing visibility loss. Growing concern as organizations add cost monitoring.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Spend logs silently dropped when provider returns non-unique response IDs (Ollama Cloud)`.
