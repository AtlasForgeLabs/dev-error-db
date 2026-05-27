---
title: "Streaming requests bypass content_policy_fallbacks in LiteLLM handler"
description: "Fix LiteLLM streaming requests that skip content_policy_fallbacks configuration and fail immediately instead of trying alternate models Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "ContentPolicyViolationError raised directly in streaming_handler.py bypassing fallbacks; non-streaming path handles CPV correctly but streaming code path does not"
common_causes:
  - "GitHub issue #28599 on BerriAI/litellm shows ContentPolicyViolationError (HTTP 400) is treated as non-retriable in streaming path and raised directly, skipping the router's fallback chain entirely. Non-streaming path handles this correctly. Affects load-balancing reliability for paid API consumers using LiteLLM proxy. Category: LiteLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-27"
published_at: "2026-05-27T09:43:19.607Z"
updated_at: "2026-05-27T09:43:19.607Z"
---

## What this error means

`ContentPolicyViolationError raised directly in streaming_handler.py bypassing fallbacks; non-streaming path handles CPV correctly but streaming code path does not` is a LiteLLM failure pattern reported for developers trying to fix litellm streaming requests that skip content_policy_fallbacks configuration and fail immediately instead of trying alternate models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28599 on BerriAI/litellm shows ContentPolicyViolationError (HTTP 400) is treated as non-retriable in streaming path and raised directly, skipping the router's fallback chain entirely. Non-streaming path handles this correctly. Affects load-balancing reliability for paid API consumers using LiteLLM proxy. Category: LiteLLM.

## Common causes

- GitHub issue #28599 on BerriAI/litellm shows ContentPolicyViolationError (HTTP 400) is treated as non-retriable in streaming path and raised directly, skipping the router's fallback chain entirely. Non-streaming path handles this correctly. Affects load-balancing reliability for paid API consumers using LiteLLM proxy. Category: LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `ContentPolicyViolationError raised directly in streaming_handler.py bypassing fallbacks; non-streaming path handles CPV correctly but streaming code path does not`.
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

- https://github.com/BerriAI/litellm/issues/28599

Evidence note: GitHub issue #28599 on BerriAI/litellm shows ContentPolicyViolationError (HTTP 400) is treated as non-retriable in streaming path and raised directly, skipping the router's fallback chain entirely. Non-streaming path handles this correctly. Affects load-balancing reliability for paid API consumers using LiteLLM proxy. Category: LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `ContentPolicyViolationError raised directly in streaming_handler.py bypassing fallbacks; non-streaming path handles CPV correctly but streaming code path does not` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ContentPolicyViolationError raised directly in streaming_handler.py bypassing fallbacks; non-streaming path handles CPV correctly but streaming code path does not`.
