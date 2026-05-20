---
title: "OpenAI Python SDK: Background Response API Lacks Stable Error Type Mapping"
description: "Handle background mode API failures reliably — classify retries vs non-retriable errors based on error type Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Background Responses API error.code not mapped to SDK exception class; rate_limit_exceeded, server_error return opaque strings without typed exceptions"
common_causes:
  - "GitHub Issue #3212 on openai/openai-python opened May 8, 2026 (2 weeks ago, active with multiple contributors volunteering). Root cause: polling GET /v1/responses/{id} returns HTTP 200 even when run failed, so SDK never dispatches typed exceptions. Users must manually parse error.code string which is undocumented. Affects production systems using ChatGPT Codex Connector. Category: OpenAI API (paid per-token service)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-20"
published_at: "2026-05-20T14:38:29.678Z"
updated_at: "2026-05-20T14:38:29.678Z"
---

## What this error means

`Background Responses API error.code not mapped to SDK exception class; rate_limit_exceeded, server_error return opaque strings without typed exceptions` is a OpenAI API failure pattern reported for developers trying to handle background mode api failures reliably — classify retries vs non-retriable errors based on error type. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #3212 on openai/openai-python opened May 8, 2026 (2 weeks ago, active with multiple contributors volunteering). Root cause: polling GET /v1/responses/{id} returns HTTP 200 even when run failed, so SDK never dispatches typed exceptions. Users must manually parse error.code string which is undocumented. Affects production systems using ChatGPT Codex Connector. Category: OpenAI API (paid per-token service).

## Common causes

- GitHub Issue #3212 on openai/openai-python opened May 8, 2026 (2 weeks ago, active with multiple contributors volunteering). Root cause: polling GET /v1/responses/{id} returns HTTP 200 even when run failed, so SDK never dispatches typed exceptions. Users must manually parse error.code string which is undocumented. Affects production systems using ChatGPT Codex Connector. Category: OpenAI API (paid per-token service).

## Quick fixes

1. Confirm the exact error signature matches `Background Responses API error.code not mapped to SDK exception class; rate_limit_exceeded, server_error return opaque strings without typed exceptions`.
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

Evidence note: GitHub Issue #3212 on openai/openai-python opened May 8, 2026 (2 weeks ago, active with multiple contributors volunteering). Root cause: polling GET /v1/responses/{id} returns HTTP 200 even when run failed, so SDK never dispatches typed exceptions. Users must manually parse error.code string which is undocumented. Affects production systems using ChatGPT Codex Connector. Category: OpenAI API (paid per-token service).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Background Responses API error.code not mapped to SDK exception class; rate_limit_exceeded, server_error return opaque strings without typed exceptions` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Background Responses API error.code not mapped to SDK exception class; rate_limit_exceeded, server_error return opaque strings without typed exceptions`.
