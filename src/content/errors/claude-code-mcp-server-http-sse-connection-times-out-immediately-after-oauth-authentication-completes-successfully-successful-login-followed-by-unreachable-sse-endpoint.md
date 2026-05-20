---
title: "MCP server (HTTP/SSE type) times out after OAuth authentication completes"
description: "Fix Claude Code MCP servers timing out post-OAuth handshake, where authentication succeeds but the SSE stream becomes unreachable Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server HTTP/SSE connection times out immediately after OAuth authentication completes successfully — successful login followed by unreachable SSE endpoint"
common_causes:
  - "GitHub issue anthropics/claude-code#60521 (May 19, 2026, open). Distinct from general OAuth failures (#11814): here auth completes but subsequent SSE connection times out. Affects enterprise users with cloud-hosted MCP servers requiring OAuth-based auth."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T19:38:30.243Z"
updated_at: "2026-05-20T19:38:30.243Z"
---

## What this error means

`MCP server HTTP/SSE connection times out immediately after OAuth authentication completes successfully — successful login followed by unreachable SSE endpoint` is a Claude Code failure pattern reported for developers trying to fix claude code mcp servers timing out post-oauth handshake, where authentication succeeds but the sse stream becomes unreachable. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#60521 (May 19, 2026, open). Distinct from general OAuth failures (#11814): here auth completes but subsequent SSE connection times out. Affects enterprise users with cloud-hosted MCP servers requiring OAuth-based auth.

## Common causes

- GitHub issue anthropics/claude-code#60521 (May 19, 2026, open). Distinct from general OAuth failures (#11814): here auth completes but subsequent SSE connection times out. Affects enterprise users with cloud-hosted MCP servers requiring OAuth-based auth.

## Quick fixes

1. Confirm the exact error signature matches `MCP server HTTP/SSE connection times out immediately after OAuth authentication completes successfully — successful login followed by unreachable SSE endpoint`.
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

- https://github.com/anthropics/claude-code/issues/60521

Evidence note: GitHub issue anthropics/claude-code#60521 (May 19, 2026, open). Distinct from general OAuth failures (#11814): here auth completes but subsequent SSE connection times out. Affects enterprise users with cloud-hosted MCP servers requiring OAuth-based auth.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server HTTP/SSE connection times out immediately after OAuth authentication completes successfully — successful login followed by unreachable SSE endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server HTTP/SSE connection times out immediately after OAuth authentication completes successfully — successful login followed by unreachable SSE endpoint`.
