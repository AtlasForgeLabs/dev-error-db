---
title: "Claude.ai custom MCP connector OAuth callback returns Method Not Allowed before /oauth/token"
description: "Fix OAuth callback failing with Method Not Allowed when connecting self-hosted remote MCP server to Claude.ai custom connector Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "{\"type\":\"error\",\"error\":{\"type\":\"invalid_request_error\",\"message\":\"Method Not Allowed\"}}"
common_causes:
  - "Found at anthropics/claude-ai-mcp#313 (open May 18–19, 2026). Developer connects OAuth-protected remote MCP server via Settings → Connectors → Custom Connector. DCR succeeds, authorization code redirect works, but Claude.ai's /api/mcp/auth_callback returns invalid_request_error 'Method Not Allowed' before POST /oauth/token is ever called. Affects paid Claude Team/Pro subscribers configuring enterprise MCP integrations. No existing coverage in dev-error-db."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-18"
published_at: "2026-05-18T23:37:14.530Z"
updated_at: "2026-05-18T23:37:14.530Z"
---

## What this error means

`{"type":"error","error":{"type":"invalid_request_error","message":"Method Not Allowed"}}` is a Anthropic API failure pattern reported for developers trying to fix oauth callback failing with method not allowed when connecting self-hosted remote mcp server to claude.ai custom connector. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found at anthropics/claude-ai-mcp#313 (open May 18–19, 2026). Developer connects OAuth-protected remote MCP server via Settings → Connectors → Custom Connector. DCR succeeds, authorization code redirect works, but Claude.ai's /api/mcp/auth_callback returns invalid_request_error 'Method Not Allowed' before POST /oauth/token is ever called. Affects paid Claude Team/Pro subscribers configuring enterprise MCP integrations. No existing coverage in dev-error-db.

## Common causes

- Found at anthropics/claude-ai-mcp#313 (open May 18–19, 2026). Developer connects OAuth-protected remote MCP server via Settings → Connectors → Custom Connector. DCR succeeds, authorization code redirect works, but Claude.ai's /api/mcp/auth_callback returns invalid_request_error 'Method Not Allowed' before POST /oauth/token is ever called. Affects paid Claude Team/Pro subscribers configuring enterprise MCP integrations. No existing coverage in dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `{"type":"error","error":{"type":"invalid_request_error","message":"Method Not Allowed"}}`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-ai-mcp/issues/313

Evidence note: Found at anthropics/claude-ai-mcp#313 (open May 18–19, 2026). Developer connects OAuth-protected remote MCP server via Settings → Connectors → Custom Connector. DCR succeeds, authorization code redirect works, but Claude.ai's /api/mcp/auth_callback returns invalid_request_error 'Method Not Allowed' before POST /oauth/token is ever called. Affects paid Claude Team/Pro subscribers configuring enterprise MCP integrations. No existing coverage in dev-error-db.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `{"type":"error","error":{"type":"invalid_request_error","message":"Method Not Allowed"}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `{"type":"error","error":{"type":"invalid_request_error","message":"Method Not Allowed"}}`.
