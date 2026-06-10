---
title: "[BUG] HTTP MCP server returning RFC 6750 401 without RFC 9728 resource_metadata_hint surfaces as Failed to connect instead of triggering OAuth dance"
description: "Fix Claude Code MCP OAuth authentication failure where OAuth 2.1 dance flow is not triggered after receiving RFC 6750 401 response Includes evidence for Claude Code (Anthropic) troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code (Anthropic)"
error_signature: "HTTP MCP server returns RFC 6750 401 but fails to trigger OAuth 2.1 dance flow due to missing RFC 9728 resource_metadata_hint parameter"
common_causes:
  - "GitHub issue #61376 on anthropics/claude-code repo: The MCP OAuth implementation returns RFC 6750 401 but omits RFC 9728 resource_metadata_hint in WWW-Authenticate header, so OAuth 2.1 dance flow is not triggered and users see generic Failed to connect error instead of proper OAuth 2.1 dance flow. This blocks enterprise SSO integrations for Claude Code users."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T09:36:11.355Z"
updated_at: "2026-06-10T09:36:11.355Z"
---

## What this error means

`HTTP MCP server returns RFC 6750 401 but fails to trigger OAuth 2.1 dance flow due to missing RFC 9728 resource_metadata_hint parameter` is a Claude Code (Anthropic) failure pattern reported for developers trying to fix claude code mcp oauth authentication failure where oauth 2.1 dance flow is not triggered after receiving rfc 6750 401 response. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61376 on anthropics/claude-code repo: The MCP OAuth implementation returns RFC 6750 401 but omits RFC 9728 resource_metadata_hint in WWW-Authenticate header, so OAuth 2.1 dance flow is not triggered and users see generic Failed to connect error instead of proper OAuth 2.1 dance flow. This blocks enterprise SSO integrations for Claude Code users.

## Common causes

- GitHub issue #61376 on anthropics/claude-code repo: The MCP OAuth implementation returns RFC 6750 401 but omits RFC 9728 resource_metadata_hint in WWW-Authenticate header, so OAuth 2.1 dance flow is not triggered and users see generic Failed to connect error instead of proper OAuth 2.1 dance flow. This blocks enterprise SSO integrations for Claude Code users.

## Quick fixes

1. Confirm the exact error signature matches `HTTP MCP server returns RFC 6750 401 but fails to trigger OAuth 2.1 dance flow due to missing RFC 9728 resource_metadata_hint parameter`.
2. Check the Claude Code (Anthropic) account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/61376

Evidence note: GitHub issue #61376 on anthropics/claude-code repo: The MCP OAuth implementation returns RFC 6750 401 but omits RFC 9728 resource_metadata_hint in WWW-Authenticate header, so OAuth 2.1 dance flow is not triggered and users see generic Failed to connect error instead of proper OAuth 2.1 dance flow. This blocks enterprise SSO integrations for Claude Code users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP MCP server returns RFC 6750 401 but fails to trigger OAuth 2.1 dance flow due to missing RFC 9728 resource_metadata_hint parameter` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code (Anthropic) workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP MCP server returns RFC 6750 401 but fails to trigger OAuth 2.1 dance flow due to missing RFC 9728 resource_metadata_hint parameter`.
