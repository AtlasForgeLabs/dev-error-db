---
title: "Claude Code Web Session GitHub MCP OAuth Flow Broken - Returns 'Server Turned Down' Page Instead of Consent Screen"
description: "Fix GitHub MCP authentication in web-based Claude Code sessions that returns generic 'Server Turned Down' error instead of OAuth consent screen Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions — shows 'Server Turned Down — This MCP server has been turned down' instead of GitHub consent screen"
common_causes:
  - "GitHub issue #60807 reports hosted GitHub MCP OAuth completely broken in claude.ai/code web sessions since May 2026. Users get retired gdrive install page instead of GitHub consent screen. Affects all web session users needing GitHub repo access. Clear P0 commercial impact for paid Anthropic users. Maps to AI Coding Tools category."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T12:44:24.638Z"
updated_at: "2026-05-31T12:44:24.638Z"
---

## What this error means

`Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions — shows 'Server Turned Down — This MCP server has been turned down' instead of GitHub consent screen` is a Claude Code failure pattern reported for developers trying to fix github mcp authentication in web-based claude code sessions that returns generic 'server turned down' error instead of oauth consent screen. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60807 reports hosted GitHub MCP OAuth completely broken in claude.ai/code web sessions since May 2026. Users get retired gdrive install page instead of GitHub consent screen. Affects all web session users needing GitHub repo access. Clear P0 commercial impact for paid Anthropic users. Maps to AI Coding Tools category.

## Common causes

- GitHub issue #60807 reports hosted GitHub MCP OAuth completely broken in claude.ai/code web sessions since May 2026. Users get retired gdrive install page instead of GitHub consent screen. Affects all web session users needing GitHub repo access. Clear P0 commercial impact for paid Anthropic users. Maps to AI Coding Tools category.

## Quick fixes

1. Confirm the exact error signature matches `Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions — shows 'Server Turned Down — This MCP server has been turned down' instead of GitHub consent screen`.
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

Evidence note: GitHub issue #60807 reports hosted GitHub MCP OAuth completely broken in claude.ai/code web sessions since May 2026. Users get retired gdrive install page instead of GitHub consent screen. Affects all web session users needing GitHub repo access. Clear P0 commercial impact for paid Anthropic users. Maps to AI Coding Tools category.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions — shows 'Server Turned Down — This MCP server has been turned down' instead of GitHub consent screen` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions — shows 'Server Turned Down — This MCP server has been turned down' instead of GitHub consent screen`.
