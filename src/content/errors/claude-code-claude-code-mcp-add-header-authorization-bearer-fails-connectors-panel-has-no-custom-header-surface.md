---
title: "Claude Code Cannot Connect to Custom MCP Servers Requiring Authorization Headers"
description: "Adding MCP servers that require custom Authorization headers (Bearer tokens, API keys) via Claude Code cli — current workaround claude mcp add --header is inaccessible through Connectors UI and .mcp.json may be overwritten on updates Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code MCP add --header Authorization Bearer fails; Connectors panel has no custom-header surface"
common_causes:
  - "GitHub issue #3273 on anthropics/claude-code repo documents a gap: CLI workaround 'claude mcp add --header \"Authorization: Bearer ...\"' is not reachable through the Connectors panel, and the plugin's .mcp.json lives at an app-managed path that may be overwritten on updates. This affects developers connecting Claude Code to authenticated internal systems. Category mapping: Claude Code → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T13:43:17.084Z"
updated_at: "2026-05-26T13:43:17.084Z"
---

## What this error means

`Claude Code MCP add --header Authorization Bearer fails; Connectors panel has no custom-header surface` is a Claude Code failure pattern reported for developers trying to adding mcp servers that require custom authorization headers (bearer tokens, api keys) via claude code cli — current workaround claude mcp add --header is inaccessible through connectors ui and .mcp.json may be overwritten on updates. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #3273 on anthropics/claude-code repo documents a gap: CLI workaround 'claude mcp add --header "Authorization: Bearer ..."' is not reachable through the Connectors panel, and the plugin's .mcp.json lives at an app-managed path that may be overwritten on updates. This affects developers connecting Claude Code to authenticated internal systems. Category mapping: Claude Code → AI Coding Tools.

## Common causes

- GitHub issue #3273 on anthropics/claude-code repo documents a gap: CLI workaround 'claude mcp add --header "Authorization: Bearer ..."' is not reachable through the Connectors panel, and the plugin's .mcp.json lives at an app-managed path that may be overwritten on updates. This affects developers connecting Claude Code to authenticated internal systems. Category mapping: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code MCP add --header Authorization Bearer fails; Connectors panel has no custom-header surface`.
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

- https://github.com/anthropics/claude-code/issues/3273
- https://www.truefoundry.com/blog/mcp-authentication-in-claude-code

Evidence note: GitHub issue #3273 on anthropics/claude-code repo documents a gap: CLI workaround 'claude mcp add --header "Authorization: Bearer ..."' is not reachable through the Connectors panel, and the plugin's .mcp.json lives at an app-managed path that may be overwritten on updates. This affects developers connecting Claude Code to authenticated internal systems. Category mapping: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code MCP add --header Authorization Bearer fails; Connectors panel has no custom-header surface` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code MCP add --header Authorization Bearer fails; Connectors panel has no custom-header surface`.
