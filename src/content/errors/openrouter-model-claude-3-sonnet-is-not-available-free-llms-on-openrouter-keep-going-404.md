---
title: "OpenRouter Free Models Keep Going 404 — Model Unavailable After Rate Limit"
description: "Developer using OpenRouter free tier encounters sudden 404 errors as models get removed, rate-limited, or replaced. Needs programmatic handling and fallback model rotation Includes evidence for OpenRouter troubleshooting demand."
category: "LiteLLM"
technology: "OpenRouter"
error_signature: "Model claude-3-sonnet is not available / free LLMs on OpenRouter keep going 404"
common_causes:
  - "DEV.to article describes fixing intermittent OpenRouter 404 errors with Python pipeline adding model availability checks. GitHub Issue #883 on gpt-pilot repo confirms 'Model X is not available' pattern. OpenRouter maps to LiteLLM category when about proxy/routing behavior. Strong commercial value — free tier users quickly become paying customers."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-16"
published_at: "2026-05-16T18:13:50.912Z"
updated_at: "2026-05-16T18:13:50.912Z"
---

## What this error means

`Model claude-3-sonnet is not available / free LLMs on OpenRouter keep going 404` is a OpenRouter failure pattern reported for developers trying to developer using openrouter free tier encounters sudden 404 errors as models get removed, rate-limited, or replaced. needs programmatic handling and fallback model rotation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

DEV.to article describes fixing intermittent OpenRouter 404 errors with Python pipeline adding model availability checks. GitHub Issue #883 on gpt-pilot repo confirms 'Model X is not available' pattern. OpenRouter maps to LiteLLM category when about proxy/routing behavior. Strong commercial value — free tier users quickly become paying customers.

## Common causes

- DEV.to article describes fixing intermittent OpenRouter 404 errors with Python pipeline adding model availability checks. GitHub Issue #883 on gpt-pilot repo confirms 'Model X is not available' pattern. OpenRouter maps to LiteLLM category when about proxy/routing behavior. Strong commercial value — free tier users quickly become paying customers.

## Quick fixes

1. Confirm the exact error signature matches `Model claude-3-sonnet is not available / free LLMs on OpenRouter keep going 404`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://dev.to/josh_green_dev/free-llms-on-openrouter-keep-going-404-i-fixed-it-with-120-lines-of-python-43i1
- https://github.com/Pythagora-io/gpt-pilot/issues/883
- https://openrouter.ai/docs/api/reference/errors-and-debugging

Evidence note: DEV.to article describes fixing intermittent OpenRouter 404 errors with Python pipeline adding model availability checks. GitHub Issue #883 on gpt-pilot repo confirms 'Model X is not available' pattern. OpenRouter maps to LiteLLM category when about proxy/routing behavior. Strong commercial value — free tier users quickly become paying customers.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Model claude-3-sonnet is not available / free LLMs on OpenRouter keep going 404` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Model claude-3-sonnet is not available / free LLMs on OpenRouter keep going 404`.
