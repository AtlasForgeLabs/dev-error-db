---
title: "Token caching causes repeated Claude Code auth failures across sessions"
description: "Fix Claude Code MCP server repeatedly failing with revoked refresh token when sharing config between MCP server and Claude Code plugin Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "invalid_grant — Refresh token revoked"
common_causes:
  - "GitHub issue #2 on demasir/spotify-set-reorder (2026-05-17). The bundled MCP server caches its refresh token in memory but writes to a different spotify-config.json than what Claude Code plugin reads. Once the token rotates/revokes, the MCP is stuck failing until Claude Code is restarted. Affects developers using Claude Code as their primary coding assistant. Tier 0 GitHub REST API result."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T03:39:52.286Z"
updated_at: "2026-05-24T03:39:52.286Z"
---

## What this error means

`invalid_grant — Refresh token revoked` is a Claude Code failure pattern reported for developers trying to fix claude code mcp server repeatedly failing with revoked refresh token when sharing config between mcp server and claude code plugin. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #2 on demasir/spotify-set-reorder (2026-05-17). The bundled MCP server caches its refresh token in memory but writes to a different spotify-config.json than what Claude Code plugin reads. Once the token rotates/revokes, the MCP is stuck failing until Claude Code is restarted. Affects developers using Claude Code as their primary coding assistant. Tier 0 GitHub REST API result.

## Common causes

- GitHub issue #2 on demasir/spotify-set-reorder (2026-05-17). The bundled MCP server caches its refresh token in memory but writes to a different spotify-config.json than what Claude Code plugin reads. Once the token rotates/revokes, the MCP is stuck failing until Claude Code is restarted. Affects developers using Claude Code as their primary coding assistant. Tier 0 GitHub REST API result.

## Quick fixes

1. Confirm the exact error signature matches `invalid_grant — Refresh token revoked`.
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

- https://github.com/demasir/spotify-set-reorder/issues/2

Evidence note: GitHub issue #2 on demasir/spotify-set-reorder (2026-05-17). The bundled MCP server caches its refresh token in memory but writes to a different spotify-config.json than what Claude Code plugin reads. Once the token rotates/revokes, the MCP is stuck failing until Claude Code is restarted. Affects developers using Claude Code as their primary coding assistant. Tier 0 GitHub REST API result.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `invalid_grant — Refresh token revoked` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `invalid_grant — Refresh token revoked`.
