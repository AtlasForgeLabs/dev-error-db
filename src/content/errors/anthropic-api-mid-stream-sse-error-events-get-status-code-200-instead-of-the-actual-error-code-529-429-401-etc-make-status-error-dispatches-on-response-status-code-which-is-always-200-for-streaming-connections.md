---
title: "Anthropic SDK Python Mid-Stream SSE Errors Return Wrong HTTP Status Code"
description: "Fix incorrectly mapped error status codes in Anthropic Python SDK that cause wrong exception types raised during streaming API calls Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Mid-stream SSE error events get `status_code=200` instead of the actual error code (529, 429, 401 etc.) — `_make_status_error()` dispatches on response.status_code which is always 200 for streaming connections"
common_causes:
  - "GitHub issue #1258 (anthropics/anthropic-sdk-python): In _streaming.py, when sse.event == 'error', the body contains the correct error type (e.g. 'overloaded_error') but response.status_code is always 200 because the HTTP connection stays open. The SDK's _make_status_error() then falls through to generic APIStatusError(200) regardless of the actual error. Users see 200 status codes where they expect 529/429/401. Root cause identified in code at lines 114-117 (sync) / 234-237 (async). PR fix proposed. Distinct from existing dev-error-db page about overloaded_error differentiation — this is a client-side SDK bug, not a behavioral guide."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-31"
published_at: "2026-05-31T15:44:24.853Z"
updated_at: "2026-05-31T15:44:24.853Z"
---

## What this error means

`Mid-stream SSE error events get `status_code=200` instead of the actual error code (529, 429, 401 etc.) — `_make_status_error()` dispatches on response.status_code which is always 200 for streaming connections` is a Anthropic API failure pattern reported for developers trying to fix incorrectly mapped error status codes in anthropic python sdk that cause wrong exception types raised during streaming api calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1258 (anthropics/anthropic-sdk-python): In _streaming.py, when sse.event == 'error', the body contains the correct error type (e.g. 'overloaded_error') but response.status_code is always 200 because the HTTP connection stays open. The SDK's _make_status_error() then falls through to generic APIStatusError(200) regardless of the actual error. Users see 200 status codes where they expect 529/429/401. Root cause identified in code at lines 114-117 (sync) / 234-237 (async). PR fix proposed. Distinct from existing dev-error-db page about overloaded_error differentiation — this is a client-side SDK bug, not a behavioral guide.

## Common causes

- GitHub issue #1258 (anthropics/anthropic-sdk-python): In _streaming.py, when sse.event == 'error', the body contains the correct error type (e.g. 'overloaded_error') but response.status_code is always 200 because the HTTP connection stays open. The SDK's _make_status_error() then falls through to generic APIStatusError(200) regardless of the actual error. Users see 200 status codes where they expect 529/429/401. Root cause identified in code at lines 114-117 (sync) / 234-237 (async). PR fix proposed. Distinct from existing dev-error-db page about overloaded_error differentiation — this is a client-side SDK bug, not a behavioral guide.

## Quick fixes

1. Confirm the exact error signature matches `Mid-stream SSE error events get `status_code=200` instead of the actual error code (529, 429, 401 etc.) — `_make_status_error()` dispatches on response.status_code which is always 200 for streaming connections`.
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

Evidence note: GitHub issue #1258 (anthropics/anthropic-sdk-python): In _streaming.py, when sse.event == 'error', the body contains the correct error type (e.g. 'overloaded_error') but response.status_code is always 200 because the HTTP connection stays open. The SDK's _make_status_error() then falls through to generic APIStatusError(200) regardless of the actual error. Users see 200 status codes where they expect 529/429/401. Root cause identified in code at lines 114-117 (sync) / 234-237 (async). PR fix proposed. Distinct from existing dev-error-db page about overloaded_error differentiation — this is a client-side SDK bug, not a behavioral guide.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `Mid-stream SSE error events get `status_code=200` instead of the actual error code (529, 429, 401 etc.) — `_make_status_error()` dispatches on response.status_code which is always 200 for streaming connections` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Mid-stream SSE error events get `status_code=200` instead of the actual error code (529, 429, 401 etc.) — `_make_status_error()` dispatches on response.status_code which is always 200 for streaming connections`.
