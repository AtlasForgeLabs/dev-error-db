---
title: "Claude Code Opus 4.7 stream stalls at ~660 bytes in every session"
description: "Fix Claude Code Opus 4.7 streaming stall that crashes every session Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "stream_idle_partial lastChunkAgeMs=15001 bytesTotal=661 / sdk_stream_ended_no_result had_error=true"
common_causes:
  - "Premium Opus 4.7 model (1M context) is completely unusable — stream stalls after ~660 bytes then times out. Affects every session with no workaround, blocking developers paying for the highest tier."
  - "Multiple users report Opus 4.7 (1M context) stream stalls at 660-730 bytes in every session via VS Code extension. Stream emits one chunk then goes idle, fires stream_idle_partial every 15s, ends with had_error=true. Reproduces 100% across fresh sessions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code stream timeout on long responses"
  - "Claude Code VS Code extension connection reset"
updated: "2026-05-14"
published_at: "2026-05-14T16:13:20.266Z"
updated_at: "2026-05-14T16:13:20.266Z"
---

## What this error means

`stream_idle_partial lastChunkAgeMs=15001 bytesTotal=661 / sdk_stream_ended_no_result had_error=true` is a Claude Code failure pattern reported for developers trying to fix claude code opus 4.7 streaming stall that crashes every session. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple users report Opus 4.7 (1M context) stream stalls at 660-730 bytes in every session via VS Code extension. Stream emits one chunk then goes idle, fires stream_idle_partial every 15s, ends with had_error=true. Reproduces 100% across fresh sessions.

## Common causes

- Premium Opus 4.7 model (1M context) is completely unusable — stream stalls after ~660 bytes then times out. Affects every session with no workaround, blocking developers paying for the highest tier.
- Multiple users report Opus 4.7 (1M context) stream stalls at 660-730 bytes in every session via VS Code extension. Stream emits one chunk then goes idle, fires stream_idle_partial every 15s, ends with had_error=true. Reproduces 100% across fresh sessions.

## Quick fixes

1. Confirm the exact error signature matches `stream_idle_partial lastChunkAgeMs=15001 bytesTotal=661 / sdk_stream_ended_no_result had_error=true`.
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

- https://github.com/anthropics/claude-code/issues/59092

Evidence note: Multiple users report Opus 4.7 (1M context) stream stalls at 660-730 bytes in every session via VS Code extension. Stream emits one chunk then goes idle, fires stream_idle_partial every 15s, ends with had_error=true. Reproduces 100% across fresh sessions.

## Related errors

- Claude Code stream timeout on long responses
- Claude Code VS Code extension connection reset

## FAQ

### What should I check first?

Start with the exact `stream_idle_partial lastChunkAgeMs=15001 bytesTotal=661 / sdk_stream_ended_no_result had_error=true` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `stream_idle_partial lastChunkAgeMs=15001 bytesTotal=661 / sdk_stream_ended_no_result had_error=true`.
