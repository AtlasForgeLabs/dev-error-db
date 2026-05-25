---
title: "Figma MCP Never Transitions From Auth Mode to Operational Mode in Claude Code"
description: "Fix built-in Figma MCP server getting stuck in auth loop so Claude Code exposes Figma editing tools Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Figma MCP server stays in authentication mode after successful OAuth browser flow; tools disconnect but no Figma tools appear and MCP server goes away then reconnects infinitely"
common_causes:
  - "GitHub anthropics/claude-code #61265 — built-in Figma MCP consistently stuck in auth mode despite completing OAuth successfully. User sees authenticate/complete_authentication tools only, then nothing. Platform bug affecting a major design-integration use case for paid Claude Code users. Category mapping: Claude Code MCP operational failure."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T11:43:13.674Z"
updated_at: "2026-05-25T11:43:13.674Z"
---

## What this error means

`Figma MCP server stays in authentication mode after successful OAuth browser flow; tools disconnect but no Figma tools appear and MCP server goes away then reconnects infinitely` is a Claude Code failure pattern reported for developers trying to fix built-in figma mcp server getting stuck in auth loop so claude code exposes figma editing tools. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code #61265 — built-in Figma MCP consistently stuck in auth mode despite completing OAuth successfully. User sees authenticate/complete_authentication tools only, then nothing. Platform bug affecting a major design-integration use case for paid Claude Code users. Category mapping: Claude Code MCP operational failure.

## Common causes

- GitHub anthropics/claude-code #61265 — built-in Figma MCP consistently stuck in auth mode despite completing OAuth successfully. User sees authenticate/complete_authentication tools only, then nothing. Platform bug affecting a major design-integration use case for paid Claude Code users. Category mapping: Claude Code MCP operational failure.

## Quick fixes

1. Confirm the exact error signature matches `Figma MCP server stays in authentication mode after successful OAuth browser flow; tools disconnect but no Figma tools appear and MCP server goes away then reconnects infinitely`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/61265

Evidence note: GitHub anthropics/claude-code #61265 — built-in Figma MCP consistently stuck in auth mode despite completing OAuth successfully. User sees authenticate/complete_authentication tools only, then nothing. Platform bug affecting a major design-integration use case for paid Claude Code users. Category mapping: Claude Code MCP operational failure.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Figma MCP server stays in authentication mode after successful OAuth browser flow; tools disconnect but no Figma tools appear and MCP server goes away then reconnects infinitely` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Figma MCP server stays in authentication mode after successful OAuth browser flow; tools disconnect but no Figma tools appear and MCP server goes away then reconnects infinitely`.
