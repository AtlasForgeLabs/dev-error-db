---
title: "Claude Code Corrupts mcpServers Config with Nested Key in ~/.claude.json"
description: "Fix Claude Code MCP server configuration corruption error Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "mcpServers.mcpServers: Does not adhere to MCP server configuration schema"
common_causes:
  - "Claude Code incorrectly nests mcpServers inside itself when writing ~/.claude.json at session end, breaking all MCP integrations in subsequent sessions. /doctor shows parse error."
  - "Claude Code 2.1.133 on macOS creates nested mcpServers.mcpServers key inside global mcpServers object when writing ~/.claude.json. Per-project entries with mcpServers: {} cause the serializer to nest incorrectly. /doctor reports schema validation failure."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code /doctor MCP parse error"
  - "Claude Code ~/.claude.json corrupted"
  - "MCP server config schema validation failed"
updated: "2026-05-14"
published_at: "2026-05-14T05:13:18.868Z"
updated_at: "2026-05-14T05:13:18.868Z"
---

## What this error means

`mcpServers.mcpServers: Does not adhere to MCP server configuration schema` is a Claude Code failure pattern reported for developers trying to fix claude code mcp server configuration corruption error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code 2.1.133 on macOS creates nested mcpServers.mcpServers key inside global mcpServers object when writing ~/.claude.json. Per-project entries with mcpServers: {} cause the serializer to nest incorrectly. /doctor reports schema validation failure.

## Common causes

- Claude Code incorrectly nests mcpServers inside itself when writing ~/.claude.json at session end, breaking all MCP integrations in subsequent sessions. /doctor shows parse error.
- Claude Code 2.1.133 on macOS creates nested mcpServers.mcpServers key inside global mcpServers object when writing ~/.claude.json. Per-project entries with mcpServers: {} cause the serializer to nest incorrectly. /doctor reports schema validation failure.

## Quick fixes

1. Confirm the exact error signature matches `mcpServers.mcpServers: Does not adhere to MCP server configuration schema`.
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

- https://github.com/anthropics/claude-code/issues/58919

Evidence note: Claude Code 2.1.133 on macOS creates nested mcpServers.mcpServers key inside global mcpServers object when writing ~/.claude.json. Per-project entries with mcpServers: {} cause the serializer to nest incorrectly. /doctor reports schema validation failure.

## Related errors

- Claude Code /doctor MCP parse error
- Claude Code ~/.claude.json corrupted
- MCP server config schema validation failed

## FAQ

### What should I check first?

Start with the exact `mcpServers.mcpServers: Does not adhere to MCP server configuration schema` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `mcpServers.mcpServers: Does not adhere to MCP server configuration schema`.
