---
title: "Hosted GitHub MCP OAuth flow broken — redirects to wrong server in claude.ai/code"
description: "Fix GitHub MCP OAuth authentication failure in Claude Code web sessions (claude.ai/code) where the authorization URL routes to the deprecated Google Drive MCP install page Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTTP 403 / Server Turned Down — GitHub MCP OAuth flow lands on api.anthropic.com/mcp/gdrive/google/install instead of GitHub consent screen"
common_causes:
  - "GitHub Issue #60807 (anthropics/claude-code): mcp__github__authenticate generates an authorization URL that redirects to the retired gdrive MCP endpoint, completely blocking GitHub API access in hosted web sessions. Regression — worked in previous version. Affects ALL claude.ai/code users. High commercial value: blocks paid-tier workflow."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T21:38:30.558Z"
updated_at: "2026-05-20T21:38:30.558Z"
---

## What this error means

`HTTP 403 / Server Turned Down — GitHub MCP OAuth flow lands on api.anthropic.com/mcp/gdrive/google/install instead of GitHub consent screen` is a Claude Code failure pattern reported for developers trying to fix github mcp oauth authentication failure in claude code web sessions (claude.ai/code) where the authorization url routes to the deprecated google drive mcp install page. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60807 (anthropics/claude-code): mcp__github__authenticate generates an authorization URL that redirects to the retired gdrive MCP endpoint, completely blocking GitHub API access in hosted web sessions. Regression — worked in previous version. Affects ALL claude.ai/code users. High commercial value: blocks paid-tier workflow.

## Common causes

- GitHub Issue #60807 (anthropics/claude-code): mcp__github__authenticate generates an authorization URL that redirects to the retired gdrive MCP endpoint, completely blocking GitHub API access in hosted web sessions. Regression — worked in previous version. Affects ALL claude.ai/code users. High commercial value: blocks paid-tier workflow.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 403 / Server Turned Down — GitHub MCP OAuth flow lands on api.anthropic.com/mcp/gdrive/google/install instead of GitHub consent screen`.
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

Evidence note: GitHub Issue #60807 (anthropics/claude-code): mcp__github__authenticate generates an authorization URL that redirects to the retired gdrive MCP endpoint, completely blocking GitHub API access in hosted web sessions. Regression — worked in previous version. Affects ALL claude.ai/code users. High commercial value: blocks paid-tier workflow.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP 403 / Server Turned Down — GitHub MCP OAuth flow lands on api.anthropic.com/mcp/gdrive/google/install instead of GitHub consent screen` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 403 / Server Turned Down — GitHub MCP OAuth flow lands on api.anthropic.com/mcp/gdrive/google/install instead of GitHub consent screen`.
