---
title: "[BUG] M365 Connector Fails With AADSTS50011 In Cowork — localhost vs 127.0.0.1 Redirect URI Mismatch"
description: "Fix Azure AD OAuth callback URL mismatch between localhost and 127.0.0.1 when connecting Microsoft 365 services to Claude Code Cowork Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "AADSTS50011: The redirect URI in the request from client does not match"
common_causes:
  - "Issue #63030 opened May 28, 2026 on anthropics/claude-code. User reports M365 connector failing during auth flow because redirect URI specified as localhost but actual listener binds to 127.0.0.1, causing AADSTS50011 mismatch. Blocks paid Pro/Max users from integrating Microsoft 365 identity via Claude Code Cowork."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T23:43:24.598Z"
updated_at: "2026-05-28T23:43:24.598Z"
---

## What this error means

`AADSTS50011: The redirect URI in the request from client does not match` is a Claude Code failure pattern reported for developers trying to fix azure ad oauth callback url mismatch between localhost and 127.0.0.1 when connecting microsoft 365 services to claude code cowork. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #63030 opened May 28, 2026 on anthropics/claude-code. User reports M365 connector failing during auth flow because redirect URI specified as localhost but actual listener binds to 127.0.0.1, causing AADSTS50011 mismatch. Blocks paid Pro/Max users from integrating Microsoft 365 identity via Claude Code Cowork.

## Common causes

- Issue #63030 opened May 28, 2026 on anthropics/claude-code. User reports M365 connector failing during auth flow because redirect URI specified as localhost but actual listener binds to 127.0.0.1, causing AADSTS50011 mismatch. Blocks paid Pro/Max users from integrating Microsoft 365 identity via Claude Code Cowork.

## Quick fixes

1. Confirm the exact error signature matches `AADSTS50011: The redirect URI in the request from client does not match`.
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

- https://github.com/anthropics/claude-code/issues/63030

Evidence note: Issue #63030 opened May 28, 2026 on anthropics/claude-code. User reports M365 connector failing during auth flow because redirect URI specified as localhost but actual listener binds to 127.0.0.1, causing AADSTS50011 mismatch. Blocks paid Pro/Max users from integrating Microsoft 365 identity via Claude Code Cowork.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `AADSTS50011: The redirect URI in the request from client does not match` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AADSTS50011: The redirect URI in the request from client does not match`.
