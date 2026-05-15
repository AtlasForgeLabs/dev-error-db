---
title: "LiteLLM Azure OpenAI authentication broken after upgrade to 1.84.0"
description: "fix LiteLLM Azure AD token refresh broken after upgrade Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM Azure OAI Auth Broken in 1.84.0 with enable_azure_ad_token_refresh"
common_causes:
  - "Breaking change in production proxy. Teams using Azure AD token refresh for OpenAI models lose all authentication on upgrade. Affects enterprise deployments with managed identities."
  - "Upgrading from 1.84.0.rc.1 to 1.84.0 breaks Azure AD token refresh for OAI models. `enable_azure_ad_token_refresh: true` config causes auth failures. Regression confirmed across multiple users."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM 429 rate limit error leaks token hash"
  - "LiteLLM Azure gpt-image-2 edit broken"
updated: "2026-05-15"
published_at: "2026-05-15T07:13:21.988Z"
updated_at: "2026-05-15T07:13:21.988Z"
---

## What this error means

`LiteLLM Azure OAI Auth Broken in 1.84.0 with enable_azure_ad_token_refresh` is a LiteLLM failure pattern reported for developers trying to fix litellm azure ad token refresh broken after upgrade. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Upgrading from 1.84.0.rc.1 to 1.84.0 breaks Azure AD token refresh for OAI models. `enable_azure_ad_token_refresh: true` config causes auth failures. Regression confirmed across multiple users.

## Common causes

- Breaking change in production proxy. Teams using Azure AD token refresh for OpenAI models lose all authentication on upgrade. Affects enterprise deployments with managed identities.
- Upgrading from 1.84.0.rc.1 to 1.84.0 breaks Azure AD token refresh for OAI models. `enable_azure_ad_token_refresh: true` config causes auth failures. Regression confirmed across multiple users.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM Azure OAI Auth Broken in 1.84.0 with enable_azure_ad_token_refresh`.
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

Evidence note: Upgrading from 1.84.0.rc.1 to 1.84.0 breaks Azure AD token refresh for OAI models. `enable_azure_ad_token_refresh: true` config causes auth failures. Regression confirmed across multiple users.

## Related errors

- LiteLLM 429 rate limit error leaks token hash
- LiteLLM Azure gpt-image-2 edit broken

## FAQ

### What should I check first?

Start with the exact `LiteLLM Azure OAI Auth Broken in 1.84.0 with enable_azure_ad_token_refresh` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM Azure OAI Auth Broken in 1.84.0 with enable_azure_ad_token_refresh`.
