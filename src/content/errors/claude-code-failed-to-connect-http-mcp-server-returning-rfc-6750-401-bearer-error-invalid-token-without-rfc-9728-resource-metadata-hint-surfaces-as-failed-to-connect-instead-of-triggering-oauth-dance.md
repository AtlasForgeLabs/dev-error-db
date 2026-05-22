---
title: "Claude Code MCP OAuth 401 Without resource_metadata Hint Surfaces as 'Failed to connect' Instead of Triggering OAuth Dance"
description: "Fix Claude Code MCP HTTP server OAuth auth flow when remote server sends standard 401 without RFC 9728 resource_metadata parameter Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Failed to connect — HTTP MCP server returning RFC 6750 401 (Bearer error=\"invalid_token\") without RFC 9728 resource_metadata= hint surfaces as 'Failed to connect' instead of triggering OAuth dance"
common_causes:
  - "GitHub Issue #61376 opened May 22, 2026 by @new-horizons-pioneer. Full reproduction with hosted FastAPI MCP server (api.speak-up.pro) implementing RFC 8414 DCR+authorize+token+revoke but missing RFC 9728 PRM layer. Client treats optional resource_metadata as mandatory, blocking first-call OAuth discovery. Labels: area:auth, area:mcp, bug. Candidate verified against covered-errors.md — this OAuth-specific MCP gateway error is not already published."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T15:39:47.944Z"
updated_at: "2026-05-22T15:39:47.944Z"
---

## What this error means

`Failed to connect — HTTP MCP server returning RFC 6750 401 (Bearer error="invalid_token") without RFC 9728 resource_metadata= hint surfaces as 'Failed to connect' instead of triggering OAuth dance` is a Claude Code failure pattern reported for developers trying to fix claude code mcp http server oauth auth flow when remote server sends standard 401 without rfc 9728 resource_metadata parameter. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61376 opened May 22, 2026 by @new-horizons-pioneer. Full reproduction with hosted FastAPI MCP server (api.speak-up.pro) implementing RFC 8414 DCR+authorize+token+revoke but missing RFC 9728 PRM layer. Client treats optional resource_metadata as mandatory, blocking first-call OAuth discovery. Labels: area:auth, area:mcp, bug. Candidate verified against covered-errors.md — this OAuth-specific MCP gateway error is not already published.

## Common causes

- GitHub Issue #61376 opened May 22, 2026 by @new-horizons-pioneer. Full reproduction with hosted FastAPI MCP server (api.speak-up.pro) implementing RFC 8414 DCR+authorize+token+revoke but missing RFC 9728 PRM layer. Client treats optional resource_metadata as mandatory, blocking first-call OAuth discovery. Labels: area:auth, area:mcp, bug. Candidate verified against covered-errors.md — this OAuth-specific MCP gateway error is not already published.

## Quick fixes

1. Confirm the exact error signature matches `Failed to connect — HTTP MCP server returning RFC 6750 401 (Bearer error="invalid_token") without RFC 9728 resource_metadata= hint surfaces as 'Failed to connect' instead of triggering OAuth dance`.
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

- https://github.com/anthropics/claude-code/issues/61376

Evidence note: GitHub Issue #61376 opened May 22, 2026 by @new-horizons-pioneer. Full reproduction with hosted FastAPI MCP server (api.speak-up.pro) implementing RFC 8414 DCR+authorize+token+revoke but missing RFC 9728 PRM layer. Client treats optional resource_metadata as mandatory, blocking first-call OAuth discovery. Labels: area:auth, area:mcp, bug. Candidate verified against covered-errors.md — this OAuth-specific MCP gateway error is not already published.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Failed to connect — HTTP MCP server returning RFC 6750 401 (Bearer error="invalid_token") without RFC 9728 resource_metadata= hint surfaces as 'Failed to connect' instead of triggering OAuth dance` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to connect — HTTP MCP server returning RFC 6750 401 (Bearer error="invalid_token") without RFC 9728 resource_metadata= hint surfaces as 'Failed to connect' instead of triggering OAuth dance`.
