---
title: "Claude Code v2.0.14 macOS Keychain OAuth Auth Doesn't Persist Across Sessions"
description: "Fix Claude Code OAuth re-authentication required every terminal session on macOS due to Keychain service name mismatch Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "service name mismatch causes authentication to fail on every new session; 'Invalid API key - Please run /login'"
common_causes:
  - "GitHub issue anthropics/claude-code#9403. OAuth /login writes credentials to Keychain under 'Claude Code-credentials', but Claude Code v2.0.14 startup reads from 'Claude Code' (without -credentials suffix). Affects Max subscribers — every new terminal session requires re-login. Category: AI Coding Tools per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T22:43:24.443Z"
updated_at: "2026-05-28T22:43:24.443Z"
---

## What this error means

`service name mismatch causes authentication to fail on every new session; 'Invalid API key - Please run /login'` is a Claude Code failure pattern reported for developers trying to fix claude code oauth re-authentication required every terminal session on macos due to keychain service name mismatch. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#9403. OAuth /login writes credentials to Keychain under 'Claude Code-credentials', but Claude Code v2.0.14 startup reads from 'Claude Code' (without -credentials suffix). Affects Max subscribers — every new terminal session requires re-login. Category: AI Coding Tools per mapping rules.

## Common causes

- GitHub issue anthropics/claude-code#9403. OAuth /login writes credentials to Keychain under 'Claude Code-credentials', but Claude Code v2.0.14 startup reads from 'Claude Code' (without -credentials suffix). Affects Max subscribers — every new terminal session requires re-login. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `service name mismatch causes authentication to fail on every new session; 'Invalid API key - Please run /login'`.
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

- https://github.com/anthropics/claude-code/issues/9403

Evidence note: GitHub issue anthropics/claude-code#9403. OAuth /login writes credentials to Keychain under 'Claude Code-credentials', but Claude Code v2.0.14 startup reads from 'Claude Code' (without -credentials suffix). Affects Max subscribers — every new terminal session requires re-login. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `service name mismatch causes authentication to fail on every new session; 'Invalid API key - Please run /login'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `service name mismatch causes authentication to fail on every new session; 'Invalid API key - Please run /login'`.
