---
title: "Claude Code SessionStart hook fails due to single quotes blocking shell variable expansion"
description: "Fix Claude Code hooks not running due to shell variable expansion failure in hooks.json Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "SessionStart:startup hook error Failed with non-blocking status code: /bin/sh: ${CLAUDE_PLUGIN_ROOT}/hooks/run-hook.cmd: No such file or directory"
common_causes:
  - "Claude Code's hooks.json wraps hook commands in single quotes, which prevents /bin/sh from expanding ${CLAUDE_PLUGIN_ROOT} on macOS and Linux. This silently disables all hooks (session-start, pre-tool-scope-guard, record-activity, etc.) — a critical issue for developers relying on hook-based workflows for compliance, logging, or custom tool policies."
  - "GitHub issue documenting that single quotes around ${CLAUDE_PLUGIN_ROOT} in hooks/hooks.json prevent shell variable expansion on macOS/Linux. All hooks (SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop, SubagentStop, PreCompact) silently fail to execute."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code hooks not triggering on macOS"
  - "Claude Code CLAUDE_PLUGIN_ROOT not set"
  - "Claude Code pre-tool-use hook error"
updated: "2026-05-12"
published_at: "2026-05-12T21:12:18.504Z"
updated_at: "2026-05-12T21:12:18.504Z"
---

## What this error means

`SessionStart:startup hook error Failed with non-blocking status code: /bin/sh: ${CLAUDE_PLUGIN_ROOT}/hooks/run-hook.cmd: No such file or directory` is a Claude Code failure pattern reported for developers trying to fix claude code hooks not running due to shell variable expansion failure in hooks.json. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue documenting that single quotes around ${CLAUDE_PLUGIN_ROOT} in hooks/hooks.json prevent shell variable expansion on macOS/Linux. All hooks (SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop, SubagentStop, PreCompact) silently fail to execute.

## Common causes

- Claude Code's hooks.json wraps hook commands in single quotes, which prevents /bin/sh from expanding ${CLAUDE_PLUGIN_ROOT} on macOS and Linux. This silently disables all hooks (session-start, pre-tool-scope-guard, record-activity, etc.) — a critical issue for developers relying on hook-based workflows for compliance, logging, or custom tool policies.
- GitHub issue documenting that single quotes around ${CLAUDE_PLUGIN_ROOT} in hooks/hooks.json prevent shell variable expansion on macOS/Linux. All hooks (SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop, SubagentStop, PreCompact) silently fail to execute.

## Quick fixes

1. Confirm the exact error signature matches `SessionStart:startup hook error Failed with non-blocking status code: /bin/sh: ${CLAUDE_PLUGIN_ROOT}/hooks/run-hook.cmd: No such file or directory`.
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

- https://github.com/GoCodeAlone/claude-superpowers/issues/31

Evidence note: GitHub issue documenting that single quotes around ${CLAUDE_PLUGIN_ROOT} in hooks/hooks.json prevent shell variable expansion on macOS/Linux. All hooks (SessionStart, PreToolUse, PostToolUse, UserPromptSubmit, Stop, SubagentStop, PreCompact) silently fail to execute.

## Related errors

- Claude Code hooks not triggering on macOS
- Claude Code CLAUDE_PLUGIN_ROOT not set
- Claude Code pre-tool-use hook error

## FAQ

### What should I check first?

Start with the exact `SessionStart:startup hook error Failed with non-blocking status code: /bin/sh: ${CLAUDE_PLUGIN_ROOT}/hooks/run-hook.cmd: No such file or directory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SessionStart:startup hook error Failed with non-blocking status code: /bin/sh: ${CLAUDE_PLUGIN_ROOT}/hooks/run-hook.cmd: No such file or directory`.
