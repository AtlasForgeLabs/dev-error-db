---
title: "Claude Code HTTP MCP server OAuth returns Unauthorized but swallows error — no user notification"
description: "Fix MCP OAuth authentication failure in Claude Code where the server advertises tools but returns Unauthorized without any visible error Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized after initialize handshake succeeds"
common_causes:
  - "GitHub issue #26917 on anthropics/claude-code repo: HTTP MCP server initialize handshake succeeds but tools/list returns Unauthorized; Claude Code produces complete silence with no indication authentication is required. Source evidence via Tavily search snippet confirming full context."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T13:44:29.961Z"
updated_at: "2026-06-02T13:44:29.961Z"
---

## What this error means

`[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized after initialize handshake succeeds` is a Claude Code failure pattern reported for developers trying to fix mcp oauth authentication failure in claude code where the server advertises tools but returns unauthorized without any visible error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #26917 on anthropics/claude-code repo: HTTP MCP server initialize handshake succeeds but tools/list returns Unauthorized; Claude Code produces complete silence with no indication authentication is required. Source evidence via Tavily search snippet confirming full context.

## Common causes

- GitHub issue #26917 on anthropics/claude-code repo: HTTP MCP server initialize handshake succeeds but tools/list returns Unauthorized; Claude Code produces complete silence with no indication authentication is required. Source evidence via Tavily search snippet confirming full context.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized after initialize handshake succeeds`.
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

- https://github.com/anthropics/claude-code/issues/26917

Evidence note: GitHub issue #26917 on anthropics/claude-code repo: HTTP MCP server initialize handshake succeeds but tools/list returns Unauthorized; Claude Code produces complete silence with no indication authentication is required. Source evidence via Tavily search snippet confirming full context.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized after initialize handshake succeeds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized after initialize handshake succeeds`.
