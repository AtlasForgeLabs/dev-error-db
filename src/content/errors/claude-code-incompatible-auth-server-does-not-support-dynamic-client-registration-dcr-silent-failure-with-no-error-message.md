---
title: "HTTP OAuth MCP Servers Silently Fail When Lacking Dynamic Client Registration Support"
description: "Fix silent failure when adding HTTP OAuth MCP servers that don't support DCR; Claude Code gives no error, tools never load into session. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Incompatible auth server: does not support dynamic client registration (DCR); silent failure with no error message"
common_causes:
  - "Issue #46623 (2026-04-11): 'When adding an HTTP MCP server that requires OAuth but doesn't support Dynamic Client Registration (DCR), Claude Code silently fails with no error message.' Supported by issue #44535 (2026-04-06) showing 'needs authentication' stuck state with empty error. Issue #283 (2026-01-25) in claude-plugins-official: 'Incompatible auth server: does not support dynamic client registration'. Category: AI Coding Tools (approved) — MCP OAuth auth failures. Critical because 'silent failure' means developers can't diagnose the problem at all."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T06:39:46.896Z"
updated_at: "2026-05-22T06:39:46.896Z"
---

## What this error means

`Incompatible auth server: does not support dynamic client registration (DCR); silent failure with no error message` is a Claude Code failure pattern reported for developers trying to fix silent failure when adding http oauth mcp servers that don't support dcr; claude code gives no error, tools never load into session.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #46623 (2026-04-11): 'When adding an HTTP MCP server that requires OAuth but doesn't support Dynamic Client Registration (DCR), Claude Code silently fails with no error message.' Supported by issue #44535 (2026-04-06) showing 'needs authentication' stuck state with empty error. Issue #283 (2026-01-25) in claude-plugins-official: 'Incompatible auth server: does not support dynamic client registration'. Category: AI Coding Tools (approved) — MCP OAuth auth failures. Critical because 'silent failure' means developers can't diagnose the problem at all.

## Common causes

- Issue #46623 (2026-04-11): 'When adding an HTTP MCP server that requires OAuth but doesn't support Dynamic Client Registration (DCR), Claude Code silently fails with no error message.' Supported by issue #44535 (2026-04-06) showing 'needs authentication' stuck state with empty error. Issue #283 (2026-01-25) in claude-plugins-official: 'Incompatible auth server: does not support dynamic client registration'. Category: AI Coding Tools (approved) — MCP OAuth auth failures. Critical because 'silent failure' means developers can't diagnose the problem at all.

## Quick fixes

1. Confirm the exact error signature matches `Incompatible auth server: does not support dynamic client registration (DCR); silent failure with no error message`.
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

- https://github.com/anthropics/claude-code/issues/46623
- https://github.com/anthropics/claude-code/issues/44535
- https://github.com/anthropics/claude-plugins-official/issues/283

Evidence note: Issue #46623 (2026-04-11): 'When adding an HTTP MCP server that requires OAuth but doesn't support Dynamic Client Registration (DCR), Claude Code silently fails with no error message.' Supported by issue #44535 (2026-04-06) showing 'needs authentication' stuck state with empty error. Issue #283 (2026-01-25) in claude-plugins-official: 'Incompatible auth server: does not support dynamic client registration'. Category: AI Coding Tools (approved) — MCP OAuth auth failures. Critical because 'silent failure' means developers can't diagnose the problem at all.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Incompatible auth server: does not support dynamic client registration (DCR); silent failure with no error message` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Incompatible auth server: does not support dynamic client registration (DCR); silent failure with no error message`.
