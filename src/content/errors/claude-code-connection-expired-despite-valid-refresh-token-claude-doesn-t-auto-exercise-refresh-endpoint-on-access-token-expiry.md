---
title: "Claude Code MCP OAuth Does Not Auto-Refresh Access Tokens — Daily 'Connection Expired'"
description: "Fix MCP OAuth connector showing daily 'Connection has expired' in Claude.ai / Desktop despite valid refresh tokens; user wants silent background token refresh instead of manual reconnect Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Connection expired (despite valid refresh token); Claude doesn't auto-exercise refresh endpoint on access token expiry"
common_causes:
  - "GitHub issue #65036 opened Jun 3 2026 by @deiv061 on anthropics/claude-code repo. Detailed repro with Azure Function App + Entra OAuth 2.0 PKCE. Confirmed cross-platform (Windows 11, macOS). Multiple linked duplicate issues show wide community impact (~$10k+/mo enterprise org affected). Category mapped to AI Coding Tools per SKILL.md rules. Error signature extracted from UI banner text."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-04"
published_at: "2026-06-04T07:44:35.266Z"
updated_at: "2026-06-04T07:44:35.266Z"
---

## What this error means

`Connection expired (despite valid refresh token); Claude doesn't auto-exercise refresh endpoint on access token expiry` is a Claude Code failure pattern reported for developers trying to fix mcp oauth connector showing daily 'connection has expired' in claude.ai / desktop despite valid refresh tokens; user wants silent background token refresh instead of manual reconnect. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #65036 opened Jun 3 2026 by @deiv061 on anthropics/claude-code repo. Detailed repro with Azure Function App + Entra OAuth 2.0 PKCE. Confirmed cross-platform (Windows 11, macOS). Multiple linked duplicate issues show wide community impact (~$10k+/mo enterprise org affected). Category mapped to AI Coding Tools per SKILL.md rules. Error signature extracted from UI banner text.

## Common causes

- GitHub issue #65036 opened Jun 3 2026 by @deiv061 on anthropics/claude-code repo. Detailed repro with Azure Function App + Entra OAuth 2.0 PKCE. Confirmed cross-platform (Windows 11, macOS). Multiple linked duplicate issues show wide community impact (~$10k+/mo enterprise org affected). Category mapped to AI Coding Tools per SKILL.md rules. Error signature extracted from UI banner text.

## Quick fixes

1. Confirm the exact error signature matches `Connection expired (despite valid refresh token); Claude doesn't auto-exercise refresh endpoint on access token expiry`.
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

- https://github.com/anthropics/claude-code/issues/65036

Evidence note: GitHub issue #65036 opened Jun 3 2026 by @deiv061 on anthropics/claude-code repo. Detailed repro with Azure Function App + Entra OAuth 2.0 PKCE. Confirmed cross-platform (Windows 11, macOS). Multiple linked duplicate issues show wide community impact (~$10k+/mo enterprise org affected). Category mapped to AI Coding Tools per SKILL.md rules. Error signature extracted from UI banner text.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Connection expired (despite valid refresh token); Claude doesn't auto-exercise refresh endpoint on access token expiry` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Connection expired (despite valid refresh token); Claude doesn't auto-exercise refresh endpoint on access token expiry`.
