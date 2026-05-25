---
title: "LiteLLM Router Rate-Limit Errors Silently Categorized as Vendor Errors"
description: "Fix LiteLLM proxy misclassifying router-level rate limits as vendor rate limits, losing critical debugging information about which tier hit the rate limit Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm_rate_limit (router-side rate limit incorrectly categorized as vendor)"
common_causes:
  - "Found in BerriAI/litellm#27708 (PR 2026-05-12). LiteLLM PR #27687 introduced RateLimitError category system but this follow-up fix shows router-side rate limits were still silently labeled as VENDOR_RATE_LIMIT instead of LITELLM_RATE_LIMIT. Affects enterprise proxy users who need to distinguish between provider throttling vs self-inflicted rate limits. LiteLLM not yet covered in dev-error-db."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-25"
published_at: "2026-05-25T15:43:14.100Z"
updated_at: "2026-05-25T15:43:14.100Z"
---

## What this error means

`litellm_rate_limit (router-side rate limit incorrectly categorized as vendor)` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy misclassifying router-level rate limits as vendor rate limits, losing critical debugging information about which tier hit the rate limit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in BerriAI/litellm#27708 (PR 2026-05-12). LiteLLM PR #27687 introduced RateLimitError category system but this follow-up fix shows router-side rate limits were still silently labeled as VENDOR_RATE_LIMIT instead of LITELLM_RATE_LIMIT. Affects enterprise proxy users who need to distinguish between provider throttling vs self-inflicted rate limits. LiteLLM not yet covered in dev-error-db.

## Common causes

- Found in BerriAI/litellm#27708 (PR 2026-05-12). LiteLLM PR #27687 introduced RateLimitError category system but this follow-up fix shows router-side rate limits were still silently labeled as VENDOR_RATE_LIMIT instead of LITELLM_RATE_LIMIT. Affects enterprise proxy users who need to distinguish between provider throttling vs self-inflicted rate limits. LiteLLM not yet covered in dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `litellm_rate_limit (router-side rate limit incorrectly categorized as vendor)`.
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

- https://github.com/BerriAI/litellm/pull/27708
- https://github.com/BerriAI/litellm/pull/27687

Evidence note: Found in BerriAI/litellm#27708 (PR 2026-05-12). LiteLLM PR #27687 introduced RateLimitError category system but this follow-up fix shows router-side rate limits were still silently labeled as VENDOR_RATE_LIMIT instead of LITELLM_RATE_LIMIT. Affects enterprise proxy users who need to distinguish between provider throttling vs self-inflicted rate limits. LiteLLM not yet covered in dev-error-db.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm_rate_limit (router-side rate limit incorrectly categorized as vendor)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm_rate_limit (router-side rate limit incorrectly categorized as vendor)`.
