---
title: "LiteLLM Redis Spend Counter Leak Causes Phantom BudgetExceededError (429)"
description: "Fix LiteLLM proxy that incorrectly returns HTTP 429 BudgetExceededError for users who haven't exceeded their budget due to Redis counter accumulation bug Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "reserve_budget_for_request() leaks Redis spend counters — phantom BudgetExceededError despite actual database spend being near $0"
common_causes:
  - "Open issue #27639 on BerriAI/litellm (created May 11, 2026). After upgrading to v1.83.10.dev.2, end users randomly get HTTP 429 BudgetExceededError despite zero actual spend. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations never finalized/decremented. Symptoms: some requests succeed while others fail for different users, cycling every ~4 minutes. High commercial value — this is a LiteLLM proxy billing/budget enforcement bug affecting paying enterprise deployments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T10:38:29.159Z"
updated_at: "2026-05-20T10:38:29.159Z"
---

## What this error means

`reserve_budget_for_request() leaks Redis spend counters — phantom BudgetExceededError despite actual database spend being near $0` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy that incorrectly returns http 429 budgetexceedederror for users who haven't exceeded their budget due to redis counter accumulation bug. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue #27639 on BerriAI/litellm (created May 11, 2026). After upgrading to v1.83.10.dev.2, end users randomly get HTTP 429 BudgetExceededError despite zero actual spend. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations never finalized/decremented. Symptoms: some requests succeed while others fail for different users, cycling every ~4 minutes. High commercial value — this is a LiteLLM proxy billing/budget enforcement bug affecting paying enterprise deployments.

## Common causes

- Open issue #27639 on BerriAI/litellm (created May 11, 2026). After upgrading to v1.83.10.dev.2, end users randomly get HTTP 429 BudgetExceededError despite zero actual spend. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations never finalized/decremented. Symptoms: some requests succeed while others fail for different users, cycling every ~4 minutes. High commercial value — this is a LiteLLM proxy billing/budget enforcement bug affecting paying enterprise deployments.

## Quick fixes

1. Confirm the exact error signature matches `reserve_budget_for_request() leaks Redis spend counters — phantom BudgetExceededError despite actual database spend being near $0`.
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

Evidence note: Open issue #27639 on BerriAI/litellm (created May 11, 2026). After upgrading to v1.83.10.dev.2, end users randomly get HTTP 429 BudgetExceededError despite zero actual spend. The Redis atomic counter spend:end_user:<id> accumulates phantom reservations never finalized/decremented. Symptoms: some requests succeed while others fail for different users, cycling every ~4 minutes. High commercial value — this is a LiteLLM proxy billing/budget enforcement bug affecting paying enterprise deployments.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `reserve_budget_for_request() leaks Redis spend counters — phantom BudgetExceededError despite actual database spend being near $0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `reserve_budget_for_request() leaks Redis spend counters — phantom BudgetExceededError despite actual database spend being near $0`.
