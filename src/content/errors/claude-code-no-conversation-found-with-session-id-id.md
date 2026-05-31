---
title: "Claude Code session resume returns 'No conversation found' despite .jsonl files existing on disk"
description: "Fix Claude Code --resume or --continue not finding existing sessions even though JSONL data exists on disk Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "No conversation found with session ID: <id>"
common_causes:
  - "GitHub Issue #33912 documents claude --resume always returning 'No conversation found' even when .jsonl session files exist. Root cause analysis reveals session index is keyed by PID rather than session ID; when OS reuses a PID, new sessions overwrite old index entries causing orphan sessions. This is a structural bug affecting all users running multiple concurrent/sequential sessions. Category: AI Coding Tools — core functionality break."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T11:44:24.462Z"
updated_at: "2026-05-31T11:44:24.462Z"
---

## What this error means

`No conversation found with session ID: <id>` is a Claude Code failure pattern reported for developers trying to fix claude code --resume or --continue not finding existing sessions even though jsonl data exists on disk. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #33912 documents claude --resume always returning 'No conversation found' even when .jsonl session files exist. Root cause analysis reveals session index is keyed by PID rather than session ID; when OS reuses a PID, new sessions overwrite old index entries causing orphan sessions. This is a structural bug affecting all users running multiple concurrent/sequential sessions. Category: AI Coding Tools — core functionality break.

## Common causes

- GitHub Issue #33912 documents claude --resume always returning 'No conversation found' even when .jsonl session files exist. Root cause analysis reveals session index is keyed by PID rather than session ID; when OS reuses a PID, new sessions overwrite old index entries causing orphan sessions. This is a structural bug affecting all users running multiple concurrent/sequential sessions. Category: AI Coding Tools — core functionality break.

## Quick fixes

1. Confirm the exact error signature matches `No conversation found with session ID: <id>`.
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

- https://github.com/anthropics/claude-code/issues/33912

Evidence note: GitHub Issue #33912 documents claude --resume always returning 'No conversation found' even when .jsonl session files exist. Root cause analysis reveals session index is keyed by PID rather than session ID; when OS reuses a PID, new sessions overwrite old index entries causing orphan sessions. This is a structural bug affecting all users running multiple concurrent/sequential sessions. Category: AI Coding Tools — core functionality break.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `No conversation found with session ID: <id>` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No conversation found with session ID: <id>`.
