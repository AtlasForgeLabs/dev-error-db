---
title: "LiteLLM Docker Start Fails for v1.84.0"
description: "Fix LiteLLM v1.84.0 Docker container failing to start Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Docker image ghcr.io/berriai/litellm:1.84.0 start failure in container logs"
common_causes:
  - "User reports LiteLLM Docker image v1.84.0 fails to start when pulled from ghcr.io. Error appears in container logs during startup. Blocks proxy deployment for paid teams. Category: LiteLLM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-16"
published_at: "2026-05-16T00:13:24.013Z"
updated_at: "2026-05-16T00:13:24.013Z"
---

## What this error means

`Docker image ghcr.io/berriai/litellm:1.84.0 start failure in container logs` is a LiteLLM failure pattern reported for developers trying to fix litellm v1.84.0 docker container failing to start. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

User reports LiteLLM Docker image v1.84.0 fails to start when pulled from ghcr.io. Error appears in container logs during startup. Blocks proxy deployment for paid teams. Category: LiteLLM.

## Common causes

- User reports LiteLLM Docker image v1.84.0 fails to start when pulled from ghcr.io. Error appears in container logs during startup. Blocks proxy deployment for paid teams. Category: LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `Docker image ghcr.io/berriai/litellm:1.84.0 start failure in container logs`.
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

- https://github.com/BerriAI/litellm/issues/28018

Evidence note: User reports LiteLLM Docker image v1.84.0 fails to start when pulled from ghcr.io. Error appears in container logs during startup. Blocks proxy deployment for paid teams. Category: LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Docker image ghcr.io/berriai/litellm:1.84.0 start failure in container logs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Docker image ghcr.io/berriai/litellm:1.84.0 start failure in container logs`.
