---
title: "MCP auth validation fails: google tokeninfo returns exp as JSON string, not int64"
description: "Fix Claude Code / claude.ai OAuth authentication failure when using Google as IdP via MCP Toolbox Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "failed to parse introspection response: json: cannot unmarshal string into Go struct field .exp of type int64"
common_causes:
  - "Issue #3240 in googleapis/mcp-toolbox (opened 2026-05-15): MCP auth with Google OIDC provider blocks all requests. Google oauth2/v3/tokeninfo returns numeric fields as quoted strings (exp, expires_in) but the Go struct declares Exp as int64 causing unmarshal panic → HTTP 500. Blocks end-to-end MCP OAuth flow documented in official docs. Category: AI Coding Tools because this directly affects Claude Code MCP connectivity — the primary user-facing symptom is Claude Code failing to authenticate."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T15:36:46.328Z"
updated_at: "2026-05-17T15:36:46.328Z"
---

## What this error means

`failed to parse introspection response: json: cannot unmarshal string into Go struct field .exp of type int64` is a Claude Code failure pattern reported for developers trying to fix claude code / claude.ai oauth authentication failure when using google as idp via mcp toolbox. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3240 in googleapis/mcp-toolbox (opened 2026-05-15): MCP auth with Google OIDC provider blocks all requests. Google oauth2/v3/tokeninfo returns numeric fields as quoted strings (exp, expires_in) but the Go struct declares Exp as int64 causing unmarshal panic → HTTP 500. Blocks end-to-end MCP OAuth flow documented in official docs. Category: AI Coding Tools because this directly affects Claude Code MCP connectivity — the primary user-facing symptom is Claude Code failing to authenticate.

## Common causes

- Issue #3240 in googleapis/mcp-toolbox (opened 2026-05-15): MCP auth with Google OIDC provider blocks all requests. Google oauth2/v3/tokeninfo returns numeric fields as quoted strings (exp, expires_in) but the Go struct declares Exp as int64 causing unmarshal panic → HTTP 500. Blocks end-to-end MCP OAuth flow documented in official docs. Category: AI Coding Tools because this directly affects Claude Code MCP connectivity — the primary user-facing symptom is Claude Code failing to authenticate.

## Quick fixes

1. Confirm the exact error signature matches `failed to parse introspection response: json: cannot unmarshal string into Go struct field .exp of type int64`.
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

- https://github.com/googleapis/mcp-toolbox/issues/3240

Evidence note: Issue #3240 in googleapis/mcp-toolbox (opened 2026-05-15): MCP auth with Google OIDC provider blocks all requests. Google oauth2/v3/tokeninfo returns numeric fields as quoted strings (exp, expires_in) but the Go struct declares Exp as int64 causing unmarshal panic → HTTP 500. Blocks end-to-end MCP OAuth flow documented in official docs. Category: AI Coding Tools because this directly affects Claude Code MCP connectivity — the primary user-facing symptom is Claude Code failing to authenticate.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `failed to parse introspection response: json: cannot unmarshal string into Go struct field .exp of type int64` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `failed to parse introspection response: json: cannot unmarshal string into Go struct field .exp of type int64`.
