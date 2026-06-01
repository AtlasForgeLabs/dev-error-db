---
title: "Kubernetes ImagePullBackOff Stuck Indefinitely When Image Pull Repeatedly Fails"
description: "Resolve pod stuck in ImagePullBackOff state when image pull keeps failing (network outage, registry auth expiry, quota exceeded) Includes evidence for Kubernetes troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes"
error_signature: "ImagePullBackOff stuck indefinitely — pod never transitions to Waiting/BackOff when image pull fails continuously"
common_causes:
  - "Issue #119891 on kubernetes/kubernetes: Pods in ImagePullBackOff get permanently stuck — never transition to BackOff phase when pull failures persist beyond initial period. Requires manual intervention (kubectl delete pod). Also: PR #127918 addresses related issue of not surfacing image pull errors in status message. Category mapping: K8s cluster management → Cloud Platforms."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Cloud Platforms"
updated: "2026-06-01"
published_at: "2026-06-01T14:44:27.164Z"
updated_at: "2026-06-01T14:44:27.164Z"
---

## What this error means

`ImagePullBackOff stuck indefinitely — pod never transitions to Waiting/BackOff when image pull fails continuously` is a Kubernetes failure pattern reported for developers trying to resolve pod stuck in imagepullbackoff state when image pull keeps failing (network outage, registry auth expiry, quota exceeded). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #119891 on kubernetes/kubernetes: Pods in ImagePullBackOff get permanently stuck — never transition to BackOff phase when pull failures persist beyond initial period. Requires manual intervention (kubectl delete pod). Also: PR #127918 addresses related issue of not surfacing image pull errors in status message. Category mapping: K8s cluster management → Cloud Platforms.

## Common causes

- Issue #119891 on kubernetes/kubernetes: Pods in ImagePullBackOff get permanently stuck — never transition to BackOff phase when pull failures persist beyond initial period. Requires manual intervention (kubectl delete pod). Also: PR #127918 addresses related issue of not surfacing image pull errors in status message. Category mapping: K8s cluster management → Cloud Platforms.

## Quick fixes

1. Confirm the exact error signature matches `ImagePullBackOff stuck indefinitely — pod never transitions to Waiting/BackOff when image pull fails continuously`.
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

- https://github.com/kubernetes/kubernetes/issues/119891
- https://github.com/kubernetes/kubernetes/pull/127918

Evidence note: Issue #119891 on kubernetes/kubernetes: Pods in ImagePullBackOff get permanently stuck — never transition to BackOff phase when pull failures persist beyond initial period. Requires manual intervention (kubectl delete pod). Also: PR #127918 addresses related issue of not surfacing image pull errors in status message. Category mapping: K8s cluster management → Cloud Platforms.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `ImagePullBackOff stuck indefinitely — pod never transitions to Waiting/BackOff when image pull fails continuously` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ImagePullBackOff stuck indefinitely — pod never transitions to Waiting/BackOff when image pull fails continuously`.
