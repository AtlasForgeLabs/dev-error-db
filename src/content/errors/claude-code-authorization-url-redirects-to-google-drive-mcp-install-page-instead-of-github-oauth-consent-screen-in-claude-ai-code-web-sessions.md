---
title: "Hosted GitHub MCP OAuth Flow Broken — Redirects to Wrong Provider in Claude Code Web Sessions"
description: "Fix GitHub MCP server OAuth authentication redirecting to wrong identity provider in Claude Code web interface Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authorization URL redirects to Google Drive MCP install page instead of GitHub OAuth consent screen in claude.ai/code web sessions"
common_causes:
  - "GitHub issue #60807 on anthropics/claude-code: In Claude Code on the web (claude.ai/code), the GitHub MCP server is installed but unauthenticated. When the OAuth flow is initiated, the authorization URL redirects to the Google Drive MCP install page instead of the GitHub OAuth consent screen. High commercial value — affects paying Claude Code users trying to integrate GitHub repos directly."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T20:39:51.367Z"
updated_at: "2026-05-23T20:39:51.367Z"
---

## What this error means

`Authorization URL redirects to Google Drive MCP install page instead of GitHub OAuth consent screen in claude.ai/code web sessions` is a Claude Code failure pattern reported for developers trying to fix github mcp server oauth authentication redirecting to wrong identity provider in claude code web interface. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60807 on anthropics/claude-code: In Claude Code on the web (claude.ai/code), the GitHub MCP server is installed but unauthenticated. When the OAuth flow is initiated, the authorization URL redirects to the Google Drive MCP install page instead of the GitHub OAuth consent screen. High commercial value — affects paying Claude Code users trying to integrate GitHub repos directly.

## Common causes

- GitHub issue #60807 on anthropics/claude-code: In Claude Code on the web (claude.ai/code), the GitHub MCP server is installed but unauthenticated. When the OAuth flow is initiated, the authorization URL redirects to the Google Drive MCP install page instead of the GitHub OAuth consent screen. High commercial value — affects paying Claude Code users trying to integrate GitHub repos directly.

## Quick fixes

1. Confirm the exact error signature matches `Authorization URL redirects to Google Drive MCP install page instead of GitHub OAuth consent screen in claude.ai/code web sessions`.
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

- https://github.com/anthropics/claude-code/issues/60807

Evidence note: GitHub issue #60807 on anthropics/claude-code: In Claude Code on the web (claude.ai/code), the GitHub MCP server is installed but unauthenticated. When the OAuth flow is initiated, the authorization URL redirects to the Google Drive MCP install page instead of the GitHub OAuth consent screen. High commercial value — affects paying Claude Code users trying to integrate GitHub repos directly.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authorization URL redirects to Google Drive MCP install page instead of GitHub OAuth consent screen in claude.ai/code web sessions` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authorization URL redirects to Google Drive MCP install page instead of GitHub OAuth consent screen in claude.ai/code web sessions`.
