---
title: "Claude Code OAuth Auth Token Not Persisted After Login Successful"
description: "Fix Claude Code becoming unusable immediately after successful OAuth login — auth token not being saved or loaded back Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "/status shows \"Auth token: none\" after OAuth login flow completes; Claude Code becomes unusable"
common_causes:
  - "GitHub Issue #9371 (anthropics/claude-code): User reports completing OAuth login via Max subscription, seeing 'Login successful', but immediately after that /status displays 'Auth token: none' and prompts are ignored. This is an auth persistence bug specific to Claude Code's CLI OAuth flow. Category mapped to AI Coding Tools per category rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T07:43:19.311Z"
updated_at: "2026-05-27T07:43:19.311Z"
---

## What this error means

`/status shows "Auth token: none" after OAuth login flow completes; Claude Code becomes unusable` is a Claude Code failure pattern reported for developers trying to fix claude code becoming unusable immediately after successful oauth login — auth token not being saved or loaded back. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #9371 (anthropics/claude-code): User reports completing OAuth login via Max subscription, seeing 'Login successful', but immediately after that /status displays 'Auth token: none' and prompts are ignored. This is an auth persistence bug specific to Claude Code's CLI OAuth flow. Category mapped to AI Coding Tools per category rules.

## Common causes

- GitHub Issue #9371 (anthropics/claude-code): User reports completing OAuth login via Max subscription, seeing 'Login successful', but immediately after that /status displays 'Auth token: none' and prompts are ignored. This is an auth persistence bug specific to Claude Code's CLI OAuth flow. Category mapped to AI Coding Tools per category rules.

## Quick fixes

1. Confirm the exact error signature matches `/status shows "Auth token: none" after OAuth login flow completes; Claude Code becomes unusable`.
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

- https://github.com/anthropics/claude-code/issues/9371

Evidence note: GitHub Issue #9371 (anthropics/claude-code): User reports completing OAuth login via Max subscription, seeing 'Login successful', but immediately after that /status displays 'Auth token: none' and prompts are ignored. This is an auth persistence bug specific to Claude Code's CLI OAuth flow. Category mapped to AI Coding Tools per category rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `/status shows "Auth token: none" after OAuth login flow completes; Claude Code becomes unusable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/status shows "Auth token: none" after OAuth login flow completes; Claude Code becomes unusable`.
