---
title: "Claude Code Memory Leak — MCP Child Processes Not Terminated on Session Close, Accumulating GBs of RAM"
description: "Fix Claude Code MCP processes consuming all RAM after closing sessions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Closed Claude Code sessions leave disclaimer + MCP child processes alive, accumulating GBs of RAM over a day"
common_causes:
  - "Claude Code desktop app leaves disclaimer launcher and MCP server child processes running after closing session windows. After a day of normal usage: 20 disclaimer processes, 60+ npm mcp processes, ~3.1 GB RAM consumed. Users search for how to stop the memory leak."
  - "Confirmed: 20 disclaimer processes, 60 npm exec mcp children, ~3.1 GB RAM after 1 day of normal usage on macOS. Processes parented to Claude.app, survive window close."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server zombie processes"
  - "Claude Code high RAM usage"
  - "Claude Code process cleanup"
updated: "2026-05-14"
published_at: "2026-05-14T04:13:18.741Z"
updated_at: "2026-05-14T04:13:18.741Z"
---

## What this error means

`Closed Claude Code sessions leave disclaimer + MCP child processes alive, accumulating GBs of RAM over a day` is a Claude Code failure pattern reported for developers trying to fix claude code mcp processes consuming all ram after closing sessions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Confirmed: 20 disclaimer processes, 60 npm exec mcp children, ~3.1 GB RAM after 1 day of normal usage on macOS. Processes parented to Claude.app, survive window close.

## Common causes

- Claude Code desktop app leaves disclaimer launcher and MCP server child processes running after closing session windows. After a day of normal usage: 20 disclaimer processes, 60+ npm mcp processes, ~3.1 GB RAM consumed. Users search for how to stop the memory leak.
- Confirmed: 20 disclaimer processes, 60 npm exec mcp children, ~3.1 GB RAM after 1 day of normal usage on macOS. Processes parented to Claude.app, survive window close.

## Quick fixes

1. Confirm the exact error signature matches `Closed Claude Code sessions leave disclaimer + MCP child processes alive, accumulating GBs of RAM over a day`.
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

- https://github.com/anthropics/claude-code/issues/58915

Evidence note: Confirmed: 20 disclaimer processes, 60 npm exec mcp children, ~3.1 GB RAM after 1 day of normal usage on macOS. Processes parented to Claude.app, survive window close.

## Related errors

- Claude Code MCP server zombie processes
- Claude Code high RAM usage
- Claude Code process cleanup

## FAQ

### What should I check first?

Start with the exact `Closed Claude Code sessions leave disclaimer + MCP child processes alive, accumulating GBs of RAM over a day` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Closed Claude Code sessions leave disclaimer + MCP child processes alive, accumulating GBs of RAM over a day`.
