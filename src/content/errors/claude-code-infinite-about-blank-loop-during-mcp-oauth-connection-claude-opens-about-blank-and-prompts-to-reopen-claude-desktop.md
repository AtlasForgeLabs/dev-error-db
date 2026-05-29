---
title: "Claude Desktop & claude.ai — Custom OAuth-Protected MCP Server Triggers Infinite about:blank Loop"
description: "Developer building a fully spec-compliant OAuth 2.1 MCP server finds Claude Desktop/claude.ai cannot connect — OAuth flow never initiates, stuck in about:blank redirect loop Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "infinite about:blank loop during MCP OAuth connection; Claude opens about:blank and prompts to reopen Claude Desktop"
common_causes:
  - "Source: https://github.com/anthropics/claude-code/issues/11814 (created 2025-11-18). Bug affects both Claude Desktop app and claude.ai web interface. Same server works fine with `claude mcp add --transport http` CLI. High-value: enterprise MCP developers lose trust in desktop/web tools. Not covered by dev-error-db. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T12:43:26.234Z"
updated_at: "2026-05-29T12:43:26.234Z"
---

## What this error means

`infinite about:blank loop during MCP OAuth connection; Claude opens about:blank and prompts to reopen Claude Desktop` is a Claude Code failure pattern reported for developers trying to developer building a fully spec-compliant oauth 2.1 mcp server finds claude desktop/claude.ai cannot connect — oauth flow never initiates, stuck in about:blank redirect loop. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-code/issues/11814 (created 2025-11-18). Bug affects both Claude Desktop app and claude.ai web interface. Same server works fine with `claude mcp add --transport http` CLI. High-value: enterprise MCP developers lose trust in desktop/web tools. Not covered by dev-error-db. Category: AI Coding Tools.

## Common causes

- Source: https://github.com/anthropics/claude-code/issues/11814 (created 2025-11-18). Bug affects both Claude Desktop app and claude.ai web interface. Same server works fine with `claude mcp add --transport http` CLI. High-value: enterprise MCP developers lose trust in desktop/web tools. Not covered by dev-error-db. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `infinite about:blank loop during MCP OAuth connection; Claude opens about:blank and prompts to reopen Claude Desktop`.
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

- https://github.com/anthropics/claude-code/issues/11814

Evidence note: Source: https://github.com/anthropics/claude-code/issues/11814 (created 2025-11-18). Bug affects both Claude Desktop app and claude.ai web interface. Same server works fine with `claude mcp add --transport http` CLI. High-value: enterprise MCP developers lose trust in desktop/web tools. Not covered by dev-error-db. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `infinite about:blank loop during MCP OAuth connection; Claude opens about:blank and prompts to reopen Claude Desktop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `infinite about:blank loop during MCP OAuth connection; Claude opens about:blank and prompts to reopen Claude Desktop`.
