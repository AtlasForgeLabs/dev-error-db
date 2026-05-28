---
title: "Claude Desktop Doesn't Connect to Custom MCPs With OAuth 2.1 Authentication"
description: "Troubleshoot custom MCP server connections failing in Claude Desktop when using OAuth 2.1 authentication Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Desktop doesn't connect to Custom MCPs altogether — deployed MCP with OAuth 2.1 works fine with Claude Code but fails with Claude Desktop"
common_causes:
  - "Source: GitHub issue #5826 on anthropics/claude-code. Company-deployed OAuth 2.1 MCP server works with Claude Code CLI but fails entirely in Claude Desktop. Distinct from issue #10250 (#10250 is reconnection post-auth; #5826 is initial connection failure). Valid separate error signature."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T20:43:24.148Z"
updated_at: "2026-05-28T20:43:24.148Z"
---

## What this error means

`Claude Desktop doesn't connect to Custom MCPs altogether — deployed MCP with OAuth 2.1 works fine with Claude Code but fails with Claude Desktop` is a Claude Code failure pattern reported for developers trying to troubleshoot custom mcp server connections failing in claude desktop when using oauth 2.1 authentication. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: GitHub issue #5826 on anthropics/claude-code. Company-deployed OAuth 2.1 MCP server works with Claude Code CLI but fails entirely in Claude Desktop. Distinct from issue #10250 (#10250 is reconnection post-auth; #5826 is initial connection failure). Valid separate error signature.

## Common causes

- Source: GitHub issue #5826 on anthropics/claude-code. Company-deployed OAuth 2.1 MCP server works with Claude Code CLI but fails entirely in Claude Desktop. Distinct from issue #10250 (#10250 is reconnection post-auth; #5826 is initial connection failure). Valid separate error signature.

## Quick fixes

1. Confirm the exact error signature matches `Claude Desktop doesn't connect to Custom MCPs altogether — deployed MCP with OAuth 2.1 works fine with Claude Code but fails with Claude Desktop`.
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

- https://github.com/anthropics/claude-code/issues/5826

Evidence note: Source: GitHub issue #5826 on anthropics/claude-code. Company-deployed OAuth 2.1 MCP server works with Claude Code CLI but fails entirely in Claude Desktop. Distinct from issue #10250 (#10250 is reconnection post-auth; #5826 is initial connection failure). Valid separate error signature.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Desktop doesn't connect to Custom MCPs altogether — deployed MCP with OAuth 2.1 works fine with Claude Code but fails with Claude Desktop` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Desktop doesn't connect to Custom MCPs altogether — deployed MCP with OAuth 2.1 works fine with Claude Code but fails with Claude Desktop`.
