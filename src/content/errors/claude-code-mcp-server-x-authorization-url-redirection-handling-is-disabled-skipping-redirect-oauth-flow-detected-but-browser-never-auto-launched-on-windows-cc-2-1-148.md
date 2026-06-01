---
title: "Claude Code MCP Auto-Open Browser Silently Disabled on Windows — OAuth URL Surfaced But Never Launched"
description: "Windows user of Claude Code tries to connect OAuth-enabled MCP server; auth URL appears in terminal but browser never opens automatically, blocking all MCP tool usage. User must manually copy-paste URL into browser each time. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server \"X\": Authorization URL: ... Redirection handling is disabled, skipping redirect OAuth flow detected but browser never auto-launched on Windows CC 2.1.148"
common_causes:
  - "GitHub issue anthropics/claude-code#61542 filed May 2026 documents Windows-specific regression: mcp.autoOpenBrowser config and CLAUDE_MCP_AUTO_OPEN=1 env var both fail; auto-browser-open was disabled after fixing #14220 with no replacement UX. Users report workaround of manual URL paste works but is undocumented. Severity: breaks entire MCP workflow on Windows. Category: AI Coding Tools (Claude Code)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T03:44:26.013Z"
updated_at: "2026-06-01T03:44:26.013Z"
---

## What this error means

`MCP server "X": Authorization URL: ... Redirection handling is disabled, skipping redirect OAuth flow detected but browser never auto-launched on Windows CC 2.1.148` is a Claude Code failure pattern reported for developers trying to windows user of claude code tries to connect oauth-enabled mcp server; auth url appears in terminal but browser never opens automatically, blocking all mcp tool usage. user must manually copy-paste url into browser each time.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#61542 filed May 2026 documents Windows-specific regression: mcp.autoOpenBrowser config and CLAUDE_MCP_AUTO_OPEN=1 env var both fail; auto-browser-open was disabled after fixing #14220 with no replacement UX. Users report workaround of manual URL paste works but is undocumented. Severity: breaks entire MCP workflow on Windows. Category: AI Coding Tools (Claude Code).

## Common causes

- GitHub issue anthropics/claude-code#61542 filed May 2026 documents Windows-specific regression: mcp.autoOpenBrowser config and CLAUDE_MCP_AUTO_OPEN=1 env var both fail; auto-browser-open was disabled after fixing #14220 with no replacement UX. Users report workaround of manual URL paste works but is undocumented. Severity: breaks entire MCP workflow on Windows. Category: AI Coding Tools (Claude Code).

## Quick fixes

1. Confirm the exact error signature matches `MCP server "X": Authorization URL: ... Redirection handling is disabled, skipping redirect OAuth flow detected but browser never auto-launched on Windows CC 2.1.148`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/61542

Evidence note: GitHub issue anthropics/claude-code#61542 filed May 2026 documents Windows-specific regression: mcp.autoOpenBrowser config and CLAUDE_MCP_AUTO_OPEN=1 env var both fail; auto-browser-open was disabled after fixing #14220 with no replacement UX. Users report workaround of manual URL paste works but is undocumented. Severity: breaks entire MCP workflow on Windows. Category: AI Coding Tools (Claude Code).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server "X": Authorization URL: ... Redirection handling is disabled, skipping redirect OAuth flow detected but browser never auto-launched on Windows CC 2.1.148` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server "X": Authorization URL: ... Redirection handling is disabled, skipping redirect OAuth flow detected but browser never auto-launched on Windows CC 2.1.148`.
