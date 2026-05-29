---
title: "Claude Desktop Web — Snowflake OAuth Connector Fails with 'mcp_client_invalid' Error After Redirect"
description: "Developer configuring Snowflake OAuth as MCP connector for Claude Desktop/Web fails after completing OAuth flow; needs fix for Claude never reaching Snowflake token endpoint Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "oauth_error=invalid_client&error_code=mcp_client_invalid"
common_causes:
  - "Source: https://github.com/anthropics/claude-ai-mcp/issues/257 (created 2026-05-05). Open bug against anthropics/claude-ai-mcp repo affecting Snowflake custom security integration. Both Claude Desktop v1.5354.0.0 and claude.ai web affected. Enterprise snowflake OAuth setup blocked — strong commercial impact for AI coding tool integrations. Category mapped to AI Coding Tools as it directly impacts Claude Code Desktop/Web ecosystem."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T12:43:26.234Z"
updated_at: "2026-05-29T12:43:26.234Z"
---

## What this error means

`oauth_error=invalid_client&error_code=mcp_client_invalid` is a Claude Code failure pattern reported for developers trying to developer configuring snowflake oauth as mcp connector for claude desktop/web fails after completing oauth flow; needs fix for claude never reaching snowflake token endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-ai-mcp/issues/257 (created 2026-05-05). Open bug against anthropics/claude-ai-mcp repo affecting Snowflake custom security integration. Both Claude Desktop v1.5354.0.0 and claude.ai web affected. Enterprise snowflake OAuth setup blocked — strong commercial impact for AI coding tool integrations. Category mapped to AI Coding Tools as it directly impacts Claude Code Desktop/Web ecosystem.

## Common causes

- Source: https://github.com/anthropics/claude-ai-mcp/issues/257 (created 2026-05-05). Open bug against anthropics/claude-ai-mcp repo affecting Snowflake custom security integration. Both Claude Desktop v1.5354.0.0 and claude.ai web affected. Enterprise snowflake OAuth setup blocked — strong commercial impact for AI coding tool integrations. Category mapped to AI Coding Tools as it directly impacts Claude Code Desktop/Web ecosystem.

## Quick fixes

1. Confirm the exact error signature matches `oauth_error=invalid_client&error_code=mcp_client_invalid`.
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

- https://github.com/anthropics/claude-ai-mcp/issues/257

Evidence note: Source: https://github.com/anthropics/claude-ai-mcp/issues/257 (created 2026-05-05). Open bug against anthropics/claude-ai-mcp repo affecting Snowflake custom security integration. Both Claude Desktop v1.5354.0.0 and claude.ai web affected. Enterprise snowflake OAuth setup blocked — strong commercial impact for AI coding tool integrations. Category mapped to AI Coding Tools as it directly impacts Claude Code Desktop/Web ecosystem.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `oauth_error=invalid_client&error_code=mcp_client_invalid` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `oauth_error=invalid_client&error_code=mcp_client_invalid`.
