---
title: "Claude Code Google MCP redirect_uri_mismatch Error Fix"
description: "Fix redirect_uri_mismatch OAuth error when connecting Google MCP servers to Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error 400: redirect_uri_mismatch when authenticating Google MCP servers"
common_causes:
  - "OAuth misconfiguration is a common enterprise blocker. Developers setting up Google MCP integrations get stuck at authentication with no clear guidance on redirect URI setup."
  - "Open issue on anthropics/claude-code repo. Error 400 redirect_uri_mismatch when authenticating Google MCP servers. OAuth flow failure blocks enterprise integrations."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code MCP OAuth setup guide"
  - "Google MCP server authentication failed"
  - "Claude Code OAuth callback URL configuration"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`Error 400: redirect_uri_mismatch when authenticating Google MCP servers` is a Claude Code failure pattern reported for developers trying to fix redirect_uri_mismatch oauth error when connecting google mcp servers to claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on anthropics/claude-code repo. Error 400 redirect_uri_mismatch when authenticating Google MCP servers. OAuth flow failure blocks enterprise integrations.

## Common causes

- OAuth misconfiguration is a common enterprise blocker. Developers setting up Google MCP integrations get stuck at authentication with no clear guidance on redirect URI setup.
- Open issue on anthropics/claude-code repo. Error 400 redirect_uri_mismatch when authenticating Google MCP servers. OAuth flow failure blocks enterprise integrations.

## Quick fixes

1. Confirm the exact error signature matches `Error 400: redirect_uri_mismatch when authenticating Google MCP servers`.
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

- https://github.com/anthropics/claude-code/issues/58700

Evidence note: Open issue on anthropics/claude-code repo. Error 400 redirect_uri_mismatch when authenticating Google MCP servers. OAuth flow failure blocks enterprise integrations.

## Related errors

- Claude Code MCP OAuth setup guide
- Google MCP server authentication failed
- Claude Code OAuth callback URL configuration

## FAQ

### What should I check first?

Start with the exact `Error 400: redirect_uri_mismatch when authenticating Google MCP servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 400: redirect_uri_mismatch when authenticating Google MCP servers`.
