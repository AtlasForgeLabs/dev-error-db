---
title: "Claude Code VSCode MCP returns -32601 causing 'Unhandled case: [object Object]' toast error"
description: "Fix Claude Code VSCode extension unhandled MCP -32601 error toast Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Unhandled case: [object Object] — MCP server returns JSON-RPC error -32601 Method not found on tools/list"
common_causes:
  - "Claude Code VSCode extension launches internal MCP server on localhost. When tools/list is called, server returns -32601 'Method not found'. UI fails to handle this case, showing red toast error. Affects claude-vscode extension on Windows/macOS. Anthropic claude-code issue #59425 (2026-05-15). Paid subscription tool, UX-breaking bug."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-15"
published_at: "2026-05-15T16:13:22.988Z"
updated_at: "2026-05-15T16:13:22.988Z"
---

## What this error means

`Unhandled case: [object Object] — MCP server returns JSON-RPC error -32601 Method not found on tools/list` is a Claude Code failure pattern reported for developers trying to fix claude code vscode extension unhandled mcp -32601 error toast. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code VSCode extension launches internal MCP server on localhost. When tools/list is called, server returns -32601 'Method not found'. UI fails to handle this case, showing red toast error. Affects claude-vscode extension on Windows/macOS. Anthropic claude-code issue #59425 (2026-05-15). Paid subscription tool, UX-breaking bug.

## Common causes

- Claude Code VSCode extension launches internal MCP server on localhost. When tools/list is called, server returns -32601 'Method not found'. UI fails to handle this case, showing red toast error. Affects claude-vscode extension on Windows/macOS. Anthropic claude-code issue #59425 (2026-05-15). Paid subscription tool, UX-breaking bug.

## Quick fixes

1. Confirm the exact error signature matches `Unhandled case: [object Object] — MCP server returns JSON-RPC error -32601 Method not found on tools/list`.
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

- https://github.com/anthropics/claude-code/issues/59425

Evidence note: Claude Code VSCode extension launches internal MCP server on localhost. When tools/list is called, server returns -32601 'Method not found'. UI fails to handle this case, showing red toast error. Affects claude-vscode extension on Windows/macOS. Anthropic claude-code issue #59425 (2026-05-15). Paid subscription tool, UX-breaking bug.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Unhandled case: [object Object] — MCP server returns JSON-RPC error -32601 Method not found on tools/list` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unhandled case: [object Object] — MCP server returns JSON-RPC error -32601 Method not found on tools/list`.
