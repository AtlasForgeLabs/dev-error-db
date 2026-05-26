---
title: "Claude Code tool-call opening tag gets stuck malformed causing unrecoverable session"
description: "Recover from Claude Code tool-call parsing corruption without losing work context — find workaround for stuck session caused by malformed antml:invoke tags Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Tool-call opening tag gets stuck on a malformed form (truncated, abbreviated, wrong namespace, full-width bracket) — every subsequent tool call remains malformed, harness fails to parse, work halts until new session started"
common_causes:
  - "GitHub issue #62407 on anthropics/claude-code, created 2026-05-26. Critical session-corruption bug: once model emits malformed tool-call opening tag, entire session becomes unrecoverable. Only fix is starting new session (data loss). Labels: bug, duplicate, platform:windows, area:model, area:core. Extremely high commercial value for paid Claude Code users running long automated sessions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T08:43:16.345Z"
updated_at: "2026-05-26T08:43:16.345Z"
---

## What this error means

`Tool-call opening tag gets stuck on a malformed form (truncated, abbreviated, wrong namespace, full-width bracket) — every subsequent tool call remains malformed, harness fails to parse, work halts until new session started` is a Claude Code failure pattern reported for developers trying to recover from claude code tool-call parsing corruption without losing work context — find workaround for stuck session caused by malformed antml:invoke tags. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #62407 on anthropics/claude-code, created 2026-05-26. Critical session-corruption bug: once model emits malformed tool-call opening tag, entire session becomes unrecoverable. Only fix is starting new session (data loss). Labels: bug, duplicate, platform:windows, area:model, area:core. Extremely high commercial value for paid Claude Code users running long automated sessions.

## Common causes

- GitHub issue #62407 on anthropics/claude-code, created 2026-05-26. Critical session-corruption bug: once model emits malformed tool-call opening tag, entire session becomes unrecoverable. Only fix is starting new session (data loss). Labels: bug, duplicate, platform:windows, area:model, area:core. Extremely high commercial value for paid Claude Code users running long automated sessions.

## Quick fixes

1. Confirm the exact error signature matches `Tool-call opening tag gets stuck on a malformed form (truncated, abbreviated, wrong namespace, full-width bracket) — every subsequent tool call remains malformed, harness fails to parse, work halts until new session started`.
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

- https://github.com/anthropics/claude-code/issues/62407

Evidence note: GitHub issue #62407 on anthropics/claude-code, created 2026-05-26. Critical session-corruption bug: once model emits malformed tool-call opening tag, entire session becomes unrecoverable. Only fix is starting new session (data loss). Labels: bug, duplicate, platform:windows, area:model, area:core. Extremely high commercial value for paid Claude Code users running long automated sessions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Tool-call opening tag gets stuck on a malformed form (truncated, abbreviated, wrong namespace, full-width bracket) — every subsequent tool call remains malformed, harness fails to parse, work halts until new session started` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Tool-call opening tag gets stuck on a malformed form (truncated, abbreviated, wrong namespace, full-width bracket) — every subsequent tool call remains malformed, harness fails to parse, work halts until new session started`.
