---
title: "Claude Code AWS Bedrock Auth Refresh broken after v0.92"
description: "Fix Claude Code AWS Bedrock authentication refresh mechanism broken in recent versions; restore automatic session token refresh for enterprise Bedrock users Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] Aws Auth Refresh broken on versions >0.92 — user must manually click auth link every session instead of automatic refresh; regression introduced in 0.93+"
common_causes:
  - "GitHub Issue #52978 in anthropics/claude-code (opened Apr 25 2026, noopys). Regression bug breaking AWS Bedrock auth flow — automatic token refresh stopped working in v0.93+. Users forced into manual browser auth each session. Tagged api:bedrock + area:auth + regression + stale. Affects enterprise AWS users. Category mapping: AI Coding Tools (AWS auth regression on paid Claude Code product)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T17:37:16.979Z"
updated_at: "2026-05-19T17:37:16.979Z"
---

## What this error means

`[BUG] Aws Auth Refresh broken on versions >0.92 — user must manually click auth link every session instead of automatic refresh; regression introduced in 0.93+` is a Claude Code failure pattern reported for developers trying to fix claude code aws bedrock authentication refresh mechanism broken in recent versions; restore automatic session token refresh for enterprise bedrock users. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #52978 in anthropics/claude-code (opened Apr 25 2026, noopys). Regression bug breaking AWS Bedrock auth flow — automatic token refresh stopped working in v0.93+. Users forced into manual browser auth each session. Tagged api:bedrock + area:auth + regression + stale. Affects enterprise AWS users. Category mapping: AI Coding Tools (AWS auth regression on paid Claude Code product).

## Common causes

- GitHub Issue #52978 in anthropics/claude-code (opened Apr 25 2026, noopys). Regression bug breaking AWS Bedrock auth flow — automatic token refresh stopped working in v0.93+. Users forced into manual browser auth each session. Tagged api:bedrock + area:auth + regression + stale. Affects enterprise AWS users. Category mapping: AI Coding Tools (AWS auth regression on paid Claude Code product).

## Quick fixes

1. Confirm the exact error signature matches `[BUG] Aws Auth Refresh broken on versions >0.92 — user must manually click auth link every session instead of automatic refresh; regression introduced in 0.93+`.
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

- https://github.com/anthropics/claude-code/issues/52978

Evidence note: GitHub Issue #52978 in anthropics/claude-code (opened Apr 25 2026, noopys). Regression bug breaking AWS Bedrock auth flow — automatic token refresh stopped working in v0.93+. Users forced into manual browser auth each session. Tagged api:bedrock + area:auth + regression + stale. Affects enterprise AWS users. Category mapping: AI Coding Tools (AWS auth regression on paid Claude Code product).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] Aws Auth Refresh broken on versions >0.92 — user must manually click auth link every session instead of automatic refresh; regression introduced in 0.93+` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] Aws Auth Refresh broken on versions >0.92 — user must manually click auth link every session instead of automatic refresh; regression introduced in 0.93+`.
