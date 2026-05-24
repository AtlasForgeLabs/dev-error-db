---
title: "/v1/models wildcard discovery does not expand team BYOK routes using litellm_credential_name"
description: "Fix LiteLLM proxy /v1/models endpoint so wildcard team BYOK routes properly expand and discover models stored under litellm_credential_name Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "/v1/models wildcard expansion fails to find team-scoped wildcard deployment models; team.models = ['openai/*'] does not resolve correctly when check_provider_endpoint=true"
common_causes:
  - "GitHub issue #28264 on BerriAI/litellm describes a bug where /v1/models wildcard expansion does not correctly resolve team-scoped wildcard deployment configurations (team.models = ['openai/*']). This blocks developers managing multiple model providers through LiteLLM proxy. Category maps to LiteLLM as a core proxy routing error affecting paid enterprise deployments."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-05-24"
published_at: "2026-05-24T00:39:51.863Z"
updated_at: "2026-05-24T00:39:51.863Z"
---

## What this error means

`/v1/models wildcard expansion fails to find team-scoped wildcard deployment models; team.models = ['openai/*'] does not resolve correctly when check_provider_endpoint=true` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy /v1/models endpoint so wildcard team byok routes properly expand and discover models stored under litellm_credential_name. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28264 on BerriAI/litellm describes a bug where /v1/models wildcard expansion does not correctly resolve team-scoped wildcard deployment configurations (team.models = ['openai/*']). This blocks developers managing multiple model providers through LiteLLM proxy. Category maps to LiteLLM as a core proxy routing error affecting paid enterprise deployments.

## Common causes

- GitHub issue #28264 on BerriAI/litellm describes a bug where /v1/models wildcard expansion does not correctly resolve team-scoped wildcard deployment configurations (team.models = ['openai/*']). This blocks developers managing multiple model providers through LiteLLM proxy. Category maps to LiteLLM as a core proxy routing error affecting paid enterprise deployments.

## Quick fixes

1. Confirm the exact error signature matches `/v1/models wildcard expansion fails to find team-scoped wildcard deployment models; team.models = ['openai/*'] does not resolve correctly when check_provider_endpoint=true`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/BerriAI/litellm/issues/28264

Evidence note: GitHub issue #28264 on BerriAI/litellm describes a bug where /v1/models wildcard expansion does not correctly resolve team-scoped wildcard deployment configurations (team.models = ['openai/*']). This blocks developers managing multiple model providers through LiteLLM proxy. Category maps to LiteLLM as a core proxy routing error affecting paid enterprise deployments.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `/v1/models wildcard expansion fails to find team-scoped wildcard deployment models; team.models = ['openai/*'] does not resolve correctly when check_provider_endpoint=true` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/v1/models wildcard expansion fails to find team-scoped wildcard deployment models; team.models = ['openai/*'] does not resolve correctly when check_provider_endpoint=true`.
