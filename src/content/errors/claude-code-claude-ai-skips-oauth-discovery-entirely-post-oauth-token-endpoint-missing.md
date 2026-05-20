---
title: "Claude Code Skips OAuth Discovery Entirely on claude.ai Web Client"
description: "Fix Claude Code web client not performing OAuth discovery for MCP servers, causing connection failures when connecting to external authenticated services Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "claude.ai skips OAuth discovery entirely — POST /oauth/token endpoint missing"
common_causes:
  - "GitHub Issue #217 in anthropics/claude-ai-mcp (April 22, 2026). FastMCP-based servers work from CLI Claude Code but fail from Claude.ai web interface. Root cause appears to be web client skipping OAuth flow-selection. This impacts any developer deploying MCP servers expecting cross-client compatibility. Maps to AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T07:38:28.858Z"
updated_at: "2026-05-20T07:38:28.858Z"
---

## What this error means

`claude.ai skips OAuth discovery entirely — POST /oauth/token endpoint missing` is a Claude Code failure pattern reported for developers trying to fix claude code web client not performing oauth discovery for mcp servers, causing connection failures when connecting to external authenticated services. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #217 in anthropics/claude-ai-mcp (April 22, 2026). FastMCP-based servers work from CLI Claude Code but fail from Claude.ai web interface. Root cause appears to be web client skipping OAuth flow-selection. This impacts any developer deploying MCP servers expecting cross-client compatibility. Maps to AI Coding Tools.

## Common causes

- GitHub Issue #217 in anthropics/claude-ai-mcp (April 22, 2026). FastMCP-based servers work from CLI Claude Code but fail from Claude.ai web interface. Root cause appears to be web client skipping OAuth flow-selection. This impacts any developer deploying MCP servers expecting cross-client compatibility. Maps to AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `claude.ai skips OAuth discovery entirely — POST /oauth/token endpoint missing`.
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

- https://github.com/anthropics/claude-ai-mcp/issues/217

Evidence note: GitHub Issue #217 in anthropics/claude-ai-mcp (April 22, 2026). FastMCP-based servers work from CLI Claude Code but fail from Claude.ai web interface. Root cause appears to be web client skipping OAuth flow-selection. This impacts any developer deploying MCP servers expecting cross-client compatibility. Maps to AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `claude.ai skips OAuth discovery entirely — POST /oauth/token endpoint missing` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `claude.ai skips OAuth discovery entirely — POST /oauth/token endpoint missing`.
