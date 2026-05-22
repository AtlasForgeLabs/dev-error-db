---
title: "[BUG] HTTP MCP OAuth tokens written to macOS Keychain but not loaded at session start — re-auth required every session"
description: "Fix Claude Code requiring manual MCP server re-authentication after every session restart, even when OAuth tokens are confirmed present in macOS Keychain Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "! Needs authentication — MCP OAuth token saved in Keychain (Codex MCP Credentials) but not read at startup; runtime stamps mcp-needs-auth-cache.json despite valid keychain entry"
common_causes:
  - "Found in anthropics/claude-code#57674 (open, created 2026-05-09). Detailed Keychain-level evidence proves tokens ARE persisted but NOT restored at session launch. Affects all HTTP MCP servers using Codex MCP Credentials service. High commercial value — breaks paid Claude Code Pro/Max workflows daily. Category maps to AI Coding Tools per SKILL rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T11:39:47.504Z"
updated_at: "2026-05-22T11:39:47.504Z"
---

## What this error means

`! Needs authentication — MCP OAuth token saved in Keychain (Codex MCP Credentials) but not read at startup; runtime stamps mcp-needs-auth-cache.json despite valid keychain entry` is a Claude Code failure pattern reported for developers trying to fix claude code requiring manual mcp server re-authentication after every session restart, even when oauth tokens are confirmed present in macos keychain. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in anthropics/claude-code#57674 (open, created 2026-05-09). Detailed Keychain-level evidence proves tokens ARE persisted but NOT restored at session launch. Affects all HTTP MCP servers using Codex MCP Credentials service. High commercial value — breaks paid Claude Code Pro/Max workflows daily. Category maps to AI Coding Tools per SKILL rules.

## Common causes

- Found in anthropics/claude-code#57674 (open, created 2026-05-09). Detailed Keychain-level evidence proves tokens ARE persisted but NOT restored at session launch. Affects all HTTP MCP servers using Codex MCP Credentials service. High commercial value — breaks paid Claude Code Pro/Max workflows daily. Category maps to AI Coding Tools per SKILL rules.

## Quick fixes

1. Confirm the exact error signature matches `! Needs authentication — MCP OAuth token saved in Keychain (Codex MCP Credentials) but not read at startup; runtime stamps mcp-needs-auth-cache.json despite valid keychain entry`.
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

- https://github.com/anthropics/claude-code/issues/57674

Evidence note: Found in anthropics/claude-code#57674 (open, created 2026-05-09). Detailed Keychain-level evidence proves tokens ARE persisted but NOT restored at session launch. Affects all HTTP MCP servers using Codex MCP Credentials service. High commercial value — breaks paid Claude Code Pro/Max workflows daily. Category maps to AI Coding Tools per SKILL rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `! Needs authentication — MCP OAuth token saved in Keychain (Codex MCP Credentials) but not read at startup; runtime stamps mcp-needs-auth-cache.json despite valid keychain entry` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `! Needs authentication — MCP OAuth token saved in Keychain (Codex MCP Credentials) but not read at startup; runtime stamps mcp-needs-auth-cache.json despite valid keychain entry`.
