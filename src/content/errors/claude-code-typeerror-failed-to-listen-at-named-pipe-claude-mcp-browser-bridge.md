---
title: "Claude Code claude-in-chrome Extension Fails to Connect on Windows — Fix"
description: "Fix claude-in-chrome extension connection failure on Windows when Claude Desktop is also installed Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "TypeError: Failed to listen at named pipe claude-mcp-browser-bridge"
common_causes:
  - "Windows users running both Claude Desktop and the claude-in-chrome browser extension encounter named pipe binding errors. The pipe path fails with ERR_INVALID_ARG_TYPE instead of the more helpful EADDRINUSE, making debugging difficult."
  - "claude-in-chrome extension fails to connect on Windows when Claude Desktop is also installed. Socket server error on Windows named pipe. The ERR_INVALID_ARG_TYPE error masks the actual EADDRINUSE pipe conflict."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Windows named pipe error"
  - "Claude Desktop MCP browser bridge conflict"
updated: "2026-05-12"
published_at: "2026-05-12T02:10:48.323Z"
updated_at: "2026-05-12T02:10:48.323Z"
---

## What this error means

`TypeError: Failed to listen at named pipe claude-mcp-browser-bridge` is a Claude Code failure pattern reported for developers trying to fix claude-in-chrome extension connection failure on windows when claude desktop is also installed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

claude-in-chrome extension fails to connect on Windows when Claude Desktop is also installed. Socket server error on Windows named pipe. The ERR_INVALID_ARG_TYPE error masks the actual EADDRINUSE pipe conflict.

## Common causes

- Windows users running both Claude Desktop and the claude-in-chrome browser extension encounter named pipe binding errors. The pipe path fails with ERR_INVALID_ARG_TYPE instead of the more helpful EADDRINUSE, making debugging difficult.
- claude-in-chrome extension fails to connect on Windows when Claude Desktop is also installed. Socket server error on Windows named pipe. The ERR_INVALID_ARG_TYPE error masks the actual EADDRINUSE pipe conflict.

## Quick fixes

1. Confirm the exact error signature matches `TypeError: Failed to listen at named pipe claude-mcp-browser-bridge`.
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

- https://github.com/anthropics/claude-code/issues/58201

Evidence note: claude-in-chrome extension fails to connect on Windows when Claude Desktop is also installed. Socket server error on Windows named pipe. The ERR_INVALID_ARG_TYPE error masks the actual EADDRINUSE pipe conflict.

## Related errors

- Claude Code Windows named pipe error
- Claude Desktop MCP browser bridge conflict

## FAQ

### What should I check first?

Start with the exact `TypeError: Failed to listen at named pipe claude-mcp-browser-bridge` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TypeError: Failed to listen at named pipe claude-mcp-browser-bridge`.
