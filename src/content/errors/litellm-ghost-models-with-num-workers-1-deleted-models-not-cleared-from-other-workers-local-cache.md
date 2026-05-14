---
title: "LiteLLM Ghost Models Persist After Deletion When Using Multiple Workers"
description: "Fix LiteLLM ghost models not being cleared when using --num_workers > 1 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Ghost models with --num_workers > 1: Deleted models not cleared from other workers' local cache"
common_causes:
  - "When running LiteLLM with --num_workers > 1, deleted models are not cleared from other workers' local cache due to a Redis Pub/Sub sync issue. This creates 'ghost models' that appear in model listings but fail when called, confusing users and breaking deployments."
  - "Bug: with --num_workers > 1, Redis Pub/Sub sync issue means deleted models persist as ghost entries in other workers' local cache. Models appear in listings but fail on invocation."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM model discovery inconsistency"
  - "LiteLLM Redis Pub/Sub sync failure"
  - "LiteLLM multi-worker deployment issues"
updated: "2026-05-14"
published_at: "2026-05-14T17:13:20.396Z"
updated_at: "2026-05-14T17:13:20.396Z"
---

## What this error means

`Ghost models with --num_workers > 1: Deleted models not cleared from other workers' local cache` is a LiteLLM failure pattern reported for developers trying to fix litellm ghost models not being cleared when using --num_workers > 1. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug: with --num_workers > 1, Redis Pub/Sub sync issue means deleted models persist as ghost entries in other workers' local cache. Models appear in listings but fail on invocation.

## Common causes

- When running LiteLLM with --num_workers > 1, deleted models are not cleared from other workers' local cache due to a Redis Pub/Sub sync issue. This creates 'ghost models' that appear in model listings but fail when called, confusing users and breaking deployments.
- Bug: with --num_workers > 1, Redis Pub/Sub sync issue means deleted models persist as ghost entries in other workers' local cache. Models appear in listings but fail on invocation.

## Quick fixes

1. Confirm the exact error signature matches `Ghost models with --num_workers > 1: Deleted models not cleared from other workers' local cache`.
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

Evidence note: Bug: with --num_workers > 1, Redis Pub/Sub sync issue means deleted models persist as ghost entries in other workers' local cache. Models appear in listings but fail on invocation.

## Related errors

- LiteLLM model discovery inconsistency
- LiteLLM Redis Pub/Sub sync failure
- LiteLLM multi-worker deployment issues

## FAQ

### What should I check first?

Start with the exact `Ghost models with --num_workers > 1: Deleted models not cleared from other workers' local cache` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ghost models with --num_workers > 1: Deleted models not cleared from other workers' local cache`.
