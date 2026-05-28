---
title: "Claude Code Fails to Expose MCP Tools to AI Sessions (Local Playwright)"
description: "Resolve MCP tools not being exposed to AI sessions in Claude Code 1.0.43, specifically with local Playwright MCP server integration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code version 1.0.43 has a critical bug preventing MCP tools from being exposed to AI sessions"
common_causes:
  - "Source: GitHub issue #3426 on anthropics/claude-code. Critical regression in v1.0.43 where MCP tools (e.g., Playwright) are not accessible in AI sessions despite correct config. Reproduced consistently. High commercial value for developers relying on MCP-augmented Claude Code workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T20:43:24.148Z"
updated_at: "2026-05-28T20:43:24.148Z"
---

## What this error means

`Claude Code version 1.0.43 has a critical bug preventing MCP tools from being exposed to AI sessions` is a Claude Code failure pattern reported for developers trying to resolve mcp tools not being exposed to ai sessions in claude code 1.0.43, specifically with local playwright mcp server integration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: GitHub issue #3426 on anthropics/claude-code. Critical regression in v1.0.43 where MCP tools (e.g., Playwright) are not accessible in AI sessions despite correct config. Reproduced consistently. High commercial value for developers relying on MCP-augmented Claude Code workflows.

## Common causes

- Source: GitHub issue #3426 on anthropics/claude-code. Critical regression in v1.0.43 where MCP tools (e.g., Playwright) are not accessible in AI sessions despite correct config. Reproduced consistently. High commercial value for developers relying on MCP-augmented Claude Code workflows.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code version 1.0.43 has a critical bug preventing MCP tools from being exposed to AI sessions`.
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

- https://github.com/anthropics/claude-code/issues/3426

Evidence note: Source: GitHub issue #3426 on anthropics/claude-code. Critical regression in v1.0.43 where MCP tools (e.g., Playwright) are not accessible in AI sessions despite correct config. Reproduced consistently. High commercial value for developers relying on MCP-augmented Claude Code workflows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code version 1.0.43 has a critical bug preventing MCP tools from being exposed to AI sessions` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code version 1.0.43 has a critical bug preventing MCP tools from being exposed to AI sessions`.
