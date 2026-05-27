---
title: "Claude Code HTTP MCP OAuth Login Drops Path Base"
description: "Fix Claude Code OAuth flow losing the configured path base when authenticating against MCP servers mounted under non-root paths (e.g., http://host/app/api) Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth login drops path base for non-root path MCP servers"
common_causes:
  - "Report (2026-03-15) for Claude Code dropping configured path base during OAuth authorization redirect for HTTP MCP servers. Users configure MCP servers at non-root paths but OAuth login redirects strip the base path entirely. High commercial value as affects production AI agent workflows. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T03:43:18.842Z"
updated_at: "2026-05-27T03:43:18.842Z"
---

## What this error means

`OAuth login drops path base for non-root path MCP servers` is a Claude Code failure pattern reported for developers trying to fix claude code oauth flow losing the configured path base when authenticating against mcp servers mounted under non-root paths (e.g., http://host/app/api). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Report (2026-03-15) for Claude Code dropping configured path base during OAuth authorization redirect for HTTP MCP servers. Users configure MCP servers at non-root paths but OAuth login redirects strip the base path entirely. High commercial value as affects production AI agent workflows. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools per mapping rules.

## Common causes

- Report (2026-03-15) for Claude Code dropping configured path base during OAuth authorization redirect for HTTP MCP servers. Users configure MCP servers at non-root paths but OAuth login redirects strip the base path entirely. High commercial value as affects production AI agent workflows. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `OAuth login drops path base for non-root path MCP servers`.
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

- https://github.com/anthropics/claude-code/issues/34641

Evidence note: Report (2026-03-15) for Claude Code dropping configured path base during OAuth authorization redirect for HTTP MCP servers. Users configure MCP servers at non-root paths but OAuth login redirects strip the base path entirely. High commercial value as affects production AI agent workflows. Tier 0 API blocked, used browser Google search. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth login drops path base for non-root path MCP servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth login drops path base for non-root path MCP servers`.
