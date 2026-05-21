---
title: "LiteLLM Virtual Keys leak _litellm_* params breaking provider fallback chains"
description: "Fix LiteLLM proxy fallback chain broken by leaked internal rate-limiting parameters into provider API calls Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "BadRequestError / RateLimitError: Unrecognized request arguments supplied: _litellm_rate_limit_descriptors, _litellm_tpm_reserved_model (when using virtual keys with tpm/rpm limits + fallback chains)"
common_causes:
  - "GitHub issue BerriAI/litellm#28146 — Virtual key tpm/rpm limits cause internal _litellm_* params to leak into upstream provider requests (OpenAI, Anthropic both reject). Breaks fallback chains silently. Root cause in parallel_request_limiter_v3.py line 2027. Recently updated May 22 2026. Not in covered-errors.md. Category: LiteLLM — proxy billing/rate limiting bug in production multi-provider setup."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T17:39:45.123Z"
updated_at: "2026-05-21T17:39:45.123Z"
---

## What this error means

`BadRequestError / RateLimitError: Unrecognized request arguments supplied: _litellm_rate_limit_descriptors, _litellm_tpm_reserved_model (when using virtual keys with tpm/rpm limits + fallback chains)` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy fallback chain broken by leaked internal rate-limiting parameters into provider api calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#28146 — Virtual key tpm/rpm limits cause internal _litellm_* params to leak into upstream provider requests (OpenAI, Anthropic both reject). Breaks fallback chains silently. Root cause in parallel_request_limiter_v3.py line 2027. Recently updated May 22 2026. Not in covered-errors.md. Category: LiteLLM — proxy billing/rate limiting bug in production multi-provider setup.

## Common causes

- GitHub issue BerriAI/litellm#28146 — Virtual key tpm/rpm limits cause internal _litellm_* params to leak into upstream provider requests (OpenAI, Anthropic both reject). Breaks fallback chains silently. Root cause in parallel_request_limiter_v3.py line 2027. Recently updated May 22 2026. Not in covered-errors.md. Category: LiteLLM — proxy billing/rate limiting bug in production multi-provider setup.

## Quick fixes

1. Confirm the exact error signature matches `BadRequestError / RateLimitError: Unrecognized request arguments supplied: _litellm_rate_limit_descriptors, _litellm_tpm_reserved_model (when using virtual keys with tpm/rpm limits + fallback chains)`.
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

- https://github.com/BerriAI/litellm/issues/28146

Evidence note: GitHub issue BerriAI/litellm#28146 — Virtual key tpm/rpm limits cause internal _litellm_* params to leak into upstream provider requests (OpenAI, Anthropic both reject). Breaks fallback chains silently. Root cause in parallel_request_limiter_v3.py line 2027. Recently updated May 22 2026. Not in covered-errors.md. Category: LiteLLM — proxy billing/rate limiting bug in production multi-provider setup.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `BadRequestError / RateLimitError: Unrecognized request arguments supplied: _litellm_rate_limit_descriptors, _litellm_tpm_reserved_model (when using virtual keys with tpm/rpm limits + fallback chains)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BadRequestError / RateLimitError: Unrecognized request arguments supplied: _litellm_rate_limit_descriptors, _litellm_tpm_reserved_model (when using virtual keys with tpm/rpm limits + fallback chains)`.
