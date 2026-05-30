---
title: "OpenAI responses.stream crashes with TypeError when server emits response.completed with output=None"
description: "Fix OpenAI Python SDK crash when ChatGPT Codex backend or other services return response.output as null/None in stream completion events Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "responses.stream crashes with TypeError: 'NoneType' object is not iterable when server emits response.completed with output=None"
common_causes:
  - "GitHub issue #3312 in openai/openai-python (created May 27 2026). Line 61 in openai/lib/_parsing/_responses.py does 'for output in response.output:' without null guard. Also see related issue #3313 about parse_response crashing on null output from Codex backend stream. Both indicate missing null checks in stream parsing code."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-30"
published_at: "2026-05-30T10:43:29.020Z"
updated_at: "2026-05-30T10:43:29.020Z"
---

## What this error means

`responses.stream crashes with TypeError: 'NoneType' object is not iterable when server emits response.completed with output=None` is a OpenAI API failure pattern reported for developers trying to fix openai python sdk crash when chatgpt codex backend or other services return response.output as null/none in stream completion events. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #3312 in openai/openai-python (created May 27 2026). Line 61 in openai/lib/_parsing/_responses.py does 'for output in response.output:' without null guard. Also see related issue #3313 about parse_response crashing on null output from Codex backend stream. Both indicate missing null checks in stream parsing code.

## Common causes

- GitHub issue #3312 in openai/openai-python (created May 27 2026). Line 61 in openai/lib/_parsing/_responses.py does 'for output in response.output:' without null guard. Also see related issue #3313 about parse_response crashing on null output from Codex backend stream. Both indicate missing null checks in stream parsing code.

## Quick fixes

1. Confirm the exact error signature matches `responses.stream crashes with TypeError: 'NoneType' object is not iterable when server emits response.completed with output=None`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/3312
- https://github.com/openai/openai-python/issues/3313

Evidence note: GitHub issue #3312 in openai/openai-python (created May 27 2026). Line 61 in openai/lib/_parsing/_responses.py does 'for output in response.output:' without null guard. Also see related issue #3313 about parse_response crashing on null output from Codex backend stream. Both indicate missing null checks in stream parsing code.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `responses.stream crashes with TypeError: 'NoneType' object is not iterable when server emits response.completed with output=None` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `responses.stream crashes with TypeError: 'NoneType' object is not iterable when server emits response.completed with output=None`.
