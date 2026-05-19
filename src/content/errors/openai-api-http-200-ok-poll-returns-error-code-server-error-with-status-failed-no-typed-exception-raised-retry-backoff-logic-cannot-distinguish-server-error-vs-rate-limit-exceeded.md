---
title: "OpenAI Responses API background mode lacks typed exceptions for failed runs"
description: "Fix unreliable error classification in OpenAI Python SDK when using /v1/responses background mode; needs stable error.type field mapped to SDK exception classes for proper retry logic Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP 200 OK poll returns error.code='server_error' with status='failed', no typed exception raised — retry/backoff logic cannot distinguish server_error vs rate_limit_exceeded"
common_causes:
  - "GitHub Issue #3212 in openai/openai-python (opened May 8 2026, adnanboz). Background API mode returns HTTP 200 even on failure; error.code is not documented as stable enum and does not map 1:1 to SDK exceptions (server_error ≠ InternalServerError). This blocks production retry/backoff strategies on paid usage. Category mapping: OpenAI API (direct pay-per-token API error handling gap)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-19"
published_at: "2026-05-19T17:37:16.979Z"
updated_at: "2026-05-19T17:37:16.979Z"
---

## What this error means

`HTTP 200 OK poll returns error.code='server_error' with status='failed', no typed exception raised — retry/backoff logic cannot distinguish server_error vs rate_limit_exceeded` is a OpenAI API failure pattern reported for developers trying to fix unreliable error classification in openai python sdk when using /v1/responses background mode; needs stable error.type field mapped to sdk exception classes for proper retry logic. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #3212 in openai/openai-python (opened May 8 2026, adnanboz). Background API mode returns HTTP 200 even on failure; error.code is not documented as stable enum and does not map 1:1 to SDK exceptions (server_error ≠ InternalServerError). This blocks production retry/backoff strategies on paid usage. Category mapping: OpenAI API (direct pay-per-token API error handling gap).

## Common causes

- GitHub Issue #3212 in openai/openai-python (opened May 8 2026, adnanboz). Background API mode returns HTTP 200 even on failure; error.code is not documented as stable enum and does not map 1:1 to SDK exceptions (server_error ≠ InternalServerError). This blocks production retry/backoff strategies on paid usage. Category mapping: OpenAI API (direct pay-per-token API error handling gap).

## Quick fixes

1. Confirm the exact error signature matches `HTTP 200 OK poll returns error.code='server_error' with status='failed', no typed exception raised — retry/backoff logic cannot distinguish server_error vs rate_limit_exceeded`.
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

Evidence note: GitHub Issue #3212 in openai/openai-python (opened May 8 2026, adnanboz). Background API mode returns HTTP 200 even on failure; error.code is not documented as stable enum and does not map 1:1 to SDK exceptions (server_error ≠ InternalServerError). This blocks production retry/backoff strategies on paid usage. Category mapping: OpenAI API (direct pay-per-token API error handling gap).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 200 OK poll returns error.code='server_error' with status='failed', no typed exception raised — retry/backoff logic cannot distinguish server_error vs rate_limit_exceeded` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 200 OK poll returns error.code='server_error' with status='failed', no typed exception raised — retry/backoff logic cannot distinguish server_error vs rate_limit_exceeded`.
