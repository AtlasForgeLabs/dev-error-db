---
title: "LiteLLM Proxy Admin Privilege Escalation via Prisma Pool Exhaustion (auth_exception_handler.py)"
description: "Fix LiteLLM proxy vulnerability where database connection pool exhaustion causes fallback authentication to grant PROXY_ADMIN privileges without any valid virtual key Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "PrismaError: pool timeout / connection error — auth_exception_handler falls back to PROXY_ADMIN token when database unavailable"
common_causes:
  - "Security/availability research from STAR Labs blog May 2026. When PrismaDB encounters pool timeout/connection errors, the auth_exception_handler silently grants PROXY_ADMIN role with hardcoded 'failed-to-connect-to-db' token. Affects LiteLLM proxy deployments running on Docker. Combines availability error (pool timeout) with privilege escalation risk. Category: LiteLLM (exact match)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T12:44:24.638Z"
updated_at: "2026-05-31T12:44:24.638Z"
---

## What this error means

`PrismaError: pool timeout / connection error — auth_exception_handler falls back to PROXY_ADMIN token when database unavailable` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy vulnerability where database connection pool exhaustion causes fallback authentication to grant proxy_admin privileges without any valid virtual key. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Security/availability research from STAR Labs blog May 2026. When PrismaDB encounters pool timeout/connection errors, the auth_exception_handler silently grants PROXY_ADMIN role with hardcoded 'failed-to-connect-to-db' token. Affects LiteLLM proxy deployments running on Docker. Combines availability error (pool timeout) with privilege escalation risk. Category: LiteLLM (exact match).

## Common causes

- Security/availability research from STAR Labs blog May 2026. When PrismaDB encounters pool timeout/connection errors, the auth_exception_handler silently grants PROXY_ADMIN role with hardcoded 'failed-to-connect-to-db' token. Affects LiteLLM proxy deployments running on Docker. Combines availability error (pool timeout) with privilege escalation risk. Category: LiteLLM (exact match).

## Quick fixes

1. Confirm the exact error signature matches `PrismaError: pool timeout / connection error — auth_exception_handler falls back to PROXY_ADMIN token when database unavailable`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://starlabs.sg/blog/2026/05-race-against-the-patch-the-evolution-of-four-exploit-chains-in-litellm

Evidence note: Security/availability research from STAR Labs blog May 2026. When PrismaDB encounters pool timeout/connection errors, the auth_exception_handler silently grants PROXY_ADMIN role with hardcoded 'failed-to-connect-to-db' token. Affects LiteLLM proxy deployments running on Docker. Combines availability error (pool timeout) with privilege escalation risk. Category: LiteLLM (exact match).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `PrismaError: pool timeout / connection error — auth_exception_handler falls back to PROXY_ADMIN token when database unavailable` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `PrismaError: pool timeout / connection error — auth_exception_handler falls back to PROXY_ADMIN token when database unavailable`.
