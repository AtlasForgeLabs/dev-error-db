---
title: "LiteLLM Proxy 504 Gateway Timeout for Long Non-Streaming Requests"
description: "Fix 504 Gateway Timeout errors from LiteLLM proxy when using ChatOpenAI/LangChain with disable_streaming=True or .invoke() on long-generation backend LLMs Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "504 Gateway Time-out from LiteLLM Proxy for Long Non-Streaming Requests"
common_causes:
  - "Found via GitHub search result: Litellm Proxy + LangChain ChatOpenAI pointing to proxy base_url produces 504 Gateway Time-out on long generation times when streaming disabled (disable_streaming=True or .invoke()). This is a specific proxy-layer timeout issue distinct from generic timeouts — affects paid proxy deployments routing to paid models. Category: LiteLLM (proxy/litellm-specific behavior). Already published items: none match this proxy 504 pattern."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-27"
published_at: "2026-05-27T02:43:18.713Z"
updated_at: "2026-05-27T02:43:18.713Z"
---

## What this error means

`504 Gateway Time-out from LiteLLM Proxy for Long Non-Streaming Requests` is a LiteLLM failure pattern reported for developers trying to fix 504 gateway timeout errors from litellm proxy when using chatopenai/langchain with disable_streaming=true or .invoke() on long-generation backend llms. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub search result: Litellm Proxy + LangChain ChatOpenAI pointing to proxy base_url produces 504 Gateway Time-out on long generation times when streaming disabled (disable_streaming=True or .invoke()). This is a specific proxy-layer timeout issue distinct from generic timeouts — affects paid proxy deployments routing to paid models. Category: LiteLLM (proxy/litellm-specific behavior). Already published items: none match this proxy 504 pattern.

## Common causes

- Found via GitHub search result: Litellm Proxy + LangChain ChatOpenAI pointing to proxy base_url produces 504 Gateway Time-out on long generation times when streaming disabled (disable_streaming=True or .invoke()). This is a specific proxy-layer timeout issue distinct from generic timeouts — affects paid proxy deployments routing to paid models. Category: LiteLLM (proxy/litellm-specific behavior). Already published items: none match this proxy 504 pattern.

## Quick fixes

1. Confirm the exact error signature matches `504 Gateway Time-out from LiteLLM Proxy for Long Non-Streaming Requests`.
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

- https://github.com/BerriAI/litellm/issues/9551

Evidence note: Found via GitHub search result: Litellm Proxy + LangChain ChatOpenAI pointing to proxy base_url produces 504 Gateway Time-out on long generation times when streaming disabled (disable_streaming=True or .invoke()). This is a specific proxy-layer timeout issue distinct from generic timeouts — affects paid proxy deployments routing to paid models. Category: LiteLLM (proxy/litellm-specific behavior). Already published items: none match this proxy 504 pattern.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `504 Gateway Time-out from LiteLLM Proxy for Long Non-Streaming Requests` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `504 Gateway Time-out from LiteLLM Proxy for Long Non-Streaming Requests`.
