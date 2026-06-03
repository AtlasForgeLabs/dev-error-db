---
title: "Claude Code MCP server failed to connect — Connection refused"
description: "Fix Claude Code MCP connection refused error; configure or repair local MCP server integration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code: MCP server process exited with code 1 — error=ConnectionRefusedError(111, \"Connect call failed ('127.0.0.1', port)\")"
common_causes:
  - "Claude Code's MCP (Model Context Protocol) feature requires connecting to local servers (filesystem, GitHub, databases). When MCP server crashes or config is wrong, Claude Code can't provide context-aware assistance. Critical for AI coding tool users in production workflows — blocks entire development sessions."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T12:44:32.846Z"
updated_at: "2026-06-03T12:44:32.846Z"
---

## What this error means

`Claude Code: MCP server process exited with code 1 — error=ConnectionRefusedError(111, "Connect call failed ('127.0.0.1', port)")` is a Claude Code failure pattern reported for developers trying to fix claude code mcp connection refused error; configure or repair local mcp server integration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code's MCP (Model Context Protocol) feature requires connecting to local servers (filesystem, GitHub, databases). When MCP server crashes or config is wrong, Claude Code can't provide context-aware assistance. Critical for AI coding tool users in production workflows — blocks entire development sessions.

## Common causes

- Claude Code's MCP (Model Context Protocol) feature requires connecting to local servers (filesystem, GitHub, databases). When MCP server crashes or config is wrong, Claude Code can't provide context-aware assistance. Critical for AI coding tool users in production workflows — blocks entire development sessions.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code: MCP server process exited with code 1 — error=ConnectionRefusedError(111, "Connect call failed ('127.0.0.1', port)")`.
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

- https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview
- https://modelcontextprotocol.io/introduction

Evidence note: Claude Code's MCP (Model Context Protocol) feature requires connecting to local servers (filesystem, GitHub, databases). When MCP server crashes or config is wrong, Claude Code can't provide context-aware assistance. Critical for AI coding tool users in production workflows — blocks entire development sessions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code: MCP server process exited with code 1 — error=ConnectionRefusedError(111, "Connect call failed ('127.0.0.1', port)")` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code: MCP server process exited with code 1 — error=ConnectionRefusedError(111, "Connect call failed ('127.0.0.1', port)")`.
