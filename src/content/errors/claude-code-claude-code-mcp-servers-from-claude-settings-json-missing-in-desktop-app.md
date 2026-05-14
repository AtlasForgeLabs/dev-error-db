---
title: "Claude Code Desktop App Ignores MCP Servers from ~/.claude/settings.json"
description: "Fix Claude Code desktop app not loading MCP servers from settings.json Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code MCP servers from ~/.claude/settings.json missing in desktop app"
common_causes:
  - "MCP servers configured in ~/.claude/settings.json are not started or made available in Claude Code desktop app local sessions. Only built-in app-level connectors load. The same config works perfectly in CLI sessions. Users cannot use their configured tools in the desktop app."
  - "main.log shows replaceRemoteMcpServers only loads 7 app-level connectors. settings.json MCP servers (ado, sql-server, figma) completely absent. CLI sessions load all MCP servers correctly. Desktop app v2.1.138 on Windows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server not starting"
  - "Claude Code settings.json MCP config ignored"
updated: "2026-05-14"
published_at: "2026-05-14T10:13:19.561Z"
updated_at: "2026-05-14T10:13:19.561Z"
---

## What this error means

`Claude Code MCP servers from ~/.claude/settings.json missing in desktop app` is a Claude Code failure pattern reported for developers trying to fix claude code desktop app not loading mcp servers from settings.json. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

main.log shows replaceRemoteMcpServers only loads 7 app-level connectors. settings.json MCP servers (ado, sql-server, figma) completely absent. CLI sessions load all MCP servers correctly. Desktop app v2.1.138 on Windows.

## Common causes

- MCP servers configured in ~/.claude/settings.json are not started or made available in Claude Code desktop app local sessions. Only built-in app-level connectors load. The same config works perfectly in CLI sessions. Users cannot use their configured tools in the desktop app.
- main.log shows replaceRemoteMcpServers only loads 7 app-level connectors. settings.json MCP servers (ado, sql-server, figma) completely absent. CLI sessions load all MCP servers correctly. Desktop app v2.1.138 on Windows.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code MCP servers from ~/.claude/settings.json missing in desktop app`.
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

- https://github.com/anthropics/claude-code/issues/58997

Evidence note: main.log shows replaceRemoteMcpServers only loads 7 app-level connectors. settings.json MCP servers (ado, sql-server, figma) completely absent. CLI sessions load all MCP servers correctly. Desktop app v2.1.138 on Windows.

## Related errors

- Claude Code MCP server not starting
- Claude Code settings.json MCP config ignored

## FAQ

### What should I check first?

Start with the exact `Claude Code MCP servers from ~/.claude/settings.json missing in desktop app` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code MCP servers from ~/.claude/settings.json missing in desktop app`.
