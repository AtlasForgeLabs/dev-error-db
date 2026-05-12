---
title: "Claude Code TUI input frozen for 20 seconds after /compact command completes"
description: "Fix Claude Code terminal input freezing after running /compact command Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code input invisible / cursor frozen for up to 20s after /compact"
common_causes:
  - "After Claude Code's /compact command finishes, the TUI input appears responsive but typed characters are not rendered for up to 20 seconds. Keystrokes are buffered but not displayed until the TUI unblocks, then the entire buffer appears at once. This disrupts the interactive coding experience for developers who rely on /compact to manage context window size."
  - "Official GitHub issue on anthropics/claude-code repo (May 2026). Immediately after /compact finishes, input prompt appears responsive but typing produces no visible cursor movement or echoed characters for ~20s. Keystrokes buffered, not lost — entire typed buffer appears at once when TUI unblocks. Distinct from context-full lag (issue #18943); stall is tied to post-compact transition."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code /compact command causes lag"
  - "Claude Code TUI unresponsive after context compaction"
  - "Claude Code terminal input not displaying"
updated: "2026-05-12"
published_at: "2026-05-12T21:12:18.504Z"
updated_at: "2026-05-12T21:12:18.504Z"
---

## What this error means

`Claude Code input invisible / cursor frozen for up to 20s after /compact` is a Claude Code failure pattern reported for developers trying to fix claude code terminal input freezing after running /compact command. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official GitHub issue on anthropics/claude-code repo (May 2026). Immediately after /compact finishes, input prompt appears responsive but typing produces no visible cursor movement or echoed characters for ~20s. Keystrokes buffered, not lost — entire typed buffer appears at once when TUI unblocks. Distinct from context-full lag (issue #18943); stall is tied to post-compact transition.

## Common causes

- After Claude Code's /compact command finishes, the TUI input appears responsive but typed characters are not rendered for up to 20 seconds. Keystrokes are buffered but not displayed until the TUI unblocks, then the entire buffer appears at once. This disrupts the interactive coding experience for developers who rely on /compact to manage context window size.
- Official GitHub issue on anthropics/claude-code repo (May 2026). Immediately after /compact finishes, input prompt appears responsive but typing produces no visible cursor movement or echoed characters for ~20s. Keystrokes buffered, not lost — entire typed buffer appears at once when TUI unblocks. Distinct from context-full lag (issue #18943); stall is tied to post-compact transition.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code input invisible / cursor frozen for up to 20s after /compact`.
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

- https://github.com/anthropics/claude-code/issues/58498

Evidence note: Official GitHub issue on anthropics/claude-code repo (May 2026). Immediately after /compact finishes, input prompt appears responsive but typing produces no visible cursor movement or echoed characters for ~20s. Keystrokes buffered, not lost — entire typed buffer appears at once when TUI unblocks. Distinct from context-full lag (issue #18943); stall is tied to post-compact transition.

## Related errors

- Claude Code /compact command causes lag
- Claude Code TUI unresponsive after context compaction
- Claude Code terminal input not displaying

## FAQ

### What should I check first?

Start with the exact `Claude Code input invisible / cursor frozen for up to 20s after /compact` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code input invisible / cursor frozen for up to 20s after /compact`.
