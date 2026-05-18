---
title: "Docker daemon connection failure at unix socket path in GitLab CI/CD pipelines on Mac"
description: "Fix Docker daemon connection errors in GitLab Runner docker-autoscaler setups on cloud providers like Azure Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Cannot connect to the Docker daemon at http://internal.tunnel.invalid"
common_causes:
  - "GitLab runner issue (#37700) where docker-autoscaler in Azure fails to connect to Docker daemon. Instance reports 'ERROR: Failed to remove network for build' and 'Preparation failed: Cannot connect to the Docker daemon'. Affects CI/CD pipelines for teams running auto-scaling Docker runners."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-18"
published_at: "2026-05-18T13:37:13.117Z"
updated_at: "2026-05-18T13:37:13.117Z"
---

## What this error means

`Cannot connect to the Docker daemon at http://internal.tunnel.invalid` is a Docker failure pattern reported for developers trying to fix docker daemon connection errors in gitlab runner docker-autoscaler setups on cloud providers like azure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitLab runner issue (#37700) where docker-autoscaler in Azure fails to connect to Docker daemon. Instance reports 'ERROR: Failed to remove network for build' and 'Preparation failed: Cannot connect to the Docker daemon'. Affects CI/CD pipelines for teams running auto-scaling Docker runners.

## Common causes

- GitLab runner issue (#37700) where docker-autoscaler in Azure fails to connect to Docker daemon. Instance reports 'ERROR: Failed to remove network for build' and 'Preparation failed: Cannot connect to the Docker daemon'. Affects CI/CD pipelines for teams running auto-scaling Docker runners.

## Quick fixes

1. Confirm the exact error signature matches `Cannot connect to the Docker daemon at http://internal.tunnel.invalid`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://gitlab.com/gitlab-org/gitlab-runner/-/issues/37700

Evidence note: GitLab runner issue (#37700) where docker-autoscaler in Azure fails to connect to Docker daemon. Instance reports 'ERROR: Failed to remove network for build' and 'Preparation failed: Cannot connect to the Docker daemon'. Affects CI/CD pipelines for teams running auto-scaling Docker runners.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Cannot connect to the Docker daemon at http://internal.tunnel.invalid` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cannot connect to the Docker daemon at http://internal.tunnel.invalid`.
