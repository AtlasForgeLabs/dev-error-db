---
title: "MCP Connection Closed While Fetching Tools"
description: "Fix MCP error -32000 connection closed during tool fetching when configuring Serena as MCP server for Claude Code Includes evidence for Serena (MCP) troubleshooting demand."
category: "AI Coding Tools"
technology: "Serena (MCP)"
error_signature: "MCP error -32000: Connection closed when fetching tools in Claude Code CLI"
common_causes:
  - "GitHub issue oraios/serena#898 documents MCP error -32000 occurring when Serena is configured as MCP server in Claude Code. Connection terminates unexpectedly during the tool discovery phase, completely blocking subsequent MCP tool usage."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-11"
published_at: "2026-06-11T18:38:14.198Z"
updated_at: "2026-06-11T18:38:14.198Z"
---

## What this error means

`MCP error -32000: Connection closed when fetching tools in Claude Code CLI` is a Serena (MCP) failure pattern reported for developers trying to fix mcp error -32000 connection closed during tool fetching when configuring serena as mcp server for claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue oraios/serena#898 documents MCP error -32000 occurring when Serena is configured as MCP server in Claude Code. Connection terminates unexpectedly during the tool discovery phase, completely blocking subsequent MCP tool usage.

## Common causes

- GitHub issue oraios/serena#898 documents MCP error -32000 occurring when Serena is configured as MCP server in Claude Code. Connection terminates unexpectedly during the tool discovery phase, completely blocking subsequent MCP tool usage.

## Quick fixes

1. Confirm the exact error signature matches `MCP error -32000: Connection closed when fetching tools in Claude Code CLI`.
2. Check the Serena (MCP) account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/oraios/serena/issues/898

Evidence note: GitHub issue oraios/serena#898 documents MCP error -32000 occurring when Serena is configured as MCP server in Claude Code. Connection terminates unexpectedly during the tool discovery phase, completely blocking subsequent MCP tool usage.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP error -32000: Connection closed when fetching tools in Claude Code CLI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Serena (MCP) workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP error -32000: Connection closed when fetching tools in Claude Code CLI`.
