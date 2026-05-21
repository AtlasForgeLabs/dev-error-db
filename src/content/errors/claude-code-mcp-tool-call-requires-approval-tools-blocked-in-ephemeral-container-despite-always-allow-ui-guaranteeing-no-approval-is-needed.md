---
title: "Claude Code Routines MCP connector permissions broken — \"requires approval\" on every tool call (regression ~2026-05-20)"
description: "Fix Claude Code scheduled routines where MCP connector tool calls keep asking for permission even though they are set to 'Always allow', breaking enterprise automation workflows. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP tool call requires approval — tools blocked in ephemeral container despite Always Allow / UI guaranteeing no approval is needed"
common_causes:
  - "Multiple open GitHub issues (#61141, #61097, #61027, #61015) filed within last 48 hours affecting Team/Macro plans. Regression emerged ~2026-05-20. Remote/scheduled routines lose MCP permissions every run — writes to settings.json require approval, creating infinite approval loops. High commercial impact: enterprise team automation completely broken."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T13:39:44.628Z"
updated_at: "2026-05-21T13:39:44.628Z"
---

## What this error means

`MCP tool call requires approval — tools blocked in ephemeral container despite Always Allow / UI guaranteeing no approval is needed` is a Claude Code failure pattern reported for developers trying to fix claude code scheduled routines where mcp connector tool calls keep asking for permission even though they are set to 'always allow', breaking enterprise automation workflows.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple open GitHub issues (#61141, #61097, #61027, #61015) filed within last 48 hours affecting Team/Macro plans. Regression emerged ~2026-05-20. Remote/scheduled routines lose MCP permissions every run — writes to settings.json require approval, creating infinite approval loops. High commercial impact: enterprise team automation completely broken.

## Common causes

- Multiple open GitHub issues (#61141, #61097, #61027, #61015) filed within last 48 hours affecting Team/Macro plans. Regression emerged ~2026-05-20. Remote/scheduled routines lose MCP permissions every run — writes to settings.json require approval, creating infinite approval loops. High commercial impact: enterprise team automation completely broken.

## Quick fixes

1. Confirm the exact error signature matches `MCP tool call requires approval — tools blocked in ephemeral container despite Always Allow / UI guaranteeing no approval is needed`.
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

- https://github.com/anthropics/claude-code/issues/61141
- https://github.com/anthropics/claude-code/issues/61097
- https://github.com/anthropics/claude-code/issues/61027
- https://github.com/anthropics/claude-code/issues/61015

Evidence note: Multiple open GitHub issues (#61141, #61097, #61027, #61015) filed within last 48 hours affecting Team/Macro plans. Regression emerged ~2026-05-20. Remote/scheduled routines lose MCP permissions every run — writes to settings.json require approval, creating infinite approval loops. High commercial impact: enterprise team automation completely broken.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP tool call requires approval — tools blocked in ephemeral container despite Always Allow / UI guaranteeing no approval is needed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP tool call requires approval — tools blocked in ephemeral container despite Always Allow / UI guaranteeing no approval is needed`.
