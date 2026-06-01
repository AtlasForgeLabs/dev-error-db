---
title: "Claude Code MCP OAuth completes but Bearer token never sent — server stays in 'Needs authentication'"
description: "Fix broken MCP OAuth authentication flow in Claude Code where tokens complete OAuth but are never actually transmitted to the MCP server Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth completes but Bearer token never sent to server; server stuck in 'Needs authentication'"
common_causes:
  - "anthropics/claude-code#60260 reports persistent auth failure for MCP servers. Multiple related issues (#33578, #36307, #44830, #46140, #49043, #54727) confirm this is an active, recurring pattern affecting production use of AI coding tools. High commercial value since it blocks paid Anthropic subscription users."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T02:44:25.906Z"
updated_at: "2026-06-01T02:44:25.906Z"
---

## What this error means

`MCP OAuth completes but Bearer token never sent to server; server stuck in 'Needs authentication'` is a Claude Code failure pattern reported for developers trying to fix broken mcp oauth authentication flow in claude code where tokens complete oauth but are never actually transmitted to the mcp server. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

anthropics/claude-code#60260 reports persistent auth failure for MCP servers. Multiple related issues (#33578, #36307, #44830, #46140, #49043, #54727) confirm this is an active, recurring pattern affecting production use of AI coding tools. High commercial value since it blocks paid Anthropic subscription users.

## Common causes

- anthropics/claude-code#60260 reports persistent auth failure for MCP servers. Multiple related issues (#33578, #36307, #44830, #46140, #49043, #54727) confirm this is an active, recurring pattern affecting production use of AI coding tools. High commercial value since it blocks paid Anthropic subscription users.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth completes but Bearer token never sent to server; server stuck in 'Needs authentication'`.
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

- https://github.com/anthropics/claude-code/issues/60260
- https://github.com/anthropics/claude-code/issues/33578
- https://github.com/anthropics/claude-code/issues/36307
- https://github.com/anthropics/claude-code/issues/44830

Evidence note: anthropics/claude-code#60260 reports persistent auth failure for MCP servers. Multiple related issues (#33578, #36307, #44830, #46140, #49043, #54727) confirm this is an active, recurring pattern affecting production use of AI coding tools. High commercial value since it blocks paid Anthropic subscription users.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth completes but Bearer token never sent to server; server stuck in 'Needs authentication'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth completes but Bearer token never sent to server; server stuck in 'Needs authentication'`.
