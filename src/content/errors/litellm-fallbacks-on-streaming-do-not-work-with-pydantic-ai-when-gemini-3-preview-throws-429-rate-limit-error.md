---
title: "LiteLLM Streaming Fallbacks Don't Work When Gemini 3 Preview Returns 429 Rate Limit"
description: "Fix LiteLLM streaming fallback mechanism failing to route to backup models when primary Gemini 3 Preview returns HTTP 429, leaving clients without any response during peak usage Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Fallbacks on STREAMING do not work with Pydantic-AI when Gemini 3 Preview throws 429 rate limit error"
common_causes:
  - "GitHub issue #20870 on BerriAI/litellm opened Feb 10, 2026. When using LiteLLM proxy with Pydantic-AI, streaming responses fail entirely on 429 from Gemini 3 Preview instead of falling back to configured secondary models. Non-streaming paths work correctly. Bug+proxy+llm translation labels. Only 6 comments, relatively low resolution. Strong P1 candidate for enterprises depending on Gemini via LiteLLM."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-22"
published_at: "2026-05-22T03:39:46.540Z"
updated_at: "2026-05-22T03:39:46.540Z"
---

## What this error means

`Fallbacks on STREAMING do not work with Pydantic-AI when Gemini 3 Preview throws 429 rate limit error` is a LiteLLM failure pattern reported for developers trying to fix litellm streaming fallback mechanism failing to route to backup models when primary gemini 3 preview returns http 429, leaving clients without any response during peak usage. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20870 on BerriAI/litellm opened Feb 10, 2026. When using LiteLLM proxy with Pydantic-AI, streaming responses fail entirely on 429 from Gemini 3 Preview instead of falling back to configured secondary models. Non-streaming paths work correctly. Bug+proxy+llm translation labels. Only 6 comments, relatively low resolution. Strong P1 candidate for enterprises depending on Gemini via LiteLLM.

## Common causes

- GitHub issue #20870 on BerriAI/litellm opened Feb 10, 2026. When using LiteLLM proxy with Pydantic-AI, streaming responses fail entirely on 429 from Gemini 3 Preview instead of falling back to configured secondary models. Non-streaming paths work correctly. Bug+proxy+llm translation labels. Only 6 comments, relatively low resolution. Strong P1 candidate for enterprises depending on Gemini via LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `Fallbacks on STREAMING do not work with Pydantic-AI when Gemini 3 Preview throws 429 rate limit error`.
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

- https://github.com/BerriAI/litellm/issues/20870

Evidence note: GitHub issue #20870 on BerriAI/litellm opened Feb 10, 2026. When using LiteLLM proxy with Pydantic-AI, streaming responses fail entirely on 429 from Gemini 3 Preview instead of falling back to configured secondary models. Non-streaming paths work correctly. Bug+proxy+llm translation labels. Only 6 comments, relatively low resolution. Strong P1 candidate for enterprises depending on Gemini via LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Fallbacks on STREAMING do not work with Pydantic-AI when Gemini 3 Preview throws 429 rate limit error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Fallbacks on STREAMING do not work with Pydantic-AI when Gemini 3 Preview throws 429 rate limit error`.
