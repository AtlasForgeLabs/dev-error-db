---
title: "LiteLLM proxy team-scoped model fallback fails with public-to-internal name mismatch"
description: "Fix LiteLLM proxy fallback not triggering for team-scoped BYOK models due to public vs internal model name mismatch in Router.async_function_with_fallbacks Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "No fallback model group found for original model_group=primary. Available Model Group Fallbacks=None"
common_causes:
  - "GitHub issue #28019 on BerriAI/litellm documents a routing bug: POST /fallback requires internal model names (model_name_team_uuid) but runtime requests use public names (e.g. gpt-4.1). The fallback lookup does direct string comparison before name resolution, so it never matches. Root cause identified in code (Router.async_function_with_fallbacks). Workaround available via model_aliases. Strong commercial value — directly impacts production proxy billing and failover reliability."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-22"
published_at: "2026-05-22T22:39:48.616Z"
updated_at: "2026-05-22T22:39:48.616Z"
---

## What this error means

`No fallback model group found for original model_group=primary. Available Model Group Fallbacks=None` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy fallback not triggering for team-scoped byok models due to public vs internal model name mismatch in router.async_function_with_fallbacks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28019 on BerriAI/litellm documents a routing bug: POST /fallback requires internal model names (model_name_team_uuid) but runtime requests use public names (e.g. gpt-4.1). The fallback lookup does direct string comparison before name resolution, so it never matches. Root cause identified in code (Router.async_function_with_fallbacks). Workaround available via model_aliases. Strong commercial value — directly impacts production proxy billing and failover reliability.

## Common causes

- GitHub issue #28019 on BerriAI/litellm documents a routing bug: POST /fallback requires internal model names (model_name_team_uuid) but runtime requests use public names (e.g. gpt-4.1). The fallback lookup does direct string comparison before name resolution, so it never matches. Root cause identified in code (Router.async_function_with_fallbacks). Workaround available via model_aliases. Strong commercial value — directly impacts production proxy billing and failover reliability.

## Quick fixes

1. Confirm the exact error signature matches `No fallback model group found for original model_group=primary. Available Model Group Fallbacks=None`.
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

- https://github.com/BerriAI/litellm/issues/28019

Evidence note: GitHub issue #28019 on BerriAI/litellm documents a routing bug: POST /fallback requires internal model names (model_name_team_uuid) but runtime requests use public names (e.g. gpt-4.1). The fallback lookup does direct string comparison before name resolution, so it never matches. Root cause identified in code (Router.async_function_with_fallbacks). Workaround available via model_aliases. Strong commercial value — directly impacts production proxy billing and failover reliability.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `No fallback model group found for original model_group=primary. Available Model Group Fallbacks=None` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No fallback model group found for original model_group=primary. Available Model Group Fallbacks=None`.
