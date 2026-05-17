---
title: "HTTP MCP servers working in 2.1.140 and broken in 2.1.142 — no connection attempt logged on startup"
description: "Fix HTTP transport MCP server registration regression in Claude Code v2.1.142 causing silent startup without any connection attempt Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[MCP] --mcp-config servers running fully async (nonblocking) but no connection to the MCP URL is ever attempted. No error is logged. Tools never appear."
common_causes:
  - "GitHub issue #59956 opened May 17 2026 confirmed regression from v2.1.140 (working) to v2.1.142 (broken). Affected platforms Windows + VS Code. Category mapped to AI Coding Tools per SKILL.md mapping rules. Strong commercial value as users cannot access external MCP tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T22:37:11.150Z"
updated_at: "2026-05-17T22:37:11.150Z"
---

## What this error means

`[MCP] --mcp-config servers running fully async (nonblocking) but no connection to the MCP URL is ever attempted. No error is logged. Tools never appear.` is a Claude Code failure pattern reported for developers trying to fix http transport mcp server registration regression in claude code v2.1.142 causing silent startup without any connection attempt. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59956 opened May 17 2026 confirmed regression from v2.1.140 (working) to v2.1.142 (broken). Affected platforms Windows + VS Code. Category mapped to AI Coding Tools per SKILL.md mapping rules. Strong commercial value as users cannot access external MCP tools.

## Common causes

- GitHub issue #59956 opened May 17 2026 confirmed regression from v2.1.140 (working) to v2.1.142 (broken). Affected platforms Windows + VS Code. Category mapped to AI Coding Tools per SKILL.md mapping rules. Strong commercial value as users cannot access external MCP tools.

## Quick fixes

1. Confirm the exact error signature matches `[MCP] --mcp-config servers running fully async (nonblocking) but no connection to the MCP URL is ever attempted. No error is logged. Tools never appear.`.
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

- https://github.com/anthropics/claude-code/issues/59956

Evidence note: GitHub issue #59956 opened May 17 2026 confirmed regression from v2.1.140 (working) to v2.1.142 (broken). Affected platforms Windows + VS Code. Category mapped to AI Coding Tools per SKILL.md mapping rules. Strong commercial value as users cannot access external MCP tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[MCP] --mcp-config servers running fully async (nonblocking) but no connection to the MCP URL is ever attempted. No error is logged. Tools never appear.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[MCP] --mcp-config servers running fully async (nonblocking) but no connection to the MCP URL is ever attempted. No error is logged. Tools never appear.`.
