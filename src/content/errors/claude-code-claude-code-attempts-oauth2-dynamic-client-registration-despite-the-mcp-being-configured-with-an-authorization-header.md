---
title: "Claude Code HTTP transport with Authorization header triggers unnecessary OAuth DCR attempt"
description: "Resolve Claude Code forcing OAuth2 DCR flow even when MCP server has pre-configured Bearer token via Authorization header — causes unexpected authentication redirects for existing API-based MCP servers Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code attempts OAuth2 Dynamic Client Registration despite the MCP being configured with an Authorization header"
common_causes:
  - "GitHub Issue #2831 on anthropics/claude-code: When MCP server configured with type=http and Authorization: Bearer header, Claude Code ignores it and tries OAuth2 DCR instead. Similar to prior issue #1763. Fixed in v1.0.40 but regression risk remains. Categorized as AI Coding Tools per SKILL.md mapping."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T17:37:13.645Z"
updated_at: "2026-05-18T17:37:13.645Z"
---

## What this error means

`Claude Code attempts OAuth2 Dynamic Client Registration despite the MCP being configured with an Authorization header` is a Claude Code failure pattern reported for developers trying to resolve claude code forcing oauth2 dcr flow even when mcp server has pre-configured bearer token via authorization header — causes unexpected authentication redirects for existing api-based mcp servers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2831 on anthropics/claude-code: When MCP server configured with type=http and Authorization: Bearer header, Claude Code ignores it and tries OAuth2 DCR instead. Similar to prior issue #1763. Fixed in v1.0.40 but regression risk remains. Categorized as AI Coding Tools per SKILL.md mapping.

## Common causes

- GitHub Issue #2831 on anthropics/claude-code: When MCP server configured with type=http and Authorization: Bearer header, Claude Code ignores it and tries OAuth2 DCR instead. Similar to prior issue #1763. Fixed in v1.0.40 but regression risk remains. Categorized as AI Coding Tools per SKILL.md mapping.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code attempts OAuth2 Dynamic Client Registration despite the MCP being configured with an Authorization header`.
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

- https://github.com/anthropics/claude-code/issues/2831

Evidence note: GitHub Issue #2831 on anthropics/claude-code: When MCP server configured with type=http and Authorization: Bearer header, Claude Code ignores it and tries OAuth2 DCR instead. Similar to prior issue #1763. Fixed in v1.0.40 but regression risk remains. Categorized as AI Coding Tools per SKILL.md mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code attempts OAuth2 Dynamic Client Registration despite the MCP being configured with an Authorization header` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code attempts OAuth2 Dynamic Client Registration despite the MCP being configured with an Authorization header`.
