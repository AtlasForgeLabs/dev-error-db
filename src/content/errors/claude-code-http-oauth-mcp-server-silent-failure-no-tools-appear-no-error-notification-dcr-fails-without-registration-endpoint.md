---
title: "Claude Code HTTP OAuth MCP servers silently fail with no user error"
description: "Fix Claude Code MCP OAuth authentication failure where no error is shown and tools don't load Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTTP OAuth MCP server: silent failure, no tools appear, no error notification — DCR fails without registration_endpoint"
common_causes:
  - "GitHub Issue #46623 documents Claude Code silently failing when connecting to HTTP MCP servers requiring OAuth without Dynamic Client Registration support. Root cause: 401 response with OAuth metadata, Claude Code attempts DCR, fails silently (no message to user). Scope shadowing in ~/.claude.json compounds confusion. Category: AI Coding Tools — paid developer tool, high commercial value."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T11:44:24.462Z"
updated_at: "2026-05-31T11:44:24.462Z"
---

## What this error means

`HTTP OAuth MCP server: silent failure, no tools appear, no error notification — DCR fails without registration_endpoint` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth authentication failure where no error is shown and tools don't load. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #46623 documents Claude Code silently failing when connecting to HTTP MCP servers requiring OAuth without Dynamic Client Registration support. Root cause: 401 response with OAuth metadata, Claude Code attempts DCR, fails silently (no message to user). Scope shadowing in ~/.claude.json compounds confusion. Category: AI Coding Tools — paid developer tool, high commercial value.

## Common causes

- GitHub Issue #46623 documents Claude Code silently failing when connecting to HTTP MCP servers requiring OAuth without Dynamic Client Registration support. Root cause: 401 response with OAuth metadata, Claude Code attempts DCR, fails silently (no message to user). Scope shadowing in ~/.claude.json compounds confusion. Category: AI Coding Tools — paid developer tool, high commercial value.

## Quick fixes

1. Confirm the exact error signature matches `HTTP OAuth MCP server: silent failure, no tools appear, no error notification — DCR fails without registration_endpoint`.
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

- https://github.com/anthropics/claude-code/issues/46623

Evidence note: GitHub Issue #46623 documents Claude Code silently failing when connecting to HTTP MCP servers requiring OAuth without Dynamic Client Registration support. Root cause: 401 response with OAuth metadata, Claude Code attempts DCR, fails silently (no message to user). Scope shadowing in ~/.claude.json compounds confusion. Category: AI Coding Tools — paid developer tool, high commercial value.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP OAuth MCP server: silent failure, no tools appear, no error notification — DCR fails without registration_endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP OAuth MCP server: silent failure, no tools appear, no error notification — DCR fails without registration_endpoint`.
