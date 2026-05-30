---
title: "LiteLLM O(n²) json.loads retry blocks event loop killing liveness probes"
description: "Fix LiteLLM proxy event loop blocking caused by quadratic JSON parsing retry logic affecting deployment availability Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "O(n²) json.loads retry in handle_accumulated_json_chunk blocks event loop, kills liveness probes"
common_causes:
  - "GitHub Issue #26181 in BerriAI/litellm opened Apr 22, 2026. Performance bug causing k8s liveness probe failures. Affects self-hosted LiteLLM deployments in production. Strong infrastructure/commercial value as it causes service outages."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-05-30"
published_at: "2026-05-30T20:43:29.364Z"
updated_at: "2026-05-30T20:43:29.364Z"
---

## What this error means

`O(n²) json.loads retry in handle_accumulated_json_chunk blocks event loop, kills liveness probes` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy event loop blocking caused by quadratic json parsing retry logic affecting deployment availability. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #26181 in BerriAI/litellm opened Apr 22, 2026. Performance bug causing k8s liveness probe failures. Affects self-hosted LiteLLM deployments in production. Strong infrastructure/commercial value as it causes service outages.

## Common causes

- GitHub Issue #26181 in BerriAI/litellm opened Apr 22, 2026. Performance bug causing k8s liveness probe failures. Affects self-hosted LiteLLM deployments in production. Strong infrastructure/commercial value as it causes service outages.

## Quick fixes

1. Confirm the exact error signature matches `O(n²) json.loads retry in handle_accumulated_json_chunk blocks event loop, kills liveness probes`.
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

- https://github.com/BerriAI/litellm/issues/26181

Evidence note: GitHub Issue #26181 in BerriAI/litellm opened Apr 22, 2026. Performance bug causing k8s liveness probe failures. Affects self-hosted LiteLLM deployments in production. Strong infrastructure/commercial value as it causes service outages.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `O(n²) json.loads retry in handle_accumulated_json_chunk blocks event loop, kills liveness probes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `O(n²) json.loads retry in handle_accumulated_json_chunk blocks event loop, kills liveness probes`.
