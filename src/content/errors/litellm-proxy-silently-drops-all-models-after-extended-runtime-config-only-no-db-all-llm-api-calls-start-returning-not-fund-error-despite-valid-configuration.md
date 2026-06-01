---
title: "LiteLLM Proxy Silently Drops All Models After Extended Runtime — Config-Only No-DB Mode Bug"
description: "Fix LiteLLM proxy memory leak / state corruption bug where configured models disappear from routing pool after prolonged operation without database backend Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Proxy silently drops all models after extended runtime (config-only, no DB) — all LLM API calls start returning Not Fund Error despite valid configuration"
common_causes:
  - "GitHub issue BerriAI/litellm #25350 shows active production bug affecting multi-provider proxy setups. Combined with #25469 PR and general proxy routing timeout/rate-limit issues found via search. Affects production systems using LiteLLM as centralized LLM gateway — high commercial value as organizations depend on reliable model routing. No existing dev-error-db coverage for this proxy-specific stability issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T04:44:26.054Z"
updated_at: "2026-06-01T04:44:26.054Z"
---

## What this error means

`Proxy silently drops all models after extended runtime (config-only, no DB) — all LLM API calls start returning Not Fund Error despite valid configuration` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy memory leak / state corruption bug where configured models disappear from routing pool after prolonged operation without database backend. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm #25350 shows active production bug affecting multi-provider proxy setups. Combined with #25469 PR and general proxy routing timeout/rate-limit issues found via search. Affects production systems using LiteLLM as centralized LLM gateway — high commercial value as organizations depend on reliable model routing. No existing dev-error-db coverage for this proxy-specific stability issue.

## Common causes

- GitHub issue BerriAI/litellm #25350 shows active production bug affecting multi-provider proxy setups. Combined with #25469 PR and general proxy routing timeout/rate-limit issues found via search. Affects production systems using LiteLLM as centralized LLM gateway — high commercial value as organizations depend on reliable model routing. No existing dev-error-db coverage for this proxy-specific stability issue.

## Quick fixes

1. Confirm the exact error signature matches `Proxy silently drops all models after extended runtime (config-only, no DB) — all LLM API calls start returning Not Fund Error despite valid configuration`.
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
- https://github.com/BerriAI/litellm/pull/25469
- https://docs.litellm.ai/docs/exception_mapping

Evidence note: GitHub issue BerriAI/litellm #25350 shows active production bug affecting multi-provider proxy setups. Combined with #25469 PR and general proxy routing timeout/rate-limit issues found via search. Affects production systems using LiteLLM as centralized LLM gateway — high commercial value as organizations depend on reliable model routing. No existing dev-error-db coverage for this proxy-specific stability issue.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Proxy silently drops all models after extended runtime (config-only, no DB) — all LLM API calls start returning Not Fund Error despite valid configuration` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Proxy silently drops all models after extended runtime (config-only, no DB) — all LLM API calls start returning Not Fund Error despite valid configuration`.
