---
title: "Claude Code MCP OAuth token not honored — server stuck in 'Needs authentication'"
description: "Fix OAuth 2.1/PKCE auth flow for remote MCP servers where Claude Code reports success but tools never become available Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth completes but token is not honored — server stays in 'Needs authentication'"
common_causes:
  - "GitHub Issue anthropics/claude-code#60260 (open, created 2026-05-18, 3 comments). Has repro label, area:auth + area:mcp labels. OAuth flow succeeds in browser, curl bypass works perfectly, only Claude Code bridging fails. High commercial value — developers using corporate MCP tools with Claude Code Enterprise/Claude Pro cannot access any MCP tools. Category mapping: Claude Code → AI Coding Tools per SKILL.md category table."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T05:39:49.871Z"
updated_at: "2026-05-23T05:39:49.871Z"
---

## What this error means

`MCP OAuth completes but token is not honored — server stays in 'Needs authentication'` is a Claude Code failure pattern reported for developers trying to fix oauth 2.1/pkce auth flow for remote mcp servers where claude code reports success but tools never become available. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue anthropics/claude-code#60260 (open, created 2026-05-18, 3 comments). Has repro label, area:auth + area:mcp labels. OAuth flow succeeds in browser, curl bypass works perfectly, only Claude Code bridging fails. High commercial value — developers using corporate MCP tools with Claude Code Enterprise/Claude Pro cannot access any MCP tools. Category mapping: Claude Code → AI Coding Tools per SKILL.md category table.

## Common causes

- GitHub Issue anthropics/claude-code#60260 (open, created 2026-05-18, 3 comments). Has repro label, area:auth + area:mcp labels. OAuth flow succeeds in browser, curl bypass works perfectly, only Claude Code bridging fails. High commercial value — developers using corporate MCP tools with Claude Code Enterprise/Claude Pro cannot access any MCP tools. Category mapping: Claude Code → AI Coding Tools per SKILL.md category table.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth completes but token is not honored — server stays in 'Needs authentication'`.
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

- https://github.com/anthropics/claude-code/issues/60260

Evidence note: GitHub Issue anthropics/claude-code#60260 (open, created 2026-05-18, 3 comments). Has repro label, area:auth + area:mcp labels. OAuth flow succeeds in browser, curl bypass works perfectly, only Claude Code bridging fails. High commercial value — developers using corporate MCP tools with Claude Code Enterprise/Claude Pro cannot access any MCP tools. Category mapping: Claude Code → AI Coding Tools per SKILL.md category table.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth completes but token is not honored — server stays in 'Needs authentication'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth completes but token is not honored — server stays in 'Needs authentication'`.
