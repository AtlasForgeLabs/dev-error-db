---
title: "Claude Code Write/Edit Tools Truncate Files on virtiofs — Data Corruption Fix"
description: "Fix Claude Code Write and Edit tools silently truncating or corrupting files on virtiofs/FUSE mounts Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Write tool truncates files on virtiofs mounts — null-pad and tail-chop"
common_causes:
  - "Claude Code's Write and Edit tools silently corrupt files on virtiofs mounts (Windows 11 with Linux containers via FUSE). Three failure modes: (1) null-pad — writes new content then pads with null bytes to original file size, (2) tail-chop — truncates content beyond some boundary, (3) silent append failure — tool reports success but content is never persisted. Files corrupted without any error returned, causing data loss and broken code pushed to git."
  - "GitHub issue #58551 filed 2026-05-13 reports three silent file corruption modes on virtiofs mounts. 4 distinct files corrupted in one workday. Tool reports success while leaving files broken. Includes verification helper workaround (verify_file_integrity.py). ~30-60 min recovery work per incident. Broken version pushed to git before caught."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code file corruption WSL"
  - "Claude Code Edit tool data loss"
  - "Claude Code Write tool null bytes"
updated: "2026-05-13"
published_at: "2026-05-13T02:12:22.017Z"
updated_at: "2026-05-13T02:12:22.017Z"
---

## What this error means

`Write tool truncates files on virtiofs mounts — null-pad and tail-chop` is a Claude Code failure pattern reported for developers trying to fix claude code write and edit tools silently truncating or corrupting files on virtiofs/fuse mounts. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58551 filed 2026-05-13 reports three silent file corruption modes on virtiofs mounts. 4 distinct files corrupted in one workday. Tool reports success while leaving files broken. Includes verification helper workaround (verify_file_integrity.py). ~30-60 min recovery work per incident. Broken version pushed to git before caught.

## Common causes

- Claude Code's Write and Edit tools silently corrupt files on virtiofs mounts (Windows 11 with Linux containers via FUSE). Three failure modes: (1) null-pad — writes new content then pads with null bytes to original file size, (2) tail-chop — truncates content beyond some boundary, (3) silent append failure — tool reports success but content is never persisted. Files corrupted without any error returned, causing data loss and broken code pushed to git.
- GitHub issue #58551 filed 2026-05-13 reports three silent file corruption modes on virtiofs mounts. 4 distinct files corrupted in one workday. Tool reports success while leaving files broken. Includes verification helper workaround (verify_file_integrity.py). ~30-60 min recovery work per incident. Broken version pushed to git before caught.

## Quick fixes

1. Confirm the exact error signature matches `Write tool truncates files on virtiofs mounts — null-pad and tail-chop`.
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

- https://github.com/anthropics/claude-code/issues/58551

Evidence note: GitHub issue #58551 filed 2026-05-13 reports three silent file corruption modes on virtiofs mounts. 4 distinct files corrupted in one workday. Tool reports success while leaving files broken. Includes verification helper workaround (verify_file_integrity.py). ~30-60 min recovery work per incident. Broken version pushed to git before caught.

## Related errors

- Claude Code file corruption WSL
- Claude Code Edit tool data loss
- Claude Code Write tool null bytes

## FAQ

### What should I check first?

Start with the exact `Write tool truncates files on virtiofs mounts — null-pad and tail-chop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Write tool truncates files on virtiofs mounts — null-pad and tail-chop`.
