---
title: "LiteLLM model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400"
description: "Fix LiteLLM proxy breaking after version upgrade where model registry empties and all downstream API calls fail with 400 errors Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Model list is empty after upgrading LiteLLM proxy; all model calls return 400 errors"
common_causes:
  - "BerriAI/litellm#26407 reports a breaking regression in LiteLLM proxy that affects all model routing — critical for production proxy setups serving multiple services. Also supported by additional timeout and model-unavailability issues (#19549, #19909, #14635), confirming ongoing stability concerns in LiteLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T02:44:25.906Z"
updated_at: "2026-06-01T02:44:25.906Z"
---

## What this error means

`Model list is empty after upgrading LiteLLM proxy; all model calls return 400 errors` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy breaking after version upgrade where model registry empties and all downstream api calls fail with 400 errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

BerriAI/litellm#26407 reports a breaking regression in LiteLLM proxy that affects all model routing — critical for production proxy setups serving multiple services. Also supported by additional timeout and model-unavailability issues (#19549, #19909, #14635), confirming ongoing stability concerns in LiteLLM.

## Common causes

- BerriAI/litellm#26407 reports a breaking regression in LiteLLM proxy that affects all model routing — critical for production proxy setups serving multiple services. Also supported by additional timeout and model-unavailability issues (#19549, #19909, #14635), confirming ongoing stability concerns in LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `Model list is empty after upgrading LiteLLM proxy; all model calls return 400 errors`.
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

- https://github.com/BerriAI/litellm/issues/26407
- https://github.com/BerriAI/litellm/issues/19549
- https://github.com/BerriAI/litellm/issues/14635

Evidence note: BerriAI/litellm#26407 reports a breaking regression in LiteLLM proxy that affects all model routing — critical for production proxy setups serving multiple services. Also supported by additional timeout and model-unavailability issues (#19549, #19909, #14635), confirming ongoing stability concerns in LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Model list is empty after upgrading LiteLLM proxy; all model calls return 400 errors` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Model list is empty after upgrading LiteLLM proxy; all model calls return 400 errors`.
