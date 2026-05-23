---
title: "LiteLLM router-side rate-limit errors mislabeled as vendor rate limit"
description: "Fix LiteLLM rate-limit error categorization where router-side RPM/TPM throttling triggers (deployment-level and model-level) are falsely reported as vendor/third-party rate limits Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm_rate_limit errors emitted as vendor_rate_limit — dashboards/callbacks attribute router-side throttles to upstream vendor instead of LiteLLM proxy"
common_causes:
  - "PR #27708 on BerriAI/litellm (open PR, created 2026-05-12, 4 comments). This is a follow-up to unified rate-limit error work (#27687). 9 router-side raises across lowest_tpm_rpm_v2.py and model_rate_limit_check.py emit wrong category. Impacts dashboards, callbacks, and alerting for enterprises routing traffic through LiteLLM proxy."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-23"
published_at: "2026-05-23T08:39:50.052Z"
updated_at: "2026-05-23T08:39:50.052Z"
---

## What this error means

`litellm_rate_limit errors emitted as vendor_rate_limit — dashboards/callbacks attribute router-side throttles to upstream vendor instead of LiteLLM proxy` is a LiteLLM failure pattern reported for developers trying to fix litellm rate-limit error categorization where router-side rpm/tpm throttling triggers (deployment-level and model-level) are falsely reported as vendor/third-party rate limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

PR #27708 on BerriAI/litellm (open PR, created 2026-05-12, 4 comments). This is a follow-up to unified rate-limit error work (#27687). 9 router-side raises across lowest_tpm_rpm_v2.py and model_rate_limit_check.py emit wrong category. Impacts dashboards, callbacks, and alerting for enterprises routing traffic through LiteLLM proxy.

## Common causes

- PR #27708 on BerriAI/litellm (open PR, created 2026-05-12, 4 comments). This is a follow-up to unified rate-limit error work (#27687). 9 router-side raises across lowest_tpm_rpm_v2.py and model_rate_limit_check.py emit wrong category. Impacts dashboards, callbacks, and alerting for enterprises routing traffic through LiteLLM proxy.

## Quick fixes

1. Confirm the exact error signature matches `litellm_rate_limit errors emitted as vendor_rate_limit — dashboards/callbacks attribute router-side throttles to upstream vendor instead of LiteLLM proxy`.
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

Evidence note: PR #27708 on BerriAI/litellm (open PR, created 2026-05-12, 4 comments). This is a follow-up to unified rate-limit error work (#27687). 9 router-side raises across lowest_tpm_rpm_v2.py and model_rate_limit_check.py emit wrong category. Impacts dashboards, callbacks, and alerting for enterprises routing traffic through LiteLLM proxy.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm_rate_limit errors emitted as vendor_rate_limit — dashboards/callbacks attribute router-side throttles to upstream vendor instead of LiteLLM proxy` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm_rate_limit errors emitted as vendor_rate_limit — dashboards/callbacks attribute router-side throttles to upstream vendor instead of LiteLLM proxy`.
