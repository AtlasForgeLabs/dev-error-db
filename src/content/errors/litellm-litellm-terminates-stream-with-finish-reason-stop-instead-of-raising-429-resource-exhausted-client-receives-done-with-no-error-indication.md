---
title: "LiteLLM Silently Swallows Mid-Stream 429 Rate-Limit Errors During Streaming"
description: "Users deploying LiteLLM proxy with Vertex AI/Gemini streaming see silent failures where 429 errors are hidden — stream appears successful but response is truncated. Need to detect and handle mid-stream rate limits properly. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM terminates stream with finish_reason=\"stop\" instead of raising 429 RESOURCE_EXHAUSTED; client receives [DONE] with no error indication"
common_causes:
  - "GitHub issue #23707 on BerriAI/litellm repo (Mar 16, 2026). Full reproducible scenario with log traces showing 429 being treated as success call. Particularly impactful for image generation tasks where thinking tokens complete but output is lost. Fixed via PR #23711 (closed May 19, 2026), but still relevant for users on older versions."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T11:39:44.393Z"
updated_at: "2026-05-21T11:39:44.393Z"
---

## What this error means

`LiteLLM terminates stream with finish_reason="stop" instead of raising 429 RESOURCE_EXHAUSTED; client receives [DONE] with no error indication` is a LiteLLM failure pattern reported for developers trying to users deploying litellm proxy with vertex ai/gemini streaming see silent failures where 429 errors are hidden — stream appears successful but response is truncated. need to detect and handle mid-stream rate limits properly.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #23707 on BerriAI/litellm repo (Mar 16, 2026). Full reproducible scenario with log traces showing 429 being treated as success call. Particularly impactful for image generation tasks where thinking tokens complete but output is lost. Fixed via PR #23711 (closed May 19, 2026), but still relevant for users on older versions.

## Common causes

- GitHub issue #23707 on BerriAI/litellm repo (Mar 16, 2026). Full reproducible scenario with log traces showing 429 being treated as success call. Particularly impactful for image generation tasks where thinking tokens complete but output is lost. Fixed via PR #23711 (closed May 19, 2026), but still relevant for users on older versions.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM terminates stream with finish_reason="stop" instead of raising 429 RESOURCE_EXHAUSTED; client receives [DONE] with no error indication`.
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

- https://github.com/BerriAI/litellm/issues/23707

Evidence note: GitHub issue #23707 on BerriAI/litellm repo (Mar 16, 2026). Full reproducible scenario with log traces showing 429 being treated as success call. Particularly impactful for image generation tasks where thinking tokens complete but output is lost. Fixed via PR #23711 (closed May 19, 2026), but still relevant for users on older versions.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM terminates stream with finish_reason="stop" instead of raising 429 RESOURCE_EXHAUSTED; client receives [DONE] with no error indication` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM terminates stream with finish_reason="stop" instead of raising 429 RESOURCE_EXHAUSTED; client receives [DONE] with no error indication`.
