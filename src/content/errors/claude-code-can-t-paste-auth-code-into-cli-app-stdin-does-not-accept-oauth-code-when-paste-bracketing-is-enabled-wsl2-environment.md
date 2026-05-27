---
title: "Claude Code Login Pasting Auth Code Blocked by Terminal Paste Bracketing in WSL2"
description: "Authenticate Claude Code by pasting the OAuth verification code when the terminal has paste bracketing enabled (common in WSL2), which prevents code from being entered correctly Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Can't paste auth code into CLI app — stdin does not accept OAuth code when paste bracketing is enabled; WSL2 environment"
common_causes:
  - "GitHub Issue #47669 with 3 confirmed duplicate issues (#47648, #47670, #44136) spanning macOS and Windows. The root trigger is terminal paste bracketing in certain environments (WSL2 highlighted). Multiple users affected across platforms — indicates a real usability barrier for authentication. Brackets wrapping typed text breaks raw paste input. Category: AI Coding Tools per rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-27"
published_at: "2026-05-27T07:43:19.311Z"
updated_at: "2026-05-27T07:43:19.311Z"
---

## What this error means

`Can't paste auth code into CLI app — stdin does not accept OAuth code when paste bracketing is enabled; WSL2 environment` is a Claude Code failure pattern reported for developers trying to authenticate claude code by pasting the oauth verification code when the terminal has paste bracketing enabled (common in wsl2), which prevents code from being entered correctly. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #47669 with 3 confirmed duplicate issues (#47648, #47670, #44136) spanning macOS and Windows. The root trigger is terminal paste bracketing in certain environments (WSL2 highlighted). Multiple users affected across platforms — indicates a real usability barrier for authentication. Brackets wrapping typed text breaks raw paste input. Category: AI Coding Tools per rules.

## Common causes

- GitHub Issue #47669 with 3 confirmed duplicate issues (#47648, #47670, #44136) spanning macOS and Windows. The root trigger is terminal paste bracketing in certain environments (WSL2 highlighted). Multiple users affected across platforms — indicates a real usability barrier for authentication. Brackets wrapping typed text breaks raw paste input. Category: AI Coding Tools per rules.

## Quick fixes

1. Confirm the exact error signature matches `Can't paste auth code into CLI app — stdin does not accept OAuth code when paste bracketing is enabled; WSL2 environment`.
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

- https://github.com/anthropics/claude-code/issues/47669
- https://github.com/anthropics/claude-code/issues/47648
- https://github.com/anthropics/claude-code/issues/47670
- https://github.com/anthropics/claude-code/issues/44136

Evidence note: GitHub Issue #47669 with 3 confirmed duplicate issues (#47648, #47670, #44136) spanning macOS and Windows. The root trigger is terminal paste bracketing in certain environments (WSL2 highlighted). Multiple users affected across platforms — indicates a real usability barrier for authentication. Brackets wrapping typed text breaks raw paste input. Category: AI Coding Tools per rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Can't paste auth code into CLI app — stdin does not accept OAuth code when paste bracketing is enabled; WSL2 environment` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Can't paste auth code into CLI app — stdin does not accept OAuth code when paste bracketing is enabled; WSL2 environment`.
