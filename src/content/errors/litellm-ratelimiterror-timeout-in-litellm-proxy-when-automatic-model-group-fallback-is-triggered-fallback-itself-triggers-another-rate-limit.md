---
title: "LiteLLM Proxy Rate Limit Exceeded During Auto-Fallback Between Model Groups"
description: "Fix cascading rate limit errors in LiteLLM proxy when auto-fallback between model groups encounters its own RPM/TPM limits Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "RateLimitError / timeout in LiteLLM proxy when automatic model group fallback is triggered — fallback itself triggers another rate limit"
common_causes:
  - "GitHub issue #25080 (BerriAI/litellm, Apr 2026) documents the need for model group fallback configuration for rate limit errors. Issue #7358 reports async rate limit errors when using LiteLLM with PaperQA. The LiteLLM proxy retry/fallback logic can itself hit rate limits, creating cascading failures in production multi-model setups. Category mapping: exact LiteLLM proxy error per category rules."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-19"
published_at: "2026-05-19T09:37:15.786Z"
updated_at: "2026-05-19T09:37:15.786Z"
---

## What this error means

`RateLimitError / timeout in LiteLLM proxy when automatic model group fallback is triggered — fallback itself triggers another rate limit` is a LiteLLM failure pattern reported for developers trying to fix cascading rate limit errors in litellm proxy when auto-fallback between model groups encounters its own rpm/tpm limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #25080 (BerriAI/litellm, Apr 2026) documents the need for model group fallback configuration for rate limit errors. Issue #7358 reports async rate limit errors when using LiteLLM with PaperQA. The LiteLLM proxy retry/fallback logic can itself hit rate limits, creating cascading failures in production multi-model setups. Category mapping: exact LiteLLM proxy error per category rules.

## Common causes

- GitHub issue #25080 (BerriAI/litellm, Apr 2026) documents the need for model group fallback configuration for rate limit errors. Issue #7358 reports async rate limit errors when using LiteLLM with PaperQA. The LiteLLM proxy retry/fallback logic can itself hit rate limits, creating cascading failures in production multi-model setups. Category mapping: exact LiteLLM proxy error per category rules.

## Quick fixes

1. Confirm the exact error signature matches `RateLimitError / timeout in LiteLLM proxy when automatic model group fallback is triggered — fallback itself triggers another rate limit`.
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

- https://github.com/BerriAI/litellm/issues/25080
- https://github.com/BerriAI/litellm/issues/7358
- https://docs.litellm.ai/docs/proxy/load_balancing

Evidence note: GitHub issue #25080 (BerriAI/litellm, Apr 2026) documents the need for model group fallback configuration for rate limit errors. Issue #7358 reports async rate limit errors when using LiteLLM with PaperQA. The LiteLLM proxy retry/fallback logic can itself hit rate limits, creating cascading failures in production multi-model setups. Category mapping: exact LiteLLM proxy error per category rules.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `RateLimitError / timeout in LiteLLM proxy when automatic model group fallback is triggered — fallback itself triggers another rate limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `RateLimitError / timeout in LiteLLM proxy when automatic model group fallback is triggered — fallback itself triggers another rate limit`.
