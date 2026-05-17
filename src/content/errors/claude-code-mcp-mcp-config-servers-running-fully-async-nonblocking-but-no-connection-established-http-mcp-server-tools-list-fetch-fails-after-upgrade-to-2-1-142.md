---
title: "Claude Code HTTP MCP Server Connection Broken After 2.1.140 Update"
description: "Fix Claude Code HTTP MCP server connection failure that started appearing after upgrading from v2.1.140 to v2.1.142, where configured HTTP MCP servers stop connecting and tools become unavailable. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[MCP] --mcp-config servers running fully async (nonblocking) but no connection established; HTTP MCP server tools list fetch fails after upgrade to 2.1.142"
common_causes:
  - "Source: anthropics/claude-code#59956 (opened 2026-05-17). Real user report showing HTTP MCP server configs fail to connect post-upgrade. Affects paid Claude Code Pro subscribers who rely on external AI service integrations via MCP. Category mapped to AI Coding Tools per approved schema."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T12:36:03.891Z"
updated_at: "2026-05-17T12:36:03.891Z"
---

## What this error means

`[MCP] --mcp-config servers running fully async (nonblocking) but no connection established; HTTP MCP server tools list fetch fails after upgrade to 2.1.142` is a Claude Code failure pattern reported for developers trying to fix claude code http mcp server connection failure that started appearing after upgrading from v2.1.140 to v2.1.142, where configured http mcp servers stop connecting and tools become unavailable.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: anthropics/claude-code#59956 (opened 2026-05-17). Real user report showing HTTP MCP server configs fail to connect post-upgrade. Affects paid Claude Code Pro subscribers who rely on external AI service integrations via MCP. Category mapped to AI Coding Tools per approved schema.

## Common causes

- Source: anthropics/claude-code#59956 (opened 2026-05-17). Real user report showing HTTP MCP server configs fail to connect post-upgrade. Affects paid Claude Code Pro subscribers who rely on external AI service integrations via MCP. Category mapped to AI Coding Tools per approved schema.

## Quick fixes

1. Confirm the exact error signature matches `[MCP] --mcp-config servers running fully async (nonblocking) but no connection established; HTTP MCP server tools list fetch fails after upgrade to 2.1.142`.
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

Evidence note: Source: anthropics/claude-code#59956 (opened 2026-05-17). Real user report showing HTTP MCP server configs fail to connect post-upgrade. Affects paid Claude Code Pro subscribers who rely on external AI service integrations via MCP. Category mapped to AI Coding Tools per approved schema.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[MCP] --mcp-config servers running fully async (nonblocking) but no connection established; HTTP MCP server tools list fetch fails after upgrade to 2.1.142` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[MCP] --mcp-config servers running fully async (nonblocking) but no connection established; HTTP MCP server tools list fetch fails after upgrade to 2.1.142`.
