---
title: "LiteLLM 1.84.0 Breaks Azure OpenAI Authentication with enable_azure_ad_token_refresh"
description: "Fix LiteLLM Azure OpenAI auth broken after upgrade to 1.84.0 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.AuthenticationError: AzureException AuthenticationError - The api_key client option must be set"
common_causes:
  - "LiteLLM is a paid proxy service used by enterprises to manage multiple LLM providers. A breaking change in 1.84.0 broke Azure AD token refresh, which is a common enterprise authentication pattern. Users upgrading from rc.1 hit this immediately."
  - "Clear error: AuthenticationError after upgrading to 1.84.0. Works in 1.84.0.rc.1. Affects Azure AD token provider flow. Enterprise users relying on Azure integration are blocked."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM Azure AD token refresh error"
  - "LiteLLM AuthenticationError api_key not set"
  - "LiteLLM proxy fallback authentication failure"
updated: "2026-05-14"
published_at: "2026-05-14T22:13:20.935Z"
updated_at: "2026-05-14T22:13:20.935Z"
---

## What this error means

`litellm.AuthenticationError: AzureException AuthenticationError - The api_key client option must be set` is a LiteLLM failure pattern reported for developers trying to fix litellm azure openai auth broken after upgrade to 1.84.0. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Clear error: AuthenticationError after upgrading to 1.84.0. Works in 1.84.0.rc.1. Affects Azure AD token provider flow. Enterprise users relying on Azure integration are blocked.

## Common causes

- LiteLLM is a paid proxy service used by enterprises to manage multiple LLM providers. A breaking change in 1.84.0 broke Azure AD token refresh, which is a common enterprise authentication pattern. Users upgrading from rc.1 hit this immediately.
- Clear error: AuthenticationError after upgrading to 1.84.0. Works in 1.84.0.rc.1. Affects Azure AD token provider flow. Enterprise users relying on Azure integration are blocked.

## Quick fixes

1. Confirm the exact error signature matches `litellm.AuthenticationError: AzureException AuthenticationError - The api_key client option must be set`.
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

Evidence note: Clear error: AuthenticationError after upgrading to 1.84.0. Works in 1.84.0.rc.1. Affects Azure AD token provider flow. Enterprise users relying on Azure integration are blocked.

## Related errors

- LiteLLM Azure AD token refresh error
- LiteLLM AuthenticationError api_key not set
- LiteLLM proxy fallback authentication failure

## FAQ

### What should I check first?

Start with the exact `litellm.AuthenticationError: AzureException AuthenticationError - The api_key client option must be set` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.AuthenticationError: AzureException AuthenticationError - The api_key client option must be set`.
