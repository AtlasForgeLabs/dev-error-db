---
title: "OpenAI Responses API background mode fails without raising typed exception"
description: "Handle background Responses API failures (server_error, rate_limit_exceeded) that return 200 OK with opaque error codes Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP poll returns 200 OK but status='failed' or 'incomplete' with no typed SDK exception raised"
common_causes:
  - "GitHub issue #3212 on openai/openai-python opened May 8, 2026 by adnanboz. When Responses API runs in background=True mode and a run terminates in status=failed, the SDK does not surface a stable machine-readable identifier that callers can map to existing exception classes. HTTP poll returns 200 OK so status-code dispatcher never invoked. The free-form error.code string (server_error, rate_limit_exceeded) does not correspond 1:1 to any SDK exception class. 3+ developers interested in contributing fix. Affects retry/backoff logic built around isinstance checks. Not in covered-errors list."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-22"
published_at: "2026-05-22T04:39:46.665Z"
updated_at: "2026-05-22T04:39:46.665Z"
---

## What this error means

`HTTP poll returns 200 OK but status='failed' or 'incomplete' with no typed SDK exception raised` is a OpenAI API failure pattern reported for developers trying to handle background responses api failures (server_error, rate_limit_exceeded) that return 200 ok with opaque error codes. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #3212 on openai/openai-python opened May 8, 2026 by adnanboz. When Responses API runs in background=True mode and a run terminates in status=failed, the SDK does not surface a stable machine-readable identifier that callers can map to existing exception classes. HTTP poll returns 200 OK so status-code dispatcher never invoked. The free-form error.code string (server_error, rate_limit_exceeded) does not correspond 1:1 to any SDK exception class. 3+ developers interested in contributing fix. Affects retry/backoff logic built around isinstance checks. Not in covered-errors list.

## Common causes

- GitHub issue #3212 on openai/openai-python opened May 8, 2026 by adnanboz. When Responses API runs in background=True mode and a run terminates in status=failed, the SDK does not surface a stable machine-readable identifier that callers can map to existing exception classes. HTTP poll returns 200 OK so status-code dispatcher never invoked. The free-form error.code string (server_error, rate_limit_exceeded) does not correspond 1:1 to any SDK exception class. 3+ developers interested in contributing fix. Affects retry/backoff logic built around isinstance checks. Not in covered-errors list.

## Quick fixes

1. Confirm the exact error signature matches `HTTP poll returns 200 OK but status='failed' or 'incomplete' with no typed SDK exception raised`.
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

Evidence note: GitHub issue #3212 on openai/openai-python opened May 8, 2026 by adnanboz. When Responses API runs in background=True mode and a run terminates in status=failed, the SDK does not surface a stable machine-readable identifier that callers can map to existing exception classes. HTTP poll returns 200 OK so status-code dispatcher never invoked. The free-form error.code string (server_error, rate_limit_exceeded) does not correspond 1:1 to any SDK exception class. 3+ developers interested in contributing fix. Affects retry/backoff logic built around isinstance checks. Not in covered-errors list.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP poll returns 200 OK but status='failed' or 'incomplete' with no typed SDK exception raised` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP poll returns 200 OK but status='failed' or 'incomplete' with no typed SDK exception raised`.
