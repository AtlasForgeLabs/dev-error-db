---
title: "Claude Code Upgrade Breaks Chrome Extension MCP Tools — Advertised But Not Callable After Upgrade to Claude 4.8"
description: "Fix broken Claude-in-Chrome MCP tools that show up in tool list but fail to execute after upgrading to Claude 4.8 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] mcp__claude-in-chrome__* tools are advertised but not callable after upgrade to Claude 4.8"
common_causes:
  - "GitHub issue #63639 opened ~10h ago on anthropics/claude-code. Labeled area:chrome, area:mcp, bug. Regression introduced by version 4.8 upgrade — breaks existing Chrome integration used by many paid users. Directly caused by update, affects deployment/reliability experience. Maps to AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T23:43:27.663Z"
updated_at: "2026-05-29T23:43:27.663Z"
---

## What this error means

`[BUG] mcp__claude-in-chrome__* tools are advertised but not callable after upgrade to Claude 4.8` is a Claude Code failure pattern reported for developers trying to fix broken claude-in-chrome mcp tools that show up in tool list but fail to execute after upgrading to claude 4.8. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #63639 opened ~10h ago on anthropics/claude-code. Labeled area:chrome, area:mcp, bug. Regression introduced by version 4.8 upgrade — breaks existing Chrome integration used by many paid users. Directly caused by update, affects deployment/reliability experience. Maps to AI Coding Tools.

## Common causes

- GitHub issue #63639 opened ~10h ago on anthropics/claude-code. Labeled area:chrome, area:mcp, bug. Regression introduced by version 4.8 upgrade — breaks existing Chrome integration used by many paid users. Directly caused by update, affects deployment/reliability experience. Maps to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] mcp__claude-in-chrome__* tools are advertised but not callable after upgrade to Claude 4.8`.
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

- https://github.com/anthropics/claude-code/issues/63639

Evidence note: GitHub issue #63639 opened ~10h ago on anthropics/claude-code. Labeled area:chrome, area:mcp, bug. Regression introduced by version 4.8 upgrade — breaks existing Chrome integration used by many paid users. Directly caused by update, affects deployment/reliability experience. Maps to AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] mcp__claude-in-chrome__* tools are advertised but not callable after upgrade to Claude 4.8` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] mcp__claude-in-chrome__* tools are advertised but not callable after upgrade to Claude 4.8`.
