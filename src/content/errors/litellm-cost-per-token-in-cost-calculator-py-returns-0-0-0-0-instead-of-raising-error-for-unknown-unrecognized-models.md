---
title: "cost_per_token returns silently wrong values for unrecognized models in LiteLLM"
description: "Detect when LiteLLM proxy routes requests to models it doesn't recognize pricing for — silent zero-cost masking real token costs impacts billing accuracy Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "cost_per_token() in cost_calculator.py returns (0.0, 0.0) instead of raising error for unknown/unrecognized models"
common_causes:
  - "Found on BerriAI/litellm#27581 (opened May 10, 2026). When LiteLLM encounters an unrecognized model, cost_per_token returns (0.0, 0.0) silently rather than raising an error. This can cause production deployments to underbill or misreport API costs. Category: LiteLLM SDK behavior bug."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-23"
published_at: "2026-05-23T21:39:51.494Z"
updated_at: "2026-05-23T21:39:51.494Z"
---

## What this error means

`cost_per_token() in cost_calculator.py returns (0.0, 0.0) instead of raising error for unknown/unrecognized models` is a LiteLLM failure pattern reported for developers trying to detect when litellm proxy routes requests to models it doesn't recognize pricing for — silent zero-cost masking real token costs impacts billing accuracy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on BerriAI/litellm#27581 (opened May 10, 2026). When LiteLLM encounters an unrecognized model, cost_per_token returns (0.0, 0.0) silently rather than raising an error. This can cause production deployments to underbill or misreport API costs. Category: LiteLLM SDK behavior bug.

## Common causes

- Found on BerriAI/litellm#27581 (opened May 10, 2026). When LiteLLM encounters an unrecognized model, cost_per_token returns (0.0, 0.0) silently rather than raising an error. This can cause production deployments to underbill or misreport API costs. Category: LiteLLM SDK behavior bug.

## Quick fixes

1. Confirm the exact error signature matches `cost_per_token() in cost_calculator.py returns (0.0, 0.0) instead of raising error for unknown/unrecognized models`.
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

- https://github.com/BerriAI/litellm/issues/27581

Evidence note: Found on BerriAI/litellm#27581 (opened May 10, 2026). When LiteLLM encounters an unrecognized model, cost_per_token returns (0.0, 0.0) silently rather than raising an error. This can cause production deployments to underbill or misreport API costs. Category: LiteLLM SDK behavior bug.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `cost_per_token() in cost_calculator.py returns (0.0, 0.0) instead of raising error for unknown/unrecognized models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `cost_per_token() in cost_calculator.py returns (0.0, 0.0) instead of raising error for unknown/unrecognized models`.
