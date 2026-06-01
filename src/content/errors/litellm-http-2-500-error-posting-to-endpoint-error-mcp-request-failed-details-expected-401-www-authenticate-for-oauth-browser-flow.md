---
title: "LiteLLM interactive OAuth2 MCP server returns 500 instead of proper 401+WWW-Authenticate"
description: "Fix LiteLLM proxy returning 500 errors instead of HTTP 401 with WWW-Authenticate header when MCP server OAuth2 auth is required but user has no Google OAuth token yet Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "HTTP/2 500 \"Error POSTing to endpoint: {\"error\":\"MCP request failed\",\"details\":\"\"}\" — expected 401 WWW-Authenticate for OAuth browser flow"
common_causes:
  - "GitHub Issue #29261 (BerriAI/litellm): When MCP server configured with auth_type oauth2 sends request with valid x-litellm-api-key but no Authorization header, LiteLLM 1.85.0 returns HTTP 500 instead of clean 401 + WWW-Authenticate header. This prevents MCP clients (OpenCode, Claude Code) from initiating the OAuth browser flow. Directly blocks production AI gateway setups using LiteLLM enterprise features."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-06-01"
published_at: "2026-06-01T10:44:26.658Z"
updated_at: "2026-06-01T10:44:26.658Z"
---

## What this error means

`HTTP/2 500 "Error POSTing to endpoint: {"error":"MCP request failed","details":""}" — expected 401 WWW-Authenticate for OAuth browser flow` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy returning 500 errors instead of http 401 with www-authenticate header when mcp server oauth2 auth is required but user has no google oauth token yet. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #29261 (BerriAI/litellm): When MCP server configured with auth_type oauth2 sends request with valid x-litellm-api-key but no Authorization header, LiteLLM 1.85.0 returns HTTP 500 instead of clean 401 + WWW-Authenticate header. This prevents MCP clients (OpenCode, Claude Code) from initiating the OAuth browser flow. Directly blocks production AI gateway setups using LiteLLM enterprise features.

## Common causes

- GitHub Issue #29261 (BerriAI/litellm): When MCP server configured with auth_type oauth2 sends request with valid x-litellm-api-key but no Authorization header, LiteLLM 1.85.0 returns HTTP 500 instead of clean 401 + WWW-Authenticate header. This prevents MCP clients (OpenCode, Claude Code) from initiating the OAuth browser flow. Directly blocks production AI gateway setups using LiteLLM enterprise features.

## Quick fixes

1. Confirm the exact error signature matches `HTTP/2 500 "Error POSTing to endpoint: {"error":"MCP request failed","details":""}" — expected 401 WWW-Authenticate for OAuth browser flow`.
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

- https://github.com/BerriAI/litellm/issues/29261

Evidence note: GitHub Issue #29261 (BerriAI/litellm): When MCP server configured with auth_type oauth2 sends request with valid x-litellm-api-key but no Authorization header, LiteLLM 1.85.0 returns HTTP 500 instead of clean 401 + WWW-Authenticate header. This prevents MCP clients (OpenCode, Claude Code) from initiating the OAuth browser flow. Directly blocks production AI gateway setups using LiteLLM enterprise features.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `HTTP/2 500 "Error POSTing to endpoint: {"error":"MCP request failed","details":""}" — expected 401 WWW-Authenticate for OAuth browser flow` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP/2 500 "Error POSTing to endpoint: {"error":"MCP request failed","details":""}" — expected 401 WWW-Authenticate for OAuth browser flow`.
