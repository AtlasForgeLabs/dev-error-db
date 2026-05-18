---
title: "Claude Code MCP client ignores OAuth scopes — missing offline_access causes 5-minute auth timeout"
description: "Fix Claude Code MCP OAuth authentication that times out every 5 minutes because offline_access scope is never requested, preventing refresh token issuance Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Fetched OAuth metadata with scope: NONE; No scopes stored to add to token request!; authentication timeouts every 5 minutes"
common_causes:
  - "GitHub Issue #7744 on anthropics/claude-code: MCP client fails to read scopes_supported from /.well-known/oauth-protected-resource endpoint. Results in authorization URLs without scope parameter, no refresh tokens issued, forced re-auth every 5 min. Only Claude Code CLI affected — Claude Desktop/Web handle it correctly. 29 👍 reactions. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T17:37:13.645Z"
updated_at: "2026-05-18T17:37:13.645Z"
---

## What this error means

`Fetched OAuth metadata with scope: NONE; No scopes stored to add to token request!; authentication timeouts every 5 minutes` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth authentication that times out every 5 minutes because offline_access scope is never requested, preventing refresh token issuance. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #7744 on anthropics/claude-code: MCP client fails to read scopes_supported from /.well-known/oauth-protected-resource endpoint. Results in authorization URLs without scope parameter, no refresh tokens issued, forced re-auth every 5 min. Only Claude Code CLI affected — Claude Desktop/Web handle it correctly. 29 👍 reactions. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Common causes

- GitHub Issue #7744 on anthropics/claude-code: MCP client fails to read scopes_supported from /.well-known/oauth-protected-resource endpoint. Results in authorization URLs without scope parameter, no refresh tokens issued, forced re-auth every 5 min. Only Claude Code CLI affected — Claude Desktop/Web handle it correctly. 29 👍 reactions. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Quick fixes

1. Confirm the exact error signature matches `Fetched OAuth metadata with scope: NONE; No scopes stored to add to token request!; authentication timeouts every 5 minutes`.
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

- https://github.com/anthropics/claude-code/issues/7744

Evidence note: GitHub Issue #7744 on anthropics/claude-code: MCP client fails to read scopes_supported from /.well-known/oauth-protected-resource endpoint. Results in authorization URLs without scope parameter, no refresh tokens issued, forced re-auth every 5 min. Only Claude Code CLI affected — Claude Desktop/Web handle it correctly. 29 👍 reactions. Categorized as AI Coding Tools per SKILL.md mapping for Claude Code OAuth/MCP auth errors.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Fetched OAuth metadata with scope: NONE; No scopes stored to add to token request!; authentication timeouts every 5 minutes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Fetched OAuth metadata with scope: NONE; No scopes stored to add to token request!; authentication timeouts every 5 minutes`.
