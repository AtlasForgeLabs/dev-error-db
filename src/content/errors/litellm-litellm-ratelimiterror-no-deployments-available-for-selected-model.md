---
title: "LiteLLM Proxy Misreports Rate Limit as \"No deployments available for selected model\""
description: "Developer using LiteLLM proxy sees misleading 'No deployments available' message instead of actual rate limit/error info; needs correct error interpretation. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.RateLimitError: No deployments available for selected model"
common_causes:
  - "GitHub issue #20867 on BerriAI/litellm repo shows LiteLLM proxy incorrectly surfaces RouterRateLimitErrorBasic with message 'No deployments available for selected model' when the real cause is a downstream 429 rate limit. Also reported as streaming fallback failure with Gemini 3 Preview. High commercial value — LiteLLM powers production routing for paid-tier models. Category: LiteLLM (exact match)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T06:44:29.120Z"
updated_at: "2026-06-02T06:44:29.120Z"
---

## What this error means

`litellm.RateLimitError: No deployments available for selected model` is a LiteLLM failure pattern reported for developers trying to developer using litellm proxy sees misleading 'no deployments available' message instead of actual rate limit/error info; needs correct error interpretation.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20867 on BerriAI/litellm repo shows LiteLLM proxy incorrectly surfaces RouterRateLimitErrorBasic with message 'No deployments available for selected model' when the real cause is a downstream 429 rate limit. Also reported as streaming fallback failure with Gemini 3 Preview. High commercial value — LiteLLM powers production routing for paid-tier models. Category: LiteLLM (exact match).

## Common causes

- GitHub issue #20867 on BerriAI/litellm repo shows LiteLLM proxy incorrectly surfaces RouterRateLimitErrorBasic with message 'No deployments available for selected model' when the real cause is a downstream 429 rate limit. Also reported as streaming fallback failure with Gemini 3 Preview. High commercial value — LiteLLM powers production routing for paid-tier models. Category: LiteLLM (exact match).

## Quick fixes

1. Confirm the exact error signature matches `litellm.RateLimitError: No deployments available for selected model`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/BerriAI/litellm/issues/20867
- https://github.com/BerriAI/litellm/issues/20870

Evidence note: GitHub issue #20867 on BerriAI/litellm repo shows LiteLLM proxy incorrectly surfaces RouterRateLimitErrorBasic with message 'No deployments available for selected model' when the real cause is a downstream 429 rate limit. Also reported as streaming fallback failure with Gemini 3 Preview. High commercial value — LiteLLM powers production routing for paid-tier models. Category: LiteLLM (exact match).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.RateLimitError: No deployments available for selected model` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.RateLimitError: No deployments available for selected model`.
