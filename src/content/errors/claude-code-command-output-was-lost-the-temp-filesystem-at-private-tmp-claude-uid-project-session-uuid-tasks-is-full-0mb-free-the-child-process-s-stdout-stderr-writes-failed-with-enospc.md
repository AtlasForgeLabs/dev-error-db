---
title: "Claude Code Task Runner ENOSPC despite disk having free space"
description: "Fix Claude Code Bash tool silently returning empty output due to spurious ENOSPC errors on macOS tmpfs even when df shows GBs of free space Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Command output was lost: the temp filesystem at /private/tmp/claude-$UID/<project>/<session-uuid>/tasks is full (0MB free). The child process's stdout/stderr writes failed with ENOSPC"
common_causes:
  - "GitHub issue #63909 in anthropics/claude-code (opened today May 30 2026) reports enospc on subprocess output despite 23GB free. Session-UUID-per-conversation state corruption hypothesis. Labels: area:bash, bug, has repro, platform:macos. High commercial value as this breaks core Claude Code functionality."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T10:43:29.020Z"
updated_at: "2026-05-30T10:43:29.020Z"
---

## What this error means

`Command output was lost: the temp filesystem at /private/tmp/claude-$UID/<project>/<session-uuid>/tasks is full (0MB free). The child process's stdout/stderr writes failed with ENOSPC` is a Claude Code failure pattern reported for developers trying to fix claude code bash tool silently returning empty output due to spurious enospc errors on macos tmpfs even when df shows gbs of free space. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #63909 in anthropics/claude-code (opened today May 30 2026) reports enospc on subprocess output despite 23GB free. Session-UUID-per-conversation state corruption hypothesis. Labels: area:bash, bug, has repro, platform:macos. High commercial value as this breaks core Claude Code functionality.

## Common causes

- GitHub issue #63909 in anthropics/claude-code (opened today May 30 2026) reports enospc on subprocess output despite 23GB free. Session-UUID-per-conversation state corruption hypothesis. Labels: area:bash, bug, has repro, platform:macos. High commercial value as this breaks core Claude Code functionality.

## Quick fixes

1. Confirm the exact error signature matches `Command output was lost: the temp filesystem at /private/tmp/claude-$UID/<project>/<session-uuid>/tasks is full (0MB free). The child process's stdout/stderr writes failed with ENOSPC`.
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

- https://github.com/anthropics/claude-code/issues/63909

Evidence note: GitHub issue #63909 in anthropics/claude-code (opened today May 30 2026) reports enospc on subprocess output despite 23GB free. Session-UUID-per-conversation state corruption hypothesis. Labels: area:bash, bug, has repro, platform:macos. High commercial value as this breaks core Claude Code functionality.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Command output was lost: the temp filesystem at /private/tmp/claude-$UID/<project>/<session-uuid>/tasks is full (0MB free). The child process's stdout/stderr writes failed with ENOSPC` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Command output was lost: the temp filesystem at /private/tmp/claude-$UID/<project>/<session-uuid>/tasks is full (0MB free). The child process's stdout/stderr writes failed with ENOSPC`.
