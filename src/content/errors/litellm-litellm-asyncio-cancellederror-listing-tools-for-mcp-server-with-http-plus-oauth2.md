---
title: "LiteLLM asyncio.CancelledError — MCP Tool Discovery Fails with HTTP Transport and OAuth2"
description: "Fix LiteLLM asyncio.CancelledError when listing tools for MCP server with HTTP transport and OAuth2 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM asyncio.CancelledError listing tools for MCP server with HTTP + OAuth2"
common_causes:
  - "MCP servers registered via REST API with Streamable HTTP + OAuth2 always fail tool discovery with asyncio.CancelledError — silent failure mode for enterprise MCP deployments"
  - "MCP server with transport:http + auth_type:oauth2 registered via POST /v1/mcp/server always fails tool discovery with asyncio.CancelledError. Server creates successfully (201) but tool listing fails silently."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM MCP server connection timeout"
  - "LiteLLM OAuth2 MCP authentication"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`LiteLLM asyncio.CancelledError listing tools for MCP server with HTTP + OAuth2` is a LiteLLM failure pattern reported for developers trying to fix litellm asyncio.cancellederror when listing tools for mcp server with http transport and oauth2. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

MCP server with transport:http + auth_type:oauth2 registered via POST /v1/mcp/server always fails tool discovery with asyncio.CancelledError. Server creates successfully (201) but tool listing fails silently.

## Common causes

- MCP servers registered via REST API with Streamable HTTP + OAuth2 always fail tool discovery with asyncio.CancelledError — silent failure mode for enterprise MCP deployments
- MCP server with transport:http + auth_type:oauth2 registered via POST /v1/mcp/server always fails tool discovery with asyncio.CancelledError. Server creates successfully (201) but tool listing fails silently.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM asyncio.CancelledError listing tools for MCP server with HTTP + OAuth2`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27635

Evidence note: MCP server with transport:http + auth_type:oauth2 registered via POST /v1/mcp/server always fails tool discovery with asyncio.CancelledError. Server creates successfully (201) but tool listing fails silently.

## Related errors

- LiteLLM MCP server connection timeout
- LiteLLM OAuth2 MCP authentication

## FAQ

### What should I check first?

Start with the exact `LiteLLM asyncio.CancelledError listing tools for MCP server with HTTP + OAuth2` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM asyncio.CancelledError listing tools for MCP server with HTTP + OAuth2`.
