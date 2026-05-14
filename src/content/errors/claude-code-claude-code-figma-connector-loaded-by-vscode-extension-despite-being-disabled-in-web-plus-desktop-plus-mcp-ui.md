---
title: "Claude Code Figma Connector Loads Despite Being Disabled in All UIs — Requires Manual JSON Edit"
description: "Fix Claude Code VSCode extension loading disabled MCP connectors like Figma Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code Figma connector loaded by VSCode extension despite being disabled in web + Desktop + /mcp UI"
common_causes:
  - "Figma connector still loads and attempts JSON-RPC handshake even after being disabled in claude.ai web, Claude Desktop, and extension /mcp UI. Handshake fails with '-32600 Invalid content from server' causing the [object Object] toast. Only manual edit to disabledMcpServers in ~/.claude.json works."
  - "Three official UI toggles (web, Desktop, /mcp) do not propagate disabled state. Extension still attempts handshake with disabled connector. Fails with -32600. Only manual JSON edit silences it. Max plan subscriber affected."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server not disabling"
  - "Claude Code connector handshake failure"
  - "Claude Code disabledMcpServers not working"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Claude Code Figma connector loaded by VSCode extension despite being disabled in web + Desktop + /mcp UI` is a Claude Code failure pattern reported for developers trying to fix claude code vscode extension loading disabled mcp connectors like figma. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Three official UI toggles (web, Desktop, /mcp) do not propagate disabled state. Extension still attempts handshake with disabled connector. Fails with -32600. Only manual JSON edit silences it. Max plan subscriber affected.

## Common causes

- Figma connector still loads and attempts JSON-RPC handshake even after being disabled in claude.ai web, Claude Desktop, and extension /mcp UI. Handshake fails with '-32600 Invalid content from server' causing the [object Object] toast. Only manual edit to disabledMcpServers in ~/.claude.json works.
- Three official UI toggles (web, Desktop, /mcp) do not propagate disabled state. Extension still attempts handshake with disabled connector. Fails with -32600. Only manual JSON edit silences it. Max plan subscriber affected.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code Figma connector loaded by VSCode extension despite being disabled in web + Desktop + /mcp UI`.
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

- https://github.com/anthropics/claude-code/issues/59208

Evidence note: Three official UI toggles (web, Desktop, /mcp) do not propagate disabled state. Extension still attempts handshake with disabled connector. Fails with -32600. Only manual JSON edit silences it. Max plan subscriber affected.

## Related errors

- Claude Code MCP server not disabling
- Claude Code connector handshake failure
- Claude Code disabledMcpServers not working

## FAQ

### What should I check first?

Start with the exact `Claude Code Figma connector loaded by VSCode extension despite being disabled in web + Desktop + /mcp UI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code Figma connector loaded by VSCode extension despite being disabled in web + Desktop + /mcp UI`.
