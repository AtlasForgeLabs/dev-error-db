---
title: "Fix Claude Code Plugin Install EJSONPARSE Error from Corrupted Cache File"
description: "Fix EJSONPARSE error when installing or updating Claude Code plugins Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "EJSONPARSE: Unexpected non-whitespace character after JSON at position (Claude Code plugin cache)"
common_causes:
  - "Claude Code plugin install/update writes ~/.claude/plugins/npm-cache/package.json without truncating, leaving trailing bytes from previous content. Subsequent operations fail with EJSONPARSE, locking users out of plugin management."
  - "File write bug: package.json cache file not truncated before write, causing JSON parse errors. Users must manually delete the file to recover. Affects all plugin install/update operations."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code plugin install fails"
  - "npm cache corruption Claude Code"
updated: "2026-05-14"
published_at: "2026-05-14T06:13:19.019Z"
updated_at: "2026-05-14T06:13:19.019Z"
---

## What this error means

`EJSONPARSE: Unexpected non-whitespace character after JSON at position (Claude Code plugin cache)` is a Claude Code failure pattern reported for developers trying to fix ejsonparse error when installing or updating claude code plugins. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

File write bug: package.json cache file not truncated before write, causing JSON parse errors. Users must manually delete the file to recover. Affects all plugin install/update operations.

## Common causes

- Claude Code plugin install/update writes ~/.claude/plugins/npm-cache/package.json without truncating, leaving trailing bytes from previous content. Subsequent operations fail with EJSONPARSE, locking users out of plugin management.
- File write bug: package.json cache file not truncated before write, causing JSON parse errors. Users must manually delete the file to recover. Affects all plugin install/update operations.

## Quick fixes

1. Confirm the exact error signature matches `EJSONPARSE: Unexpected non-whitespace character after JSON at position (Claude Code plugin cache)`.
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

- https://github.com/anthropics/claude-code/issues/58935

Evidence note: File write bug: package.json cache file not truncated before write, causing JSON parse errors. Users must manually delete the file to recover. Affects all plugin install/update operations.

## Related errors

- Claude Code plugin install fails
- npm cache corruption Claude Code

## FAQ

### What should I check first?

Start with the exact `EJSONPARSE: Unexpected non-whitespace character after JSON at position (Claude Code plugin cache)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `EJSONPARSE: Unexpected non-whitespace character after JSON at position (Claude Code plugin cache)`.
