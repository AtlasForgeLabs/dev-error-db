---
title: "Claude Code web GitHub MCP OAuth flow completely broken — consent screen shows wrong page"
description: "Users running Claude Code on claude.ai/code web sessions want to use the built-in GitHub MCP for PR/issue management but the OAuth flow redirects to a retired gdrive page instead of the GitHub consent screen. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Server Turned Down — This MCP server has been turned down. Please use claude.ai instead. (redirect_uri=http://localhost:/callback)"
common_causes:
  - "GitHub Issue #60807 (anthropics/claude-code) reports the web-hosted GitHub MCP OAuth redirect points to api.anthropic.com/v2/ccr-sessions/*/github/mcp which serves a retired gdrive install page. No workaround within web session — only local Claude Code CLI works. Affects paying users who rely on cloud sessions for remote work. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T22:44:25.443Z"
updated_at: "2026-05-31T22:44:25.443Z"
---

## What this error means

`Server Turned Down — This MCP server has been turned down. Please use claude.ai instead. (redirect_uri=http://localhost:/callback)` is a Claude Code failure pattern reported for developers trying to users running claude code on claude.ai/code web sessions want to use the built-in github mcp for pr/issue management but the oauth flow redirects to a retired gdrive page instead of the github consent screen.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60807 (anthropics/claude-code) reports the web-hosted GitHub MCP OAuth redirect points to api.anthropic.com/v2/ccr-sessions/*/github/mcp which serves a retired gdrive install page. No workaround within web session — only local Claude Code CLI works. Affects paying users who rely on cloud sessions for remote work. Category: AI Coding Tools.

## Common causes

- GitHub Issue #60807 (anthropics/claude-code) reports the web-hosted GitHub MCP OAuth redirect points to api.anthropic.com/v2/ccr-sessions/*/github/mcp which serves a retired gdrive install page. No workaround within web session — only local Claude Code CLI works. Affects paying users who rely on cloud sessions for remote work. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Server Turned Down — This MCP server has been turned down. Please use claude.ai instead. (redirect_uri=http://localhost:/callback)`.
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

- https://github.com/anthropics/claude-code/issues/60807

Evidence note: GitHub Issue #60807 (anthropics/claude-code) reports the web-hosted GitHub MCP OAuth redirect points to api.anthropic.com/v2/ccr-sessions/*/github/mcp which serves a retired gdrive install page. No workaround within web session — only local Claude Code CLI works. Affects paying users who rely on cloud sessions for remote work. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Server Turned Down — This MCP server has been turned down. Please use claude.ai instead. (redirect_uri=http://localhost:/callback)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Server Turned Down — This MCP server has been turned down. Please use claude.ai instead. (redirect_uri=http://localhost:/callback)`.
