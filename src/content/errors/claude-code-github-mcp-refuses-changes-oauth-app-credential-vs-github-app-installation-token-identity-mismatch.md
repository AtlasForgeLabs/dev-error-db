---
title: "Claude Code GitHub MCP OAuth vs GitHub App Permission Mismatch"
description: "Fix Claude Code GitHub MCP failing to push/pull changes due to OAuth App vs GitHub App token identity confusion Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "GitHub MCP refuses changes — OAuth App credential vs GitHub App installation token identity mismatch"
common_causes:
  - "Discovered via DuckDuckGo search result from github.com/anthropics/claude-code/issues/61189. Confirmed: Claude GitHub App installed repo access ≠ MCP path OAuth App credential. Two independent identities, only App has repo write permissions. Very specific technical root cause with clear fix. Category: Claude Code → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T07:41:05.470Z"
updated_at: "2026-05-24T07:41:05.470Z"
---

## What this error means

`GitHub MCP refuses changes — OAuth App credential vs GitHub App installation token identity mismatch` is a Claude Code failure pattern reported for developers trying to fix claude code github mcp failing to push/pull changes due to oauth app vs github app token identity confusion. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Discovered via DuckDuckGo search result from github.com/anthropics/claude-code/issues/61189. Confirmed: Claude GitHub App installed repo access ≠ MCP path OAuth App credential. Two independent identities, only App has repo write permissions. Very specific technical root cause with clear fix. Category: Claude Code → AI Coding Tools.

## Common causes

- Discovered via DuckDuckGo search result from github.com/anthropics/claude-code/issues/61189. Confirmed: Claude GitHub App installed repo access ≠ MCP path OAuth App credential. Two independent identities, only App has repo write permissions. Very specific technical root cause with clear fix. Category: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `GitHub MCP refuses changes — OAuth App credential vs GitHub App installation token identity mismatch`.
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

- https://github.com/anthropics/claude-code/issues/61189

Evidence note: Discovered via DuckDuckGo search result from github.com/anthropics/claude-code/issues/61189. Confirmed: Claude GitHub App installed repo access ≠ MCP path OAuth App credential. Two independent identities, only App has repo write permissions. Very specific technical root cause with clear fix. Category: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `GitHub MCP refuses changes — OAuth App credential vs GitHub App installation token identity mismatch` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub MCP refuses changes — OAuth App credential vs GitHub App installation token identity mismatch`.
