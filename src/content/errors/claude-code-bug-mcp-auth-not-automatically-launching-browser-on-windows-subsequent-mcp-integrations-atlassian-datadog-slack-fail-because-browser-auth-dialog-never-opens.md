---
title: "Claude Code MCP auth fails to launch browser automatically on Windows"
description: "Fix Claude Code MCP OAuth flow on Windows where the first MCP auth may work but subsequent ones silently fail due to browser not auto-launching; regression identified Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] mcp auth not automatically launching browser on Windows — subsequent MCP integrations (Atlassian, DataDog, Slack) fail because browser auth dialog never opens"
common_causes:
  - "GitHub Issue #59194 in anthropics/claude-code (opened May 15 2026, defconmike). Regression bug affecting Windows users. First MCP auth launches browser fine, subsequent ones (DataDog, Atlassian, Slack) fail without browser dialog. Tagged as regression + has repro. Directly impacts developers using Claude Code with MCP ecosystem integrations. Category mapping: AI Coding Tools (Claude Code MCP auth integration failure)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T17:37:16.979Z"
updated_at: "2026-05-19T17:37:16.979Z"
---

## What this error means

`[BUG] mcp auth not automatically launching browser on Windows — subsequent MCP integrations (Atlassian, DataDog, Slack) fail because browser auth dialog never opens` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth flow on windows where the first mcp auth may work but subsequent ones silently fail due to browser not auto-launching; regression identified. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #59194 in anthropics/claude-code (opened May 15 2026, defconmike). Regression bug affecting Windows users. First MCP auth launches browser fine, subsequent ones (DataDog, Atlassian, Slack) fail without browser dialog. Tagged as regression + has repro. Directly impacts developers using Claude Code with MCP ecosystem integrations. Category mapping: AI Coding Tools (Claude Code MCP auth integration failure).

## Common causes

- GitHub Issue #59194 in anthropics/claude-code (opened May 15 2026, defconmike). Regression bug affecting Windows users. First MCP auth launches browser fine, subsequent ones (DataDog, Atlassian, Slack) fail without browser dialog. Tagged as regression + has repro. Directly impacts developers using Claude Code with MCP ecosystem integrations. Category mapping: AI Coding Tools (Claude Code MCP auth integration failure).

## Quick fixes

1. Confirm the exact error signature matches `[BUG] mcp auth not automatically launching browser on Windows — subsequent MCP integrations (Atlassian, DataDog, Slack) fail because browser auth dialog never opens`.
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

- https://github.com/anthropics/claude-code/issues/59194

Evidence note: GitHub Issue #59194 in anthropics/claude-code (opened May 15 2026, defconmike). Regression bug affecting Windows users. First MCP auth launches browser fine, subsequent ones (DataDog, Atlassian, Slack) fail without browser dialog. Tagged as regression + has repro. Directly impacts developers using Claude Code with MCP ecosystem integrations. Category mapping: AI Coding Tools (Claude Code MCP auth integration failure).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] mcp auth not automatically launching browser on Windows — subsequent MCP integrations (Atlassian, DataDog, Slack) fail because browser auth dialog never opens` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] mcp auth not automatically launching browser on Windows — subsequent MCP integrations (Atlassian, DataDog, Slack) fail because browser auth dialog never opens`.
