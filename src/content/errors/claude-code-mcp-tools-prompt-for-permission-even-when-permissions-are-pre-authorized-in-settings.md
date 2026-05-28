---
title: "Claude Code MCP tools prompt for permission even when already pre-authorized"
description: "Fix MCP server repeatedly asking for permission confirmation despite having permissions set in settings.json Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP tools prompt for permission even when permissions are pre-authorized in settings"
common_causes:
  - "GitHub issue #28580 (anthropics/claude-code) — When an MCP server (e.g., Linear) is configured and permissions are pre-authorized in the settings file, Claude Code still prompts the user for every action. This affects paid AI coding tool users in production workflows. Category: AI Coding Tools per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T09:43:22.773Z"
updated_at: "2026-05-28T09:43:22.773Z"
---

## What this error means

`MCP tools prompt for permission even when permissions are pre-authorized in settings` is a Claude Code failure pattern reported for developers trying to fix mcp server repeatedly asking for permission confirmation despite having permissions set in settings.json. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28580 (anthropics/claude-code) — When an MCP server (e.g., Linear) is configured and permissions are pre-authorized in the settings file, Claude Code still prompts the user for every action. This affects paid AI coding tool users in production workflows. Category: AI Coding Tools per mapping rules.

## Common causes

- GitHub issue #28580 (anthropics/claude-code) — When an MCP server (e.g., Linear) is configured and permissions are pre-authorized in the settings file, Claude Code still prompts the user for every action. This affects paid AI coding tool users in production workflows. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `MCP tools prompt for permission even when permissions are pre-authorized in settings`.
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

- https://github.com/anthropics/claude-code/issues/28580
- https://code.claude.com/docs/en/mcp

Evidence note: GitHub issue #28580 (anthropics/claude-code) — When an MCP server (e.g., Linear) is configured and permissions are pre-authorized in the settings file, Claude Code still prompts the user for every action. This affects paid AI coding tool users in production workflows. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP tools prompt for permission even when permissions are pre-authorized in settings` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP tools prompt for permission even when permissions are pre-authorized in settings`.
