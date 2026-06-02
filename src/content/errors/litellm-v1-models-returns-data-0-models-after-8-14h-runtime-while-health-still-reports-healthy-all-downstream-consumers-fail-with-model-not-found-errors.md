---
title: "LiteLLM Proxy silently drops all loaded models after extended runtime — model list returns empty"
description: "Fix LiteLLM proxy silently dropping all config-loaded models after extended runtime, causing model_not_found errors for all downstream API calls while health endpoint incorrectly reports healthy Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "/v1/models returns {\"data\": []} (0 models) after 8-14h runtime while /health still reports healthy — all downstream consumers fail with model-not-found errors"
common_causes:
  - "GitHub Issue #25350 on BerriAI/litellm. Config-only setup (no DB), models loaded from config.yaml disappear after 8-14 hours under normal load. Health endpoint masks the problem by reporting healthy. Suspected root cause: _schedule_regular_config_update background task partially wipes llm_router.model_list or model_cost_map_reload task interferes. Workaround: external health check auto-restarts proxy every 10 minutes. While the specific reporter self-closed it as their own gateway config issue, this is a known silent-failure pattern referenced by related issues #12711, #22215, #24349. Affects enterprise LiteLLM proxy deployments running 24/7. Category: LiteLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T09:44:29.474Z"
updated_at: "2026-06-02T09:44:29.474Z"
---

## What this error means

`/v1/models returns {"data": []} (0 models) after 8-14h runtime while /health still reports healthy — all downstream consumers fail with model-not-found errors` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy silently dropping all config-loaded models after extended runtime, causing model_not_found errors for all downstream api calls while health endpoint incorrectly reports healthy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #25350 on BerriAI/litellm. Config-only setup (no DB), models loaded from config.yaml disappear after 8-14 hours under normal load. Health endpoint masks the problem by reporting healthy. Suspected root cause: _schedule_regular_config_update background task partially wipes llm_router.model_list or model_cost_map_reload task interferes. Workaround: external health check auto-restarts proxy every 10 minutes. While the specific reporter self-closed it as their own gateway config issue, this is a known silent-failure pattern referenced by related issues #12711, #22215, #24349. Affects enterprise LiteLLM proxy deployments running 24/7. Category: LiteLLM.

## Common causes

- GitHub Issue #25350 on BerriAI/litellm. Config-only setup (no DB), models loaded from config.yaml disappear after 8-14 hours under normal load. Health endpoint masks the problem by reporting healthy. Suspected root cause: _schedule_regular_config_update background task partially wipes llm_router.model_list or model_cost_map_reload task interferes. Workaround: external health check auto-restarts proxy every 10 minutes. While the specific reporter self-closed it as their own gateway config issue, this is a known silent-failure pattern referenced by related issues #12711, #22215, #24349. Affects enterprise LiteLLM proxy deployments running 24/7. Category: LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `/v1/models returns {"data": []} (0 models) after 8-14h runtime while /health still reports healthy — all downstream consumers fail with model-not-found errors`.
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

- https://github.com/BerriAI/litellm/issues/25350

Evidence note: GitHub Issue #25350 on BerriAI/litellm. Config-only setup (no DB), models loaded from config.yaml disappear after 8-14 hours under normal load. Health endpoint masks the problem by reporting healthy. Suspected root cause: _schedule_regular_config_update background task partially wipes llm_router.model_list or model_cost_map_reload task interferes. Workaround: external health check auto-restarts proxy every 10 minutes. While the specific reporter self-closed it as their own gateway config issue, this is a known silent-failure pattern referenced by related issues #12711, #22215, #24349. Affects enterprise LiteLLM proxy deployments running 24/7. Category: LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `/v1/models returns {"data": []} (0 models) after 8-14h runtime while /health still reports healthy — all downstream consumers fail with model-not-found errors` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/v1/models returns {"data": []} (0 models) after 8-14h runtime while /health still reports healthy — all downstream consumers fail with model-not-found errors`.
