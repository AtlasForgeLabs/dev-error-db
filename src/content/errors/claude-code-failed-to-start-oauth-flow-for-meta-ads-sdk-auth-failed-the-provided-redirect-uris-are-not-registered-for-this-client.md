---
title: "Claude Code MCP OAuth Flow Fails — 'redirect_uris are not registered for this client'"
description: "Fix Claude Code MCP server OAuth authentication failing because Meta does not recognize the redirect URI presented during OAuth client registration, blocking meta-ads integration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Failed to start OAuth flow for meta-ads: SDK auth failed: The provided redirect_uris are not registered for this client"
common_causes:
  - "GitHub issue anthropics/claude-code#59924: The built-in mcp__meta-ads__ server cannot complete OAuth authentication because its redirect_uri is not on Meta's allowed list. Auth flow never reaches facebook.com authorization page. Occurs during initial OAuth client validation. Category mapping: Claude Code MCP auth error for paid enterprise integrations."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T23:44:25.552Z"
updated_at: "2026-05-31T23:44:25.552Z"
---

## What this error means

`Failed to start OAuth flow for meta-ads: SDK auth failed: The provided redirect_uris are not registered for this client` is a Claude Code failure pattern reported for developers trying to fix claude code mcp server oauth authentication failing because meta does not recognize the redirect uri presented during oauth client registration, blocking meta-ads integration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#59924: The built-in mcp__meta-ads__ server cannot complete OAuth authentication because its redirect_uri is not on Meta's allowed list. Auth flow never reaches facebook.com authorization page. Occurs during initial OAuth client validation. Category mapping: Claude Code MCP auth error for paid enterprise integrations.

## Common causes

- GitHub issue anthropics/claude-code#59924: The built-in mcp__meta-ads__ server cannot complete OAuth authentication because its redirect_uri is not on Meta's allowed list. Auth flow never reaches facebook.com authorization page. Occurs during initial OAuth client validation. Category mapping: Claude Code MCP auth error for paid enterprise integrations.

## Quick fixes

1. Confirm the exact error signature matches `Failed to start OAuth flow for meta-ads: SDK auth failed: The provided redirect_uris are not registered for this client`.
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

- https://github.com/anthropics/claude-code/issues/59924

Evidence note: GitHub issue anthropics/claude-code#59924: The built-in mcp__meta-ads__ server cannot complete OAuth authentication because its redirect_uri is not on Meta's allowed list. Auth flow never reaches facebook.com authorization page. Occurs during initial OAuth client validation. Category mapping: Claude Code MCP auth error for paid enterprise integrations.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Failed to start OAuth flow for meta-ads: SDK auth failed: The provided redirect_uris are not registered for this client` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to start OAuth flow for meta-ads: SDK auth failed: The provided redirect_uris are not registered for this client`.
