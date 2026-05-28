---
title: "Custom MCP Connector Fails With Authorization Error on Claude.ai Only"
description: "Fix custom MCP connectors that authenticate correctly in Claude Code CLI but fail with authorization errors when used via Claude.ai web interface Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Custom MCP connector fails with authorization error on Claude.ai (works in Claude Code)"
common_causes:
  - "GitHub issue #326 (anthropics/claude-ai-mcp) — Custom MCP connectors work fine in Claude Code terminal app but fail with auth errors on Claude.ai web. Points to different auth flows between desktop and web clients. Distinct from the Docker/container MCP issue (#46623) and the pre-authorization bug (#28580). Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T09:43:22.773Z"
updated_at: "2026-05-28T09:43:22.773Z"
---

## What this error means

`Custom MCP connector fails with authorization error on Claude.ai (works in Claude Code)` is a Claude Code failure pattern reported for developers trying to fix custom mcp connectors that authenticate correctly in claude code cli but fail with authorization errors when used via claude.ai web interface. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #326 (anthropics/claude-ai-mcp) — Custom MCP connectors work fine in Claude Code terminal app but fail with auth errors on Claude.ai web. Points to different auth flows between desktop and web clients. Distinct from the Docker/container MCP issue (#46623) and the pre-authorization bug (#28580). Category: AI Coding Tools.

## Common causes

- GitHub issue #326 (anthropics/claude-ai-mcp) — Custom MCP connectors work fine in Claude Code terminal app but fail with auth errors on Claude.ai web. Points to different auth flows between desktop and web clients. Distinct from the Docker/container MCP issue (#46623) and the pre-authorization bug (#28580). Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Custom MCP connector fails with authorization error on Claude.ai (works in Claude Code)`.
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

- https://github.com/anthropics/claude-ai-mcp/issues/326

Evidence note: GitHub issue #326 (anthropics/claude-ai-mcp) — Custom MCP connectors work fine in Claude Code terminal app but fail with auth errors on Claude.ai web. Points to different auth flows between desktop and web clients. Distinct from the Docker/container MCP issue (#46623) and the pre-authorization bug (#28580). Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Custom MCP connector fails with authorization error on Claude.ai (works in Claude Code)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Custom MCP connector fails with authorization error on Claude.ai (works in Claude Code)`.
