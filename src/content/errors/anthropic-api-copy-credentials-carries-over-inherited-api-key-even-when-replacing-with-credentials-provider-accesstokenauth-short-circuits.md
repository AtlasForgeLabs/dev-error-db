---
title: "Anthropic SDK copy() leaks inherited api_key — AccessTokenAuth silently disabled"
description: "Fix anthropic SDK client.copy() method that propagates parent api_key into child clients, preventing credential provider (OAuth, GCP, AWS) authentication from working Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "copy(credentials=...) carries over inherited api_key even when replacing with credentials provider; AccessTokenAuth short-circuits"
common_causes:
  - "PR #1557 on anthropics/anthropic-sdk-python (open, created 2026-05-17). Root cause: copy() always passes api_key=api_key or self.api_key into new client. When caller tries to replace a static key client with a credentials provider, the copied client still sends X-Api-Key so AccessTokenAuth short-circuits. Fix involves stopping propagation unless explicitly passed."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Anthropic API"
updated: "2026-05-23"
published_at: "2026-05-23T08:39:50.052Z"
updated_at: "2026-05-23T08:39:50.052Z"
---

## What this error means

`copy(credentials=...) carries over inherited api_key even when replacing with credentials provider; AccessTokenAuth short-circuits` is a Anthropic API failure pattern reported for developers trying to fix anthropic sdk client.copy() method that propagates parent api_key into child clients, preventing credential provider (oauth, gcp, aws) authentication from working. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

PR #1557 on anthropics/anthropic-sdk-python (open, created 2026-05-17). Root cause: copy() always passes api_key=api_key or self.api_key into new client. When caller tries to replace a static key client with a credentials provider, the copied client still sends X-Api-Key so AccessTokenAuth short-circuits. Fix involves stopping propagation unless explicitly passed.

## Common causes

- PR #1557 on anthropics/anthropic-sdk-python (open, created 2026-05-17). Root cause: copy() always passes api_key=api_key or self.api_key into new client. When caller tries to replace a static key client with a credentials provider, the copied client still sends X-Api-Key so AccessTokenAuth short-circuits. Fix involves stopping propagation unless explicitly passed.

## Quick fixes

1. Confirm the exact error signature matches `copy(credentials=...) carries over inherited api_key even when replacing with credentials provider; AccessTokenAuth short-circuits`.
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

- https://github.com/anthropics/anthropic-sdk-python/pull/1557

Evidence note: PR #1557 on anthropics/anthropic-sdk-python (open, created 2026-05-17). Root cause: copy() always passes api_key=api_key or self.api_key into new client. When caller tries to replace a static key client with a credentials provider, the copied client still sends X-Api-Key so AccessTokenAuth short-circuits. Fix involves stopping propagation unless explicitly passed.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `copy(credentials=...) carries over inherited api_key even when replacing with credentials provider; AccessTokenAuth short-circuits` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `copy(credentials=...) carries over inherited api_key even when replacing with credentials provider; AccessTokenAuth short-circuits`.
