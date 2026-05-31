---
title: "Claude Code MCP OAuth re-runs Dynamic Client Registration every time, creating forced re-auth loop"
description: "Self-hosted MCP server users experience forced re-authentication loops because Claude Code performs fresh DCR on every authenticate() call instead of persisting and reusing clientId/clientSecret per MCP spec §6.1.4. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "SDK auth failed: Every authenticate call POSTs /oauth/register, minting new client_id/client_secret and orphaning previous refresh_token"
common_causes:
  - "GitHub Issue #59460 (anthropics/claude-code) documents that each authenticate() call creates a new client_id via POST /oauth/register, leaving previous tokens orphaned. Combined with server-side refresh-token rotation, this forces perpetual re-authentication. Evidence includes 30+ client rows over 48h. Category: AI Coding Tools (self-hosted MCP integration)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T22:44:25.443Z"
updated_at: "2026-05-31T22:44:25.443Z"
---

## What this error means

`SDK auth failed: Every authenticate call POSTs /oauth/register, minting new client_id/client_secret and orphaning previous refresh_token` is a Claude Code failure pattern reported for developers trying to self-hosted mcp server users experience forced re-authentication loops because claude code performs fresh dcr on every authenticate() call instead of persisting and reusing clientid/clientsecret per mcp spec §6.1.4.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #59460 (anthropics/claude-code) documents that each authenticate() call creates a new client_id via POST /oauth/register, leaving previous tokens orphaned. Combined with server-side refresh-token rotation, this forces perpetual re-authentication. Evidence includes 30+ client rows over 48h. Category: AI Coding Tools (self-hosted MCP integration).

## Common causes

- GitHub Issue #59460 (anthropics/claude-code) documents that each authenticate() call creates a new client_id via POST /oauth/register, leaving previous tokens orphaned. Combined with server-side refresh-token rotation, this forces perpetual re-authentication. Evidence includes 30+ client rows over 48h. Category: AI Coding Tools (self-hosted MCP integration).

## Quick fixes

1. Confirm the exact error signature matches `SDK auth failed: Every authenticate call POSTs /oauth/register, minting new client_id/client_secret and orphaning previous refresh_token`.
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

- https://github.com/anthropics/claude-code/issues/59460

Evidence note: GitHub Issue #59460 (anthropics/claude-code) documents that each authenticate() call creates a new client_id via POST /oauth/register, leaving previous tokens orphaned. Combined with server-side refresh-token rotation, this forces perpetual re-authentication. Evidence includes 30+ client rows over 48h. Category: AI Coding Tools (self-hosted MCP integration).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `SDK auth failed: Every authenticate call POSTs /oauth/register, minting new client_id/client_secret and orphaning previous refresh_token` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SDK auth failed: Every authenticate call POSTs /oauth/register, minting new client_id/client_secret and orphaning previous refresh_token`.
