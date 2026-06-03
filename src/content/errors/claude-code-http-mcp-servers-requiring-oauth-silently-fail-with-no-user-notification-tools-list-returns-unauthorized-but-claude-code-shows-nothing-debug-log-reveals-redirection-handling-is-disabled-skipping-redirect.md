---
title: "Claude Code HTTP MCP Servers Require OAuth Silently Fail — No User Notification"
description: "Fix Claude Code MCP OAuth authentication failure where no browser opens and no tools appear despite correct configuration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized but Claude Code shows nothing; debug log reveals 'Redirection handling is disabled, skipping redirect'"
common_causes:
  - "GitHub Issue #26917 on anthropics/claude-code (Feb 2026): HTTP MCP servers like Granola, Neon, Stripe return Unauthorized on tools/list but Claude Code silently swallows the error with no notification. Related issue shows 'Redirection handling is disabled' prevents browser auth flow from triggering. Covers both Claude Code + Claude Web MCP auth failures on NewsBlur Forum. Maps to approved category AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T11:44:32.684Z"
updated_at: "2026-06-03T11:44:32.684Z"
---

## What this error means

`HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized but Claude Code shows nothing; debug log reveals 'Redirection handling is disabled, skipping redirect'` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth authentication failure where no browser opens and no tools appear despite correct configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #26917 on anthropics/claude-code (Feb 2026): HTTP MCP servers like Granola, Neon, Stripe return Unauthorized on tools/list but Claude Code silently swallows the error with no notification. Related issue shows 'Redirection handling is disabled' prevents browser auth flow from triggering. Covers both Claude Code + Claude Web MCP auth failures on NewsBlur Forum. Maps to approved category AI Coding Tools.

## Common causes

- GitHub Issue #26917 on anthropics/claude-code (Feb 2026): HTTP MCP servers like Granola, Neon, Stripe return Unauthorized on tools/list but Claude Code silently swallows the error with no notification. Related issue shows 'Redirection handling is disabled' prevents browser auth flow from triggering. Covers both Claude Code + Claude Web MCP auth failures on NewsBlur Forum. Maps to approved category AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized but Claude Code shows nothing; debug log reveals 'Redirection handling is disabled, skipping redirect'`.
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
- https://forum.newsblur.com/t/claude-web-fails-to-authenticate-to-mcp-server/13587
- https://github.com/anthropics/claude-code/issues/19281

Evidence note: GitHub Issue #26917 on anthropics/claude-code (Feb 2026): HTTP MCP servers like Granola, Neon, Stripe return Unauthorized on tools/list but Claude Code silently swallows the error with no notification. Related issue shows 'Redirection handling is disabled' prevents browser auth flow from triggering. Covers both Claude Code + Claude Web MCP auth failures on NewsBlur Forum. Maps to approved category AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized but Claude Code shows nothing; debug log reveals 'Redirection handling is disabled, skipping redirect'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP MCP servers requiring OAuth silently fail with no user notification — tools/list returns Unauthorized but Claude Code shows nothing; debug log reveals 'Redirection handling is disabled, skipping redirect'`.
