---
title: "Claude Code MCP_TOOL_TIMEOUT capped at 60 seconds regardless of configured value"
description: "Fix Claude Code MCP tool timeout being ignored, remote MCP server calls timing out at 60s even with higher MCP_TOOL_TIMEOUT configured Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, capped at 60 seconds"
common_causes:
  - "Claude Code changelog v2.1.142 fixed: MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, which capped tool calls at 60 seconds regardless of the configured value. Directly impacts paid users with long-running MCP tools. Category: Claude Code MCP timeout → AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-15"
published_at: "2026-05-15T15:13:22.894Z"
updated_at: "2026-05-15T15:13:22.894Z"
---

## What this error means

`MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, capped at 60 seconds` is a Claude Code failure pattern reported for developers trying to fix claude code mcp tool timeout being ignored, remote mcp server calls timing out at 60s even with higher mcp_tool_timeout configured. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code changelog v2.1.142 fixed: MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, which capped tool calls at 60 seconds regardless of the configured value. Directly impacts paid users with long-running MCP tools. Category: Claude Code MCP timeout → AI Coding Tools.

## Common causes

- Claude Code changelog v2.1.142 fixed: MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, which capped tool calls at 60 seconds regardless of the configured value. Directly impacts paid users with long-running MCP tools. Category: Claude Code MCP timeout → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, capped at 60 seconds`.
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

- https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md

Evidence note: Claude Code changelog v2.1.142 fixed: MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, which capped tool calls at 60 seconds regardless of the configured value. Directly impacts paid users with long-running MCP tools. Category: Claude Code MCP timeout → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, capped at 60 seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP_TOOL_TIMEOUT not raising the per-request fetch timeout for remote HTTP and SSE MCP servers, capped at 60 seconds`.
