---
title: "Claude Code MCP Tool Calls Blocked by Cloudflare WAF SQL Injection False Positive"
description: "Fix Claude Code MCP POST requests being blocked by Cloudflare WAF SQL injection rules Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Cloudflare WAF blocks MCP tool calls with SQL-shaped patterns, returns opaque HTML error page"
common_causes:
  - "MCP tool calls POSTing through api.anthropic.com are blocked by Cloudflare WAF when the request body contains SQL-shaped patterns (e.g., 'DELETE FROM a; DROP TABLE b;'). The block returns an opaque HTML error page with no actionable failure signal, making debugging impossible."
  - "MCP tool calls to api.anthropic.com blocked by Cloudflare WAF SQL injection false positive. Returns opaque HTML error page. Minimal repro with 28-byte payload: 'DELETE FROM a; DROP TABLE b;'. Reported May 12, 2026 in official repo."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "MCP relay WAF blocks tool calls with 'oauth' string"
  - "Cloudflare WAF false positives for API POST requests"
updated: "2026-05-12"
published_at: "2026-05-12T20:12:18.326Z"
updated_at: "2026-05-12T20:12:18.326Z"
---

## What this error means

`Cloudflare WAF blocks MCP tool calls with SQL-shaped patterns, returns opaque HTML error page` is a Claude Code failure pattern reported for developers trying to fix claude code mcp post requests being blocked by cloudflare waf sql injection rules. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

MCP tool calls to api.anthropic.com blocked by Cloudflare WAF SQL injection false positive. Returns opaque HTML error page. Minimal repro with 28-byte payload: 'DELETE FROM a; DROP TABLE b;'. Reported May 12, 2026 in official repo.

## Common causes

- MCP tool calls POSTing through api.anthropic.com are blocked by Cloudflare WAF when the request body contains SQL-shaped patterns (e.g., 'DELETE FROM a; DROP TABLE b;'). The block returns an opaque HTML error page with no actionable failure signal, making debugging impossible.
- MCP tool calls to api.anthropic.com blocked by Cloudflare WAF SQL injection false positive. Returns opaque HTML error page. Minimal repro with 28-byte payload: 'DELETE FROM a; DROP TABLE b;'. Reported May 12, 2026 in official repo.

## Quick fixes

1. Confirm the exact error signature matches `Cloudflare WAF blocks MCP tool calls with SQL-shaped patterns, returns opaque HTML error page`.
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

- https://github.com/anthropics/claude-code/issues/58294

Evidence note: MCP tool calls to api.anthropic.com blocked by Cloudflare WAF SQL injection false positive. Returns opaque HTML error page. Minimal repro with 28-byte payload: 'DELETE FROM a; DROP TABLE b;'. Reported May 12, 2026 in official repo.

## Related errors

- MCP relay WAF blocks tool calls with 'oauth' string
- Cloudflare WAF false positives for API POST requests

## FAQ

### What should I check first?

Start with the exact `Cloudflare WAF blocks MCP tool calls with SQL-shaped patterns, returns opaque HTML error page` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cloudflare WAF blocks MCP tool calls with SQL-shaped patterns, returns opaque HTML error page`.
