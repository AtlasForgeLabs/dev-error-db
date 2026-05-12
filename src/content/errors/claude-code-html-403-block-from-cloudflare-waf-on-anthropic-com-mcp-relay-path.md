---
title: "Claude Code MCP Relay Cloudflare WAF 403 on Tool Calls"
description: "Fix Claude Code MCP tool calls being blocked by Cloudflare WAF returning 403 errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTML 403 block from Cloudflare WAF on anthropic.com MCP relay path"
common_causes:
  - "When MCP tool call request bodies contain the literal string 'oauth' (e.g., debugging OAuth-protected MCP integrations), the Cloudflare WAF on anthropic.com blocks the request with an opaque HTML 403 page. This prevents developers from using Claude Code to debug OAuth MCP integrations, a common enterprise workflow."
  - "Cloudflare WAF on anthropic.com (MCP relay path) returns HTML 403 when tool call body contains 'oauth' string. Reported May 12, 2026, open issue in official anthropics/claude-code repo. Affects debugging of OAuth-protected MCP integrations (RFC 9728 / RFC 8414)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "MCP tool calls blocked by Cloudflare WAF SQL injection false positive"
  - "Claude Code MCP relay timeout errors"
updated: "2026-05-12"
published_at: "2026-05-12T20:12:18.326Z"
updated_at: "2026-05-12T20:12:18.326Z"
---

## What this error means

`HTML 403 block from Cloudflare WAF on anthropic.com MCP relay path` is a Claude Code failure pattern reported for developers trying to fix claude code mcp tool calls being blocked by cloudflare waf returning 403 errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cloudflare WAF on anthropic.com (MCP relay path) returns HTML 403 when tool call body contains 'oauth' string. Reported May 12, 2026, open issue in official anthropics/claude-code repo. Affects debugging of OAuth-protected MCP integrations (RFC 9728 / RFC 8414).

## Common causes

- When MCP tool call request bodies contain the literal string 'oauth' (e.g., debugging OAuth-protected MCP integrations), the Cloudflare WAF on anthropic.com blocks the request with an opaque HTML 403 page. This prevents developers from using Claude Code to debug OAuth MCP integrations, a common enterprise workflow.
- Cloudflare WAF on anthropic.com (MCP relay path) returns HTML 403 when tool call body contains 'oauth' string. Reported May 12, 2026, open issue in official anthropics/claude-code repo. Affects debugging of OAuth-protected MCP integrations (RFC 9728 / RFC 8414).

## Quick fixes

1. Confirm the exact error signature matches `HTML 403 block from Cloudflare WAF on anthropic.com MCP relay path`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/58472

Evidence note: Cloudflare WAF on anthropic.com (MCP relay path) returns HTML 403 when tool call body contains 'oauth' string. Reported May 12, 2026, open issue in official anthropics/claude-code repo. Affects debugging of OAuth-protected MCP integrations (RFC 9728 / RFC 8414).

## Related errors

- MCP tool calls blocked by Cloudflare WAF SQL injection false positive
- Claude Code MCP relay timeout errors

## FAQ

### What should I check first?

Start with the exact `HTML 403 block from Cloudflare WAF on anthropic.com MCP relay path` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTML 403 block from Cloudflare WAF on anthropic.com MCP relay path`.
