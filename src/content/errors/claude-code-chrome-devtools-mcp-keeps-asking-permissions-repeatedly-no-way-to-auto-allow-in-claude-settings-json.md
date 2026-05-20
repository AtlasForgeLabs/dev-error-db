---
title: "Chrome DevTools MCP Keeps Asking Permissions in Claude Code VSCode Extension"
description: "在 VSCode 中使用 Claude Code 扩展配合 chrome-devtools-mcp 时，每次操作都需手动批准权限请求，严重影响工作流效率，用户需要配置静默自动授权 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "chrome-devtools-mcp keeps asking permissions repeatedly — no way to auto-allow in .claude/settings.json"
common_causes:
  - "Source: r/ClaudeAI thread with 4 comments — Win10 + VSCode setup where chrome-devtools-mcp in Claude Code extension fires repeated permission prompts. Workaround suggested via .claude/settings.local.json but unreliable. Represents a common MCP tool authorization pattern issue affecting developer productivity."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T17:38:30.050Z"
updated_at: "2026-05-20T17:38:30.050Z"
---

## What this error means

`chrome-devtools-mcp keeps asking permissions repeatedly — no way to auto-allow in .claude/settings.json` is a Claude Code failure pattern reported for developers trying to 在 vscode 中使用 claude code 扩展配合 chrome-devtools-mcp 时，每次操作都需手动批准权限请求，严重影响工作流效率，用户需要配置静默自动授权. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: r/ClaudeAI thread with 4 comments — Win10 + VSCode setup where chrome-devtools-mcp in Claude Code extension fires repeated permission prompts. Workaround suggested via .claude/settings.local.json but unreliable. Represents a common MCP tool authorization pattern issue affecting developer productivity.

## Common causes

- Source: r/ClaudeAI thread with 4 comments — Win10 + VSCode setup where chrome-devtools-mcp in Claude Code extension fires repeated permission prompts. Workaround suggested via .claude/settings.local.json but unreliable. Represents a common MCP tool authorization pattern issue affecting developer productivity.

## Quick fixes

1. Confirm the exact error signature matches `chrome-devtools-mcp keeps asking permissions repeatedly — no way to auto-allow in .claude/settings.json`.
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

- https://www.reddit.com/r/ClaudeAI/comments/1olnp72/vscode_win10_claude_code_chromedevtoolsmcp_keeps/

Evidence note: Source: r/ClaudeAI thread with 4 comments — Win10 + VSCode setup where chrome-devtools-mcp in Claude Code extension fires repeated permission prompts. Workaround suggested via .claude/settings.local.json but unreliable. Represents a common MCP tool authorization pattern issue affecting developer productivity.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `chrome-devtools-mcp keeps asking permissions repeatedly — no way to auto-allow in .claude/settings.json` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `chrome-devtools-mcp keeps asking permissions repeatedly — no way to auto-allow in .claude/settings.json`.
