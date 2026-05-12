---
title: "Pydantic AI thinking=False silently dropped for OpenRouter and other reasoning models"
description: "Fix Pydantic AI silently dropping thinking=False setting when routing through OpenRouter, xAI, or Bedrock reasoning models Includes evidence for OpenRouter troubleshooting demand."
category: "AI Coding Tools"
technology: "OpenRouter"
error_signature: "model_settings thinking=False silently dropped — reasoning field missing from OpenRouter request body"
common_causes:
  - "Pydantic AI developers set model_settings={'thinking': False} to disable reasoning mode, but the setting is silently dropped — no exception, no warning. The HTTP body sent to OpenRouter contains no reasoning field at all. Affects cost control and response behavior for paid API usage"
  - "Pydantic AI issue #5379 (created 2026-05-12, 3 comments). thinking=False silently dropped for reasoning models routed through OpenRouterModel, xAI, Bedrock. HTTP body contains no reasoning field. No exception or warning thrown — completely silent failure."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Pydantic AI reasoning mode not working"
  - "OpenRouter thinking parameter ignored"
  - "Pydantic AI model_settings silently ignored"
updated: "2026-05-12"
published_at: "2026-05-12T19:12:17.878Z"
updated_at: "2026-05-12T19:12:17.878Z"
---

## What this error means

`model_settings thinking=False silently dropped — reasoning field missing from OpenRouter request body` is a OpenRouter failure pattern reported for developers trying to fix pydantic ai silently dropping thinking=false setting when routing through openrouter, xai, or bedrock reasoning models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Pydantic AI issue #5379 (created 2026-05-12, 3 comments). thinking=False silently dropped for reasoning models routed through OpenRouterModel, xAI, Bedrock. HTTP body contains no reasoning field. No exception or warning thrown — completely silent failure.

## Common causes

- Pydantic AI developers set model_settings={'thinking': False} to disable reasoning mode, but the setting is silently dropped — no exception, no warning. The HTTP body sent to OpenRouter contains no reasoning field at all. Affects cost control and response behavior for paid API usage
- Pydantic AI issue #5379 (created 2026-05-12, 3 comments). thinking=False silently dropped for reasoning models routed through OpenRouterModel, xAI, Bedrock. HTTP body contains no reasoning field. No exception or warning thrown — completely silent failure.

## Quick fixes

1. Confirm the exact error signature matches `model_settings thinking=False silently dropped — reasoning field missing from OpenRouter request body`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/pydantic/pydantic-ai/issues/5379

Evidence note: Pydantic AI issue #5379 (created 2026-05-12, 3 comments). thinking=False silently dropped for reasoning models routed through OpenRouterModel, xAI, Bedrock. HTTP body contains no reasoning field. No exception or warning thrown — completely silent failure.

## Related errors

- Pydantic AI reasoning mode not working
- OpenRouter thinking parameter ignored
- Pydantic AI model_settings silently ignored

## FAQ

### What should I check first?

Start with the exact `model_settings thinking=False silently dropped — reasoning field missing from OpenRouter request body` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model_settings thinking=False silently dropped — reasoning field missing from OpenRouter request body`.
