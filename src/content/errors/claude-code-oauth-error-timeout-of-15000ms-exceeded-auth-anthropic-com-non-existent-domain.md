---
title: "Claude Code OAuth Login Fails — auth.anthropic.com DNS Resolution Error"
description: "Fix Claude Code OAuth login timeout when auth.anthropic.com fails to resolve via DNS Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth error: timeout of 15000ms exceeded — auth.anthropic.com: Non-existent domain"
common_causes:
  - "Complete authentication outage for Claude Code users in certain regions (e.g., Southeast Asia). The auth.anthropic.com subdomain does not resolve even via public DNS (8.8.8.8), making login impossible. api.anthropic.com resolves fine, so this is specific to the auth subdomain. No API key workaround available for all users."
  - "Open GitHub issue with 149 comments. Users in Malaysia and other regions cannot authenticate. DNS investigation confirms auth.anthropic.com is non-existent from multiple DNS resolvers. Affects Claude Code 2.1.72+. Regional authentication outage preventing all paid usage."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code auth.anthropic.com connection refused"
  - "Claude Code login timeout error"
  - "Claude Code OAuth callback failed"
updated: "2026-05-11"
---

## What this error means

`OAuth error: timeout of 15000ms exceeded — auth.anthropic.com: Non-existent domain` is a Claude Code failure pattern reported for developers trying to fix claude code oauth login timeout when auth.anthropic.com fails to resolve via dns. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open GitHub issue with 149 comments. Users in Malaysia and other regions cannot authenticate. DNS investigation confirms auth.anthropic.com is non-existent from multiple DNS resolvers. Affects Claude Code 2.1.72+. Regional authentication outage preventing all paid usage.

## Common causes

- Complete authentication outage for Claude Code users in certain regions (e.g., Southeast Asia). The auth.anthropic.com subdomain does not resolve even via public DNS (8.8.8.8), making login impossible. api.anthropic.com resolves fine, so this is specific to the auth subdomain. No API key workaround available for all users.
- Open GitHub issue with 149 comments. Users in Malaysia and other regions cannot authenticate. DNS investigation confirms auth.anthropic.com is non-existent from multiple DNS resolvers. Affects Claude Code 2.1.72+. Regional authentication outage preventing all paid usage.

## Quick fixes

1. Confirm the exact error signature matches `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com: Non-existent domain`.
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

Evidence note: Open GitHub issue with 149 comments. Users in Malaysia and other regions cannot authenticate. DNS investigation confirms auth.anthropic.com is non-existent from multiple DNS resolvers. Affects Claude Code 2.1.72+. Regional authentication outage preventing all paid usage.

## Related errors

- Claude Code auth.anthropic.com connection refused
- Claude Code login timeout error
- Claude Code OAuth callback failed

## FAQ

### What should I check first?

Start with the exact `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com: Non-existent domain` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth error: timeout of 15000ms exceeded — auth.anthropic.com: Non-existent domain`.
