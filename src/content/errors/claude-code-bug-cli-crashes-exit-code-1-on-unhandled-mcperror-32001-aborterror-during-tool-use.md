---
title: "CLI crashes on unhandled McpError -32001 AbortError during tool_use in Claude Code"
description: "Fix Claude Code CLI crashing with exit code 1 when McpError -32001 AbortError is not handled during tool execution — causes loss of work state Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] CLI crashes (exit code 1) on unhandled McpError -32001 AbortError during tool_use"
common_causes:
  - "GitHub Issue anthropics/claude-code#60456 describes unhandled McpError causing fatal CLI crashes during tool_use. Exit code 1 means lost session state. Unhandled exceptions in MCP protocol handling are high-value targets since they directly block developers using Claude Code in production workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T12:37:16.266Z"
updated_at: "2026-05-19T12:37:16.266Z"
---

## What this error means

`[BUG] CLI crashes (exit code 1) on unhandled McpError -32001 AbortError during tool_use` is a Claude Code failure pattern reported for developers trying to fix claude code cli crashing with exit code 1 when mcperror -32001 aborterror is not handled during tool execution — causes loss of work state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue anthropics/claude-code#60456 describes unhandled McpError causing fatal CLI crashes during tool_use. Exit code 1 means lost session state. Unhandled exceptions in MCP protocol handling are high-value targets since they directly block developers using Claude Code in production workflows.

## Common causes

- GitHub Issue anthropics/claude-code#60456 describes unhandled McpError causing fatal CLI crashes during tool_use. Exit code 1 means lost session state. Unhandled exceptions in MCP protocol handling are high-value targets since they directly block developers using Claude Code in production workflows.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] CLI crashes (exit code 1) on unhandled McpError -32001 AbortError during tool_use`.
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

- https://github.com/anthropics/claude-code/issues/60456

Evidence note: GitHub Issue anthropics/claude-code#60456 describes unhandled McpError causing fatal CLI crashes during tool_use. Exit code 1 means lost session state. Unhandled exceptions in MCP protocol handling are high-value targets since they directly block developers using Claude Code in production workflows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] CLI crashes (exit code 1) on unhandled McpError -32001 AbortError during tool_use` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] CLI crashes (exit code 1) on unhandled McpError -32001 AbortError during tool_use`.
