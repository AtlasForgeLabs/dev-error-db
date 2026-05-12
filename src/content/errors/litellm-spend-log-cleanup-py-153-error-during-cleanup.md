---
title: "LiteLLM Spendlog Cleanup Silently Fails with Unhelpful Error Message"
description: "Fix LiteLLM spend_log_cleanup silent failure on Kubernetes Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "spend_log_cleanup.py:153 - Error during cleanup"
common_causes:
  - "LiteLLM users who set up spendlog retention for cost tracking find that old records are not being cleaned up. The error log shows 'spend_log_cleanup.py:153 - Error during cleanup' with no additional context, making debugging impossible in Kubernetes deployments."
  - "GitHub issue (updated 2026-05-07). Spendlog retention configured but old records not removed. Error message provides no diagnostic information. Affects Kubernetes deployments with 2 replicas. Directly impacts cost tracking and billing for LiteLLM proxy users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM spend log retention not working"
  - "LiteLLM database cleanup fails"
updated: "2026-05-12"
published_at: "2026-05-12T15:12:16.977Z"
updated_at: "2026-05-12T15:12:16.977Z"
---

## What this error means

`spend_log_cleanup.py:153 - Error during cleanup` is a LiteLLM failure pattern reported for developers trying to fix litellm spend_log_cleanup silent failure on kubernetes. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue (updated 2026-05-07). Spendlog retention configured but old records not removed. Error message provides no diagnostic information. Affects Kubernetes deployments with 2 replicas. Directly impacts cost tracking and billing for LiteLLM proxy users.

## Common causes

- LiteLLM users who set up spendlog retention for cost tracking find that old records are not being cleaned up. The error log shows 'spend_log_cleanup.py:153 - Error during cleanup' with no additional context, making debugging impossible in Kubernetes deployments.
- GitHub issue (updated 2026-05-07). Spendlog retention configured but old records not removed. Error message provides no diagnostic information. Affects Kubernetes deployments with 2 replicas. Directly impacts cost tracking and billing for LiteLLM proxy users.

## Quick fixes

1. Confirm the exact error signature matches `spend_log_cleanup.py:153 - Error during cleanup`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/BerriAI/litellm/issues/16582

Evidence note: GitHub issue (updated 2026-05-07). Spendlog retention configured but old records not removed. Error message provides no diagnostic information. Affects Kubernetes deployments with 2 replicas. Directly impacts cost tracking and billing for LiteLLM proxy users.

## Related errors

- LiteLLM spend log retention not working
- LiteLLM database cleanup fails

## FAQ

### What should I check first?

Start with the exact `spend_log_cleanup.py:153 - Error during cleanup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `spend_log_cleanup.py:153 - Error during cleanup`.
