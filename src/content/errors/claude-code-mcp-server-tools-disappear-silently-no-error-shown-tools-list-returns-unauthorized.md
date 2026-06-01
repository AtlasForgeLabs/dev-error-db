---
title: "Claude Code MCP Server OAuth Silent Failure — No User-Facing Error Notification"
description: "Fix Claude Code HTTP MCP servers that fail silently without showing any authentication error to the user Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server tools disappear silently — no error shown, tools/list returns Unauthorized"
common_causes:
  - "GitHub Issue #46623 and #26917 document HTTP MCP servers requiring OAuth failing silently in Claude Code. When tools/list returns Unauthorized, Claude Code swallows the error with no notification. Root causes: DCR failure with missing registration_endpoint, scope shadowing (~/.claude.json local vs project vs user hierarchy), stale .mcp.json overrides. Critical for teams using MCP integrations in production."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T22:44:28.098Z"
updated_at: "2026-06-01T22:44:28.098Z"
---

## What this error means

`MCP server tools disappear silently — no error shown, tools/list returns Unauthorized` is a Claude Code failure pattern reported for developers trying to fix claude code http mcp servers that fail silently without showing any authentication error to the user. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #46623 and #26917 document HTTP MCP servers requiring OAuth failing silently in Claude Code. When tools/list returns Unauthorized, Claude Code swallows the error with no notification. Root causes: DCR failure with missing registration_endpoint, scope shadowing (~/.claude.json local vs project vs user hierarchy), stale .mcp.json overrides. Critical for teams using MCP integrations in production.

## Common causes

- GitHub Issue #46623 and #26917 document HTTP MCP servers requiring OAuth failing silently in Claude Code. When tools/list returns Unauthorized, Claude Code swallows the error with no notification. Root causes: DCR failure with missing registration_endpoint, scope shadowing (~/.claude.json local vs project vs user hierarchy), stale .mcp.json overrides. Critical for teams using MCP integrations in production.

## Quick fixes

1. Confirm the exact error signature matches `MCP server tools disappear silently — no error shown, tools/list returns Unauthorized`.
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
- https://github.com/anthropics/claude-code/issues/26917

Evidence note: GitHub Issue #46623 and #26917 document HTTP MCP servers requiring OAuth failing silently in Claude Code. When tools/list returns Unauthorized, Claude Code swallows the error with no notification. Root causes: DCR failure with missing registration_endpoint, scope shadowing (~/.claude.json local vs project vs user hierarchy), stale .mcp.json overrides. Critical for teams using MCP integrations in production.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server tools disappear silently — no error shown, tools/list returns Unauthorized` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server tools disappear silently — no error shown, tools/list returns Unauthorized`.
