---
title: "Claude Code remote routines lose MCP connector permissions every run"
description: "Users running scheduled webhooks/retrieval-routines in Claude Code web UI lose all MCP connector permissions on each invocation due to ephemeral container recreation, requiring manual permission grant every time. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Remote routines lose MCP connector permissions every run — tools blocked in ephemeral container"
common_causes:
  - "Source: anthropics/claude-code#61141 (opened May 21, 2026). Labeled area:mcp, area:permissions, area:routines, bug, regression. Affects webhook-triggered tasks and scheduled retrievals that depend on MCP connectors (GitHub, APIs). Permissions are lost because each routine run spawns a new ephemeral container with no persisted session state. Category: AI Coding Tools — MCP auth/session persistence."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T12:39:44.543Z"
updated_at: "2026-05-21T12:39:44.543Z"
---

## What this error means

`Remote routines lose MCP connector permissions every run — tools blocked in ephemeral container` is a Claude Code failure pattern reported for developers trying to users running scheduled webhooks/retrieval-routines in claude code web ui lose all mcp connector permissions on each invocation due to ephemeral container recreation, requiring manual permission grant every time.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: anthropics/claude-code#61141 (opened May 21, 2026). Labeled area:mcp, area:permissions, area:routines, bug, regression. Affects webhook-triggered tasks and scheduled retrievals that depend on MCP connectors (GitHub, APIs). Permissions are lost because each routine run spawns a new ephemeral container with no persisted session state. Category: AI Coding Tools — MCP auth/session persistence.

## Common causes

- Source: anthropics/claude-code#61141 (opened May 21, 2026). Labeled area:mcp, area:permissions, area:routines, bug, regression. Affects webhook-triggered tasks and scheduled retrievals that depend on MCP connectors (GitHub, APIs). Permissions are lost because each routine run spawns a new ephemeral container with no persisted session state. Category: AI Coding Tools — MCP auth/session persistence.

## Quick fixes

1. Confirm the exact error signature matches `Remote routines lose MCP connector permissions every run — tools blocked in ephemeral container`.
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

- https://github.com/anthropics/claude-code/issues/61141

Evidence note: Source: anthropics/claude-code#61141 (opened May 21, 2026). Labeled area:mcp, area:permissions, area:routines, bug, regression. Affects webhook-triggered tasks and scheduled retrievals that depend on MCP connectors (GitHub, APIs). Permissions are lost because each routine run spawns a new ephemeral container with no persisted session state. Category: AI Coding Tools — MCP auth/session persistence.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Remote routines lose MCP connector permissions every run — tools blocked in ephemeral container` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Remote routines lose MCP connector permissions every run — tools blocked in ephemeral container`.
