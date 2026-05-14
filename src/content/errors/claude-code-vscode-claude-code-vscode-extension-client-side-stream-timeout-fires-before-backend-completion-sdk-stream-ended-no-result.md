---
title: "Claude Code VSCode Extension Stream Timeout Causes Silent Success on Long Generations"
description: "Fix Claude Code VSCode extension stream timeout killing sessions before completion Includes evidence for Claude Code / VSCode troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code / VSCode"
error_signature: "Claude Code VSCode Extension Client-Side Stream Timeout Fires Before Backend Completion: sdk_stream_ended_no_result"
common_causes:
  - "VSCode extension fires sdk_stream_ended_no_result with had_error: true while backend is still running. Large responses (>10KB) trigger premature timeout, leaving UI hung with no output."
  - "Reproduced with ~13KB embedded C# P/Invoke code in PowerShell script. Backend completed 23 seconds after client timeout. Write tool succeeded but UI showed hung state."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code model not available"
  - "Claude Code OpenAI API key not working"
updated: "2026-05-14"
published_at: "2026-05-14T20:13:20.740Z"
updated_at: "2026-05-14T20:13:20.740Z"
---

## What this error means

`Claude Code VSCode Extension Client-Side Stream Timeout Fires Before Backend Completion: sdk_stream_ended_no_result` is a Claude Code / VSCode failure pattern reported for developers trying to fix claude code vscode extension stream timeout killing sessions before completion. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reproduced with ~13KB embedded C# P/Invoke code in PowerShell script. Backend completed 23 seconds after client timeout. Write tool succeeded but UI showed hung state.

## Common causes

- VSCode extension fires sdk_stream_ended_no_result with had_error: true while backend is still running. Large responses (>10KB) trigger premature timeout, leaving UI hung with no output.
- Reproduced with ~13KB embedded C# P/Invoke code in PowerShell script. Backend completed 23 seconds after client timeout. Write tool succeeded but UI showed hung state.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code VSCode Extension Client-Side Stream Timeout Fires Before Backend Completion: sdk_stream_ended_no_result`.
2. Check the Claude Code / VSCode account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59192

Evidence note: Reproduced with ~13KB embedded C# P/Invoke code in PowerShell script. Backend completed 23 seconds after client timeout. Write tool succeeded but UI showed hung state.

## Related errors

- Claude Code model not available
- Claude Code OpenAI API key not working

## FAQ

### What should I check first?

Start with the exact `Claude Code VSCode Extension Client-Side Stream Timeout Fires Before Backend Completion: sdk_stream_ended_no_result` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code / VSCode workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code VSCode Extension Client-Side Stream Timeout Fires Before Backend Completion: sdk_stream_ended_no_result`.
