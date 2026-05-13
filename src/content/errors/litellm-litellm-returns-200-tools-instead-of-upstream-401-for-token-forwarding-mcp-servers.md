---
title: "LiteLLM MCP Token Forwarding Silently Swallows Upstream 401 Unauthorized Errors"
description: "Fix LiteLLM MCP gateway returning empty tools instead of propagating upstream 401 authentication errors Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM returns 200 {\"tools\":[]} instead of upstream 401 for token-forwarding MCP servers"
common_causes:
  - "When LiteLLM forwards client Bearer tokens to upstream OAuth2 MCP servers, expired or invalid tokens should return 401 — but LiteLLM silently swallows the error and returns 200 with empty tools. This makes debugging authentication failures extremely difficult in production MCP deployments."
  - "LiteLLM PR #27847 fixes MCP SDK StreamableHTTPSessionManager silently swallowing 401 errors. For MCP servers configured with extra_headers: [Authorization], the gateway was returning 200 {tools:[]} instead of propagating upstream 401. This is a critical debugging blocker for OAuth passthrough setups."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM API key rotation breaks MCP server connections"
  - "LiteLLM OAuth2 token refresh failure"
updated: "2026-05-13"
published_at: "2026-05-13T18:13:17.420Z"
updated_at: "2026-05-13T18:13:17.420Z"
---

## What this error means

`LiteLLM returns 200 {"tools":[]} instead of upstream 401 for token-forwarding MCP servers` is a LiteLLM failure pattern reported for developers trying to fix litellm mcp gateway returning empty tools instead of propagating upstream 401 authentication errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM PR #27847 fixes MCP SDK StreamableHTTPSessionManager silently swallowing 401 errors. For MCP servers configured with extra_headers: [Authorization], the gateway was returning 200 {tools:[]} instead of propagating upstream 401. This is a critical debugging blocker for OAuth passthrough setups.

## Common causes

- When LiteLLM forwards client Bearer tokens to upstream OAuth2 MCP servers, expired or invalid tokens should return 401 — but LiteLLM silently swallows the error and returns 200 with empty tools. This makes debugging authentication failures extremely difficult in production MCP deployments.
- LiteLLM PR #27847 fixes MCP SDK StreamableHTTPSessionManager silently swallowing 401 errors. For MCP servers configured with extra_headers: [Authorization], the gateway was returning 200 {tools:[]} instead of propagating upstream 401. This is a critical debugging blocker for OAuth passthrough setups.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM returns 200 {"tools":[]} instead of upstream 401 for token-forwarding MCP servers`.
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

Evidence note: LiteLLM PR #27847 fixes MCP SDK StreamableHTTPSessionManager silently swallowing 401 errors. For MCP servers configured with extra_headers: [Authorization], the gateway was returning 200 {tools:[]} instead of propagating upstream 401. This is a critical debugging blocker for OAuth passthrough setups.

## Related errors

- LiteLLM API key rotation breaks MCP server connections
- LiteLLM OAuth2 token refresh failure

## FAQ

### What should I check first?

Start with the exact `LiteLLM returns 200 {"tools":[]} instead of upstream 401 for token-forwarding MCP servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM returns 200 {"tools":[]} instead of upstream 401 for token-forwarding MCP servers`.
