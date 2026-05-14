---
title: "LiteLLM Vertex AI Batch Jobs Zero Cost/Usage — Spend Tracking Broken"
description: "Fix LiteLLM not tracking cost and token usage for Vertex AI batch jobs Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Vertex AI batch jobs always record spend=0, prompt_tokens=0, completion_tokens=0"
common_causes:
  - "Vertex AI batch jobs completed successfully but LiteLLM records zero spend and zero tokens; billing and usage tracking completely broken"
  - "After change #25627, Vertex AI batch output format changed to OpenAI-shaped JSONL but _batch_cost_calculator still uses raw Vertex usageMetadata reader. Also, batch_cost_calculator skips global litellm.get_model_info() lookup when model_info dict passed without pricing fields. Both bugs cause zero cost/usage."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM batch cost zero"
  - "Vertex AI cost tracking broken"
updated: "2026-05-14"
published_at: "2026-05-14T07:13:19.152Z"
updated_at: "2026-05-14T07:13:19.152Z"
---

## What this error means

`Vertex AI batch jobs always record spend=0, prompt_tokens=0, completion_tokens=0` is a LiteLLM failure pattern reported for developers trying to fix litellm not tracking cost and token usage for vertex ai batch jobs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

After change #25627, Vertex AI batch output format changed to OpenAI-shaped JSONL but _batch_cost_calculator still uses raw Vertex usageMetadata reader. Also, batch_cost_calculator skips global litellm.get_model_info() lookup when model_info dict passed without pricing fields. Both bugs cause zero cost/usage.

## Common causes

- Vertex AI batch jobs completed successfully but LiteLLM records zero spend and zero tokens; billing and usage tracking completely broken
- After change #25627, Vertex AI batch output format changed to OpenAI-shaped JSONL but _batch_cost_calculator still uses raw Vertex usageMetadata reader. Also, batch_cost_calculator skips global litellm.get_model_info() lookup when model_info dict passed without pricing fields. Both bugs cause zero cost/usage.

## Quick fixes

1. Confirm the exact error signature matches `Vertex AI batch jobs always record spend=0, prompt_tokens=0, completion_tokens=0`.
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

- https://github.com/BerriAI/litellm/issues/27912

Evidence note: After change #25627, Vertex AI batch output format changed to OpenAI-shaped JSONL but _batch_cost_calculator still uses raw Vertex usageMetadata reader. Also, batch_cost_calculator skips global litellm.get_model_info() lookup when model_info dict passed without pricing fields. Both bugs cause zero cost/usage.

## Related errors

- LiteLLM batch cost zero
- Vertex AI cost tracking broken

## FAQ

### What should I check first?

Start with the exact `Vertex AI batch jobs always record spend=0, prompt_tokens=0, completion_tokens=0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Vertex AI batch jobs always record spend=0, prompt_tokens=0, completion_tokens=0`.
