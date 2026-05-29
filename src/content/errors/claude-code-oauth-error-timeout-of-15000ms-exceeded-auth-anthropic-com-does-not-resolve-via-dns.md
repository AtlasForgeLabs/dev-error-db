---
title: "Claude Code OAuth Login Timeout — auth.anthropic.com DNS Resolution Failure"
description: "Fix Claude Code login failing due to auth.anthropic.com DNS resolution failure causing OAuth callback timeout Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth error: timeout of 15000ms exceeded — auth.anthropic.com does not resolve via DNS"
common_causes:
  - "GitHub Issue #33238 on anthropics/claude-code: running claude login opens browser, OAuth flow begins, but after ~15s fails with 'OAuth error: timeout of 15000ms exceeded'. Root cause: auth.anthropic.com returns 'Non-existent domain' even against Google DNS (8.8.8.8), while api.anthropic.com resolves fine (160.79.104.10). Confirmed as global DNS issue with 170+ Reddit comments. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T16:43:26.685Z"
updated_at: "2026-05-29T16:43:26.685Z"
---

## What this error means

`OAuth error: timeout of 15000ms exceeded — auth.anthropic.com does not resolve via DNS` is a Claude Code failure pattern reported for developers trying to fix claude code login failing due to auth.anthropic.com dns resolution failure causing oauth callback timeout. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #33238 on anthropics/claude-code: running claude login opens browser, OAuth flow begins, but after ~15s fails with 'OAuth error: timeout of 15000ms exceeded'. Root cause: auth.anthropic.com returns 'Non-existent domain' even against Google DNS (8.8.8.8), while api.anthropic.com resolves fine (160.79.104.10). Confirmed as global DNS issue with 170+ Reddit comments. Category: AI Coding Tools.

## Common causes

- GitHub Issue #33238 on anthropics/claude-code: running claude login opens browser, OAuth flow begins, but after ~15s fails with 'OAuth error: timeout of 15000ms exceeded'. Root cause: auth.anthropic.com returns 'Non-existent domain' even against Google DNS (8.8.8.8), while api.anthropic.com resolves fine (160.79.104.10). Confirmed as global DNS issue with 170+ Reddit comments. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com does not resolve via DNS`.
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

- https://github.com/anthropics/claude-code/issues/33238
- https://www.reddit.com/r/ClaudeCode/comments/1rqvio7/login_timing_out/

Evidence note: GitHub Issue #33238 on anthropics/claude-code: running claude login opens browser, OAuth flow begins, but after ~15s fails with 'OAuth error: timeout of 15000ms exceeded'. Root cause: auth.anthropic.com returns 'Non-existent domain' even against Google DNS (8.8.8.8), while api.anthropic.com resolves fine (160.79.104.10). Confirmed as global DNS issue with 170+ Reddit comments. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com does not resolve via DNS` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com does not resolve via DNS`.
