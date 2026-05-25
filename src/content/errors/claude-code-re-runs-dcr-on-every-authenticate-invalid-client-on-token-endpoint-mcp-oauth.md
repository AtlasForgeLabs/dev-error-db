---
title: "Claude Code MCP OAuth DCR re-runs on every authentication"
description: "Fix Claude Code MCP OAuth repeatedly executing Dynamic Client Registration instead of caching credentials, causing invalid_client errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"re-runs DCR on every authenticate\" invalid_client on token endpoint MCP OAuth"
common_causes:
  - "Issue anthropics/claude-code#59460: Claude Code re-executes DCR (Dynamic Client Registration) on each OAuth authentication cycle instead of caching the registered client. This causes invalid_client errors on the token endpoint. Directly affects enterprise developers using custom MCP servers with OAuth. Category: AI Coding Tools (auth reliability issue in paid AI coding tool). Source observation from latest stable release May 2026."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T03:43:12.602Z"
updated_at: "2026-05-25T03:43:12.602Z"
---

## What this error means

`"re-runs DCR on every authenticate" invalid_client on token endpoint MCP OAuth` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth repeatedly executing dynamic client registration instead of caching credentials, causing invalid_client errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue anthropics/claude-code#59460: Claude Code re-executes DCR (Dynamic Client Registration) on each OAuth authentication cycle instead of caching the registered client. This causes invalid_client errors on the token endpoint. Directly affects enterprise developers using custom MCP servers with OAuth. Category: AI Coding Tools (auth reliability issue in paid AI coding tool). Source observation from latest stable release May 2026.

## Common causes

- Issue anthropics/claude-code#59460: Claude Code re-executes DCR (Dynamic Client Registration) on each OAuth authentication cycle instead of caching the registered client. This causes invalid_client errors on the token endpoint. Directly affects enterprise developers using custom MCP servers with OAuth. Category: AI Coding Tools (auth reliability issue in paid AI coding tool). Source observation from latest stable release May 2026.

## Quick fixes

1. Confirm the exact error signature matches `"re-runs DCR on every authenticate" invalid_client on token endpoint MCP OAuth`.
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

Evidence note: Issue anthropics/claude-code#59460: Claude Code re-executes DCR (Dynamic Client Registration) on each OAuth authentication cycle instead of caching the registered client. This causes invalid_client errors on the token endpoint. Directly affects enterprise developers using custom MCP servers with OAuth. Category: AI Coding Tools (auth reliability issue in paid AI coding tool). Source observation from latest stable release May 2026.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"re-runs DCR on every authenticate" invalid_client on token endpoint MCP OAuth` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"re-runs DCR on every authenticate" invalid_client on token endpoint MCP OAuth`.
