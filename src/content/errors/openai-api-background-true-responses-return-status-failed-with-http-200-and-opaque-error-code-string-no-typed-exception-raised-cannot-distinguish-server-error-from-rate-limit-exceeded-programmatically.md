---
title: "Background Responses API lacks stable error code mapping for exception dispatch"
description: "Fix background mode responses API returning HTTP 200 even on failure, making it impossible to catch RateLimitError/InternalServerError exceptions — callers must manually parse error.code strings with no documented enum Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "background=True responses return status='failed' with HTTP 200 and opaque error.code string — no typed exception raised, cannot distinguish server_error from rate_limit_exceeded programmatically"
common_causes:
  - "Found in openai/openai-python#3212 (opened May 8, updated May 9+). High signal from multiple contributors. Commercial value: affects production async pipeline reliability, causes silent failures in automated systems. However classified as feature_request by reporter; the root cause (unhandled API error codes) is a genuine error pattern. Category: OpenAI API."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-29"
published_at: "2026-05-29T21:43:27.388Z"
updated_at: "2026-05-29T21:43:27.388Z"
---

## What this error means

`background=True responses return status='failed' with HTTP 200 and opaque error.code string — no typed exception raised, cannot distinguish server_error from rate_limit_exceeded programmatically` is a OpenAI API failure pattern reported for developers trying to fix background mode responses api returning http 200 even on failure, making it impossible to catch ratelimiterror/internalservererror exceptions — callers must manually parse error.code strings with no documented enum. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in openai/openai-python#3212 (opened May 8, updated May 9+). High signal from multiple contributors. Commercial value: affects production async pipeline reliability, causes silent failures in automated systems. However classified as feature_request by reporter; the root cause (unhandled API error codes) is a genuine error pattern. Category: OpenAI API.

## Common causes

- Found in openai/openai-python#3212 (opened May 8, updated May 9+). High signal from multiple contributors. Commercial value: affects production async pipeline reliability, causes silent failures in automated systems. However classified as feature_request by reporter; the root cause (unhandled API error codes) is a genuine error pattern. Category: OpenAI API.

## Quick fixes

1. Confirm the exact error signature matches `background=True responses return status='failed' with HTTP 200 and opaque error.code string — no typed exception raised, cannot distinguish server_error from rate_limit_exceeded programmatically`.
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

Evidence note: Found in openai/openai-python#3212 (opened May 8, updated May 9+). High signal from multiple contributors. Commercial value: affects production async pipeline reliability, causes silent failures in automated systems. However classified as feature_request by reporter; the root cause (unhandled API error codes) is a genuine error pattern. Category: OpenAI API.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `background=True responses return status='failed' with HTTP 200 and opaque error.code string — no typed exception raised, cannot distinguish server_error from rate_limit_exceeded programmatically` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `background=True responses return status='failed' with HTTP 200 and opaque error.code string — no typed exception raised, cannot distinguish server_error from rate_limit_exceeded programmatically`.
