---
title: "Claude Code MCP Browser Extension 'Not Connected' Error — Fix Native Messaging Handshake"
description: "Fix Claude Code MCP browser extension showing 'Browser extension is not connected' despite being installed and running Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Browser extension is not connected"
common_causes:
  - "Claude Code's built-in claude-in-chrome MCP server reports 20 tools connected, but every tool call returns 'Browser extension is not connected' error. The failure occurs in an internal handshake between the native host and Chrome extension, with no debug log output. Users have the extension installed, correct permissions, matching accounts, and valid native messaging manifests — yet the connection fails silently."
  - "GitHub issue #58553 filed 2026-05-13. MCP server shows 'connected · 20 tools' but all tool calls fail with 'Browser extension is not connected'. Native host process running, named pipe present, manifest correct, registry key correct, extension permissions 'On all sites'. Internal handshake layer fails without debug log output."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server tool calls failing"
  - "Claude Code Chrome extension native messaging broken"
  - "Claude Code browser integration not working"
updated: "2026-05-13"
published_at: "2026-05-13T02:12:22.017Z"
updated_at: "2026-05-13T02:12:22.017Z"
---

## What this error means

`Browser extension is not connected` is a Claude Code failure pattern reported for developers trying to fix claude code mcp browser extension showing 'browser extension is not connected' despite being installed and running. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58553 filed 2026-05-13. MCP server shows 'connected · 20 tools' but all tool calls fail with 'Browser extension is not connected'. Native host process running, named pipe present, manifest correct, registry key correct, extension permissions 'On all sites'. Internal handshake layer fails without debug log output.

## Common causes

- Claude Code's built-in claude-in-chrome MCP server reports 20 tools connected, but every tool call returns 'Browser extension is not connected' error. The failure occurs in an internal handshake between the native host and Chrome extension, with no debug log output. Users have the extension installed, correct permissions, matching accounts, and valid native messaging manifests — yet the connection fails silently.
- GitHub issue #58553 filed 2026-05-13. MCP server shows 'connected · 20 tools' but all tool calls fail with 'Browser extension is not connected'. Native host process running, named pipe present, manifest correct, registry key correct, extension permissions 'On all sites'. Internal handshake layer fails without debug log output.

## Quick fixes

1. Confirm the exact error signature matches `Browser extension is not connected`.
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

- https://github.com/anthropics/claude-code/issues/58553

Evidence note: GitHub issue #58553 filed 2026-05-13. MCP server shows 'connected · 20 tools' but all tool calls fail with 'Browser extension is not connected'. Native host process running, named pipe present, manifest correct, registry key correct, extension permissions 'On all sites'. Internal handshake layer fails without debug log output.

## Related errors

- Claude Code MCP server tool calls failing
- Claude Code Chrome extension native messaging broken
- Claude Code browser integration not working

## FAQ

### What should I check first?

Start with the exact `Browser extension is not connected` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Browser extension is not connected`.
