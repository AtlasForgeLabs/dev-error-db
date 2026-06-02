---
title: "Claude Code HTTP MCP Server OAuth Silent Failure — No User Notification"
description: "Troubleshoot Claude Code MCP servers that require OAuth but fail silently — no tools appear and no error message is shown to the user. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification"
common_causes:
  - "GitHub Issues #26917 and #46623 on anthropics/claude-code report multiple bugs where HTTP/SSE MCP servers with OAuth fail without any user-facing error. DCR registration_endpoint missing causes silent failure; scope shadowing writes to wrong config file. Users experience hours-long debugging loops. High commercial value — developers setting up enterprise MCP integrations. Category: AI Coding Tools per SKILL.md mapping."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T05:44:28.945Z"
updated_at: "2026-06-02T05:44:28.945Z"
---

## What this error means

`[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification` is a Claude Code failure pattern reported for developers trying to troubleshoot claude code mcp servers that require oauth but fail silently — no tools appear and no error message is shown to the user.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issues #26917 and #46623 on anthropics/claude-code report multiple bugs where HTTP/SSE MCP servers with OAuth fail without any user-facing error. DCR registration_endpoint missing causes silent failure; scope shadowing writes to wrong config file. Users experience hours-long debugging loops. High commercial value — developers setting up enterprise MCP integrations. Category: AI Coding Tools per SKILL.md mapping.

## Common causes

- GitHub Issues #26917 and #46623 on anthropics/claude-code report multiple bugs where HTTP/SSE MCP servers with OAuth fail without any user-facing error. DCR registration_endpoint missing causes silent failure; scope shadowing writes to wrong config file. Users experience hours-long debugging loops. High commercial value — developers setting up enterprise MCP integrations. Category: AI Coding Tools per SKILL.md mapping.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification`.
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

- https://github.com/anthropics/claude-code/issues/26917
- https://github.com/anthropics/claude-code/issues/46623
- https://github.com/anthropics/claude-code/issues/34008
- https://code.claude.com/docs/en/errors

Evidence note: GitHub Issues #26917 and #46623 on anthropics/claude-code report multiple bugs where HTTP/SSE MCP servers with OAuth fail without any user-facing error. DCR registration_endpoint missing causes silent failure; scope shadowing writes to wrong config file. Users experience hours-long debugging loops. High commercial value — developers setting up enterprise MCP integrations. Category: AI Coding Tools per SKILL.md mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification`.
