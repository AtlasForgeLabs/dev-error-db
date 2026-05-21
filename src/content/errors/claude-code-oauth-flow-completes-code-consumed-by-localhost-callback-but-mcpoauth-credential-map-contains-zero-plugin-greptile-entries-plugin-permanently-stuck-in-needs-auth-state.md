---
title: "Greptile MCP plugin OAuth tokens not persisted in Claude Code #61262"
description: "Fix Claude Code failing to persist OAuth tokens for Greptile MCP plugin despite successful OAuth flow, leaving plugin unusable Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth flow completes (code consumed by localhost callback) but mcpOAuth credential map contains zero plugin:greptile entries, plugin permanently stuck in needs_auth state"
common_causes:
  - "GitHub Issue #61262 in anthropics/claude-code by manty, opened May 22, 2026. Very detailed report: OAuth via RFC 9728 discovery completes end-to-end, code is consumed (verified by reusing it gives invalid_grant), but tokens never land in keychain Claude Code-credentials mcpOAuth map. Other plugins (sentinel-mcp, posthog, klaviyo, semrush) persist tokens correctly — greptile is uniquely affected. Has repro label, 3+ duplicate flags. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T20:39:45.602Z"
updated_at: "2026-05-21T20:39:45.602Z"
---

## What this error means

`OAuth flow completes (code consumed by localhost callback) but mcpOAuth credential map contains zero plugin:greptile entries, plugin permanently stuck in needs_auth state` is a Claude Code failure pattern reported for developers trying to fix claude code failing to persist oauth tokens for greptile mcp plugin despite successful oauth flow, leaving plugin unusable. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61262 in anthropics/claude-code by manty, opened May 22, 2026. Very detailed report: OAuth via RFC 9728 discovery completes end-to-end, code is consumed (verified by reusing it gives invalid_grant), but tokens never land in keychain Claude Code-credentials mcpOAuth map. Other plugins (sentinel-mcp, posthog, klaviyo, semrush) persist tokens correctly — greptile is uniquely affected. Has repro label, 3+ duplicate flags. Category: AI Coding Tools.

## Common causes

- GitHub Issue #61262 in anthropics/claude-code by manty, opened May 22, 2026. Very detailed report: OAuth via RFC 9728 discovery completes end-to-end, code is consumed (verified by reusing it gives invalid_grant), but tokens never land in keychain Claude Code-credentials mcpOAuth map. Other plugins (sentinel-mcp, posthog, klaviyo, semrush) persist tokens correctly — greptile is uniquely affected. Has repro label, 3+ duplicate flags. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `OAuth flow completes (code consumed by localhost callback) but mcpOAuth credential map contains zero plugin:greptile entries, plugin permanently stuck in needs_auth state`.
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

- https://github.com/anthropics/claude-code/issues/61262

Evidence note: GitHub Issue #61262 in anthropics/claude-code by manty, opened May 22, 2026. Very detailed report: OAuth via RFC 9728 discovery completes end-to-end, code is consumed (verified by reusing it gives invalid_grant), but tokens never land in keychain Claude Code-credentials mcpOAuth map. Other plugins (sentinel-mcp, posthog, klaviyo, semrush) persist tokens correctly — greptile is uniquely affected. Has repro label, 3+ duplicate flags. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth flow completes (code consumed by localhost callback) but mcpOAuth credential map contains zero plugin:greptile entries, plugin permanently stuck in needs_auth state` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth flow completes (code consumed by localhost callback) but mcpOAuth credential map contains zero plugin:greptile entries, plugin permanently stuck in needs_auth state`.
