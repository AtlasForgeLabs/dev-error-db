---
title: "Claude Code MCP OAuth DCR Fails: invalid_client_metadata Rejected"
description: "Fix OAuth Dynamic Client Registration failure when connecting Claude Code MCP servers to external services like Calendly Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth DCR fails for third-party service: client_name rejected as invalid_client_metadata"
common_causes:
  - "Real GitHub issue reported (anthropics/claude-code#59445). Developers encounter 'invalid_client' error during MCP OAuth flow when registering external service clients. This blocks production integrations with tools like CRM, calendar, and internal APIs — high commercial value for AI coding tool users."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T23:13:51.513Z"
updated_at: "2026-05-16T23:13:51.513Z"
---

## What this error means

`MCP OAuth DCR fails for third-party service: client_name rejected as invalid_client_metadata` is a Claude Code failure pattern reported for developers trying to fix oauth dynamic client registration failure when connecting claude code mcp servers to external services like calendly. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Real GitHub issue reported (anthropics/claude-code#59445). Developers encounter 'invalid_client' error during MCP OAuth flow when registering external service clients. This blocks production integrations with tools like CRM, calendar, and internal APIs — high commercial value for AI coding tool users.

## Common causes

- Real GitHub issue reported (anthropics/claude-code#59445). Developers encounter 'invalid_client' error during MCP OAuth flow when registering external service clients. This blocks production integrations with tools like CRM, calendar, and internal APIs — high commercial value for AI coding tool users.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth DCR fails for third-party service: client_name rejected as invalid_client_metadata`.
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

- https://github.com/anthropics/claude-code/issues/59445

Evidence note: Real GitHub issue reported (anthropics/claude-code#59445). Developers encounter 'invalid_client' error during MCP OAuth flow when registering external service clients. This blocks production integrations with tools like CRM, calendar, and internal APIs — high commercial value for AI coding tool users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth DCR fails for third-party service: client_name rejected as invalid_client_metadata` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth DCR fails for third-party service: client_name rejected as invalid_client_metadata`.
