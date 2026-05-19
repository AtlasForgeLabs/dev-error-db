---
title: "Slack MCP tools silently deactivate mid-session (~1h uptime) while still reporting Connected"
description: "Fix Slack MCP tools deactivating silently after ~1 hour while MCP status still shows Connected — developers waste time debugging broken integrations that appear healthy Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Slack MCP tools silently deactivate mid-session (~1h uptime); claude mcp list still reports Connected"
common_causes:
  - "GitHub Issue anthropics/claude-code#60428 reports Slack MCP integration failing silently after about 1 hour, with no indication of failure until the user tries to use the tool. The 'Connected' status is misleading. High commercial value because it affects enterprise users who rely on Claude Code + Slack workflow automation."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T12:37:16.266Z"
updated_at: "2026-05-19T12:37:16.266Z"
---

## What this error means

`Slack MCP tools silently deactivate mid-session (~1h uptime); claude mcp list still reports Connected` is a Claude Code failure pattern reported for developers trying to fix slack mcp tools deactivating silently after ~1 hour while mcp status still shows connected — developers waste time debugging broken integrations that appear healthy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue anthropics/claude-code#60428 reports Slack MCP integration failing silently after about 1 hour, with no indication of failure until the user tries to use the tool. The 'Connected' status is misleading. High commercial value because it affects enterprise users who rely on Claude Code + Slack workflow automation.

## Common causes

- GitHub Issue anthropics/claude-code#60428 reports Slack MCP integration failing silently after about 1 hour, with no indication of failure until the user tries to use the tool. The 'Connected' status is misleading. High commercial value because it affects enterprise users who rely on Claude Code + Slack workflow automation.

## Quick fixes

1. Confirm the exact error signature matches `Slack MCP tools silently deactivate mid-session (~1h uptime); claude mcp list still reports Connected`.
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

- https://github.com/anthropics/claude-code/issues/60428

Evidence note: GitHub Issue anthropics/claude-code#60428 reports Slack MCP integration failing silently after about 1 hour, with no indication of failure until the user tries to use the tool. The 'Connected' status is misleading. High commercial value because it affects enterprise users who rely on Claude Code + Slack workflow automation.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Slack MCP tools silently deactivate mid-session (~1h uptime); claude mcp list still reports Connected` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Slack MCP tools silently deactivate mid-session (~1h uptime); claude mcp list still reports Connected`.
