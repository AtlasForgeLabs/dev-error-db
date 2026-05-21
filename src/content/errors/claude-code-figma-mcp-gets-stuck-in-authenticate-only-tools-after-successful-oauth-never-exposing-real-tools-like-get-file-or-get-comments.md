---
title: "Figma MCP server never transitions from auth mode to operational mode #61265"
description: "Fix Figma MCP OAuth flow completing but MCP server disconnecting and reconnecting with only auth placeholder tools instead of full Figma toolset Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Figma MCP gets stuck in authenticate-only tools after successful OAuth, never exposing real tools like get_file or get_comments"
common_causes:
  - "GitHub Issue #61265 in anthropics/claude-code by DaveLaFontaine, opened May 22, 2026. Detailed reproduction shows OAuth completes in browser → Claude Code disconnects MCP server → server reconnects with only mcp__figma__authenticate tools. ~/.claude/mcp-needs-auth-cache.json confirms token cached but never persisted to macOS Keychain or Claude Code credentials. Only ~15 min old, highly active. Duplicate check: no matching error in covered-errors.md. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T20:39:45.602Z"
updated_at: "2026-05-21T20:39:45.602Z"
---

## What this error means

`Figma MCP gets stuck in authenticate-only tools after successful OAuth, never exposing real tools like get_file or get_comments` is a Claude Code failure pattern reported for developers trying to fix figma mcp oauth flow completing but mcp server disconnecting and reconnecting with only auth placeholder tools instead of full figma toolset. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61265 in anthropics/claude-code by DaveLaFontaine, opened May 22, 2026. Detailed reproduction shows OAuth completes in browser → Claude Code disconnects MCP server → server reconnects with only mcp__figma__authenticate tools. ~/.claude/mcp-needs-auth-cache.json confirms token cached but never persisted to macOS Keychain or Claude Code credentials. Only ~15 min old, highly active. Duplicate check: no matching error in covered-errors.md. Category: AI Coding Tools.

## Common causes

- GitHub Issue #61265 in anthropics/claude-code by DaveLaFontaine, opened May 22, 2026. Detailed reproduction shows OAuth completes in browser → Claude Code disconnects MCP server → server reconnects with only mcp__figma__authenticate tools. ~/.claude/mcp-needs-auth-cache.json confirms token cached but never persisted to macOS Keychain or Claude Code credentials. Only ~15 min old, highly active. Duplicate check: no matching error in covered-errors.md. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Figma MCP gets stuck in authenticate-only tools after successful OAuth, never exposing real tools like get_file or get_comments`.
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

- https://github.com/anthropics/claude-code/issues/61265

Evidence note: GitHub Issue #61265 in anthropics/claude-code by DaveLaFontaine, opened May 22, 2026. Detailed reproduction shows OAuth completes in browser → Claude Code disconnects MCP server → server reconnects with only mcp__figma__authenticate tools. ~/.claude/mcp-needs-auth-cache.json confirms token cached but never persisted to macOS Keychain or Claude Code credentials. Only ~15 min old, highly active. Duplicate check: no matching error in covered-errors.md. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Figma MCP gets stuck in authenticate-only tools after successful OAuth, never exposing real tools like get_file or get_comments` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Figma MCP gets stuck in authenticate-only tools after successful OAuth, never exposing real tools like get_file or get_comments`.
