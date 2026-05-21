---
title: "Inconsistency between Responses API and Chat Completions API on rate limit errors (openai-python #2699)"
description: "Understand and unify rate limit error handling between OpenAI's Responses API and Chat Completions API so developers don't need separate error paths for each endpoint Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Responses API and Chat Completions API handle rate limit errors differently (different error codes, headers, or body formats), breaking unified error handling"
common_causes:
  - "GitHub Issue #2699 in openai/openai-python by aloumakos, opened Oct 20, 2025. The two main OpenAI API surfaces (new Responses API vs legacy Chat Completions) return rate limit errors with inconsistent formats — different HTTP codes, different JSON structures, different header fields (like x-ratelimit-reset-tokens). Covered-errors.md lists general 'rate limit error' but not the specific cross-API inconsistency pattern. Category: OpenAI API. Commercially significant for teams using both APIs with shared error-handling middleware."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T20:39:45.602Z"
updated_at: "2026-05-21T20:39:45.602Z"
---

## What this error means

`Responses API and Chat Completions API handle rate limit errors differently (different error codes, headers, or body formats), breaking unified error handling` is a OpenAI API failure pattern reported for developers trying to understand and unify rate limit error handling between openai's responses api and chat completions api so developers don't need separate error paths for each endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2699 in openai/openai-python by aloumakos, opened Oct 20, 2025. The two main OpenAI API surfaces (new Responses API vs legacy Chat Completions) return rate limit errors with inconsistent formats — different HTTP codes, different JSON structures, different header fields (like x-ratelimit-reset-tokens). Covered-errors.md lists general 'rate limit error' but not the specific cross-API inconsistency pattern. Category: OpenAI API. Commercially significant for teams using both APIs with shared error-handling middleware.

## Common causes

- GitHub Issue #2699 in openai/openai-python by aloumakos, opened Oct 20, 2025. The two main OpenAI API surfaces (new Responses API vs legacy Chat Completions) return rate limit errors with inconsistent formats — different HTTP codes, different JSON structures, different header fields (like x-ratelimit-reset-tokens). Covered-errors.md lists general 'rate limit error' but not the specific cross-API inconsistency pattern. Category: OpenAI API. Commercially significant for teams using both APIs with shared error-handling middleware.

## Quick fixes

1. Confirm the exact error signature matches `Responses API and Chat Completions API handle rate limit errors differently (different error codes, headers, or body formats), breaking unified error handling`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/2699

Evidence note: GitHub Issue #2699 in openai/openai-python by aloumakos, opened Oct 20, 2025. The two main OpenAI API surfaces (new Responses API vs legacy Chat Completions) return rate limit errors with inconsistent formats — different HTTP codes, different JSON structures, different header fields (like x-ratelimit-reset-tokens). Covered-errors.md lists general 'rate limit error' but not the specific cross-API inconsistency pattern. Category: OpenAI API. Commercially significant for teams using both APIs with shared error-handling middleware.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Responses API and Chat Completions API handle rate limit errors differently (different error codes, headers, or body formats), breaking unified error handling` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Responses API and Chat Completions API handle rate limit errors differently (different error codes, headers, or body formats), breaking unified error handling`.
