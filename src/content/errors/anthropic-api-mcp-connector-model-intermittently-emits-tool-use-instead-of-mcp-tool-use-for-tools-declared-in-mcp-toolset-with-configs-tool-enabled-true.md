---
title: "Anthropic MCP Connector: model intermittently emits tool_use instead of mcp_tool_use"
description: "Fix Anthropic MCP connector beta returning wrong content block type (tool_use vs mcp_tool_use) causing tool invocation failures in LLM agent tool declarations Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "MCP connector: model intermittently emits tool_use instead of mcp_tool_use for tools declared in mcp_toolset with configs.<tool>.enabled: true"
common_causes:
  - "GitHub Issue #1581 in anthropics/anthropic-sdk-python (open, May 21 2026). Under mcp-client-2025-11-20 MCP connector beta, intermittent behavioral regression in content block type emission. Impacts LLM-driven agent workflows using MCP tool protocols. Category: Anthropic API per exact mapping — this is a direct Anthropic SDK/MCP protocol issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-22"
published_at: "2026-05-22T19:39:48.595Z"
updated_at: "2026-05-22T19:39:48.595Z"
---

## What this error means

`MCP connector: model intermittently emits tool_use instead of mcp_tool_use for tools declared in mcp_toolset with configs.<tool>.enabled: true` is a Anthropic API failure pattern reported for developers trying to fix anthropic mcp connector beta returning wrong content block type (tool_use vs mcp_tool_use) causing tool invocation failures in llm agent tool declarations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #1581 in anthropics/anthropic-sdk-python (open, May 21 2026). Under mcp-client-2025-11-20 MCP connector beta, intermittent behavioral regression in content block type emission. Impacts LLM-driven agent workflows using MCP tool protocols. Category: Anthropic API per exact mapping — this is a direct Anthropic SDK/MCP protocol issue.

## Common causes

- GitHub Issue #1581 in anthropics/anthropic-sdk-python (open, May 21 2026). Under mcp-client-2025-11-20 MCP connector beta, intermittent behavioral regression in content block type emission. Impacts LLM-driven agent workflows using MCP tool protocols. Category: Anthropic API per exact mapping — this is a direct Anthropic SDK/MCP protocol issue.

## Quick fixes

1. Confirm the exact error signature matches `MCP connector: model intermittently emits tool_use instead of mcp_tool_use for tools declared in mcp_toolset with configs.<tool>.enabled: true`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1581

Evidence note: GitHub Issue #1581 in anthropics/anthropic-sdk-python (open, May 21 2026). Under mcp-client-2025-11-20 MCP connector beta, intermittent behavioral regression in content block type emission. Impacts LLM-driven agent workflows using MCP tool protocols. Category: Anthropic API per exact mapping — this is a direct Anthropic SDK/MCP protocol issue.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `MCP connector: model intermittently emits tool_use instead of mcp_tool_use for tools declared in mcp_toolset with configs.<tool>.enabled: true` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP connector: model intermittently emits tool_use instead of mcp_tool_use for tools declared in mcp_toolset with configs.<tool>.enabled: true`.
