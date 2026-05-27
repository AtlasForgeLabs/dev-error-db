---
title: "Claude Code GitHub MCP OAuth Flow Broken on claude.ai/code Web Interface"
description: "Fix Claude Code web (claude.ai/code) GitHub MCP tools access broken; private repos MCP tools unavailable; remote/headless server auth also broken Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "GitHub MCP OAuth flow fails on claude.ai/code web interface"
common_causes:
  - "Report (2026-04-08) covering multiple related OAuth failures: GitHub MCP tools unavailable for private repos on claude.ai/code, OAuth login broken for remote/headless server setups, and inconsistent behavior. Affects professional users relying on Claude Code for repo analysis. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T03:43:18.842Z"
updated_at: "2026-05-27T03:43:18.842Z"
---

## What this error means

`GitHub MCP OAuth flow fails on claude.ai/code web interface` is a Claude Code failure pattern reported for developers trying to fix claude code web (claude.ai/code) github mcp tools access broken; private repos mcp tools unavailable; remote/headless server auth also broken. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Report (2026-04-08) covering multiple related OAuth failures: GitHub MCP tools unavailable for private repos on claude.ai/code, OAuth login broken for remote/headless server setups, and inconsistent behavior. Affects professional users relying on Claude Code for repo analysis. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools.

## Common causes

- Report (2026-04-08) covering multiple related OAuth failures: GitHub MCP tools unavailable for private repos on claude.ai/code, OAuth login broken for remote/headless server setups, and inconsistent behavior. Affects professional users relying on Claude Code for repo analysis. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `GitHub MCP OAuth flow fails on claude.ai/code web interface`.
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

Evidence note: Report (2026-04-08) covering multiple related OAuth failures: GitHub MCP tools unavailable for private repos on claude.ai/code, OAuth login broken for remote/headless server setups, and inconsistent behavior. Affects professional users relying on Claude Code for repo analysis. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `GitHub MCP OAuth flow fails on claude.ai/code web interface` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub MCP OAuth flow fails on claude.ai/code web interface`.
