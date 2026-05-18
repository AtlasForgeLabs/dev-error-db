---
title: "OAuth Token Exchange Silently Fails with AWS Cognito + AgentCore Gateway Missing code_challenge_methods_supported"
description: "Fix OAuth token exchange failure between AWS Cognito identity provider and AgentCore Gateway when code_challenge_methods_supported metadata is absent Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth fails with AWS Cognito + AgentCore Gateway: token exchange silently fails due to missing code_challenge_methods_supported"
common_causes:
  - "Specific OAuth interoperability bug reported in claude-code issue #35846. When connecting MCP servers through AWS Cognito SSO + AgentCore, the OAuth PKCE flow breaks because the authorization server doesn't advertise code_challenge_methods_supported. Silent failure means developers waste time debugging what appears to be a connectivity issue. Related to broader MCP OAuth failures (#26917, #11585, #35052). Distinct error_signature from parent issues — focuses on the specific Cognito metadata gap."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T00:37:11.467Z"
updated_at: "2026-05-18T00:37:11.467Z"
---

## What this error means

`OAuth fails with AWS Cognito + AgentCore Gateway: token exchange silently fails due to missing code_challenge_methods_supported` is a Claude Code failure pattern reported for developers trying to fix oauth token exchange failure between aws cognito identity provider and agentcore gateway when code_challenge_methods_supported metadata is absent. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Specific OAuth interoperability bug reported in claude-code issue #35846. When connecting MCP servers through AWS Cognito SSO + AgentCore, the OAuth PKCE flow breaks because the authorization server doesn't advertise code_challenge_methods_supported. Silent failure means developers waste time debugging what appears to be a connectivity issue. Related to broader MCP OAuth failures (#26917, #11585, #35052). Distinct error_signature from parent issues — focuses on the specific Cognito metadata gap.

## Common causes

- Specific OAuth interoperability bug reported in claude-code issue #35846. When connecting MCP servers through AWS Cognito SSO + AgentCore, the OAuth PKCE flow breaks because the authorization server doesn't advertise code_challenge_methods_supported. Silent failure means developers waste time debugging what appears to be a connectivity issue. Related to broader MCP OAuth failures (#26917, #11585, #35052). Distinct error_signature from parent issues — focuses on the specific Cognito metadata gap.

## Quick fixes

1. Confirm the exact error signature matches `OAuth fails with AWS Cognito + AgentCore Gateway: token exchange silently fails due to missing code_challenge_methods_supported`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/35846

Evidence note: Specific OAuth interoperability bug reported in claude-code issue #35846. When connecting MCP servers through AWS Cognito SSO + AgentCore, the OAuth PKCE flow breaks because the authorization server doesn't advertise code_challenge_methods_supported. Silent failure means developers waste time debugging what appears to be a connectivity issue. Related to broader MCP OAuth failures (#26917, #11585, #35052). Distinct error_signature from parent issues — focuses on the specific Cognito metadata gap.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth fails with AWS Cognito + AgentCore Gateway: token exchange silently fails due to missing code_challenge_methods_supported` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth fails with AWS Cognito + AgentCore Gateway: token exchange silently fails due to missing code_challenge_methods_supported`.
