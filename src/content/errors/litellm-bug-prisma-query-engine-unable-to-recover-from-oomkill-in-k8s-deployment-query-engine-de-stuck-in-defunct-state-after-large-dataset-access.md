---
title: "LiteLLM Proxy K8s Deployment OOMKill on Prisma Query Engine During Usage Stats Query"
description: "LiteLLM proxy admin running on Kubernetes finds that querying Usage page with large datasets triggers OOMKill on Prisma Query Engine, leaving proxy alive but unable to communicate with database Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "[Bug]: Prisma Query Engine unable to recover from OOMKill in K8s deployment — query-engine-de stuck in defunct state after large dataset access"
common_causes:
  - "GitHub issue BerriAI/litellm#20697 (updated 2026-05-17, stale label). Production-infrastructure-relevant: K8s cluster operator managing LiteLLM proxy experiences complete DB connection loss when viewing usage stats. High commercial value: LiteLLM proxy deployments are common in teams managing multimodel billing. Category: LiteLLM (exact match). Infrastructure angle gives good long-tail search volume."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T01:13:51.770Z"
updated_at: "2026-05-17T01:13:51.770Z"
---

## What this error means

`[Bug]: Prisma Query Engine unable to recover from OOMKill in K8s deployment — query-engine-de stuck in defunct state after large dataset access` is a LiteLLM failure pattern reported for developers trying to litellm proxy admin running on kubernetes finds that querying usage page with large datasets triggers oomkill on prisma query engine, leaving proxy alive but unable to communicate with database. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#20697 (updated 2026-05-17, stale label). Production-infrastructure-relevant: K8s cluster operator managing LiteLLM proxy experiences complete DB connection loss when viewing usage stats. High commercial value: LiteLLM proxy deployments are common in teams managing multimodel billing. Category: LiteLLM (exact match). Infrastructure angle gives good long-tail search volume.

## Common causes

- GitHub issue BerriAI/litellm#20697 (updated 2026-05-17, stale label). Production-infrastructure-relevant: K8s cluster operator managing LiteLLM proxy experiences complete DB connection loss when viewing usage stats. High commercial value: LiteLLM proxy deployments are common in teams managing multimodel billing. Category: LiteLLM (exact match). Infrastructure angle gives good long-tail search volume.

## Quick fixes

1. Confirm the exact error signature matches `[Bug]: Prisma Query Engine unable to recover from OOMKill in K8s deployment — query-engine-de stuck in defunct state after large dataset access`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/BerriAI/litellm/issues/20697

Evidence note: GitHub issue BerriAI/litellm#20697 (updated 2026-05-17, stale label). Production-infrastructure-relevant: K8s cluster operator managing LiteLLM proxy experiences complete DB connection loss when viewing usage stats. High commercial value: LiteLLM proxy deployments are common in teams managing multimodel billing. Category: LiteLLM (exact match). Infrastructure angle gives good long-tail search volume.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `[Bug]: Prisma Query Engine unable to recover from OOMKill in K8s deployment — query-engine-de stuck in defunct state after large dataset access` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Bug]: Prisma Query Engine unable to recover from OOMKill in K8s deployment — query-engine-de stuck in defunct state after large dataset access`.
