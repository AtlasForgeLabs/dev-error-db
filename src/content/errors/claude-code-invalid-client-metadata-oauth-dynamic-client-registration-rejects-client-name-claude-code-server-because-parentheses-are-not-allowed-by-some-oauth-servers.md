---
title: "Claude Code MCP OAuth DCR fails — client_name with parentheses rejected as invalid_client_metadata"
description: "Fix Claude Code MCP OAuth registration failure invalid_client_metadata parentheses in client_name Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "invalid_client_metadata — OAuth Dynamic Client Registration rejects client_name \"Claude Code (<server>)\" because parentheses are not allowed by some OAuth servers"
common_causes:
  - "GitHub issue #59445 reports Claude Code's MCP OAuth Dynamic Client Registration fails for Calendly because the hardcoded client_name format \"Claude Code (<server>)\" contains parentheses, which some OAuth servers reject as invalid_client_metadata. Category mapped to AI Coding Tools — MCP auth integration failure in paid Claude Code."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-15"
published_at: "2026-05-15T17:13:23.103Z"
updated_at: "2026-05-15T17:13:23.103Z"
---

## What this error means

`invalid_client_metadata — OAuth Dynamic Client Registration rejects client_name "Claude Code (<server>)" because parentheses are not allowed by some OAuth servers` is a Claude Code failure pattern reported for developers trying to fix claude code mcp oauth registration failure invalid_client_metadata parentheses in client_name. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59445 reports Claude Code's MCP OAuth Dynamic Client Registration fails for Calendly because the hardcoded client_name format "Claude Code (<server>)" contains parentheses, which some OAuth servers reject as invalid_client_metadata. Category mapped to AI Coding Tools — MCP auth integration failure in paid Claude Code.

## Common causes

- GitHub issue #59445 reports Claude Code's MCP OAuth Dynamic Client Registration fails for Calendly because the hardcoded client_name format "Claude Code (<server>)" contains parentheses, which some OAuth servers reject as invalid_client_metadata. Category mapped to AI Coding Tools — MCP auth integration failure in paid Claude Code.

## Quick fixes

1. Confirm the exact error signature matches `invalid_client_metadata — OAuth Dynamic Client Registration rejects client_name "Claude Code (<server>)" because parentheses are not allowed by some OAuth servers`.
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

- https://github.com/anthropics/claude-code/issues/59445

Evidence note: GitHub issue #59445 reports Claude Code's MCP OAuth Dynamic Client Registration fails for Calendly because the hardcoded client_name format "Claude Code (<server>)" contains parentheses, which some OAuth servers reject as invalid_client_metadata. Category mapped to AI Coding Tools — MCP auth integration failure in paid Claude Code.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `invalid_client_metadata — OAuth Dynamic Client Registration rejects client_name "Claude Code (<server>)" because parentheses are not allowed by some OAuth servers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `invalid_client_metadata — OAuth Dynamic Client Registration rejects client_name "Claude Code (<server>)" because parentheses are not allowed by some OAuth servers`.
