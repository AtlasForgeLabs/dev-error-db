---
title: "LiteLLM Proxy RouterRateLimitErrorBasic 'No deployments available for selected model'"
description: "Developer running LiteLLM proxy gets RouterRateLimitErrorBasic with 'No deployments available for selected model' when calling /chat/completions. Proxy returns 429 and crashes with visible traceback. Needs config fix to resolve deployment routing. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model. — 429 response from LiteLLM proxy with full stack trace"
common_causes:
  - "GitHub issue #20867 on BerriAI/litellm repo documents this exact bug where rate limit error is reported as 'No deployments available' with full Python stack trace showing _pre_call_checks failure. Affects LiteLLM proxy billing/routing logic. Category mapping: LiteLLM proxy internal error → 'LiteLLM'. Not in dev-error-db."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T10:44:29.559Z"
updated_at: "2026-06-02T10:44:29.559Z"
---

## What this error means

`litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model. — 429 response from LiteLLM proxy with full stack trace` is a LiteLLM failure pattern reported for developers trying to developer running litellm proxy gets routerratelimiterrorbasic with 'no deployments available for selected model' when calling /chat/completions. proxy returns 429 and crashes with visible traceback. needs config fix to resolve deployment routing.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20867 on BerriAI/litellm repo documents this exact bug where rate limit error is reported as 'No deployments available' with full Python stack trace showing _pre_call_checks failure. Affects LiteLLM proxy billing/routing logic. Category mapping: LiteLLM proxy internal error → 'LiteLLM'. Not in dev-error-db.

## Common causes

- GitHub issue #20867 on BerriAI/litellm repo documents this exact bug where rate limit error is reported as 'No deployments available' with full Python stack trace showing _pre_call_checks failure. Affects LiteLLM proxy billing/routing logic. Category mapping: LiteLLM proxy internal error → 'LiteLLM'. Not in dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model. — 429 response from LiteLLM proxy with full stack trace`.
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
- https://docs.litellm.ai/docs/exception_mapping
- https://docs.litellm.ai/docs/proxy/error_diagnosis

Evidence note: GitHub issue #20867 on BerriAI/litellm repo documents this exact bug where rate limit error is reported as 'No deployments available' with full Python stack trace showing _pre_call_checks failure. Affects LiteLLM proxy billing/routing logic. Category mapping: LiteLLM proxy internal error → 'LiteLLM'. Not in dev-error-db.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model. — 429 response from LiteLLM proxy with full stack trace` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model. — 429 response from LiteLLM proxy with full stack trace`.
