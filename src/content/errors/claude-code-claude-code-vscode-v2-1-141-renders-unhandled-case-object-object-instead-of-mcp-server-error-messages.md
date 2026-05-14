---
title: "Claude Code VSCode Shows 'Unhandled case: [object Object]' for All MCP Errors"
description: "Fix Claude Code VSCode extension showing [object Object] instead of actual error messages Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code VSCode v2.1.141 renders 'Unhandled case: [object Object]' instead of MCP server error messages"
common_causes:
  - "v2.1.141 regression in the webview exhaustiveness handler. When any MCP server fails to start (misconfigured path, missing env var, OAuth error), the UI shows 'Unhandled case: [object Object]' instead of the actual error. Affects all MCP configurations."
  - "v2.1.141 exhaustiveness handler in webview/index.js QB1() function throws with object instead of string. Affects MCP servers: excalidraw, github, W&B, Figma connectors. Multiple duplicate reports."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server connection failed"
  - "Claude Code plugin load error"
  - "Claude Code webview crash"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Claude Code VSCode v2.1.141 renders 'Unhandled case: [object Object]' instead of MCP server error messages` is a Claude Code failure pattern reported for developers trying to fix claude code vscode extension showing [object object] instead of actual error messages. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

v2.1.141 exhaustiveness handler in webview/index.js QB1() function throws with object instead of string. Affects MCP servers: excalidraw, github, W&B, Figma connectors. Multiple duplicate reports.

## Common causes

- v2.1.141 regression in the webview exhaustiveness handler. When any MCP server fails to start (misconfigured path, missing env var, OAuth error), the UI shows 'Unhandled case: [object Object]' instead of the actual error. Affects all MCP configurations.
- v2.1.141 exhaustiveness handler in webview/index.js QB1() function throws with object instead of string. Affects MCP servers: excalidraw, github, W&B, Figma connectors. Multiple duplicate reports.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code VSCode v2.1.141 renders 'Unhandled case: [object Object]' instead of MCP server error messages`.
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

- https://github.com/anthropics/claude-code/issues/59188
- https://github.com/anthropics/claude-code/issues/59207

Evidence note: v2.1.141 exhaustiveness handler in webview/index.js QB1() function throws with object instead of string. Affects MCP servers: excalidraw, github, W&B, Figma connectors. Multiple duplicate reports.

## Related errors

- Claude Code MCP server connection failed
- Claude Code plugin load error
- Claude Code webview crash

## FAQ

### What should I check first?

Start with the exact `Claude Code VSCode v2.1.141 renders 'Unhandled case: [object Object]' instead of MCP server error messages` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code VSCode v2.1.141 renders 'Unhandled case: [object Object]' instead of MCP server error messages`.
