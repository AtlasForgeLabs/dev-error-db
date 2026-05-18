---
title: "Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — infinite about:blank loop"
description: "Fix Claude Desktop/claude.ai OAuth MCP connection failure where about:blank opens instead of redirecting to the OAuth authorization server Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — opens about:blank page instead of authorization endpoint; infinite 'Open Claude?' dialog loop"
common_causes:
  - "GitHub Issue #11814 on anthropics/claude-code repo by @jsbattig (Nov 2025). Fully spec-compliant MCP server with OAuth 2.1/RFC 8414/RFC 9728 fails to initiate OAuth flow in Claude Desktop and claude.ai web. Claude Code CLI works fine via --transport http, confirming server-side correctness. Mapped to AI Coding Tools category since this is a Claude Code platform-level bug affecting enterprise developers."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T15:37:13.342Z"
updated_at: "2026-05-18T15:37:13.342Z"
---

## What this error means

`[BUG] Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — opens about:blank page instead of authorization endpoint; infinite 'Open Claude?' dialog loop` is a Claude Code failure pattern reported for developers trying to fix claude desktop/claude.ai oauth mcp connection failure where about:blank opens instead of redirecting to the oauth authorization server. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #11814 on anthropics/claude-code repo by @jsbattig (Nov 2025). Fully spec-compliant MCP server with OAuth 2.1/RFC 8414/RFC 9728 fails to initiate OAuth flow in Claude Desktop and claude.ai web. Claude Code CLI works fine via --transport http, confirming server-side correctness. Mapped to AI Coding Tools category since this is a Claude Code platform-level bug affecting enterprise developers.

## Common causes

- GitHub Issue #11814 on anthropics/claude-code repo by @jsbattig (Nov 2025). Fully spec-compliant MCP server with OAuth 2.1/RFC 8414/RFC 9728 fails to initiate OAuth flow in Claude Desktop and claude.ai web. Claude Code CLI works fine via --transport http, confirming server-side correctness. Mapped to AI Coding Tools category since this is a Claude Code platform-level bug affecting enterprise developers.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — opens about:blank page instead of authorization endpoint; infinite 'Open Claude?' dialog loop`.
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
- https://support.claude.com/en/articles/14552646-troubleshoot-claude-code-installation-and-authentication
- https://www.truefoundry.com/blog/mcp-authentication-in-claude-code

Evidence note: GitHub Issue #11814 on anthropics/claude-code repo by @jsbattig (Nov 2025). Fully spec-compliant MCP server with OAuth 2.1/RFC 8414/RFC 9728 fails to initiate OAuth flow in Claude Desktop and claude.ai web. Claude Code CLI works fine via --transport http, confirming server-side correctness. Mapped to AI Coding Tools category since this is a Claude Code platform-level bug affecting enterprise developers.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — opens about:blank page instead of authorization endpoint; infinite 'Open Claude?' dialog loop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] Claude Desktop and claude.ai fail to connect to custom OAuth-protected MCP server — opens about:blank page instead of authorization endpoint; infinite 'Open Claude?' dialog loop`.
