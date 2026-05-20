---
title: "Anthropic Bedrock SDK AttributeError on error SSE events — rate-limit/model-not-found silently swallowed"
description: "Developer using Anthropic SDK with AWS Bedrock backend encounters incorrect behavior where Bedrock error responses (rate limits, model not found) are routed as completion events, preventing proper error handling in production pipelines. Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "AWSEventStreamDecoder emits rate_limit_error and model_not_found errors as completion events instead of proper exceptions — causes silent failures"
common_causes:
  - "GitHub PR #1572 on anthropics/anthropic-sdk-python (updated 2026-05-19). Bug in AWSEventStreamDecoder routing Bedrock error payloads to wrong handler. Directly affects enterprise users running Claude on AWS Bedrock. Maps to Anthropic API — core SDK reliability issue. Fix PR already exists but not yet released."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-20"
published_at: "2026-05-20T08:38:28.904Z"
updated_at: "2026-05-20T08:38:28.904Z"
---

## What this error means

`AWSEventStreamDecoder emits rate_limit_error and model_not_found errors as completion events instead of proper exceptions — causes silent failures` is a Anthropic API failure pattern reported for developers trying to developer using anthropic sdk with aws bedrock backend encounters incorrect behavior where bedrock error responses (rate limits, model not found) are routed as completion events, preventing proper error handling in production pipelines.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub PR #1572 on anthropics/anthropic-sdk-python (updated 2026-05-19). Bug in AWSEventStreamDecoder routing Bedrock error payloads to wrong handler. Directly affects enterprise users running Claude on AWS Bedrock. Maps to Anthropic API — core SDK reliability issue. Fix PR already exists but not yet released.

## Common causes

- GitHub PR #1572 on anthropics/anthropic-sdk-python (updated 2026-05-19). Bug in AWSEventStreamDecoder routing Bedrock error payloads to wrong handler. Directly affects enterprise users running Claude on AWS Bedrock. Maps to Anthropic API — core SDK reliability issue. Fix PR already exists but not yet released.

## Quick fixes

1. Confirm the exact error signature matches `AWSEventStreamDecoder emits rate_limit_error and model_not_found errors as completion events instead of proper exceptions — causes silent failures`.
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

- https://github.com/anthropics/anthropic-sdk-python/pull/1572

Evidence note: GitHub PR #1572 on anthropics/anthropic-sdk-python (updated 2026-05-19). Bug in AWSEventStreamDecoder routing Bedrock error payloads to wrong handler. Directly affects enterprise users running Claude on AWS Bedrock. Maps to Anthropic API — core SDK reliability issue. Fix PR already exists but not yet released.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `AWSEventStreamDecoder emits rate_limit_error and model_not_found errors as completion events instead of proper exceptions — causes silent failures` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AWSEventStreamDecoder emits rate_limit_error and model_not_found errors as completion events instead of proper exceptions — causes silent failures`.
