---
title: "Claude Code MCP Servers Disappear After Periodic Auth Prompt Loops"
description: "Fix recurring MCP server disappearance caused by repeated Anthropic account sign-in prompts in Claude Code CLI Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "my mcp server are missing. periodically asked to sign into my anthropic account in claude cli even though authorized. everything configured correctly but MCP tools unavailable"
common_causes:
  - "Source: GitHub issue #2499 on anthropics/claude-code. Users experience periodic OAuth token expiry prompts that cause all MCP servers to vanish despite correct configuration. Affects paying Claude Code users with MCP integrations. Mapped to 'AI Coding Tools'."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T20:43:24.148Z"
updated_at: "2026-05-28T20:43:24.148Z"
---

## What this error means

`my mcp server are missing. periodically asked to sign into my anthropic account in claude cli even though authorized. everything configured correctly but MCP tools unavailable` is a Claude Code failure pattern reported for developers trying to fix recurring mcp server disappearance caused by repeated anthropic account sign-in prompts in claude code cli. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: GitHub issue #2499 on anthropics/claude-code. Users experience periodic OAuth token expiry prompts that cause all MCP servers to vanish despite correct configuration. Affects paying Claude Code users with MCP integrations. Mapped to 'AI Coding Tools'.

## Common causes

- Source: GitHub issue #2499 on anthropics/claude-code. Users experience periodic OAuth token expiry prompts that cause all MCP servers to vanish despite correct configuration. Affects paying Claude Code users with MCP integrations. Mapped to 'AI Coding Tools'.

## Quick fixes

1. Confirm the exact error signature matches `my mcp server are missing. periodically asked to sign into my anthropic account in claude cli even though authorized. everything configured correctly but MCP tools unavailable`.
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

- https://github.com/anthropics/claude-code/issues/2499

Evidence note: Source: GitHub issue #2499 on anthropics/claude-code. Users experience periodic OAuth token expiry prompts that cause all MCP servers to vanish despite correct configuration. Affects paying Claude Code users with MCP integrations. Mapped to 'AI Coding Tools'.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `my mcp server are missing. periodically asked to sign into my anthropic account in claude cli even though authorized. everything configured correctly but MCP tools unavailable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `my mcp server are missing. periodically asked to sign into my anthropic account in claude cli even though authorized. everything configured correctly but MCP tools unavailable`.
