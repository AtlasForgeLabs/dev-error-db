---
title: "Claude Code MCP OAuth Failed — redirect_uris Not Registered for Client (Desktop vs Web Discrepancy)"
description: "Fix MCP OAuth authentication failure in Claude Code desktop app where the same MCP service works fine in claude.ai web app — mismatched OAuth redirect URIs between desktop and web clients Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "SDK auth failed: The provided redirect_uris are not registered for this client"
common_causes:
  - "GitHub issue #57114 on anthropics/claude-code reports Meta Ads MCP authenticates successfully on claude.ai web but fails on Claude Code desktop. The web app uses a redirect URI registered with Meta's OAuth app; Claude Code desktop likely uses a different unregistered redirect URI. No workaround available — users forced to use raw Graph API. Maps to 'AI Coding Tools' approved category (per SKILL.md: Claude Code → AI Coding Tools)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T18:44:27.548Z"
updated_at: "2026-06-01T18:44:27.548Z"
---

## What this error means

`SDK auth failed: The provided redirect_uris are not registered for this client` is a Claude Code failure pattern reported for developers trying to fix mcp oauth authentication failure in claude code desktop app where the same mcp service works fine in claude.ai web app — mismatched oauth redirect uris between desktop and web clients. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #57114 on anthropics/claude-code reports Meta Ads MCP authenticates successfully on claude.ai web but fails on Claude Code desktop. The web app uses a redirect URI registered with Meta's OAuth app; Claude Code desktop likely uses a different unregistered redirect URI. No workaround available — users forced to use raw Graph API. Maps to 'AI Coding Tools' approved category (per SKILL.md: Claude Code → AI Coding Tools).

## Common causes

- GitHub issue #57114 on anthropics/claude-code reports Meta Ads MCP authenticates successfully on claude.ai web but fails on Claude Code desktop. The web app uses a redirect URI registered with Meta's OAuth app; Claude Code desktop likely uses a different unregistered redirect URI. No workaround available — users forced to use raw Graph API. Maps to 'AI Coding Tools' approved category (per SKILL.md: Claude Code → AI Coding Tools).

## Quick fixes

1. Confirm the exact error signature matches `SDK auth failed: The provided redirect_uris are not registered for this client`.
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

- https://github.com/anthropics/claude-code/issues/57114

Evidence note: GitHub issue #57114 on anthropics/claude-code reports Meta Ads MCP authenticates successfully on claude.ai web but fails on Claude Code desktop. The web app uses a redirect URI registered with Meta's OAuth app; Claude Code desktop likely uses a different unregistered redirect URI. No workaround available — users forced to use raw Graph API. Maps to 'AI Coding Tools' approved category (per SKILL.md: Claude Code → AI Coding Tools).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `SDK auth failed: The provided redirect_uris are not registered for this client` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SDK auth failed: The provided redirect_uris are not registered for this client`.
