---
title: "Claude Code Windows MSIX-packaged Desktop strips PATHEXT causing MCP subprocess shell corruption"
description: "Fix MCP subprocess environment corruption in MSIX-packaged Claude Code on Windows that breaks tool execution Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MSIX-packaged Claude Desktop spawns MCP subprocess shells with PATHEXT reduced to .CPL and WINDIR emptied"
common_causes:
  - "Issue #62574 from anthropics/claude-code opened May 26, 2026 (~59 min before discovery). Windows-specific bug where MSIX app virtualization corrupts PATH/PATHEXT/WINDIR env vars for spawned MCP sub-process shells. Affects Windows desktop users only, separate fix path from macOS Cowork issue #62556. Tags: area:desktop area:mcp platform:windows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T20:43:17.883Z"
updated_at: "2026-05-26T20:43:17.883Z"
---

## What this error means

`MSIX-packaged Claude Desktop spawns MCP subprocess shells with PATHEXT reduced to .CPL and WINDIR emptied` is a Claude Code failure pattern reported for developers trying to fix mcp subprocess environment corruption in msix-packaged claude code on windows that breaks tool execution. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #62574 from anthropics/claude-code opened May 26, 2026 (~59 min before discovery). Windows-specific bug where MSIX app virtualization corrupts PATH/PATHEXT/WINDIR env vars for spawned MCP sub-process shells. Affects Windows desktop users only, separate fix path from macOS Cowork issue #62556. Tags: area:desktop area:mcp platform:windows.

## Common causes

- Issue #62574 from anthropics/claude-code opened May 26, 2026 (~59 min before discovery). Windows-specific bug where MSIX app virtualization corrupts PATH/PATHEXT/WINDIR env vars for spawned MCP sub-process shells. Affects Windows desktop users only, separate fix path from macOS Cowork issue #62556. Tags: area:desktop area:mcp platform:windows.

## Quick fixes

1. Confirm the exact error signature matches `MSIX-packaged Claude Desktop spawns MCP subprocess shells with PATHEXT reduced to .CPL and WINDIR emptied`.
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

- https://github.com/anthropics/claude-code/issues/62574

Evidence note: Issue #62574 from anthropics/claude-code opened May 26, 2026 (~59 min before discovery). Windows-specific bug where MSIX app virtualization corrupts PATH/PATHEXT/WINDIR env vars for spawned MCP sub-process shells. Affects Windows desktop users only, separate fix path from macOS Cowork issue #62556. Tags: area:desktop area:mcp platform:windows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MSIX-packaged Claude Desktop spawns MCP subprocess shells with PATHEXT reduced to .CPL and WINDIR emptied` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MSIX-packaged Claude Desktop spawns MCP subprocess shells with PATHEXT reduced to .CPL and WINDIR emptied`.
