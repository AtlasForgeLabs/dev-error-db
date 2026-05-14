---
title: "LiteLLM Proxy Returns 429 Budget Exceeded on /v1/models Breaking All OpenAI Clients"
description: "Fix LiteLLM budget exceeded blocking model discovery endpoints Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM HTTP 429 Budget Exceeded on GET /v1/models"
common_causes:
  - "When team/org budget is exhausted, LiteLLM returns 429 on /v1/models endpoint, making ALL models invisible to clients including free models. This breaks Open WebUI, Cursor, Aider, Continue.dev, LibreChat and every OpenAI-compatible client. No workaround exists."
  - "Budget check inconsistency: _global_proxy_budget_check correctly excludes /v1/models but _team_max_budget_check does not. All OpenAI-compatible clients break when budget exceeded. Affects LiteLLM v1.83.3. No viable workaround."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM BudgetExceededError 429"
  - "LiteLLM /v1/models empty model list"
updated: "2026-05-14"
published_at: "2026-05-14T10:13:19.561Z"
updated_at: "2026-05-14T10:13:19.561Z"
---

## What this error means

`LiteLLM HTTP 429 Budget Exceeded on GET /v1/models` is a LiteLLM failure pattern reported for developers trying to fix litellm budget exceeded blocking model discovery endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Budget check inconsistency: _global_proxy_budget_check correctly excludes /v1/models but _team_max_budget_check does not. All OpenAI-compatible clients break when budget exceeded. Affects LiteLLM v1.83.3. No viable workaround.

## Common causes

- When team/org budget is exhausted, LiteLLM returns 429 on /v1/models endpoint, making ALL models invisible to clients including free models. This breaks Open WebUI, Cursor, Aider, Continue.dev, LibreChat and every OpenAI-compatible client. No workaround exists.
- Budget check inconsistency: _global_proxy_budget_check correctly excludes /v1/models but _team_max_budget_check does not. All OpenAI-compatible clients break when budget exceeded. Affects LiteLLM v1.83.3. No viable workaround.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM HTTP 429 Budget Exceeded on GET /v1/models`.
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

Evidence note: Budget check inconsistency: _global_proxy_budget_check correctly excludes /v1/models but _team_max_budget_check does not. All OpenAI-compatible clients break when budget exceeded. Affects LiteLLM v1.83.3. No viable workaround.

## Related errors

- LiteLLM BudgetExceededError 429
- LiteLLM /v1/models empty model list

## FAQ

### What should I check first?

Start with the exact `LiteLLM HTTP 429 Budget Exceeded on GET /v1/models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM HTTP 429 Budget Exceeded on GET /v1/models`.
