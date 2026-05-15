---
title: "Claude Code Cowork Edit Silently Clamps File Size — Silent Data Loss"
description: "Fix Claude Code edit operation silently truncating file to original size, losing new content Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code Edit silently clamps file size to pre-edit size — data loss"
common_causes:
  - "When Claude Code's edit tool expands a file beyond its original size, the write is silently clamped to the pre-edit size. The user sees 'File updated successfully' but content is lost. Reproduces known bug #52581."
  - "Edit tool in Cowork mode silently clamps file writes to the original file size. New content beyond original size is dropped without error. Reproduces #52581 which was auto-closed. Labeled 'has repro' and 'area:tools'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code file edit data loss"
  - "Claude Code write truncated silently"
  - "Claude Code Cowork edit size limit"
updated: "2026-05-15"
published_at: "2026-05-15T02:13:21.451Z"
updated_at: "2026-05-15T02:13:21.451Z"
---

## What this error means

`Claude Code Edit silently clamps file size to pre-edit size — data loss` is a Claude Code failure pattern reported for developers trying to fix claude code edit operation silently truncating file to original size, losing new content. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Edit tool in Cowork mode silently clamps file writes to the original file size. New content beyond original size is dropped without error. Reproduces #52581 which was auto-closed. Labeled 'has repro' and 'area:tools'.

## Common causes

- When Claude Code's edit tool expands a file beyond its original size, the write is silently clamped to the pre-edit size. The user sees 'File updated successfully' but content is lost. Reproduces known bug #52581.
- Edit tool in Cowork mode silently clamps file writes to the original file size. New content beyond original size is dropped without error. Reproduces #52581 which was auto-closed. Labeled 'has repro' and 'area:tools'.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code Edit silently clamps file size to pre-edit size — data loss`.
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

- https://github.com/anthropics/claude-code/issues/59285

Evidence note: Edit tool in Cowork mode silently clamps file writes to the original file size. New content beyond original size is dropped without error. Reproduces #52581 which was auto-closed. Labeled 'has repro' and 'area:tools'.

## Related errors

- Claude Code file edit data loss
- Claude Code write truncated silently
- Claude Code Cowork edit size limit

## FAQ

### What should I check first?

Start with the exact `Claude Code Edit silently clamps file size to pre-edit size — data loss` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code Edit silently clamps file size to pre-edit size — data loss`.
