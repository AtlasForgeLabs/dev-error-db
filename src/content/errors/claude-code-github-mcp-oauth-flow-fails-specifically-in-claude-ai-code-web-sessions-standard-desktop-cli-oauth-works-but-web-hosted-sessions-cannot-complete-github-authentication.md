---
title: "Hosted GitHub MCP OAuth flow broken in claude.ai/code web sessions"
description: "Resolve GitHub-hosted MCP OAuth authentication failure exclusively in Claude Code web (claude.ai/code) sessions while desktop variant succeeds Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "GitHub MCP OAuth flow fails specifically in claude.ai/code web sessions — standard Desktop CLI OAuth works but web-hosted sessions cannot complete GitHub authentication"
common_causes:
  - "GitHub issue anthropics/claude-code#60807 (May 20, 2026, open). Web sessions fail GitHub MCP OAuth while desktop and CLI variants succeed. Distinct platform-specific regression affecting paid enterprise users integrating GitHub MCP servers via web interface."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T19:38:30.243Z"
updated_at: "2026-05-20T19:38:30.243Z"
---

## What this error means

`GitHub MCP OAuth flow fails specifically in claude.ai/code web sessions — standard Desktop CLI OAuth works but web-hosted sessions cannot complete GitHub authentication` is a Claude Code failure pattern reported for developers trying to resolve github-hosted mcp oauth authentication failure exclusively in claude code web (claude.ai/code) sessions while desktop variant succeeds. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#60807 (May 20, 2026, open). Web sessions fail GitHub MCP OAuth while desktop and CLI variants succeed. Distinct platform-specific regression affecting paid enterprise users integrating GitHub MCP servers via web interface.

## Common causes

- GitHub issue anthropics/claude-code#60807 (May 20, 2026, open). Web sessions fail GitHub MCP OAuth while desktop and CLI variants succeed. Distinct platform-specific regression affecting paid enterprise users integrating GitHub MCP servers via web interface.

## Quick fixes

1. Confirm the exact error signature matches `GitHub MCP OAuth flow fails specifically in claude.ai/code web sessions — standard Desktop CLI OAuth works but web-hosted sessions cannot complete GitHub authentication`.
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

- https://github.com/anthropics/claude-code/issues/60807

Evidence note: GitHub issue anthropics/claude-code#60807 (May 20, 2026, open). Web sessions fail GitHub MCP OAuth while desktop and CLI variants succeed. Distinct platform-specific regression affecting paid enterprise users integrating GitHub MCP servers via web interface.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `GitHub MCP OAuth flow fails specifically in claude.ai/code web sessions — standard Desktop CLI OAuth works but web-hosted sessions cannot complete GitHub authentication` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `GitHub MCP OAuth flow fails specifically in claude.ai/code web sessions — standard Desktop CLI OAuth works but web-hosted sessions cannot complete GitHub authentication`.
