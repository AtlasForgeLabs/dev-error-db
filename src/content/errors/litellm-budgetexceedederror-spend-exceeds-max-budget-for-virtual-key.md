---
title: "LiteLLM BudgetExceededError — Virtual Key Reports Stale Spend While Budget Not Actually Exceeded"
description: "Fix LiteLLM virtual key incorrectly rejecting requests with BudgetExceededError despite /key/info showing spend below max_budget Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "BudgetExceededError: spend exceeds max_budget for virtual key"
common_causes:
  - "LiteLLM is used as a paid enterprise proxy gateway for multi-model AI routing. When virtual keys incorrectly reject valid requests, API traffic is silently dropped and teams cannot serve their customers. Engineers need a reliable fix or workaround."
  - "LiteLLM v1.84.0: team-scoped virtual keys reject requests with BudgetExceededError while /key/info management API reports spend still below configured max_budget. Affects enterprise proxy deployments with virtual key budget controls."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM team budget exceeded false positive"
  - "LiteLLM /key/info spend calculation discrepancy"
  - "LiteLLM virtual key rate limit not resetting"
updated: "2026-05-12"
published_at: "2026-05-12T14:12:16.674Z"
updated_at: "2026-05-12T14:12:16.674Z"
---

## What this error means

`BudgetExceededError: spend exceeds max_budget for virtual key` is a LiteLLM failure pattern reported for developers trying to fix litellm virtual key incorrectly rejecting requests with budgetexceedederror despite /key/info showing spend below max_budget. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM v1.84.0: team-scoped virtual keys reject requests with BudgetExceededError while /key/info management API reports spend still below configured max_budget. Affects enterprise proxy deployments with virtual key budget controls.

## Common causes

- LiteLLM is used as a paid enterprise proxy gateway for multi-model AI routing. When virtual keys incorrectly reject valid requests, API traffic is silently dropped and teams cannot serve their customers. Engineers need a reliable fix or workaround.
- LiteLLM v1.84.0: team-scoped virtual keys reject requests with BudgetExceededError while /key/info management API reports spend still below configured max_budget. Affects enterprise proxy deployments with virtual key budget controls.

## Quick fixes

1. Confirm the exact error signature matches `BudgetExceededError: spend exceeds max_budget for virtual key`.
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

- https://github.com/BerriAI/litellm/issues/27735

Evidence note: LiteLLM v1.84.0: team-scoped virtual keys reject requests with BudgetExceededError while /key/info management API reports spend still below configured max_budget. Affects enterprise proxy deployments with virtual key budget controls.

## Related errors

- LiteLLM team budget exceeded false positive
- LiteLLM /key/info spend calculation discrepancy
- LiteLLM virtual key rate limit not resetting

## FAQ

### What should I check first?

Start with the exact `BudgetExceededError: spend exceeds max_budget for virtual key` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BudgetExceededError: spend exceeds max_budget for virtual key`.
