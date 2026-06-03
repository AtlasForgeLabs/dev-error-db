---
title: "Claude Code /login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN causes retry loop"
description: "Developer runs Claude Code with environment variable override; expired OAuth token stuck in 401 retry loop, /login command does not refresh auth properly Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "/login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN — OAuth auth fails with 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set"
common_causes:
  - "Source: Claude Code changelog (claudefa.st/blog/guide/changelog) — v2.1.123 release notes: 'Fixed OAuth authentication failing with a 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set'. Also referenced in Pencil dev docs troubleshooting section. Directly related to Claude Code auth flow and token lifecycle. Category mapping: Anthropic API because the error originates from Anthropic's OAuth token validation rejecting expired CLAUDE_CODE_OAUTH_TOKEN."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-06-03"
published_at: "2026-06-03T02:44:31.544Z"
updated_at: "2026-06-03T02:44:31.544Z"
---

## What this error means

`/login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN — OAuth auth fails with 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set` is a Anthropic API failure pattern reported for developers trying to developer runs claude code with environment variable override; expired oauth token stuck in 401 retry loop, /login command does not refresh auth properly. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Claude Code changelog (claudefa.st/blog/guide/changelog) — v2.1.123 release notes: 'Fixed OAuth authentication failing with a 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set'. Also referenced in Pencil dev docs troubleshooting section. Directly related to Claude Code auth flow and token lifecycle. Category mapping: Anthropic API because the error originates from Anthropic's OAuth token validation rejecting expired CLAUDE_CODE_OAUTH_TOKEN.

## Common causes

- Source: Claude Code changelog (claudefa.st/blog/guide/changelog) — v2.1.123 release notes: 'Fixed OAuth authentication failing with a 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set'. Also referenced in Pencil dev docs troubleshooting section. Directly related to Claude Code auth flow and token lifecycle. Category mapping: Anthropic API because the error originates from Anthropic's OAuth token validation rejecting expired CLAUDE_CODE_OAUTH_TOKEN.

## Quick fixes

1. Confirm the exact error signature matches `/login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN — OAuth auth fails with 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://claudefa.st/blog/guide/changelog

Evidence note: Source: Claude Code changelog (claudefa.st/blog/guide/changelog) — v2.1.123 release notes: 'Fixed OAuth authentication failing with a 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set'. Also referenced in Pencil dev docs troubleshooting section. Directly related to Claude Code auth flow and token lifecycle. Category mapping: Anthropic API because the error originates from Anthropic's OAuth token validation rejecting expired CLAUDE_CODE_OAUTH_TOKEN.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `/login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN — OAuth auth fails with 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/login ineffective with expired CLAUDE_CODE_OAUTH_TOKEN — OAuth auth fails with 401 retry loop when CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 is set`.
