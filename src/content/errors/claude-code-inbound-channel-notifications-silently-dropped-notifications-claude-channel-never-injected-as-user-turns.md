---
title: "Claude Code MCP channel notifications silently dropped — regression in CLI 2.1.119–2.1.142"
description: "Fix Claude Code MCP channel plugin notifications being silently dropped and never injected into session Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Inbound channel notifications silently dropped — notifications/claude/channel never injected as user turns"
common_causes:
  - "MCP channel plugins (e.g., iMessage) emit notifications correctly but Claude Code runtime never acts on them. Regression from working in 2.1.114. Breaks notification-driven workflows."
  - "Regression bug: worked in 2.1.114, broken in 2.1.119–2.1.142. Official imessage channel plugin (v0.1.0) emits notifications but runtime never injects <channel> user turns. MCP server runs correctly; failure is on runtime side."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server connection failed"
  - "Claude Code plugin not loading"
  - "MCP notification not received"
updated: "2026-05-14"
published_at: "2026-05-14T23:13:21.053Z"
updated_at: "2026-05-14T23:13:21.053Z"
---

## What this error means

`Inbound channel notifications silently dropped — notifications/claude/channel never injected as user turns` is a Claude Code failure pattern reported for developers trying to fix claude code mcp channel plugin notifications being silently dropped and never injected into session. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Regression bug: worked in 2.1.114, broken in 2.1.119–2.1.142. Official imessage channel plugin (v0.1.0) emits notifications but runtime never injects <channel> user turns. MCP server runs correctly; failure is on runtime side.

## Common causes

- MCP channel plugins (e.g., iMessage) emit notifications correctly but Claude Code runtime never acts on them. Regression from working in 2.1.114. Breaks notification-driven workflows.
- Regression bug: worked in 2.1.114, broken in 2.1.119–2.1.142. Official imessage channel plugin (v0.1.0) emits notifications but runtime never injects <channel> user turns. MCP server runs correctly; failure is on runtime side.

## Quick fixes

1. Confirm the exact error signature matches `Inbound channel notifications silently dropped — notifications/claude/channel never injected as user turns`.
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

- https://github.com/anthropics/claude-code/issues/59240

Evidence note: Regression bug: worked in 2.1.114, broken in 2.1.119–2.1.142. Official imessage channel plugin (v0.1.0) emits notifications but runtime never injects <channel> user turns. MCP server runs correctly; failure is on runtime side.

## Related errors

- Claude Code MCP server connection failed
- Claude Code plugin not loading
- MCP notification not received

## FAQ

### What should I check first?

Start with the exact `Inbound channel notifications silently dropped — notifications/claude/channel never injected as user turns` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Inbound channel notifications silently dropped — notifications/claude/channel never injected as user turns`.
