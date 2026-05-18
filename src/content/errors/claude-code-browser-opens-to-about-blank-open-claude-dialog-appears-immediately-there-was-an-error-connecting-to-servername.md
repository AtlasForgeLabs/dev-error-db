---
title: "Claude Desktop/Web infinite about:blank loop when connecting to OAuth-protected custom MCP servers"
description: "Fix Claude Desktop and claude.ai web interface failing to initiate OAuth flow for custom MCP servers — browser stays on about:blank creating infinite reconnect loop, while Claude Code CLI works fine Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Browser opens to about:blank; 'Open Claude?' dialog appears immediately; There was an error connecting to [ServerName]"
common_causes:
  - "GitHub Issue #11814 on anthropics/claude-code: Custom spec-compliant FastAPI MCP server with OAuth 2.1 (RFC 8414, RFC 9728, RFC 7636) returns correct discovery metadata but Claude Desktop/Web never send requests. about:blank loop vs Claude Code CLI --transport http working perfectly. Closed as duplicate of #5826. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T17:37:13.645Z"
updated_at: "2026-05-18T17:37:13.645Z"
---

## What this error means

`Browser opens to about:blank; 'Open Claude?' dialog appears immediately; There was an error connecting to [ServerName]` is a Claude Code failure pattern reported for developers trying to fix claude desktop and claude.ai web interface failing to initiate oauth flow for custom mcp servers — browser stays on about:blank creating infinite reconnect loop, while claude code cli works fine. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #11814 on anthropics/claude-code: Custom spec-compliant FastAPI MCP server with OAuth 2.1 (RFC 8414, RFC 9728, RFC 7636) returns correct discovery metadata but Claude Desktop/Web never send requests. about:blank loop vs Claude Code CLI --transport http working perfectly. Closed as duplicate of #5826. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Common causes

- GitHub Issue #11814 on anthropics/claude-code: Custom spec-compliant FastAPI MCP server with OAuth 2.1 (RFC 8414, RFC 9728, RFC 7636) returns correct discovery metadata but Claude Desktop/Web never send requests. about:blank loop vs Claude Code CLI --transport http working perfectly. Closed as duplicate of #5826. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Quick fixes

1. Confirm the exact error signature matches `Browser opens to about:blank; 'Open Claude?' dialog appears immediately; There was an error connecting to [ServerName]`.
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

Evidence note: GitHub Issue #11814 on anthropics/claude-code: Custom spec-compliant FastAPI MCP server with OAuth 2.1 (RFC 8414, RFC 9728, RFC 7636) returns correct discovery metadata but Claude Desktop/Web never send requests. about:blank loop vs Claude Code CLI --transport http working perfectly. Closed as duplicate of #5826. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Browser opens to about:blank; 'Open Claude?' dialog appears immediately; There was an error connecting to [ServerName]` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Browser opens to about:blank; 'Open Claude?' dialog appears immediately; There was an error connecting to [ServerName]`.
