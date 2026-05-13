---
title: "LiteLLM Ghost Models with Multiple Workers — Redis Pub/Sub Cache Invalidation Failure"
description: "Fix LiteLLM proxy where deleted models remain available on some workers after deletion via /model/delete API Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Deleted models persist in other workers' local cache when running LiteLLM with --num_workers > 1"
common_causes:
  - "Multi-worker LiteLLM deployments using Redis cache experience ghost models — models deleted via API continue to serve requests on some workers because Redis Pub/Sub doesn't invalidate local in-memory caches across all workers. This causes inconsistent behavior and stale model serving."
  - "LiteLLM issue #27852 reports that with --num_workers 4 and Redis cache, deleting a model added via /model/new API does not invalidate the local in-memory cache of other workers. Ghost models continue serving requests, creating inconsistent API behavior."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM model routing fails after hot reload"
  - "LiteLLM Redis cache key collision"
updated: "2026-05-13"
published_at: "2026-05-13T18:13:17.420Z"
updated_at: "2026-05-13T18:13:17.420Z"
---

## What this error means

`Deleted models persist in other workers' local cache when running LiteLLM with --num_workers > 1` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy where deleted models remain available on some workers after deletion via /model/delete api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM issue #27852 reports that with --num_workers 4 and Redis cache, deleting a model added via /model/new API does not invalidate the local in-memory cache of other workers. Ghost models continue serving requests, creating inconsistent API behavior.

## Common causes

- Multi-worker LiteLLM deployments using Redis cache experience ghost models — models deleted via API continue to serve requests on some workers because Redis Pub/Sub doesn't invalidate local in-memory caches across all workers. This causes inconsistent behavior and stale model serving.
- LiteLLM issue #27852 reports that with --num_workers 4 and Redis cache, deleting a model added via /model/new API does not invalidate the local in-memory cache of other workers. Ghost models continue serving requests, creating inconsistent API behavior.

## Quick fixes

1. Confirm the exact error signature matches `Deleted models persist in other workers' local cache when running LiteLLM with --num_workers > 1`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/BerriAI/litellm/issues/27852

Evidence note: LiteLLM issue #27852 reports that with --num_workers 4 and Redis cache, deleting a model added via /model/new API does not invalidate the local in-memory cache of other workers. Ghost models continue serving requests, creating inconsistent API behavior.

## Related errors

- LiteLLM model routing fails after hot reload
- LiteLLM Redis cache key collision

## FAQ

### What should I check first?

Start with the exact `Deleted models persist in other workers' local cache when running LiteLLM with --num_workers > 1` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Deleted models persist in other workers' local cache when running LiteLLM with --num_workers > 1`.
