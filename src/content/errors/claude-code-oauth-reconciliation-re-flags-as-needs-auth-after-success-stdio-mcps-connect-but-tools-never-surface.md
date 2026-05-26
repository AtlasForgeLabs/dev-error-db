---
title: "Claude Code Windows MCP OAuth reconciliation fails — tools never surface after auth success"
description: "Windows users complete OAuth flow for MCP servers but tools remain invisible — reconciliation logic incorrectly marks tokens as needing fresh auth even after successful token acquisition Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth reconciliation re-flags as 'needs auth' after success; stdio MCPs connect but tools never surface"
common_causes:
  - "Source: https://github.com/anthropics/claude-code/issues/62298 (opened May 26 2026). Has repro label, area:mcp+area:auth labels. Affects all MCP auth flows on Windows: OAuth succeeds but tokens are overwritten by flawed reconciliation heuristic. Users can't access any MCP tools despite valid credentials. No existing coverage on dev-error-db."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T06:43:16.143Z"
updated_at: "2026-05-26T06:43:16.143Z"
---

## What this error means

`OAuth reconciliation re-flags as 'needs auth' after success; stdio MCPs connect but tools never surface` is a Claude Code failure pattern reported for developers trying to windows users complete oauth flow for mcp servers but tools remain invisible — reconciliation logic incorrectly marks tokens as needing fresh auth even after successful token acquisition. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-code/issues/62298 (opened May 26 2026). Has repro label, area:mcp+area:auth labels. Affects all MCP auth flows on Windows: OAuth succeeds but tokens are overwritten by flawed reconciliation heuristic. Users can't access any MCP tools despite valid credentials. No existing coverage on dev-error-db.

## Common causes

- Source: https://github.com/anthropics/claude-code/issues/62298 (opened May 26 2026). Has repro label, area:mcp+area:auth labels. Affects all MCP auth flows on Windows: OAuth succeeds but tokens are overwritten by flawed reconciliation heuristic. Users can't access any MCP tools despite valid credentials. No existing coverage on dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `OAuth reconciliation re-flags as 'needs auth' after success; stdio MCPs connect but tools never surface`.
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

- https://github.com/anthropics/claude-code/issues/62298

Evidence note: Source: https://github.com/anthropics/claude-code/issues/62298 (opened May 26 2026). Has repro label, area:mcp+area:auth labels. Affects all MCP auth flows on Windows: OAuth succeeds but tokens are overwritten by flawed reconciliation heuristic. Users can't access any MCP tools despite valid credentials. No existing coverage on dev-error-db.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth reconciliation re-flags as 'needs auth' after success; stdio MCPs connect but tools never surface` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth reconciliation re-flags as 'needs auth' after success; stdio MCPs connect but tools never surface`.
