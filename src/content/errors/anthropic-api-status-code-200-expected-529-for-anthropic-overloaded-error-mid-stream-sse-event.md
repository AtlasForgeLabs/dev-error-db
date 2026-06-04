---
title: "Mid-stream SSE Errors Get status_code=200 Instead of Actual Error Code (overloaded_error → 529)"
description: "Fix incorrect HTTP status code returned by Anthropic SDK during streaming when API returns overloaded_error — callers checking status_code get wrong answer for retry/fallback logic Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "status_code=200 (expected 529) for Anthropic overloaded_error mid-stream SSE event"
common_causes:
  - "GitHub anthropics/anthropic-sdk-python#1258 — In _streaming.py, SSE error events pass original HTTP 200 response to _make_status_error, causing overloaded_error to appear as status_code=200 instead of 529. pydantic-ai FallbackModel never fires because it checks status_code >= 500. Fixed in release 0.87.0 (#1264). Still relevant as many users may not upgrade. Label: bug fix merged. Updated Apr 1 2026."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-06-04"
published_at: "2026-06-04T06:44:35.095Z"
updated_at: "2026-06-04T06:44:35.095Z"
---

## What this error means

`status_code=200 (expected 529) for Anthropic overloaded_error mid-stream SSE event` is a Anthropic API failure pattern reported for developers trying to fix incorrect http status code returned by anthropic sdk during streaming when api returns overloaded_error — callers checking status_code get wrong answer for retry/fallback logic. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/anthropic-sdk-python#1258 — In _streaming.py, SSE error events pass original HTTP 200 response to _make_status_error, causing overloaded_error to appear as status_code=200 instead of 529. pydantic-ai FallbackModel never fires because it checks status_code >= 500. Fixed in release 0.87.0 (#1264). Still relevant as many users may not upgrade. Label: bug fix merged. Updated Apr 1 2026.

## Common causes

- GitHub anthropics/anthropic-sdk-python#1258 — In _streaming.py, SSE error events pass original HTTP 200 response to _make_status_error, causing overloaded_error to appear as status_code=200 instead of 529. pydantic-ai FallbackModel never fires because it checks status_code >= 500. Fixed in release 0.87.0 (#1264). Still relevant as many users may not upgrade. Label: bug fix merged. Updated Apr 1 2026.

## Quick fixes

1. Confirm the exact error signature matches `status_code=200 (expected 529) for Anthropic overloaded_error mid-stream SSE event`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1258

Evidence note: GitHub anthropics/anthropic-sdk-python#1258 — In _streaming.py, SSE error events pass original HTTP 200 response to _make_status_error, causing overloaded_error to appear as status_code=200 instead of 529. pydantic-ai FallbackModel never fires because it checks status_code >= 500. Fixed in release 0.87.0 (#1264). Still relevant as many users may not upgrade. Label: bug fix merged. Updated Apr 1 2026.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `status_code=200 (expected 529) for Anthropic overloaded_error mid-stream SSE event` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `status_code=200 (expected 529) for Anthropic overloaded_error mid-stream SSE event`.
