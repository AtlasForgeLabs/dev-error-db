---
title: "Claude Code Stream Stall + sdk_stream_ended_no_result After v2.1.141 Update"
description: "Fix Claude Code streaming stalls and no result after update Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code: sdk_stream_ended_no_result had_error: true"
common_causes:
  - "After Claude Code auto-updated to v2.1.141, all prompts fail with streaming stalls (50s+ gaps) followed by sdk_stream_ended_no_result. Rolling back to v2.1.140 resolves immediately. Affects all prompts, not just long sessions."
  - "v2.1.141 regression. Slow first byte (~30s), streaming stall (~50s gap), sdk_stream_ended_no_result with had_error: true. Fast mode unavailable logged 4 times per request. Rolling back to v2.1.140 fixes immediately."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code slow first byte timeout"
  - "Claude Code streaming stall recovery"
updated: "2026-05-14"
published_at: "2026-05-14T10:13:19.561Z"
updated_at: "2026-05-14T10:13:19.561Z"
---

## What this error means

`Claude Code: sdk_stream_ended_no_result had_error: true` is a Claude Code failure pattern reported for developers trying to fix claude code streaming stalls and no result after update. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

v2.1.141 regression. Slow first byte (~30s), streaming stall (~50s gap), sdk_stream_ended_no_result with had_error: true. Fast mode unavailable logged 4 times per request. Rolling back to v2.1.140 fixes immediately.

## Common causes

- After Claude Code auto-updated to v2.1.141, all prompts fail with streaming stalls (50s+ gaps) followed by sdk_stream_ended_no_result. Rolling back to v2.1.140 resolves immediately. Affects all prompts, not just long sessions.
- v2.1.141 regression. Slow first byte (~30s), streaming stall (~50s gap), sdk_stream_ended_no_result with had_error: true. Fast mode unavailable logged 4 times per request. Rolling back to v2.1.140 fixes immediately.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code: sdk_stream_ended_no_result had_error: true`.
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

- https://github.com/anthropics/claude-code/issues/58989

Evidence note: v2.1.141 regression. Slow first byte (~30s), streaming stall (~50s gap), sdk_stream_ended_no_result with had_error: true. Fast mode unavailable logged 4 times per request. Rolling back to v2.1.140 fixes immediately.

## Related errors

- Claude Code slow first byte timeout
- Claude Code streaming stall recovery

## FAQ

### What should I check first?

Start with the exact `Claude Code: sdk_stream_ended_no_result had_error: true` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code: sdk_stream_ended_no_result had_error: true`.
