---
title: "LiteLLM Multi-Replica Deployments Bypass TPM Limits — Per-Pod Enforcement Instead of Cross-Pod"
description: "Fix LiteLLM deployment-level TPM rate limit being enforced per-pod instead of across all replicas in multi-replica Kubernetes deployments Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Deployment-level TPM limit enforced per-pod, not cross-pod — effective limit = tpm_limit × N_replicas"
common_causes:
  - "Enterprise LiteLLM deployments on Kubernetes rely on deployment-level TPM limits to control costs. When limits are per-pod instead of cross-pod, the effective rate limit scales with replica count, defeating cost controls and potentially causing unexpected API overages."
  - "In multi-replica LiteLLM proxy with usage-based-routing-v2, deployment-level TPM limit (litellm_params.tpm in model_list) is enforced against each replica's local in-memory counter. Effective per-deployment ceiling becomes tpm_limit × N_replica. Traffic up to that inflated ceiling passes without rate limiting."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM Kubernetes TPM rate limit scaling"
  - "LiteLLM distributed rate limiting Redis"
  - "LiteLLM multi-replica deployment rate limit"
updated: "2026-05-12"
published_at: "2026-05-12T14:12:16.674Z"
updated_at: "2026-05-12T14:12:16.674Z"
---

## What this error means

`Deployment-level TPM limit enforced per-pod, not cross-pod — effective limit = tpm_limit × N_replicas` is a LiteLLM failure pattern reported for developers trying to fix litellm deployment-level tpm rate limit being enforced per-pod instead of across all replicas in multi-replica kubernetes deployments. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

In multi-replica LiteLLM proxy with usage-based-routing-v2, deployment-level TPM limit (litellm_params.tpm in model_list) is enforced against each replica's local in-memory counter. Effective per-deployment ceiling becomes tpm_limit × N_replica. Traffic up to that inflated ceiling passes without rate limiting.

## Common causes

- Enterprise LiteLLM deployments on Kubernetes rely on deployment-level TPM limits to control costs. When limits are per-pod instead of cross-pod, the effective rate limit scales with replica count, defeating cost controls and potentially causing unexpected API overages.
- In multi-replica LiteLLM proxy with usage-based-routing-v2, deployment-level TPM limit (litellm_params.tpm in model_list) is enforced against each replica's local in-memory counter. Effective per-deployment ceiling becomes tpm_limit × N_replica. Traffic up to that inflated ceiling passes without rate limiting.

## Quick fixes

1. Confirm the exact error signature matches `Deployment-level TPM limit enforced per-pod, not cross-pod — effective limit = tpm_limit × N_replicas`.
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

- https://github.com/BerriAI/litellm/issues/27736

Evidence note: In multi-replica LiteLLM proxy with usage-based-routing-v2, deployment-level TPM limit (litellm_params.tpm in model_list) is enforced against each replica's local in-memory counter. Effective per-deployment ceiling becomes tpm_limit × N_replica. Traffic up to that inflated ceiling passes without rate limiting.

## Related errors

- LiteLLM Kubernetes TPM rate limit scaling
- LiteLLM distributed rate limiting Redis
- LiteLLM multi-replica deployment rate limit

## FAQ

### What should I check first?

Start with the exact `Deployment-level TPM limit enforced per-pod, not cross-pod — effective limit = tpm_limit × N_replicas` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Deployment-level TPM limit enforced per-pod, not cross-pod — effective limit = tpm_limit × N_replicas`.
