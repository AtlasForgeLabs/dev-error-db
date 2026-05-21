---
title: "Anthropic overloaded_error during streaming not caught by max_retries in LangChain wrapper"
description: "Understand why max_retries doesn't prevent overloaded_error interruptions during streaming with ChatAnthropic in LangChain, and find workaround patterns Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "anthropic.APIStatusError: {'type': 'error', 'error': {'details': None, 'type': 'overloaded_error', 'message': 'Overloaded'}} during streaming"
common_causes:
  - "GitHub issue #688 in anthropics/anthropic-sdk-python (Kevin-McIsaac, Oct 2024). User building RAG pipeline with LangChain gets 1-in-100 stream interruptions from overloaded_error. max_retries applies only to initial HTTP request, not mid-stream events. Officially confirmed intended behavior — callers must wrap stream iteration in try/except and retry the full request. Still relevant for SEO because many developers search for how to handle this exact pattern."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-21"
published_at: "2026-05-21T07:39:43.782Z"
updated_at: "2026-05-21T07:39:43.782Z"
---

## What this error means

`anthropic.APIStatusError: {'type': 'error', 'error': {'details': None, 'type': 'overloaded_error', 'message': 'Overloaded'}} during streaming` is a Anthropic API failure pattern reported for developers trying to understand why max_retries doesn't prevent overloaded_error interruptions during streaming with chatanthropic in langchain, and find workaround patterns. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #688 in anthropics/anthropic-sdk-python (Kevin-McIsaac, Oct 2024). User building RAG pipeline with LangChain gets 1-in-100 stream interruptions from overloaded_error. max_retries applies only to initial HTTP request, not mid-stream events. Officially confirmed intended behavior — callers must wrap stream iteration in try/except and retry the full request. Still relevant for SEO because many developers search for how to handle this exact pattern.

## Common causes

- GitHub issue #688 in anthropics/anthropic-sdk-python (Kevin-McIsaac, Oct 2024). User building RAG pipeline with LangChain gets 1-in-100 stream interruptions from overloaded_error. max_retries applies only to initial HTTP request, not mid-stream events. Officially confirmed intended behavior — callers must wrap stream iteration in try/except and retry the full request. Still relevant for SEO because many developers search for how to handle this exact pattern.

## Quick fixes

1. Confirm the exact error signature matches `anthropic.APIStatusError: {'type': 'error', 'error': {'details': None, 'type': 'overloaded_error', 'message': 'Overloaded'}} during streaming`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/688

Evidence note: GitHub issue #688 in anthropics/anthropic-sdk-python (Kevin-McIsaac, Oct 2024). User building RAG pipeline with LangChain gets 1-in-100 stream interruptions from overloaded_error. max_retries applies only to initial HTTP request, not mid-stream events. Officially confirmed intended behavior — callers must wrap stream iteration in try/except and retry the full request. Still relevant for SEO because many developers search for how to handle this exact pattern.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `anthropic.APIStatusError: {'type': 'error', 'error': {'details': None, 'type': 'overloaded_error', 'message': 'Overloaded'}} during streaming` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `anthropic.APIStatusError: {'type': 'error', 'error': {'details': None, 'type': 'overloaded_error', 'message': 'Overloaded'}} during streaming`.
