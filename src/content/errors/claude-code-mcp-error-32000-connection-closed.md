---
title: "Claude Code MCP Server Crashes with Error -32000 and 'Connection closed'"
description: "Fixing Claude Code MCP server crashes where third-party MCP servers fail to start or exit mid-handshake, returning generic JSON-RPC -32000 errors with 'Connection closed' message Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP error -32000: Connection closed"
common_causes:
  - "Codsera 2026 field guide documents MCP -32000 as the JSON-RPC generic server-error code in practice meaning the MCP server process crashed during initialization or exited mid-handshake. Also corroborated by GitHub issue #3273 (anthropics/claude-code) about Claude Code not working with MCP servers lacking certain capabilities. Category mapping: Claude Code → AI Coding Tools per approved category table."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T13:43:17.084Z"
updated_at: "2026-05-26T13:43:17.084Z"
---

## What this error means

`MCP error -32000: Connection closed` is a Claude Code failure pattern reported for developers trying to fixing claude code mcp server crashes where third-party mcp servers fail to start or exit mid-handshake, returning generic json-rpc -32000 errors with 'connection closed' message. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Codsera 2026 field guide documents MCP -32000 as the JSON-RPC generic server-error code in practice meaning the MCP server process crashed during initialization or exited mid-handshake. Also corroborated by GitHub issue #3273 (anthropics/claude-code) about Claude Code not working with MCP servers lacking certain capabilities. Category mapping: Claude Code → AI Coding Tools per approved category table.

## Common causes

- Codsera 2026 field guide documents MCP -32000 as the JSON-RPC generic server-error code in practice meaning the MCP server process crashed during initialization or exited mid-handshake. Also corroborated by GitHub issue #3273 (anthropics/claude-code) about Claude Code not working with MCP servers lacking certain capabilities. Category mapping: Claude Code → AI Coding Tools per approved category table.

## Quick fixes

1. Confirm the exact error signature matches `MCP error -32000: Connection closed`.
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
- https://github.com/anthropics/claude-code/issues/3273

Evidence note: Codsera 2026 field guide documents MCP -32000 as the JSON-RPC generic server-error code in practice meaning the MCP server process crashed during initialization or exited mid-handshake. Also corroborated by GitHub issue #3273 (anthropics/claude-code) about Claude Code not working with MCP servers lacking certain capabilities. Category mapping: Claude Code → AI Coding Tools per approved category table.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP error -32000: Connection closed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP error -32000: Connection closed`.
