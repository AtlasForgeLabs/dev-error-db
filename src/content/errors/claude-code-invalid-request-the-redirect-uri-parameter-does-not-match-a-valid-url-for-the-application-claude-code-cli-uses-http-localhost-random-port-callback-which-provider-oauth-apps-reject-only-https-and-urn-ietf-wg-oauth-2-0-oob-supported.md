---
title: "Claude Code CLI MCP OAuth Failed — Localhost Callback Port Mismatch Not Supported by Provider Apps"
description: "Connect external tools (Asana, Jira, etc.) via MCP server to Claude Code CLI but OAuth fails because localhost redirect URIs aren't accepted; find workaround using Anthropic-managed connectors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "invalid_request: The redirect_uri parameter does not match a valid url for the application. Claude Code CLI uses http://localhost:{random_port}/callback which provider OAuth apps reject (only https and urn:ietf:wg:oauth:2.0:oob supported)"
common_causes:
  - "Asana forum post (#1136057) documents MCP OAuth failure when connecting to Claude Code CLI. Works fine in Claude Desktop App (server-side OAuth) but CLI uses ephemeral localhost ports per RFC 822. Providers like Asana don't support http://localhost redirect URIs. Workaround: register connector via claude.ai/settings/connectors first then enable via ENABLE_CLAUDEAI_MCP_SERVERS env var. High commercial value — MCP integration is rapidly growing use case."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T05:44:26.150Z"
updated_at: "2026-06-01T05:44:26.150Z"
---

## What this error means

`invalid_request: The redirect_uri parameter does not match a valid url for the application. Claude Code CLI uses http://localhost:{random_port}/callback which provider OAuth apps reject (only https and urn:ietf:wg:oauth:2.0:oob supported)` is a Claude Code failure pattern reported for developers trying to connect external tools (asana, jira, etc.) via mcp server to claude code cli but oauth fails because localhost redirect uris aren't accepted; find workaround using anthropic-managed connectors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Asana forum post (#1136057) documents MCP OAuth failure when connecting to Claude Code CLI. Works fine in Claude Desktop App (server-side OAuth) but CLI uses ephemeral localhost ports per RFC 822. Providers like Asana don't support http://localhost redirect URIs. Workaround: register connector via claude.ai/settings/connectors first then enable via ENABLE_CLAUDEAI_MCP_SERVERS env var. High commercial value — MCP integration is rapidly growing use case.

## Common causes

- Asana forum post (#1136057) documents MCP OAuth failure when connecting to Claude Code CLI. Works fine in Claude Desktop App (server-side OAuth) but CLI uses ephemeral localhost ports per RFC 822. Providers like Asana don't support http://localhost redirect URIs. Workaround: register connector via claude.ai/settings/connectors first then enable via ENABLE_CLAUDEAI_MCP_SERVERS env var. High commercial value — MCP integration is rapidly growing use case.

## Quick fixes

1. Confirm the exact error signature matches `invalid_request: The redirect_uri parameter does not match a valid url for the application. Claude Code CLI uses http://localhost:{random_port}/callback which provider OAuth apps reject (only https and urn:ietf:wg:oauth:2.0:oob supported)`.
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

- https://forum.asana.com/t/cannot-connect-asana-mcp-to-claude-code-cli-oauth-redirect-uri-rejected/1136057

Evidence note: Asana forum post (#1136057) documents MCP OAuth failure when connecting to Claude Code CLI. Works fine in Claude Desktop App (server-side OAuth) but CLI uses ephemeral localhost ports per RFC 822. Providers like Asana don't support http://localhost redirect URIs. Workaround: register connector via claude.ai/settings/connectors first then enable via ENABLE_CLAUDEAI_MCP_SERVERS env var. High commercial value — MCP integration is rapidly growing use case.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `invalid_request: The redirect_uri parameter does not match a valid url for the application. Claude Code CLI uses http://localhost:{random_port}/callback which provider OAuth apps reject (only https and urn:ietf:wg:oauth:2.0:oob supported)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `invalid_request: The redirect_uri parameter does not match a valid url for the application. Claude Code CLI uses http://localhost:{random_port}/callback which provider OAuth apps reject (only https and urn:ietf:wg:oauth:2.0:oob supported)`.
