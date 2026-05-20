---
title: "LiteLLM Unthrottled concurrent LLM requests cause HTTP 429 and cascading KeyError crash"
description: "Prevent LiteLLM library from flooding LLM endpoints with unbounded concurrent requests causing 429 errors; fix cascading KeyError crash when retries exhaust Includes evidence for LiteLLM / OpenAI API troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM / OpenAI API"
error_signature: "KeyError: 'toc_detected' caused by unthrottled concurrent asyncio.gather calls triggering HTTP 429 Too Many Requests from LLM API — empty JSON parse returns {} then direct dict access crashes"
common_causes:
  - "GitHub issue #283 in VectifyAI/PageIndex opened May 20, 2026 (verified via CDP browser snapshot). Root cause: unthrottled asyncio.gather making concurrent LLM API calls without concurrency limits. When public/tier-limited endpoints return 429, fixed-delay retries all fire simultaneously, exhausting retry budget. Traceback confirms litellm.RateLimitError chain followed by KeyError on json_content['toc_detected']. High-value because it combines LiteLLM + OpenAI API 429 in an automated production scenario."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T12:38:29.459Z"
updated_at: "2026-05-20T12:38:29.459Z"
---

## What this error means

`KeyError: 'toc_detected' caused by unthrottled concurrent asyncio.gather calls triggering HTTP 429 Too Many Requests from LLM API — empty JSON parse returns {} then direct dict access crashes` is a LiteLLM / OpenAI API failure pattern reported for developers trying to prevent litellm library from flooding llm endpoints with unbounded concurrent requests causing 429 errors; fix cascading keyerror crash when retries exhaust. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #283 in VectifyAI/PageIndex opened May 20, 2026 (verified via CDP browser snapshot). Root cause: unthrottled asyncio.gather making concurrent LLM API calls without concurrency limits. When public/tier-limited endpoints return 429, fixed-delay retries all fire simultaneously, exhausting retry budget. Traceback confirms litellm.RateLimitError chain followed by KeyError on json_content['toc_detected']. High-value because it combines LiteLLM + OpenAI API 429 in an automated production scenario.

## Common causes

- GitHub issue #283 in VectifyAI/PageIndex opened May 20, 2026 (verified via CDP browser snapshot). Root cause: unthrottled asyncio.gather making concurrent LLM API calls without concurrency limits. When public/tier-limited endpoints return 429, fixed-delay retries all fire simultaneously, exhausting retry budget. Traceback confirms litellm.RateLimitError chain followed by KeyError on json_content['toc_detected']. High-value because it combines LiteLLM + OpenAI API 429 in an automated production scenario.

## Quick fixes

1. Confirm the exact error signature matches `KeyError: 'toc_detected' caused by unthrottled concurrent asyncio.gather calls triggering HTTP 429 Too Many Requests from LLM API — empty JSON parse returns {} then direct dict access crashes`.
2. Check the LiteLLM / OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/VectifyAI/PageIndex/issues/283

Evidence note: GitHub issue #283 in VectifyAI/PageIndex opened May 20, 2026 (verified via CDP browser snapshot). Root cause: unthrottled asyncio.gather making concurrent LLM API calls without concurrency limits. When public/tier-limited endpoints return 429, fixed-delay retries all fire simultaneously, exhausting retry budget. Traceback confirms litellm.RateLimitError chain followed by KeyError on json_content['toc_detected']. High-value because it combines LiteLLM + OpenAI API 429 in an automated production scenario.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `KeyError: 'toc_detected' caused by unthrottled concurrent asyncio.gather calls triggering HTTP 429 Too Many Requests from LLM API — empty JSON parse returns {} then direct dict access crashes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM / OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `KeyError: 'toc_detected' caused by unthrottled concurrent asyncio.gather calls triggering HTTP 429 Too Many Requests from LLM API — empty JSON parse returns {} then direct dict access crashes`.
