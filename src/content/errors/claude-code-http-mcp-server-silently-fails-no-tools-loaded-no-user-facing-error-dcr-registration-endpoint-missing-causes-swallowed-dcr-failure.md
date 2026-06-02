---
title: "Claude Code MCP HTTP OAuth Server Silently Fails Without Error Message"
description: "Developer adds an HTTP OAuth MCP server to Claude Code config but tools never load; Claude Code gives zero feedback about the OAuth failure. User wastes hours debugging. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "HTTP MCP server silently fails: no tools loaded, no user-facing error; dcr registration_endpoint missing causes swallowed DCR failure"
common_causes:
  - "GitHub issue #46623 documents this UX bug: Claude Code silently fails when adding HTTP MCP servers that require OAuth but don't support Dynamic Client Registration (DCR). No message shown to user; server appears in config but never loads tools. Especially confusing inside Claude Desktop where debug logs are hidden. Root causes include scope shadowing (local > project > user hierarchy is undocumented). Real impact: enterprise developers relying on MCP-connected tools lose productivity without understanding why. High quality gate: clear error reproduction steps, root cause analysis provided. Category mapping: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T04:44:28.837Z"
updated_at: "2026-06-02T04:44:28.837Z"
---

## What this error means

`HTTP MCP server silently fails: no tools loaded, no user-facing error; dcr registration_endpoint missing causes swallowed DCR failure` is a Claude Code failure pattern reported for developers trying to developer adds an http oauth mcp server to claude code config but tools never load; claude code gives zero feedback about the oauth failure. user wastes hours debugging.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #46623 documents this UX bug: Claude Code silently fails when adding HTTP MCP servers that require OAuth but don't support Dynamic Client Registration (DCR). No message shown to user; server appears in config but never loads tools. Especially confusing inside Claude Desktop where debug logs are hidden. Root causes include scope shadowing (local > project > user hierarchy is undocumented). Real impact: enterprise developers relying on MCP-connected tools lose productivity without understanding why. High quality gate: clear error reproduction steps, root cause analysis provided. Category mapping: AI Coding Tools.

## Common causes

- GitHub issue #46623 documents this UX bug: Claude Code silently fails when adding HTTP MCP servers that require OAuth but don't support Dynamic Client Registration (DCR). No message shown to user; server appears in config but never loads tools. Especially confusing inside Claude Desktop where debug logs are hidden. Root causes include scope shadowing (local > project > user hierarchy is undocumented). Real impact: enterprise developers relying on MCP-connected tools lose productivity without understanding why. High quality gate: clear error reproduction steps, root cause analysis provided. Category mapping: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `HTTP MCP server silently fails: no tools loaded, no user-facing error; dcr registration_endpoint missing causes swallowed DCR failure`.
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

- https://github.com/anthropics/claude-code/issues/46623

Evidence note: GitHub issue #46623 documents this UX bug: Claude Code silently fails when adding HTTP MCP servers that require OAuth but don't support Dynamic Client Registration (DCR). No message shown to user; server appears in config but never loads tools. Especially confusing inside Claude Desktop where debug logs are hidden. Root causes include scope shadowing (local > project > user hierarchy is undocumented). Real impact: enterprise developers relying on MCP-connected tools lose productivity without understanding why. High quality gate: clear error reproduction steps, root cause analysis provided. Category mapping: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `HTTP MCP server silently fails: no tools loaded, no user-facing error; dcr registration_endpoint missing causes swallowed DCR failure` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP MCP server silently fails: no tools loaded, no user-facing error; dcr registration_endpoint missing causes swallowed DCR failure`.
