---
title: "[BUG] HTTP MCP servers requiring OAuth silently fail with no user notification"
description: "Fix Claude Code MCP server OAuth authentication failure where tools silently disappear without any error message or notification Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Redirection handling is disabled, skipping redirect; tools/list returns Unauthorized after successful initialize handshake"
common_causes:
  - "Multiple duplicate reports (#26917, #11585, #35052, #36307) confirm HTTP MCP servers requiring OAuth (Neon, Stripe, Sentry) silently fail when redirection is disabled. The initialize handshake succeeds but tools/list returns Unauthorized with zero user notification. Related: AWS Cognito token exchange fails due to missing code_challenge_methods_supported (#35846). P0 tech, paid AI coding tool broken."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T00:37:11.467Z"
updated_at: "2026-05-18T00:37:11.467Z"
---

## What this error means

`Redirection handling is disabled, skipping redirect; tools/list returns Unauthorized after successful initialize handshake` is a Claude Code failure pattern reported for developers trying to fix claude code mcp server oauth authentication failure where tools silently disappear without any error message or notification. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple duplicate reports (#26917, #11585, #35052, #36307) confirm HTTP MCP servers requiring OAuth (Neon, Stripe, Sentry) silently fail when redirection is disabled. The initialize handshake succeeds but tools/list returns Unauthorized with zero user notification. Related: AWS Cognito token exchange fails due to missing code_challenge_methods_supported (#35846). P0 tech, paid AI coding tool broken.

## Common causes

- Multiple duplicate reports (#26917, #11585, #35052, #36307) confirm HTTP MCP servers requiring OAuth (Neon, Stripe, Sentry) silently fail when redirection is disabled. The initialize handshake succeeds but tools/list returns Unauthorized with zero user notification. Related: AWS Cognito token exchange fails due to missing code_challenge_methods_supported (#35846). P0 tech, paid AI coding tool broken.

## Quick fixes

1. Confirm the exact error signature matches `Redirection handling is disabled, skipping redirect; tools/list returns Unauthorized after successful initialize handshake`.
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

- https://github.com/anthropics/claude-code/issues/26917
- https://github.com/anthropics/claude-code/issues/11585
- https://github.com/anthropics/claude-code/issues/35052
- https://github.com/anthropics/claude-code/issues/35846

Evidence note: Multiple duplicate reports (#26917, #11585, #35052, #36307) confirm HTTP MCP servers requiring OAuth (Neon, Stripe, Sentry) silently fail when redirection is disabled. The initialize handshake succeeds but tools/list returns Unauthorized with zero user notification. Related: AWS Cognito token exchange fails due to missing code_challenge_methods_supported (#35846). P0 tech, paid AI coding tool broken.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Redirection handling is disabled, skipping redirect; tools/list returns Unauthorized after successful initialize handshake` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Redirection handling is disabled, skipping redirect; tools/list returns Unauthorized after successful initialize handshake`.
