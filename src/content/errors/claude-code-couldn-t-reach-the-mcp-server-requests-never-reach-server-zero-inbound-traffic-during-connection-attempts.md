---
title: "Claude Code MCP server connection always fails with 'Couldn't reach the MCP server'"
description: "Fix remote MCP server connection failure via Claude.ai web connector Settings → Integrations → Custom MCP Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Couldn't reach the MCP server — requests never reach server, zero inbound traffic during connection attempts"
common_causes:
  - "GitHub issue #62093 on anthropics/claude-code (created 2026-05-24). Remote MCP server with OAuth 2.1 + PKCE passes all health checks, curl from external IPs returns HTTP 200, local CLI works with 165 tools loaded, but web connector fails before reaching server. Suggests Anthropic relay infrastructure failure. High commercial value — breaks Claude Code Pro/Max paid subscriptions for MCP integrations. Category: Claude Code is an AI coding tool → AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T23:43:12.082Z"
updated_at: "2026-05-24T23:43:12.082Z"
---

## What this error means

`Couldn't reach the MCP server — requests never reach server, zero inbound traffic during connection attempts` is a Claude Code failure pattern reported for developers trying to fix remote mcp server connection failure via claude.ai web connector settings → integrations → custom mcp. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #62093 on anthropics/claude-code (created 2026-05-24). Remote MCP server with OAuth 2.1 + PKCE passes all health checks, curl from external IPs returns HTTP 200, local CLI works with 165 tools loaded, but web connector fails before reaching server. Suggests Anthropic relay infrastructure failure. High commercial value — breaks Claude Code Pro/Max paid subscriptions for MCP integrations. Category: Claude Code is an AI coding tool → AI Coding Tools.

## Common causes

- GitHub issue #62093 on anthropics/claude-code (created 2026-05-24). Remote MCP server with OAuth 2.1 + PKCE passes all health checks, curl from external IPs returns HTTP 200, local CLI works with 165 tools loaded, but web connector fails before reaching server. Suggests Anthropic relay infrastructure failure. High commercial value — breaks Claude Code Pro/Max paid subscriptions for MCP integrations. Category: Claude Code is an AI coding tool → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Couldn't reach the MCP server — requests never reach server, zero inbound traffic during connection attempts`.
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

- https://github.com/anthropics/claude-code/issues/62093

Evidence note: GitHub issue #62093 on anthropics/claude-code (created 2026-05-24). Remote MCP server with OAuth 2.1 + PKCE passes all health checks, curl from external IPs returns HTTP 200, local CLI works with 165 tools loaded, but web connector fails before reaching server. Suggests Anthropic relay infrastructure failure. High commercial value — breaks Claude Code Pro/Max paid subscriptions for MCP integrations. Category: Claude Code is an AI coding tool → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Couldn't reach the MCP server — requests never reach server, zero inbound traffic during connection attempts` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Couldn't reach the MCP server — requests never reach server, zero inbound traffic during connection attempts`.
