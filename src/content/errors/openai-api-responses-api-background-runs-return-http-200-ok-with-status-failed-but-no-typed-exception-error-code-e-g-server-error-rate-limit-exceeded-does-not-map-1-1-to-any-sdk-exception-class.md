---
title: "OpenAI SDK Background Responses Failures Lack Stable Error Codes"
description: "Fix OpenAI Python SDK so background-mode Responses API failures raise proper typed exceptions like RateLimitError / InternalServerError instead of opaque free-form error codes Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Responses API background runs return HTTP 200 OK with status=\"failed\" but no typed exception; error.code (e.g. \"server_error\", \"rate_limit_exceeded\") does not map 1:1 to any SDK exception class"
common_causes:
  - "GitHub openai/openai-python #3212 (open since 2026-05-08). User reports that synchronous calls get clean HTTP code → exception mapping via _make_status_error(), but background=True polling returns 200 OK with no dispatched exception. Callers cannot use isinstance() checks for retry/backoff logic. Category: OpenAI API (paid API, billing/quota impact)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-22"
published_at: "2026-05-22T16:39:48.065Z"
updated_at: "2026-05-22T16:39:48.065Z"
---

## What this error means

`Responses API background runs return HTTP 200 OK with status="failed" but no typed exception; error.code (e.g. "server_error", "rate_limit_exceeded") does not map 1:1 to any SDK exception class` is a OpenAI API failure pattern reported for developers trying to fix openai python sdk so background-mode responses api failures raise proper typed exceptions like ratelimiterror / internalservererror instead of opaque free-form error codes. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub openai/openai-python #3212 (open since 2026-05-08). User reports that synchronous calls get clean HTTP code → exception mapping via _make_status_error(), but background=True polling returns 200 OK with no dispatched exception. Callers cannot use isinstance() checks for retry/backoff logic. Category: OpenAI API (paid API, billing/quota impact).

## Common causes

- GitHub openai/openai-python #3212 (open since 2026-05-08). User reports that synchronous calls get clean HTTP code → exception mapping via _make_status_error(), but background=True polling returns 200 OK with no dispatched exception. Callers cannot use isinstance() checks for retry/backoff logic. Category: OpenAI API (paid API, billing/quota impact).

## Quick fixes

1. Confirm the exact error signature matches `Responses API background runs return HTTP 200 OK with status="failed" but no typed exception; error.code (e.g. "server_error", "rate_limit_exceeded") does not map 1:1 to any SDK exception class`.
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

Evidence note: GitHub openai/openai-python #3212 (open since 2026-05-08). User reports that synchronous calls get clean HTTP code → exception mapping via _make_status_error(), but background=True polling returns 200 OK with no dispatched exception. Callers cannot use isinstance() checks for retry/backoff logic. Category: OpenAI API (paid API, billing/quota impact).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Responses API background runs return HTTP 200 OK with status="failed" but no typed exception; error.code (e.g. "server_error", "rate_limit_exceeded") does not map 1:1 to any SDK exception class` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Responses API background runs return HTTP 200 OK with status="failed" but no typed exception; error.code (e.g. "server_error", "rate_limit_exceeded") does not map 1:1 to any SDK exception class`.
