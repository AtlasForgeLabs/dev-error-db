---
title: "Claude Code Auth Failed — OAuth Token Expired & API Key Invalid"
description: "Fix Claude Code authentication failure when OAuth refresh token expires or ANTHROPIC_API_KEY env var contains invalid/expired key, blocking all AI-assisted coding in terminal. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Authentication failed. Run `claude auth login` to authenticate."
common_causes:
  - "Source: markaicode.com (web_fetch, Tier 1). Covers expired OAuth token.json (~30-day lifetime), mis-scoped API keys lacking messages.create permission, headless server proxy blocks on OAuth redirect. Pattern confirmed across macOS/Ubuntu/WSL. Category mapping: Claude Code → AI Coding Tools per SKILL.md approved mappings. No overlap with covered-errors.md entries."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-25"
published_at: "2026-05-25T07:43:13.111Z"
updated_at: "2026-05-25T07:43:13.111Z"
---

## What this error means

`Authentication failed. Run `claude auth login` to authenticate.` is a Claude Code failure pattern reported for developers trying to fix claude code authentication failure when oauth refresh token expires or anthropic_api_key env var contains invalid/expired key, blocking all ai-assisted coding in terminal.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: markaicode.com (web_fetch, Tier 1). Covers expired OAuth token.json (~30-day lifetime), mis-scoped API keys lacking messages.create permission, headless server proxy blocks on OAuth redirect. Pattern confirmed across macOS/Ubuntu/WSL. Category mapping: Claude Code → AI Coding Tools per SKILL.md approved mappings. No overlap with covered-errors.md entries.

## Common causes

- Source: markaicode.com (web_fetch, Tier 1). Covers expired OAuth token.json (~30-day lifetime), mis-scoped API keys lacking messages.create permission, headless server proxy blocks on OAuth redirect. Pattern confirmed across macOS/Ubuntu/WSL. Category mapping: Claude Code → AI Coding Tools per SKILL.md approved mappings. No overlap with covered-errors.md entries.

## Quick fixes

1. Confirm the exact error signature matches `Authentication failed. Run `claude auth login` to authenticate.`.
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

- https://markaicode.com/errors/claude-code-authentication-failed-fix/

Evidence note: Source: markaicode.com (web_fetch, Tier 1). Covers expired OAuth token.json (~30-day lifetime), mis-scoped API keys lacking messages.create permission, headless server proxy blocks on OAuth redirect. Pattern confirmed across macOS/Ubuntu/WSL. Category mapping: Claude Code → AI Coding Tools per SKILL.md approved mappings. No overlap with covered-errors.md entries.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Authentication failed. Run `claude auth login` to authenticate.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authentication failed. Run `claude auth login` to authenticate.`.
