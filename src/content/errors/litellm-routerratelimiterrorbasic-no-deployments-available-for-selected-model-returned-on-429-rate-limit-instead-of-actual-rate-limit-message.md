---
title: "LiteLLM Proxy Rate Limit Returns Misleading 'No Deployments Available' Error Instead of 429"
description: "Fix LiteLLM proxy masking 429 rate limit errors with incorrect 'No deployments available' message causing debugging confusion Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "RouterRateLimitErrorBasic: No deployments available for selected model — returned on 429 rate limit instead of actual rate-limit message"
common_causes:
  - "GitHub issue #20867 (BerriAI/litellm), fixed via PR #20932 on Feb 11, 2026. LiteLLM v1.81.9 affected. The proxy throws RouterRateLimitErrorBasic with misleading text instead of the actual rate-limit info from downstream providers. Critical for production AI gateway operators. Category mapping: LiteLLM proxy-specific routing/visibility bug."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T17:44:27.461Z"
updated_at: "2026-06-01T17:44:27.461Z"
---

## What this error means

`RouterRateLimitErrorBasic: No deployments available for selected model — returned on 429 rate limit instead of actual rate-limit message` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy masking 429 rate limit errors with incorrect 'no deployments available' message causing debugging confusion. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20867 (BerriAI/litellm), fixed via PR #20932 on Feb 11, 2026. LiteLLM v1.81.9 affected. The proxy throws RouterRateLimitErrorBasic with misleading text instead of the actual rate-limit info from downstream providers. Critical for production AI gateway operators. Category mapping: LiteLLM proxy-specific routing/visibility bug.

## Common causes

- GitHub issue #20867 (BerriAI/litellm), fixed via PR #20932 on Feb 11, 2026. LiteLLM v1.81.9 affected. The proxy throws RouterRateLimitErrorBasic with misleading text instead of the actual rate-limit info from downstream providers. Critical for production AI gateway operators. Category mapping: LiteLLM proxy-specific routing/visibility bug.

## Quick fixes

1. Confirm the exact error signature matches `RouterRateLimitErrorBasic: No deployments available for selected model — returned on 429 rate limit instead of actual rate-limit message`.
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

Evidence note: GitHub issue #20867 (BerriAI/litellm), fixed via PR #20932 on Feb 11, 2026. LiteLLM v1.81.9 affected. The proxy throws RouterRateLimitErrorBasic with misleading text instead of the actual rate-limit info from downstream providers. Critical for production AI gateway operators. Category mapping: LiteLLM proxy-specific routing/visibility bug.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `RouterRateLimitErrorBasic: No deployments available for selected model — returned on 429 rate limit instead of actual rate-limit message` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `RouterRateLimitErrorBasic: No deployments available for selected model — returned on 429 rate limit instead of actual rate-limit message`.
