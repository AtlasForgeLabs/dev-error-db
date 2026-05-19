---
title: "OAuth Authentication Succeeds but MCP Tools Remain Missing After Token Store Refresh"
description: "Fix Claude Code MCP OAuth tokens stored correctly but reconnection fails, tools not appearing until manual restart of Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth Authentication Succeeds but MCP Reconnection Fails — tools remain missing after manual restart required"
common_causes:
  - "Source: https://github.com/anthropics/claude-code/issues/10250. OAuth tokens correctly persisted to ~/.claude but MCP tools fail to reconnect. Requires manual claude exit/restart. Affects paying Claude Code users integrating custom MCP servers. Category: AI Coding Tools per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T15:37:16.728Z"
updated_at: "2026-05-19T15:37:16.728Z"
---

## What this error means

`OAuth Authentication Succeeds but MCP Reconnection Fails — tools remain missing after manual restart required` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth tokens stored correctly but reconnection fails, tools not appearing until manual restart of claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-code/issues/10250. OAuth tokens correctly persisted to ~/.claude but MCP tools fail to reconnect. Requires manual claude exit/restart. Affects paying Claude Code users integrating custom MCP servers. Category: AI Coding Tools per mapping rules.

## Common causes

- Source: https://github.com/anthropics/claude-code/issues/10250. OAuth tokens correctly persisted to ~/.claude but MCP tools fail to reconnect. Requires manual claude exit/restart. Affects paying Claude Code users integrating custom MCP servers. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `OAuth Authentication Succeeds but MCP Reconnection Fails — tools remain missing after manual restart required`.
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

- https://github.com/anthropics/claude-code/issues/10250

Evidence note: Source: https://github.com/anthropics/claude-code/issues/10250. OAuth tokens correctly persisted to ~/.claude but MCP tools fail to reconnect. Requires manual claude exit/restart. Affects paying Claude Code users integrating custom MCP servers. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth Authentication Succeeds but MCP Reconnection Fails — tools remain missing after manual restart required` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth Authentication Succeeds but MCP Reconnection Fails — tools remain missing after manual restart required`.
