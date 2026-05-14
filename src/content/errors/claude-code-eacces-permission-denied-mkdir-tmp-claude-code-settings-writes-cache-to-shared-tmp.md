---
title: "Claude Code --settings EACCES permission denied on shared macOS when two user accounts share a Mac"
description: "Fix Claude Code EACCES error when running --settings on macOS with multiple user accounts sharing the same machine Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "EACCES: permission denied, mkdir '/tmp/claude-code-' — --settings writes cache to shared /tmp/"
common_causes:
  - "Shared Mac environments (labs, CI runners, family machines) trigger permission conflicts when Claude Code writes cache to world-shared /tmp/. Users see cryptic EACCES with no obvious fix."
  - "Claude Code CLI uses /tmp/ for cache directories. When two macOS user accounts share a machine, the second user gets EACCES because the first user's temp files exist with different ownership. No workaround provided."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code permission denied macOS"
  - "Claude Code shared environment cache conflict"
updated: "2026-05-14"
published_at: "2026-05-14T13:13:19.978Z"
updated_at: "2026-05-14T13:13:19.978Z"
---

## What this error means

`EACCES: permission denied, mkdir '/tmp/claude-code-' — --settings writes cache to shared /tmp/` is a Claude Code failure pattern reported for developers trying to fix claude code eacces error when running --settings on macos with multiple user accounts sharing the same machine. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code CLI uses /tmp/ for cache directories. When two macOS user accounts share a machine, the second user gets EACCES because the first user's temp files exist with different ownership. No workaround provided.

## Common causes

- Shared Mac environments (labs, CI runners, family machines) trigger permission conflicts when Claude Code writes cache to world-shared /tmp/. Users see cryptic EACCES with no obvious fix.
- Claude Code CLI uses /tmp/ for cache directories. When two macOS user accounts share a machine, the second user gets EACCES because the first user's temp files exist with different ownership. No workaround provided.

## Quick fixes

1. Confirm the exact error signature matches `EACCES: permission denied, mkdir '/tmp/claude-code-' — --settings writes cache to shared /tmp/`.
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

- https://github.com/anthropics/claude-code/issues/59041

Evidence note: Claude Code CLI uses /tmp/ for cache directories. When two macOS user accounts share a machine, the second user gets EACCES because the first user's temp files exist with different ownership. No workaround provided.

## Related errors

- Claude Code permission denied macOS
- Claude Code shared environment cache conflict

## FAQ

### What should I check first?

Start with the exact `EACCES: permission denied, mkdir '/tmp/claude-code-' — --settings writes cache to shared /tmp/` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `EACCES: permission denied, mkdir '/tmp/claude-code-' — --settings writes cache to shared /tmp/`.
