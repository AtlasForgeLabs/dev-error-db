---
title: "Claude Code --bg Flag Not Enabled Error — Background Mode Fails Intermittently"
description: "Fix Claude Code background mode '--bg' flag showing 'not enabled' error and failing to resume sessions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "--bg is not enabled. If this is unexpected, retry in a moment."
common_causes:
  - "Claude Code's background mode is critical for CI/CD automation and long-running coding tasks. When '--bg' intermittently fails with 'not enabled', developers cannot automate agent workflows or resume background sessions."
  - "Running 'claude --resume xxx --bg' returns '--bg is not enabled. If this is unexpected, retry in a moment.' — a non-deterministic failure that blocks background agent workflows. Reported against latest version."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code background session not resuming"
  - "Claude Code --bg flag not working"
  - "Claude Code agent mode session timeout"
updated: "2026-05-12"
published_at: "2026-05-12T14:12:16.674Z"
updated_at: "2026-05-12T14:12:16.674Z"
---

## What this error means

`--bg is not enabled. If this is unexpected, retry in a moment.` is a Claude Code failure pattern reported for developers trying to fix claude code background mode '--bg' flag showing 'not enabled' error and failing to resume sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Running 'claude --resume xxx --bg' returns '--bg is not enabled. If this is unexpected, retry in a moment.' — a non-deterministic failure that blocks background agent workflows. Reported against latest version.

## Common causes

- Claude Code's background mode is critical for CI/CD automation and long-running coding tasks. When '--bg' intermittently fails with 'not enabled', developers cannot automate agent workflows or resume background sessions.
- Running 'claude --resume xxx --bg' returns '--bg is not enabled. If this is unexpected, retry in a moment.' — a non-deterministic failure that blocks background agent workflows. Reported against latest version.

## Quick fixes

1. Confirm the exact error signature matches `--bg is not enabled. If this is unexpected, retry in a moment.`.
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

- https://github.com/anthropics/claude-code/issues/58258

Evidence note: Running 'claude --resume xxx --bg' returns '--bg is not enabled. If this is unexpected, retry in a moment.' — a non-deterministic failure that blocks background agent workflows. Reported against latest version.

## Related errors

- Claude Code background session not resuming
- Claude Code --bg flag not working
- Claude Code agent mode session timeout

## FAQ

### What should I check first?

Start with the exact `--bg is not enabled. If this is unexpected, retry in a moment.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `--bg is not enabled. If this is unexpected, retry in a moment.`.
