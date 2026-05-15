---
title: "Claude Code Windows PowerShell pre-validation fails — command line too long / pwsh timed out after 5000ms"
description: "Fix Claude Code Windows PowerShell validation failure command line too long pwsh timeout blocking shell commands Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "pwsh exited with code 1: the command line is too long / pwsh timed out after 5000ms — blocks shell commands behind approval-prompt loops"
common_causes:
  - "GitHub issue #59454 reports Claude Code on Windows intermittently fails PowerShell tool pre-validation with 'command line is too long' or 'pwsh timed out after 5000ms', blocking shell commands behind approval-prompt loops. Has repro steps. Category mapped to AI Coding Tools — Windows-specific bug in Claude Code's tool validation."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-15"
published_at: "2026-05-15T17:13:23.103Z"
updated_at: "2026-05-15T17:13:23.103Z"
---

## What this error means

`pwsh exited with code 1: the command line is too long / pwsh timed out after 5000ms — blocks shell commands behind approval-prompt loops` is a Claude Code failure pattern reported for developers trying to fix claude code windows powershell validation failure command line too long pwsh timeout blocking shell commands. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59454 reports Claude Code on Windows intermittently fails PowerShell tool pre-validation with 'command line is too long' or 'pwsh timed out after 5000ms', blocking shell commands behind approval-prompt loops. Has repro steps. Category mapped to AI Coding Tools — Windows-specific bug in Claude Code's tool validation.

## Common causes

- GitHub issue #59454 reports Claude Code on Windows intermittently fails PowerShell tool pre-validation with 'command line is too long' or 'pwsh timed out after 5000ms', blocking shell commands behind approval-prompt loops. Has repro steps. Category mapped to AI Coding Tools — Windows-specific bug in Claude Code's tool validation.

## Quick fixes

1. Confirm the exact error signature matches `pwsh exited with code 1: the command line is too long / pwsh timed out after 5000ms — blocks shell commands behind approval-prompt loops`.
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

- https://github.com/anthropics/claude-code/issues/59454

Evidence note: GitHub issue #59454 reports Claude Code on Windows intermittently fails PowerShell tool pre-validation with 'command line is too long' or 'pwsh timed out after 5000ms', blocking shell commands behind approval-prompt loops. Has repro steps. Category mapped to AI Coding Tools — Windows-specific bug in Claude Code's tool validation.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `pwsh exited with code 1: the command line is too long / pwsh timed out after 5000ms — blocks shell commands behind approval-prompt loops` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pwsh exited with code 1: the command line is too long / pwsh timed out after 5000ms — blocks shell commands behind approval-prompt loops`.
