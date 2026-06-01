---
title: "GKE Pod CrashLoopBackOff With Context Deadline Exceeded Exit Code 128: kubelet Container Creation Fails Silently"
description: "Debug GKE pods stuck in CrashLoopBackOff with exit code 128 and 'context deadline exceeded' — kubelet unable to create containerd shim tasks silently Includes evidence for Kubernetes troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes"
error_signature: "Reason: CrashLoopBackOff | Last State: Terminated Reason: StartError | failed to create containerd task: failed to create shim task: context deadline exceeded: unknown | Exit Code: 128"
common_causes:
  - "Source: Google Kubernetes Engine documentation (GKE troubleshooting guide). Distinct pattern: pods show Restart Count >3000 but reason is StartError, not ApplicationCrash. Exit code 128 suggests container runtime issue rather than application bug. 'context deadline exceeded' indicates timeout during container creation, not during execution. High commercial value for teams running production workloads on GCP."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`Reason: CrashLoopBackOff | Last State: Terminated Reason: StartError | failed to create containerd task: failed to create shim task: context deadline exceeded: unknown | Exit Code: 128` is a Kubernetes failure pattern reported for developers trying to debug gke pods stuck in crashloopbackoff with exit code 128 and 'context deadline exceeded' — kubelet unable to create containerd shim tasks silently. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Google Kubernetes Engine documentation (GKE troubleshooting guide). Distinct pattern: pods show Restart Count >3000 but reason is StartError, not ApplicationCrash. Exit code 128 suggests container runtime issue rather than application bug. 'context deadline exceeded' indicates timeout during container creation, not during execution. High commercial value for teams running production workloads on GCP.

## Common causes

- Source: Google Kubernetes Engine documentation (GKE troubleshooting guide). Distinct pattern: pods show Restart Count >3000 but reason is StartError, not ApplicationCrash. Exit code 128 suggests container runtime issue rather than application bug. 'context deadline exceeded' indicates timeout during container creation, not during execution. High commercial value for teams running production workloads on GCP.

## Quick fixes

1. Confirm the exact error signature matches `Reason: CrashLoopBackOff | Last State: Terminated Reason: StartError | failed to create containerd task: failed to create shim task: context deadline exceeded: unknown | Exit Code: 128`.
2. Check the Kubernetes account, local tool state, and provider configuration involved in the failing workflow.
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

- https://docs.cloud.google.com/kubernetes-engine/docs/troubleshooting/crashloopbackoff-events

Evidence note: Source: Google Kubernetes Engine documentation (GKE troubleshooting guide). Distinct pattern: pods show Restart Count >3000 but reason is StartError, not ApplicationCrash. Exit code 128 suggests container runtime issue rather than application bug. 'context deadline exceeded' indicates timeout during container creation, not during execution. High commercial value for teams running production workloads on GCP.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `Reason: CrashLoopBackOff | Last State: Terminated Reason: StartError | failed to create containerd task: failed to create shim task: context deadline exceeded: unknown | Exit Code: 128` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Reason: CrashLoopBackOff | Last State: Terminated Reason: StartError | failed to create containerd task: failed to create shim task: context deadline exceeded: unknown | Exit Code: 128`.
