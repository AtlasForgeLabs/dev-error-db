---
title: "Claude Code Scheduled Routines Fail with \"MCP tool call requires approval\" on Custom Connectors"
description: "Fix Claude Code scheduled routine / automated task failures when MCP tool calls require manual approval instead of running autonomously Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"MCP tool call requires approval\""
common_causes:
  - "GitHub Issue #61015 opened May 21 2026 — regression ~2026-05-20. Affects web-based Claude Code users running scheduled routines with custom MCP connectors. Users expect autonomous execution during scheduled tasks but get approval prompts blocking automation. High commercial value: affects paying subscription users who rely on automation."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T02:39:21.294Z"
updated_at: "2026-05-21T02:39:21.294Z"
---

## What this error means

`"MCP tool call requires approval"` is a Claude Code failure pattern reported for developers trying to fix claude code scheduled routine / automated task failures when mcp tool calls require manual approval instead of running autonomously. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61015 opened May 21 2026 — regression ~2026-05-20. Affects web-based Claude Code users running scheduled routines with custom MCP connectors. Users expect autonomous execution during scheduled tasks but get approval prompts blocking automation. High commercial value: affects paying subscription users who rely on automation.

## Common causes

- GitHub Issue #61015 opened May 21 2026 — regression ~2026-05-20. Affects web-based Claude Code users running scheduled routines with custom MCP connectors. Users expect autonomous execution during scheduled tasks but get approval prompts blocking automation. High commercial value: affects paying subscription users who rely on automation.

## Quick fixes

1. Confirm the exact error signature matches `"MCP tool call requires approval"`.
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

- https://github.com/anthropics/claude-code/issues/61015

Evidence note: GitHub Issue #61015 opened May 21 2026 — regression ~2026-05-20. Affects web-based Claude Code users running scheduled routines with custom MCP connectors. Users expect autonomous execution during scheduled tasks but get approval prompts blocking automation. High commercial value: affects paying subscription users who rely on automation.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"MCP tool call requires approval"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"MCP tool call requires approval"`.
