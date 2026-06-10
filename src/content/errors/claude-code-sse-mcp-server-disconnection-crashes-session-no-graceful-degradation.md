---
title: "[BUG] SSE MCP Server Disconnection Crashes Session Instead of Graceful Degradation — Claude Code"
description: "When an SSE-based MCP server loses network connectivity, Claude Code crashes the entire session instead of recovering gracefully. Users need the agent to continue working even if one MCP server drops. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "SSE MCP server disconnection crashes session (no graceful degradation)"
common_causes:
  - "GitHub issue #18557 on anthropics/claude-code repository. Distinct from ECONNREFUSED (#34982): this is about runtime disconnection during operation, not startup race. GitHub copilot-cli also shows similar pattern (#3706 - Remote MCP OAuth startup fans out across hosts/reconnects causing rate limits). MCP reliability is a core pain point for paid users running agents that depend on external MCP servers. Category: AI Coding Tools (Claude Code)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T15:36:12.067Z"
updated_at: "2026-06-10T15:36:12.067Z"
---

## What this error means

`SSE MCP server disconnection crashes session (no graceful degradation)` is a Claude Code failure pattern reported for developers trying to when an sse-based mcp server loses network connectivity, claude code crashes the entire session instead of recovering gracefully. users need the agent to continue working even if one mcp server drops.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #18557 on anthropics/claude-code repository. Distinct from ECONNREFUSED (#34982): this is about runtime disconnection during operation, not startup race. GitHub copilot-cli also shows similar pattern (#3706 - Remote MCP OAuth startup fans out across hosts/reconnects causing rate limits). MCP reliability is a core pain point for paid users running agents that depend on external MCP servers. Category: AI Coding Tools (Claude Code).

## Common causes

- GitHub issue #18557 on anthropics/claude-code repository. Distinct from ECONNREFUSED (#34982): this is about runtime disconnection during operation, not startup race. GitHub copilot-cli also shows similar pattern (#3706 - Remote MCP OAuth startup fans out across hosts/reconnects causing rate limits). MCP reliability is a core pain point for paid users running agents that depend on external MCP servers. Category: AI Coding Tools (Claude Code).

## Quick fixes

1. Confirm the exact error signature matches `SSE MCP server disconnection crashes session (no graceful degradation)`.
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

- https://github.com/anthropics/claude-code/issues/18557
- https://github.com/github/copilot-cli/issues/3706

Evidence note: GitHub issue #18557 on anthropics/claude-code repository. Distinct from ECONNREFUSED (#34982): this is about runtime disconnection during operation, not startup race. GitHub copilot-cli also shows similar pattern (#3706 - Remote MCP OAuth startup fans out across hosts/reconnects causing rate limits). MCP reliability is a core pain point for paid users running agents that depend on external MCP servers. Category: AI Coding Tools (Claude Code).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `SSE MCP server disconnection crashes session (no graceful degradation)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SSE MCP server disconnection crashes session (no graceful degradation)`.
