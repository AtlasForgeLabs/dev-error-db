---
title: "Claude Code OAuth Fails in Corporate Network: Failed to Fetch User Roles"
description: "Resolve Claude Code OAuth authentication failure behind corporate network with custom routing requirements Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth error: Failed to fetch user roles: OAuth account information not found in config"
common_causes:
  - "GitHub issue anthropics/claude-code#1484. Users on Claude Max subscriptions with corporate network setups consistently hit OAuth auth failure showing 'OAuth account information not found in config'. Distinct from keychain persistence issue (#9403) — this is network/routing-specific. Category: AI Coding Tools per mapping rules."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-28"
published_at: "2026-05-28T22:43:24.443Z"
updated_at: "2026-05-28T22:43:24.443Z"
---

## What this error means

`OAuth error: Failed to fetch user roles: OAuth account information not found in config` is a Claude Code failure pattern reported for developers trying to resolve claude code oauth authentication failure behind corporate network with custom routing requirements. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue anthropics/claude-code#1484. Users on Claude Max subscriptions with corporate network setups consistently hit OAuth auth failure showing 'OAuth account information not found in config'. Distinct from keychain persistence issue (#9403) — this is network/routing-specific. Category: AI Coding Tools per mapping rules.

## Common causes

- GitHub issue anthropics/claude-code#1484. Users on Claude Max subscriptions with corporate network setups consistently hit OAuth auth failure showing 'OAuth account information not found in config'. Distinct from keychain persistence issue (#9403) — this is network/routing-specific. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `OAuth error: Failed to fetch user roles: OAuth account information not found in config`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/claude-code/issues/1484

Evidence note: GitHub issue anthropics/claude-code#1484. Users on Claude Max subscriptions with corporate network setups consistently hit OAuth auth failure showing 'OAuth account information not found in config'. Distinct from keychain persistence issue (#9403) — this is network/routing-specific. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth error: Failed to fetch user roles: OAuth account information not found in config` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth error: Failed to fetch user roles: OAuth account information not found in config`.
