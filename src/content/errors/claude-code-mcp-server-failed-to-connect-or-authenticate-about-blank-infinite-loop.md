---
title: "Claude Code MCP Server OAuth Flow Fails — About Blank Redirect Loop on Desktop/Web UI"
description: "Developer adds custom MCP server to Claude Code Desktop/claude.ai but OAuth flow never initiates — browser opens about:blank creating infinite loop. CLI --transport http works but desktop/web GUI fails. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server failed to connect or authenticate (about:blank infinite loop)"
common_causes:
  - "Anthropics/claude-code GitHub issue #11814 documents fully spec-compliant custom MCP OAuth servers failing in Claude Desktop and claude.ai web interface while working in CLI mode. Users see about:blank loop instead of OAuth consent page. Additional Asana MCP OAuth redirect_uri rejection (RFC 8252 loopback blocked) compounds the issue. Category: AI Coding Tools (Claude Code mapping per rules). High commercial value — breaks paid AI coding workflow with custom integrations."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T06:44:29.120Z"
updated_at: "2026-06-02T06:44:29.120Z"
---

## What this error means

`MCP server failed to connect or authenticate (about:blank infinite loop)` is a Claude Code failure pattern reported for developers trying to developer adds custom mcp server to claude code desktop/claude.ai but oauth flow never initiates — browser opens about:blank creating infinite loop. cli --transport http works but desktop/web gui fails.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Anthropics/claude-code GitHub issue #11814 documents fully spec-compliant custom MCP OAuth servers failing in Claude Desktop and claude.ai web interface while working in CLI mode. Users see about:blank loop instead of OAuth consent page. Additional Asana MCP OAuth redirect_uri rejection (RFC 8252 loopback blocked) compounds the issue. Category: AI Coding Tools (Claude Code mapping per rules). High commercial value — breaks paid AI coding workflow with custom integrations.

## Common causes

- Anthropics/claude-code GitHub issue #11814 documents fully spec-compliant custom MCP OAuth servers failing in Claude Desktop and claude.ai web interface while working in CLI mode. Users see about:blank loop instead of OAuth consent page. Additional Asana MCP OAuth redirect_uri rejection (RFC 8252 loopback blocked) compounds the issue. Category: AI Coding Tools (Claude Code mapping per rules). High commercial value — breaks paid AI coding workflow with custom integrations.

## Quick fixes

1. Confirm the exact error signature matches `MCP server failed to connect or authenticate (about:blank infinite loop)`.
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

- https://github.com/anthropics/claude-code/issues/11814
- https://forum.asana.com/t/cannot-connect-asana-mcp-to-claude-code-cli-oauth-redirect-uri-rejected/1136057
- https://code.claude.com/docs/en/errors

Evidence note: Anthropics/claude-code GitHub issue #11814 documents fully spec-compliant custom MCP OAuth servers failing in Claude Desktop and claude.ai web interface while working in CLI mode. Users see about:blank loop instead of OAuth consent page. Additional Asana MCP OAuth redirect_uri rejection (RFC 8252 loopback blocked) compounds the issue. Category: AI Coding Tools (Claude Code mapping per rules). High commercial value — breaks paid AI coding workflow with custom integrations.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server failed to connect or authenticate (about:blank infinite loop)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server failed to connect or authenticate (about:blank infinite loop)`.
