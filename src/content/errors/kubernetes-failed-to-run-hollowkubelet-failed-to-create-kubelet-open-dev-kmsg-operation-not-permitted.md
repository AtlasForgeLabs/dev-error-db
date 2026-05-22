---
title: "Kubernetes Kubelet Fails with /dev/kmsg Operation Not Permitted on CI Runners"
description: "Bypass kubelet OOM watcher requiring /dev/kmsg access on restricted environments like GitHub Actions CI runners where /dev/kmsg is blocked by sandbox Includes evidence for Kubernetes troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes"
error_signature: "Failed to run HollowKubelet: failed to create kubelet: open /dev/kmsg: operation not permitted"
common_causes:
  - "nanokube Issue #4 (Mar 15, 2026): Kubelet's OOM watcher needs /dev/kmsg which GitHub Actions runners block due to security sandbox. KubeletInUserNamespace feature gate doesn't help since not running in user namespace. Requires patching upstream check or making OOM watcher optional at project level. Blocks E2E testing on GHA runners."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-22"
published_at: "2026-05-22T23:39:48.815Z"
updated_at: "2026-05-22T23:39:48.815Z"
---

## What this error means

`Failed to run HollowKubelet: failed to create kubelet: open /dev/kmsg: operation not permitted` is a Kubernetes failure pattern reported for developers trying to bypass kubelet oom watcher requiring /dev/kmsg access on restricted environments like github actions ci runners where /dev/kmsg is blocked by sandbox. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

nanokube Issue #4 (Mar 15, 2026): Kubelet's OOM watcher needs /dev/kmsg which GitHub Actions runners block due to security sandbox. KubeletInUserNamespace feature gate doesn't help since not running in user namespace. Requires patching upstream check or making OOM watcher optional at project level. Blocks E2E testing on GHA runners.

## Common causes

- nanokube Issue #4 (Mar 15, 2026): Kubelet's OOM watcher needs /dev/kmsg which GitHub Actions runners block due to security sandbox. KubeletInUserNamespace feature gate doesn't help since not running in user namespace. Requires patching upstream check or making OOM watcher optional at project level. Blocks E2E testing on GHA runners.

## Quick fixes

1. Confirm the exact error signature matches `Failed to run HollowKubelet: failed to create kubelet: open /dev/kmsg: operation not permitted`.
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

- https://github.com/cnuss/nanokube/issues/4

Evidence note: nanokube Issue #4 (Mar 15, 2026): Kubelet's OOM watcher needs /dev/kmsg which GitHub Actions runners block due to security sandbox. KubeletInUserNamespace feature gate doesn't help since not running in user namespace. Requires patching upstream check or making OOM watcher optional at project level. Blocks E2E testing on GHA runners.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `Failed to run HollowKubelet: failed to create kubelet: open /dev/kmsg: operation not permitted` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to run HollowKubelet: failed to create kubelet: open /dev/kmsg: operation not permitted`.
