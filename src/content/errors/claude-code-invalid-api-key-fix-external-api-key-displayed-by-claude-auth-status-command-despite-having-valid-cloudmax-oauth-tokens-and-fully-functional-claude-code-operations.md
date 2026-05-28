---
title: "[BUG] OAuth authentication succeeds but auth token not persisted — shows 'Missing API key' after successful login"
description: "Resolve Claude Code auth status showing 'Invalid API key' when OAuth tokens are actually present and working in ~/.claude/.credentials.json; inability to properly log out of Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Invalid API key · Fix external API key — displayed by 'claude auth status' command despite having valid CloudMax OAuth tokens and fully functional Claude Code operations"
common_causes:
  - "GitHub issue #8002 from anthropics/claude-code repo. User runs 'claude auth status' and gets 'Invalid API key' response despite CloudMax OAuth tokens being valid in credentials file. Claude Code operations work fine but status display is incorrect. Also reports complete inability to log out — requires deleting all config files manually, sometimes causing system freeze on logout attempt. Regression confirmed in v1.0.120. Affects Windows + VS Code integrated terminal. Long-standing bug impacting user workflow hygiene."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T05:43:22.185Z"
updated_at: "2026-05-28T05:43:22.185Z"
---

## What this error means

`Invalid API key · Fix external API key — displayed by 'claude auth status' command despite having valid CloudMax OAuth tokens and fully functional Claude Code operations` is a Claude Code failure pattern reported for developers trying to resolve claude code auth status showing 'invalid api key' when oauth tokens are actually present and working in ~/.claude/.credentials.json; inability to properly log out of claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #8002 from anthropics/claude-code repo. User runs 'claude auth status' and gets 'Invalid API key' response despite CloudMax OAuth tokens being valid in credentials file. Claude Code operations work fine but status display is incorrect. Also reports complete inability to log out — requires deleting all config files manually, sometimes causing system freeze on logout attempt. Regression confirmed in v1.0.120. Affects Windows + VS Code integrated terminal. Long-standing bug impacting user workflow hygiene.

## Common causes

- GitHub issue #8002 from anthropics/claude-code repo. User runs 'claude auth status' and gets 'Invalid API key' response despite CloudMax OAuth tokens being valid in credentials file. Claude Code operations work fine but status display is incorrect. Also reports complete inability to log out — requires deleting all config files manually, sometimes causing system freeze on logout attempt. Regression confirmed in v1.0.120. Affects Windows + VS Code integrated terminal. Long-standing bug impacting user workflow hygiene.

## Quick fixes

1. Confirm the exact error signature matches `Invalid API key · Fix external API key — displayed by 'claude auth status' command despite having valid CloudMax OAuth tokens and fully functional Claude Code operations`.
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

- https://github.com/anthropics/claude-code/issues/8002

Evidence note: GitHub issue #8002 from anthropics/claude-code repo. User runs 'claude auth status' and gets 'Invalid API key' response despite CloudMax OAuth tokens being valid in credentials file. Claude Code operations work fine but status display is incorrect. Also reports complete inability to log out — requires deleting all config files manually, sometimes causing system freeze on logout attempt. Regression confirmed in v1.0.120. Affects Windows + VS Code integrated terminal. Long-standing bug impacting user workflow hygiene.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Invalid API key · Fix external API key — displayed by 'claude auth status' command despite having valid CloudMax OAuth tokens and fully functional Claude Code operations` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Invalid API key · Fix external API key — displayed by 'claude auth status' command despite having valid CloudMax OAuth tokens and fully functional Claude Code operations`.
