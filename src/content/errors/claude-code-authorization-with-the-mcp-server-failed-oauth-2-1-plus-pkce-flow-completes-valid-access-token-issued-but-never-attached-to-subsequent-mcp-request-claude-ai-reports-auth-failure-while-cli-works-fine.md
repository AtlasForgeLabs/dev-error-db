---
title: "Claude Code MCP Connector Completes OAuth But Never Sends Bearer Token"
description: "Fix Claude Code self-hosted MCP server OAuth authentication where token exchange succeeds but Bearer token is silently dropped Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"Authorization with the MCP server failed\" — OAuth 2.1 + PKCE flow completes, valid access_token issued but never attached to subsequent MCP request; claude.ai reports auth failure while CLI works fine"
common_causes:
  - "GitHub issue #46140 (anthropics/claude-code): CRITICAL severity. Self-hosted remote MCP servers using OAuth fail on claude.ai web interface only — Claude Code CLI handles identical setup correctly. Full OAuth 2.1 authorization_code + PKCE flow succeeds (Dynamic Client Registration → authorize → token exchange), but claude.ai discards the token and reports 'Authorization with the MCP server failed'. Affects ALL self-hosted OAuth MCP connectors. Category: AI Coding Tools (Claude Code MCP feature bug)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T15:44:24.853Z"
updated_at: "2026-05-31T15:44:24.853Z"
---

## What this error means

`"Authorization with the MCP server failed" — OAuth 2.1 + PKCE flow completes, valid access_token issued but never attached to subsequent MCP request; claude.ai reports auth failure while CLI works fine` is a Claude Code failure pattern reported for developers trying to fix claude code self-hosted mcp server oauth authentication where token exchange succeeds but bearer token is silently dropped. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #46140 (anthropics/claude-code): CRITICAL severity. Self-hosted remote MCP servers using OAuth fail on claude.ai web interface only — Claude Code CLI handles identical setup correctly. Full OAuth 2.1 authorization_code + PKCE flow succeeds (Dynamic Client Registration → authorize → token exchange), but claude.ai discards the token and reports 'Authorization with the MCP server failed'. Affects ALL self-hosted OAuth MCP connectors. Category: AI Coding Tools (Claude Code MCP feature bug).

## Common causes

- GitHub issue #46140 (anthropics/claude-code): CRITICAL severity. Self-hosted remote MCP servers using OAuth fail on claude.ai web interface only — Claude Code CLI handles identical setup correctly. Full OAuth 2.1 authorization_code + PKCE flow succeeds (Dynamic Client Registration → authorize → token exchange), but claude.ai discards the token and reports 'Authorization with the MCP server failed'. Affects ALL self-hosted OAuth MCP connectors. Category: AI Coding Tools (Claude Code MCP feature bug).

## Quick fixes

1. Confirm the exact error signature matches `"Authorization with the MCP server failed" — OAuth 2.1 + PKCE flow completes, valid access_token issued but never attached to subsequent MCP request; claude.ai reports auth failure while CLI works fine`.
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

Evidence note: GitHub issue #46140 (anthropics/claude-code): CRITICAL severity. Self-hosted remote MCP servers using OAuth fail on claude.ai web interface only — Claude Code CLI handles identical setup correctly. Full OAuth 2.1 authorization_code + PKCE flow succeeds (Dynamic Client Registration → authorize → token exchange), but claude.ai discards the token and reports 'Authorization with the MCP server failed'. Affects ALL self-hosted OAuth MCP connectors. Category: AI Coding Tools (Claude Code MCP feature bug).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"Authorization with the MCP server failed" — OAuth 2.1 + PKCE flow completes, valid access_token issued but never attached to subsequent MCP request; claude.ai reports auth failure while CLI works fine` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Authorization with the MCP server failed" — OAuth 2.1 + PKCE flow completes, valid access_token issued but never attached to subsequent MCP request; claude.ai reports auth failure while CLI works fine`.
