---
title: "Claude Code Disabled Plugins Still Spawn MCP Servers and Open Browser Tabs"
description: "Fix Claude Code disabled marketplace plugins still spawning MCP servers despite enabledPlugins set to false Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code disabled plugins still spawn MCP servers and open browser tabs"
common_causes:
  - "Disabling marketplace plugins (nimble/wix/serena) in Claude Code settings.json doesn't stop them from spawning MCP servers and opening browser tabs — browser pollution and unwanted network activity"
  - "Setting enabledPlugins['nimble@claude-plugins-official']: false in ~/.claude/settings.json doesn't prevent MCP server spawning. Browser tabs accumulate without consent. Privacy and performance impact for paid users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP plugin management"
  - "Claude Code unwanted browser tabs"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`Claude Code disabled plugins still spawn MCP servers and open browser tabs` is a Claude Code failure pattern reported for developers trying to fix claude code disabled marketplace plugins still spawning mcp servers despite enabledplugins set to false. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Setting enabledPlugins['nimble@claude-plugins-official']: false in ~/.claude/settings.json doesn't prevent MCP server spawning. Browser tabs accumulate without consent. Privacy and performance impact for paid users.

## Common causes

- Disabling marketplace plugins (nimble/wix/serena) in Claude Code settings.json doesn't stop them from spawning MCP servers and opening browser tabs — browser pollution and unwanted network activity
- Setting enabledPlugins['nimble@claude-plugins-official']: false in ~/.claude/settings.json doesn't prevent MCP server spawning. Browser tabs accumulate without consent. Privacy and performance impact for paid users.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code disabled plugins still spawn MCP servers and open browser tabs`.
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

- https://github.com/anthropics/claude-code/issues/58806

Evidence note: Setting enabledPlugins['nimble@claude-plugins-official']: false in ~/.claude/settings.json doesn't prevent MCP server spawning. Browser tabs accumulate without consent. Privacy and performance impact for paid users.

## Related errors

- Claude Code MCP plugin management
- Claude Code unwanted browser tabs

## FAQ

### What should I check first?

Start with the exact `Claude Code disabled plugins still spawn MCP servers and open browser tabs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code disabled plugins still spawn MCP servers and open browser tabs`.
