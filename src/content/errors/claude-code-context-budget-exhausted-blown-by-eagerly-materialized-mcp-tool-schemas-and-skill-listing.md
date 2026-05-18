---
title: "Subagent context budget blown by eagerly-materialized MCP tool schemas and skill listing"
description: "Fix excessive context consumption caused by eagerly loading full MCP tool schemas and skill listings into subagent context budget Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Context budget exhausted / blown by eagerly-materialized MCP tool schemas and skill listing"
common_causes:
  - "GitHub Issue #60141 in anthropics/claude-code, opened May 18 2026. Each MCP tool schema and skill listing entry consumes significant context tokens when eagerly materialized in subagent contexts, leading to premature context exhaustion. Category: AI Coding Tools (agents/mcp/tools area). Affects paid Claude Code users running complex agent workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T11:37:12.913Z"
updated_at: "2026-05-18T11:37:12.913Z"
---

## What this error means

`Context budget exhausted / blown by eagerly-materialized MCP tool schemas and skill listing` is a Claude Code failure pattern reported for developers trying to fix excessive context consumption caused by eagerly loading full mcp tool schemas and skill listings into subagent context budget. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60141 in anthropics/claude-code, opened May 18 2026. Each MCP tool schema and skill listing entry consumes significant context tokens when eagerly materialized in subagent contexts, leading to premature context exhaustion. Category: AI Coding Tools (agents/mcp/tools area). Affects paid Claude Code users running complex agent workflows.

## Common causes

- GitHub Issue #60141 in anthropics/claude-code, opened May 18 2026. Each MCP tool schema and skill listing entry consumes significant context tokens when eagerly materialized in subagent contexts, leading to premature context exhaustion. Category: AI Coding Tools (agents/mcp/tools area). Affects paid Claude Code users running complex agent workflows.

## Quick fixes

1. Confirm the exact error signature matches `Context budget exhausted / blown by eagerly-materialized MCP tool schemas and skill listing`.
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

- https://github.com/anthropics/claude-code/issues/60141

Evidence note: GitHub Issue #60141 in anthropics/claude-code, opened May 18 2026. Each MCP tool schema and skill listing entry consumes significant context tokens when eagerly materialized in subagent contexts, leading to premature context exhaustion. Category: AI Coding Tools (agents/mcp/tools area). Affects paid Claude Code users running complex agent workflows.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Context budget exhausted / blown by eagerly-materialized MCP tool schemas and skill listing` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Context budget exhausted / blown by eagerly-materialized MCP tool schemas and skill listing`.
