---
title: "Claude Code v2.1.147 Regression — HTTP MCP Servers without GET Listening Stream: 404 Misinterpreted as Session Expiry"
description: "Fix Claude Code MCP HTTP transport incorrectly tearing down valid POST-only servers by misinterpreting optional GET stream 404 as session expiry Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP session expired (server returned 404), triggering reconnection — Failed to fetch tools: Not connected"
common_causes:
  - "Critical P0 regression in Claude Code v2.1.147+ where any MCP server implementing only POST half of Streamable HTTP spec causes complete tool failure. Breaks ALL HTTP MCP servers without optional GET endpoint. Detailed debug logs and version-by-version verification show 2.1.146 works while 2.1.147+ fails. Active comment with proposed fix available. Source: GitHub issue #62198 opened today."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T14:43:13.981Z"
updated_at: "2026-05-25T14:43:13.981Z"
---

## What this error means

`MCP session expired (server returned 404), triggering reconnection — Failed to fetch tools: Not connected` is a Claude Code failure pattern reported for developers trying to fix claude code mcp http transport incorrectly tearing down valid post-only servers by misinterpreting optional get stream 404 as session expiry. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Critical P0 regression in Claude Code v2.1.147+ where any MCP server implementing only POST half of Streamable HTTP spec causes complete tool failure. Breaks ALL HTTP MCP servers without optional GET endpoint. Detailed debug logs and version-by-version verification show 2.1.146 works while 2.1.147+ fails. Active comment with proposed fix available. Source: GitHub issue #62198 opened today.

## Common causes

- Critical P0 regression in Claude Code v2.1.147+ where any MCP server implementing only POST half of Streamable HTTP spec causes complete tool failure. Breaks ALL HTTP MCP servers without optional GET endpoint. Detailed debug logs and version-by-version verification show 2.1.146 works while 2.1.147+ fails. Active comment with proposed fix available. Source: GitHub issue #62198 opened today.

## Quick fixes

1. Confirm the exact error signature matches `MCP session expired (server returned 404), triggering reconnection — Failed to fetch tools: Not connected`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/anthropics/claude-code/issues/62198

Evidence note: Critical P0 regression in Claude Code v2.1.147+ where any MCP server implementing only POST half of Streamable HTTP spec causes complete tool failure. Breaks ALL HTTP MCP servers without optional GET endpoint. Detailed debug logs and version-by-version verification show 2.1.146 works while 2.1.147+ fails. Active comment with proposed fix available. Source: GitHub issue #62198 opened today.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP session expired (server returned 404), triggering reconnection — Failed to fetch tools: Not connected` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP session expired (server returned 404), triggering reconnection — Failed to fetch tools: Not connected`.
