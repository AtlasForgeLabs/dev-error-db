---
title: "OpenRouter FREE models 429 rate limit errors silently swallowed by LiteLLM — no RateLimitError raised"
description: "Fix LiteLLM silently ignoring OpenRouter 429 rate limit errors and returning empty LLM replies instead of raising RateLimitError for proper error handling Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "[Bug]: 429 rate limit errors from OpenRouter FREE models not honored? — RateLimitError silently ignored, empty reply returned instead of proper exception"
common_causes:
  - "GitHub issue #9035 on BerriAI/litellm: OpenRouter free models have tight rate limits (20 req/min, 200/day) but LiteLLM treats the 429 response as if the LLM returned an empty reply rather than raising RateLimitError. This silently fails without user awareness. Affects production workflows using free tier models. Source: https://github.com/BerriAI/litellm/issues/9035 confirmed via Tavily search snippet."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T13:44:29.961Z"
updated_at: "2026-06-02T13:44:29.961Z"
---

## What this error means

`[Bug]: 429 rate limit errors from OpenRouter FREE models not honored? — RateLimitError silently ignored, empty reply returned instead of proper exception` is a LiteLLM failure pattern reported for developers trying to fix litellm silently ignoring openrouter 429 rate limit errors and returning empty llm replies instead of raising ratelimiterror for proper error handling. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #9035 on BerriAI/litellm: OpenRouter free models have tight rate limits (20 req/min, 200/day) but LiteLLM treats the 429 response as if the LLM returned an empty reply rather than raising RateLimitError. This silently fails without user awareness. Affects production workflows using free tier models. Source: https://github.com/BerriAI/litellm/issues/9035 confirmed via Tavily search snippet.

## Common causes

- GitHub issue #9035 on BerriAI/litellm: OpenRouter free models have tight rate limits (20 req/min, 200/day) but LiteLLM treats the 429 response as if the LLM returned an empty reply rather than raising RateLimitError. This silently fails without user awareness. Affects production workflows using free tier models. Source: https://github.com/BerriAI/litellm/issues/9035 confirmed via Tavily search snippet.

## Quick fixes

1. Confirm the exact error signature matches `[Bug]: 429 rate limit errors from OpenRouter FREE models not honored? — RateLimitError silently ignored, empty reply returned instead of proper exception`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/9035

Evidence note: GitHub issue #9035 on BerriAI/litellm: OpenRouter free models have tight rate limits (20 req/min, 200/day) but LiteLLM treats the 429 response as if the LLM returned an empty reply rather than raising RateLimitError. This silently fails without user awareness. Affects production workflows using free tier models. Source: https://github.com/BerriAI/litellm/issues/9035 confirmed via Tavily search snippet.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `[Bug]: 429 rate limit errors from OpenRouter FREE models not honored? — RateLimitError silently ignored, empty reply returned instead of proper exception` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Bug]: 429 rate limit errors from OpenRouter FREE models not honored? — RateLimitError silently ignored, empty reply returned instead of proper exception`.
