---
title: "Claude Code MCP_TOOL_TIMEOUT Ignored — HTTP Transport Hardcodes 60s Timeout"
description: "Fix Claude Code MCP_TOOL_TIMEOUT environment variable being ignored for HTTP MCP servers Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP_TOOL_TIMEOUT not respected for HTTP MCP tool calls"
common_causes:
  - "HTTP MCP tool calls silently timeout at 60s despite MCP_TOOL_TIMEOUT being set, returning empty {} responses with no error — impossible to debug long-running tools"
  - "Claude Code 2.1.5+ hardcodes 60s AbortSignal.timeout() on HTTP fetch, ignoring MCP_TOOL_TIMEOUT env var. Long-running MCP tools return empty {} silently. Multiple issues filed, fix needed for version 2.1.113+."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code .mcp.json timeout not honored"
  - "Claude Code MCP server connection timeout"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`MCP_TOOL_TIMEOUT not respected for HTTP MCP tool calls` is a Claude Code failure pattern reported for developers trying to fix claude code mcp_tool_timeout environment variable being ignored for http mcp servers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code 2.1.5+ hardcodes 60s AbortSignal.timeout() on HTTP fetch, ignoring MCP_TOOL_TIMEOUT env var. Long-running MCP tools return empty {} silently. Multiple issues filed, fix needed for version 2.1.113+.

## Common causes

- HTTP MCP tool calls silently timeout at 60s despite MCP_TOOL_TIMEOUT being set, returning empty {} responses with no error — impossible to debug long-running tools
- Claude Code 2.1.5+ hardcodes 60s AbortSignal.timeout() on HTTP fetch, ignoring MCP_TOOL_TIMEOUT env var. Long-running MCP tools return empty {} silently. Multiple issues filed, fix needed for version 2.1.113+.

## Quick fixes

1. Confirm the exact error signature matches `MCP_TOOL_TIMEOUT not respected for HTTP MCP tool calls`.
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

- https://github.com/anthropics/claude-code/issues/17662
- https://github.com/anthropics/claude-code/issues/36221

Evidence note: Claude Code 2.1.5+ hardcodes 60s AbortSignal.timeout() on HTTP fetch, ignoring MCP_TOOL_TIMEOUT env var. Long-running MCP tools return empty {} silently. Multiple issues filed, fix needed for version 2.1.113+.

## Related errors

- Claude Code .mcp.json timeout not honored
- Claude Code MCP server connection timeout

## FAQ

### What should I check first?

Start with the exact `MCP_TOOL_TIMEOUT not respected for HTTP MCP tool calls` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP_TOOL_TIMEOUT not respected for HTTP MCP tool calls`.
