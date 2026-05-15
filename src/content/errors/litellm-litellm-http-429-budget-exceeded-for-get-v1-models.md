---
title: "LiteLLM Budget Enforcement Blocks Model Discovery: HTTP 429 for GET /v1/models"
description: "Fix LiteLLM 429 Budget Exceeded blocking GET /v1/models endpoint Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM HTTP 429 Budget Exceeded for GET /v1/models"
common_causes:
  - "When a team/org/user budget is exhausted in LiteLLM, the proxy returns HTTP 429 Budget Exceeded even for model discovery endpoints like GET /v1/models. This prevents clients from discovering available free models when budgets are exhausted."
  - "LiteLLM proxy returns HTTP 429 Budget Exceeded for model discovery endpoints (GET /v1/models) when any budget is exhausted. Free models should still be discoverable. Breaks client-side model selection logic."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM budget exceeded error"
  - "LiteLLM 429 rate limit models endpoint"
updated: "2026-05-15"
published_at: "2026-05-15T12:13:22.569Z"
updated_at: "2026-05-15T12:13:22.569Z"
---

## What this error means

`LiteLLM HTTP 429 Budget Exceeded for GET /v1/models` is a LiteLLM failure pattern reported for developers trying to fix litellm 429 budget exceeded blocking get /v1/models endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM proxy returns HTTP 429 Budget Exceeded for model discovery endpoints (GET /v1/models) when any budget is exhausted. Free models should still be discoverable. Breaks client-side model selection logic.

## Common causes

- When a team/org/user budget is exhausted in LiteLLM, the proxy returns HTTP 429 Budget Exceeded even for model discovery endpoints like GET /v1/models. This prevents clients from discovering available free models when budgets are exhausted.
- LiteLLM proxy returns HTTP 429 Budget Exceeded for model discovery endpoints (GET /v1/models) when any budget is exhausted. Free models should still be discoverable. Breaks client-side model selection logic.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM HTTP 429 Budget Exceeded for GET /v1/models`.
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

- https://github.com/BerriAI/litellm/issues/27923

Evidence note: LiteLLM proxy returns HTTP 429 Budget Exceeded for model discovery endpoints (GET /v1/models) when any budget is exhausted. Free models should still be discoverable. Breaks client-side model selection logic.

## Related errors

- LiteLLM budget exceeded error
- LiteLLM 429 rate limit models endpoint

## FAQ

### What should I check first?

Start with the exact `LiteLLM HTTP 429 Budget Exceeded for GET /v1/models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM HTTP 429 Budget Exceeded for GET /v1/models`.
