---
title: "Managed Agents: vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail"
description: "Fix anthropic managed agents subagent dispatch failing with MCP OAuth auth errors due to missing vault credential inheritance Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail"
common_causes:
  - "GitHub issue #1562 in anthropics/anthropic-sdk-python (opened May 18, 2026). Coordinator agent using sessions.create with vault_ids for MCP OAuth tools cannot pass credentials to subagents spawned via agent_toolset_20260401. All subagent MCP tool calls result in is_error=True auth failures. This blocks multi-agent patterns requiring OAuth-backed MCP servers."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-18"
published_at: "2026-05-18T19:37:13.961Z"
updated_at: "2026-05-18T19:37:13.961Z"
---

## What this error means

`vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail` is a Anthropic API failure pattern reported for developers trying to fix anthropic managed agents subagent dispatch failing with mcp oauth auth errors due to missing vault credential inheritance. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1562 in anthropics/anthropic-sdk-python (opened May 18, 2026). Coordinator agent using sessions.create with vault_ids for MCP OAuth tools cannot pass credentials to subagents spawned via agent_toolset_20260401. All subagent MCP tool calls result in is_error=True auth failures. This blocks multi-agent patterns requiring OAuth-backed MCP servers.

## Common causes

- GitHub issue #1562 in anthropics/anthropic-sdk-python (opened May 18, 2026). Coordinator agent using sessions.create with vault_ids for MCP OAuth tools cannot pass credentials to subagents spawned via agent_toolset_20260401. All subagent MCP tool calls result in is_error=True auth failures. This blocks multi-agent patterns requiring OAuth-backed MCP servers.

## Quick fixes

1. Confirm the exact error signature matches `vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail`.
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

Evidence note: GitHub issue #1562 in anthropics/anthropic-sdk-python (opened May 18, 2026). Coordinator agent using sessions.create with vault_ids for MCP OAuth tools cannot pass credentials to subagents spawned via agent_toolset_20260401. All subagent MCP tool calls result in is_error=True auth failures. This blocks multi-agent patterns requiring OAuth-backed MCP servers.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `vault_ids not inherited by subagents dispatched via agent_toolset — MCP OAuth calls fail`.
