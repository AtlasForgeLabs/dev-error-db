---
title: "Claude Code OAuth DNS Resolution Failure — auth.anthropic.com ENOTFOUND"
description: "Fix Claude Code OAuth login failures caused by DNS resolution failure of auth.anthropic.com Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "getaddrinfo ENOTFOUND auth.anthropic.com — Claude Code OAuth login fails with timeout; auth.anthropic.com does not resolve via DNS, making authentication impossible"
common_causes:
  - "Multiple GitHub issues (#33238, #44275, #41655) report Claude Code OAuth failures due to DNS resolution errors and internal hostname exposure (alb-cache). Issue #36019 reports intermittent crashes on Linux with DNS resolution failures. Category mapping: Claude Code → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T16:36:12.194Z"
updated_at: "2026-06-10T16:36:12.194Z"
---

## What this error means

`getaddrinfo ENOTFOUND auth.anthropic.com — Claude Code OAuth login fails with timeout; auth.anthropic.com does not resolve via DNS, making authentication impossible` is a Claude Code failure pattern reported for developers trying to fix claude code oauth login failures caused by dns resolution failure of auth.anthropic.com. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues (#33238, #44275, #41655) report Claude Code OAuth failures due to DNS resolution errors and internal hostname exposure (alb-cache). Issue #36019 reports intermittent crashes on Linux with DNS resolution failures. Category mapping: Claude Code → AI Coding Tools.

## Common causes

- Multiple GitHub issues (#33238, #44275, #41655) report Claude Code OAuth failures due to DNS resolution errors and internal hostname exposure (alb-cache). Issue #36019 reports intermittent crashes on Linux with DNS resolution failures. Category mapping: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `getaddrinfo ENOTFOUND auth.anthropic.com — Claude Code OAuth login fails with timeout; auth.anthropic.com does not resolve via DNS, making authentication impossible`.
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
- https://github.com/anthropics/claude-code/issues/44275
- https://github.com/anthropics/claude-code/issues/41655
- https://github.com/anthropics/claude-code/issues/36019

Evidence note: Multiple GitHub issues (#33238, #44275, #41655) report Claude Code OAuth failures due to DNS resolution errors and internal hostname exposure (alb-cache). Issue #36019 reports intermittent crashes on Linux with DNS resolution failures. Category mapping: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `getaddrinfo ENOTFOUND auth.anthropic.com — Claude Code OAuth login fails with timeout; auth.anthropic.com does not resolve via DNS, making authentication impossible` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `getaddrinfo ENOTFOUND auth.anthropic.com — Claude Code OAuth login fails with timeout; auth.anthropic.com does not resolve via DNS, making authentication impossible`.
