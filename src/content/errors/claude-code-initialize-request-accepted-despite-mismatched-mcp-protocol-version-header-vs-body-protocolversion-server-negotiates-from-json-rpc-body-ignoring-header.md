---
title: "MCP Server 未拒绝 Header 与 Body 协议版本不匹配的初始化请求"
description: "修复 MCP SDK 在 initialize 阶段同时接收 HTTP header 和 body 中的 protocolVersion 时，未能校验两者一致性的问题，避免 Claude Code/Cursor 等工具因版本协商失败导致的连接异常 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "initialize request accepted despite MISMATCHED MCP-Protocol-Version header vs body protocolVersion — server negotiates from JSON-RPC body, ignoring header"
common_causes:
  - "modelcontextprotocol/typescript-sdk #2108 报告：MCP v2025-11-25 规范下，server 接受 header 与 body 协议版本不一致的 initialize 请求而不报错，可能导致客户端与服务端使用错误的协议版本通信。复现于 v1.29.0（2026-05-16）。这直接影响 Claude Code 和 Cursor 等依赖 MCP 协议的 AI 编程工具。Category mapping: 属于 AI Coding Tools 范畴（Claude Code 通过 MCP 协议与外部服务交互时的鉴权/协商错误）。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T17:13:50.787Z"
updated_at: "2026-05-16T17:13:50.787Z"
---

## What this error means

`initialize request accepted despite MISMATCHED MCP-Protocol-Version header vs body protocolVersion — server negotiates from JSON-RPC body, ignoring header` is a Claude Code failure pattern reported for developers trying to 修复 mcp sdk 在 initialize 阶段同时接收 http header 和 body 中的 protocolversion 时，未能校验两者一致性的问题，避免 claude code/cursor 等工具因版本协商失败导致的连接异常. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

modelcontextprotocol/typescript-sdk #2108 报告：MCP v2025-11-25 规范下，server 接受 header 与 body 协议版本不一致的 initialize 请求而不报错，可能导致客户端与服务端使用错误的协议版本通信。复现于 v1.29.0（2026-05-16）。这直接影响 Claude Code 和 Cursor 等依赖 MCP 协议的 AI 编程工具。Category mapping: 属于 AI Coding Tools 范畴（Claude Code 通过 MCP 协议与外部服务交互时的鉴权/协商错误）。

## Common causes

- modelcontextprotocol/typescript-sdk #2108 报告：MCP v2025-11-25 规范下，server 接受 header 与 body 协议版本不一致的 initialize 请求而不报错，可能导致客户端与服务端使用错误的协议版本通信。复现于 v1.29.0（2026-05-16）。这直接影响 Claude Code 和 Cursor 等依赖 MCP 协议的 AI 编程工具。Category mapping: 属于 AI Coding Tools 范畴（Claude Code 通过 MCP 协议与外部服务交互时的鉴权/协商错误）。

## Quick fixes

1. Confirm the exact error signature matches `initialize request accepted despite MISMATCHED MCP-Protocol-Version header vs body protocolVersion — server negotiates from JSON-RPC body, ignoring header`.
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

- https://github.com/modelcontextprotocol/typescript-sdk/issues/2108

Evidence note: modelcontextprotocol/typescript-sdk #2108 报告：MCP v2025-11-25 规范下，server 接受 header 与 body 协议版本不一致的 initialize 请求而不报错，可能导致客户端与服务端使用错误的协议版本通信。复现于 v1.29.0（2026-05-16）。这直接影响 Claude Code 和 Cursor 等依赖 MCP 协议的 AI 编程工具。Category mapping: 属于 AI Coding Tools 范畴（Claude Code 通过 MCP 协议与外部服务交互时的鉴权/协商错误）。

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `initialize request accepted despite MISMATCHED MCP-Protocol-Version header vs body protocolVersion — server negotiates from JSON-RPC body, ignoring header` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `initialize request accepted despite MISMATCHED MCP-Protocol-Version header vs body protocolVersion — server negotiates from JSON-RPC body, ignoring header`.
