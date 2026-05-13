---
title: "LiteLLM Reports 'No deployments available' Instead of Clear Rate Limit Error on 429"
description: "Fix LiteLLM confusing rate limit error message showing 'No deployments available' instead of clear 429 rate limit Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "RateLimitError: Error code: 429 - {'error': {'message': 'No deployments available for selected model.', 'type': 'None', 'param': 'None', 'code': '429'}}"
common_causes:
  - "LiteLLM is a widely-used LLM proxy. When rate limits are hit, the misleading error message 'No deployments available for selected model' prevents developers from understanding the actual cause, leading to wasted debugging time."
  - "Active GitHub issue reports that LiteLLM proxy returns 'No deployments available for selected model' when a rate limit is actually hit, with error code 429. The exception class is correct but the message is misleading, causing confusion for developers managing rate-limited models."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM RouterRateLimitError missing Retry-After header"
  - "LiteLLM APIConnectionError prevents failover to healthy deployments"
updated: "2026-05-13"
published_at: "2026-05-13T12:13:16.710Z"
updated_at: "2026-05-13T12:13:16.710Z"
---

## What this error means

`RateLimitError: Error code: 429 - {'error': {'message': 'No deployments available for selected model.', 'type': 'None', 'param': 'None', 'code': '429'}}` is a LiteLLM failure pattern reported for developers trying to fix litellm confusing rate limit error message showing 'no deployments available' instead of clear 429 rate limit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue reports that LiteLLM proxy returns 'No deployments available for selected model' when a rate limit is actually hit, with error code 429. The exception class is correct but the message is misleading, causing confusion for developers managing rate-limited models.

## Common causes

- LiteLLM is a widely-used LLM proxy. When rate limits are hit, the misleading error message 'No deployments available for selected model' prevents developers from understanding the actual cause, leading to wasted debugging time.
- Active GitHub issue reports that LiteLLM proxy returns 'No deployments available for selected model' when a rate limit is actually hit, with error code 429. The exception class is correct but the message is misleading, causing confusion for developers managing rate-limited models.

## Quick fixes

1. Confirm the exact error signature matches `RateLimitError: Error code: 429 - {'error': {'message': 'No deployments available for selected model.', 'type': 'None', 'param': 'None', 'code': '429'}}`.
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

Evidence note: Active GitHub issue reports that LiteLLM proxy returns 'No deployments available for selected model' when a rate limit is actually hit, with error code 429. The exception class is correct but the message is misleading, causing confusion for developers managing rate-limited models.

## Related errors

- LiteLLM RouterRateLimitError missing Retry-After header
- LiteLLM APIConnectionError prevents failover to healthy deployments

## FAQ

### What should I check first?

Start with the exact `RateLimitError: Error code: 429 - {'error': {'message': 'No deployments available for selected model.', 'type': 'None', 'param': 'None', 'code': '429'}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `RateLimitError: Error code: 429 - {'error': {'message': 'No deployments available for selected model.', 'type': 'None', 'param': 'None', 'code': '429'}}`.
