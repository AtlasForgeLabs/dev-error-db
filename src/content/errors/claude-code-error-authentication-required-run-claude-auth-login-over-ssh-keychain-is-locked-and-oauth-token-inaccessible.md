---
title: "Claude Code SSH Access Fails: Keychain OAuth Token Inaccessible Over SSH"
description: "Recover or bypass Claude Code OAuth authentication when running CLI over SSH where macOS Keychain is locked and claude auth login can't open browser Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error: Authentication required. Run 'claude auth login' — over SSH Keychain is locked and OAuth token inaccessible"
common_causes:
  - "Confirmed via dev.to article (published 2026-03-06): When running Claude Code over SSH, macOS Keychain locks and the CLAUDE_CODE_OAUTH_TOKEN cannot be read. Running 'claude auth login' opens a browser which fails over SSH. Solution involves extracting token from Keychain via 'security find-generic-password' and setting environment variable. Covers workaround using CLAUDE_CODE_OAUTH_TOKEN env var with full JSON payload including accessToken, refreshToken, expiresAt. Tier bonus P0 applies."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T17:43:28.942Z"
updated_at: "2026-05-30T17:43:28.942Z"
---

## What this error means

`Error: Authentication required. Run 'claude auth login' — over SSH Keychain is locked and OAuth token inaccessible` is a Claude Code failure pattern reported for developers trying to recover or bypass claude code oauth authentication when running cli over ssh where macos keychain is locked and claude auth login can't open browser. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Confirmed via dev.to article (published 2026-03-06): When running Claude Code over SSH, macOS Keychain locks and the CLAUDE_CODE_OAUTH_TOKEN cannot be read. Running 'claude auth login' opens a browser which fails over SSH. Solution involves extracting token from Keychain via 'security find-generic-password' and setting environment variable. Covers workaround using CLAUDE_CODE_OAUTH_TOKEN env var with full JSON payload including accessToken, refreshToken, expiresAt. Tier bonus P0 applies.

## Common causes

- Confirmed via dev.to article (published 2026-03-06): When running Claude Code over SSH, macOS Keychain locks and the CLAUDE_CODE_OAUTH_TOKEN cannot be read. Running 'claude auth login' opens a browser which fails over SSH. Solution involves extracting token from Keychain via 'security find-generic-password' and setting environment variable. Covers workaround using CLAUDE_CODE_OAUTH_TOKEN env var with full JSON payload including accessToken, refreshToken, expiresAt. Tier bonus P0 applies.

## Quick fixes

1. Confirm the exact error signature matches `Error: Authentication required. Run 'claude auth login' — over SSH Keychain is locked and OAuth token inaccessible`.
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

- https://dev.to/anicca_301094325e/how-to-recover-claude-code-oauth-token-in-30-seconds-1hd

Evidence note: Confirmed via dev.to article (published 2026-03-06): When running Claude Code over SSH, macOS Keychain locks and the CLAUDE_CODE_OAUTH_TOKEN cannot be read. Running 'claude auth login' opens a browser which fails over SSH. Solution involves extracting token from Keychain via 'security find-generic-password' and setting environment variable. Covers workaround using CLAUDE_CODE_OAUTH_TOKEN env var with full JSON payload including accessToken, refreshToken, expiresAt. Tier bonus P0 applies.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error: Authentication required. Run 'claude auth login' — over SSH Keychain is locked and OAuth token inaccessible` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Authentication required. Run 'claude auth login' — over SSH Keychain is locked and OAuth token inaccessible`.
