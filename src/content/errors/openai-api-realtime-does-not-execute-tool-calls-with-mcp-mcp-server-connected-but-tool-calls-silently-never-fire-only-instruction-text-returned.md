---
title: "OpenAI Realtime API MCP tool calls not executing with Azure deployment"
description: "Fix OpenAI Realtime API MCP integration: tool calls never execute despite MCP server being connected and verified with inspector Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Realtime does not execute tool calls with mcp — MCP server connected but tool calls silently never fire, only instruction text returned"
common_causes:
  - "GitHub issue openai/openai-python#3128 (Apr 2026, bug-labeled): OpenAI Realtime SIP app connected to Twilio with MCP server (Langflow). MCP verified working with @modelcontextprotocol/inspector. Tool calls never fire — app only returns instruction text. Affects Azure OpenAI Realtime endpoint. Category mapping: OpenAI API (API feature failure)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "OpenAI API"
updated: "2026-05-16"
published_at: "2026-05-16T02:13:24.265Z"
updated_at: "2026-05-16T02:13:24.265Z"
---

## What this error means

`Realtime does not execute tool calls with mcp — MCP server connected but tool calls silently never fire, only instruction text returned` is a OpenAI API failure pattern reported for developers trying to fix openai realtime api mcp integration: tool calls never execute despite mcp server being connected and verified with inspector. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/openai-python#3128 (Apr 2026, bug-labeled): OpenAI Realtime SIP app connected to Twilio with MCP server (Langflow). MCP verified working with @modelcontextprotocol/inspector. Tool calls never fire — app only returns instruction text. Affects Azure OpenAI Realtime endpoint. Category mapping: OpenAI API (API feature failure).

## Common causes

- GitHub issue openai/openai-python#3128 (Apr 2026, bug-labeled): OpenAI Realtime SIP app connected to Twilio with MCP server (Langflow). MCP verified working with @modelcontextprotocol/inspector. Tool calls never fire — app only returns instruction text. Affects Azure OpenAI Realtime endpoint. Category mapping: OpenAI API (API feature failure).

## Quick fixes

1. Confirm the exact error signature matches `Realtime does not execute tool calls with mcp — MCP server connected but tool calls silently never fire, only instruction text returned`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/openai/openai-python/issues/3128

Evidence note: GitHub issue openai/openai-python#3128 (Apr 2026, bug-labeled): OpenAI Realtime SIP app connected to Twilio with MCP server (Langflow). MCP verified working with @modelcontextprotocol/inspector. Tool calls never fire — app only returns instruction text. Affects Azure OpenAI Realtime endpoint. Category mapping: OpenAI API (API feature failure).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Realtime does not execute tool calls with mcp — MCP server connected but tool calls silently never fire, only instruction text returned` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Realtime does not execute tool calls with mcp — MCP server connected but tool calls silently never fire, only instruction text returned`.
