---
title: "MCP Server Cancels All Tasks When Client Sends notifications/cancelled — MCP error -32000 Connection Closed"
description: "开发者在 MCP 客户端/服务器交互中取消请求后，服务端整个接收循环崩溃，后续所有请求都报 Connection closed，导致 Claude Code 或自定义 MCP 客户端完全不可用 Includes evidence for Claude Code / MCP SDK troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code / MCP SDK"
error_signature: "MCP error -32000: Connection closed"
common_causes:
  - "GitHub Issue #2610 on modelcontextprotocol/python-sdk (updated 2026-05-18). RequestResponder.__exit__ leaks CancelledError killing stdio receive loop. Affects mcp 1.26.0 and 1.27.1 confirmed with FastMCP 3.1.x and Claude Code as host. This is a critical reliability issue for anyone using Claude Code or custom MCP integrations in production workflows. Exact root cause and fix identified. High commercial impact because MCP/AI coding tool failure directly blocks development."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T02:37:11.757Z"
updated_at: "2026-05-18T02:37:11.757Z"
---

## What this error means

`MCP error -32000: Connection closed` is a Claude Code / MCP SDK failure pattern reported for developers trying to 开发者在 mcp 客户端/服务器交互中取消请求后，服务端整个接收循环崩溃，后续所有请求都报 connection closed，导致 claude code 或自定义 mcp 客户端完全不可用. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2610 on modelcontextprotocol/python-sdk (updated 2026-05-18). RequestResponder.__exit__ leaks CancelledError killing stdio receive loop. Affects mcp 1.26.0 and 1.27.1 confirmed with FastMCP 3.1.x and Claude Code as host. This is a critical reliability issue for anyone using Claude Code or custom MCP integrations in production workflows. Exact root cause and fix identified. High commercial impact because MCP/AI coding tool failure directly blocks development.

## Common causes

- GitHub Issue #2610 on modelcontextprotocol/python-sdk (updated 2026-05-18). RequestResponder.__exit__ leaks CancelledError killing stdio receive loop. Affects mcp 1.26.0 and 1.27.1 confirmed with FastMCP 3.1.x and Claude Code as host. This is a critical reliability issue for anyone using Claude Code or custom MCP integrations in production workflows. Exact root cause and fix identified. High commercial impact because MCP/AI coding tool failure directly blocks development.

## Quick fixes

1. Confirm the exact error signature matches `MCP error -32000: Connection closed`.
2. Check the Claude Code / MCP SDK account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/modelcontextprotocol/python-sdk/issues/2610

Evidence note: GitHub Issue #2610 on modelcontextprotocol/python-sdk (updated 2026-05-18). RequestResponder.__exit__ leaks CancelledError killing stdio receive loop. Affects mcp 1.26.0 and 1.27.1 confirmed with FastMCP 3.1.x and Claude Code as host. This is a critical reliability issue for anyone using Claude Code or custom MCP integrations in production workflows. Exact root cause and fix identified. High commercial impact because MCP/AI coding tool failure directly blocks development.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP error -32000: Connection closed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code / MCP SDK workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP error -32000: Connection closed`.
