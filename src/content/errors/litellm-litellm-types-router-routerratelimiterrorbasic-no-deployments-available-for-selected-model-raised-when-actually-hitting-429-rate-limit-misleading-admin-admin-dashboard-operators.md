---
title: "LiteLLM Proxy Misleading Error: Rate Limit Returns 'No Deployments Available for Selected Model' Instead of Clear 429 Message"
description: "Understand why LiteLLM proxy reports 'No deployments available' instead of clear rate-limit 429 error message, making it hard for admins to diagnose quota/rate-limit issues vs actual model unavailability Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model — raised when actually hitting 429 rate limit, misleading admin/admin dashboard operators"
common_causes:
  - "Source: BerriAI/litellm issue #20867 (Feb 2026). RouterRateLimitErrorBasic incorrectly surfaced as 'No deployments available' instead of the actual rate-limit condition. PR #20932 fixes this. Affects proxy administrators managing multi-model routing who rely on clear error messages to distinguish between rate-limited models and truly unavailable ones."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model — raised when actually hitting 429 rate limit, misleading admin/admin dashboard operators` is a LiteLLM failure pattern reported for developers trying to understand why litellm proxy reports 'no deployments available' instead of clear rate-limit 429 error message, making it hard for admins to diagnose quota/rate-limit issues vs actual model unavailability. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: BerriAI/litellm issue #20867 (Feb 2026). RouterRateLimitErrorBasic incorrectly surfaced as 'No deployments available' instead of the actual rate-limit condition. PR #20932 fixes this. Affects proxy administrators managing multi-model routing who rely on clear error messages to distinguish between rate-limited models and truly unavailable ones.

## Common causes

- Source: BerriAI/litellm issue #20867 (Feb 2026). RouterRateLimitErrorBasic incorrectly surfaced as 'No deployments available' instead of the actual rate-limit condition. PR #20932 fixes this. Affects proxy administrators managing multi-model routing who rely on clear error messages to distinguish between rate-limited models and truly unavailable ones.

## Quick fixes

1. Confirm the exact error signature matches `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model — raised when actually hitting 429 rate limit, misleading admin/admin dashboard operators`.
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

Evidence note: Source: BerriAI/litellm issue #20867 (Feb 2026). RouterRateLimitErrorBasic incorrectly surfaced as 'No deployments available' instead of the actual rate-limit condition. PR #20932 fixes this. Affects proxy administrators managing multi-model routing who rely on clear error messages to distinguish between rate-limited models and truly unavailable ones.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model — raised when actually hitting 429 rate limit, misleading admin/admin dashboard operators` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.types.router.RouterRateLimitErrorBasic: No deployments available for selected model — raised when actually hitting 429 rate limit, misleading admin/admin dashboard operators`.
