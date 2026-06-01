---
title: "LiteLLM Proxy Parallel Request Limiter Raises Unhandled HTTPException Instead of RateLimitError"
description: "Fix LiteLLM proxy returning raw HTTPException with confusing message instead of normalized litellm.RateLimitError — blocks automated retry logic and proper rate-limit handling in downstream clients Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.proxy.proxy_server._handle_llm_api_exception(): Exception occured - No deployments available for selected model. (RouterRateLimitErrorBasic raised as plain HTTPException)"
common_causes:
  - "Active GitHub issue in BerriAI/litellm repo (v1.81.9+) where _handle_rate_limit_error method raises bare HTTPException instead of litellm.RateLimitError. Also produces misleading 'No deployments available for selected model' instead of clear rate-limit message. PR #20932 submitted to fix. Directly impacts proxy users with virtual key RPM/TPM limits who need accurate error classification for retry logic. Newer bug (Feb 2026). Not in covered-errors.md."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T21:44:27.945Z"
updated_at: "2026-06-01T21:44:27.945Z"
---

## What this error means

`litellm.proxy.proxy_server._handle_llm_api_exception(): Exception occured - No deployments available for selected model. (RouterRateLimitErrorBasic raised as plain HTTPException)` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy returning raw httpexception with confusing message instead of normalized litellm.ratelimiterror — blocks automated retry logic and proper rate-limit handling in downstream clients. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue in BerriAI/litellm repo (v1.81.9+) where _handle_rate_limit_error method raises bare HTTPException instead of litellm.RateLimitError. Also produces misleading 'No deployments available for selected model' instead of clear rate-limit message. PR #20932 submitted to fix. Directly impacts proxy users with virtual key RPM/TPM limits who need accurate error classification for retry logic. Newer bug (Feb 2026). Not in covered-errors.md.

## Common causes

- Active GitHub issue in BerriAI/litellm repo (v1.81.9+) where _handle_rate_limit_error method raises bare HTTPException instead of litellm.RateLimitError. Also produces misleading 'No deployments available for selected model' instead of clear rate-limit message. PR #20932 submitted to fix. Directly impacts proxy users with virtual key RPM/TPM limits who need accurate error classification for retry logic. Newer bug (Feb 2026). Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `litellm.proxy.proxy_server._handle_llm_api_exception(): Exception occured - No deployments available for selected model. (RouterRateLimitErrorBasic raised as plain HTTPException)`.
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

- https://github.com/BerriAI/litellm/issues/22007
- https://github.com/BerriAI/litellm/issues/20867

Evidence note: Active GitHub issue in BerriAI/litellm repo (v1.81.9+) where _handle_rate_limit_error method raises bare HTTPException instead of litellm.RateLimitError. Also produces misleading 'No deployments available for selected model' instead of clear rate-limit message. PR #20932 submitted to fix. Directly impacts proxy users with virtual key RPM/TPM limits who need accurate error classification for retry logic. Newer bug (Feb 2026). Not in covered-errors.md.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.proxy.proxy_server._handle_llm_api_exception(): Exception occured - No deployments available for selected model. (RouterRateLimitErrorBasic raised as plain HTTPException)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.proxy.proxy_server._handle_llm_api_exception(): Exception occured - No deployments available for selected model. (RouterRateLimitErrorBasic raised as plain HTTPException)`.
