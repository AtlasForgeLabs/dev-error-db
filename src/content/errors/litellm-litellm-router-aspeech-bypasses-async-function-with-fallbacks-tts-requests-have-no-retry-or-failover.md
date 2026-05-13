---
title: "LiteLLM Router.aspeech() Bypasses Fallback Mechanism — No Retry on TTS Deployment Failure"
description: "Fix LiteLLM Router.aspeech no retry failover for TTS requests Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM Router.aspeech() bypasses async_function_with_fallbacks — TTS requests have no retry or failover"
common_causes:
  - "LiteLLM's Router.aspeech() bypasses the async_function_with_fallbacks mechanism, calling litellm.aspeech directly. This means TTS requests have no retry on failure and no failover to other deployments — inconsistent with how other model types are routed. Developers with multi-deployment TTS setups get hard failures."
  - "Open issue on official BerriAI/litellm repo. Confirmed bug: Router.aspeech() calls litellm.aspeech directly, bypassing retry/failover. Inconsistent with routing behavior for other model types. Affects multi-deployment TTS configurations."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM router retry not working"
  - "LiteLLM TTS deployment failover failed"
updated: "2026-05-13"
published_at: "2026-05-13T01:12:19.993Z"
updated_at: "2026-05-13T01:12:19.993Z"
---

## What this error means

`LiteLLM Router.aspeech() bypasses async_function_with_fallbacks — TTS requests have no retry or failover` is a LiteLLM failure pattern reported for developers trying to fix litellm router.aspeech no retry failover for tts requests. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on official BerriAI/litellm repo. Confirmed bug: Router.aspeech() calls litellm.aspeech directly, bypassing retry/failover. Inconsistent with routing behavior for other model types. Affects multi-deployment TTS configurations.

## Common causes

- LiteLLM's Router.aspeech() bypasses the async_function_with_fallbacks mechanism, calling litellm.aspeech directly. This means TTS requests have no retry on failure and no failover to other deployments — inconsistent with how other model types are routed. Developers with multi-deployment TTS setups get hard failures.
- Open issue on official BerriAI/litellm repo. Confirmed bug: Router.aspeech() calls litellm.aspeech directly, bypassing retry/failover. Inconsistent with routing behavior for other model types. Affects multi-deployment TTS configurations.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM Router.aspeech() bypasses async_function_with_fallbacks — TTS requests have no retry or failover`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/BerriAI/litellm/issues/27778

Evidence note: Open issue on official BerriAI/litellm repo. Confirmed bug: Router.aspeech() calls litellm.aspeech directly, bypassing retry/failover. Inconsistent with routing behavior for other model types. Affects multi-deployment TTS configurations.

## Related errors

- LiteLLM router retry not working
- LiteLLM TTS deployment failover failed

## FAQ

### What should I check first?

Start with the exact `LiteLLM Router.aspeech() bypasses async_function_with_fallbacks — TTS requests have no retry or failover` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM Router.aspeech() bypasses async_function_with_fallbacks — TTS requests have no retry or failover`.
