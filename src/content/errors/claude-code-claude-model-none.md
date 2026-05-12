---
title: "Claude Code for VS Code Extension Fails — Model Shows as None Since Version 2.1.73"
description: "Fix Claude Code VSCode extension showing Model as None and failing to work since update 2.1.73 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Model None"
common_causes:
  - "After updating to Claude Code v2.1.73+, the VSCode extension sidebar shows 'Claude Model None' and the tool becomes non-functional. This is a regression from v2.1.72. Affects Windows users using PowerShell terminal."
  - "GitHub issue #34678: Claude Code for VS Code extension fails since v2.1.73. Claude Model field shows 'None'. Regression from v2.1.72. Platform: Windows, Terminal: PowerShell. Affects all Claude Code operations via VSCode."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code VSCode extension activation failure"
  - "Claude Code model selection error"
updated: "2026-05-12"
published_at: "2026-05-12T08:10:49.632Z"
updated_at: "2026-05-12T08:10:49.632Z"
---

## What this error means

`Claude Model None` is a Claude Code failure pattern reported for developers trying to fix claude code vscode extension showing model as none and failing to work since update 2.1.73. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #34678: Claude Code for VS Code extension fails since v2.1.73. Claude Model field shows 'None'. Regression from v2.1.72. Platform: Windows, Terminal: PowerShell. Affects all Claude Code operations via VSCode.

## Common causes

- After updating to Claude Code v2.1.73+, the VSCode extension sidebar shows 'Claude Model None' and the tool becomes non-functional. This is a regression from v2.1.72. Affects Windows users using PowerShell terminal.
- GitHub issue #34678: Claude Code for VS Code extension fails since v2.1.73. Claude Model field shows 'None'. Regression from v2.1.72. Platform: Windows, Terminal: PowerShell. Affects all Claude Code operations via VSCode.

## Quick fixes

1. Confirm the exact error signature matches `Claude Model None`.
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

- https://github.com/anthropics/claude-code/issues/34678

Evidence note: GitHub issue #34678: Claude Code for VS Code extension fails since v2.1.73. Claude Model field shows 'None'. Regression from v2.1.72. Platform: Windows, Terminal: PowerShell. Affects all Claude Code operations via VSCode.

## Related errors

- Claude Code VSCode extension activation failure
- Claude Code model selection error

## FAQ

### What should I check first?

Start with the exact `Claude Model None` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Model None`.
