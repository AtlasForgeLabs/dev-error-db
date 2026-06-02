---
title: "Claude Code MCP Server -32000 Connection Closed — Stdio Transport Crash Debugging"
description: "Developer adds an MCP server to Claude Code but gets '-32000 Connection closed'; needs systematic troubleshooting to identify if it's missing binary, wrong Node version, env var drift, or stdout corruption corrupting JSON-RPC stream. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP error -32000: Connection closed — MCP server process crashed at startup"
common_causes:
  - "Multiple sources document the -32000 JSON-RPC generic error specifically for Claude Code MCP servers. Codersera guide maps root causes: wrong absolute path, .zshrc not loaded in stripped environment, console.log() corrupting JSON-RPC on stdout. stuartmason.co.uk (Feb 2026) provides comprehensive 6-cause breakdown including Root Cause 5 (HTTP URL/Auth issues) and Root Cause 6 (scope configuration). Category mapping: Claude Code internal tool failure → 'AI Coding Tools'. Not in dev-error-db."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T10:44:29.559Z"
updated_at: "2026-06-02T10:44:29.559Z"
---

## What this error means

`MCP error -32000: Connection closed — MCP server process crashed at startup` is a Claude Code failure pattern reported for developers trying to developer adds an mcp server to claude code but gets '-32000 connection closed'; needs systematic troubleshooting to identify if it's missing binary, wrong node version, env var drift, or stdout corruption corrupting json-rpc stream.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple sources document the -32000 JSON-RPC generic error specifically for Claude Code MCP servers. Codersera guide maps root causes: wrong absolute path, .zshrc not loaded in stripped environment, console.log() corrupting JSON-RPC on stdout. stuartmason.co.uk (Feb 2026) provides comprehensive 6-cause breakdown including Root Cause 5 (HTTP URL/Auth issues) and Root Cause 6 (scope configuration). Category mapping: Claude Code internal tool failure → 'AI Coding Tools'. Not in dev-error-db.

## Common causes

- Multiple sources document the -32000 JSON-RPC generic error specifically for Claude Code MCP servers. Codersera guide maps root causes: wrong absolute path, .zshrc not loaded in stripped environment, console.log() corrupting JSON-RPC on stdout. stuartmason.co.uk (Feb 2026) provides comprehensive 6-cause breakdown including Root Cause 5 (HTTP URL/Auth issues) and Root Cause 6 (scope configuration). Category mapping: Claude Code internal tool failure → 'AI Coding Tools'. Not in dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `MCP error -32000: Connection closed — MCP server process crashed at startup`.
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

- https://codersera.com/blog/claude-code-common-errors-troubleshooting-2026/
- https://stuartmason.co.uk/posts/claude-code-mcp-failed-to-connect
- https://systemprompt.io/guides/claude-code-mcp-servers-extensions

Evidence note: Multiple sources document the -32000 JSON-RPC generic error specifically for Claude Code MCP servers. Codersera guide maps root causes: wrong absolute path, .zshrc not loaded in stripped environment, console.log() corrupting JSON-RPC on stdout. stuartmason.co.uk (Feb 2026) provides comprehensive 6-cause breakdown including Root Cause 5 (HTTP URL/Auth issues) and Root Cause 6 (scope configuration). Category mapping: Claude Code internal tool failure → 'AI Coding Tools'. Not in dev-error-db.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP error -32000: Connection closed — MCP server process crashed at startup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP error -32000: Connection closed — MCP server process crashed at startup`.
