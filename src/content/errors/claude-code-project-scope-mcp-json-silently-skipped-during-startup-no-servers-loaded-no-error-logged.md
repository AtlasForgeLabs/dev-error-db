---
title: "Claude Code Silently Skips Project .mcp.json on Linux in v2.1.141"
description: "Fix Claude Code not loading project-scope .mcp.json MCP servers Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Project-scope .mcp.json silently skipped during startup — no servers loaded, no error logged"
common_causes:
  - "Project-level .mcp.json is silently ignored during Claude Code startup. Debug log shows MCP loader entry/exit but never enumerates the project file. Only user-scope servers appear. Passing --mcp-config explicitly works."
  - "Claude Code 2.1.141 on Linux (Ubuntu) with JetBrains remote-dev terminal. Project .mcp.json with stdio servers is not auto-loaded. Trust dialog accepted, servers listed in enabledMcpjsonServers. Debug log shows no parse error or skip reason. --mcp-config workaround works."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server not loading"
  - "Claude Code .mcp.json ignored"
  - "MCP servers missing from /mcp panel"
updated: "2026-05-14"
published_at: "2026-05-14T05:13:18.868Z"
updated_at: "2026-05-14T05:13:18.868Z"
---

## What this error means

`Project-scope .mcp.json silently skipped during startup — no servers loaded, no error logged` is a Claude Code failure pattern reported for developers trying to fix claude code not loading project-scope .mcp.json mcp servers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code 2.1.141 on Linux (Ubuntu) with JetBrains remote-dev terminal. Project .mcp.json with stdio servers is not auto-loaded. Trust dialog accepted, servers listed in enabledMcpjsonServers. Debug log shows no parse error or skip reason. --mcp-config workaround works.

## Common causes

- Project-level .mcp.json is silently ignored during Claude Code startup. Debug log shows MCP loader entry/exit but never enumerates the project file. Only user-scope servers appear. Passing --mcp-config explicitly works.
- Claude Code 2.1.141 on Linux (Ubuntu) with JetBrains remote-dev terminal. Project .mcp.json with stdio servers is not auto-loaded. Trust dialog accepted, servers listed in enabledMcpjsonServers. Debug log shows no parse error or skip reason. --mcp-config workaround works.

## Quick fixes

1. Confirm the exact error signature matches `Project-scope .mcp.json silently skipped during startup — no servers loaded, no error logged`.
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

- https://github.com/anthropics/claude-code/issues/58924

Evidence note: Claude Code 2.1.141 on Linux (Ubuntu) with JetBrains remote-dev terminal. Project .mcp.json with stdio servers is not auto-loaded. Trust dialog accepted, servers listed in enabledMcpjsonServers. Debug log shows no parse error or skip reason. --mcp-config workaround works.

## Related errors

- Claude Code MCP server not loading
- Claude Code .mcp.json ignored
- MCP servers missing from /mcp panel

## FAQ

### What should I check first?

Start with the exact `Project-scope .mcp.json silently skipped during startup — no servers loaded, no error logged` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Project-scope .mcp.json silently skipped during startup — no servers loaded, no error logged`.
