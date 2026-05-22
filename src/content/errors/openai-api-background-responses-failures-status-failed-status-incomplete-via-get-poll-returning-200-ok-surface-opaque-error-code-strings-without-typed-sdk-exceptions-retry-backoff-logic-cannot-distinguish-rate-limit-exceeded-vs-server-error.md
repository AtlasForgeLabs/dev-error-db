---
title: "OpenAI SDK Background Responses Failures Lack Stable Error Codes Mapping to Exception Classes"
description: "Fix Python SDK for Responses API background mode so failed runs raise proper typed exceptions (RateLimitError, InternalServerError) instead of opaque string codes Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Background responses failures (status=failed / status=incomplete via GET poll returning 200 OK) surface opaque error.code strings without typed SDK exceptions; retry/backoff logic cannot distinguish rate_limit_exceeded vs server_error"
common_causes:
  - "GitHub issue #3212 in openai/openai-python reports that background=true Responses API polling returns HTTP 200 with body {\"status\": \"failed\", \"error\": {\"code\": \"server_error\"}} but no typed exception is raised because the SDK only dispatches on HTTP status codes, not response-body error codes. Synchronous calls work fine. Directly impacts paid API users running async batch inference who need proper error classification. Category mapping: OpenAI API (official repo, paid API error)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-22"
published_at: "2026-05-22T21:39:48.605Z"
updated_at: "2026-05-22T21:39:48.605Z"
---

## What this error means

`Background responses failures (status=failed / status=incomplete via GET poll returning 200 OK) surface opaque error.code strings without typed SDK exceptions; retry/backoff logic cannot distinguish rate_limit_exceeded vs server_error` is a OpenAI API failure pattern reported for developers trying to fix python sdk for responses api background mode so failed runs raise proper typed exceptions (ratelimiterror, internalservererror) instead of opaque string codes. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #3212 in openai/openai-python reports that background=true Responses API polling returns HTTP 200 with body {"status": "failed", "error": {"code": "server_error"}} but no typed exception is raised because the SDK only dispatches on HTTP status codes, not response-body error codes. Synchronous calls work fine. Directly impacts paid API users running async batch inference who need proper error classification. Category mapping: OpenAI API (official repo, paid API error).

## Common causes

- GitHub issue #3212 in openai/openai-python reports that background=true Responses API polling returns HTTP 200 with body {"status": "failed", "error": {"code": "server_error"}} but no typed exception is raised because the SDK only dispatches on HTTP status codes, not response-body error codes. Synchronous calls work fine. Directly impacts paid API users running async batch inference who need proper error classification. Category mapping: OpenAI API (official repo, paid API error).

## Quick fixes

1. Confirm the exact error signature matches `Background responses failures (status=failed / status=incomplete via GET poll returning 200 OK) surface opaque error.code strings without typed SDK exceptions; retry/backoff logic cannot distinguish rate_limit_exceeded vs server_error`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/3212

Evidence note: GitHub issue #3212 in openai/openai-python reports that background=true Responses API polling returns HTTP 200 with body {"status": "failed", "error": {"code": "server_error"}} but no typed exception is raised because the SDK only dispatches on HTTP status codes, not response-body error codes. Synchronous calls work fine. Directly impacts paid API users running async batch inference who need proper error classification. Category mapping: OpenAI API (official repo, paid API error).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Background responses failures (status=failed / status=incomplete via GET poll returning 200 OK) surface opaque error.code strings without typed SDK exceptions; retry/backoff logic cannot distinguish rate_limit_exceeded vs server_error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Background responses failures (status=failed / status=incomplete via GET poll returning 200 OK) surface opaque error.code strings without typed SDK exceptions; retry/backoff logic cannot distinguish rate_limit_exceeded vs server_error`.
