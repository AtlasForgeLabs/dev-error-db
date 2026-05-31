---
title: "LiteLLM Rate Limit Misreported as Deployment Failure — Missing Provider-Specific Error Prefix"
description: "Decode correct rate limit errors from LiteLLM proxy when upstream provider (Bedrock, etc.) hits RPM/TPM quotas but LiteLLM masks them as deployment failures Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "No deployments available for selected provider — rate limit actually triggered but wrapped as deployment unavailable"
common_causes:
  - "GitHub Issues #20867 + #18116 on BerriAI/litellm. Provider-side rate limits get normalized but LiteLLM internal proxy limits (virtual key RPM/TPM in _handle_rate_limit_error) raise plain HTTPException without proper litellm.RateLimitError prefix. Teams using LiteLLM proxy for multi-provider routing cannot distinguish real outages from rate limits. Category mapping: LiteLLM proxy errors → LiteLLM."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T07:44:23.835Z"
updated_at: "2026-05-31T07:44:23.835Z"
---

## What this error means

`No deployments available for selected provider — rate limit actually triggered but wrapped as deployment unavailable` is a LiteLLM failure pattern reported for developers trying to decode correct rate limit errors from litellm proxy when upstream provider (bedrock, etc.) hits rpm/tpm quotas but litellm masks them as deployment failures. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issues #20867 + #18116 on BerriAI/litellm. Provider-side rate limits get normalized but LiteLLM internal proxy limits (virtual key RPM/TPM in _handle_rate_limit_error) raise plain HTTPException without proper litellm.RateLimitError prefix. Teams using LiteLLM proxy for multi-provider routing cannot distinguish real outages from rate limits. Category mapping: LiteLLM proxy errors → LiteLLM.

## Common causes

- GitHub Issues #20867 + #18116 on BerriAI/litellm. Provider-side rate limits get normalized but LiteLLM internal proxy limits (virtual key RPM/TPM in _handle_rate_limit_error) raise plain HTTPException without proper litellm.RateLimitError prefix. Teams using LiteLLM proxy for multi-provider routing cannot distinguish real outages from rate limits. Category mapping: LiteLLM proxy errors → LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `No deployments available for selected provider — rate limit actually triggered but wrapped as deployment unavailable`.
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

- https://github.com/BerriAI/litellm/issues/20867
- https://github.com/BerriAI/litellm/issues/18116

Evidence note: GitHub Issues #20867 + #18116 on BerriAI/litellm. Provider-side rate limits get normalized but LiteLLM internal proxy limits (virtual key RPM/TPM in _handle_rate_limit_error) raise plain HTTPException without proper litellm.RateLimitError prefix. Teams using LiteLLM proxy for multi-provider routing cannot distinguish real outages from rate limits. Category mapping: LiteLLM proxy errors → LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `No deployments available for selected provider — rate limit actually triggered but wrapped as deployment unavailable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No deployments available for selected provider — rate limit actually triggered but wrapped as deployment unavailable`.
