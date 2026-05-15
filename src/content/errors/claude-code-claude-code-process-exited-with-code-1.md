---
title: "Fix Claude Code process exited with code 1 — Desktop App & Cowork Crash on Every Message"
description: "fix Claude Code process exited with code 1 desktop app cowork not working Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code process exited with code 1"
common_causes:
  - "Claude Code Desktop App and Cowork mode crash immediately on every message with 'process exited with code 1', completely blocking usage. Users on paid subscriptions cannot use the product at all."
  - "Multiple users report Claude Code Desktop App exits with code 1 on any message. Issue #59375 filed 2026-05-15 with logs showing session query error. Related to #52210 with 50+ comments. Reproducible on macOS with latest version 2.1.138+."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code process exited with code 3"
  - "Claude Code session error VS Code extension"
  - "Claude Code not responding on startup"
updated: "2026-05-15"
published_at: "2026-05-15T13:13:22.740Z"
updated_at: "2026-05-15T13:13:22.740Z"
---

## What this error means

`Claude Code process exited with code 1` is a Claude Code failure pattern reported for developers trying to fix claude code process exited with code 1 desktop app cowork not working. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple users report Claude Code Desktop App exits with code 1 on any message. Issue #59375 filed 2026-05-15 with logs showing session query error. Related to #52210 with 50+ comments. Reproducible on macOS with latest version 2.1.138+.

## Common causes

- Claude Code Desktop App and Cowork mode crash immediately on every message with 'process exited with code 1', completely blocking usage. Users on paid subscriptions cannot use the product at all.
- Multiple users report Claude Code Desktop App exits with code 1 on any message. Issue #59375 filed 2026-05-15 with logs showing session query error. Related to #52210 with 50+ comments. Reproducible on macOS with latest version 2.1.138+.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code process exited with code 1`.
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

- https://github.com/anthropics/claude-code/issues/59375
- https://github.com/anthropics/claude-code/issues/52210

Evidence note: Multiple users report Claude Code Desktop App exits with code 1 on any message. Issue #59375 filed 2026-05-15 with logs showing session query error. Related to #52210 with 50+ comments. Reproducible on macOS with latest version 2.1.138+.

## Related errors

- Claude Code process exited with code 3
- Claude Code session error VS Code extension
- Claude Code not responding on startup

## FAQ

### What should I check first?

Start with the exact `Claude Code process exited with code 1` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code process exited with code 1`.
