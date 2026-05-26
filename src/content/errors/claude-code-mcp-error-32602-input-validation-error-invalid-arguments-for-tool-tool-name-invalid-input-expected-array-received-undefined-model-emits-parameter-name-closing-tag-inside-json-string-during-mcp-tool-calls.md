---
title: "Claude Code Opus 4.7 leaks legacy XML tool-use format into JSON tool calls on longer payloads"
description: "Fix Claude Code Opus 4.7 regression where longer tool call arguments trigger decoder-level XML format switch causing MCP validation failures and repeated retries Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP error -32602: Input validation error: Invalid arguments for tool <tool_name>: Invalid input: expected array, received undefined — model emits </parameter_name> closing tag inside JSON string during MCP tool calls"
common_causes:
  - "GitHub anthropics/claude-code#49747 — detailed reproduction with z.schema MCP tool definition. Regression from Opus 4.6. Each retry burns ~1k tokens. Decoder-level format switch not overridable via system prompt. Directly impacts paid Claude Code users running custom MCP tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T05:43:16.009Z"
updated_at: "2026-05-26T05:43:16.009Z"
---

## What this error means

`MCP error -32602: Input validation error: Invalid arguments for tool <tool_name>: Invalid input: expected array, received undefined — model emits </parameter_name> closing tag inside JSON string during MCP tool calls` is a Claude Code failure pattern reported for developers trying to fix claude code opus 4.7 regression where longer tool call arguments trigger decoder-level xml format switch causing mcp validation failures and repeated retries. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code#49747 — detailed reproduction with z.schema MCP tool definition. Regression from Opus 4.6. Each retry burns ~1k tokens. Decoder-level format switch not overridable via system prompt. Directly impacts paid Claude Code users running custom MCP tools.

## Common causes

- GitHub anthropics/claude-code#49747 — detailed reproduction with z.schema MCP tool definition. Regression from Opus 4.6. Each retry burns ~1k tokens. Decoder-level format switch not overridable via system prompt. Directly impacts paid Claude Code users running custom MCP tools.

## Quick fixes

1. Confirm the exact error signature matches `MCP error -32602: Input validation error: Invalid arguments for tool <tool_name>: Invalid input: expected array, received undefined — model emits </parameter_name> closing tag inside JSON string during MCP tool calls`.
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

- https://github.com/anthropics/claude-code/issues/49747

Evidence note: GitHub anthropics/claude-code#49747 — detailed reproduction with z.schema MCP tool definition. Regression from Opus 4.6. Each retry burns ~1k tokens. Decoder-level format switch not overridable via system prompt. Directly impacts paid Claude Code users running custom MCP tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP error -32602: Input validation error: Invalid arguments for tool <tool_name>: Invalid input: expected array, received undefined — model emits </parameter_name> closing tag inside JSON string during MCP tool calls` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP error -32602: Input validation error: Invalid arguments for tool <tool_name>: Invalid input: expected array, received undefined — model emits </parameter_name> closing tag inside JSON string during MCP tool calls`.
