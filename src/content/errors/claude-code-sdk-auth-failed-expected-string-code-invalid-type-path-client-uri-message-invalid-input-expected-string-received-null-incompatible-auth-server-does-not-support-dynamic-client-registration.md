---
title: "Custom MCP Connector OAuth Tokens Fail to Persist Across Restart (Claude Code)"
description: "Fix Claude Code custom MCP connector OAuth tokens failing to persist after app restart; tools load in-session but vanish after close; stale DCR registrations block clean auth Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "SDK auth failed: [\"expected\":\"string\",\"code\":\"invalid_type\",\"path\":[\"client_uri\"],\"message\":\"Invalid input: expected string, received null\"] / Incompatible auth server: does not support dynamic client registration"
common_causes:
  - "GitHub Issue #52565 on anthropics/claude-code documents persistent OAuth token failure for custom MCP connectors in both Desktop GUI and CLI paths. Server-side Zod v4 DCR field validation rejects null fields causing silent auth failure. Also linked Issue #52638 shows HTTP MCP servers fail when auth server doesn't support DCR. High commercial value: affects paid Claude Code Pro/Team users integrating external tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T16:44:27.347Z"
updated_at: "2026-06-01T16:44:27.347Z"
---

## What this error means

`SDK auth failed: ["expected":"string","code":"invalid_type","path":["client_uri"],"message":"Invalid input: expected string, received null"] / Incompatible auth server: does not support dynamic client registration` is a Claude Code failure pattern reported for developers trying to fix claude code custom mcp connector oauth tokens failing to persist after app restart; tools load in-session but vanish after close; stale dcr registrations block clean auth. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #52565 on anthropics/claude-code documents persistent OAuth token failure for custom MCP connectors in both Desktop GUI and CLI paths. Server-side Zod v4 DCR field validation rejects null fields causing silent auth failure. Also linked Issue #52638 shows HTTP MCP servers fail when auth server doesn't support DCR. High commercial value: affects paid Claude Code Pro/Team users integrating external tools.

## Common causes

- GitHub Issue #52565 on anthropics/claude-code documents persistent OAuth token failure for custom MCP connectors in both Desktop GUI and CLI paths. Server-side Zod v4 DCR field validation rejects null fields causing silent auth failure. Also linked Issue #52638 shows HTTP MCP servers fail when auth server doesn't support DCR. High commercial value: affects paid Claude Code Pro/Team users integrating external tools.

## Quick fixes

1. Confirm the exact error signature matches `SDK auth failed: ["expected":"string","code":"invalid_type","path":["client_uri"],"message":"Invalid input: expected string, received null"] / Incompatible auth server: does not support dynamic client registration`.
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

- https://github.com/anthropics/claude-code/issues/52565
- https://github.com/anthropics/claude-code/issues/52638

Evidence note: GitHub Issue #52565 on anthropics/claude-code documents persistent OAuth token failure for custom MCP connectors in both Desktop GUI and CLI paths. Server-side Zod v4 DCR field validation rejects null fields causing silent auth failure. Also linked Issue #52638 shows HTTP MCP servers fail when auth server doesn't support DCR. High commercial value: affects paid Claude Code Pro/Team users integrating external tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `SDK auth failed: ["expected":"string","code":"invalid_type","path":["client_uri"],"message":"Invalid input: expected string, received null"] / Incompatible auth server: does not support dynamic client registration` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SDK auth failed: ["expected":"string","code":"invalid_type","path":["client_uri"],"message":"Invalid input: expected string, received null"] / Incompatible auth server: does not support dynamic client registration`.
