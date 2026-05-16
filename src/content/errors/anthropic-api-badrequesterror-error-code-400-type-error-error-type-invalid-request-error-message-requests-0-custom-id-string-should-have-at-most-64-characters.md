---
title: "Anthropic API Batch Processing undocumented 64-character custom_id limit"
description: "Fix Anthropic API batch processing error: custom_id character limit not documented, causing 400 BadRequestError Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "BadRequestError: Error code: 400 - {'type': 'error', 'error': {'type': 'invalid_request_error', 'message': 'requests.0.custom_id: String should have at most 64 characters'}}"
common_causes:
  - "GitHub issue anthropics/anthropic-sdk-python#984 (open since Jun 2025, updated May 2026): custom_id parameter for Message Batch Processing has an undocumented 64-character limit. Users hit BadRequestError 400 when exceeding it. The limit is not mentioned anywhere in the API documentation. Category mapping: Anthropic API (direct API error)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-16"
published_at: "2026-05-16T02:13:24.265Z"
updated_at: "2026-05-16T02:13:24.265Z"
---

## What this error means

`BadRequestError: Error code: 400 - {'type': 'error', 'error': {'type': 'invalid_request_error', 'message': 'requests.0.custom_id: String should have at most 64 characters'}}` is a Anthropic API failure pattern reported for developers trying to fix anthropic api batch processing error: custom_id character limit not documented, causing 400 badrequesterror. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/anthropic-sdk-python#984 (open since Jun 2025, updated May 2026): custom_id parameter for Message Batch Processing has an undocumented 64-character limit. Users hit BadRequestError 400 when exceeding it. The limit is not mentioned anywhere in the API documentation. Category mapping: Anthropic API (direct API error).

## Common causes

- GitHub issue anthropics/anthropic-sdk-python#984 (open since Jun 2025, updated May 2026): custom_id parameter for Message Batch Processing has an undocumented 64-character limit. Users hit BadRequestError 400 when exceeding it. The limit is not mentioned anywhere in the API documentation. Category mapping: Anthropic API (direct API error).

## Quick fixes

1. Confirm the exact error signature matches `BadRequestError: Error code: 400 - {'type': 'error', 'error': {'type': 'invalid_request_error', 'message': 'requests.0.custom_id: String should have at most 64 characters'}}`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/984

Evidence note: GitHub issue anthropics/anthropic-sdk-python#984 (open since Jun 2025, updated May 2026): custom_id parameter for Message Batch Processing has an undocumented 64-character limit. Users hit BadRequestError 400 when exceeding it. The limit is not mentioned anywhere in the API documentation. Category mapping: Anthropic API (direct API error).

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `BadRequestError: Error code: 400 - {'type': 'error', 'error': {'type': 'invalid_request_error', 'message': 'requests.0.custom_id: String should have at most 64 characters'}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BadRequestError: Error code: 400 - {'type': 'error', 'error': {'type': 'invalid_request_error', 'message': 'requests.0.custom_id: String should have at most 64 characters'}}`.
