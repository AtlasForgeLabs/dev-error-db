---
title: "Anthropic Bedrock streaming SSE events return TypeError instead of typed APIStatusError — NoneType has no attribute 'model'"
description: "Fix intermittent streaming crashes when calling Anthropic Claude via AWS Bedrock cross-region inference profiles; rate-limited responses appear as HTTP 200 error frames causing TypeError instead of catchable APIStatusError Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "AttributeError: 'NoneType' object has no attribute 'model' — Bedrock cross-region profile returns HTTP 200 with error payload type='rate_limit_error', SDK decodes as BetaRawMessageStartEvent with message=None"
common_causes:
  - "GitHub anthropics/anthropic-sdk-python issues #1472, #1477, PRs #1479/#1555 (updated through May 2026) cover Bedrock SSE error handling gaps. Bedrock returns HTTP 200 with error-type SSE frames; SDK incorrectly instantiates message-start events with null message, triggering AttributeError. Category: Anthropic API (paid service, production blocking). Note: PR #1555 fixes non-200 SSE errors but #1472 (HTTP 200 error frames) may still be unresolved — makes this a real candidate."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-17"
published_at: "2026-05-17T03:13:52.023Z"
updated_at: "2026-05-17T03:13:52.023Z"
---

## What this error means

`AttributeError: 'NoneType' object has no attribute 'model' — Bedrock cross-region profile returns HTTP 200 with error payload type='rate_limit_error', SDK decodes as BetaRawMessageStartEvent with message=None` is a Anthropic API failure pattern reported for developers trying to fix intermittent streaming crashes when calling anthropic claude via aws bedrock cross-region inference profiles; rate-limited responses appear as http 200 error frames causing typeerror instead of catchable apistatuserror. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/anthropic-sdk-python issues #1472, #1477, PRs #1479/#1555 (updated through May 2026) cover Bedrock SSE error handling gaps. Bedrock returns HTTP 200 with error-type SSE frames; SDK incorrectly instantiates message-start events with null message, triggering AttributeError. Category: Anthropic API (paid service, production blocking). Note: PR #1555 fixes non-200 SSE errors but #1472 (HTTP 200 error frames) may still be unresolved — makes this a real candidate.

## Common causes

- GitHub anthropics/anthropic-sdk-python issues #1472, #1477, PRs #1479/#1555 (updated through May 2026) cover Bedrock SSE error handling gaps. Bedrock returns HTTP 200 with error-type SSE frames; SDK incorrectly instantiates message-start events with null message, triggering AttributeError. Category: Anthropic API (paid service, production blocking). Note: PR #1555 fixes non-200 SSE errors but #1472 (HTTP 200 error frames) may still be unresolved — makes this a real candidate.

## Quick fixes

1. Confirm the exact error signature matches `AttributeError: 'NoneType' object has no attribute 'model' — Bedrock cross-region profile returns HTTP 200 with error payload type='rate_limit_error', SDK decodes as BetaRawMessageStartEvent with message=None`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1472
- https://github.com/anthropics/anthropic-sdk-python/issues/1477
- https://github.com/anthropics/anthropic-sdk-python/pull/1555

Evidence note: GitHub anthropics/anthropic-sdk-python issues #1472, #1477, PRs #1479/#1555 (updated through May 2026) cover Bedrock SSE error handling gaps. Bedrock returns HTTP 200 with error-type SSE frames; SDK incorrectly instantiates message-start events with null message, triggering AttributeError. Category: Anthropic API (paid service, production blocking). Note: PR #1555 fixes non-200 SSE errors but #1472 (HTTP 200 error frames) may still be unresolved — makes this a real candidate.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `AttributeError: 'NoneType' object has no attribute 'model' — Bedrock cross-region profile returns HTTP 200 with error payload type='rate_limit_error', SDK decodes as BetaRawMessageStartEvent with message=None` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AttributeError: 'NoneType' object has no attribute 'model' — Bedrock cross-region profile returns HTTP 200 with error payload type='rate_limit_error', SDK decodes as BetaRawMessageStartEvent with message=None`.
