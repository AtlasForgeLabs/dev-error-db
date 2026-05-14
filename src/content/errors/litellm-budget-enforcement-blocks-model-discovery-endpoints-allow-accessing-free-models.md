---
title: "LiteLLM Budget Enforcement Prevents Accessing Free Model Discovery Endpoints"
description: "Fix LiteLLM budget enforcement blocking free model discovery API access Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Budget enforcement blocks model discovery endpoints (allow accessing free models)"
common_causes:
  - "LiteLLM's budget enforcement system blocks access to model discovery endpoints even for free models. Users who set spending limits find they can't list available models, breaking their ability to discover what's available before making paid requests."
  - "Bug: budget enforcement blocks model discovery endpoints even for free models. Users with spending limits enabled cannot access /models or similar discovery endpoints."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM budget limit exceeded error"
  - "LiteLLM model list API access denied"
  - "LiteLLM spending limit configuration"
updated: "2026-05-14"
published_at: "2026-05-14T17:13:20.396Z"
updated_at: "2026-05-14T17:13:20.396Z"
---

## What this error means

`Budget enforcement blocks model discovery endpoints (allow accessing free models)` is a LiteLLM failure pattern reported for developers trying to fix litellm budget enforcement blocking free model discovery api access. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug: budget enforcement blocks model discovery endpoints even for free models. Users with spending limits enabled cannot access /models or similar discovery endpoints.

## Common causes

- LiteLLM's budget enforcement system blocks access to model discovery endpoints even for free models. Users who set spending limits find they can't list available models, breaking their ability to discover what's available before making paid requests.
- Bug: budget enforcement blocks model discovery endpoints even for free models. Users with spending limits enabled cannot access /models or similar discovery endpoints.

## Quick fixes

1. Confirm the exact error signature matches `Budget enforcement blocks model discovery endpoints (allow accessing free models)`.
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

Evidence note: Bug: budget enforcement blocks model discovery endpoints even for free models. Users with spending limits enabled cannot access /models or similar discovery endpoints.

## Related errors

- LiteLLM budget limit exceeded error
- LiteLLM model list API access denied
- LiteLLM spending limit configuration

## FAQ

### What should I check first?

Start with the exact `Budget enforcement blocks model discovery endpoints (allow accessing free models)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Budget enforcement blocks model discovery endpoints (allow accessing free models)`.
