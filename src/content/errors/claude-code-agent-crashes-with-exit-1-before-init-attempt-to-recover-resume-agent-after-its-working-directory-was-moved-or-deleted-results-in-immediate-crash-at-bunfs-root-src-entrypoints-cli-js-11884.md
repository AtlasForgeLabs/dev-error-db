---
title: "Claude Code agent crashes with exit 1 before init when working directory moves"
description: "Fix Claude Code agent crash when project directory is relocated or removed after agent creation prevents resuming work sessions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Agent crashes with exit 1 before init — attempt to recover/resume agent after its working directory was moved or deleted results in immediate crash at $bunfs/root/src/entrypoints/cli.js:11884"
common_causes:
  - "GitHub issue #62406 on anthropics/claude-code, created 2026-05-26 (hours ago). Clear reproduce steps: start agent, move/delete project dir, attempt recovery → crash. Labels: bug, platform:macos, area:agent-view. Direct business impact — paid Claude Code users lose productivity sessions. Not in covered-errors.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T08:43:16.345Z"
updated_at: "2026-05-26T08:43:16.345Z"
---

## What this error means

`Agent crashes with exit 1 before init — attempt to recover/resume agent after its working directory was moved or deleted results in immediate crash at $bunfs/root/src/entrypoints/cli.js:11884` is a Claude Code failure pattern reported for developers trying to fix claude code agent crash when project directory is relocated or removed after agent creation prevents resuming work sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #62406 on anthropics/claude-code, created 2026-05-26 (hours ago). Clear reproduce steps: start agent, move/delete project dir, attempt recovery → crash. Labels: bug, platform:macos, area:agent-view. Direct business impact — paid Claude Code users lose productivity sessions. Not in covered-errors.md.

## Common causes

- GitHub issue #62406 on anthropics/claude-code, created 2026-05-26 (hours ago). Clear reproduce steps: start agent, move/delete project dir, attempt recovery → crash. Labels: bug, platform:macos, area:agent-view. Direct business impact — paid Claude Code users lose productivity sessions. Not in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `Agent crashes with exit 1 before init — attempt to recover/resume agent after its working directory was moved or deleted results in immediate crash at $bunfs/root/src/entrypoints/cli.js:11884`.
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

- https://github.com/anthropics/claude-code/issues/62406

Evidence note: GitHub issue #62406 on anthropics/claude-code, created 2026-05-26 (hours ago). Clear reproduce steps: start agent, move/delete project dir, attempt recovery → crash. Labels: bug, platform:macos, area:agent-view. Direct business impact — paid Claude Code users lose productivity sessions. Not in covered-errors.md.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Agent crashes with exit 1 before init — attempt to recover/resume agent after its working directory was moved or deleted results in immediate crash at $bunfs/root/src/entrypoints/cli.js:11884` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Agent crashes with exit 1 before init — attempt to recover/resume agent after its working directory was moved or deleted results in immediate crash at $bunfs/root/src/entrypoints/cli.js:11884`.
