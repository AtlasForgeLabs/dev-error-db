---
title: "No Way to Reconnect/Refresh MCP Tools Without Ending Session — Blocking Under Remote Control"
description: "Find solution to refresh/reconnect MCP tools in an active Claude Code Remote Control session without killing the entire session Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "/mcp isn't available over Remote Control; in-session tool list frozen at boot-time snapshot after MCP server restart"
common_causes:
  - "GitHub Issue #60538 in anthropics/claude-code, opened May 19 2026 (yesterday). Details how the /mcp slash command is disabled under Remote Control and there is no CLI escape hatch to refresh the MCP tool catalog mid-session. Requires claude mcp remove+add which doesn't update live session cache. Directly impacts developers iterating on MCP server tool definitions. Category mapped to AI Coding Tools per approved mapping (Claude Code → AI Coding Tools)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T15:38:29.808Z"
updated_at: "2026-05-20T15:38:29.808Z"
---

## What this error means

`/mcp isn't available over Remote Control; in-session tool list frozen at boot-time snapshot after MCP server restart` is a Claude Code failure pattern reported for developers trying to find solution to refresh/reconnect mcp tools in an active claude code remote control session without killing the entire session. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60538 in anthropics/claude-code, opened May 19 2026 (yesterday). Details how the /mcp slash command is disabled under Remote Control and there is no CLI escape hatch to refresh the MCP tool catalog mid-session. Requires claude mcp remove+add which doesn't update live session cache. Directly impacts developers iterating on MCP server tool definitions. Category mapped to AI Coding Tools per approved mapping (Claude Code → AI Coding Tools).

## Common causes

- GitHub Issue #60538 in anthropics/claude-code, opened May 19 2026 (yesterday). Details how the /mcp slash command is disabled under Remote Control and there is no CLI escape hatch to refresh the MCP tool catalog mid-session. Requires claude mcp remove+add which doesn't update live session cache. Directly impacts developers iterating on MCP server tool definitions. Category mapped to AI Coding Tools per approved mapping (Claude Code → AI Coding Tools).

## Quick fixes

1. Confirm the exact error signature matches `/mcp isn't available over Remote Control; in-session tool list frozen at boot-time snapshot after MCP server restart`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/anthropics/claude-code/issues/60538

Evidence note: GitHub Issue #60538 in anthropics/claude-code, opened May 19 2026 (yesterday). Details how the /mcp slash command is disabled under Remote Control and there is no CLI escape hatch to refresh the MCP tool catalog mid-session. Requires claude mcp remove+add which doesn't update live session cache. Directly impacts developers iterating on MCP server tool definitions. Category mapped to AI Coding Tools per approved mapping (Claude Code → AI Coding Tools).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `/mcp isn't available over Remote Control; in-session tool list frozen at boot-time snapshot after MCP server restart` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/mcp isn't available over Remote Control; in-session tool list frozen at boot-time snapshot after MCP server restart`.
