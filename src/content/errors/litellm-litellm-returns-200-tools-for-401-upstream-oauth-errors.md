---
title: "LiteLLM Proxy Swallows 401 Errors — Returns Empty Tools List Instead of Authentication Failure"
description: "Fix LiteLLM returning empty tools list when upstream MCP server returns 401 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM returns 200 {tools:[]} for 401 upstream OAuth errors"
common_causes:
  - "OAuth2 MCP servers behind LiteLLM fail silently — LiteLLM returns 200 with empty tools instead of surfacing the 401 auth error, making debugging impossible"
  - "MCP servers with extra_headers Authorization forwarding return 200 {tools:[]} instead of 401 when token is expired/invalid. Root cause: MCP SDK StreamableHTTPSessionManager silently converts error to success."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM MCP OAuth2 token refresh"
  - "LiteLLM proxy authentication error"
updated: "2026-05-13"
published_at: "2026-05-13T21:13:17.831Z"
updated_at: "2026-05-13T21:13:17.831Z"
---

## What this error means

`LiteLLM returns 200 {tools:[]} for 401 upstream OAuth errors` is a LiteLLM failure pattern reported for developers trying to fix litellm returning empty tools list when upstream mcp server returns 401. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

MCP servers with extra_headers Authorization forwarding return 200 {tools:[]} instead of 401 when token is expired/invalid. Root cause: MCP SDK StreamableHTTPSessionManager silently converts error to success.

## Common causes

- OAuth2 MCP servers behind LiteLLM fail silently — LiteLLM returns 200 with empty tools instead of surfacing the 401 auth error, making debugging impossible
- MCP servers with extra_headers Authorization forwarding return 200 {tools:[]} instead of 401 when token is expired/invalid. Root cause: MCP SDK StreamableHTTPSessionManager silently converts error to success.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM returns 200 {tools:[]} for 401 upstream OAuth errors`.
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

- https://github.com/BerriAI/litellm/pull/27847

Evidence note: MCP servers with extra_headers Authorization forwarding return 200 {tools:[]} instead of 401 when token is expired/invalid. Root cause: MCP SDK StreamableHTTPSessionManager silently converts error to success.

## Related errors

- LiteLLM MCP OAuth2 token refresh
- LiteLLM proxy authentication error

## FAQ

### What should I check first?

Start with the exact `LiteLLM returns 200 {tools:[]} for 401 upstream OAuth errors` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM returns 200 {tools:[]} for 401 upstream OAuth errors`.
