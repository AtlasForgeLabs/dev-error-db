---
title: "Claude Code MCP Server OAuth Parsing Failure for Custom Connectors (NetSuite Bug)"
description: "Fix Claude Code failing to complete OAuth authentication for custom MCP servers (like NetSuite); understand why MCP OAuth fails while Claude Desktop works fine Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[ERROR] MCP server Connection failed | No client info found SDK auth error Le"
common_causes:
  - "Anthropic GitHub Issue #11862 confirms a known bug where Claude Code fails to parse OAuth metadata from MCP servers (specifically NetSuite), browser never opens, authentication fails. Same MCP server works in Claude Desktop. Affected area: auth + mcp. High enterprise commercial value — NetSuite integration is common in production environments."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T10:37:15.860Z"
updated_at: "2026-05-19T10:37:15.860Z"
---

## What this error means

`[ERROR] MCP server Connection failed | No client info found SDK auth error Le` is a Claude Code failure pattern reported for developers trying to fix claude code failing to complete oauth authentication for custom mcp servers (like netsuite); understand why mcp oauth fails while claude desktop works fine. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Anthropic GitHub Issue #11862 confirms a known bug where Claude Code fails to parse OAuth metadata from MCP servers (specifically NetSuite), browser never opens, authentication fails. Same MCP server works in Claude Desktop. Affected area: auth + mcp. High enterprise commercial value — NetSuite integration is common in production environments.

## Common causes

- Anthropic GitHub Issue #11862 confirms a known bug where Claude Code fails to parse OAuth metadata from MCP servers (specifically NetSuite), browser never opens, authentication fails. Same MCP server works in Claude Desktop. Affected area: auth + mcp. High enterprise commercial value — NetSuite integration is common in production environments.

## Quick fixes

1. Confirm the exact error signature matches `[ERROR] MCP server Connection failed | No client info found SDK auth error Le`.
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

- https://github.com/anthropics/claude-code/issues/11862
- https://timdietrich.me/blog/netsuite-mcp-claude-code-bug/

Evidence note: Anthropic GitHub Issue #11862 confirms a known bug where Claude Code fails to parse OAuth metadata from MCP servers (specifically NetSuite), browser never opens, authentication fails. Same MCP server works in Claude Desktop. Affected area: auth + mcp. High enterprise commercial value — NetSuite integration is common in production environments.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[ERROR] MCP server Connection failed | No client info found SDK auth error Le` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[ERROR] MCP server Connection failed | No client info found SDK auth error Le`.
