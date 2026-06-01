---
title: "LiteLLM RateLimitError Misleadingly Reported as 'No Deployments Available' — False Positive Error Masking"
description: "Fix LiteLLM proxy logging rate limit errors as deployment failures; understand why stack trace prints 3x even with num_retries: 0 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.RateLimitError: VertexAIException - {\"error\": {\"code\": 429, \"message\": \"Resource has been exhausted (e.g. check quota).\", \"status\": \"RESOURCE_EXHAUSTED\"}} — logged as 'No deployments available for selected model'"
common_causes:
  - "GitHub issue #20867 on BerriAI/litellm reports LiteLLM proxy misclassifying genuine rate limit errors (VertexAI 429 RESOURCE_EXHAUSTED) as 'No deployments available for selected model'. Stack trace printed 3× despite num_retries: 0. PR #20932 fixes this by surfacing clear rate-limit messages. Commercial impact: teams debugging production proxy failures waste hours chasing false deployment issues."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T05:44:26.150Z"
updated_at: "2026-06-01T05:44:26.150Z"
---

## What this error means

`litellm.RateLimitError: VertexAIException - {"error": {"code": 429, "message": "Resource has been exhausted (e.g. check quota).", "status": "RESOURCE_EXHAUSTED"}} — logged as 'No deployments available for selected model'` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy logging rate limit errors as deployment failures; understand why stack trace prints 3x even with num_retries: 0. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20867 on BerriAI/litellm reports LiteLLM proxy misclassifying genuine rate limit errors (VertexAI 429 RESOURCE_EXHAUSTED) as 'No deployments available for selected model'. Stack trace printed 3× despite num_retries: 0. PR #20932 fixes this by surfacing clear rate-limit messages. Commercial impact: teams debugging production proxy failures waste hours chasing false deployment issues.

## Common causes

- GitHub issue #20867 on BerriAI/litellm reports LiteLLM proxy misclassifying genuine rate limit errors (VertexAI 429 RESOURCE_EXHAUSTED) as 'No deployments available for selected model'. Stack trace printed 3× despite num_retries: 0. PR #20932 fixes this by surfacing clear rate-limit messages. Commercial impact: teams debugging production proxy failures waste hours chasing false deployment issues.

## Quick fixes

1. Confirm the exact error signature matches `litellm.RateLimitError: VertexAIException - {"error": {"code": 429, "message": "Resource has been exhausted (e.g. check quota).", "status": "RESOURCE_EXHAUSTED"}} — logged as 'No deployments available for selected model'`.
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

- https://github.com/BerriAI/litellm/issues/20867
- https://github.com/BerriAI/litellm/pull/20932
- https://github.com/BerriAI/litellm/issues/7358

Evidence note: GitHub issue #20867 on BerriAI/litellm reports LiteLLM proxy misclassifying genuine rate limit errors (VertexAI 429 RESOURCE_EXHAUSTED) as 'No deployments available for selected model'. Stack trace printed 3× despite num_retries: 0. PR #20932 fixes this by surfacing clear rate-limit messages. Commercial impact: teams debugging production proxy failures waste hours chasing false deployment issues.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.RateLimitError: VertexAIException - {"error": {"code": 429, "message": "Resource has been exhausted (e.g. check quota).", "status": "RESOURCE_EXHAUSTED"}} — logged as 'No deployments available for selected model'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.RateLimitError: VertexAIException - {"error": {"code": 429, "message": "Resource has been exhausted (e.g. check quota).", "status": "RESOURCE_EXHAUSTED"}} — logged as 'No deployments available for selected model'`.
