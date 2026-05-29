---
title: "Kubernetes MemoryQoS Enabled Causes Excessive OOM Kills on Equal Request-Limit Containers"
description: "Investigate Kubernetes MemoryQoS capability causing unexpected OOM kills on containers with equal memory requests and limits, leading to CrashLoopBackOff pod cycles Includes evidence for Kubernetes troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes"
error_signature: "CrashLoopBackOff + OOM — pods running on nodes where MemoryQoS is enabled crash with OOM while identical pods on non-MemoryQoS nodes run fine"
common_causes:
  - "Issue #137880 on kubernetes/kubernetes. MemoryQoS feature gate triggers increased OOM kills on specific scheduling scenarios. Pods crash identically on MemoryQoS-enabled nodes but survive on disabled nodes. Direct production cluster stability impact. Enterprise Kubernetes environments widely affected."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-29"
published_at: "2026-05-29T17:43:26.857Z"
updated_at: "2026-05-29T17:43:26.857Z"
---

## What this error means

`CrashLoopBackOff + OOM — pods running on nodes where MemoryQoS is enabled crash with OOM while identical pods on non-MemoryQoS nodes run fine` is a Kubernetes failure pattern reported for developers trying to investigate kubernetes memoryqos capability causing unexpected oom kills on containers with equal memory requests and limits, leading to crashloopbackoff pod cycles. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #137880 on kubernetes/kubernetes. MemoryQoS feature gate triggers increased OOM kills on specific scheduling scenarios. Pods crash identically on MemoryQoS-enabled nodes but survive on disabled nodes. Direct production cluster stability impact. Enterprise Kubernetes environments widely affected.

## Common causes

- Issue #137880 on kubernetes/kubernetes. MemoryQoS feature gate triggers increased OOM kills on specific scheduling scenarios. Pods crash identically on MemoryQoS-enabled nodes but survive on disabled nodes. Direct production cluster stability impact. Enterprise Kubernetes environments widely affected.

## Quick fixes

1. Confirm the exact error signature matches `CrashLoopBackOff + OOM — pods running on nodes where MemoryQoS is enabled crash with OOM while identical pods on non-MemoryQoS nodes run fine`.
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

- https://github.com/kubernetes/kubernetes/issues/137880

Evidence note: Issue #137880 on kubernetes/kubernetes. MemoryQoS feature gate triggers increased OOM kills on specific scheduling scenarios. Pods crash identically on MemoryQoS-enabled nodes but survive on disabled nodes. Direct production cluster stability impact. Enterprise Kubernetes environments widely affected.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `CrashLoopBackOff + OOM — pods running on nodes where MemoryQoS is enabled crash with OOM while identical pods on non-MemoryQoS nodes run fine` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CrashLoopBackOff + OOM — pods running on nodes where MemoryQoS is enabled crash with OOM while identical pods on non-MemoryQoS nodes run fine`.
