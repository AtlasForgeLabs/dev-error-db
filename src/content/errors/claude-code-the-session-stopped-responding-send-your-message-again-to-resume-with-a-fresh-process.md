---
title: "Claude Code Session Stopped Responding on Long MCP Tool Calls"
description: "Fix Claude Code UI watchdog killing sessions on long-running synchronous MCP tool calls Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "The session stopped responding. Send your message again to resume with a fresh process."
common_causes:
  - "When a synchronous MCP tool call blocks Claude Code's worker for ~10-15 minutes, the UI watchdog declares the session dead and shows 'The session stopped responding' — even though the MCP call may still be processing. This orphans MCP server processes and breaks long-running workflows."
  - "Long-running synchronous MCP tool calls (>10-12 min) trigger UI watchdog with message 'The session stopped responding. Send your message again to resume with a fresh process.' Not an API timeout (API_TIMEOUT_MS=900000), but a UI-level health check. Reported May 12, 2026."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP tool call timeout configuration"
  - "Claude Code orphaned MCP server processes"
updated: "2026-05-12"
published_at: "2026-05-12T20:12:18.326Z"
updated_at: "2026-05-12T20:12:18.326Z"
---

## What this error means

`The session stopped responding. Send your message again to resume with a fresh process.` is a Claude Code failure pattern reported for developers trying to fix claude code ui watchdog killing sessions on long-running synchronous mcp tool calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Long-running synchronous MCP tool calls (>10-12 min) trigger UI watchdog with message 'The session stopped responding. Send your message again to resume with a fresh process.' Not an API timeout (API_TIMEOUT_MS=900000), but a UI-level health check. Reported May 12, 2026.

## Common causes

- When a synchronous MCP tool call blocks Claude Code's worker for ~10-15 minutes, the UI watchdog declares the session dead and shows 'The session stopped responding' — even though the MCP call may still be processing. This orphans MCP server processes and breaks long-running workflows.
- Long-running synchronous MCP tool calls (>10-12 min) trigger UI watchdog with message 'The session stopped responding. Send your message again to resume with a fresh process.' Not an API timeout (API_TIMEOUT_MS=900000), but a UI-level health check. Reported May 12, 2026.

## Quick fixes

1. Confirm the exact error signature matches `The session stopped responding. Send your message again to resume with a fresh process.`.
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

- https://github.com/anthropics/claude-code/issues/58480

Evidence note: Long-running synchronous MCP tool calls (>10-12 min) trigger UI watchdog with message 'The session stopped responding. Send your message again to resume with a fresh process.' Not an API timeout (API_TIMEOUT_MS=900000), but a UI-level health check. Reported May 12, 2026.

## Related errors

- Claude Code MCP tool call timeout configuration
- Claude Code orphaned MCP server processes

## FAQ

### What should I check first?

Start with the exact `The session stopped responding. Send your message again to resume with a fresh process.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The session stopped responding. Send your message again to resume with a fresh process.`.
