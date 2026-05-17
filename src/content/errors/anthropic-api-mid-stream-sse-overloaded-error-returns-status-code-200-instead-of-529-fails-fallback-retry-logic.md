---
title: "Anthropic SDK Mid-stream SSE Overloaded Error Returns Wrong Status Code (200 vs 529)"
description: "Developer using anthropic SDK streaming sees overloaded_error arrive as HTTP 200 SSE event; SDK creates bare APIStatusError(200) instead of OverloadedError(529); fallback/retry logic breaks because status check >= 500 never matches Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Mid-stream SSE overloaded_error returns status_code=200 instead of 529 — fails fallback retry logic"
common_causes:
  - "GitHub issue anthropics/anthropic-sdk-python#1258 (closed 2026-03-31). Very specific technical bug: _streaming.py passes original HTTP 200 response to _make_status_error, so overloaded_error type is ignored. Impacts production retry logic (e.g., pydantic-ai FallbackModel). High commercial value: misdiagnosed server errors cause wasted API calls on paid accounts. Category: Anthropic API (exact match). Not covered."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-17"
published_at: "2026-05-17T01:13:51.770Z"
updated_at: "2026-05-17T01:13:51.770Z"
---

## What this error means

`Mid-stream SSE overloaded_error returns status_code=200 instead of 529 — fails fallback retry logic` is a Anthropic API failure pattern reported for developers trying to developer using anthropic sdk streaming sees overloaded_error arrive as http 200 sse event; sdk creates bare apistatuserror(200) instead of overloadederror(529); fallback/retry logic breaks because status check >= 500 never matches. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/anthropic-sdk-python#1258 (closed 2026-03-31). Very specific technical bug: _streaming.py passes original HTTP 200 response to _make_status_error, so overloaded_error type is ignored. Impacts production retry logic (e.g., pydantic-ai FallbackModel). High commercial value: misdiagnosed server errors cause wasted API calls on paid accounts. Category: Anthropic API (exact match). Not covered.

## Common causes

- GitHub issue anthropics/anthropic-sdk-python#1258 (closed 2026-03-31). Very specific technical bug: _streaming.py passes original HTTP 200 response to _make_status_error, so overloaded_error type is ignored. Impacts production retry logic (e.g., pydantic-ai FallbackModel). High commercial value: misdiagnosed server errors cause wasted API calls on paid accounts. Category: Anthropic API (exact match). Not covered.

## Quick fixes

1. Confirm the exact error signature matches `Mid-stream SSE overloaded_error returns status_code=200 instead of 529 — fails fallback retry logic`.
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

Evidence note: GitHub issue anthropics/anthropic-sdk-python#1258 (closed 2026-03-31). Very specific technical bug: _streaming.py passes original HTTP 200 response to _make_status_error, so overloaded_error type is ignored. Impacts production retry logic (e.g., pydantic-ai FallbackModel). High commercial value: misdiagnosed server errors cause wasted API calls on paid accounts. Category: Anthropic API (exact match). Not covered.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `Mid-stream SSE overloaded_error returns status_code=200 instead of 529 — fails fallback retry logic` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Mid-stream SSE overloaded_error returns status_code=200 instead of 529 — fails fallback retry logic`.
