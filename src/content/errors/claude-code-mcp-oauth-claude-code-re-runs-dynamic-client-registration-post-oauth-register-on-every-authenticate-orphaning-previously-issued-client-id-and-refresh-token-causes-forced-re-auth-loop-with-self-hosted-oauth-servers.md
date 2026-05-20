---
title: "MCP OAuth: Claude Code re-runs DCR on every authenticate, orphaning previously issued client_id"
description: "Fix MCP OAuth re-authentication loop caused by DCR being called repeatedly instead of reusing persisted credentials Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth: Claude Code re-runs Dynamic Client Registration (POST /oauth/register) on every authenticate, orphaning previously issued client_id and refresh_token; causes forced re-auth loop with self-hosted OAuth servers"
common_causes:
  - "GitHub Issue #59460 (anthropics/claude-code), created 2026-05-15, 2 comments. Detailed reproduction with RFC 7591 DCR + OAuth 2.1 servers. Category: Claude Code = AI Coding Tools per category mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T00:38:17.910Z"
updated_at: "2026-05-20T00:38:17.910Z"
---

## What this error means

`MCP OAuth: Claude Code re-runs Dynamic Client Registration (POST /oauth/register) on every authenticate, orphaning previously issued client_id and refresh_token; causes forced re-auth loop with self-hosted OAuth servers` is a Claude Code failure pattern reported for developers trying to fix mcp oauth re-authentication loop caused by dcr being called repeatedly instead of reusing persisted credentials. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #59460 (anthropics/claude-code), created 2026-05-15, 2 comments. Detailed reproduction with RFC 7591 DCR + OAuth 2.1 servers. Category: Claude Code = AI Coding Tools per category mapping rules.

## Common causes

- GitHub Issue #59460 (anthropics/claude-code), created 2026-05-15, 2 comments. Detailed reproduction with RFC 7591 DCR + OAuth 2.1 servers. Category: Claude Code = AI Coding Tools per category mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth: Claude Code re-runs Dynamic Client Registration (POST /oauth/register) on every authenticate, orphaning previously issued client_id and refresh_token; causes forced re-auth loop with self-hosted OAuth servers`.
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

- https://github.com/anthropics/claude-code/issues/59460

Evidence note: GitHub Issue #59460 (anthropics/claude-code), created 2026-05-15, 2 comments. Detailed reproduction with RFC 7591 DCR + OAuth 2.1 servers. Category: Claude Code = AI Coding Tools per category mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth: Claude Code re-runs Dynamic Client Registration (POST /oauth/register) on every authenticate, orphaning previously issued client_id and refresh_token; causes forced re-auth loop with self-hosted OAuth servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth: Claude Code re-runs Dynamic Client Registration (POST /oauth/register) on every authenticate, orphaning previously issued client_id and refresh_token; causes forced re-auth loop with self-hosted OAuth servers`.
