---
title: "LiteLLM Proxy Phantom BudgetExceededError After Redis Spend Counter Leak"
description: "Fix LiteLLM proxy randomly returning BudgetExceededError 429 despite zero actual spend after upgrade Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "BudgetExceededError (HTTP 429) — phantom budget exceeded despite actual spend near $0"
common_causes:
  - "After upgrading LiteLLM proxy, end users randomly receive BudgetExceededError (HTTP 429) despite their actual database spend being near $0. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations that are never properly cleaned up, causing requests to cycle between success and failure approximately every 4 minutes. This breaks production API gateways."
  - "GitHub issue 27639 (2026-05-11) reports that reserve_budget_for_request() leaks Redis spend counters after upgrade to LiteLLM v1.83.10.dev.2. Users get phantom BudgetExceededError (HTTP 429) despite near-zero actual spend. Requests cycle between success and failure every ~4 minutes. Affects production LiteLLM proxy deployments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Redis counter not resetting after request completion"
  - "LiteLLM proxy rate limit false positives after upgrade"
  - "LiteLLM spend tracking discrepancy between Redis and database"
updated: "2026-05-11"
---

## What this error means

`BudgetExceededError (HTTP 429) — phantom budget exceeded despite actual spend near $0` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy randomly returning budgetexceedederror 429 despite zero actual spend after upgrade. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue 27639 (2026-05-11) reports that reserve_budget_for_request() leaks Redis spend counters after upgrade to LiteLLM v1.83.10.dev.2. Users get phantom BudgetExceededError (HTTP 429) despite near-zero actual spend. Requests cycle between success and failure every ~4 minutes. Affects production LiteLLM proxy deployments.

## Common causes

- After upgrading LiteLLM proxy, end users randomly receive BudgetExceededError (HTTP 429) despite their actual database spend being near $0. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations that are never properly cleaned up, causing requests to cycle between success and failure approximately every 4 minutes. This breaks production API gateways.
- GitHub issue 27639 (2026-05-11) reports that reserve_budget_for_request() leaks Redis spend counters after upgrade to LiteLLM v1.83.10.dev.2. Users get phantom BudgetExceededError (HTTP 429) despite near-zero actual spend. Requests cycle between success and failure every ~4 minutes. Affects production LiteLLM proxy deployments.

## Quick fixes

1. Confirm the exact error signature matches `BudgetExceededError (HTTP 429) — phantom budget exceeded despite actual spend near $0`.
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

- https://github.com/BerriAI/litellm/issues/27639

Evidence note: GitHub issue 27639 (2026-05-11) reports that reserve_budget_for_request() leaks Redis spend counters after upgrade to LiteLLM v1.83.10.dev.2. Users get phantom BudgetExceededError (HTTP 429) despite near-zero actual spend. Requests cycle between success and failure every ~4 minutes. Affects production LiteLLM proxy deployments.

## Related errors

- LiteLLM Redis counter not resetting after request completion
- LiteLLM proxy rate limit false positives after upgrade
- LiteLLM spend tracking discrepancy between Redis and database

## FAQ

### What should I check first?

Start with the exact `BudgetExceededError (HTTP 429) — phantom budget exceeded despite actual spend near $0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BudgetExceededError (HTTP 429) — phantom budget exceeded despite actual spend near $0`.
