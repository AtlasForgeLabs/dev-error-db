---
title: "Anthropic Managed Agents: vault_ids not inherited by subagent MCP OAuth calls"
description: "Fix subagent dispatch pattern where coordinator agent's vault-based OAuth credentials cannot reach subagent's MCP tool execution context Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "MCP OAuth calls fail in subagents — vault_ids parameter exists only on sessions.create, no mechanism to pass credentials when dispatching subagents via agent_toolset"
common_causes:
  - "Issue #1562 on anthropics/anthropic-sdk-python (open, 1 comment, created 2026-05-18). Coordinator agents with vault_ids can call MCP tools directly but any subagent dispatched via agent_toolset cannot inherit those credentials. Makes vault-backed MCP tools completely unusable in multi-agent patterns. Strong B2B enterprise use case."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-23"
published_at: "2026-05-23T08:39:50.052Z"
updated_at: "2026-05-23T08:39:50.052Z"
---

## What this error means

`MCP OAuth calls fail in subagents — vault_ids parameter exists only on sessions.create, no mechanism to pass credentials when dispatching subagents via agent_toolset` is a Anthropic API failure pattern reported for developers trying to fix subagent dispatch pattern where coordinator agent's vault-based oauth credentials cannot reach subagent's mcp tool execution context. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #1562 on anthropics/anthropic-sdk-python (open, 1 comment, created 2026-05-18). Coordinator agents with vault_ids can call MCP tools directly but any subagent dispatched via agent_toolset cannot inherit those credentials. Makes vault-backed MCP tools completely unusable in multi-agent patterns. Strong B2B enterprise use case.

## Common causes

- Issue #1562 on anthropics/anthropic-sdk-python (open, 1 comment, created 2026-05-18). Coordinator agents with vault_ids can call MCP tools directly but any subagent dispatched via agent_toolset cannot inherit those credentials. Makes vault-backed MCP tools completely unusable in multi-agent patterns. Strong B2B enterprise use case.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth calls fail in subagents — vault_ids parameter exists only on sessions.create, no mechanism to pass credentials when dispatching subagents via agent_toolset`.
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

Evidence note: Issue #1562 on anthropics/anthropic-sdk-python (open, 1 comment, created 2026-05-18). Coordinator agents with vault_ids can call MCP tools directly but any subagent dispatched via agent_toolset cannot inherit those credentials. Makes vault-backed MCP tools completely unusable in multi-agent patterns. Strong B2B enterprise use case.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `MCP OAuth calls fail in subagents — vault_ids parameter exists only on sessions.create, no mechanism to pass credentials when dispatching subagents via agent_toolset` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth calls fail in subagents — vault_ids parameter exists only on sessions.create, no mechanism to pass credentials when dispatching subagents via agent_toolset`.
