---
title: "Claude Code CLI fails to connect to HTTP MCP servers with FailedToOpenSocket / ConnectionRefused on macOS"
description: "Fix Claude Code CLI failing to connect to HTTP MCP servers with socket-level connection refused errors on macOS, specifically when VS Code extension connects successfully with identical configuration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "FailedToOpenSocket / ConnectionRefused — Claude Code CLI cannot connect to HTTP MCP servers; Bun runtime TCP failure while VS Code extension works fine"
common_causes:
  - "GitHub Issue #34982 on anthropics/claude-code filed March 16, 2026. The Bun runtime bundled in the Claude Code CLI binary fails at the TCP socket level before any HTTP request is made. Same MCP server connects successfully via VS Code extension (same version 2.1.76, same ~/.claude.json). Verified via curl that the MCP server responds HTTP 200 correctly. Regession — worked in previous version. Category mapping: Claude Code is part of AI coding tools ecosystem, MCP integration is core functionality."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T09:44:29.474Z"
updated_at: "2026-06-02T09:44:29.474Z"
---

## What this error means

`FailedToOpenSocket / ConnectionRefused — Claude Code CLI cannot connect to HTTP MCP servers; Bun runtime TCP failure while VS Code extension works fine` is a Claude Code failure pattern reported for developers trying to fix claude code cli failing to connect to http mcp servers with socket-level connection refused errors on macos, specifically when vs code extension connects successfully with identical configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #34982 on anthropics/claude-code filed March 16, 2026. The Bun runtime bundled in the Claude Code CLI binary fails at the TCP socket level before any HTTP request is made. Same MCP server connects successfully via VS Code extension (same version 2.1.76, same ~/.claude.json). Verified via curl that the MCP server responds HTTP 200 correctly. Regession — worked in previous version. Category mapping: Claude Code is part of AI coding tools ecosystem, MCP integration is core functionality.

## Common causes

- GitHub Issue #34982 on anthropics/claude-code filed March 16, 2026. The Bun runtime bundled in the Claude Code CLI binary fails at the TCP socket level before any HTTP request is made. Same MCP server connects successfully via VS Code extension (same version 2.1.76, same ~/.claude.json). Verified via curl that the MCP server responds HTTP 200 correctly. Regession — worked in previous version. Category mapping: Claude Code is part of AI coding tools ecosystem, MCP integration is core functionality.

## Quick fixes

1. Confirm the exact error signature matches `FailedToOpenSocket / ConnectionRefused — Claude Code CLI cannot connect to HTTP MCP servers; Bun runtime TCP failure while VS Code extension works fine`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://github.com/anthropics/claude-code/issues/34982

Evidence note: GitHub Issue #34982 on anthropics/claude-code filed March 16, 2026. The Bun runtime bundled in the Claude Code CLI binary fails at the TCP socket level before any HTTP request is made. Same MCP server connects successfully via VS Code extension (same version 2.1.76, same ~/.claude.json). Verified via curl that the MCP server responds HTTP 200 correctly. Regession — worked in previous version. Category mapping: Claude Code is part of AI coding tools ecosystem, MCP integration is core functionality.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `FailedToOpenSocket / ConnectionRefused — Claude Code CLI cannot connect to HTTP MCP servers; Bun runtime TCP failure while VS Code extension works fine` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `FailedToOpenSocket / ConnectionRefused — Claude Code CLI cannot connect to HTTP MCP servers; Bun runtime TCP failure while VS Code extension works fine`.
