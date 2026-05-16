---
title: "Claude Code /clear Corrupts Message History — Orphaned tool_result Causes 400 API Error"
description: "Fix Claude Code /clear command that corrupts session history and triggers API 400 errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "/clear corrupts message history — orphaned tool_result causes 400 API error"
common_causes:
  - "GitHub claude-code#59554 (2026-05-15). The /clear command leaves orphaned tool_result blocks in message history, causing subsequent API calls to fail with 400. Category mapping: Claude Code → AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T07:13:24.884Z"
updated_at: "2026-05-16T07:13:24.884Z"
---

## What this error means

`/clear corrupts message history — orphaned tool_result causes 400 API error` is a Claude Code failure pattern reported for developers trying to fix claude code /clear command that corrupts session history and triggers api 400 errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub claude-code#59554 (2026-05-15). The /clear command leaves orphaned tool_result blocks in message history, causing subsequent API calls to fail with 400. Category mapping: Claude Code → AI Coding Tools.

## Common causes

- GitHub claude-code#59554 (2026-05-15). The /clear command leaves orphaned tool_result blocks in message history, causing subsequent API calls to fail with 400. Category mapping: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `/clear corrupts message history — orphaned tool_result causes 400 API error`.
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

- https://github.com/anthropics/claude-code/issues/59554

Evidence note: GitHub claude-code#59554 (2026-05-15). The /clear command leaves orphaned tool_result blocks in message history, causing subsequent API calls to fail with 400. Category mapping: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `/clear corrupts message history — orphaned tool_result causes 400 API error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/clear corrupts message history — orphaned tool_result causes 400 API error`.
