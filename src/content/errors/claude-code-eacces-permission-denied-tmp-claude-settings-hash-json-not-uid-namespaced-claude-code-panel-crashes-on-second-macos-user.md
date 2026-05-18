---
title: "Claude Desktop settings not UID-namespaced — multi-user macOS hits EACCES crash"
description: "Fix Claude Desktop settings file collision causing EACCES crashes in multi-user macOS environments due to missing UID namespacing Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "EACCES permission denied; /tmp/claude-settings-<hash>.json not UID-namespaced; Claude Code panel crashes on second macOS user"
common_causes:
  - "GitHub Issue #60122 in anthropics/claude-code, opened May 18 2026. Claude Desktop stores shared settings in /tmp without UID namespace, so second macOS user on same machine gets EACCES and the Claude Code IDE panel crashes. Category: AI Coding Tools (desktop/auth area). Multi-user environment pain point."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T11:37:12.913Z"
updated_at: "2026-05-18T11:37:12.913Z"
---

## What this error means

`EACCES permission denied; /tmp/claude-settings-<hash>.json not UID-namespaced; Claude Code panel crashes on second macOS user` is a Claude Code failure pattern reported for developers trying to fix claude desktop settings file collision causing eacces crashes in multi-user macos environments due to missing uid namespacing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60122 in anthropics/claude-code, opened May 18 2026. Claude Desktop stores shared settings in /tmp without UID namespace, so second macOS user on same machine gets EACCES and the Claude Code IDE panel crashes. Category: AI Coding Tools (desktop/auth area). Multi-user environment pain point.

## Common causes

- GitHub Issue #60122 in anthropics/claude-code, opened May 18 2026. Claude Desktop stores shared settings in /tmp without UID namespace, so second macOS user on same machine gets EACCES and the Claude Code IDE panel crashes. Category: AI Coding Tools (desktop/auth area). Multi-user environment pain point.

## Quick fixes

1. Confirm the exact error signature matches `EACCES permission denied; /tmp/claude-settings-<hash>.json not UID-namespaced; Claude Code panel crashes on second macOS user`.
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

- https://github.com/anthropics/claude-code/issues/60122

Evidence note: GitHub Issue #60122 in anthropics/claude-code, opened May 18 2026. Claude Desktop stores shared settings in /tmp without UID namespace, so second macOS user on same machine gets EACCES and the Claude Code IDE panel crashes. Category: AI Coding Tools (desktop/auth area). Multi-user environment pain point.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `EACCES permission denied; /tmp/claude-settings-<hash>.json not UID-namespaced; Claude Code panel crashes on second macOS user` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `EACCES permission denied; /tmp/claude-settings-<hash>.json not UID-namespaced; Claude Code panel crashes on second macOS user`.
