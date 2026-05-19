---
title: "Managed Agents: vault_ids not inherited by subagents — MCP OAuth calls fail silently"
description: "Fix MCP OAuth authentication failure for Dynamics 365 / Microsoft Graph MCP servers called from subagents dispatched via Claude managed agents Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "MCP OAuth calls fail when coordinator agent dispatches subagent via agent_toolset_20260401 — vault_ids parameter not available in subagent context"
common_causes:
  - "Anthropic anthropic-sdk-python #1562 (2026-05-18): vault_ids configured on sessions.create not passed to subagent execution context. Any MCP tool call requiring OAuth credentials fails silently or returns auth error. Category: Anthropic API (Claude platform issue affecting paid managed agents feature). Distinct from any covered error."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-19"
published_at: "2026-05-19T05:37:15.297Z"
updated_at: "2026-05-19T05:37:15.297Z"
---

## What this error means

`MCP OAuth calls fail when coordinator agent dispatches subagent via agent_toolset_20260401 — vault_ids parameter not available in subagent context` is a Anthropic API failure pattern reported for developers trying to fix mcp oauth authentication failure for dynamics 365 / microsoft graph mcp servers called from subagents dispatched via claude managed agents. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Anthropic anthropic-sdk-python #1562 (2026-05-18): vault_ids configured on sessions.create not passed to subagent execution context. Any MCP tool call requiring OAuth credentials fails silently or returns auth error. Category: Anthropic API (Claude platform issue affecting paid managed agents feature). Distinct from any covered error.

## Common causes

- Anthropic anthropic-sdk-python #1562 (2026-05-18): vault_ids configured on sessions.create not passed to subagent execution context. Any MCP tool call requiring OAuth credentials fails silently or returns auth error. Category: Anthropic API (Claude platform issue affecting paid managed agents feature). Distinct from any covered error.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth calls fail when coordinator agent dispatches subagent via agent_toolset_20260401 — vault_ids parameter not available in subagent context`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1562

Evidence note: Anthropic anthropic-sdk-python #1562 (2026-05-18): vault_ids configured on sessions.create not passed to subagent execution context. Any MCP tool call requiring OAuth credentials fails silently or returns auth error. Category: Anthropic API (Claude platform issue affecting paid managed agents feature). Distinct from any covered error.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `MCP OAuth calls fail when coordinator agent dispatches subagent via agent_toolset_20260401 — vault_ids parameter not available in subagent context` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth calls fail when coordinator agent dispatches subagent via agent_toolset_20260401 — vault_ids parameter not available in subagent context`.
