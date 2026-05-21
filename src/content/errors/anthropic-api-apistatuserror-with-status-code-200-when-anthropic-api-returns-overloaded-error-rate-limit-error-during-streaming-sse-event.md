---
title: "Anthropic SDK: Mid-stream SSE errors return HTTP 200 instead of correct error status code"
description: "Fix incorrect status code for streaming errors in Anthropic Python SDK so retry/fallback logic based on status_code works correctly Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "APIStatusError with status_code=200 when Anthropic API returns overloaded_error / rate_limit_error during streaming (SSE event)"
common_causes:
  - "GitHub issue #1258 in anthropics/anthropic-sdk-python (sarth6, Mar 2026). When API returns HTTP 200 (streaming started fine) but then sends an SSE error event like overloaded_error, the SDK creates an APIStatusError with status_code=200 instead of 529. This breaks pydantic-ai FallbackModel which checks status_code >= 500 to decide whether to try the next model. Severity was confirmed by official collaborator dtmeadows and fixed in v0.87.0. High commercial value — impacts production AI workflow reliability."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-21"
published_at: "2026-05-21T07:39:43.782Z"
updated_at: "2026-05-21T07:39:43.782Z"
---

## What this error means

`APIStatusError with status_code=200 when Anthropic API returns overloaded_error / rate_limit_error during streaming (SSE event)` is a Anthropic API failure pattern reported for developers trying to fix incorrect status code for streaming errors in anthropic python sdk so retry/fallback logic based on status_code works correctly. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1258 in anthropics/anthropic-sdk-python (sarth6, Mar 2026). When API returns HTTP 200 (streaming started fine) but then sends an SSE error event like overloaded_error, the SDK creates an APIStatusError with status_code=200 instead of 529. This breaks pydantic-ai FallbackModel which checks status_code >= 500 to decide whether to try the next model. Severity was confirmed by official collaborator dtmeadows and fixed in v0.87.0. High commercial value — impacts production AI workflow reliability.

## Common causes

- GitHub issue #1258 in anthropics/anthropic-sdk-python (sarth6, Mar 2026). When API returns HTTP 200 (streaming started fine) but then sends an SSE error event like overloaded_error, the SDK creates an APIStatusError with status_code=200 instead of 529. This breaks pydantic-ai FallbackModel which checks status_code >= 500 to decide whether to try the next model. Severity was confirmed by official collaborator dtmeadows and fixed in v0.87.0. High commercial value — impacts production AI workflow reliability.

## Quick fixes

1. Confirm the exact error signature matches `APIStatusError with status_code=200 when Anthropic API returns overloaded_error / rate_limit_error during streaming (SSE event)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1258

Evidence note: GitHub issue #1258 in anthropics/anthropic-sdk-python (sarth6, Mar 2026). When API returns HTTP 200 (streaming started fine) but then sends an SSE error event like overloaded_error, the SDK creates an APIStatusError with status_code=200 instead of 529. This breaks pydantic-ai FallbackModel which checks status_code >= 500 to decide whether to try the next model. Severity was confirmed by official collaborator dtmeadows and fixed in v0.87.0. High commercial value — impacts production AI workflow reliability.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `APIStatusError with status_code=200 when Anthropic API returns overloaded_error / rate_limit_error during streaming (SSE event)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `APIStatusError with status_code=200 when Anthropic API returns overloaded_error / rate_limit_error during streaming (SSE event)`.
