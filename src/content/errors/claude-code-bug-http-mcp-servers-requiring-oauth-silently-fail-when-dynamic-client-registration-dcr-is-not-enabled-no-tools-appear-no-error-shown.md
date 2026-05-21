---
title: "Claude Code HTTP MCP Server OAuth Silent Failure with DCR Disabled"
description: "Debug Claude Code silently failing to connect to OAuth-protected MCP servers without proper DCR configuration Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] HTTP MCP servers requiring OAuth silently fail when Dynamic Client Registration (DCR) is not enabled — no tools appear, no error shown"
common_causes:
  - "Active GitHub issue #26917 (Feb 2026) and #46623 (Apr 2026) in anthropics/claude-code repo documenting HTTP MCP OAuth silent failures. Recent issue #269 on claude-ai-mcp (May 8 2026) confirms workaround needed. Category mapping: AI Coding Tools per SKILL.md rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T16:39:45.018Z"
updated_at: "2026-05-21T16:39:45.018Z"
---

## What this error means

`[BUG] HTTP MCP servers requiring OAuth silently fail when Dynamic Client Registration (DCR) is not enabled — no tools appear, no error shown` is a Claude Code failure pattern reported for developers trying to debug claude code silently failing to connect to oauth-protected mcp servers without proper dcr configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue #26917 (Feb 2026) and #46623 (Apr 2026) in anthropics/claude-code repo documenting HTTP MCP OAuth silent failures. Recent issue #269 on claude-ai-mcp (May 8 2026) confirms workaround needed. Category mapping: AI Coding Tools per SKILL.md rules.

## Common causes

- Active GitHub issue #26917 (Feb 2026) and #46623 (Apr 2026) in anthropics/claude-code repo documenting HTTP MCP OAuth silent failures. Recent issue #269 on claude-ai-mcp (May 8 2026) confirms workaround needed. Category mapping: AI Coding Tools per SKILL.md rules.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] HTTP MCP servers requiring OAuth silently fail when Dynamic Client Registration (DCR) is not enabled — no tools appear, no error shown`.
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

- https://github.com/anthropics/claude-code/issues/26917
- https://github.com/anthropics/claude-code/issues/46623
- https://github.com/anthropics/claude-ai-mcp/issues/269

Evidence note: Active GitHub issue #26917 (Feb 2026) and #46623 (Apr 2026) in anthropics/claude-code repo documenting HTTP MCP OAuth silent failures. Recent issue #269 on claude-ai-mcp (May 8 2026) confirms workaround needed. Category mapping: AI Coding Tools per SKILL.md rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] HTTP MCP servers requiring OAuth silently fail when Dynamic Client Registration (DCR) is not enabled — no tools appear, no error shown` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] HTTP MCP servers requiring OAuth silently fail when Dynamic Client Registration (DCR) is not enabled — no tools appear, no error shown`.
