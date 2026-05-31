---
title: "Claude Code attempts OAuth instead of Bearer token for remote MCP servers"
description: "Fix Claude Code incorrectly attempting OAuth flow for remote MCP servers configured with static Bearer token headers, resulting in 404 HTML parse errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"SDK auth failed: HTTP 404: Invalid OAuth error response: SyntaxError: JSON Parse error: Unrecognized token '<'\""
common_causes:
  - "Issue #47424 on anthropics/claude-code: Remote HTTP MCP server with Bearer token auth fails because Claude Code tries OAuth discovery. Server has no OAuth endpoints (only Bearer header). Users stuck unable to use configured MCP without OAuth support. Tier-0 API search confirmed this issue."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T13:44:24.803Z"
updated_at: "2026-05-31T13:44:24.803Z"
---

## What this error means

`"SDK auth failed: HTTP 404: Invalid OAuth error response: SyntaxError: JSON Parse error: Unrecognized token '<'"` is a Claude Code failure pattern reported for developers trying to fix claude code incorrectly attempting oauth flow for remote mcp servers configured with static bearer token headers, resulting in 404 html parse errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #47424 on anthropics/claude-code: Remote HTTP MCP server with Bearer token auth fails because Claude Code tries OAuth discovery. Server has no OAuth endpoints (only Bearer header). Users stuck unable to use configured MCP without OAuth support. Tier-0 API search confirmed this issue.

## Common causes

- Issue #47424 on anthropics/claude-code: Remote HTTP MCP server with Bearer token auth fails because Claude Code tries OAuth discovery. Server has no OAuth endpoints (only Bearer header). Users stuck unable to use configured MCP without OAuth support. Tier-0 API search confirmed this issue.

## Quick fixes

1. Confirm the exact error signature matches `"SDK auth failed: HTTP 404: Invalid OAuth error response: SyntaxError: JSON Parse error: Unrecognized token '<'"`.
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

- https://github.com/anthropics/claude-code/issues/47424

Evidence note: Issue #47424 on anthropics/claude-code: Remote HTTP MCP server with Bearer token auth fails because Claude Code tries OAuth discovery. Server has no OAuth endpoints (only Bearer header). Users stuck unable to use configured MCP without OAuth support. Tier-0 API search confirmed this issue.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"SDK auth failed: HTTP 404: Invalid OAuth error response: SyntaxError: JSON Parse error: Unrecognized token '<'"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"SDK auth failed: HTTP 404: Invalid OAuth error response: SyntaxError: JSON Parse error: Unrecognized token '<'"`.
