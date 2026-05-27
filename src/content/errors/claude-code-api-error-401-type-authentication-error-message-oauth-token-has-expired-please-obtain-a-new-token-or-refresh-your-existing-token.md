---
title: "Claude Code OAuth refresh token not used when credentials copied to remote machine"
description: "Fix Claude Code 401 authentication_error after copying credentials.json to remote/headless machine — refresh token should auto-renew but does not Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 401 {\"type\":\"authentication_error\",\"message\":\"OAuth token has expired. Please obtain a new token or refresh your existing token.\"}"
common_causes:
  - "GitHub issue #21765 on anthropics/claude-code: When copying ~/.claude/.credentials.json from authenticated local workstation to remote headless Linux machine, Claude Code throws 401 authentication_error instead of using the refreshToken present in credentials.json. Confirmed by multiple reporters; issue has 7+ reactions. Maps to AI Coding Tools category per SKILL.md rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T04:43:18.928Z"
updated_at: "2026-05-27T04:43:18.928Z"
---

## What this error means

`API Error: 401 {"type":"authentication_error","message":"OAuth token has expired. Please obtain a new token or refresh your existing token."}` is a Claude Code failure pattern reported for developers trying to fix claude code 401 authentication_error after copying credentials.json to remote/headless machine — refresh token should auto-renew but does not. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #21765 on anthropics/claude-code: When copying ~/.claude/.credentials.json from authenticated local workstation to remote headless Linux machine, Claude Code throws 401 authentication_error instead of using the refreshToken present in credentials.json. Confirmed by multiple reporters; issue has 7+ reactions. Maps to AI Coding Tools category per SKILL.md rules.

## Common causes

- GitHub issue #21765 on anthropics/claude-code: When copying ~/.claude/.credentials.json from authenticated local workstation to remote headless Linux machine, Claude Code throws 401 authentication_error instead of using the refreshToken present in credentials.json. Confirmed by multiple reporters; issue has 7+ reactions. Maps to AI Coding Tools category per SKILL.md rules.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 401 {"type":"authentication_error","message":"OAuth token has expired. Please obtain a new token or refresh your existing token."}`.
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

- https://github.com/anthropics/claude-code/issues/21765

Evidence note: GitHub issue #21765 on anthropics/claude-code: When copying ~/.claude/.credentials.json from authenticated local workstation to remote headless Linux machine, Claude Code throws 401 authentication_error instead of using the refreshToken present in credentials.json. Confirmed by multiple reporters; issue has 7+ reactions. Maps to AI Coding Tools category per SKILL.md rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: 401 {"type":"authentication_error","message":"OAuth token has expired. Please obtain a new token or refresh your existing token."}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 401 {"type":"authentication_error","message":"OAuth token has expired. Please obtain a new token or refresh your existing token."}`.
