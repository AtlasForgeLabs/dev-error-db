---
title: "LiteLLM MCP tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools causing 404 on tool calls"
description: "Fix LiteLLM MCP server mapping cleared by cancelled list_tools request, causing subsequent tool call operations to fail with 404 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls"
common_causes:
  - "GitHub issue BerriAI/litellm#24089 — Cancelled list_tools requests clear the tool-to-server name mapping dictionary, leading to 404 errors on real tool invocation attempts. Impacts LiteLLM MCP proxy functionality. Category: LiteLLM (MCP proxy reliability bug)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T22:43:18.176Z"
updated_at: "2026-05-26T22:43:18.176Z"
---

## What this error means

`MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls` is a LiteLLM failure pattern reported for developers trying to fix litellm mcp server mapping cleared by cancelled list_tools request, causing subsequent tool call operations to fail with 404. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#24089 — Cancelled list_tools requests clear the tool-to-server name mapping dictionary, leading to 404 errors on real tool invocation attempts. Impacts LiteLLM MCP proxy functionality. Category: LiteLLM (MCP proxy reliability bug).

## Common causes

- GitHub issue BerriAI/litellm#24089 — Cancelled list_tools requests clear the tool-to-server name mapping dictionary, leading to 404 errors on real tool invocation attempts. Impacts LiteLLM MCP proxy functionality. Category: LiteLLM (MCP proxy reliability bug).

## Quick fixes

1. Confirm the exact error signature matches `MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/24089

Evidence note: GitHub issue BerriAI/litellm#24089 — Cancelled list_tools requests clear the tool-to-server name mapping dictionary, leading to 404 errors on real tool invocation attempts. Impacts LiteLLM MCP proxy functionality. Category: LiteLLM (MCP proxy reliability bug).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP: tool_name_to_mcp_server_name_mapping emptied by cancelled list_tools → 404 on tool calls`.
