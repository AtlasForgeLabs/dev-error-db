---
title: "Cursor Error Connecting to StreamableHttp MCP Server — Icon Sizes Field Validation Failure"
description: "Fix Cursor MCP streamableHttp connection error with icon sizes field Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Cursor error connecting to streamableHttp MCP server — sizes field validation"
common_causes:
  - "Cursor fails to connect to streamableHttp MCP servers due to icon configuration containing unexpected 'sizes' field, causing validation errors in the MCP client"
  - "Cursor MCP client rejects server responses containing 'sizes' field in icon configuration. Home Assistant MCP integration affected. Workaround pending since January 2026."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor MCP server error No server info found"
  - "MCP protocol validation errors"
updated: "2026-05-15"
published_at: "2026-05-15T10:13:22.352Z"
updated_at: "2026-05-15T10:13:22.352Z"
---

## What this error means

`Cursor error connecting to streamableHttp MCP server — sizes field validation` is a Cursor failure pattern reported for developers trying to fix cursor mcp streamablehttp connection error with icon sizes field. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor MCP client rejects server responses containing 'sizes' field in icon configuration. Home Assistant MCP integration affected. Workaround pending since January 2026.

## Common causes

- Cursor fails to connect to streamableHttp MCP servers due to icon configuration containing unexpected 'sizes' field, causing validation errors in the MCP client
- Cursor MCP client rejects server responses containing 'sizes' field in icon configuration. Home Assistant MCP integration affected. Workaround pending since January 2026.

## Quick fixes

1. Confirm the exact error signature matches `Cursor error connecting to streamableHttp MCP server — sizes field validation`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/homeassistant-ai/ha-mcp/issues/375

Evidence note: Cursor MCP client rejects server responses containing 'sizes' field in icon configuration. Home Assistant MCP integration affected. Workaround pending since January 2026.

## Related errors

- Cursor MCP server error No server info found
- MCP protocol validation errors

## FAQ

### What should I check first?

Start with the exact `Cursor error connecting to streamableHttp MCP server — sizes field validation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cursor error connecting to streamableHttp MCP server — sizes field validation`.
