---
title: "LiteLLM Proxy rate limit exceeded, timeout, and model not found errors"
description: "Fix LiteLLM proxy rate limiting, request timeouts, and unknown model errors blocking AI API routing for production workloads Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM proxy: RateLimitError / timeout error / model_not_found — requests to 100+ LLM APIs fail due to misconfigured RPM/TPM limits or missing model_list entries"
common_causes:
  - "Official liteLLM documentation (docs.litellm.ai) covers proxy timeout configuration and rate limiting. Multiple Chinese-language troubleshooting guides (CSDN, cnblogs) document real-world deployment failures. AWS Samples bedrock-litellm repo provides rate-limit configuration examples. Enterprise proxy usage means billing impact when errors occur. Category mapped to LiteLLM as this is a proxy-specific error, not originating from any single upstream provider."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-18"
published_at: "2026-05-18T15:37:13.342Z"
updated_at: "2026-05-18T15:37:13.342Z"
---

## What this error means

`LiteLLM proxy: RateLimitError / timeout error / model_not_found — requests to 100+ LLM APIs fail due to misconfigured RPM/TPM limits or missing model_list entries` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy rate limiting, request timeouts, and unknown model errors blocking ai api routing for production workloads. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official liteLLM documentation (docs.litellm.ai) covers proxy timeout configuration and rate limiting. Multiple Chinese-language troubleshooting guides (CSDN, cnblogs) document real-world deployment failures. AWS Samples bedrock-litellm repo provides rate-limit configuration examples. Enterprise proxy usage means billing impact when errors occur. Category mapped to LiteLLM as this is a proxy-specific error, not originating from any single upstream provider.

## Common causes

- Official liteLLM documentation (docs.litellm.ai) covers proxy timeout configuration and rate limiting. Multiple Chinese-language troubleshooting guides (CSDN, cnblogs) document real-world deployment failures. AWS Samples bedrock-litellm repo provides rate-limit configuration examples. Enterprise proxy usage means billing impact when errors occur. Category mapped to LiteLLM as this is a proxy-specific error, not originating from any single upstream provider.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM proxy: RateLimitError / timeout error / model_not_found — requests to 100+ LLM APIs fail due to misconfigured RPM/TPM limits or missing model_list entries`.
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

- https://docs.litellm.ai/docs/proxy/timeout
- https://aws-samples.github.io/bedrock-litellm/25-config/20-rate-limit/
- https://blog.csdn.net/csdt122345/article/details/152162579

Evidence note: Official liteLLM documentation (docs.litellm.ai) covers proxy timeout configuration and rate limiting. Multiple Chinese-language troubleshooting guides (CSDN, cnblogs) document real-world deployment failures. AWS Samples bedrock-litellm repo provides rate-limit configuration examples. Enterprise proxy usage means billing impact when errors occur. Category mapped to LiteLLM as this is a proxy-specific error, not originating from any single upstream provider.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM proxy: RateLimitError / timeout error / model_not_found — requests to 100+ LLM APIs fail due to misconfigured RPM/TPM limits or missing model_list entries` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM proxy: RateLimitError / timeout error / model_not_found — requests to 100+ LLM APIs fail due to misconfigured RPM/TPM limits or missing model_list entries`.
