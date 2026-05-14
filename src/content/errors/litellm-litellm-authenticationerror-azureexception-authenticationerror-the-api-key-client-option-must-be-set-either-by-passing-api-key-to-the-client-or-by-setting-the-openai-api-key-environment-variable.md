---
title: "LiteLLM Azure OpenAI Authentication Broken in v1.84.0 with enable_azure_ad_token_refresh"
description: "Fix LiteLLM Azure OAI authentication error after upgrading to 1.84.0 when using enable_azure_ad_token_refresh Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM AuthenticationError: AzureException AuthenticationError - The api_key client option must be set either by passing api_key to the client or by setting the OPENAI_API_KEY environment variable"
common_causes:
  - "Upgrading LiteLLM from 1.84.0rc1 to 1.84.0 breaks Azure AD token refresh for Azure OpenAI models. The error indicates api_key is missing even though Azure AD token provider is configured. This is a regression in a paid proxy service used in production environments."
  - "Issue #27945 on BerriAI/litellm: regression in v1.84.0 breaks Azure AD token refresh. Logs show AuthenticationError despite enable_azure_ad_token_refresh=true. Worked in 1.84.0rc1. Affects production deployments using Azure OpenAI with AD auth."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM Azure AD token provider not working"
  - "LiteLLM Azure OpenAI api_key missing after upgrade"
  - "LiteLLM enable_azure_ad_token_refresh regression"
updated: "2026-05-14"
published_at: "2026-05-14T19:13:20.626Z"
updated_at: "2026-05-14T19:13:20.626Z"
---

## What this error means

`LiteLLM AuthenticationError: AzureException AuthenticationError - The api_key client option must be set either by passing api_key to the client or by setting the OPENAI_API_KEY environment variable` is a LiteLLM failure pattern reported for developers trying to fix litellm azure oai authentication error after upgrading to 1.84.0 when using enable_azure_ad_token_refresh. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #27945 on BerriAI/litellm: regression in v1.84.0 breaks Azure AD token refresh. Logs show AuthenticationError despite enable_azure_ad_token_refresh=true. Worked in 1.84.0rc1. Affects production deployments using Azure OpenAI with AD auth.

## Common causes

- Upgrading LiteLLM from 1.84.0rc1 to 1.84.0 breaks Azure AD token refresh for Azure OpenAI models. The error indicates api_key is missing even though Azure AD token provider is configured. This is a regression in a paid proxy service used in production environments.
- Issue #27945 on BerriAI/litellm: regression in v1.84.0 breaks Azure AD token refresh. Logs show AuthenticationError despite enable_azure_ad_token_refresh=true. Worked in 1.84.0rc1. Affects production deployments using Azure OpenAI with AD auth.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM AuthenticationError: AzureException AuthenticationError - The api_key client option must be set either by passing api_key to the client or by setting the OPENAI_API_KEY environment variable`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27945

Evidence note: Issue #27945 on BerriAI/litellm: regression in v1.84.0 breaks Azure AD token refresh. Logs show AuthenticationError despite enable_azure_ad_token_refresh=true. Worked in 1.84.0rc1. Affects production deployments using Azure OpenAI with AD auth.

## Related errors

- LiteLLM Azure AD token provider not working
- LiteLLM Azure OpenAI api_key missing after upgrade
- LiteLLM enable_azure_ad_token_refresh regression

## FAQ

### What should I check first?

Start with the exact `LiteLLM AuthenticationError: AzureException AuthenticationError - The api_key client option must be set either by passing api_key to the client or by setting the OPENAI_API_KEY environment variable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM AuthenticationError: AzureException AuthenticationError - The api_key client option must be set either by passing api_key to the client or by setting the OPENAI_API_KEY environment variable`.
