---
title: "Anthropic API 400: input_schema does not support oneOf, allOf, or anyOf at the top level"
description: "Fix Anthropic API 400 rejection when MCP server tool schemas use top-level oneOf/anyOf in JSON Schema Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "API Error: 400 tools.11.custom.input_schema: input_schema does not support oneOf, allOf, or anyOf at the top level"
common_causes:
  - "MCP server with Zod discriminatedUnion generates JSON Schema with root oneOf, which Anthropic API rejects with 400. Affects all Claude Code sessions using the MCP server. Category mapped to Anthropic API because the error originates from the Anthropic API validation layer."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-16"
published_at: "2026-05-16T04:13:24.517Z"
updated_at: "2026-05-16T04:13:24.517Z"
---

## What this error means

`API Error: 400 tools.11.custom.input_schema: input_schema does not support oneOf, allOf, or anyOf at the top level` is a Anthropic API failure pattern reported for developers trying to fix anthropic api 400 rejection when mcp server tool schemas use top-level oneof/anyof in json schema. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

MCP server with Zod discriminatedUnion generates JSON Schema with root oneOf, which Anthropic API rejects with 400. Affects all Claude Code sessions using the MCP server. Category mapped to Anthropic API because the error originates from the Anthropic API validation layer.

## Common causes

- MCP server with Zod discriminatedUnion generates JSON Schema with root oneOf, which Anthropic API rejects with 400. Affects all Claude Code sessions using the MCP server. Category mapped to Anthropic API because the error originates from the Anthropic API validation layer.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 tools.11.custom.input_schema: input_schema does not support oneOf, allOf, or anyOf at the top level`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/sudopark/TodoCalendar-mcp/issues/41

Evidence note: MCP server with Zod discriminatedUnion generates JSON Schema with root oneOf, which Anthropic API rejects with 400. Affects all Claude Code sessions using the MCP server. Category mapped to Anthropic API because the error originates from the Anthropic API validation layer.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `API Error: 400 tools.11.custom.input_schema: input_schema does not support oneOf, allOf, or anyOf at the top level` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 tools.11.custom.input_schema: input_schema does not support oneOf, allOf, or anyOf at the top level`.
