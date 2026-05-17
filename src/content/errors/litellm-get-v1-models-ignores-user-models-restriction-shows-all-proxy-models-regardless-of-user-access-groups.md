---
title: "LiteLLM Proxy GET /v1/models Ignores user.models Restriction — Unauthorized Model List Exposure"
description: "Developer using LiteLLM proxy finds that restricted users can see full model list via GET /v1/models endpoint despite access group restrictions, creating a security/authorization inconsistency Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "GET /v1/models ignores user.models restriction — shows all proxy models regardless of user access groups"
common_causes:
  - "Found on BerriAI/litellm#26420 (open, 2026-05-17, 1 comment). Multi-tenant LiteLLM proxy bug where key.models is enforced but user.models is silently ignored. Affects billing/authorization — users can enumerate restricted models. Direct LiteLLM proxy issue, maps to approved category LiteLLM."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T10:35:57.282Z"
updated_at: "2026-05-17T10:35:57.282Z"
---

## What this error means

`GET /v1/models ignores user.models restriction — shows all proxy models regardless of user access groups` is a LiteLLM failure pattern reported for developers trying to developer using litellm proxy finds that restricted users can see full model list via get /v1/models endpoint despite access group restrictions, creating a security/authorization inconsistency. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on BerriAI/litellm#26420 (open, 2026-05-17, 1 comment). Multi-tenant LiteLLM proxy bug where key.models is enforced but user.models is silently ignored. Affects billing/authorization — users can enumerate restricted models. Direct LiteLLM proxy issue, maps to approved category LiteLLM.

## Common causes

- Found on BerriAI/litellm#26420 (open, 2026-05-17, 1 comment). Multi-tenant LiteLLM proxy bug where key.models is enforced but user.models is silently ignored. Affects billing/authorization — users can enumerate restricted models. Direct LiteLLM proxy issue, maps to approved category LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `GET /v1/models ignores user.models restriction — shows all proxy models regardless of user access groups`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/BerriAI/litellm/issues/26420

Evidence note: Found on BerriAI/litellm#26420 (open, 2026-05-17, 1 comment). Multi-tenant LiteLLM proxy bug where key.models is enforced but user.models is silently ignored. Affects billing/authorization — users can enumerate restricted models. Direct LiteLLM proxy issue, maps to approved category LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `GET /v1/models ignores user.models restriction — shows all proxy models regardless of user access groups` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GET /v1/models ignores user.models restriction — shows all proxy models regardless of user access groups`.
