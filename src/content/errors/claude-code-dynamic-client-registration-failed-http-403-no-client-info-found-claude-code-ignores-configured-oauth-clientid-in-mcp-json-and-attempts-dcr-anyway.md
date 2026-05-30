---
title: "Claude Code fails connecting to MCP servers without Dynamic Client Registration — OAuth flow aborts with 403"
description: "Fix Claude Code MCP connection failure with OAuth providers (Auth0, AWS Cognito, Okta) that do not support RFC 7591 Dynamic Client Registration — find workaround or permanent fix for OAuth auth flow Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Dynamic client registration failed: HTTP 403 / No client info found / Claude Code ignores configured oauth.clientId in .mcp.json and attempts DCR anyway"
common_causes:
  - "GitHub Issue #3273 on anthropics/claude-code: 52+ 👍 reactions, ongoing discussion as of May 2026. Root cause: Claude Code forces DCR (RFC 7591) even when .mcp.json declares clientId; DCR fails 404/403 for Cognito/Auth0. Fixed as resolved in v2.1.30 via --client-id flag. Still highly searched because many users haven't upgraded or use custom plugin MCP servers (Cowork/GitHub plugin) that lack clientId plumbing."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T06:43:28.488Z"
updated_at: "2026-05-30T06:43:28.488Z"
---

## What this error means

`Dynamic client registration failed: HTTP 403 / No client info found / Claude Code ignores configured oauth.clientId in .mcp.json and attempts DCR anyway` is a Claude Code failure pattern reported for developers trying to fix claude code mcp connection failure with oauth providers (auth0, aws cognito, okta) that do not support rfc 7591 dynamic client registration — find workaround or permanent fix for oauth auth flow. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #3273 on anthropics/claude-code: 52+ 👍 reactions, ongoing discussion as of May 2026. Root cause: Claude Code forces DCR (RFC 7591) even when .mcp.json declares clientId; DCR fails 404/403 for Cognito/Auth0. Fixed as resolved in v2.1.30 via --client-id flag. Still highly searched because many users haven't upgraded or use custom plugin MCP servers (Cowork/GitHub plugin) that lack clientId plumbing.

## Common causes

- GitHub Issue #3273 on anthropics/claude-code: 52+ 👍 reactions, ongoing discussion as of May 2026. Root cause: Claude Code forces DCR (RFC 7591) even when .mcp.json declares clientId; DCR fails 404/403 for Cognito/Auth0. Fixed as resolved in v2.1.30 via --client-id flag. Still highly searched because many users haven't upgraded or use custom plugin MCP servers (Cowork/GitHub plugin) that lack clientId plumbing.

## Quick fixes

1. Confirm the exact error signature matches `Dynamic client registration failed: HTTP 403 / No client info found / Claude Code ignores configured oauth.clientId in .mcp.json and attempts DCR anyway`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/3273
- https://github.com/anthropics/claude-code/issues/5826
- https://github.com/anthropics/claude-code/issues/2831

Evidence note: GitHub Issue #3273 on anthropics/claude-code: 52+ 👍 reactions, ongoing discussion as of May 2026. Root cause: Claude Code forces DCR (RFC 7591) even when .mcp.json declares clientId; DCR fails 404/403 for Cognito/Auth0. Fixed as resolved in v2.1.30 via --client-id flag. Still highly searched because many users haven't upgraded or use custom plugin MCP servers (Cowork/GitHub plugin) that lack clientId plumbing.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Dynamic client registration failed: HTTP 403 / No client info found / Claude Code ignores configured oauth.clientId in .mcp.json and attempts DCR anyway` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Dynamic client registration failed: HTTP 403 / No client info found / Claude Code ignores configured oauth.clientId in .mcp.json and attempts DCR anyway`.
