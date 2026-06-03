---
title: "Claude Code VM Connection timeout after 60 seconds on Windows Cowork"
description: "Fix Claude Code Desktop app crashing on Windows 11 Cowork mode with VM timeout; need workspace startup fixed to proceed with development Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Failed to start Claude's workspace — VM connection timeout after 60 seconds"
common_causes:
  - "GitHub Issue #65128 on anthropics/claude-code (created 2026-06-03, labels: bug, platform:windows, area:cowork, area:desktop). Complete blocker — users cannot even start Claude Code on Windows. Clear error signature with log messages visible."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T20:44:33.744Z"
updated_at: "2026-06-03T20:44:33.744Z"
---

## What this error means

`Failed to start Claude's workspace — VM connection timeout after 60 seconds` is a Claude Code failure pattern reported for developers trying to fix claude code desktop app crashing on windows 11 cowork mode with vm timeout; need workspace startup fixed to proceed with development. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #65128 on anthropics/claude-code (created 2026-06-03, labels: bug, platform:windows, area:cowork, area:desktop). Complete blocker — users cannot even start Claude Code on Windows. Clear error signature with log messages visible.

## Common causes

- GitHub Issue #65128 on anthropics/claude-code (created 2026-06-03, labels: bug, platform:windows, area:cowork, area:desktop). Complete blocker — users cannot even start Claude Code on Windows. Clear error signature with log messages visible.

## Quick fixes

1. Confirm the exact error signature matches `Failed to start Claude's workspace — VM connection timeout after 60 seconds`.
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

- https://github.com/anthropics/claude-code/issues/65128

Evidence note: GitHub Issue #65128 on anthropics/claude-code (created 2026-06-03, labels: bug, platform:windows, area:cowork, area:desktop). Complete blocker — users cannot even start Claude Code on Windows. Clear error signature with log messages visible.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Failed to start Claude's workspace — VM connection timeout after 60 seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to start Claude's workspace — VM connection timeout after 60 seconds`.
