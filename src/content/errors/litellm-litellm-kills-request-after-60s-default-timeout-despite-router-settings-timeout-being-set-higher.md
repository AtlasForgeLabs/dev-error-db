---
title: "LiteLLM Proxy Timeout Killing Long Requests at Default 60 Seconds"
description: "Users proxying long-running requests through LiteLLM face premature 60s kill; need to properly configure timeout propagation to underlying provider. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM kills request after 60s default timeout despite router_settings.timeout being set higher"
common_causes:
  - "GitHub discussion #16108: user sets router_settings.timeout: 1800 but litellm_params timeout still defaults to 60s. Request gets killed mid-execution. Related: issue #14895 shows TCP connector limits cause timeouts in high-concurrency. Distinct from rate-limit timeout — this is about internal timeout config inheritance bug."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-18"
published_at: "2026-05-18T04:37:11.923Z"
updated_at: "2026-05-18T04:37:11.923Z"
---

## What this error means

`LiteLLM kills request after 60s default timeout despite router_settings.timeout being set higher` is a LiteLLM failure pattern reported for developers trying to users proxying long-running requests through litellm face premature 60s kill; need to properly configure timeout propagation to underlying provider.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub discussion #16108: user sets router_settings.timeout: 1800 but litellm_params timeout still defaults to 60s. Request gets killed mid-execution. Related: issue #14895 shows TCP connector limits cause timeouts in high-concurrency. Distinct from rate-limit timeout — this is about internal timeout config inheritance bug.

## Common causes

- GitHub discussion #16108: user sets router_settings.timeout: 1800 but litellm_params timeout still defaults to 60s. Request gets killed mid-execution. Related: issue #14895 shows TCP connector limits cause timeouts in high-concurrency. Distinct from rate-limit timeout — this is about internal timeout config inheritance bug.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM kills request after 60s default timeout despite router_settings.timeout being set higher`.
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

- https://github.com/BerriAI/litellm/discussions/16108
- https://github.com/BerriAI/litellm/issues/14895

Evidence note: GitHub discussion #16108: user sets router_settings.timeout: 1800 but litellm_params timeout still defaults to 60s. Request gets killed mid-execution. Related: issue #14895 shows TCP connector limits cause timeouts in high-concurrency. Distinct from rate-limit timeout — this is about internal timeout config inheritance bug.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM kills request after 60s default timeout despite router_settings.timeout being set higher` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM kills request after 60s default timeout despite router_settings.timeout being set higher`.
