---
title: "Claude Code Cowork Desktop macOS: AskUserQuestion Tool Call UI Never Renders"
description: "Fix Claude Code Cowork mode on macOS Desktop where AskUserQuestion card never appears in the renderer Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "AskUserQuestion card never reaches renderer; yellow-dot badge shows pending but no UI"
common_causes:
  - "In Claude Code Cowork mode on macOS Desktop, AskUserQuestion tool calls fire on the main process and light up the yellow-dot needs-input badge, but the question card never reaches the renderer. Users wait 10-50+ minutes with no UI, no text fallback, and no way to answer. Silently resolves as Dismissed on app quit."
  - "Detailed bug report with reproduction steps on macOS Apple Silicon. Labeled bug, has repro, platform:macos, area:cowork, area:desktop. Question card never renders, pending tool permission sits unanswered, app quit silently resolves as Dismissed."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Cowork mode tool permission rendering issues"
  - "Claude Desktop renderer process communication failures"
  - "Claude Code tool_use callback timeout errors"
updated: "2026-05-13"
published_at: "2026-05-13T17:13:17.288Z"
updated_at: "2026-05-13T17:13:17.288Z"
---

## What this error means

`AskUserQuestion card never reaches renderer; yellow-dot badge shows pending but no UI` is a Claude Code failure pattern reported for developers trying to fix claude code cowork mode on macos desktop where askuserquestion card never appears in the renderer. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Detailed bug report with reproduction steps on macOS Apple Silicon. Labeled bug, has repro, platform:macos, area:cowork, area:desktop. Question card never renders, pending tool permission sits unanswered, app quit silently resolves as Dismissed.

## Common causes

- In Claude Code Cowork mode on macOS Desktop, AskUserQuestion tool calls fire on the main process and light up the yellow-dot needs-input badge, but the question card never reaches the renderer. Users wait 10-50+ minutes with no UI, no text fallback, and no way to answer. Silently resolves as Dismissed on app quit.
- Detailed bug report with reproduction steps on macOS Apple Silicon. Labeled bug, has repro, platform:macos, area:cowork, area:desktop. Question card never renders, pending tool permission sits unanswered, app quit silently resolves as Dismissed.

## Quick fixes

1. Confirm the exact error signature matches `AskUserQuestion card never reaches renderer; yellow-dot badge shows pending but no UI`.
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

- https://github.com/anthropics/claude-code/issues/58750

Evidence note: Detailed bug report with reproduction steps on macOS Apple Silicon. Labeled bug, has repro, platform:macos, area:cowork, area:desktop. Question card never renders, pending tool permission sits unanswered, app quit silently resolves as Dismissed.

## Related errors

- Claude Code Cowork mode tool permission rendering issues
- Claude Desktop renderer process communication failures
- Claude Code tool_use callback timeout errors

## FAQ

### What should I check first?

Start with the exact `AskUserQuestion card never reaches renderer; yellow-dot badge shows pending but no UI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AskUserQuestion card never reaches renderer; yellow-dot badge shows pending but no UI`.
