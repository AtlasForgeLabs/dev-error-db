---
title: "Claude Code Extension ENOENT: no such file or directory on UNC network paths"
description: "Fix Claude Code VS Code extension failing to load when opening folders from UNC network paths, with ENOENT error referencing non-existent mapped drive Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "ENOENT: no such file or directory, lstat 'G:\\Grupos'"
common_causes:
  - "GitHub issue #1505 on anthropics/anthropic-sdk-python (2026-05-06): Claude Code extension 2.1.131 on Windows fails with ENOENT when opening UNC path folders. Extension attempts to resolve network paths as mapped drives, crashes on missing drive letter. Local paths work fine. Reinstall/cache clear doesn't fix. Category: AI Coding Tools (Claude Code extension error)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T01:13:24.123Z"
updated_at: "2026-05-16T01:13:24.123Z"
---

## What this error means

`ENOENT: no such file or directory, lstat 'G:\Grupos'` is a Claude Code failure pattern reported for developers trying to fix claude code vs code extension failing to load when opening folders from unc network paths, with enoent error referencing non-existent mapped drive. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1505 on anthropics/anthropic-sdk-python (2026-05-06): Claude Code extension 2.1.131 on Windows fails with ENOENT when opening UNC path folders. Extension attempts to resolve network paths as mapped drives, crashes on missing drive letter. Local paths work fine. Reinstall/cache clear doesn't fix. Category: AI Coding Tools (Claude Code extension error).

## Common causes

- GitHub issue #1505 on anthropics/anthropic-sdk-python (2026-05-06): Claude Code extension 2.1.131 on Windows fails with ENOENT when opening UNC path folders. Extension attempts to resolve network paths as mapped drives, crashes on missing drive letter. Local paths work fine. Reinstall/cache clear doesn't fix. Category: AI Coding Tools (Claude Code extension error).

## Quick fixes

1. Confirm the exact error signature matches `ENOENT: no such file or directory, lstat 'G:\Grupos'`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1505

Evidence note: GitHub issue #1505 on anthropics/anthropic-sdk-python (2026-05-06): Claude Code extension 2.1.131 on Windows fails with ENOENT when opening UNC path folders. Extension attempts to resolve network paths as mapped drives, crashes on missing drive letter. Local paths work fine. Reinstall/cache clear doesn't fix. Category: AI Coding Tools (Claude Code extension error).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `ENOENT: no such file or directory, lstat 'G:\Grupos'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ENOENT: no such file or directory, lstat 'G:\Grupos'`.
