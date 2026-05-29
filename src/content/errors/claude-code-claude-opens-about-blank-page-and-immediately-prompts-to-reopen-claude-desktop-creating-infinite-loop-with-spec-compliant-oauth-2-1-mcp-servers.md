---
title: "Claude Desktop/Web fail to connect to OAuth-protected custom MCP server - infinite about:blank loop"
description: "Fix OAuth flow hanging in Claude Desktop/web when connecting to custom MCP servers with OAuth 2.1 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude opens about:blank page and immediately prompts to reopen Claude Desktop, creating infinite loop with spec-compliant OAuth 2.1 MCP servers"
common_causes:
  - "GitHub Issue #11814 on anthropics/claude-code: Custom FastAPI-based MCP server with OAuth 2.1/PKCE fails in Claude Desktop and claude.ai web interface. The OAuth flow never initiates. Distinct from auth status bug (#8002) — this is a runtime MCP connection failure. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T20:43:27.250Z"
updated_at: "2026-05-29T20:43:27.250Z"
---

## What this error means

`Claude opens about:blank page and immediately prompts to reopen Claude Desktop, creating infinite loop with spec-compliant OAuth 2.1 MCP servers` is a Claude Code failure pattern reported for developers trying to fix oauth flow hanging in claude desktop/web when connecting to custom mcp servers with oauth 2.1. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #11814 on anthropics/claude-code: Custom FastAPI-based MCP server with OAuth 2.1/PKCE fails in Claude Desktop and claude.ai web interface. The OAuth flow never initiates. Distinct from auth status bug (#8002) — this is a runtime MCP connection failure. Category: AI Coding Tools.

## Common causes

- GitHub Issue #11814 on anthropics/claude-code: Custom FastAPI-based MCP server with OAuth 2.1/PKCE fails in Claude Desktop and claude.ai web interface. The OAuth flow never initiates. Distinct from auth status bug (#8002) — this is a runtime MCP connection failure. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Claude opens about:blank page and immediately prompts to reopen Claude Desktop, creating infinite loop with spec-compliant OAuth 2.1 MCP servers`.
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

Evidence note: GitHub Issue #11814 on anthropics/claude-code: Custom FastAPI-based MCP server with OAuth 2.1/PKCE fails in Claude Desktop and claude.ai web interface. The OAuth flow never initiates. Distinct from auth status bug (#8002) — this is a runtime MCP connection failure. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude opens about:blank page and immediately prompts to reopen Claude Desktop, creating infinite loop with spec-compliant OAuth 2.1 MCP servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude opens about:blank page and immediately prompts to reopen Claude Desktop, creating infinite loop with spec-compliant OAuth 2.1 MCP servers`.
