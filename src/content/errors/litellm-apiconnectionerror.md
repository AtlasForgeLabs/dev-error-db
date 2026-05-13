---
title: "LiteLLM Proxy Failover Fails Due to APIConnectionError in cooldown_handlers"
description: "Fix LiteLLM proxy failover not working when a deployment host is unreachable Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "APIConnectionError"
common_causes:
  - "LiteLLM is a paid proxy/router for multi-model LLM deployments. When failover doesn't work due to hardcoded APIConnectionError exclusion, all requests to dead hosts fail without routing to healthy deployments — causing production outages."
  - "Bug report (2026-05-07) identifies root cause: cooldown_handlers.py line 57 has hardcoded ignored_strings=['APIConnectionError'], causing _is_cooldown_required() to return False, preventing failover to healthy deployments in the same model group."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM router cooldown not triggered for connection errors"
  - "LiteLLM deployment failover not working"
updated: "2026-05-13"
published_at: "2026-05-13T03:13:15.476Z"
updated_at: "2026-05-13T03:13:15.476Z"
---

## What this error means

`APIConnectionError` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy failover not working when a deployment host is unreachable. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report (2026-05-07) identifies root cause: cooldown_handlers.py line 57 has hardcoded ignored_strings=['APIConnectionError'], causing _is_cooldown_required() to return False, preventing failover to healthy deployments in the same model group.

## Common causes

- LiteLLM is a paid proxy/router for multi-model LLM deployments. When failover doesn't work due to hardcoded APIConnectionError exclusion, all requests to dead hosts fail without routing to healthy deployments — causing production outages.
- Bug report (2026-05-07) identifies root cause: cooldown_handlers.py line 57 has hardcoded ignored_strings=['APIConnectionError'], causing _is_cooldown_required() to return False, preventing failover to healthy deployments in the same model group.

## Quick fixes

1. Confirm the exact error signature matches `APIConnectionError`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/BerriAI/litellm/issues/27362

Evidence note: Bug report (2026-05-07) identifies root cause: cooldown_handlers.py line 57 has hardcoded ignored_strings=['APIConnectionError'], causing _is_cooldown_required() to return False, preventing failover to healthy deployments in the same model group.

## Related errors

- LiteLLM router cooldown not triggered for connection errors
- LiteLLM deployment failover not working

## FAQ

### What should I check first?

Start with the exact `APIConnectionError` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `APIConnectionError`.
