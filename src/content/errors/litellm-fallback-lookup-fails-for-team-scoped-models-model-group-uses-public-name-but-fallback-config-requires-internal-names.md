---
title: "[Bug]: Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names"
description: "Fix LiteLLM proxy fallback configuration not working for team-scoped BYOK models due to public vs internal model name mismatch Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names"
common_causes:
  - "GitHub issue #28019 in BerriAI/litellm (opened May 15, 2026). When a team-scoped BYOK model has a fallback configured via POST /fallback (which requires internal model names like model_name_team_uuid), requests using the public model name fail to trigger fallback routing. Router.async_function_with_fallbacks reads the unresolved public name before resolution, causing direct string comparison to never match."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-18"
published_at: "2026-05-18T19:37:13.961Z"
updated_at: "2026-05-18T19:37:13.961Z"
---

## What this error means

`Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy fallback configuration not working for team-scoped byok models due to public vs internal model name mismatch. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28019 in BerriAI/litellm (opened May 15, 2026). When a team-scoped BYOK model has a fallback configured via POST /fallback (which requires internal model names like model_name_team_uuid), requests using the public model name fail to trigger fallback routing. Router.async_function_with_fallbacks reads the unresolved public name before resolution, causing direct string comparison to never match.

## Common causes

- GitHub issue #28019 in BerriAI/litellm (opened May 15, 2026). When a team-scoped BYOK model has a fallback configured via POST /fallback (which requires internal model names like model_name_team_uuid), requests using the public model name fail to trigger fallback routing. Router.async_function_with_fallbacks reads the unresolved public name before resolution, causing direct string comparison to never match.

## Quick fixes

1. Confirm the exact error signature matches `Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names`.
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

Evidence note: GitHub issue #28019 in BerriAI/litellm (opened May 15, 2026). When a team-scoped BYOK model has a fallback configured via POST /fallback (which requires internal model names like model_name_team_uuid), requests using the public model name fail to trigger fallback routing. Router.async_function_with_fallbacks reads the unresolved public name before resolution, causing direct string comparison to never match.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Fallback lookup fails for team-scoped models — model_group uses public name but fallback config requires internal names`.
