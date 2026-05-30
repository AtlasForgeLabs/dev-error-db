---
title: "LiteLLM SpendLog grows unbounded due to missing cleanup retention pruning"
description: "Fix LiteLLM proxy database growing indefinitely due to missing index pruning on spend logs Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup"
common_causes:
  - "GitHub Issue #29342 in BerriAI/litellm opened May 31, 2026. Database growth issue directly impacts self-hosted LiteLLM users managing budgets and billing. Production impact for teams using LiteLLM Enterprise features. P1 tech with direct billing/quota implications."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-30"
published_at: "2026-05-30T20:43:29.364Z"
updated_at: "2026-05-30T20:43:29.364Z"
---

## What this error means

`LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy database growing indefinitely due to missing index pruning on spend logs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #29342 in BerriAI/litellm opened May 31, 2026. Database growth issue directly impacts self-hosted LiteLLM users managing budgets and billing. Production impact for teams using LiteLLM Enterprise features. P1 tech with direct billing/quota implications.

## Common causes

- GitHub Issue #29342 in BerriAI/litellm opened May 31, 2026. Database growth issue directly impacts self-hosted LiteLLM users managing budgets and billing. Production impact for teams using LiteLLM Enterprise features. P1 tech with direct billing/quota implications.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup`.
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

- https://github.com/BerriAI/litellm/issues/29342

Evidence note: GitHub Issue #29342 in BerriAI/litellm opened May 31, 2026. Database growth issue directly impacts self-hosted LiteLLM users managing budgets and billing. Production impact for teams using LiteLLM Enterprise features. P1 tech with direct billing/quota implications.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM_SpendLogToolIndex is never pruned — grows unbounded, orphaned after spend log retention cleanup`.
