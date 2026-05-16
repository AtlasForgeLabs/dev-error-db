---
title: "MCP Servers Fail to Connect in Claude Code Despite Correct Configuration — Capabilities Not Found"
description: "Developer has configured .mcp.json for Claude Code but MCP server loads with zero capabilities and no tools appear in the editor Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP server sees no capabilities / external MCP servers not loading in Claude Code"
common_causes:
  - "GitHub Issue #1611 on anthropics/claude-code repo documents this exact scenario where MCP servers register but show no capabilities. Separate troubleshooting guide (boostdevspeed.com) confirms 97% of MCP connection failures stem from capability discovery misconfiguration. Category: AI Coding Tools per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T18:13:50.912Z"
updated_at: "2026-05-16T18:13:50.912Z"
---

## What this error means

`MCP server sees no capabilities / external MCP servers not loading in Claude Code` is a Claude Code failure pattern reported for developers trying to developer has configured .mcp.json for claude code but mcp server loads with zero capabilities and no tools appear in the editor. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #1611 on anthropics/claude-code repo documents this exact scenario where MCP servers register but show no capabilities. Separate troubleshooting guide (boostdevspeed.com) confirms 97% of MCP connection failures stem from capability discovery misconfiguration. Category: AI Coding Tools per mapping rules.

## Common causes

- GitHub Issue #1611 on anthropics/claude-code repo documents this exact scenario where MCP servers register but show no capabilities. Separate troubleshooting guide (boostdevspeed.com) confirms 97% of MCP connection failures stem from capability discovery misconfiguration. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `MCP server sees no capabilities / external MCP servers not loading in Claude Code`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/anthropics/claude-code/issues/1611
- https://code.claude.com/docs/en/mcp
- https://boostdevspeed.com/blog/mcp-servers-not-connecting-claude-complete-troubleshooting-guide

Evidence note: GitHub Issue #1611 on anthropics/claude-code repo documents this exact scenario where MCP servers register but show no capabilities. Separate troubleshooting guide (boostdevspeed.com) confirms 97% of MCP connection failures stem from capability discovery misconfiguration. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP server sees no capabilities / external MCP servers not loading in Claude Code` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP server sees no capabilities / external MCP servers not loading in Claude Code`.
