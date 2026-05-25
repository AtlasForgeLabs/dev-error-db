---
title: "Anthropic tool runner: append_messages + generate_tool_call_response causes infinite loop"
description: "Fix infinite tool-calling loop in Anthropic SDK when using both append_messages() and generate_tool_call_response() in same loop iteration Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "tool result never added to history — model re-calls same tool (infinite loop)"
common_causes:
  - "Source: https://github.com/anthropics/anthropic-sdk-python/pull/1594. When users call both append_messages() AND generate_tool_call_response() in the same loop iteration, the tool result was never added to history because _messages_modified bypassed auto-append. Causes infinite loops as model re-calls same tool. Affects production Anthropic API integrations."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-25"
published_at: "2026-05-25T00:43:12.200Z"
updated_at: "2026-05-25T00:43:12.200Z"
---

## What this error means

`tool result never added to history — model re-calls same tool (infinite loop)` is a Anthropic API failure pattern reported for developers trying to fix infinite tool-calling loop in anthropic sdk when using both append_messages() and generate_tool_call_response() in same loop iteration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/anthropic-sdk-python/pull/1594. When users call both append_messages() AND generate_tool_call_response() in the same loop iteration, the tool result was never added to history because _messages_modified bypassed auto-append. Causes infinite loops as model re-calls same tool. Affects production Anthropic API integrations.

## Common causes

- Source: https://github.com/anthropics/anthropic-sdk-python/pull/1594. When users call both append_messages() AND generate_tool_call_response() in the same loop iteration, the tool result was never added to history because _messages_modified bypassed auto-append. Causes infinite loops as model re-calls same tool. Affects production Anthropic API integrations.

## Quick fixes

1. Confirm the exact error signature matches `tool result never added to history — model re-calls same tool (infinite loop)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/anthropic-sdk-python/pull/1594

Evidence note: Source: https://github.com/anthropics/anthropic-sdk-python/pull/1594. When users call both append_messages() AND generate_tool_call_response() in the same loop iteration, the tool result was never added to history because _messages_modified bypassed auto-append. Causes infinite loops as model re-calls same tool. Affects production Anthropic API integrations.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `tool result never added to history — model re-calls same tool (infinite loop)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `tool result never added to history — model re-calls same tool (infinite loop)`.
