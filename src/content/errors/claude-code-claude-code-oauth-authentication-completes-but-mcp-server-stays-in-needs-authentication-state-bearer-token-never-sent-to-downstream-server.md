---
title: "OAuth completes but Bearer token never sent to MCP server — Claude Code needs re-authentication"
description: "Fix Claude Code MCP OAuth flow where token acquisition appears successful but the server continues requesting authentication, requiring manual restart or re-login Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code OAuth authentication completes but MCP server stays in 'Needs authentication' state; Bearer token never sent to downstream server"
common_causes:
  - "Issues #46140, #60260, #65408 on anthropics/claude-code report OAuth flow bugs: completion succeeds but token is not honored, causing persistent auth loops. Affects paid users relying on Claude Code in production development workflows. AI coding tool broken = significant commercial value boost. Category mapping: Claude Code specific auth/MCP bug → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T11:36:11.592Z"
updated_at: "2026-06-10T11:36:11.592Z"
---

## What this error means

`Claude Code OAuth authentication completes but MCP server stays in 'Needs authentication' state; Bearer token never sent to downstream server` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth flow where token acquisition appears successful but the server continues requesting authentication, requiring manual restart or re-login. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issues #46140, #60260, #65408 on anthropics/claude-code report OAuth flow bugs: completion succeeds but token is not honored, causing persistent auth loops. Affects paid users relying on Claude Code in production development workflows. AI coding tool broken = significant commercial value boost. Category mapping: Claude Code specific auth/MCP bug → AI Coding Tools.

## Common causes

- Issues #46140, #60260, #65408 on anthropics/claude-code report OAuth flow bugs: completion succeeds but token is not honored, causing persistent auth loops. Affects paid users relying on Claude Code in production development workflows. AI coding tool broken = significant commercial value boost. Category mapping: Claude Code specific auth/MCP bug → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code OAuth authentication completes but MCP server stays in 'Needs authentication' state; Bearer token never sent to downstream server`.
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

- https://github.com/anthropics/claude-code/issues/46140
- https://github.com/anthropics/claude-code/issues/60260
- https://github.com/anthropics/claude-code/issues/65408

Evidence note: Issues #46140, #60260, #65408 on anthropics/claude-code report OAuth flow bugs: completion succeeds but token is not honored, causing persistent auth loops. Affects paid users relying on Claude Code in production development workflows. AI coding tool broken = significant commercial value boost. Category mapping: Claude Code specific auth/MCP bug → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code OAuth authentication completes but MCP server stays in 'Needs authentication' state; Bearer token never sent to downstream server` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code OAuth authentication completes but MCP server stays in 'Needs authentication' state; Bearer token never sent to downstream server`.
