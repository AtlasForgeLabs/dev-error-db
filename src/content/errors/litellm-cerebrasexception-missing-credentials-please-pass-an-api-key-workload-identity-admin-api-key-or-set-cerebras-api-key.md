---
title: "LiteLLM CerebrasException missing credentials — CI fails when CEREBRAS_API_KEY not set in GitHub Actions"
description: "Fix CerebrasException missing credentials error in CI pipeline when using LiteLLM to route to Cerebras provider Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set CEREBRAS_API_KEY"
common_causes:
  - "CI pipelines using LiteLLM with Cerebras as a provider fail with CerebrasException when API key isn't configured. The error message is generic and doesn't clearly indicate which credential is missing."
  - "CI fails with: litellm.InternalServerError: CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set the CEREBRAS_API_KEY or CEREBRAS_ADMIN_KEY environment variable. The error propagates through LiteLLM's Cerebras integration."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cerebras API key missing CI"
  - "LiteLLM Cerebras provider auth failure"
  - "CEREBRAS_API_KEY environment variable"
updated: "2026-05-14"
published_at: "2026-05-14T13:13:19.978Z"
updated_at: "2026-05-14T13:13:19.978Z"
---

## What this error means

`CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set CEREBRAS_API_KEY` is a LiteLLM failure pattern reported for developers trying to fix cerebrasexception missing credentials error in ci pipeline when using litellm to route to cerebras provider. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

CI fails with: litellm.InternalServerError: CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set the CEREBRAS_API_KEY or CEREBRAS_ADMIN_KEY environment variable. The error propagates through LiteLLM's Cerebras integration.

## Common causes

- CI pipelines using LiteLLM with Cerebras as a provider fail with CerebrasException when API key isn't configured. The error message is generic and doesn't clearly indicate which credential is missing.
- CI fails with: litellm.InternalServerError: CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set the CEREBRAS_API_KEY or CEREBRAS_ADMIN_KEY environment variable. The error propagates through LiteLLM's Cerebras integration.

## Quick fixes

1. Confirm the exact error signature matches `CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set CEREBRAS_API_KEY`.
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

- https://github.com/huggingface/smolagents/issues/2274

Evidence note: CI fails with: litellm.InternalServerError: CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set the CEREBRAS_API_KEY or CEREBRAS_ADMIN_KEY environment variable. The error propagates through LiteLLM's Cerebras integration.

## Related errors

- Cerebras API key missing CI
- LiteLLM Cerebras provider auth failure
- CEREBRAS_API_KEY environment variable

## FAQ

### What should I check first?

Start with the exact `CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set CEREBRAS_API_KEY` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CerebrasException - Missing credentials. Please pass an api_key, workload_identity, admin_api_key, or set CEREBRAS_API_KEY`.
