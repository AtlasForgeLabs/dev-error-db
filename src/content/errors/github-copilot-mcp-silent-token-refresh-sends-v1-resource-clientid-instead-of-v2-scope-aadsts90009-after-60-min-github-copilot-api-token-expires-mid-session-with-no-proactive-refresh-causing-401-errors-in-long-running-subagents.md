---
title: "OpenRouter Auth Token Expires Mid-Session — AADSTS90009 After ~60 Min Silent Refresh"
description: "Developers using GitHub Copilot CLI via MCP sessions experience silent OAuth token expiration after ~60 minutes. The silent refresh sends outdated OAuth v1 resource format instead of v2 scope format, causing Azure AD rejection (AADSTS90009). Long-running coding sessions die unexpectedly without re-auth flow. Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "MCP silent token refresh sends v1 resource=<clientId> instead of v2 scope= → AADSTS90009 after ~60 min / GitHub Copilot API token expires mid-session with no proactive refresh, causing 401 errors in long-running subagents"
common_causes:
  - "Three distinct but related GitHub issues: copilot-cli#3583 (AADSTS90009 after ~60min silent refresh v1 vs v2 format), openclaw/openclaw#31132 (Copilot API token expires mid-session with no proactive refresh, 401 errors in long-running subagents), copilot-sdk#867 (authentication error on Debian Bookworm but same setup works on Windows). The v1→v2 OAuth transition is causing production-reliability issues for teams using Copilot CLI in CI/coding agents. Category: GitHub Copilot (Copilot-specific)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "GitHub Copilot"
updated: "2026-06-10"
published_at: "2026-06-10T15:36:12.067Z"
updated_at: "2026-06-10T15:36:12.067Z"
---

## What this error means

`MCP silent token refresh sends v1 resource=<clientId> instead of v2 scope= → AADSTS90009 after ~60 min / GitHub Copilot API token expires mid-session with no proactive refresh, causing 401 errors in long-running subagents` is a GitHub Copilot failure pattern reported for developers trying to developers using github copilot cli via mcp sessions experience silent oauth token expiration after ~60 minutes. the silent refresh sends outdated oauth v1 resource format instead of v2 scope format, causing azure ad rejection (aadsts90009). long-running coding sessions die unexpectedly without re-auth flow.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Three distinct but related GitHub issues: copilot-cli#3583 (AADSTS90009 after ~60min silent refresh v1 vs v2 format), openclaw/openclaw#31132 (Copilot API token expires mid-session with no proactive refresh, 401 errors in long-running subagents), copilot-sdk#867 (authentication error on Debian Bookworm but same setup works on Windows). The v1→v2 OAuth transition is causing production-reliability issues for teams using Copilot CLI in CI/coding agents. Category: GitHub Copilot (Copilot-specific).

## Common causes

- Three distinct but related GitHub issues: copilot-cli#3583 (AADSTS90009 after ~60min silent refresh v1 vs v2 format), openclaw/openclaw#31132 (Copilot API token expires mid-session with no proactive refresh, 401 errors in long-running subagents), copilot-sdk#867 (authentication error on Debian Bookworm but same setup works on Windows). The v1→v2 OAuth transition is causing production-reliability issues for teams using Copilot CLI in CI/coding agents. Category: GitHub Copilot (Copilot-specific).

## Quick fixes

1. Confirm the exact error signature matches `MCP silent token refresh sends v1 resource=<clientId> instead of v2 scope= → AADSTS90009 after ~60 min / GitHub Copilot API token expires mid-session with no proactive refresh, causing 401 errors in long-running subagents`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/3583
- https://github.com/openclaw/openclaw/issues/31132
- https://github.com/github/copilot-sdk/issues/867

Evidence note: Three distinct but related GitHub issues: copilot-cli#3583 (AADSTS90009 after ~60min silent refresh v1 vs v2 format), openclaw/openclaw#31132 (Copilot API token expires mid-session with no proactive refresh, 401 errors in long-running subagents), copilot-sdk#867 (authentication error on Debian Bookworm but same setup works on Windows). The v1→v2 OAuth transition is causing production-reliability issues for teams using Copilot CLI in CI/coding agents. Category: GitHub Copilot (Copilot-specific).

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `MCP silent token refresh sends v1 resource=<clientId> instead of v2 scope= → AADSTS90009 after ~60 min / GitHub Copilot API token expires mid-session with no proactive refresh, causing 401 errors in long-running subagents` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP silent token refresh sends v1 resource=<clientId> instead of v2 scope= → AADSTS90009 after ~60 min / GitHub Copilot API token expires mid-session with no proactive refresh, causing 401 errors in long-running subagents`.
