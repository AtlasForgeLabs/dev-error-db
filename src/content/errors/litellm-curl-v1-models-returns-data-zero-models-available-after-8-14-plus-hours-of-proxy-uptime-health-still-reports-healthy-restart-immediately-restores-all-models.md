---
title: "LiteLLM Proxy Silently Drops All Loaded Models After Extended Runtime"
description: "Fix LiteLLM proxy losing all configured models after extended runtime, breaking 100+ LLM API forwarding with no error logged Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "`curl /v1/models` returns `{\"data\": []}` — zero models available after 8-14+ hours of proxy uptime; `/health` still reports healthy; restart immediately restores all models"
common_causes:
  - "GitHub issue #25350 (BerriAI/litellm): Config-only proxy (config.yaml, no DB) loses all loaded models after 8-14 hours. curl /v1/models returns empty array. Health endpoint masks the issue by reporting healthy. Restart immediately restores all models. Suspected root cause: _schedule_regular_config_update() background task partially wipes llm_router.model_list. Affects teams running LiteLLM as a permanent API gateway with 26+ models. Production outage, silent failure. Category: LiteLLM (proxy-specific reliability bug)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T15:44:24.853Z"
updated_at: "2026-05-31T15:44:24.853Z"
---

## What this error means

``curl /v1/models` returns `{"data": []}` — zero models available after 8-14+ hours of proxy uptime; `/health` still reports healthy; restart immediately restores all models` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy losing all configured models after extended runtime, breaking 100+ llm api forwarding with no error logged. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #25350 (BerriAI/litellm): Config-only proxy (config.yaml, no DB) loses all loaded models after 8-14 hours. curl /v1/models returns empty array. Health endpoint masks the issue by reporting healthy. Restart immediately restores all models. Suspected root cause: _schedule_regular_config_update() background task partially wipes llm_router.model_list. Affects teams running LiteLLM as a permanent API gateway with 26+ models. Production outage, silent failure. Category: LiteLLM (proxy-specific reliability bug).

## Common causes

- GitHub issue #25350 (BerriAI/litellm): Config-only proxy (config.yaml, no DB) loses all loaded models after 8-14 hours. curl /v1/models returns empty array. Health endpoint masks the issue by reporting healthy. Restart immediately restores all models. Suspected root cause: _schedule_regular_config_update() background task partially wipes llm_router.model_list. Affects teams running LiteLLM as a permanent API gateway with 26+ models. Production outage, silent failure. Category: LiteLLM (proxy-specific reliability bug).

## Quick fixes

1. Confirm the exact error signature matches ``curl /v1/models` returns `{"data": []}` — zero models available after 8-14+ hours of proxy uptime; `/health` still reports healthy; restart immediately restores all models`.
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

Evidence note: GitHub issue #25350 (BerriAI/litellm): Config-only proxy (config.yaml, no DB) loses all loaded models after 8-14 hours. curl /v1/models returns empty array. Health endpoint masks the issue by reporting healthy. Restart immediately restores all models. Suspected root cause: _schedule_regular_config_update() background task partially wipes llm_router.model_list. Affects teams running LiteLLM as a permanent API gateway with 26+ models. Production outage, silent failure. Category: LiteLLM (proxy-specific reliability bug).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact ``curl /v1/models` returns `{"data": []}` — zero models available after 8-14+ hours of proxy uptime; `/health` still reports healthy; restart immediately restores all models` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without ``curl /v1/models` returns `{"data": []}` — zero models available after 8-14+ hours of proxy uptime; `/health` still reports healthy; restart immediately restores all models`.
