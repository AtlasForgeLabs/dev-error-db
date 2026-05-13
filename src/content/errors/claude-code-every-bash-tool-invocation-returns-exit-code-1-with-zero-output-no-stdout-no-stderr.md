---
title: "Claude Code Bash Tool Returns Exit Code 1 with No Output"
description: "Fix Claude Code Bash tool returning exit code 1 with empty output for all commands Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Every Bash tool invocation returns Exit code 1 with zero output (no stdout, no stderr)"
common_causes:
  - "The Bash tool is core to Claude Code's coding workflow. When every command fails silently with exit code 1, developers cannot complete any coding task, forcing them to abandon the tool or seek workarounds."
  - "Active GitHub issue (May 2026) reports every Bash tool invocation returns exit code 1 with zero stdout/stderr regardless of command or shell configuration. Core functionality broken."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code process exited with code 3"
  - "Claude Code bridged process stops responding mid-turn"
updated: "2026-05-13"
published_at: "2026-05-13T12:13:16.710Z"
updated_at: "2026-05-13T12:13:16.710Z"
---

## What this error means

`Every Bash tool invocation returns Exit code 1 with zero output (no stdout, no stderr)` is a Claude Code failure pattern reported for developers trying to fix claude code bash tool returning exit code 1 with empty output for all commands. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue (May 2026) reports every Bash tool invocation returns exit code 1 with zero stdout/stderr regardless of command or shell configuration. Core functionality broken.

## Common causes

- The Bash tool is core to Claude Code's coding workflow. When every command fails silently with exit code 1, developers cannot complete any coding task, forcing them to abandon the tool or seek workarounds.
- Active GitHub issue (May 2026) reports every Bash tool invocation returns exit code 1 with zero stdout/stderr regardless of command or shell configuration. Core functionality broken.

## Quick fixes

1. Confirm the exact error signature matches `Every Bash tool invocation returns Exit code 1 with zero output (no stdout, no stderr)`.
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

- https://github.com/anthropics/claude-code/issues/58669

Evidence note: Active GitHub issue (May 2026) reports every Bash tool invocation returns exit code 1 with zero stdout/stderr regardless of command or shell configuration. Core functionality broken.

## Related errors

- Claude Code process exited with code 3
- Claude Code bridged process stops responding mid-turn

## FAQ

### What should I check first?

Start with the exact `Every Bash tool invocation returns Exit code 1 with zero output (no stdout, no stderr)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Every Bash tool invocation returns Exit code 1 with zero output (no stdout, no stderr)`.
