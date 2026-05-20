---
title: "LiteLLM spend logs silently dropped for Ollama Cloud requests — non-unique provider IDs"
description: "Fix spend logging gap where Ollama Cloud requests via LiteLLM proxy never appear in spend logs/Request Log UI due to non-unique sequential ID collisions with existing rows Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM_SpendLogs INSERT fails silently on PK constraint when Ollama Cloud returns short sequential IDs like chatcmpl-213 that collide across users"
common_causes:
  - "GitHub Issue #28376 (BerriAI/litellm): get_spend_logs_id() uses provider's response.id as PK, but Ollama Cloud returns globally sequential IDs (chatcmpl-N) not UUIDs. All Ollama Cloud spend becomes invisible once counter wraps. Direct financial/billing impact for team-managed LiteLLM proxies."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T21:38:30.558Z"
updated_at: "2026-05-20T21:38:30.558Z"
---

## What this error means

`LiteLLM_SpendLogs INSERT fails silently on PK constraint when Ollama Cloud returns short sequential IDs like chatcmpl-213 that collide across users` is a LiteLLM failure pattern reported for developers trying to fix spend logging gap where ollama cloud requests via litellm proxy never appear in spend logs/request log ui due to non-unique sequential id collisions with existing rows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #28376 (BerriAI/litellm): get_spend_logs_id() uses provider's response.id as PK, but Ollama Cloud returns globally sequential IDs (chatcmpl-N) not UUIDs. All Ollama Cloud spend becomes invisible once counter wraps. Direct financial/billing impact for team-managed LiteLLM proxies.

## Common causes

- GitHub Issue #28376 (BerriAI/litellm): get_spend_logs_id() uses provider's response.id as PK, but Ollama Cloud returns globally sequential IDs (chatcmpl-N) not UUIDs. All Ollama Cloud spend becomes invisible once counter wraps. Direct financial/billing impact for team-managed LiteLLM proxies.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM_SpendLogs INSERT fails silently on PK constraint when Ollama Cloud returns short sequential IDs like chatcmpl-213 that collide across users`.
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

Evidence note: GitHub Issue #28376 (BerriAI/litellm): get_spend_logs_id() uses provider's response.id as PK, but Ollama Cloud returns globally sequential IDs (chatcmpl-N) not UUIDs. All Ollama Cloud spend becomes invisible once counter wraps. Direct financial/billing impact for team-managed LiteLLM proxies.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM_SpendLogs INSERT fails silently on PK constraint when Ollama Cloud returns short sequential IDs like chatcmpl-213 that collide across users` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM_SpendLogs INSERT fails silently on PK constraint when Ollama Cloud returns short sequential IDs like chatcmpl-213 that collide across users`.
