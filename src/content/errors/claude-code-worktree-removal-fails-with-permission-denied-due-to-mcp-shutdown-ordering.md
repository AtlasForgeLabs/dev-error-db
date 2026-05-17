---
title: "Windows Claude Code worktree removal fails with Permission denied due to MCP shutdown ordering"
description: "Fix Claude Code on Windows where git worktree remove fails with Permission denied because MCP servers aren't shut down before worktree operations Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "worktree removal fails with Permission denied due to MCP shutdown ordering"
common_causes:
  - "Issue #32747 reports internal shutdown ordering bug where MCP servers should be shut down before attempting git worktree remove. Reproduced with default worktree behavior (no custom WorktreeCreate/WorktreeRemove hooks). Specific to Windows platform. No duplicate found in covered-errors list."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T11:35:57.384Z"
updated_at: "2026-05-17T11:35:57.384Z"
---

## What this error means

`worktree removal fails with Permission denied due to MCP shutdown ordering` is a Claude Code failure pattern reported for developers trying to fix claude code on windows where git worktree remove fails with permission denied because mcp servers aren't shut down before worktree operations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #32747 reports internal shutdown ordering bug where MCP servers should be shut down before attempting git worktree remove. Reproduced with default worktree behavior (no custom WorktreeCreate/WorktreeRemove hooks). Specific to Windows platform. No duplicate found in covered-errors list.

## Common causes

- Issue #32747 reports internal shutdown ordering bug where MCP servers should be shut down before attempting git worktree remove. Reproduced with default worktree behavior (no custom WorktreeCreate/WorktreeRemove hooks). Specific to Windows platform. No duplicate found in covered-errors list.

## Quick fixes

1. Confirm the exact error signature matches `worktree removal fails with Permission denied due to MCP shutdown ordering`.
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

- https://github.com/anthropics/claude-code/issues/32747

Evidence note: Issue #32747 reports internal shutdown ordering bug where MCP servers should be shut down before attempting git worktree remove. Reproduced with default worktree behavior (no custom WorktreeCreate/WorktreeRemove hooks). Specific to Windows platform. No duplicate found in covered-errors list.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `worktree removal fails with Permission denied due to MCP shutdown ordering` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `worktree removal fails with Permission denied due to MCP shutdown ordering`.
