---
title: "Claude Code MCP Server Connection Failure — Auth & Transport Configuration Errors"
description: "Developer trying to connect Claude Code to external systems (databases, internal APIs, cloud services) via MCP servers, encountering authentication failures, transport misconfiguration, or command execution errors — especially Windows npx compatibility issues Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error"
common_causes:
  - "Sources: https://www.truefoundry.com/blog/mcp-authentication-in-claude-code + https://codingnomads.com/claude-code-mcp-installation-configuration — MCP authentication involves API keys, Bearer tokens, AWS IAM roles, OAuth flows; transport type errors (HTTP vs stdio); Windows-specific cmd /c wrapper needed for npx commands. Category: AI Coding Tools. This is a newer, rapidly emerging error surface as MCP adoption grows — very low existing coverage on dev-error-db."
quick_fix: "Review the source evidence and rerun the smallest failing command."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T05:56:57.159Z"
updated_at: "2026-05-24T05:56:57.159Z"
---

## What this error means

`MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error` means Claude Code could not connect to or authenticate with an MCP server because transport settings, OAuth state, command launch configuration, or server credentials were invalid.

## Common causes

- Sources: https://www.truefoundry.com/blog/mcp-authentication-in-claude-code + https://codingnomads.com/claude-code-mcp-installation-configuration — MCP authentication involves API keys, Bearer tokens, AWS IAM roles, OAuth flows; transport type errors (HTTP vs stdio); Windows-specific cmd /c wrapper needed for npx commands. Category: AI Coding Tools. This is a newer, rapidly emerging error surface as MCP adoption grows — very low existing coverage on dev-error-db.

## How to fix MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error

1. Open the MCP server configuration and confirm transport type, command, URL, and auth settings match the server docs.
2. Re-authenticate or refresh OAuth tokens for MCP servers that require login.
3. Review the source evidence and rerun the smallest failing command.
4. Restart Claude Code after changing MCP config so the CLI reloads server definitions.

## Copy-paste commands

### List configured MCP servers in Claude Code

```bash
claude mcp list
```

### Inspect Claude Code config without printing secrets

```bash
ls -la ~/.claude ~/.config/claude 2>/dev/null
```

### Test a stdio MCP launch command directly

```bash
npx -y @modelcontextprotocol/server-filesystem /tmp
```

### Check whether required CLI tools are on PATH

```bash
which npx
node --version
```

## Quick fixes

1. Open the MCP server configuration and confirm transport type, command, URL, and auth settings match the server docs.
2. Re-authenticate or refresh OAuth tokens for MCP servers that require login.
3. Review the source evidence and rerun the smallest failing command.
4. Restart Claude Code after changing MCP config so the CLI reloads server definitions.

## Step-by-step troubleshooting

1. Capture the exact `MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error` message and the MCP server name from Claude Code logs.
2. Confirm the transport type matches the server implementation: stdio, HTTP, or SSE.
3. Refresh OAuth credentials or API keys used by the MCP server.
4. Run the MCP launch command outside Claude Code to verify it starts cleanly.
5. Restart Claude Code after config changes and retest one server at a time.

## Platform-specific fixes

### Windows

- Wrap `npx` MCP launch commands with `cmd /c` when Claude Code on Windows cannot execute them directly.

### macOS

- Confirm the MCP command works in the same shell environment Claude Code inherits.

### Linux

- Verify file permissions and PATH for the MCP server executable or wrapper script.

## Real-world fixes

- If OAuth completes but the MCP session fails immediately afterward, inspect the SSE or HTTP endpoint separately from the login step.
- If stdio servers exit instantly, run the launch command manually and inspect stderr before re-enabling it in Claude Code.
- Review the source evidence and rerun the smallest failing command.

## How to prevent it

- Document MCP server transport, auth, and launch commands per environment.
- Keep MCP configs in version control without secrets; store tokens separately.
- Test new MCP servers manually before enabling them in shared workflows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error` line and the command, request, or workflow step that produced it. In Claude Code MCP, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed Claude Code MCP step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `MCP server connection error — OAuth token expired, IAM role assumption failed, stdio transport command execution error`. The fix is working when that step completes without the same signature and produces the expected output.

## Sources checked

- https://www.truefoundry.com/blog/mcp-authentication-in-claude-code
- https://codingnomads.com/claude-code-mcp-installation-configuration
