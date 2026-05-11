---
title: "Claude Code Remote SSH ARM64 Host — Process Exited with Code 1 Error Fix"
description: "Fix Claude Code crashing on remote ARM64 SSH hosts with process exited code 1 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code Desktop fails on remote ARM64 SSH host: \"process exited with code 1\""
common_causes:
  - "Developers using Claude Code Desktop over SSH to remote ARM64 machines (AWS Graviton, Apple Silicon servers) encounter 'process exited with code 1' on launch, blocking remote AI-assisted development workflows"
  - "Bug report filed 2026-05-11: Claude Code Desktop crashes with 'process exited with code 1' on remote ARM64 SSH hosts. Affects developers using cloud ARM instances for remote development."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code remote SSH connection failed"
  - "Claude Code ARM64 architecture not supported"
  - "Claude Code remote development setup error"
updated: "2026-05-11"
---

## What this error means

`Claude Code Desktop fails on remote ARM64 SSH host: "process exited with code 1"` is a Claude Code failure pattern reported for developers trying to fix claude code crashing on remote arm64 ssh hosts with process exited code 1. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report filed 2026-05-11: Claude Code Desktop crashes with 'process exited with code 1' on remote ARM64 SSH hosts. Affects developers using cloud ARM instances for remote development.

## Common causes

- Developers using Claude Code Desktop over SSH to remote ARM64 machines (AWS Graviton, Apple Silicon servers) encounter 'process exited with code 1' on launch, blocking remote AI-assisted development workflows
- Bug report filed 2026-05-11: Claude Code Desktop crashes with 'process exited with code 1' on remote ARM64 SSH hosts. Affects developers using cloud ARM instances for remote development.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code Desktop fails on remote ARM64 SSH host: "process exited with code 1"`.
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

- https://github.com/anthropics/claude-code/issues/58142

Evidence note: Bug report filed 2026-05-11: Claude Code Desktop crashes with 'process exited with code 1' on remote ARM64 SSH hosts. Affects developers using cloud ARM instances for remote development.

## Related errors

- Claude Code remote SSH connection failed
- Claude Code ARM64 architecture not supported
- Claude Code remote development setup error

## FAQ

### What should I check first?

Start with the exact `Claude Code Desktop fails on remote ARM64 SSH host: "process exited with code 1"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code Desktop fails on remote ARM64 SSH host: "process exited with code 1"`.
