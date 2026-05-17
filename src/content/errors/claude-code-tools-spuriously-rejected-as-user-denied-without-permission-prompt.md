---
title: "Claude Code macOS Pencil MCP tools spuriously rejected as 'user denied' without permission prompt"
description: "Fix MCP tools in Claude Code returning user denied error even when permissions.allow contains correct server entry, no permission prompt appears Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "tools spuriously rejected as 'user denied' without permission prompt"
common_causes:
  - "Issue #53314 filed 3 weeks ago shows mcp__pencil__get_editor_state returns literal 'user denied' response despite settings.json having permissions.allow with 'mcp__pencil' entry and no deny entry. Affects macOS specifically with v2.1.120. Very specific signature with clear reproduction steps."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T11:35:57.384Z"
updated_at: "2026-05-17T11:35:57.384Z"
---

## What this error means

`tools spuriously rejected as 'user denied' without permission prompt` is a Claude Code failure pattern reported for developers trying to fix mcp tools in claude code returning user denied error even when permissions.allow contains correct server entry, no permission prompt appears. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #53314 filed 3 weeks ago shows mcp__pencil__get_editor_state returns literal 'user denied' response despite settings.json having permissions.allow with 'mcp__pencil' entry and no deny entry. Affects macOS specifically with v2.1.120. Very specific signature with clear reproduction steps.

## Common causes

- Issue #53314 filed 3 weeks ago shows mcp__pencil__get_editor_state returns literal 'user denied' response despite settings.json having permissions.allow with 'mcp__pencil' entry and no deny entry. Affects macOS specifically with v2.1.120. Very specific signature with clear reproduction steps.

## Quick fixes

1. Confirm the exact error signature matches `tools spuriously rejected as 'user denied' without permission prompt`.
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

- https://github.com/anthropics/claude-code/issues/53314

Evidence note: Issue #53314 filed 3 weeks ago shows mcp__pencil__get_editor_state returns literal 'user denied' response despite settings.json having permissions.allow with 'mcp__pencil' entry and no deny entry. Affects macOS specifically with v2.1.120. Very specific signature with clear reproduction steps.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `tools spuriously rejected as 'user denied' without permission prompt` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `tools spuriously rejected as 'user denied' without permission prompt`.
