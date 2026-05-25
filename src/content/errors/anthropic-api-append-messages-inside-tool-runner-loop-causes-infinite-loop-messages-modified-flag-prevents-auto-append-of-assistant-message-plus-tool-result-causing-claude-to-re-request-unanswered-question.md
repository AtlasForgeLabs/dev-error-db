---
title: "Anthropic SDK beta.messages.tool_runner Infinite Loop Bug"
description: "Fix infinite loop in Anthropic SDK's beta messages tool_runner when calling append_messages() in tool-use loop; root cause is _messages_modified flag interfering with auto-tool-result appending per official Advanced Usage docs example Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "append_messages() inside tool runner loop causes infinite loop; _messages_modified flag prevents auto-append of assistant message + tool result causing Claude to re-request unanswered question"
common_causes:
  - "Source: https://github.com/anthropics/anthropic-sdk-python/issues/1536 (Anthropic official Python SDK repo, May 13, 2026, 2 comments). Bug in advanced usage example from official platform docs causes infinite loop. The root cause (_messages_modified = True skipping auto-append at line 281 of _beta_runner.py) is clearly identified. Affects developers building tool-use agents with Claude, high commercial value for AI application developers."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-25"
published_at: "2026-05-25T01:43:12.343Z"
updated_at: "2026-05-25T01:43:12.343Z"
---

## What this error means

`append_messages() inside tool runner loop causes infinite loop; _messages_modified flag prevents auto-append of assistant message + tool result causing Claude to re-request unanswered question` is a Anthropic API failure pattern reported for developers trying to fix infinite loop in anthropic sdk's beta messages tool_runner when calling append_messages() in tool-use loop; root cause is _messages_modified flag interfering with auto-tool-result appending per official advanced usage docs example. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/anthropic-sdk-python/issues/1536 (Anthropic official Python SDK repo, May 13, 2026, 2 comments). Bug in advanced usage example from official platform docs causes infinite loop. The root cause (_messages_modified = True skipping auto-append at line 281 of _beta_runner.py) is clearly identified. Affects developers building tool-use agents with Claude, high commercial value for AI application developers.

## Common causes

- Source: https://github.com/anthropics/anthropic-sdk-python/issues/1536 (Anthropic official Python SDK repo, May 13, 2026, 2 comments). Bug in advanced usage example from official platform docs causes infinite loop. The root cause (_messages_modified = True skipping auto-append at line 281 of _beta_runner.py) is clearly identified. Affects developers building tool-use agents with Claude, high commercial value for AI application developers.

## Quick fixes

1. Confirm the exact error signature matches `append_messages() inside tool runner loop causes infinite loop; _messages_modified flag prevents auto-append of assistant message + tool result causing Claude to re-request unanswered question`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1536

Evidence note: Source: https://github.com/anthropics/anthropic-sdk-python/issues/1536 (Anthropic official Python SDK repo, May 13, 2026, 2 comments). Bug in advanced usage example from official platform docs causes infinite loop. The root cause (_messages_modified = True skipping auto-append at line 281 of _beta_runner.py) is clearly identified. Affects developers building tool-use agents with Claude, high commercial value for AI application developers.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `append_messages() inside tool runner loop causes infinite loop; _messages_modified flag prevents auto-append of assistant message + tool result causing Claude to re-request unanswered question` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `append_messages() inside tool runner loop causes infinite loop; _messages_modified flag prevents auto-append of assistant message + tool result causing Claude to re-request unanswered question`.
