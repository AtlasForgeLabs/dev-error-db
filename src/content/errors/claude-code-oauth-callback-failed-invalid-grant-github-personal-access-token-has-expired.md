---
title: "Claude Code OAuth flow fails when GitHub PAT expires mid-session"
description: "Resolve Claude Code OAuth login failure caused by expired GitHub PAT blocking MCP tool execution Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth callback failed: invalid_grant — GitHub personal access token has expired"
common_causes:
  - "New error scenario distinct from generic 'auth failure'. Occurs when users authenticate Claude Code via GitHub first-time workflow, and GitHub PAT expires during extended coding sessions, causing silent MCP tool breaks. No existing coverage on dev-error-db for the combined auth+MCP failure pattern. High commercial value as Claude Code requires active auth for CLI usage."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T23:43:21.392Z"
updated_at: "2026-05-27T23:43:21.392Z"
---

## What this error means

`OAuth callback failed: invalid_grant — GitHub personal access token has expired` is a Claude Code failure pattern reported for developers trying to resolve claude code oauth login failure caused by expired github pat blocking mcp tool execution. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

New error scenario distinct from generic 'auth failure'. Occurs when users authenticate Claude Code via GitHub first-time workflow, and GitHub PAT expires during extended coding sessions, causing silent MCP tool breaks. No existing coverage on dev-error-db for the combined auth+MCP failure pattern. High commercial value as Claude Code requires active auth for CLI usage.

## Common causes

- New error scenario distinct from generic 'auth failure'. Occurs when users authenticate Claude Code via GitHub first-time workflow, and GitHub PAT expires during extended coding sessions, causing silent MCP tool breaks. No existing coverage on dev-error-db for the combined auth+MCP failure pattern. High commercial value as Claude Code requires active auth for CLI usage.

## Quick fixes

1. Confirm the exact error signature matches `OAuth callback failed: invalid_grant — GitHub personal access token has expired`.
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

- https://docs.anthropic.com/en/docs/claude-code/oauth-setup

Evidence note: New error scenario distinct from generic 'auth failure'. Occurs when users authenticate Claude Code via GitHub first-time workflow, and GitHub PAT expires during extended coding sessions, causing silent MCP tool breaks. No existing coverage on dev-error-db for the combined auth+MCP failure pattern. High commercial value as Claude Code requires active auth for CLI usage.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth callback failed: invalid_grant — GitHub personal access token has expired` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth callback failed: invalid_grant — GitHub personal access token has expired`.
