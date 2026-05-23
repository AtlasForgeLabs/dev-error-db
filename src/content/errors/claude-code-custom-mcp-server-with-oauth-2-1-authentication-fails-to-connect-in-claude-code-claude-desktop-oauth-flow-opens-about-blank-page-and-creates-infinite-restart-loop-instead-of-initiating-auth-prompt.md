---
title: "Claude Code Custom MCP OAuth 2.1 Connection Failure (Infinite Loop Bug)"
description: "Fix OAuth 2.1 connection failure for custom MCP servers in Claude Code; resolve infinite restart loop during authentication flow Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Custom MCP server with OAuth 2.1 authentication fails to connect in Claude Code/Claude Desktop — OAuth flow opens about:blank page and creates infinite restart loop instead of initiating auth prompt"
common_causes:
  - "anthropics/claude-code#11814 details spec-compliant OAuth 2.1 MCP servers failing in both Claude Desktop and claude.ai web interface while working perfectly via CLI --transport http. The about:blank + infinite loop bug blocks enterprise MCP integrations entirely."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T14:39:50.670Z"
updated_at: "2026-05-23T14:39:50.670Z"
---

## What this error means

`Custom MCP server with OAuth 2.1 authentication fails to connect in Claude Code/Claude Desktop — OAuth flow opens about:blank page and creates infinite restart loop instead of initiating auth prompt` is a Claude Code failure pattern reported for developers trying to fix oauth 2.1 connection failure for custom mcp servers in claude code; resolve infinite restart loop during authentication flow. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code#11814 details spec-compliant OAuth 2.1 MCP servers failing in both Claude Desktop and claude.ai web interface while working perfectly via CLI --transport http. The about:blank + infinite loop bug blocks enterprise MCP integrations entirely.

## Common causes

- anthropics/claude-code#11814 details spec-compliant OAuth 2.1 MCP servers failing in both Claude Desktop and claude.ai web interface while working perfectly via CLI --transport http. The about:blank + infinite loop bug blocks enterprise MCP integrations entirely.

## Quick fixes

1. Confirm the exact error signature matches `Custom MCP server with OAuth 2.1 authentication fails to connect in Claude Code/Claude Desktop — OAuth flow opens about:blank page and creates infinite restart loop instead of initiating auth prompt`.
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
- https://github.com/anthropics/claude-code/issues/5826
- https://github.com/anthropics/claude-code/issues/35389

Evidence note: anthropics/claude-code#11814 details spec-compliant OAuth 2.1 MCP servers failing in both Claude Desktop and claude.ai web interface while working perfectly via CLI --transport http. The about:blank + infinite loop bug blocks enterprise MCP integrations entirely.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Custom MCP server with OAuth 2.1 authentication fails to connect in Claude Code/Claude Desktop — OAuth flow opens about:blank page and creates infinite restart loop instead of initiating auth prompt` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Custom MCP server with OAuth 2.1 authentication fails to connect in Claude Code/Claude Desktop — OAuth flow opens about:blank page and creates infinite restart loop instead of initiating auth prompt`.
