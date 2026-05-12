---
title: "Claude Code hangs when calling MCP servers due to shell snapshot failure"
description: "Fix Claude Code hanging when using MCP tool calls Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Failed to create shell snapshot — Claude Code hangs when calling MCP servers"
common_causes:
  - "Claude Code users relying on MCP servers experience complete hangs during tool invocation, blocking development workflows"
  - "GitHub Issue #58209 (open): Claude Code hangs during MCP server calls on Windows. Root cause: shell snapshot creation fails with git/bash path resolution error. Feedback ID da9a7874-6e1d-4044-937d-8b4b73c374. Platform: win32, Version: 2.1.139"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP tool timeout"
  - "Claude Code shell snapshot error Windows"
  - "Claude Code MCP server connection refused"
updated: "2026-05-12"
published_at: "2026-05-12T03:10:48.691Z"
updated_at: "2026-05-12T03:10:48.691Z"
---

## What this error means

`Failed to create shell snapshot — Claude Code hangs when calling MCP servers` is a Claude Code failure pattern reported for developers trying to fix claude code hanging when using mcp tool calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #58209 (open): Claude Code hangs during MCP server calls on Windows. Root cause: shell snapshot creation fails with git/bash path resolution error. Feedback ID da9a7874-6e1d-4044-937d-8b4b73c374. Platform: win32, Version: 2.1.139

## Common causes

- Claude Code users relying on MCP servers experience complete hangs during tool invocation, blocking development workflows
- GitHub Issue #58209 (open): Claude Code hangs during MCP server calls on Windows. Root cause: shell snapshot creation fails with git/bash path resolution error. Feedback ID da9a7874-6e1d-4044-937d-8b4b73c374. Platform: win32, Version: 2.1.139

## Quick fixes

1. Confirm the exact error signature matches `Failed to create shell snapshot — Claude Code hangs when calling MCP servers`.
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

- https://github.com/anthropics/claude-code/issues/58209

Evidence note: GitHub Issue #58209 (open): Claude Code hangs during MCP server calls on Windows. Root cause: shell snapshot creation fails with git/bash path resolution error. Feedback ID da9a7874-6e1d-4044-937d-8b4b73c374. Platform: win32, Version: 2.1.139

## Related errors

- Claude Code MCP tool timeout
- Claude Code shell snapshot error Windows
- Claude Code MCP server connection refused

## FAQ

### What should I check first?

Start with the exact `Failed to create shell snapshot — Claude Code hangs when calling MCP servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to create shell snapshot — Claude Code hangs when calling MCP servers`.
