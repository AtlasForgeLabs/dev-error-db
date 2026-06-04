---
title: "Claude Code OAuth Login Fails Even with Correct Code — VPS Self-Hosted Setup"
description: "Fix OAuth login loop in Claude Code when self-hosted on VPS; user enters correct auth code repeatedly but gets rejection Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code OAuth error — entering correct code still shows error; previously worked, re-login fails with same error after session expiry"
common_causes:
  - "Reddit r/ClaudeAI post (25 days ago): user self-hosted Claude on VPS gets OAuth rejection despite correct code, repeated 3 times; was working before but broke after session expired and required re-auth. Also corroborated by related threads about OAuth request failures and Bearer token not being sent after successful OAuth handshake. Category mapping: Claude Code is an AI coding tool; errors block developer workflow with paid Anthropic usage."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-04"
published_at: "2026-06-04T11:44:35.743Z"
updated_at: "2026-06-04T11:44:35.743Z"
---

## What this error means

`Claude Code OAuth error — entering correct code still shows error; previously worked, re-login fails with same error after session expiry` is a Claude Code failure pattern reported for developers trying to fix oauth login loop in claude code when self-hosted on vps; user enters correct auth code repeatedly but gets rejection. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reddit r/ClaudeAI post (25 days ago): user self-hosted Claude on VPS gets OAuth rejection despite correct code, repeated 3 times; was working before but broke after session expired and required re-auth. Also corroborated by related threads about OAuth request failures and Bearer token not being sent after successful OAuth handshake. Category mapping: Claude Code is an AI coding tool; errors block developer workflow with paid Anthropic usage.

## Common causes

- Reddit r/ClaudeAI post (25 days ago): user self-hosted Claude on VPS gets OAuth rejection despite correct code, repeated 3 times; was working before but broke after session expired and required re-auth. Also corroborated by related threads about OAuth request failures and Bearer token not being sent after successful OAuth handshake. Category mapping: Claude Code is an AI coding tool; errors block developer workflow with paid Anthropic usage.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code OAuth error — entering correct code still shows error; previously worked, re-login fails with same error after session expiry`.
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

- https://www.reddit.com/r/ClaudeAI/comments/1t9fk77/claude_code_oauth_error/
- https://www.reddit.com/r/ClaudeCode/comments/1s3bbys/oauth_request_failed_this_isnt_working_right_now/

Evidence note: Reddit r/ClaudeAI post (25 days ago): user self-hosted Claude on VPS gets OAuth rejection despite correct code, repeated 3 times; was working before but broke after session expired and required re-auth. Also corroborated by related threads about OAuth request failures and Bearer token not being sent after successful OAuth handshake. Category mapping: Claude Code is an AI coding tool; errors block developer workflow with paid Anthropic usage.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Claude Code OAuth error — entering correct code still shows error; previously worked, re-login fails with same error after session expiry` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code OAuth error — entering correct code still shows error; previously worked, re-login fails with same error after session expiry`.
