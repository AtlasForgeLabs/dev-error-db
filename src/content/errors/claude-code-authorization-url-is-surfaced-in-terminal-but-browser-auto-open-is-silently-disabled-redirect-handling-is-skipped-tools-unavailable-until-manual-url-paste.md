---
title: "Claude Code MCP OAuth Browser Auto-Open Silently Disabled on Windows (CC 2.1.148)"
description: "Windows user adding an MCP server via Claude Code sees OAuth URL printed in terminal, but browser never launches automatically, blocking all MCP tools from being exposed to the LLM Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authorization URL is surfaced in terminal but browser auto-open is silently disabled; redirect handling is skipped — tools unavailable until manual URL paste"
common_causes:
  - "Anthropic claude-code Issue #61542 documents regression where MCP OAuth auto-browser-open was enabled pre-#14220 (closed 2026-02-14), then disabled without replacement UX. Debug-log root cause: 'Redirection handling is disabled, skipping redirect.' Affects paid Claude Code desktop users. Severity: bug even breaks /feedback self-reporting path. Category mapped to AI Coding Tools per SKILL.md rules for Claude Code."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T06:44:26.304Z"
updated_at: "2026-06-01T06:44:26.304Z"
---

## What this error means

`Authorization URL is surfaced in terminal but browser auto-open is silently disabled; redirect handling is skipped — tools unavailable until manual URL paste` is a Claude Code failure pattern reported for developers trying to windows user adding an mcp server via claude code sees oauth url printed in terminal, but browser never launches automatically, blocking all mcp tools from being exposed to the llm. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Anthropic claude-code Issue #61542 documents regression where MCP OAuth auto-browser-open was enabled pre-#14220 (closed 2026-02-14), then disabled without replacement UX. Debug-log root cause: 'Redirection handling is disabled, skipping redirect.' Affects paid Claude Code desktop users. Severity: bug even breaks /feedback self-reporting path. Category mapped to AI Coding Tools per SKILL.md rules for Claude Code.

## Common causes

- Anthropic claude-code Issue #61542 documents regression where MCP OAuth auto-browser-open was enabled pre-#14220 (closed 2026-02-14), then disabled without replacement UX. Debug-log root cause: 'Redirection handling is disabled, skipping redirect.' Affects paid Claude Code desktop users. Severity: bug even breaks /feedback self-reporting path. Category mapped to AI Coding Tools per SKILL.md rules for Claude Code.

## Quick fixes

1. Confirm the exact error signature matches `Authorization URL is surfaced in terminal but browser auto-open is silently disabled; redirect handling is skipped — tools unavailable until manual URL paste`.
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

- https://github.com/anthropics/claude-code/issues/61542
- https://github.com/anthropics/claude-code/issues/11585

Evidence note: Anthropic claude-code Issue #61542 documents regression where MCP OAuth auto-browser-open was enabled pre-#14220 (closed 2026-02-14), then disabled without replacement UX. Debug-log root cause: 'Redirection handling is disabled, skipping redirect.' Affects paid Claude Code desktop users. Severity: bug even breaks /feedback self-reporting path. Category mapped to AI Coding Tools per SKILL.md rules for Claude Code.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authorization URL is surfaced in terminal but browser auto-open is silently disabled; redirect handling is skipped — tools unavailable until manual URL paste` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authorization URL is surfaced in terminal but browser auto-open is silently disabled; redirect handling is skipped — tools unavailable until manual URL paste`.
