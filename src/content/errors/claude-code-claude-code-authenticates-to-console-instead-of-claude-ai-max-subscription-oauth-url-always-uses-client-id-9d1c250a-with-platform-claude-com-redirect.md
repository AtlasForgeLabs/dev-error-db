---
title: "Claude Code OAuth Always Routes to Console Billing Instead of claude.ai Max"
description: "Fix Claude Code ignoring claude.ai Max subscription and forcing Console API billing Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code authenticates to Console instead of claude.ai Max subscription — OAuth URL always uses client_id=9d1c250a with platform.claude.com redirect"
common_causes:
  - "Claude Code offers two billing modes: claude.ai Max subscription (flat rate) and Console API (pay-per-use). Users paying for Max expect free access, but the OAuth flow always routes to Console billing, causing unexpected charges. This is a regression that worked in previous versions."
  - "Claude Code always authenticates via Console (API billing) instead of claude.ai Max subscription, even when using 'claude auth login --claudeai'. The OAuth URL always contains client_id=9d1c250a-e61b-44d9-88ed-5944d1962f5e and redirect_uri pointing to platform.claude.com, regardless of OS or installation method. Multiple duplicate issues filed."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code unable to connect to API ConnectionRefused"
  - "Claude Code API Usage Billing instead of claude.ai subscription"
  - "Claude Code auth login --claudeai not working"
updated: "2026-05-11"
---

## What this error means

`Claude Code authenticates to Console instead of claude.ai Max subscription — OAuth URL always uses client_id=9d1c250a with platform.claude.com redirect` is a Claude Code failure pattern reported for developers trying to fix claude code ignoring claude.ai max subscription and forcing console api billing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code always authenticates via Console (API billing) instead of claude.ai Max subscription, even when using 'claude auth login --claudeai'. The OAuth URL always contains client_id=9d1c250a-e61b-44d9-88ed-5944d1962f5e and redirect_uri pointing to platform.claude.com, regardless of OS or installation method. Multiple duplicate issues filed.

## Common causes

- Claude Code offers two billing modes: claude.ai Max subscription (flat rate) and Console API (pay-per-use). Users paying for Max expect free access, but the OAuth flow always routes to Console billing, causing unexpected charges. This is a regression that worked in previous versions.
- Claude Code always authenticates via Console (API billing) instead of claude.ai Max subscription, even when using 'claude auth login --claudeai'. The OAuth URL always contains client_id=9d1c250a-e61b-44d9-88ed-5944d1962f5e and redirect_uri pointing to platform.claude.com, regardless of OS or installation method. Multiple duplicate issues filed.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code authenticates to Console instead of claude.ai Max subscription — OAuth URL always uses client_id=9d1c250a with platform.claude.com redirect`.
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

- https://github.com/anthropics/claude-code/issues/57985
- https://github.com/anthropics/claude-code/issues/57970

Evidence note: Claude Code always authenticates via Console (API billing) instead of claude.ai Max subscription, even when using 'claude auth login --claudeai'. The OAuth URL always contains client_id=9d1c250a-e61b-44d9-88ed-5944d1962f5e and redirect_uri pointing to platform.claude.com, regardless of OS or installation method. Multiple duplicate issues filed.

## Related errors

- Claude Code unable to connect to API ConnectionRefused
- Claude Code API Usage Billing instead of claude.ai subscription
- Claude Code auth login --claudeai not working

## FAQ

### What should I check first?

Start with the exact `Claude Code authenticates to Console instead of claude.ai Max subscription — OAuth URL always uses client_id=9d1c250a with platform.claude.com redirect` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code authenticates to Console instead of claude.ai Max subscription — OAuth URL always uses client_id=9d1c250a with platform.claude.com redirect`.
