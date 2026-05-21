---
title: "n8n MCP Server OAuth Incompatibility with Claude Code — Access Token vs OAuth Only"
description: "Developer connects n8n instance MCP server to Claude Code; Claude Code requires OAuth flow but n8n only provides access tokens, creating an incompatibility that blocks integration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude only accepts OAuth, but n8n only provides an Access Token"
common_causes:
  - "Found on n8n Community forum (community.n8n.io, post #296356, posted ~21 hours ago). Active discussion with solutions provided. Represents a growing category of AI agent integration friction between workflow automation platforms and Claude Code MCP. Category: AI Coding Tools per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T15:39:44.907Z"
updated_at: "2026-05-21T15:39:44.907Z"
---

## What this error means

`Claude only accepts OAuth, but n8n only provides an Access Token` is a Claude Code failure pattern reported for developers trying to developer connects n8n instance mcp server to claude code; claude code requires oauth flow but n8n only provides access tokens, creating an incompatibility that blocks integration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on n8n Community forum (community.n8n.io, post #296356, posted ~21 hours ago). Active discussion with solutions provided. Represents a growing category of AI agent integration friction between workflow automation platforms and Claude Code MCP. Category: AI Coding Tools per mapping rules.

## Common causes

- Found on n8n Community forum (community.n8n.io, post #296356, posted ~21 hours ago). Active discussion with solutions provided. Represents a growing category of AI agent integration friction between workflow automation platforms and Claude Code MCP. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `Claude only accepts OAuth, but n8n only provides an Access Token`.
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

- https://community.n8n.io/t/n8n-connector-fur-claude-code/296356

Evidence note: Found on n8n Community forum (community.n8n.io, post #296356, posted ~21 hours ago). Active discussion with solutions provided. Represents a growing category of AI agent integration friction between workflow automation platforms and Claude Code MCP. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude only accepts OAuth, but n8n only provides an Access Token` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude only accepts OAuth, but n8n only provides an Access Token`.
