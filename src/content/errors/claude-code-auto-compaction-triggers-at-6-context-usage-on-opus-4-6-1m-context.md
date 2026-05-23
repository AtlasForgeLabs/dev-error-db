---
title: "Claude Code auto-compaction triggers at only ~6% of 1M context window on Opus 4.6"
description: "Compaction activates prematurely at 6% instead of near 90%, severely degrading effective context window for 1M-capable models — need to understand if this is expected behavior or a bug and how to adjust threshold Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Auto-compaction triggers at ~6% context usage on Opus 4.6 (1M context)"
common_causes:
  - "Found on anthropics/claude-code issue #42375 (open, Apr 2 2026, 9 comments). Tagged area:core, bug, has repro, regression. Affects max-context users who pay premium for 1M windows but get ~60k effective tokens before compaction fires."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T19:39:51.246Z"
updated_at: "2026-05-23T19:39:51.246Z"
---

## What this error means

`Auto-compaction triggers at ~6% context usage on Opus 4.6 (1M context)` is a Claude Code failure pattern reported for developers trying to compaction activates prematurely at 6% instead of near 90%, severely degrading effective context window for 1m-capable models — need to understand if this is expected behavior or a bug and how to adjust threshold. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on anthropics/claude-code issue #42375 (open, Apr 2 2026, 9 comments). Tagged area:core, bug, has repro, regression. Affects max-context users who pay premium for 1M windows but get ~60k effective tokens before compaction fires.

## Common causes

- Found on anthropics/claude-code issue #42375 (open, Apr 2 2026, 9 comments). Tagged area:core, bug, has repro, regression. Affects max-context users who pay premium for 1M windows but get ~60k effective tokens before compaction fires.

## Quick fixes

1. Confirm the exact error signature matches `Auto-compaction triggers at ~6% context usage on Opus 4.6 (1M context)`.
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

- https://github.com/anthropics/claude-code/issues/42375

Evidence note: Found on anthropics/claude-code issue #42375 (open, Apr 2 2026, 9 comments). Tagged area:core, bug, has repro, regression. Affects max-context users who pay premium for 1M windows but get ~60k effective tokens before compaction fires.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Auto-compaction triggers at ~6% context usage on Opus 4.6 (1M context)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Auto-compaction triggers at ~6% context usage on Opus 4.6 (1M context)`.
