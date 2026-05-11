---
title: "Claude Code VS Code Extension Fails to Activate on Windows — Hardcoded Linux Path"
description: "Fix Claude Code VS Code extension that fails to activate with a TypeError about filename path on Windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'file:///home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs'"
common_causes:
  - "Developers installing Claude Code v2.1.136+ in VS Code on Windows get an immediate activation failure due to a hardcoded Linux build path (file:///home/runner/work/...) embedded in extension.js. The extension becomes completely unusable, blocking paid subscribers from using the tool in their IDE."
  - "Multiple GitHub issues (57503, 57495) report the same activation failure on Windows since v2.1.136. Error traces show hardcoded Linux CI build path leaking into the Windows extension bundle. Multiple users confirm the issue started around 2026-05-08."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code extension shows 'Claude Model None' after activation failure"
  - "Claude Code VS Code extension Ctrl-Shift-P 'Open in New Tab' does nothing"
updated: "2026-05-11"
---

## What this error means

`TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'file:///home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs'` is a Claude Code failure pattern reported for developers trying to fix claude code vs code extension that fails to activate with a typeerror about filename path on windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues (57503, 57495) report the same activation failure on Windows since v2.1.136. Error traces show hardcoded Linux CI build path leaking into the Windows extension bundle. Multiple users confirm the issue started around 2026-05-08.

## Common causes

- Developers installing Claude Code v2.1.136+ in VS Code on Windows get an immediate activation failure due to a hardcoded Linux build path (file:///home/runner/work/...) embedded in extension.js. The extension becomes completely unusable, blocking paid subscribers from using the tool in their IDE.
- Multiple GitHub issues (57503, 57495) report the same activation failure on Windows since v2.1.136. Error traces show hardcoded Linux CI build path leaking into the Windows extension bundle. Multiple users confirm the issue started around 2026-05-08.

## Quick fixes

1. Confirm the exact error signature matches `TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'file:///home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs'`.
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

- https://github.com/anthropics/claude-code/issues/57503
- https://github.com/anthropics/claude-code/issues/57495

Evidence note: Multiple GitHub issues (57503, 57495) report the same activation failure on Windows since v2.1.136. Error traces show hardcoded Linux CI build path leaking into the Windows extension bundle. Multiple users confirm the issue started around 2026-05-08.

## Related errors

- Claude Code extension shows 'Claude Model None' after activation failure
- Claude Code VS Code extension Ctrl-Shift-P 'Open in New Tab' does nothing

## FAQ

### What should I check first?

Start with the exact `TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'file:///home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received 'file:///home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs'`.
