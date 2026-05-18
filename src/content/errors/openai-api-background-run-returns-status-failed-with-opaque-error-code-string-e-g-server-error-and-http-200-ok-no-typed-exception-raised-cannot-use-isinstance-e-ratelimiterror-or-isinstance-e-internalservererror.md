---
title: "Background responses failures lack a stable error code that maps to an SDK exception class"
description: "Developer needs reliable error classification for OpenAI Responses API background polling to implement proper retry/backoff logic instead of treating everything as opaque server errors Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Background run returns status='failed' with opaque error.code string (e.g. 'server_error') and HTTP 200 OK — no typed exception raised, cannot use isinstance(e, RateLimitError) or isinstance(e, InternalServerError)"
common_causes:
  - "GitHub openai-python issue #3212 (opened May 8, 2026 by adnanboz). Synchronous SDK path has deterministic HTTP→exception mapping via _make_status_error, but background=True path has none. Error payload uses undocumented free-form error.code ('server_error', 'rate_limit_exceeded') not guaranteed present. Community member diva0078 provided workaround using manual classification enum. 3 comments, active discussion — strong signal. Category: OpenAI API matches P0 technology directly."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-18"
published_at: "2026-05-18T21:37:14.216Z"
updated_at: "2026-05-18T21:37:14.216Z"
---

## What this error means

`Background run returns status='failed' with opaque error.code string (e.g. 'server_error') and HTTP 200 OK — no typed exception raised, cannot use isinstance(e, RateLimitError) or isinstance(e, InternalServerError)` is a OpenAI API failure pattern reported for developers trying to developer needs reliable error classification for openai responses api background polling to implement proper retry/backoff logic instead of treating everything as opaque server errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub openai-python issue #3212 (opened May 8, 2026 by adnanboz). Synchronous SDK path has deterministic HTTP→exception mapping via _make_status_error, but background=True path has none. Error payload uses undocumented free-form error.code ('server_error', 'rate_limit_exceeded') not guaranteed present. Community member diva0078 provided workaround using manual classification enum. 3 comments, active discussion — strong signal. Category: OpenAI API matches P0 technology directly.

## Common causes

- GitHub openai-python issue #3212 (opened May 8, 2026 by adnanboz). Synchronous SDK path has deterministic HTTP→exception mapping via _make_status_error, but background=True path has none. Error payload uses undocumented free-form error.code ('server_error', 'rate_limit_exceeded') not guaranteed present. Community member diva0078 provided workaround using manual classification enum. 3 comments, active discussion — strong signal. Category: OpenAI API matches P0 technology directly.

## Quick fixes

1. Confirm the exact error signature matches `Background run returns status='failed' with opaque error.code string (e.g. 'server_error') and HTTP 200 OK — no typed exception raised, cannot use isinstance(e, RateLimitError) or isinstance(e, InternalServerError)`.
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

Evidence note: GitHub openai-python issue #3212 (opened May 8, 2026 by adnanboz). Synchronous SDK path has deterministic HTTP→exception mapping via _make_status_error, but background=True path has none. Error payload uses undocumented free-form error.code ('server_error', 'rate_limit_exceeded') not guaranteed present. Community member diva0078 provided workaround using manual classification enum. 3 comments, active discussion — strong signal. Category: OpenAI API matches P0 technology directly.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Background run returns status='failed' with opaque error.code string (e.g. 'server_error') and HTTP 200 OK — no typed exception raised, cannot use isinstance(e, RateLimitError) or isinstance(e, InternalServerError)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Background run returns status='failed' with opaque error.code string (e.g. 'server_error') and HTTP 200 OK — no typed exception raised, cannot use isinstance(e, RateLimitError) or isinstance(e, InternalServerError)`.
