---
title: "Claude Code Windows CLI Tool Result Delivery Failures — Phantom Rejection & Infinite Hang"
description: "Fix Claude Code tool results not being delivered on Windows causing sessions to hang or show false rejections Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code v2.1.141 Windows CLI: tool result delivery failures — phantom 'user rejected' and infinite hang on '[Tool result missing due to internal error]'"
common_causes:
  - "Claude Code v2.1.141 on Windows has a critical regression where tool results fail to reach the model loop. Users see phantom 'user rejected' messages (no prompt shown) or infinite hangs with no error indicator. Both manifestations leave sessions dead with Ctrl+C as only escape."
  - "Two distinct failure modes on Windows: (1) tool returns 'rejected' without any permission prompt shown, (2) tool result arrives as '[Tool result missing due to internal error]' causing infinite hang. Both leave sessions unrecoverable. v2.1.141 regression."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code permission prompt not showing"
  - "Claude Code tool use hangs on macOS"
  - "Claude Code session stuck after tool execution"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Claude Code v2.1.141 Windows CLI: tool result delivery failures — phantom 'user rejected' and infinite hang on '[Tool result missing due to internal error]'` is a Claude Code failure pattern reported for developers trying to fix claude code tool results not being delivered on windows causing sessions to hang or show false rejections. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Two distinct failure modes on Windows: (1) tool returns 'rejected' without any permission prompt shown, (2) tool result arrives as '[Tool result missing due to internal error]' causing infinite hang. Both leave sessions unrecoverable. v2.1.141 regression.

## Common causes

- Claude Code v2.1.141 on Windows has a critical regression where tool results fail to reach the model loop. Users see phantom 'user rejected' messages (no prompt shown) or infinite hangs with no error indicator. Both manifestations leave sessions dead with Ctrl+C as only escape.
- Two distinct failure modes on Windows: (1) tool returns 'rejected' without any permission prompt shown, (2) tool result arrives as '[Tool result missing due to internal error]' causing infinite hang. Both leave sessions unrecoverable. v2.1.141 regression.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code v2.1.141 Windows CLI: tool result delivery failures — phantom 'user rejected' and infinite hang on '[Tool result missing due to internal error]'`.
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

- https://github.com/anthropics/claude-code/issues/59200

Evidence note: Two distinct failure modes on Windows: (1) tool returns 'rejected' without any permission prompt shown, (2) tool result arrives as '[Tool result missing due to internal error]' causing infinite hang. Both leave sessions unrecoverable. v2.1.141 regression.

## Related errors

- Claude Code permission prompt not showing
- Claude Code tool use hangs on macOS
- Claude Code session stuck after tool execution

## FAQ

### What should I check first?

Start with the exact `Claude Code v2.1.141 Windows CLI: tool result delivery failures — phantom 'user rejected' and infinite hang on '[Tool result missing due to internal error]'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code v2.1.141 Windows CLI: tool result delivery failures — phantom 'user rejected' and infinite hang on '[Tool result missing due to internal error]'`.
