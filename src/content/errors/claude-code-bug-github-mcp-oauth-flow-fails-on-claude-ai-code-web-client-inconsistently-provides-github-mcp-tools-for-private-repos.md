---
title: "GitHub MCP OAuth Flow Fails on claude.ai/code — Private Repo Access Broken"
description: "Developer using Claude Code web (claude.ai/code) wants GitHub MCP tools to access private repositories but OAuth login flow silently breaks or returns inconsistent results Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] GitHub MCP OAuth flow fails on claude.ai/code web client — inconsistently provides GitHub MCP tools for private repos"
common_causes:
  - "Found on GitHub: anthropics/claude-code#45100 (Apr 2026). Very recent issue about Claude Code web inconsistently providing GitHub MCP tools. Related issues include #3433 (cannot connect to GitHub remote MCP server using OAuth) and #26917 (HTTP MCP servers requiring OAuth silently fail). Same error pattern across multiple dates shows persistent problem."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T04:37:15.179Z"
updated_at: "2026-05-19T04:37:15.179Z"
---

## What this error means

`[BUG] GitHub MCP OAuth flow fails on claude.ai/code web client — inconsistently provides GitHub MCP tools for private repos` is a Claude Code failure pattern reported for developers trying to developer using claude code web (claude.ai/code) wants github mcp tools to access private repositories but oauth login flow silently breaks or returns inconsistent results. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on GitHub: anthropics/claude-code#45100 (Apr 2026). Very recent issue about Claude Code web inconsistently providing GitHub MCP tools. Related issues include #3433 (cannot connect to GitHub remote MCP server using OAuth) and #26917 (HTTP MCP servers requiring OAuth silently fail). Same error pattern across multiple dates shows persistent problem.

## Common causes

- Found on GitHub: anthropics/claude-code#45100 (Apr 2026). Very recent issue about Claude Code web inconsistently providing GitHub MCP tools. Related issues include #3433 (cannot connect to GitHub remote MCP server using OAuth) and #26917 (HTTP MCP servers requiring OAuth silently fail). Same error pattern across multiple dates shows persistent problem.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] GitHub MCP OAuth flow fails on claude.ai/code web client — inconsistently provides GitHub MCP tools for private repos`.
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

- https://github.com/anthropics/claude-code/issues/45100
- https://github.com/anthropics/claude-code/issues/3433
- https://github.com/anthropics/claude-code/issues/26917

Evidence note: Found on GitHub: anthropics/claude-code#45100 (Apr 2026). Very recent issue about Claude Code web inconsistently providing GitHub MCP tools. Related issues include #3433 (cannot connect to GitHub remote MCP server using OAuth) and #26917 (HTTP MCP servers requiring OAuth silently fail). Same error pattern across multiple dates shows persistent problem.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] GitHub MCP OAuth flow fails on claude.ai/code web client — inconsistently provides GitHub MCP tools for private repos` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] GitHub MCP OAuth flow fails on claude.ai/code web client — inconsistently provides GitHub MCP tools for private repos`.
