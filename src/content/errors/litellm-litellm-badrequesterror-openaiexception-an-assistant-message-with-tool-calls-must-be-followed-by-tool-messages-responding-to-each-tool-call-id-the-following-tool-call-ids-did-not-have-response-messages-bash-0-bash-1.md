---
title: "API Error: 400 litellm.BadRequestError - assistant message with tool_calls must be followed by tool messages"
description: "Fix LiteLLM proxy returning 400 errors when tool_call_ids are not matched with corresponding response messages from downstream LLM providers Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1."
common_causes:
  - "GitHub Issue #28995 on BerriAI/litellm repo: LiteLLM proxy forwarding tool_calls to OpenAI chat completions receives responses where some tool_call_ids lack matching response messages. Causes 400 BadRequestError propagated to end user. Directly affects paid proxy deployments. Category: LiteLLM per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-27"
published_at: "2026-05-27T17:43:20.550Z"
updated_at: "2026-05-27T17:43:20.550Z"
---

## What this error means

`litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1.` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy returning 400 errors when tool_call_ids are not matched with corresponding response messages from downstream llm providers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #28995 on BerriAI/litellm repo: LiteLLM proxy forwarding tool_calls to OpenAI chat completions receives responses where some tool_call_ids lack matching response messages. Causes 400 BadRequestError propagated to end user. Directly affects paid proxy deployments. Category: LiteLLM per mapping rules.

## Common causes

- GitHub Issue #28995 on BerriAI/litellm repo: LiteLLM proxy forwarding tool_calls to OpenAI chat completions receives responses where some tool_call_ids lack matching response messages. Causes 400 BadRequestError propagated to end user. Directly affects paid proxy deployments. Category: LiteLLM per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1.`.
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

- https://github.com/BerriAI/litellm/issues/28995

Evidence note: GitHub Issue #28995 on BerriAI/litellm repo: LiteLLM proxy forwarding tool_calls to OpenAI chat completions receives responses where some tool_call_ids lack matching response messages. Causes 400 BadRequestError propagated to end user. Directly affects paid proxy deployments. Category: LiteLLM per mapping rules.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.BadRequestError: OpenAIException - an assistant message with 'tool_calls' must be followed by tool messages responding to each 'tool_call_id'. The following tool_call_ids did not have response messages: Bash:0, Bash:1.`.
