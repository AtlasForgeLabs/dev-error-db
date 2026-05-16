---
title: "Claude Code Plugin Hooks Duplicate Load Error in /doctor"
description: "Fix Claude Code plugin duplicate hook load error — resolve /doctor hook warning for plugins Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Plugin hook loaded twice — .claude-plugin/plugin.json declares \"hooks\": \"./hooks/hooks.json\" causing duplicate-load error in /doctor"
common_causes:
  - "Issue #3026 on oh-my-claudecode: plugin.json v1.10.3 declares explicit hooks path, but Claude Code auto-loads hooks/hooks.json already, causing duplicate load rejection in /doctor. Category mapped to AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T08:13:24.995Z"
updated_at: "2026-05-16T08:13:24.995Z"
---

## What this error means

`Plugin hook loaded twice — .claude-plugin/plugin.json declares "hooks": "./hooks/hooks.json" causing duplicate-load error in /doctor` is a Claude Code failure pattern reported for developers trying to fix claude code plugin duplicate hook load error — resolve /doctor hook warning for plugins. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3026 on oh-my-claudecode: plugin.json v1.10.3 declares explicit hooks path, but Claude Code auto-loads hooks/hooks.json already, causing duplicate load rejection in /doctor. Category mapped to AI Coding Tools.

## Common causes

- Issue #3026 on oh-my-claudecode: plugin.json v1.10.3 declares explicit hooks path, but Claude Code auto-loads hooks/hooks.json already, causing duplicate load rejection in /doctor. Category mapped to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Plugin hook loaded twice — .claude-plugin/plugin.json declares "hooks": "./hooks/hooks.json" causing duplicate-load error in /doctor`.
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

- https://github.com/Yeachan-Heo/oh-my-claudecode/issues/3026

Evidence note: Issue #3026 on oh-my-claudecode: plugin.json v1.10.3 declares explicit hooks path, but Claude Code auto-loads hooks/hooks.json already, causing duplicate load rejection in /doctor. Category mapped to AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Plugin hook loaded twice — .claude-plugin/plugin.json declares "hooks": "./hooks/hooks.json" causing duplicate-load error in /doctor` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Plugin hook loaded twice — .claude-plugin/plugin.json declares "hooks": "./hooks/hooks.json" causing duplicate-load error in /doctor`.
