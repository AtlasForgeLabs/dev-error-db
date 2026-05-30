---
title: "Claude Code MCP Custom Server OAuth 2.1 Authentication Failure"
description: "Debug Claude Code + custom MCP server OAuth connection failure; get working OAuth 2.1 + PKCE setup configuration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server with OAuth 2.1 authentication works with Claude CLI but desktop/custom config fails to connect"
common_causes:
  - "GitHub anthropics/claude-code issue #5826 reports deployed MCP server with OAuth 2.1 working fine in some contexts but failing on Claude Code desktop integration. TrueFoundry 2026 guide confirms MCP auth complexity (API key, Bearer token, OAuth, AWS credentials all available with confusing choices). Directly affects enterprise Claude Code subscribers paying for both subscription and custom MCP integrations. Distinct from already-published MCP permission-denied topic — this is about OAuth handshake failure, not allow-setting bugs."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T16:43:28.830Z"
updated_at: "2026-05-30T16:43:28.830Z"
---

## What this error means

`MCP server with OAuth 2.1 authentication works with Claude CLI but desktop/custom config fails to connect` is a Claude Code failure pattern reported for developers trying to debug claude code + custom mcp server oauth connection failure; get working oauth 2.1 + pkce setup configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code issue #5826 reports deployed MCP server with OAuth 2.1 working fine in some contexts but failing on Claude Code desktop integration. TrueFoundry 2026 guide confirms MCP auth complexity (API key, Bearer token, OAuth, AWS credentials all available with confusing choices). Directly affects enterprise Claude Code subscribers paying for both subscription and custom MCP integrations. Distinct from already-published MCP permission-denied topic — this is about OAuth handshake failure, not allow-setting bugs.

## Common causes

- GitHub anthropics/claude-code issue #5826 reports deployed MCP server with OAuth 2.1 working fine in some contexts but failing on Claude Code desktop integration. TrueFoundry 2026 guide confirms MCP auth complexity (API key, Bearer token, OAuth, AWS credentials all available with confusing choices). Directly affects enterprise Claude Code subscribers paying for both subscription and custom MCP integrations. Distinct from already-published MCP permission-denied topic — this is about OAuth handshake failure, not allow-setting bugs.

## Quick fixes

1. Confirm the exact error signature matches `MCP server with OAuth 2.1 authentication works with Claude CLI but desktop/custom config fails to connect`.
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

- https://github.com/anthropics/claude-code/issues/5826
- https://www.truefoundry.com/blog/mcp-authentication-in-claude-code

Evidence note: GitHub anthropics/claude-code issue #5826 reports deployed MCP server with OAuth 2.1 working fine in some contexts but failing on Claude Code desktop integration. TrueFoundry 2026 guide confirms MCP auth complexity (API key, Bearer token, OAuth, AWS credentials all available with confusing choices). Directly affects enterprise Claude Code subscribers paying for both subscription and custom MCP integrations. Distinct from already-published MCP permission-denied topic — this is about OAuth handshake failure, not allow-setting bugs.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server with OAuth 2.1 authentication works with Claude CLI but desktop/custom config fails to connect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server with OAuth 2.1 authentication works with Claude CLI but desktop/custom config fails to connect`.
