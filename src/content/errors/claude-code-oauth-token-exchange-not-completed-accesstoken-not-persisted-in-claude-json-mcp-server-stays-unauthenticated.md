---
title: "Claude Code MCP OAuth Token Exchange fails with non-DCR Authorization Server (Cloudflare Access)"
description: "Fix Claude Code failing to complete OAuth token exchange when connecting to remote MCP servers backed by non-DCR Authorization Servers like Cloudflare Access for SaaS OIDC Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth Token Exchange not completed — accessToken not persisted in ~/.claude.json; MCP server stays unauthenticated"
common_causes:
  - "anthropics/claude-code #60395 — detailed reproduction with Cloudflare Access OIDC; browser auth flow succeeds but token POST either drops or response not persisted; affects paid enterprise users with custom MCP setups."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T08:44:26.499Z"
updated_at: "2026-06-01T08:44:26.499Z"
---

## What this error means

`OAuth Token Exchange not completed — accessToken not persisted in ~/.claude.json; MCP server stays unauthenticated` is a Claude Code failure pattern reported for developers trying to fix claude code failing to complete oauth token exchange when connecting to remote mcp servers backed by non-dcr authorization servers like cloudflare access for saas oidc. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code #60395 — detailed reproduction with Cloudflare Access OIDC; browser auth flow succeeds but token POST either drops or response not persisted; affects paid enterprise users with custom MCP setups.

## Common causes

- anthropics/claude-code #60395 — detailed reproduction with Cloudflare Access OIDC; browser auth flow succeeds but token POST either drops or response not persisted; affects paid enterprise users with custom MCP setups.

## Quick fixes

1. Confirm the exact error signature matches `OAuth Token Exchange not completed — accessToken not persisted in ~/.claude.json; MCP server stays unauthenticated`.
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

- https://github.com/anthropics/claude-code/issues/60395

Evidence note: anthropics/claude-code #60395 — detailed reproduction with Cloudflare Access OIDC; browser auth flow succeeds but token POST either drops or response not persisted; affects paid enterprise users with custom MCP setups.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth Token Exchange not completed — accessToken not persisted in ~/.claude.json; MCP server stays unauthenticated` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth Token Exchange not completed — accessToken not persisted in ~/.claude.json; MCP server stays unauthenticated`.
