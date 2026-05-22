---
title: "Claude Code Custom MCP OAuth Token Not Persisting Across Restarts"
description: "Fix Claude Code custom MCP connector failing to persist OAuth tokens across app restarts, showing 'Failed to connect' instead of reconnecting automatically Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect. ✗ Failed to connect"
common_causes:
  - "Multiple GitHub issues confirm: custom MCP OAuth connectors in Claude Code fail to persist tokens after app restart. Issue #52564 (Apr 2026) shows Settings → Connectors silently reports 'Connected' but no tools load. The root cause is divergent token storage code paths between managed and custom connectors. Reported by 3+ independent users across Windows/macOS (Quarri, Daily Bread Agent, Quizlar servers). Severity: active regression. Maps to AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T18:39:48.315Z"
updated_at: "2026-05-22T18:39:48.315Z"
---

## What this error means

`Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect. ✗ Failed to connect` is a Claude Code failure pattern reported for developers trying to fix claude code custom mcp connector failing to persist oauth tokens across app restarts, showing 'failed to connect' instead of reconnecting automatically. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues confirm: custom MCP OAuth connectors in Claude Code fail to persist tokens after app restart. Issue #52564 (Apr 2026) shows Settings → Connectors silently reports 'Connected' but no tools load. The root cause is divergent token storage code paths between managed and custom connectors. Reported by 3+ independent users across Windows/macOS (Quarri, Daily Bread Agent, Quizlar servers). Severity: active regression. Maps to AI Coding Tools.

## Common causes

- Multiple GitHub issues confirm: custom MCP OAuth connectors in Claude Code fail to persist tokens after app restart. Issue #52564 (Apr 2026) shows Settings → Connectors silently reports 'Connected' but no tools load. The root cause is divergent token storage code paths between managed and custom connectors. Reported by 3+ independent users across Windows/macOS (Quarri, Daily Bread Agent, Quizlar servers). Severity: active regression. Maps to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect. ✗ Failed to connect`.
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

Evidence note: Multiple GitHub issues confirm: custom MCP OAuth connectors in Claude Code fail to persist tokens after app restart. Issue #52564 (Apr 2026) shows Settings → Connectors silently reports 'Connected' but no tools load. The root cause is divergent token storage code paths between managed and custom connectors. Reported by 3+ independent users across Windows/macOS (Quarri, Daily Bread Agent, Quizlar servers). Severity: active regression. Maps to AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect. ✗ Failed to connect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect. ✗ Failed to connect`.
