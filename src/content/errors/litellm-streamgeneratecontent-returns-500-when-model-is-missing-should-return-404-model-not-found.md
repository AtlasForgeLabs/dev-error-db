---
title: "LiteLLM Returns HTTP 500 Instead of 404 for Missing Gemini Models"
description: "Fix incorrect HTTP status code when passing deprecated/missing Gemini models through LiteLLM proxy — agents receive 500 instead of actionable 404 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "streamGenerateContent returns 500 when model is missing (should return 404 model not found)"
common_causes:
  - "GitHub issue #29005 on BerriAI/litellm, filed May 27 2026. Reports that LiteLLM returns HTTP 500 for deprecated Gemini models instead of standard 404 like other APIs. This affects any pipeline using LiteLLM as proxy — agents treating 500 as transient will retry unnecessarily. Strong commercial signal for proxy/billing layer errors."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-27"
published_at: "2026-05-27T19:43:20.822Z"
updated_at: "2026-05-27T19:43:20.822Z"
---

## What this error means

`streamGenerateContent returns 500 when model is missing (should return 404 model not found)` is a LiteLLM failure pattern reported for developers trying to fix incorrect http status code when passing deprecated/missing gemini models through litellm proxy — agents receive 500 instead of actionable 404. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #29005 on BerriAI/litellm, filed May 27 2026. Reports that LiteLLM returns HTTP 500 for deprecated Gemini models instead of standard 404 like other APIs. This affects any pipeline using LiteLLM as proxy — agents treating 500 as transient will retry unnecessarily. Strong commercial signal for proxy/billing layer errors.

## Common causes

- GitHub issue #29005 on BerriAI/litellm, filed May 27 2026. Reports that LiteLLM returns HTTP 500 for deprecated Gemini models instead of standard 404 like other APIs. This affects any pipeline using LiteLLM as proxy — agents treating 500 as transient will retry unnecessarily. Strong commercial signal for proxy/billing layer errors.

## Quick fixes

1. Confirm the exact error signature matches `streamGenerateContent returns 500 when model is missing (should return 404 model not found)`.
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

- https://github.com/BerriAI/litellm/issues/29005

Evidence note: GitHub issue #29005 on BerriAI/litellm, filed May 27 2026. Reports that LiteLLM returns HTTP 500 for deprecated Gemini models instead of standard 404 like other APIs. This affects any pipeline using LiteLLM as proxy — agents treating 500 as transient will retry unnecessarily. Strong commercial signal for proxy/billing layer errors.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `streamGenerateContent returns 500 when model is missing (should return 404 model not found)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `streamGenerateContent returns 500 when model is missing (should return 404 model not found)`.
