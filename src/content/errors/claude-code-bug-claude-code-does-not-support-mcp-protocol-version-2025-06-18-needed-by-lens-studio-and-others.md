---
title: "Claude Code MCP Protocol Version 2025-06-18 Not Supported by Older Clients"
description: "Fix compatibility between Claude Code and external tools/services requiring the latest MCP protocol version (2025-06-18) Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] Claude code does not support MCP protocol version 2025-06-18 needed by Lens Studio and others"
common_causes:
  - "GitHub Issue #17169 on anthropics/claude-code (Jan 2026). After debugging, identified that MCP clients using protocol version 2025-06-18 fail with Claude Code which doesn't support this newer spec version yet. Affects developers integrating external tools via MCP Registry. High commercial relevance because MCP is becoming the standard extension protocol. Category mapping: AI Coding Tools (Claude Code is explicitly listed under this category)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-04"
published_at: "2026-06-04T12:44:35.873Z"
updated_at: "2026-06-04T12:44:35.873Z"
---

## What this error means

`[BUG] Claude code does not support MCP protocol version 2025-06-18 needed by Lens Studio and others` is a Claude Code failure pattern reported for developers trying to fix compatibility between claude code and external tools/services requiring the latest mcp protocol version (2025-06-18). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #17169 on anthropics/claude-code (Jan 2026). After debugging, identified that MCP clients using protocol version 2025-06-18 fail with Claude Code which doesn't support this newer spec version yet. Affects developers integrating external tools via MCP Registry. High commercial relevance because MCP is becoming the standard extension protocol. Category mapping: AI Coding Tools (Claude Code is explicitly listed under this category).

## Common causes

- GitHub Issue #17169 on anthropics/claude-code (Jan 2026). After debugging, identified that MCP clients using protocol version 2025-06-18 fail with Claude Code which doesn't support this newer spec version yet. Affects developers integrating external tools via MCP Registry. High commercial relevance because MCP is becoming the standard extension protocol. Category mapping: AI Coding Tools (Claude Code is explicitly listed under this category).

## Quick fixes

1. Confirm the exact error signature matches `[BUG] Claude code does not support MCP protocol version 2025-06-18 needed by Lens Studio and others`.
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

- https://github.com/anthropics/claude-code/issues/17169

Evidence note: GitHub Issue #17169 on anthropics/claude-code (Jan 2026). After debugging, identified that MCP clients using protocol version 2025-06-18 fail with Claude Code which doesn't support this newer spec version yet. Affects developers integrating external tools via MCP Registry. High commercial relevance because MCP is becoming the standard extension protocol. Category mapping: AI Coding Tools (Claude Code is explicitly listed under this category).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] Claude code does not support MCP protocol version 2025-06-18 needed by Lens Studio and others` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] Claude code does not support MCP protocol version 2025-06-18 needed by Lens Studio and others`.
