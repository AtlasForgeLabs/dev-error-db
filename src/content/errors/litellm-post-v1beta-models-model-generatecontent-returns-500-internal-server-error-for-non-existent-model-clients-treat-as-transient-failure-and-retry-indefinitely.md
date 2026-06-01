---
title: "LiteLLM Google AI /v1beta/models endpoint returns 500 instead of 400 for non-existent model names"
description: "Fix LiteLLM proxy returning HTTP 500 (retryable) instead of 400/404 (client error) when a non-existent model name is specified, causing infinite client retries Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "POST /v1beta/models/{model}:generateContent returns 500 Internal Server Error for non-existent model; clients treat as transient failure and retry indefinitely"
common_causes:
  - "BerriAI/litellm #25466 — Anthropic-compatible endpoint correctly returns 400 under same conditions but Google AI endpoint returns 500; version v1.83.5; causes Gemini CLI clients to retry forever."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T08:44:26.499Z"
updated_at: "2026-06-01T08:44:26.499Z"
---

## What this error means

`POST /v1beta/models/{model}:generateContent returns 500 Internal Server Error for non-existent model; clients treat as transient failure and retry indefinitely` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy returning http 500 (retryable) instead of 400/404 (client error) when a non-existent model name is specified, causing infinite client retries. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

BerriAI/litellm #25466 — Anthropic-compatible endpoint correctly returns 400 under same conditions but Google AI endpoint returns 500; version v1.83.5; causes Gemini CLI clients to retry forever.

## Common causes

- BerriAI/litellm #25466 — Anthropic-compatible endpoint correctly returns 400 under same conditions but Google AI endpoint returns 500; version v1.83.5; causes Gemini CLI clients to retry forever.

## Quick fixes

1. Confirm the exact error signature matches `POST /v1beta/models/{model}:generateContent returns 500 Internal Server Error for non-existent model; clients treat as transient failure and retry indefinitely`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/25466

Evidence note: BerriAI/litellm #25466 — Anthropic-compatible endpoint correctly returns 400 under same conditions but Google AI endpoint returns 500; version v1.83.5; causes Gemini CLI clients to retry forever.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `POST /v1beta/models/{model}:generateContent returns 500 Internal Server Error for non-existent model; clients treat as transient failure and retry indefinitely` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `POST /v1beta/models/{model}:generateContent returns 500 Internal Server Error for non-existent model; clients treat as transient failure and retry indefinitely`.
