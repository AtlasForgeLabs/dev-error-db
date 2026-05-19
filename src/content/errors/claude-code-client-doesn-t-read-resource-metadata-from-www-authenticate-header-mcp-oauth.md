---
title: "MCP OAuth resource_metadata sub-path discovery failure in Claude Code"
description: "Fix Claude Code not following RFC 9728 §5.1 spec for OAuth protected resource discovery when MCP server is hosted on a sub-path Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "client doesn't read resource_metadata from WWW-Authenticate header MCP OAuth"
common_causes:
  - "Active GitHub issue (#58802) filed against anthropics/claude-code repository. Claude Code fails to parse resource_metadata URL from WWW-Authenticate header for OAuth flows when the MCP server is at a sub-path, causing authentication failures. Directly impacts developers using MCP servers with custom paths."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T13:37:16.292Z"
updated_at: "2026-05-19T13:37:16.292Z"
---

## What this error means

`client doesn't read resource_metadata from WWW-Authenticate header MCP OAuth` is a Claude Code failure pattern reported for developers trying to fix claude code not following rfc 9728 §5.1 spec for oauth protected resource discovery when mcp server is hosted on a sub-path. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue (#58802) filed against anthropics/claude-code repository. Claude Code fails to parse resource_metadata URL from WWW-Authenticate header for OAuth flows when the MCP server is at a sub-path, causing authentication failures. Directly impacts developers using MCP servers with custom paths.

## Common causes

- Active GitHub issue (#58802) filed against anthropics/claude-code repository. Claude Code fails to parse resource_metadata URL from WWW-Authenticate header for OAuth flows when the MCP server is at a sub-path, causing authentication failures. Directly impacts developers using MCP servers with custom paths.

## Quick fixes

1. Confirm the exact error signature matches `client doesn't read resource_metadata from WWW-Authenticate header MCP OAuth`.
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

- https://github.com/anthropics/claude-code/issues/58802

Evidence note: Active GitHub issue (#58802) filed against anthropics/claude-code repository. Claude Code fails to parse resource_metadata URL from WWW-Authenticate header for OAuth flows when the MCP server is at a sub-path, causing authentication failures. Directly impacts developers using MCP servers with custom paths.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `client doesn't read resource_metadata from WWW-Authenticate header MCP OAuth` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `client doesn't read resource_metadata from WWW-Authenticate header MCP OAuth`.
