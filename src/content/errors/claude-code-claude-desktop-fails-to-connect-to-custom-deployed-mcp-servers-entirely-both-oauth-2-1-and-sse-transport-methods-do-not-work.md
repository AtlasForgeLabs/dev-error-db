---
title: "[BUG] Claude Desktop doesn't connect to Custom MCPs altogether (not with OAuth 2.1 nor with SSE)"
description: "Fix Claude Desktop inability to communicate with custom deployed MCP servers using either OAuth 2.1 auth or Server-Sent Events transport Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Desktop fails to connect to custom deployed MCP servers entirely; both OAuth 2.1 and SSE transport methods do not work"
common_causes:
  - "Found at github.com/anthropics/claude-code/issues/5826. Companies deploy custom MCP servers internally that work perfectly with Claude Code CLI but completely fail to connect in Claude Desktop GUI. Both OAuth 2.1 and SSE protocols fail identically. This blocks enterprise adoption since desktop UI is the primary access method for non-CLI users. Affects paid Claude Max subscriptions used in corporate settings."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T12:43:28.508Z"
updated_at: "2026-05-30T12:43:28.508Z"
---

## What this error means

`Claude Desktop fails to connect to custom deployed MCP servers entirely; both OAuth 2.1 and SSE transport methods do not work` is a Claude Code failure pattern reported for developers trying to fix claude desktop inability to communicate with custom deployed mcp servers using either oauth 2.1 auth or server-sent events transport. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found at github.com/anthropics/claude-code/issues/5826. Companies deploy custom MCP servers internally that work perfectly with Claude Code CLI but completely fail to connect in Claude Desktop GUI. Both OAuth 2.1 and SSE protocols fail identically. This blocks enterprise adoption since desktop UI is the primary access method for non-CLI users. Affects paid Claude Max subscriptions used in corporate settings.

## Common causes

- Found at github.com/anthropics/claude-code/issues/5826. Companies deploy custom MCP servers internally that work perfectly with Claude Code CLI but completely fail to connect in Claude Desktop GUI. Both OAuth 2.1 and SSE protocols fail identically. This blocks enterprise adoption since desktop UI is the primary access method for non-CLI users. Affects paid Claude Max subscriptions used in corporate settings.

## Quick fixes

1. Confirm the exact error signature matches `Claude Desktop fails to connect to custom deployed MCP servers entirely; both OAuth 2.1 and SSE transport methods do not work`.
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

- https://github.com/anthropics/claude-code/issues/5826

Evidence note: Found at github.com/anthropics/claude-code/issues/5826. Companies deploy custom MCP servers internally that work perfectly with Claude Code CLI but completely fail to connect in Claude Desktop GUI. Both OAuth 2.1 and SSE protocols fail identically. This blocks enterprise adoption since desktop UI is the primary access method for non-CLI users. Affects paid Claude Max subscriptions used in corporate settings.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Desktop fails to connect to custom deployed MCP servers entirely; both OAuth 2.1 and SSE transport methods do not work` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Desktop fails to connect to custom deployed MCP servers entirely; both OAuth 2.1 and SSE transport methods do not work`.
