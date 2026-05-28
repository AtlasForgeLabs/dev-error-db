---
title: "Claude Code External MCP Servers Not Loading — Silent Failure Despite Correct Configuration"
description: "Fix external/custom MCP servers failing to load in Claude Code despite correct settings.json configuration and verified standalone server functionality Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "External MCP servers configured correctly but not loaded by Claude Code; silent failure with no error messages or logs about loading attempts; only built-in IDE tools available instead of custom MCP tools"
common_causes:
  - "GitHub issue #12086 on anthropics/claude-code reporter provides extensive debug log comparison showing MCP worked Nov 20 but stopped working Nov 22 without config changes. Confirmed regression between v2.0.49 and later versions. Multiple users affected. Category: Claude Code = AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T16:43:23.642Z"
updated_at: "2026-05-28T16:43:23.642Z"
---

## What this error means

`External MCP servers configured correctly but not loaded by Claude Code; silent failure with no error messages or logs about loading attempts; only built-in IDE tools available instead of custom MCP tools` is a Claude Code failure pattern reported for developers trying to fix external/custom mcp servers failing to load in claude code despite correct settings.json configuration and verified standalone server functionality. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #12086 on anthropics/claude-code reporter provides extensive debug log comparison showing MCP worked Nov 20 but stopped working Nov 22 without config changes. Confirmed regression between v2.0.49 and later versions. Multiple users affected. Category: Claude Code = AI Coding Tools.

## Common causes

- GitHub issue #12086 on anthropics/claude-code reporter provides extensive debug log comparison showing MCP worked Nov 20 but stopped working Nov 22 without config changes. Confirmed regression between v2.0.49 and later versions. Multiple users affected. Category: Claude Code = AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `External MCP servers configured correctly but not loaded by Claude Code; silent failure with no error messages or logs about loading attempts; only built-in IDE tools available instead of custom MCP tools`.
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

- https://github.com/anthropics/claude-code/issues/12086

Evidence note: GitHub issue #12086 on anthropics/claude-code reporter provides extensive debug log comparison showing MCP worked Nov 20 but stopped working Nov 22 without config changes. Confirmed regression between v2.0.49 and later versions. Multiple users affected. Category: Claude Code = AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `External MCP servers configured correctly but not loaded by Claude Code; silent failure with no error messages or logs about loading attempts; only built-in IDE tools available instead of custom MCP tools` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `External MCP servers configured correctly but not loaded by Claude Code; silent failure with no error messages or logs about loading attempts; only built-in IDE tools available instead of custom MCP tools`.
