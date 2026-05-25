---
title: "Custom MCP OAuth fails — infinite loop opening about:blank in Claude Desktop"
description: "Fix Claude Desktop OAuth authentication loop where spec-compliant custom MCP OAuth triggers about:blank page and reloads desktop infinitely Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "\"about:blank page and immediately prompts to reopen Claude Desktop\" OAuth infinite loop"
common_causes:
  - "Issue anthropics/claude-code#11814: Fully spec-compliant MCP server with OAuth 2.1 fails in Claude Desktop/web UI — OAuth flow never initiates, opens about:blank in infinite loop. Same server works in CLI (--transport http). Affects enterprise MCP server deployments. Category: AI Coding Tools (auth flow broken in paid Claude Desktop product). Distinct from general OAuth issues."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T03:43:12.602Z"
updated_at: "2026-05-25T03:43:12.602Z"
---

## What this error means

`"about:blank page and immediately prompts to reopen Claude Desktop" OAuth infinite loop` is a Claude Code failure pattern reported for developers trying to fix claude desktop oauth authentication loop where spec-compliant custom mcp oauth triggers about:blank page and reloads desktop infinitely. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue anthropics/claude-code#11814: Fully spec-compliant MCP server with OAuth 2.1 fails in Claude Desktop/web UI — OAuth flow never initiates, opens about:blank in infinite loop. Same server works in CLI (--transport http). Affects enterprise MCP server deployments. Category: AI Coding Tools (auth flow broken in paid Claude Desktop product). Distinct from general OAuth issues.

## Common causes

- Issue anthropics/claude-code#11814: Fully spec-compliant MCP server with OAuth 2.1 fails in Claude Desktop/web UI — OAuth flow never initiates, opens about:blank in infinite loop. Same server works in CLI (--transport http). Affects enterprise MCP server deployments. Category: AI Coding Tools (auth flow broken in paid Claude Desktop product). Distinct from general OAuth issues.

## Quick fixes

1. Confirm the exact error signature matches `"about:blank page and immediately prompts to reopen Claude Desktop" OAuth infinite loop`.
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

Evidence note: Issue anthropics/claude-code#11814: Fully spec-compliant MCP server with OAuth 2.1 fails in Claude Desktop/web UI — OAuth flow never initiates, opens about:blank in infinite loop. Same server works in CLI (--transport http). Affects enterprise MCP server deployments. Category: AI Coding Tools (auth flow broken in paid Claude Desktop product). Distinct from general OAuth issues.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `"about:blank page and immediately prompts to reopen Claude Desktop" OAuth infinite loop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"about:blank page and immediately prompts to reopen Claude Desktop" OAuth infinite loop`.
