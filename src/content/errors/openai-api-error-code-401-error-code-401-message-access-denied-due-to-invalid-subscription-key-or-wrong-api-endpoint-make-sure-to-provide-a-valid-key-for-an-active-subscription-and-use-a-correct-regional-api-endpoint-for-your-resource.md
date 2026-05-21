---
title: "AzureOpenAI with AAD bearer token returns 401 Unauthorized after upgrading to openai Python SDK v2.34.0"
description: "Fix 401 Unauthorized error when using Azure AD bearer tokens passed via api_key parameter after upgrading to openai Python SDK 2.34.0+, specifically in Azure APIM proxy setups Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Error code: 401 - {'error': {'code': '401', 'message': 'Access denied due to invalid subscription key or wrong API endpoint. Make sure to provide a valid key for an active subscription and use a correct regional API endpoint for your resource.'}}"
common_causes:
  - "GitHub Issue #3282 on openai/openai-python (opened May 20, 2026). Confirmed bug between v2.33.0 (works) and v2.34.0+ (fails). Root cause: v2.34.0 treats api_key header as api-key instead of Bearer token format. Affected users pass AAD tokens from azure.identity.ClientSecretCredential. PR #3283 submitted. High commercial value because Azure OpenAI is enterprise paid service; auth failure blocks production."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T22:39:45.880Z"
updated_at: "2026-05-21T22:39:45.880Z"
---

## What this error means

`Error code: 401 - {'error': {'code': '401', 'message': 'Access denied due to invalid subscription key or wrong API endpoint. Make sure to provide a valid key for an active subscription and use a correct regional API endpoint for your resource.'}}` is a OpenAI API failure pattern reported for developers trying to fix 401 unauthorized error when using azure ad bearer tokens passed via api_key parameter after upgrading to openai python sdk 2.34.0+, specifically in azure apim proxy setups. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #3282 on openai/openai-python (opened May 20, 2026). Confirmed bug between v2.33.0 (works) and v2.34.0+ (fails). Root cause: v2.34.0 treats api_key header as api-key instead of Bearer token format. Affected users pass AAD tokens from azure.identity.ClientSecretCredential. PR #3283 submitted. High commercial value because Azure OpenAI is enterprise paid service; auth failure blocks production.

## Common causes

- GitHub Issue #3282 on openai/openai-python (opened May 20, 2026). Confirmed bug between v2.33.0 (works) and v2.34.0+ (fails). Root cause: v2.34.0 treats api_key header as api-key instead of Bearer token format. Affected users pass AAD tokens from azure.identity.ClientSecretCredential. PR #3283 submitted. High commercial value because Azure OpenAI is enterprise paid service; auth failure blocks production.

## Quick fixes

1. Confirm the exact error signature matches `Error code: 401 - {'error': {'code': '401', 'message': 'Access denied due to invalid subscription key or wrong API endpoint. Make sure to provide a valid key for an active subscription and use a correct regional API endpoint for your resource.'}}`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/openai/openai-python/issues/3282

Evidence note: GitHub Issue #3282 on openai/openai-python (opened May 20, 2026). Confirmed bug between v2.33.0 (works) and v2.34.0+ (fails). Root cause: v2.34.0 treats api_key header as api-key instead of Bearer token format. Affected users pass AAD tokens from azure.identity.ClientSecretCredential. PR #3283 submitted. High commercial value because Azure OpenAI is enterprise paid service; auth failure blocks production.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Error code: 401 - {'error': {'code': '401', 'message': 'Access denied due to invalid subscription key or wrong API endpoint. Make sure to provide a valid key for an active subscription and use a correct regional API endpoint for your resource.'}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error code: 401 - {'error': {'code': '401', 'message': 'Access denied due to invalid subscription key or wrong API endpoint. Make sure to provide a valid key for an active subscription and use a correct regional API endpoint for your resource.'}}`.
