---
title: "OpenAI SDK streaming tool_call delta accumulation breaks with duplicate indexes in first chunk"
description: "Developers using OpenAI streaming API see corrupted tool_call outputs when the first chunk contains multiple tool_calls with duplicate index values. Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "accumulate_delta assumes indexed list entry's index field matches its physical position; multiple tool_calls entries with same index in first streamed chunk corrupts accumulated state"
common_causes:
  - "GitHub issue #3201 in openai-python repo (label: bug). The _deltas.py accumulate_delta function has a subtle indexing bug that produces incorrect accumulated tool_calls. Affects all streaming consumers of Chat Completions and Responses API with tool calling. Still open. Category mapping: OpenAI SDK library bug → OpenAI API."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T13:39:44.628Z"
updated_at: "2026-05-21T13:39:44.628Z"
---

## What this error means

`accumulate_delta assumes indexed list entry's index field matches its physical position; multiple tool_calls entries with same index in first streamed chunk corrupts accumulated state` is a OpenAI API failure pattern reported for developers trying to developers using openai streaming api see corrupted tool_call outputs when the first chunk contains multiple tool_calls with duplicate index values.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #3201 in openai-python repo (label: bug). The _deltas.py accumulate_delta function has a subtle indexing bug that produces incorrect accumulated tool_calls. Affects all streaming consumers of Chat Completions and Responses API with tool calling. Still open. Category mapping: OpenAI SDK library bug → OpenAI API.

## Common causes

- GitHub issue #3201 in openai-python repo (label: bug). The _deltas.py accumulate_delta function has a subtle indexing bug that produces incorrect accumulated tool_calls. Affects all streaming consumers of Chat Completions and Responses API with tool calling. Still open. Category mapping: OpenAI SDK library bug → OpenAI API.

## Quick fixes

1. Confirm the exact error signature matches `accumulate_delta assumes indexed list entry's index field matches its physical position; multiple tool_calls entries with same index in first streamed chunk corrupts accumulated state`.
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

- https://github.com/openai/openai-python/issues/3201

Evidence note: GitHub issue #3201 in openai-python repo (label: bug). The _deltas.py accumulate_delta function has a subtle indexing bug that produces incorrect accumulated tool_calls. Affects all streaming consumers of Chat Completions and Responses API with tool calling. Still open. Category mapping: OpenAI SDK library bug → OpenAI API.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `accumulate_delta assumes indexed list entry's index field matches its physical position; multiple tool_calls entries with same index in first streamed chunk corrupts accumulated state` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `accumulate_delta assumes indexed list entry's index field matches its physical position; multiple tool_calls entries with same index in first streamed chunk corrupts accumulated state`.
