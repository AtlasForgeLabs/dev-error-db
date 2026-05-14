---
title: "Claude Code Desktop App Hangs on New Messages in Long Sessions"
description: "Fix Claude Code desktop app hanging on messages in long sessions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Anthropic API 400 messages: text content blocks must be non-empty"
common_causes:
  - "New messages sent to long-running Claude Code desktop sessions hang indefinitely with no response, no error, and no timeout. The loading indicator appears but nothing streams back. Fresh sessions work normally. Affects Max tier users paying premium prices."
  - "Desktop app on macOS, Opus 4.7 model, Max tier. Loading indicator appears but nothing streams. No error message, no timeout. Reproduces on every new message in affected sessions. Fresh sessions on same repos work normally."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code session timeout no response"
  - "Claude Code context limit hang"
updated: "2026-05-14"
published_at: "2026-05-14T10:13:19.561Z"
updated_at: "2026-05-14T10:13:19.561Z"
---

## What this error means

`Anthropic API 400 messages: text content blocks must be non-empty` is a Claude Code failure pattern reported for developers trying to fix claude code desktop app hanging on messages in long sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Desktop app on macOS, Opus 4.7 model, Max tier. Loading indicator appears but nothing streams. No error message, no timeout. Reproduces on every new message in affected sessions. Fresh sessions on same repos work normally.

## Common causes

- New messages sent to long-running Claude Code desktop sessions hang indefinitely with no response, no error, and no timeout. The loading indicator appears but nothing streams back. Fresh sessions work normally. Affects Max tier users paying premium prices.
- Desktop app on macOS, Opus 4.7 model, Max tier. Loading indicator appears but nothing streams. No error message, no timeout. Reproduces on every new message in affected sessions. Fresh sessions on same repos work normally.

## Quick fixes

1. Confirm the exact error signature matches `Anthropic API 400 messages: text content blocks must be non-empty`.
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

- https://github.com/anthropics/claude-code/issues/58992

Evidence note: Desktop app on macOS, Opus 4.7 model, Max tier. Loading indicator appears but nothing streams. No error message, no timeout. Reproduces on every new message in affected sessions. Fresh sessions on same repos work normally.

## Related errors

- Claude Code session timeout no response
- Claude Code context limit hang

## FAQ

### What should I check first?

Start with the exact `Anthropic API 400 messages: text content blocks must be non-empty` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Anthropic API 400 messages: text content blocks must be non-empty`.
