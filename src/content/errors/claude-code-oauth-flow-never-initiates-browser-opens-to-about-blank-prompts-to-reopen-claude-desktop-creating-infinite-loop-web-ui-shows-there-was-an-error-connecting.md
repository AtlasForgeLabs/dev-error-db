---
title: "Claude Code & Desktop OAuth-protected MCP server infinite about:blank loop"
description: "Fix Claude Desktop and claude.ai failing to establish OAuth flow for custom MCP servers despite all endpoints being spec-compliant and tested with curl Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth flow never initiates — browser opens to about:blank, prompts to reopen Claude Desktop, creating infinite loop; web UI shows 'There was an error connecting...'"
common_causes:
  - "GitHub issue anthropics/claude-code#11814 (Nov 18, 2025, closed duplicate). Server logs show zero requests initiated from Claude — failure happens before contacting server. Claude Code CLI --transport http works fine. OAuth 2.1 with PKCE fully compliant server rejected. Production MCP integrations broken."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T19:38:30.243Z"
updated_at: "2026-05-20T19:38:30.243Z"
---

## What this error means

`OAuth flow never initiates — browser opens to about:blank, prompts to reopen Claude Desktop, creating infinite loop; web UI shows 'There was an error connecting...'` is a Claude Code failure pattern reported for developers trying to fix claude desktop and claude.ai failing to establish oauth flow for custom mcp servers despite all endpoints being spec-compliant and tested with curl. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#11814 (Nov 18, 2025, closed duplicate). Server logs show zero requests initiated from Claude — failure happens before contacting server. Claude Code CLI --transport http works fine. OAuth 2.1 with PKCE fully compliant server rejected. Production MCP integrations broken.

## Common causes

- GitHub issue anthropics/claude-code#11814 (Nov 18, 2025, closed duplicate). Server logs show zero requests initiated from Claude — failure happens before contacting server. Claude Code CLI --transport http works fine. OAuth 2.1 with PKCE fully compliant server rejected. Production MCP integrations broken.

## Quick fixes

1. Confirm the exact error signature matches `OAuth flow never initiates — browser opens to about:blank, prompts to reopen Claude Desktop, creating infinite loop; web UI shows 'There was an error connecting...'`.
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

- https://github.com/anthropics/claude-code/issues/11814

Evidence note: GitHub issue anthropics/claude-code#11814 (Nov 18, 2025, closed duplicate). Server logs show zero requests initiated from Claude — failure happens before contacting server. Claude Code CLI --transport http works fine. OAuth 2.1 with PKCE fully compliant server rejected. Production MCP integrations broken.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth flow never initiates — browser opens to about:blank, prompts to reopen Claude Desktop, creating infinite loop; web UI shows 'There was an error connecting...'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth flow never initiates — browser opens to about:blank, prompts to reopen Claude Desktop, creating infinite loop; web UI shows 'There was an error connecting...'`.
