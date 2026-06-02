---
title: "Claude Code CLI MCP ConnectionRefused Error Despite Successful curl Test (macOS)"
description: "Developer using Claude Code on macOS cannot connect to HTTP/SSE MCP servers; curl and VS Code extension work fine but CLI binary compiled with Bun fails at TCP level Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "FailedToOpenSocket / ConnectionRefused — MCP server fails to connect via TCP despite curl returning HTTP 200 with valid MCP initialize response"
common_causes:
  - "GitHub Issue #34982 reports root cause: CLI binary compiled with Bun bundles its own HTTP/socket implementation separate from Node.js. Bun networking stack produces FailedToOpenSocket / ConnectionRefused while identical code runs on Node.js (VS Code extension host). Category: AI Coding Tools per mapping table."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T23:44:31.150Z"
updated_at: "2026-06-02T23:44:31.150Z"
---

## What this error means

`FailedToOpenSocket / ConnectionRefused — MCP server fails to connect via TCP despite curl returning HTTP 200 with valid MCP initialize response` is a Claude Code failure pattern reported for developers trying to developer using claude code on macos cannot connect to http/sse mcp servers; curl and vs code extension work fine but cli binary compiled with bun fails at tcp level. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #34982 reports root cause: CLI binary compiled with Bun bundles its own HTTP/socket implementation separate from Node.js. Bun networking stack produces FailedToOpenSocket / ConnectionRefused while identical code runs on Node.js (VS Code extension host). Category: AI Coding Tools per mapping table.

## Common causes

- GitHub Issue #34982 reports root cause: CLI binary compiled with Bun bundles its own HTTP/socket implementation separate from Node.js. Bun networking stack produces FailedToOpenSocket / ConnectionRefused while identical code runs on Node.js (VS Code extension host). Category: AI Coding Tools per mapping table.

## Quick fixes

1. Confirm the exact error signature matches `FailedToOpenSocket / ConnectionRefused — MCP server fails to connect via TCP despite curl returning HTTP 200 with valid MCP initialize response`.
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

- https://github.com/anthropics/claude-code/issues/34982

Evidence note: GitHub Issue #34982 reports root cause: CLI binary compiled with Bun bundles its own HTTP/socket implementation separate from Node.js. Bun networking stack produces FailedToOpenSocket / ConnectionRefused while identical code runs on Node.js (VS Code extension host). Category: AI Coding Tools per mapping table.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `FailedToOpenSocket / ConnectionRefused — MCP server fails to connect via TCP despite curl returning HTTP 200 with valid MCP initialize response` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `FailedToOpenSocket / ConnectionRefused — MCP server fails to connect via TCP despite curl returning HTTP 200 with valid MCP initialize response`.
