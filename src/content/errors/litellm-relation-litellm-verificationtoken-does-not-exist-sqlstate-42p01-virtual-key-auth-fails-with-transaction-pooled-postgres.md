---
title: "LiteLLM Virtual Key Auth Fails with PostgreSQL Relation Not Found in Transaction Pooling Mode"
description: "Fix LiteLLM virtual key authentication failure when using Neon/pgBouncer transaction pooling mode Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "relation \"LiteLLM_VerificationToken\" does not exist (SQLSTATE 42P01) — virtual-key auth fails with transaction-pooled Postgres"
common_causes:
  - "Issue #29093: DATABASE_URL pointing at transaction-pooled Postgres (Neon -pooler.* hostnames, PgBouncer in transaction mode) causes LiteLLM virtual-key auth to fail with missing relation error. LiteLLM schema hasn't been created in pooled connection's schema. Affects self-hosted LiteLLM proxy users running in modern cloud infrastructure."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T14:44:24.807Z"
updated_at: "2026-05-31T14:44:24.807Z"
---

## What this error means

`relation "LiteLLM_VerificationToken" does not exist (SQLSTATE 42P01) — virtual-key auth fails with transaction-pooled Postgres` is a LiteLLM failure pattern reported for developers trying to fix litellm virtual key authentication failure when using neon/pgbouncer transaction pooling mode. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #29093: DATABASE_URL pointing at transaction-pooled Postgres (Neon -pooler.* hostnames, PgBouncer in transaction mode) causes LiteLLM virtual-key auth to fail with missing relation error. LiteLLM schema hasn't been created in pooled connection's schema. Affects self-hosted LiteLLM proxy users running in modern cloud infrastructure.

## Common causes

- Issue #29093: DATABASE_URL pointing at transaction-pooled Postgres (Neon -pooler.* hostnames, PgBouncer in transaction mode) causes LiteLLM virtual-key auth to fail with missing relation error. LiteLLM schema hasn't been created in pooled connection's schema. Affects self-hosted LiteLLM proxy users running in modern cloud infrastructure.

## Quick fixes

1. Confirm the exact error signature matches `relation "LiteLLM_VerificationToken" does not exist (SQLSTATE 42P01) — virtual-key auth fails with transaction-pooled Postgres`.
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

- https://github.com/BerriAI/litellm/issues/29093

Evidence note: Issue #29093: DATABASE_URL pointing at transaction-pooled Postgres (Neon -pooler.* hostnames, PgBouncer in transaction mode) causes LiteLLM virtual-key auth to fail with missing relation error. LiteLLM schema hasn't been created in pooled connection's schema. Affects self-hosted LiteLLM proxy users running in modern cloud infrastructure.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `relation "LiteLLM_VerificationToken" does not exist (SQLSTATE 42P01) — virtual-key auth fails with transaction-pooled Postgres` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `relation "LiteLLM_VerificationToken" does not exist (SQLSTATE 42P01) — virtual-key auth fails with transaction-pooled Postgres`.
