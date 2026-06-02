---
title: "Claude.ai web MCP connector completes OAuth but never sends Bearer token to server"
description: "Fix claude.ai web interface unable to authenticate with self-hosted MCP servers despite successful OAuth 2.1 + PKCE flow completion; Bearer token is issued but never used in subsequent MCP requests Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authorization with the MCP server failed — claude.ai receives access_token from OAuth flow but discards it and never sends Authorization: Bearer <token>"
common_causes:
  - "GitHub Issue #46140 on anthropics/claude-code marked CRITICAL/URGENT. Full OAuth 2.1 authorization_code + PKCE flow completes (DCR → authorize → token exchange → 200 access_token), but claude.ai never attempts the authenticated MCP request. Server-side implementation verified working via curl. Blocks ALL self-hosted remote MCP servers for claude.ai web users. Claude Code CLI works perfectly with same server. Newer issue reflecting growing adoption of remote MCP with claude.ai web. Category: Claude Code / AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T09:44:29.474Z"
updated_at: "2026-06-02T09:44:29.474Z"
---

## What this error means

`Authorization with the MCP server failed — claude.ai receives access_token from OAuth flow but discards it and never sends Authorization: Bearer <token>` is a Claude Code failure pattern reported for developers trying to fix claude.ai web interface unable to authenticate with self-hosted mcp servers despite successful oauth 2.1 + pkce flow completion; bearer token is issued but never used in subsequent mcp requests. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #46140 on anthropics/claude-code marked CRITICAL/URGENT. Full OAuth 2.1 authorization_code + PKCE flow completes (DCR → authorize → token exchange → 200 access_token), but claude.ai never attempts the authenticated MCP request. Server-side implementation verified working via curl. Blocks ALL self-hosted remote MCP servers for claude.ai web users. Claude Code CLI works perfectly with same server. Newer issue reflecting growing adoption of remote MCP with claude.ai web. Category: Claude Code / AI Coding Tools.

## Common causes

- GitHub Issue #46140 on anthropics/claude-code marked CRITICAL/URGENT. Full OAuth 2.1 authorization_code + PKCE flow completes (DCR → authorize → token exchange → 200 access_token), but claude.ai never attempts the authenticated MCP request. Server-side implementation verified working via curl. Blocks ALL self-hosted remote MCP servers for claude.ai web users. Claude Code CLI works perfectly with same server. Newer issue reflecting growing adoption of remote MCP with claude.ai web. Category: Claude Code / AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Authorization with the MCP server failed — claude.ai receives access_token from OAuth flow but discards it and never sends Authorization: Bearer <token>`.
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

- https://github.com/anthropics/claude-code/issues/46140

Evidence note: GitHub Issue #46140 on anthropics/claude-code marked CRITICAL/URGENT. Full OAuth 2.1 authorization_code + PKCE flow completes (DCR → authorize → token exchange → 200 access_token), but claude.ai never attempts the authenticated MCP request. Server-side implementation verified working via curl. Blocks ALL self-hosted remote MCP servers for claude.ai web users. Claude Code CLI works perfectly with same server. Newer issue reflecting growing adoption of remote MCP with claude.ai web. Category: Claude Code / AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authorization with the MCP server failed — claude.ai receives access_token from OAuth flow but discards it and never sends Authorization: Bearer <token>` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authorization with the MCP server failed — claude.ai receives access_token from OAuth flow but discards it and never sends Authorization: Bearer <token>`.
