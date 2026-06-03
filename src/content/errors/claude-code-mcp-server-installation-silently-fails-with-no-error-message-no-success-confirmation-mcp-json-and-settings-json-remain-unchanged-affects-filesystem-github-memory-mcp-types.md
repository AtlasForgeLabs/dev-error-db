---
title: "MCP Server Installer UI Fails Silently — All MCP Types Affected"
description: "Debug why Claude Code/Windsurf MCP Server installer silently fails without any visible error when adding standard MCP servers via the webview UI Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server installation silently fails with no error message, no success confirmation, .mcp.json and settings.json remain unchanged; affects Filesystem, GitHub, Memory MCP types"
common_causes:
  - "GitHub Issue #61455 on anthropics/claude-code (created 2026-05-22). Detailed root cause investigation reveals Claude VSCode extension does not implement MCP server installation — the webview sends update_session_state messages but the result handler lacks proper implementation. Affects all MCP types (Filesystem, GitHub, Memory). Reproducible on Windows 11 with Claude Code/Windsurf. Category mapping: Claude Code → AI Coding Tools per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T03:44:31.684Z"
updated_at: "2026-06-03T03:44:31.684Z"
---

## What this error means

`MCP server installation silently fails with no error message, no success confirmation, .mcp.json and settings.json remain unchanged; affects Filesystem, GitHub, Memory MCP types` is a Claude Code failure pattern reported for developers trying to debug why claude code/windsurf mcp server installer silently fails without any visible error when adding standard mcp servers via the webview ui. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61455 on anthropics/claude-code (created 2026-05-22). Detailed root cause investigation reveals Claude VSCode extension does not implement MCP server installation — the webview sends update_session_state messages but the result handler lacks proper implementation. Affects all MCP types (Filesystem, GitHub, Memory). Reproducible on Windows 11 with Claude Code/Windsurf. Category mapping: Claude Code → AI Coding Tools per SKILL.md.

## Common causes

- GitHub Issue #61455 on anthropics/claude-code (created 2026-05-22). Detailed root cause investigation reveals Claude VSCode extension does not implement MCP server installation — the webview sends update_session_state messages but the result handler lacks proper implementation. Affects all MCP types (Filesystem, GitHub, Memory). Reproducible on Windows 11 with Claude Code/Windsurf. Category mapping: Claude Code → AI Coding Tools per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `MCP server installation silently fails with no error message, no success confirmation, .mcp.json and settings.json remain unchanged; affects Filesystem, GitHub, Memory MCP types`.
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

- https://github.com/anthropics/claude-code/issues/61455

Evidence note: GitHub Issue #61455 on anthropics/claude-code (created 2026-05-22). Detailed root cause investigation reveals Claude VSCode extension does not implement MCP server installation — the webview sends update_session_state messages but the result handler lacks proper implementation. Affects all MCP types (Filesystem, GitHub, Memory). Reproducible on Windows 11 with Claude Code/Windsurf. Category mapping: Claude Code → AI Coding Tools per SKILL.md.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server installation silently fails with no error message, no success confirmation, .mcp.json and settings.json remain unchanged; affects Filesystem, GitHub, Memory MCP types` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server installation silently fails with no error message, no success confirmation, .mcp.json and settings.json remain unchanged; affects Filesystem, GitHub, Memory MCP types`.
