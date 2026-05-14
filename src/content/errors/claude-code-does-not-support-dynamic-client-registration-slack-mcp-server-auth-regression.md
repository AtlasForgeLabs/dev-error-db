---
title: "Fix Claude Code Slack MCP Server Auth 'Dynamic Client Registration' Regression"
description: "Fix Slack MCP server authentication broken after Claude Code update Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "does not support dynamic client registration (Slack MCP server auth regression)"
common_causes:
  - "Recent Claude Code update broke Slack MCP server OAuth authentication. The error 'does not support dynamic client registration' appears when trying to connect to https://mcp.slack.com/mcp. A regression that blocks Slack integration."
  - "Claude Code 2.1.141 regression: Slack remote MCP server authentication fails with 'does not support dynamic client registration'. Was working before update. Verified on macOS with zsh."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code MCP OAuth redirect mismatch"
  - "Slack MCP server token expiration"
updated: "2026-05-14"
published_at: "2026-05-14T06:13:19.019Z"
updated_at: "2026-05-14T06:13:19.019Z"
---

## What this error means

`does not support dynamic client registration (Slack MCP server auth regression)` is a Claude Code failure pattern reported for developers trying to fix slack mcp server authentication broken after claude code update. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code 2.1.141 regression: Slack remote MCP server authentication fails with 'does not support dynamic client registration'. Was working before update. Verified on macOS with zsh.

## Common causes

- Recent Claude Code update broke Slack MCP server OAuth authentication. The error 'does not support dynamic client registration' appears when trying to connect to https://mcp.slack.com/mcp. A regression that blocks Slack integration.
- Claude Code 2.1.141 regression: Slack remote MCP server authentication fails with 'does not support dynamic client registration'. Was working before update. Verified on macOS with zsh.

## Quick fixes

1. Confirm the exact error signature matches `does not support dynamic client registration (Slack MCP server auth regression)`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/58947

Evidence note: Claude Code 2.1.141 regression: Slack remote MCP server authentication fails with 'does not support dynamic client registration'. Was working before update. Verified on macOS with zsh.

## Related errors

- Claude Code MCP OAuth redirect mismatch
- Slack MCP server token expiration

## FAQ

### What should I check first?

Start with the exact `does not support dynamic client registration (Slack MCP server auth regression)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `does not support dynamic client registration (Slack MCP server auth regression)`.
