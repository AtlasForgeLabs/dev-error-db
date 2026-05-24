---
title: "HTTP OAuth MCP Servers Silently Fail in Claude Code When DCR Not Supported"
description: "Fix Claude Code failing to connect to custom OAuth MCP servers that don't support DCR, with no error message shown Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTTP OAuth MCP servers silently fail without error when provider doesn't support Dynamic Client Registration (DCR)"
common_causes:
  - "GitHub issue #46623 on claude-code repo (2026-04-11). HTTP MCP server requiring OAuth but lacking DCR support fails silently with no diagnostics. High commercial value: AI coding tool auth issue blocking paid users. Mapping: Claude Code → AI Coding Tools per SKILL.md rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T02:39:52.147Z"
updated_at: "2026-05-24T02:39:52.147Z"
---

## What this error means

`HTTP OAuth MCP servers silently fail without error when provider doesn't support Dynamic Client Registration (DCR)` is a Claude Code failure pattern reported for developers trying to fix claude code failing to connect to custom oauth mcp servers that don't support dcr, with no error message shown. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #46623 on claude-code repo (2026-04-11). HTTP MCP server requiring OAuth but lacking DCR support fails silently with no diagnostics. High commercial value: AI coding tool auth issue blocking paid users. Mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Common causes

- GitHub issue #46623 on claude-code repo (2026-04-11). HTTP MCP server requiring OAuth but lacking DCR support fails silently with no diagnostics. High commercial value: AI coding tool auth issue blocking paid users. Mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Quick fixes

1. Confirm the exact error signature matches `HTTP OAuth MCP servers silently fail without error when provider doesn't support Dynamic Client Registration (DCR)`.
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

- https://github.com/anthropics/claude-code/issues/46623

Evidence note: GitHub issue #46623 on claude-code repo (2026-04-11). HTTP MCP server requiring OAuth but lacking DCR support fails silently with no diagnostics. High commercial value: AI coding tool auth issue blocking paid users. Mapping: Claude Code → AI Coding Tools per SKILL.md rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP OAuth MCP servers silently fail without error when provider doesn't support Dynamic Client Registration (DCR)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP OAuth MCP servers silently fail without error when provider doesn't support Dynamic Client Registration (DCR)`.
