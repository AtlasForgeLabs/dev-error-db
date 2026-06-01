---
title: "LiteLLM Router Retry Does Not Perform on NotFoundError"
description: "Fix LiteLLM router automatic failover not triggering when upstream model returns 404 NotFoundError Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "router retry does not perform on litellm.NotFoundError error"
common_causes:
  - "Issue #17001 on BerriAI/litellm. When using LiteLLM proxy with model routing/failover configured, the router doesn't retry on litellm.NotFoundError exceptions, causing immediate request failure instead of falling back to backup models. Critical for production proxy deployments where model availability varies by provider."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T13:44:27.108Z"
updated_at: "2026-06-01T13:44:27.108Z"
---

## What this error means

`router retry does not perform on litellm.NotFoundError error` is a LiteLLM failure pattern reported for developers trying to fix litellm router automatic failover not triggering when upstream model returns 404 notfounderror. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #17001 on BerriAI/litellm. When using LiteLLM proxy with model routing/failover configured, the router doesn't retry on litellm.NotFoundError exceptions, causing immediate request failure instead of falling back to backup models. Critical for production proxy deployments where model availability varies by provider.

## Common causes

- Issue #17001 on BerriAI/litellm. When using LiteLLM proxy with model routing/failover configured, the router doesn't retry on litellm.NotFoundError exceptions, causing immediate request failure instead of falling back to backup models. Critical for production proxy deployments where model availability varies by provider.

## Quick fixes

1. Confirm the exact error signature matches `router retry does not perform on litellm.NotFoundError error`.
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

- https://github.com/BerriAI/litellm/issues/17001

Evidence note: Issue #17001 on BerriAI/litellm. When using LiteLLM proxy with model routing/failover configured, the router doesn't retry on litellm.NotFoundError exceptions, causing immediate request failure instead of falling back to backup models. Critical for production proxy deployments where model availability varies by provider.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `router retry does not perform on litellm.NotFoundError error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `router retry does not perform on litellm.NotFoundError error`.
