---
title: "Anthropic overloaded_error SSE event surfaces as raw JSON to user"
description: "Handle Anthropic overloaded_error gracefully instead of surfacing raw JSON error wall to end users Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "SSE error returned from server: {\"type\":\"error\",\"error\":{\"type\":\"overloaded_error\",…}} — raw JSON leaked into Copilot UI"
common_causes:
  - "Umbraco.AI agent client was not handling transient overloaded_error SSE events, displaying ugly raw JSON errors to users. While this is an application-level bug, it reveals how developers commonly mishandle this specific API error code. High ranking value because overloaded_error is documented but confusing — many devs will search for the exact error message text."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-24"
published_at: "2026-05-24T11:42:10.014Z"
updated_at: "2026-05-24T11:42:10.014Z"
---

## What this error means

`SSE error returned from server: {"type":"error","error":{"type":"overloaded_error",…}} — raw JSON leaked into Copilot UI` is a Anthropic API failure pattern reported for developers trying to handle anthropic overloaded_error gracefully instead of surfacing raw json error wall to end users. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Umbraco.AI agent client was not handling transient overloaded_error SSE events, displaying ugly raw JSON errors to users. While this is an application-level bug, it reveals how developers commonly mishandle this specific API error code. High ranking value because overloaded_error is documented but confusing — many devs will search for the exact error message text.

## Common causes

- Umbraco.AI agent client was not handling transient overloaded_error SSE events, displaying ugly raw JSON errors to users. While this is an application-level bug, it reveals how developers commonly mishandle this specific API error code. High ranking value because overloaded_error is documented but confusing — many devs will search for the exact error message text.

## Quick fixes

1. Confirm the exact error signature matches `SSE error returned from server: {"type":"error","error":{"type":"overloaded_error",…}} — raw JSON leaked into Copilot UI`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/umbraco/Umbraco.AI/issues/174

Evidence note: Umbraco.AI agent client was not handling transient overloaded_error SSE events, displaying ugly raw JSON errors to users. While this is an application-level bug, it reveals how developers commonly mishandle this specific API error code. High ranking value because overloaded_error is documented but confusing — many devs will search for the exact error message text.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `SSE error returned from server: {"type":"error","error":{"type":"overloaded_error",…}} — raw JSON leaked into Copilot UI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SSE error returned from server: {"type":"error","error":{"type":"overloaded_error",…}} — raw JSON leaked into Copilot UI`.
