---
title: "MCP Server Exits Unexpectedly After Initial Response When Integrating with Claude Desktop"
description: "Debug why custom MCP server built in C#/.NET exits immediately after successful initialization when connecting to Claude Desktop — find proper JSON-RPC 2.0 lifecycle handling Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server launches correctly and sends valid initialize response over stdin/stdout, but Claude connection closes immediately afterward with logs showing server started and connected then disconnect"
common_causes:
  - "SO Q79646317 (score 2). Custom MCP server in C# .NET 9 builds correctly, sends valid JSON-RPC 2.0 initialize response, but Claude Desktop terminates the connection immediately. Distinct from -32001 timeout (Q79703292) — here the error happens within seconds rather than 60s. No good solution found yet, suggesting content gap potential. Category mapping: Claude Code → AI Coding Tools per SKILL.md rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T09:37:12.568Z"
updated_at: "2026-05-18T09:37:12.568Z"
---

## What this error means

`MCP server launches correctly and sends valid initialize response over stdin/stdout, but Claude connection closes immediately afterward with logs showing server started and connected then disconnect` is a Claude Code failure pattern reported for developers trying to debug why custom mcp server built in c#/.net exits immediately after successful initialization when connecting to claude desktop — find proper json-rpc 2.0 lifecycle handling. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

SO Q79646317 (score 2). Custom MCP server in C# .NET 9 builds correctly, sends valid JSON-RPC 2.0 initialize response, but Claude Desktop terminates the connection immediately. Distinct from -32001 timeout (Q79703292) — here the error happens within seconds rather than 60s. No good solution found yet, suggesting content gap potential. Category mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Common causes

- SO Q79646317 (score 2). Custom MCP server in C# .NET 9 builds correctly, sends valid JSON-RPC 2.0 initialize response, but Claude Desktop terminates the connection immediately. Distinct from -32001 timeout (Q79703292) — here the error happens within seconds rather than 60s. No good solution found yet, suggesting content gap potential. Category mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Quick fixes

1. Confirm the exact error signature matches `MCP server launches correctly and sends valid initialize response over stdin/stdout, but Claude connection closes immediately afterward with logs showing server started and connected then disconnect`.
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

- https://stackoverflow.com/questions/79646317/model-context-protocol-mcp-server-exits-unexpectedly-after-initial-response-wh

Evidence note: SO Q79646317 (score 2). Custom MCP server in C# .NET 9 builds correctly, sends valid JSON-RPC 2.0 initialize response, but Claude Desktop terminates the connection immediately. Distinct from -32001 timeout (Q79703292) — here the error happens within seconds rather than 60s. No good solution found yet, suggesting content gap potential. Category mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server launches correctly and sends valid initialize response over stdin/stdout, but Claude connection closes immediately afterward with logs showing server started and connected then disconnect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server launches correctly and sends valid initialize response over stdin/stdout, but Claude connection closes immediately afterward with logs showing server started and connected then disconnect`.
