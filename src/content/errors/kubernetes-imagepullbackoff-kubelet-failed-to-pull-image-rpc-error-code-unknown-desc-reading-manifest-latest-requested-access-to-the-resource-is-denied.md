---
title: "Kubernetes ImagePullBackOff — unable to pull container image from private registry"
description: "Fix Kubernetes ImagePullBackOff errors preventing pod startup due to image pull/auth/tag issues from container registries including Docker Hub rate limits. Includes evidence for Kubernetes troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes"
error_signature: "ImagePullBackOff — kubelet: Failed to pull image — rpc error: code = Unknown desc = reading manifest latest requested access to the resource is denied"
common_causes:
  - "Confirmed from multiple sources including PerfectScale guide and Komodor blog (2026). Core Kubernetes error blocking production deployments. ImagePullBackOff causes cascading failures in CI/CD pipelines affecting paid enterprise teams. Related to ErrImagePull. Covers private registry auth, invalid names, Docker Hub rate limits, and network issues. Category: Cloud Platforms per AWS/GCP/Azure/K8s always mapping."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Cloud Platforms"
updated: "2026-06-01"
published_at: "2026-06-01T20:44:27.806Z"
updated_at: "2026-06-01T20:44:27.806Z"
---

## What this error means

`ImagePullBackOff — kubelet: Failed to pull image — rpc error: code = Unknown desc = reading manifest latest requested access to the resource is denied` is a Kubernetes failure pattern reported for developers trying to fix kubernetes imagepullbackoff errors preventing pod startup due to image pull/auth/tag issues from container registries including docker hub rate limits.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Confirmed from multiple sources including PerfectScale guide and Komodor blog (2026). Core Kubernetes error blocking production deployments. ImagePullBackOff causes cascading failures in CI/CD pipelines affecting paid enterprise teams. Related to ErrImagePull. Covers private registry auth, invalid names, Docker Hub rate limits, and network issues. Category: Cloud Platforms per AWS/GCP/Azure/K8s always mapping.

## Common causes

- Confirmed from multiple sources including PerfectScale guide and Komodor blog (2026). Core Kubernetes error blocking production deployments. ImagePullBackOff causes cascading failures in CI/CD pipelines affecting paid enterprise teams. Related to ErrImagePull. Covers private registry auth, invalid names, Docker Hub rate limits, and network issues. Category: Cloud Platforms per AWS/GCP/Azure/K8s always mapping.

## Quick fixes

1. Confirm the exact error signature matches `ImagePullBackOff — kubelet: Failed to pull image — rpc error: code = Unknown desc = reading manifest latest requested access to the resource is denied`.
2. Check the Kubernetes account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://www.perfectscale.io/blog/crashloopbackoff-kubernetes
- https://komodor.com/learn/how-to-fix-crashloopbackoff-kubernetes-error
- https://www.dash0.com/guides/kubernetes-imagepullbackoff

Evidence note: Confirmed from multiple sources including PerfectScale guide and Komodor blog (2026). Core Kubernetes error blocking production deployments. ImagePullBackOff causes cascading failures in CI/CD pipelines affecting paid enterprise teams. Related to ErrImagePull. Covers private registry auth, invalid names, Docker Hub rate limits, and network issues. Category: Cloud Platforms per AWS/GCP/Azure/K8s always mapping.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `ImagePullBackOff — kubelet: Failed to pull image — rpc error: code = Unknown desc = reading manifest latest requested access to the resource is denied` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ImagePullBackOff — kubelet: Failed to pull image — rpc error: code = Unknown desc = reading manifest latest requested access to the resource is denied`.
