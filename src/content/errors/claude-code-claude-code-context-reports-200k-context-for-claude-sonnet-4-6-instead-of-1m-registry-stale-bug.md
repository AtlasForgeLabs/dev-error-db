---
title: "Claude Code Shows Wrong Context Window for Claude Sonnet 4.6 — Registry Stale Bug"
description: "Fix Claude Code /context command showing 200K instead of 1M context window for claude-sonnet-4-6 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code /context reports 200K context for claude-sonnet-4-6 instead of 1M (registry-stale bug)"
common_causes:
  - "Claude Code users paying for Max plan expect 1M context with Sonnet 4.6 (per changelog 2.1.49), but /context shows only 200K. This is a registry-stale bug previously fixed for Opus 4.7 in v2.1.117 but not for Sonnet 4.6."
  - "anthropics/claude-code issue #58710: Claude Code v2.1.140 shows /context reporting 200K for claude-sonnet-4-6 instead of expected 1M. Same registry-stale bug previously fixed for Opus 4.7. Affects Windows native build."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code wrong model context window"
  - "Claude Code model registry not updating"
updated: "2026-05-13"
published_at: "2026-05-13T15:13:17.078Z"
updated_at: "2026-05-13T15:13:17.078Z"
---

## What this error means

`Claude Code /context reports 200K context for claude-sonnet-4-6 instead of 1M (registry-stale bug)` is a Claude Code failure pattern reported for developers trying to fix claude code /context command showing 200k instead of 1m context window for claude-sonnet-4-6. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code issue #58710: Claude Code v2.1.140 shows /context reporting 200K for claude-sonnet-4-6 instead of expected 1M. Same registry-stale bug previously fixed for Opus 4.7. Affects Windows native build.

## Common causes

- Claude Code users paying for Max plan expect 1M context with Sonnet 4.6 (per changelog 2.1.49), but /context shows only 200K. This is a registry-stale bug previously fixed for Opus 4.7 in v2.1.117 but not for Sonnet 4.6.
- anthropics/claude-code issue #58710: Claude Code v2.1.140 shows /context reporting 200K for claude-sonnet-4-6 instead of expected 1M. Same registry-stale bug previously fixed for Opus 4.7. Affects Windows native build.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code /context reports 200K context for claude-sonnet-4-6 instead of 1M (registry-stale bug)`.
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

- https://github.com/anthropics/claude-code/issues/58710

Evidence note: anthropics/claude-code issue #58710: Claude Code v2.1.140 shows /context reporting 200K for claude-sonnet-4-6 instead of expected 1M. Same registry-stale bug previously fixed for Opus 4.7. Affects Windows native build.

## Related errors

- Claude Code wrong model context window
- Claude Code model registry not updating

## FAQ

### What should I check first?

Start with the exact `Claude Code /context reports 200K context for claude-sonnet-4-6 instead of 1M (registry-stale bug)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code /context reports 200K context for claude-sonnet-4-6 instead of 1M (registry-stale bug)`.
