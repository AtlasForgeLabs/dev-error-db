---
title: "Claude Code Web Cannot Use gh CLI Commands - Permission Denied"
description: "Resolve 'Permission denied' errors when using GitHub CLI (gh) commands inside Claude Code consultant mode Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] Claude Code Web Cannot Use gh CLI Commands - Permission Denied"
common_causes:
  - "Found in anthropics/claude-code GitHub issue #11139 (Nov 6, 2025). Strategic Claude (consultant mode) receives Permission denied errors when attempting to use gh CLI commands, while local Claude Code works fine. Same PAT authentication used. High commercial value as it blocks CI/team workflows with paid Claude Code Pro/Max subscriptions. Category mapping: Claude Code specific bug → Cursor class per SKILL.md approved categories (AI Coding Tools covers Cursor/Claude Code/Copilot)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T19:37:10.847Z"
updated_at: "2026-05-17T19:37:10.847Z"
---

## What this error means

`[BUG] Claude Code Web Cannot Use gh CLI Commands - Permission Denied` is a Claude Code failure pattern reported for developers trying to resolve 'permission denied' errors when using github cli (gh) commands inside claude code consultant mode. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in anthropics/claude-code GitHub issue #11139 (Nov 6, 2025). Strategic Claude (consultant mode) receives Permission denied errors when attempting to use gh CLI commands, while local Claude Code works fine. Same PAT authentication used. High commercial value as it blocks CI/team workflows with paid Claude Code Pro/Max subscriptions. Category mapping: Claude Code specific bug → Cursor class per SKILL.md approved categories (AI Coding Tools covers Cursor/Claude Code/Copilot).

## Common causes

- Found in anthropics/claude-code GitHub issue #11139 (Nov 6, 2025). Strategic Claude (consultant mode) receives Permission denied errors when attempting to use gh CLI commands, while local Claude Code works fine. Same PAT authentication used. High commercial value as it blocks CI/team workflows with paid Claude Code Pro/Max subscriptions. Category mapping: Claude Code specific bug → Cursor class per SKILL.md approved categories (AI Coding Tools covers Cursor/Claude Code/Copilot).

## Quick fixes

1. Confirm the exact error signature matches `[BUG] Claude Code Web Cannot Use gh CLI Commands - Permission Denied`.
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

- https://github.com/anthropics/claude-code/issues/11139

Evidence note: Found in anthropics/claude-code GitHub issue #11139 (Nov 6, 2025). Strategic Claude (consultant mode) receives Permission denied errors when attempting to use gh CLI commands, while local Claude Code works fine. Same PAT authentication used. High commercial value as it blocks CI/team workflows with paid Claude Code Pro/Max subscriptions. Category mapping: Claude Code specific bug → Cursor class per SKILL.md approved categories (AI Coding Tools covers Cursor/Claude Code/Copilot).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] Claude Code Web Cannot Use gh CLI Commands - Permission Denied` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] Claude Code Web Cannot Use gh CLI Commands - Permission Denied`.
