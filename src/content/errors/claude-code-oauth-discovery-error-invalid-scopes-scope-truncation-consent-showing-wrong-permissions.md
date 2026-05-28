---
title: "Claude MCP Server OAuth Discovery Failure: Invalid Scopes and Resource Path Truncation"
description: "Fix MCP server OAuth discovery issues where scopes are truncated, wrong permissions shown in consent dialog, or 'Invalid scopes' error prevents connection to hosted MCP servers with OAuth Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth discovery error – invalid scopes, scope truncation, consent showing wrong permissions"
common_causes:
  - "From ekamoira.com blog (updated 2026-05-28) covering OAuth for Claude.ai & ChatGPT hosted MCP servers: issues include clients registered with wrong scopes causing 'Invalid scopes' error, OAuth discovery path truncation showing blog permissions instead of intended service, missing RFC 8707 resource filtering showing all scopes. Fix: delete connection, wait 30s, re-add with fresh OAuth flow; ensure distinct URL paths."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T07:43:22.528Z"
updated_at: "2026-05-28T07:43:22.528Z"
---

## What this error means

`OAuth discovery error – invalid scopes, scope truncation, consent showing wrong permissions` is a Claude Code failure pattern reported for developers trying to fix mcp server oauth discovery issues where scopes are truncated, wrong permissions shown in consent dialog, or 'invalid scopes' error prevents connection to hosted mcp servers with oauth. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

From ekamoira.com blog (updated 2026-05-28) covering OAuth for Claude.ai & ChatGPT hosted MCP servers: issues include clients registered with wrong scopes causing 'Invalid scopes' error, OAuth discovery path truncation showing blog permissions instead of intended service, missing RFC 8707 resource filtering showing all scopes. Fix: delete connection, wait 30s, re-add with fresh OAuth flow; ensure distinct URL paths.

## Common causes

- From ekamoira.com blog (updated 2026-05-28) covering OAuth for Claude.ai & ChatGPT hosted MCP servers: issues include clients registered with wrong scopes causing 'Invalid scopes' error, OAuth discovery path truncation showing blog permissions instead of intended service, missing RFC 8707 resource filtering showing all scopes. Fix: delete connection, wait 30s, re-add with fresh OAuth flow; ensure distinct URL paths.

## Quick fixes

1. Confirm the exact error signature matches `OAuth discovery error – invalid scopes, scope truncation, consent showing wrong permissions`.
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

- https://www.ekamoira.com/blog/gsc-mcp-server-setup-complete-troubleshooting-guide-for-claude-desktop

Evidence note: From ekamoira.com blog (updated 2026-05-28) covering OAuth for Claude.ai & ChatGPT hosted MCP servers: issues include clients registered with wrong scopes causing 'Invalid scopes' error, OAuth discovery path truncation showing blog permissions instead of intended service, missing RFC 8707 resource filtering showing all scopes. Fix: delete connection, wait 30s, re-add with fresh OAuth flow; ensure distinct URL paths.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth discovery error – invalid scopes, scope truncation, consent showing wrong permissions` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth discovery error – invalid scopes, scope truncation, consent showing wrong permissions`.
