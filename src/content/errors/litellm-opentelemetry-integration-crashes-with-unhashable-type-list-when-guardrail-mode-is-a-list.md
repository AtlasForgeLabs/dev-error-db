---
title: "OpenTelemetry integration crashes with unhashable type list when guardrail mode is list"
description: "Fix crash in LiteLLM OpenTelemetry guardrail integration when guardrail mode is configured as a Python list instead of single value Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "OpenTelemetry integration crashes with 'unhashable type: ''list'' when guardrail mode is a list'"
common_causes:
  - "GitHub issue #28486 on BerriAI/litellm opened May 22, 2026 by kenany. Passguardrails_mode as list causes Python TypeError crash ('unhashable type: list') in OpenTelemetry instrumentation path. bug + llm translation + proxy labels. Directly impacts observability setups for production LLM proxies. Clean, specific error signature with reproduction path. Not in covered errors list."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-22"
published_at: "2026-05-22T04:39:46.665Z"
updated_at: "2026-05-22T04:39:46.665Z"
---

## What this error means

`OpenTelemetry integration crashes with 'unhashable type: ''list'' when guardrail mode is a list'` is a LiteLLM failure pattern reported for developers trying to fix crash in litellm opentelemetry guardrail integration when guardrail mode is configured as a python list instead of single value. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28486 on BerriAI/litellm opened May 22, 2026 by kenany. Passguardrails_mode as list causes Python TypeError crash ('unhashable type: list') in OpenTelemetry instrumentation path. bug + llm translation + proxy labels. Directly impacts observability setups for production LLM proxies. Clean, specific error signature with reproduction path. Not in covered errors list.

## Common causes

- GitHub issue #28486 on BerriAI/litellm opened May 22, 2026 by kenany. Passguardrails_mode as list causes Python TypeError crash ('unhashable type: list') in OpenTelemetry instrumentation path. bug + llm translation + proxy labels. Directly impacts observability setups for production LLM proxies. Clean, specific error signature with reproduction path. Not in covered errors list.

## Quick fixes

1. Confirm the exact error signature matches `OpenTelemetry integration crashes with 'unhashable type: ''list'' when guardrail mode is a list'`.
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

- https://github.com/BerriAI/litellm/issues/28486

Evidence note: GitHub issue #28486 on BerriAI/litellm opened May 22, 2026 by kenany. Passguardrails_mode as list causes Python TypeError crash ('unhashable type: list') in OpenTelemetry instrumentation path. bug + llm translation + proxy labels. Directly impacts observability setups for production LLM proxies. Clean, specific error signature with reproduction path. Not in covered errors list.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `OpenTelemetry integration crashes with 'unhashable type: ''list'' when guardrail mode is a list'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OpenTelemetry integration crashes with 'unhashable type: ''list'' when guardrail mode is a list'`.
