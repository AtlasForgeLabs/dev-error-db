---
title: "LiteLLM Proxy Authentication Failed — 'failed-to-connect-to-db' Bypass Vulnerability (CVE-2026-42208)"
description: "Understand and mitigate LiteLLM Proxy auth bypass via SQL injection where DB connection errors grant PROXY_ADMIN privileges without valid keys Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Authentication failed / failed-to-connect-to-db / PrismaError pool timeout connection error"
common_causes:
  - "CVE-2026-42208: Pre-auth SQL injection in LiteLLM Proxy's key verification path. When PrismaDB returns any PrismaError, auth_exception_handler grants PROXY_ADMIN access with key='failed-to-connect-to-db'. Actively exploited in the wild. Developer-facing: teams running LiteLLM Proxy need to understand auth failure modes and upgrade immediately. Active exploitation evidence discovered 36 hours post-disclosure. Category: LiteLLM per approved list."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-06-03"
published_at: "2026-06-03T01:44:31.462Z"
updated_at: "2026-06-03T01:44:31.462Z"
---

## What this error means

`Authentication failed / failed-to-connect-to-db / PrismaError pool timeout connection error` is a LiteLLM failure pattern reported for developers trying to understand and mitigate litellm proxy auth bypass via sql injection where db connection errors grant proxy_admin privileges without valid keys. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

CVE-2026-42208: Pre-auth SQL injection in LiteLLM Proxy's key verification path. When PrismaDB returns any PrismaError, auth_exception_handler grants PROXY_ADMIN access with key='failed-to-connect-to-db'. Actively exploited in the wild. Developer-facing: teams running LiteLLM Proxy need to understand auth failure modes and upgrade immediately. Active exploitation evidence discovered 36 hours post-disclosure. Category: LiteLLM per approved list.

## Common causes

- CVE-2026-42208: Pre-auth SQL injection in LiteLLM Proxy's key verification path. When PrismaDB returns any PrismaError, auth_exception_handler grants PROXY_ADMIN access with key='failed-to-connect-to-db'. Actively exploited in the wild. Developer-facing: teams running LiteLLM Proxy need to understand auth failure modes and upgrade immediately. Active exploitation evidence discovered 36 hours post-disclosure. Category: LiteLLM per approved list.

## Quick fixes

1. Confirm the exact error signature matches `Authentication failed / failed-to-connect-to-db / PrismaError pool timeout connection error`.
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

- https://docs.litellm.ai/blog/cve-2026-42208-litellm-proxy-sql-injection
- https://bishopfox.com/blog/cve-2026-42208-pre-authentication-sql-injection-in-litellm-proxy
- https://www.sysdig.com/blog/cve-2026-42208-targeted-sql-injection-against-litellms-authentication-path-discovered-36-hours-following-vulnerability-disclosure
- https://starlabs.sg/blog/2026/05-race-against-the-patch-the-evolution-of-four-exploit-chains-in-litellm

Evidence note: CVE-2026-42208: Pre-auth SQL injection in LiteLLM Proxy's key verification path. When PrismaDB returns any PrismaError, auth_exception_handler grants PROXY_ADMIN access with key='failed-to-connect-to-db'. Actively exploited in the wild. Developer-facing: teams running LiteLLM Proxy need to understand auth failure modes and upgrade immediately. Active exploitation evidence discovered 36 hours post-disclosure. Category: LiteLLM per approved list.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Authentication failed / failed-to-connect-to-db / PrismaError pool timeout connection error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Authentication failed / failed-to-connect-to-db / PrismaError pool timeout connection error`.
