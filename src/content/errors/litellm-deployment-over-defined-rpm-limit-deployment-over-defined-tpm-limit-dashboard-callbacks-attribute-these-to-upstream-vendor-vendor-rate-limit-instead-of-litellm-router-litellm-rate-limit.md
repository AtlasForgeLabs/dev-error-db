---
title: "LiteLLM Router-Side Rate-Limit Errors Mislabelled as Vendor Rate Limit Instead of litellm_rate_limit"
description: "Fix LiteLLM rate-limit categorization so router-side deployment throttling is properly labelled for correct dashboard attribution and alerting routing Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Deployment over defined rpm limit / Deployment over defined tpm limit — dashboard/callbacks attribute these to upstream vendor (VENDOR_RATE_LIMIT) instead of LiteLLM router (LITELLM_RATE_LIMIT)"
common_causes:
  - "GitHub PR #27708 in BerriAI/litellm identifies that PR #27687 made RateLimitError default category be VENDOR_RATE_LIMIT, causing router-side raises in lowest_tpm_rpm_v2.py (5 instances) and model_rate_limit_check.py (4 instances) to silently misattribute themselves as vendor errors. This breaks dashboards and callback-based alerting that rely on error categories to split litellm-side vs. vendor-side throttles. All 9 raises previously emitted category=vendor_rate_limit; fix makes them emit litellm_rate_limit with correct rate_limit_type. Impacts enterprise LiteLLM proxy operators monitoring rate limits. Category mapping: LiteLLM (proxy/routing layer error affecting commercial deployments)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-22"
published_at: "2026-05-22T21:39:48.605Z"
updated_at: "2026-05-22T21:39:48.605Z"
---

## What this error means

`Deployment over defined rpm limit / Deployment over defined tpm limit — dashboard/callbacks attribute these to upstream vendor (VENDOR_RATE_LIMIT) instead of LiteLLM router (LITELLM_RATE_LIMIT)` is a LiteLLM failure pattern reported for developers trying to fix litellm rate-limit categorization so router-side deployment throttling is properly labelled for correct dashboard attribution and alerting routing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub PR #27708 in BerriAI/litellm identifies that PR #27687 made RateLimitError default category be VENDOR_RATE_LIMIT, causing router-side raises in lowest_tpm_rpm_v2.py (5 instances) and model_rate_limit_check.py (4 instances) to silently misattribute themselves as vendor errors. This breaks dashboards and callback-based alerting that rely on error categories to split litellm-side vs. vendor-side throttles. All 9 raises previously emitted category=vendor_rate_limit; fix makes them emit litellm_rate_limit with correct rate_limit_type. Impacts enterprise LiteLLM proxy operators monitoring rate limits. Category mapping: LiteLLM (proxy/routing layer error affecting commercial deployments).

## Common causes

- GitHub PR #27708 in BerriAI/litellm identifies that PR #27687 made RateLimitError default category be VENDOR_RATE_LIMIT, causing router-side raises in lowest_tpm_rpm_v2.py (5 instances) and model_rate_limit_check.py (4 instances) to silently misattribute themselves as vendor errors. This breaks dashboards and callback-based alerting that rely on error categories to split litellm-side vs. vendor-side throttles. All 9 raises previously emitted category=vendor_rate_limit; fix makes them emit litellm_rate_limit with correct rate_limit_type. Impacts enterprise LiteLLM proxy operators monitoring rate limits. Category mapping: LiteLLM (proxy/routing layer error affecting commercial deployments).

## Quick fixes

1. Confirm the exact error signature matches `Deployment over defined rpm limit / Deployment over defined tpm limit — dashboard/callbacks attribute these to upstream vendor (VENDOR_RATE_LIMIT) instead of LiteLLM router (LITELLM_RATE_LIMIT)`.
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

Evidence note: GitHub PR #27708 in BerriAI/litellm identifies that PR #27687 made RateLimitError default category be VENDOR_RATE_LIMIT, causing router-side raises in lowest_tpm_rpm_v2.py (5 instances) and model_rate_limit_check.py (4 instances) to silently misattribute themselves as vendor errors. This breaks dashboards and callback-based alerting that rely on error categories to split litellm-side vs. vendor-side throttles. All 9 raises previously emitted category=vendor_rate_limit; fix makes them emit litellm_rate_limit with correct rate_limit_type. Impacts enterprise LiteLLM proxy operators monitoring rate limits. Category mapping: LiteLLM (proxy/routing layer error affecting commercial deployments).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Deployment over defined rpm limit / Deployment over defined tpm limit — dashboard/callbacks attribute these to upstream vendor (VENDOR_RATE_LIMIT) instead of LiteLLM router (LITELLM_RATE_LIMIT)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Deployment over defined rpm limit / Deployment over defined tpm limit — dashboard/callbacks attribute these to upstream vendor (VENDOR_RATE_LIMIT) instead of LiteLLM router (LITELLM_RATE_LIMIT)`.
