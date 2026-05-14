---
title: "Claude Code Agent Tool Crashes with K.length Error When PreToolUse Hook Returns Partial updatedInput"
description: "Fix Claude Code Agent tool crash when PreToolUse hook returns updatedInput with only model field Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "TypeError: undefined is not an object (evaluating 'K.length') — Agent tool crash with PreToolUse hook returning partial updatedInput"
common_causes:
  - "PreToolUse hooks are a key Claude Code customization feature. When a hook returns partial updatedInput (e.g. only {model: 'opus'}), the Agent dispatcher crashes with an uncaught minified runtime exception instead of a clear error."
  - "Claude Code v2.1.141 PreToolUse hook with matcher 'Agent' returning updatedInput: {model: 'opus'} causes Agent dispatch crash. Error is TypeError: undefined is not an object (evaluating 'K.length'). Removing hook restores functionality."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code hook configuration"
  - "Claude Code Agent tool settings"
  - "Claude Code ZodError validation"
updated: "2026-05-14"
published_at: "2026-05-14T08:13:19.269Z"
updated_at: "2026-05-14T08:13:19.269Z"
---

## What this error means

`TypeError: undefined is not an object (evaluating 'K.length') — Agent tool crash with PreToolUse hook returning partial updatedInput` is a Claude Code failure pattern reported for developers trying to fix claude code agent tool crash when pretooluse hook returns updatedinput with only model field. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code v2.1.141 PreToolUse hook with matcher 'Agent' returning updatedInput: {model: 'opus'} causes Agent dispatch crash. Error is TypeError: undefined is not an object (evaluating 'K.length'). Removing hook restores functionality.

## Common causes

- PreToolUse hooks are a key Claude Code customization feature. When a hook returns partial updatedInput (e.g. only {model: 'opus'}), the Agent dispatcher crashes with an uncaught minified runtime exception instead of a clear error.
- Claude Code v2.1.141 PreToolUse hook with matcher 'Agent' returning updatedInput: {model: 'opus'} causes Agent dispatch crash. Error is TypeError: undefined is not an object (evaluating 'K.length'). Removing hook restores functionality.

## Quick fixes

1. Confirm the exact error signature matches `TypeError: undefined is not an object (evaluating 'K.length') — Agent tool crash with PreToolUse hook returning partial updatedInput`.
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

- https://github.com/anthropics/claude-code/issues/58967

Evidence note: Claude Code v2.1.141 PreToolUse hook with matcher 'Agent' returning updatedInput: {model: 'opus'} causes Agent dispatch crash. Error is TypeError: undefined is not an object (evaluating 'K.length'). Removing hook restores functionality.

## Related errors

- Claude Code hook configuration
- Claude Code Agent tool settings
- Claude Code ZodError validation

## FAQ

### What should I check first?

Start with the exact `TypeError: undefined is not an object (evaluating 'K.length') — Agent tool crash with PreToolUse hook returning partial updatedInput` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TypeError: undefined is not an object (evaluating 'K.length') — Agent tool crash with PreToolUse hook returning partial updatedInput`.
