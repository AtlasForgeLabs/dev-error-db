---
title: "Claude Code \"Can't Paste Authentication Code\" Error on macOS and Windows"
description: "Fix Claude Code login failure where pasting the OAuth authentication code into the terminal is silently dropped due to bracketed paste mode regression Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Paste code here if prompted > prompt silently refuses to accept pasted OAuth code in terminal"
common_causes:
  - "Article confirmed via felloai.com (published 2026-04-15): The bug started in Claude Code v2.1.105 through v2.1.107 — a bracketed paste regression caused by an OAuth token masking fix. Affected terminals include Terminal.app, iTerm2, Warp, Windows Terminal, PowerShell, WSL2. Official fix shipped in v2.1.108 (April 14, 2026). Many users still encounter this when running older versions or custom terminal configs. Category mapping: Claude Code auth errors fall under 'AI Coding Tools' per category rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T17:43:28.942Z"
updated_at: "2026-05-30T17:43:28.942Z"
---

## What this error means

`Paste code here if prompted > prompt silently refuses to accept pasted OAuth code in terminal` is a Claude Code failure pattern reported for developers trying to fix claude code login failure where pasting the oauth authentication code into the terminal is silently dropped due to bracketed paste mode regression. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Article confirmed via felloai.com (published 2026-04-15): The bug started in Claude Code v2.1.105 through v2.1.107 — a bracketed paste regression caused by an OAuth token masking fix. Affected terminals include Terminal.app, iTerm2, Warp, Windows Terminal, PowerShell, WSL2. Official fix shipped in v2.1.108 (April 14, 2026). Many users still encounter this when running older versions or custom terminal configs. Category mapping: Claude Code auth errors fall under 'AI Coding Tools' per category rules.

## Common causes

- Article confirmed via felloai.com (published 2026-04-15): The bug started in Claude Code v2.1.105 through v2.1.107 — a bracketed paste regression caused by an OAuth token masking fix. Affected terminals include Terminal.app, iTerm2, Warp, Windows Terminal, PowerShell, WSL2. Official fix shipped in v2.1.108 (April 14, 2026). Many users still encounter this when running older versions or custom terminal configs. Category mapping: Claude Code auth errors fall under 'AI Coding Tools' per category rules.

## Quick fixes

1. Confirm the exact error signature matches `Paste code here if prompted > prompt silently refuses to accept pasted OAuth code in terminal`.
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

- https://felloai.com/claude-code-login-issue-cant-paste-authentication-code-fix/

Evidence note: Article confirmed via felloai.com (published 2026-04-15): The bug started in Claude Code v2.1.105 through v2.1.107 — a bracketed paste regression caused by an OAuth token masking fix. Affected terminals include Terminal.app, iTerm2, Warp, Windows Terminal, PowerShell, WSL2. Official fix shipped in v2.1.108 (April 14, 2026). Many users still encounter this when running older versions or custom terminal configs. Category mapping: Claude Code auth errors fall under 'AI Coding Tools' per category rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Paste code here if prompted > prompt silently refuses to accept pasted OAuth code in terminal` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Paste code here if prompted > prompt silently refuses to accept pasted OAuth code in terminal`.
