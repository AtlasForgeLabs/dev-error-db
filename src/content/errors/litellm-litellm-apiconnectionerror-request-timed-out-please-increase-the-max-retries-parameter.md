---
title: "Fixing LiteLLM APIConnectionError: Connection timed out"
description: "Fix LiteLLM API connection timeout errors by adjusting request_timeout or retry settings Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.APIConnectionError: Request timed out. Please increase the max_retries parameter."
common_causes:
  - "Found via GitHub issue #7996 on BerriAI/litellm repo. User reports litellm.APIConnectionError when backend service is slow; fix involves setting litellm.request_timeout or passing timeout dynamically in completion call. High commercial value as timeout blocks production API calls."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T04:13:52.129Z"
updated_at: "2026-05-17T04:13:52.129Z"
---

## What this error means

`litellm.APIConnectionError: Request timed out. Please increase the max_retries parameter.` is a LiteLLM failure pattern reported for developers trying to fix litellm api connection timeout errors by adjusting request_timeout or retry settings. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub issue #7996 on BerriAI/litellm repo. User reports litellm.APIConnectionError when backend service is slow; fix involves setting litellm.request_timeout or passing timeout dynamically in completion call. High commercial value as timeout blocks production API calls.

## Common causes

- Found via GitHub issue #7996 on BerriAI/litellm repo. User reports litellm.APIConnectionError when backend service is slow; fix involves setting litellm.request_timeout or passing timeout dynamically in completion call. High commercial value as timeout blocks production API calls.

## Quick fixes

1. Confirm the exact error signature matches `litellm.APIConnectionError: Request timed out. Please increase the max_retries parameter.`.
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

- https://github.com/BerriAI/litellm/issues/7996

Evidence note: Found via GitHub issue #7996 on BerriAI/litellm repo. User reports litellm.APIConnectionError when backend service is slow; fix involves setting litellm.request_timeout or passing timeout dynamically in completion call. High commercial value as timeout blocks production API calls.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.APIConnectionError: Request timed out. Please increase the max_retries parameter.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.APIConnectionError: Request timed out. Please increase the max_retries parameter.`.
