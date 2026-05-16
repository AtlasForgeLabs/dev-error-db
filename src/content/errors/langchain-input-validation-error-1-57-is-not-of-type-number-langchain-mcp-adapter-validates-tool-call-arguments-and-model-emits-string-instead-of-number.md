---
title: "LangChain MCP Adapter Input Validation Error: String Instead of Number"
description: "Fix LangChain MCP adapter validation error where model outputs numeric values as strings causing JSON Schema validation failure Includes evidence for LangChain troubleshooting demand."
category: "AI Coding Tools"
technology: "LangChain"
error_signature: "Input validation error: '1.57' is not of type 'number' — langchain_mcp_adapter validates tool call arguments and model emits string instead of number"
common_causes:
  - "Stack Overflow Q79935672: LangChain MCP adapter rejects tool call args because LLM emits \"1.57\" (string) instead of 1.57 (number). Validation happens before MCP server call. Category: AI Coding Tools per LangChain → AI Coding Tools mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T12:13:25.497Z"
updated_at: "2026-05-16T12:13:25.497Z"
---

## What this error means

`Input validation error: '1.57' is not of type 'number' — langchain_mcp_adapter validates tool call arguments and model emits string instead of number` is a LangChain failure pattern reported for developers trying to fix langchain mcp adapter validation error where model outputs numeric values as strings causing json schema validation failure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79935672: LangChain MCP adapter rejects tool call args because LLM emits "1.57" (string) instead of 1.57 (number). Validation happens before MCP server call. Category: AI Coding Tools per LangChain → AI Coding Tools mapping.

## Common causes

- Stack Overflow Q79935672: LangChain MCP adapter rejects tool call args because LLM emits "1.57" (string) instead of 1.57 (number). Validation happens before MCP server call. Category: AI Coding Tools per LangChain → AI Coding Tools mapping.

## Quick fixes

1. Confirm the exact error signature matches `Input validation error: '1.57' is not of type 'number' — langchain_mcp_adapter validates tool call arguments and model emits string instead of number`.
2. Check the LangChain account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/q/79935672

Evidence note: Stack Overflow Q79935672: LangChain MCP adapter rejects tool call args because LLM emits "1.57" (string) instead of 1.57 (number). Validation happens before MCP server call. Category: AI Coding Tools per LangChain → AI Coding Tools mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Input validation error: '1.57' is not of type 'number' — langchain_mcp_adapter validates tool call arguments and model emits string instead of number` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LangChain workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Input validation error: '1.57' is not of type 'number' — langchain_mcp_adapter validates tool call arguments and model emits string instead of number`.
