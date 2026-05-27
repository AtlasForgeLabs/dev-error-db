---
title: "Claude Desktop Infinite Loop with Custom OAuth 2.1 MCP Server"
description: "Debug Claude Desktop/claude.ai web interface OAuth 2.1 connection failure that creates infinite restart loop for compliant custom MCP servers Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth 2.1 fully spec-compliant custom MCP server opens about:blank page and prompts infinite loop to reopen Claude Desktop; works fine with --transport http CLI"
common_causes:
  - "GitHub Issue #11814 in anthropics/claude-code: Fully spec-compliant custom MCP server with OAuth 2.1 authentication fails to connect in Claude Desktop and claude.ai web. OAuth never initiates — opens about:blank and loops. Same server works with Claude Code CLI using --transport http. Indicates bug specific to Desktop/web client OAuth handling."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T21:43:21.097Z"
updated_at: "2026-05-27T21:43:21.097Z"
---

## What this error means

`OAuth 2.1 fully spec-compliant custom MCP server opens about:blank page and prompts infinite loop to reopen Claude Desktop; works fine with --transport http CLI` is a Claude Code failure pattern reported for developers trying to debug claude desktop/claude.ai web interface oauth 2.1 connection failure that creates infinite restart loop for compliant custom mcp servers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #11814 in anthropics/claude-code: Fully spec-compliant custom MCP server with OAuth 2.1 authentication fails to connect in Claude Desktop and claude.ai web. OAuth never initiates — opens about:blank and loops. Same server works with Claude Code CLI using --transport http. Indicates bug specific to Desktop/web client OAuth handling.

## Common causes

- GitHub Issue #11814 in anthropics/claude-code: Fully spec-compliant custom MCP server with OAuth 2.1 authentication fails to connect in Claude Desktop and claude.ai web. OAuth never initiates — opens about:blank and loops. Same server works with Claude Code CLI using --transport http. Indicates bug specific to Desktop/web client OAuth handling.

## Quick fixes

1. Confirm the exact error signature matches `OAuth 2.1 fully spec-compliant custom MCP server opens about:blank page and prompts infinite loop to reopen Claude Desktop; works fine with --transport http CLI`.
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

Evidence note: GitHub Issue #11814 in anthropics/claude-code: Fully spec-compliant custom MCP server with OAuth 2.1 authentication fails to connect in Claude Desktop and claude.ai web. OAuth never initiates — opens about:blank and loops. Same server works with Claude Code CLI using --transport http. Indicates bug specific to Desktop/web client OAuth handling.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth 2.1 fully spec-compliant custom MCP server opens about:blank page and prompts infinite loop to reopen Claude Desktop; works fine with --transport http CLI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth 2.1 fully spec-compliant custom MCP server opens about:blank page and prompts infinite loop to reopen Claude Desktop; works fine with --transport http CLI`.
