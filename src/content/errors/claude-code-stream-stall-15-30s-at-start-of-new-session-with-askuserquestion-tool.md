---
title: "Claude Code Stream Stall 15-30 Seconds at Session Start When Using AskUserQuestion Tool"
description: "Fix Claude Code VS Code extension stream freezing for 15-30 seconds at session start with AskUserQuestion tool Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Stream stall ~15-30s at start of new session with AskUserQuestion tool"
common_causes:
  - "The stream freezes at the start of a new session when the model invokes AskUserQuestion tool, causing a 15-30 second delay before any response appears. This affects user experience in the VS Code extension with claude-opus-4-7 model."
  - "Open issue with 'has repro' label. Specific to VS Code extension with claude-opus-4-7[1m] model. Stream freezes for 15-30s when AskUserQuestion tool is invoked at session start. Clear reproduction steps."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code SSE streaming hangs indefinitely"
  - "Claude Code Unhandled case [object Object]"
updated: "2026-05-14"
published_at: "2026-05-14T15:13:20.163Z"
updated_at: "2026-05-14T15:13:20.163Z"
---

## What this error means

`Stream stall ~15-30s at start of new session with AskUserQuestion tool` is a Claude Code failure pattern reported for developers trying to fix claude code vs code extension stream freezing for 15-30 seconds at session start with askuserquestion tool. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue with 'has repro' label. Specific to VS Code extension with claude-opus-4-7[1m] model. Stream freezes for 15-30s when AskUserQuestion tool is invoked at session start. Clear reproduction steps.

## Common causes

- The stream freezes at the start of a new session when the model invokes AskUserQuestion tool, causing a 15-30 second delay before any response appears. This affects user experience in the VS Code extension with claude-opus-4-7 model.
- Open issue with 'has repro' label. Specific to VS Code extension with claude-opus-4-7[1m] model. Stream freezes for 15-30s when AskUserQuestion tool is invoked at session start. Clear reproduction steps.

## Quick fixes

1. Confirm the exact error signature matches `Stream stall ~15-30s at start of new session with AskUserQuestion tool`.
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

- https://github.com/anthropics/claude-code/issues/59043

Evidence note: Open issue with 'has repro' label. Specific to VS Code extension with claude-opus-4-7[1m] model. Stream freezes for 15-30s when AskUserQuestion tool is invoked at session start. Clear reproduction steps.

## Related errors

- Claude Code SSE streaming hangs indefinitely
- Claude Code Unhandled case [object Object]

## FAQ

### What should I check first?

Start with the exact `Stream stall ~15-30s at start of new session with AskUserQuestion tool` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Stream stall ~15-30s at start of new session with AskUserQuestion tool`.
