---
title: "Claude Code MCP OAuth redirect_uri_mismatch Error"
description: "Fix redirect_uri_mismatch error when connecting MCP servers via OAuth in Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "redirect_uri_mismatch — sent as /callback but local listener is at /oauth/callback"
common_causes:
  - "Claude Code sends /callback as the OAuth redirect_uri but the local listener binds at /oauth/callback, causing redirect_uri_mismatch errors with any MCP server using PKCE OAuth. Affects enterprise integrations (Salesforce, etc.) using http-type MCP servers."
  - "GitHub issue #58595 details an OAuth 2.0 PKCE flow bug where Claude Code's outbound redirect_uri uses /callback but the local listener is at /oauth/callback, causing IdP-side redirect_uri_mismatch. Reproduced with Salesforce Hosted MCP."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code MCP server authentication failure"
  - "MCP OAuth callback URL not working"
updated: "2026-05-13"
published_at: "2026-05-13T08:13:16.216Z"
updated_at: "2026-05-13T08:13:16.216Z"
---

## What this error means

`redirect_uri_mismatch — sent as /callback but local listener is at /oauth/callback` is a Claude Code failure pattern reported for developers trying to fix redirect_uri_mismatch error when connecting mcp servers via oauth in claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58595 details an OAuth 2.0 PKCE flow bug where Claude Code's outbound redirect_uri uses /callback but the local listener is at /oauth/callback, causing IdP-side redirect_uri_mismatch. Reproduced with Salesforce Hosted MCP.

## Common causes

- Claude Code sends /callback as the OAuth redirect_uri but the local listener binds at /oauth/callback, causing redirect_uri_mismatch errors with any MCP server using PKCE OAuth. Affects enterprise integrations (Salesforce, etc.) using http-type MCP servers.
- GitHub issue #58595 details an OAuth 2.0 PKCE flow bug where Claude Code's outbound redirect_uri uses /callback but the local listener is at /oauth/callback, causing IdP-side redirect_uri_mismatch. Reproduced with Salesforce Hosted MCP.

## Quick fixes

1. Confirm the exact error signature matches `redirect_uri_mismatch — sent as /callback but local listener is at /oauth/callback`.
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

- https://github.com/anthropics/claude-code/issues/58595

Evidence note: GitHub issue #58595 details an OAuth 2.0 PKCE flow bug where Claude Code's outbound redirect_uri uses /callback but the local listener is at /oauth/callback, causing IdP-side redirect_uri_mismatch. Reproduced with Salesforce Hosted MCP.

## Related errors

- Claude Code MCP server authentication failure
- MCP OAuth callback URL not working

## FAQ

### What should I check first?

Start with the exact `redirect_uri_mismatch — sent as /callback but local listener is at /oauth/callback` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `redirect_uri_mismatch — sent as /callback but local listener is at /oauth/callback`.
