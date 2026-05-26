---
title: "Claude Code Cowork macOS: MCP connectors fail due to missing OAuth scope user:mcp_servers"
description: "Fix all claude.ai-hosted MCP connectors (Gmail, Google Drive, Calendar, web search) failing with zero tools exposed in Cowork sessions on macOS Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[claudeai-mcp] Missing user:mcp_servers scope (scopes=user:inference)"
common_causes:
  - "Issue #62556 from anthropics/claude-code repo opened May 26, 2026. Root cause: Cowork OAuth request code path does not include user:mcp_servers scope required by the claudeai-mcp gateway. Confirmed still active in Claude 1.9255.0 as of May 26. All claude.ai-hosted connectors broken for every Cowork session; affects Max-plan users broadly. GitHub Actions triaged as area:auth area:mcp area:cowork platform:macos."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T20:43:17.883Z"
updated_at: "2026-05-26T20:43:17.883Z"
---

## What this error means

`[claudeai-mcp] Missing user:mcp_servers scope (scopes=user:inference)` is a Claude Code failure pattern reported for developers trying to fix all claude.ai-hosted mcp connectors (gmail, google drive, calendar, web search) failing with zero tools exposed in cowork sessions on macos. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #62556 from anthropics/claude-code repo opened May 26, 2026. Root cause: Cowork OAuth request code path does not include user:mcp_servers scope required by the claudeai-mcp gateway. Confirmed still active in Claude 1.9255.0 as of May 26. All claude.ai-hosted connectors broken for every Cowork session; affects Max-plan users broadly. GitHub Actions triaged as area:auth area:mcp area:cowork platform:macos.

## Common causes

- Issue #62556 from anthropics/claude-code repo opened May 26, 2026. Root cause: Cowork OAuth request code path does not include user:mcp_servers scope required by the claudeai-mcp gateway. Confirmed still active in Claude 1.9255.0 as of May 26. All claude.ai-hosted connectors broken for every Cowork session; affects Max-plan users broadly. GitHub Actions triaged as area:auth area:mcp area:cowork platform:macos.

## Quick fixes

1. Confirm the exact error signature matches `[claudeai-mcp] Missing user:mcp_servers scope (scopes=user:inference)`.
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

- https://github.com/anthropics/claude-code/issues/62556

Evidence note: Issue #62556 from anthropics/claude-code repo opened May 26, 2026. Root cause: Cowork OAuth request code path does not include user:mcp_servers scope required by the claudeai-mcp gateway. Confirmed still active in Claude 1.9255.0 as of May 26. All claude.ai-hosted connectors broken for every Cowork session; affects Max-plan users broadly. GitHub Actions triaged as area:auth area:mcp area:cowork platform:macos.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[claudeai-mcp] Missing user:mcp_servers scope (scopes=user:inference)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[claudeai-mcp] Missing user:mcp_servers scope (scopes=user:inference)`.
