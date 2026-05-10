---
title: "Git refusing to merge unrelated histories"
description: "Fix Git refusing to merge unrelated histories when combining repositories or mismatched branches."
category: "Version control"
technology: "Git"
error_signature: "fatal: refusing to merge unrelated histories"
common_causes:
  - "Local repository was initialized separately from the remote"
  - "Two independent repositories are being combined"
  - "Default branch was recreated"
  - "Remote history was replaced"
quick_fix: "Confirm the histories should be combined, then merge with --allow-unrelated-histories and resolve conflicts carefully."
updated: "2026-05-10"
---

## What this error means

`fatal: refusing to merge unrelated histories` means Git cannot complete the repository operation with the current working directory, remote, history, or authentication setup. The command is often correct, but the repository state or remote configuration is not what Git expects. This page helps you understand and resolve Git merges between branches with no shared commit history.

## Common causes

- Local repository was initialized separately from the remote
- Two independent repositories are being combined
- Default branch was recreated
- Remote history was replaced

## Quick fixes

1. Copy the exact error signature and the command that produced it.
2. Confirm the histories should be combined, then merge with --allow-unrelated-histories and resolve conflicts carefully.
3. Check the Git configuration that matches this command.
4. Rerun the smallest failing command after each change.

## Step-by-step troubleshooting

1. Start with the exact signature: `fatal: refusing to merge unrelated histories`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Run `git status` and `git remote -v` from the directory where the error happens.
3. For history or merge errors, inspect the branch relationship before forcing a merge or rewriting history.
4. For remote errors, confirm whether the URL should use SSH or HTTPS.
5. Make the targeted change: Confirm the histories should be combined, then merge with --allow-unrelated-histories and resolve conflicts carefully.
6. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- fatal: not a git repository
- fatal: refusing to merge unrelated histories
- CONFLICT content

## FAQ

### What should I check first?

Start with the exact `fatal: refusing to merge unrelated histories` message and the Git setting named in the log. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Git step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

Local and CI environments often differ in installed tools, environment variables, permissions, and network access. Log the versions and non-secret configuration values used by the failing step.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `fatal: refusing to merge unrelated histories`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
