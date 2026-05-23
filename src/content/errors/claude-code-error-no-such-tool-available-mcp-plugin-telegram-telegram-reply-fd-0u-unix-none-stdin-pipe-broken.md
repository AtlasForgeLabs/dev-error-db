---
title: "Claude Code MCP stdio servers lose stdin pipe after ~10–20 minutes — process orphaned to PID 1"
description: "Fix broken MCP server pipe causing tools to become unavailable after 10–20 min idle or active use in Claude Code sessions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error: No such tool available: mcp__plugin_telegram_telegram__reply | FD 0u unix -> (none) [stdin pipe BROKEN]"
common_causes:
  - "Source: github.com/anthropics/claude-code/issues/37482 (updated 2026-05-23). MCP stdio servers lose stdin pipe — child process survives orphaned to PID 1 with broken stdin socket. Causes stateful servers (Telegram bot, Linear) to die mid-session while others spawn zombie processes. Impact: recurring for long-running developer sessions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T07:39:50.095Z"
updated_at: "2026-05-23T07:39:50.095Z"
---

## What this error means

`Error: No such tool available: mcp__plugin_telegram_telegram__reply | FD 0u unix -> (none) [stdin pipe BROKEN]` is a Claude Code failure pattern reported for developers trying to fix broken mcp server pipe causing tools to become unavailable after 10–20 min idle or active use in claude code sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/anthropics/claude-code/issues/37482 (updated 2026-05-23). MCP stdio servers lose stdin pipe — child process survives orphaned to PID 1 with broken stdin socket. Causes stateful servers (Telegram bot, Linear) to die mid-session while others spawn zombie processes. Impact: recurring for long-running developer sessions.

## Common causes

- Source: github.com/anthropics/claude-code/issues/37482 (updated 2026-05-23). MCP stdio servers lose stdin pipe — child process survives orphaned to PID 1 with broken stdin socket. Causes stateful servers (Telegram bot, Linear) to die mid-session while others spawn zombie processes. Impact: recurring for long-running developer sessions.

## Quick fixes

1. Confirm the exact error signature matches `Error: No such tool available: mcp__plugin_telegram_telegram__reply | FD 0u unix -> (none) [stdin pipe BROKEN]`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/anthropics/claude-code/issues/37482

Evidence note: Source: github.com/anthropics/claude-code/issues/37482 (updated 2026-05-23). MCP stdio servers lose stdin pipe — child process survives orphaned to PID 1 with broken stdin socket. Causes stateful servers (Telegram bot, Linear) to die mid-session while others spawn zombie processes. Impact: recurring for long-running developer sessions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error: No such tool available: mcp__plugin_telegram_telegram__reply | FD 0u unix -> (none) [stdin pipe BROKEN]` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: No such tool available: mcp__plugin_telegram_telegram__reply | FD 0u unix -> (none) [stdin pipe BROKEN]`.
