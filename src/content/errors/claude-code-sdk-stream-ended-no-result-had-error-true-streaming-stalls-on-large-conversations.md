---
title: "Claude Code 2.1.141 regression: streaming stalls with sdk_stream_ended_no_result had_error:true"
description: "Fix Claude Code streaming failure where response stalls and returns error on large conversations after upgrading to version 2.1.141 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "sdk_stream_ended_no_result had_error:true — streaming stalls on large conversations"
common_causes:
  - "Version regression breaks core functionality for paying Claude Max subscribers. Users upgrading from 2.1.140 to 2.1.141 hit streaming stalls on large conversations, blocking their workflow entirely."
  - "Regression in Claude Code v2.1.141 where VS Code extension streaming stalls on large conversations with sdk_stream_ended_no_result had_error:true. Version 2.1.140 works fine. Multiple users confirmed."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code stream stall AskUserQuestion"
  - "Claude Code streaming timeout large context"
updated: "2026-05-14"
published_at: "2026-05-14T13:13:19.978Z"
updated_at: "2026-05-14T13:13:19.978Z"
---

## What this error means

`sdk_stream_ended_no_result had_error:true — streaming stalls on large conversations` is a Claude Code failure pattern reported for developers trying to fix claude code streaming failure where response stalls and returns error on large conversations after upgrading to version 2.1.141. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Regression in Claude Code v2.1.141 where VS Code extension streaming stalls on large conversations with sdk_stream_ended_no_result had_error:true. Version 2.1.140 works fine. Multiple users confirmed.

## Common causes

- Version regression breaks core functionality for paying Claude Max subscribers. Users upgrading from 2.1.140 to 2.1.141 hit streaming stalls on large conversations, blocking their workflow entirely.
- Regression in Claude Code v2.1.141 where VS Code extension streaming stalls on large conversations with sdk_stream_ended_no_result had_error:true. Version 2.1.140 works fine. Multiple users confirmed.

## Quick fixes

1. Confirm the exact error signature matches `sdk_stream_ended_no_result had_error:true — streaming stalls on large conversations`.
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

- https://github.com/anthropics/claude-code/issues/59042

Evidence note: Regression in Claude Code v2.1.141 where VS Code extension streaming stalls on large conversations with sdk_stream_ended_no_result had_error:true. Version 2.1.140 works fine. Multiple users confirmed.

## Related errors

- Claude Code stream stall AskUserQuestion
- Claude Code streaming timeout large context

## FAQ

### What should I check first?

Start with the exact `sdk_stream_ended_no_result had_error:true — streaming stalls on large conversations` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `sdk_stream_ended_no_result had_error:true — streaming stalls on large conversations`.
