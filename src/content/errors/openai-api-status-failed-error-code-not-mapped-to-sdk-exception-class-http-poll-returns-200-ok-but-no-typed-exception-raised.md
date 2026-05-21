---
title: "OpenAI Responses API background mode fails to surface typed exceptions for failed runs"
description: "Developers using OpenAI Python SDK background responses API encounter opaque failure payloads instead of typed RetryableError/InternalServerError exceptions, breaking production retry/backoff logic. Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Status='failed', error.code not mapped to SDK exception class; HTTP poll returns 200 OK but no typed exception raised"
common_causes:
  - "Source: openai/openai-python#3212 (opened May 8, 2026). Issue shows background-mode response polling returns HTTP 200 with status='failed' payload; error.code is undocumented and not guaranteed to map 1:1 to SDK exception classes like InternalServerError or RateLimitError. Synchronous calls have clean _make_status_error dispatch, but background path has none. Requires stable enum field or documented mapping. Category: OpenAI API — pay-per-token API, affects production billing/usage."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T12:39:44.543Z"
updated_at: "2026-05-21T12:39:44.543Z"
---

## What this error means

`Status='failed', error.code not mapped to SDK exception class; HTTP poll returns 200 OK but no typed exception raised` is a OpenAI API failure pattern reported for developers trying to developers using openai python sdk background responses api encounter opaque failure payloads instead of typed retryableerror/internalservererror exceptions, breaking production retry/backoff logic.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: openai/openai-python#3212 (opened May 8, 2026). Issue shows background-mode response polling returns HTTP 200 with status='failed' payload; error.code is undocumented and not guaranteed to map 1:1 to SDK exception classes like InternalServerError or RateLimitError. Synchronous calls have clean _make_status_error dispatch, but background path has none. Requires stable enum field or documented mapping. Category: OpenAI API — pay-per-token API, affects production billing/usage.

## Common causes

- Source: openai/openai-python#3212 (opened May 8, 2026). Issue shows background-mode response polling returns HTTP 200 with status='failed' payload; error.code is undocumented and not guaranteed to map 1:1 to SDK exception classes like InternalServerError or RateLimitError. Synchronous calls have clean _make_status_error dispatch, but background path has none. Requires stable enum field or documented mapping. Category: OpenAI API — pay-per-token API, affects production billing/usage.

## Quick fixes

1. Confirm the exact error signature matches `Status='failed', error.code not mapped to SDK exception class; HTTP poll returns 200 OK but no typed exception raised`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/3212

Evidence note: Source: openai/openai-python#3212 (opened May 8, 2026). Issue shows background-mode response polling returns HTTP 200 with status='failed' payload; error.code is undocumented and not guaranteed to map 1:1 to SDK exception classes like InternalServerError or RateLimitError. Synchronous calls have clean _make_status_error dispatch, but background path has none. Requires stable enum field or documented mapping. Category: OpenAI API — pay-per-token API, affects production billing/usage.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Status='failed', error.code not mapped to SDK exception class; HTTP poll returns 200 OK but no typed exception raised` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Status='failed', error.code not mapped to SDK exception class; HTTP poll returns 200 OK but no typed exception raised`.
