---
title: "LiteLLM rate limit error message body leaks full SHA-256 token hash on 429 responses"
description: "Fix LiteLLM rate limit response leaking API key hash in error messages Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM rate limit 429 response leaks full SHA-256 token hash in error.message"
common_causes:
  - "Security issue where LiteLLM 429 responses expose full 64-character SHA-256 hash of virtual keys to any HTTP client including end users"
  - "parallel_request_limiter_v3.py line 1261 includes full token hash in 429 detail message. redact_user_api_key_info setting does not affect this code path. Full SHA-256 hash exposed to end users."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM BudgetExceededError false positive"
  - "Claude Code 401 Auth Loop"
updated: "2026-05-14"
published_at: "2026-05-14T09:13:19.404Z"
updated_at: "2026-05-14T09:13:19.404Z"
---

## What this error means

`LiteLLM rate limit 429 response leaks full SHA-256 token hash in error.message` is a LiteLLM failure pattern reported for developers trying to fix litellm rate limit response leaking api key hash in error messages. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

parallel_request_limiter_v3.py line 1261 includes full token hash in 429 detail message. redact_user_api_key_info setting does not affect this code path. Full SHA-256 hash exposed to end users.

## Common causes

- Security issue where LiteLLM 429 responses expose full 64-character SHA-256 hash of virtual keys to any HTTP client including end users
- parallel_request_limiter_v3.py line 1261 includes full token hash in 429 detail message. redact_user_api_key_info setting does not affect this code path. Full SHA-256 hash exposed to end users.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM rate limit 429 response leaks full SHA-256 token hash in error.message`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27884

Evidence note: parallel_request_limiter_v3.py line 1261 includes full token hash in 429 detail message. redact_user_api_key_info setting does not affect this code path. Full SHA-256 hash exposed to end users.

## Related errors

- LiteLLM BudgetExceededError false positive
- Claude Code 401 Auth Loop

## FAQ

### What should I check first?

Start with the exact `LiteLLM rate limit 429 response leaks full SHA-256 token hash in error.message` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM rate limit 429 response leaks full SHA-256 token hash in error.message`.
