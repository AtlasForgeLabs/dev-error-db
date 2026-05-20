---
title: "EKS Kubernetes ImagePullBackOff caused by ECR registry authentication failure"
description: "Developer deploying to EKS on AWS gets ImagePullBackOff because kubelet cannot authenticate to private ECR registry; needs correct aws-iam-authenticator or IRSA setup for pod-to-ECR pulls Includes evidence for Kubernetes / AWS ECR troubleshooting demand."
category: "Cloud Platforms"
technology: "Kubernetes / AWS ECR"
error_signature: "ImagePullBackOff — Failed to pull image: rpc error: code = Unknown desc = failed to pull and unpack image: unauthorized: authentication required"
common_causes:
  - "Source: https://github.com/pramodhkumars7/ai-jenkins-pipeline-triage/issues/18 (created 2026-05-18). Root cause confirmed: kubelet lacks IAM role credentials to call ECR GetAuthorizationToken. Common in CI/CD pipelines where pipeline-generated images land on K8s pods without proper IRSA or node-role trust policies. Affects production deploys for teams using managed Kubernetes services."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-20"
published_at: "2026-05-20T02:38:18.417Z"
updated_at: "2026-05-20T02:38:18.417Z"
---

## What this error means

`ImagePullBackOff — Failed to pull image: rpc error: code = Unknown desc = failed to pull and unpack image: unauthorized: authentication required` is a Kubernetes / AWS ECR failure pattern reported for developers trying to developer deploying to eks on aws gets imagepullbackoff because kubelet cannot authenticate to private ecr registry; needs correct aws-iam-authenticator or irsa setup for pod-to-ecr pulls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/pramodhkumars7/ai-jenkins-pipeline-triage/issues/18 (created 2026-05-18). Root cause confirmed: kubelet lacks IAM role credentials to call ECR GetAuthorizationToken. Common in CI/CD pipelines where pipeline-generated images land on K8s pods without proper IRSA or node-role trust policies. Affects production deploys for teams using managed Kubernetes services.

## Common causes

- Source: https://github.com/pramodhkumars7/ai-jenkins-pipeline-triage/issues/18 (created 2026-05-18). Root cause confirmed: kubelet lacks IAM role credentials to call ECR GetAuthorizationToken. Common in CI/CD pipelines where pipeline-generated images land on K8s pods without proper IRSA or node-role trust policies. Affects production deploys for teams using managed Kubernetes services.

## Quick fixes

1. Confirm the exact error signature matches `ImagePullBackOff — Failed to pull image: rpc error: code = Unknown desc = failed to pull and unpack image: unauthorized: authentication required`.
2. Check the Kubernetes / AWS ECR account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/pramodhkumars7/ai-jenkins-pipeline-triage/issues/18

Evidence note: Source: https://github.com/pramodhkumars7/ai-jenkins-pipeline-triage/issues/18 (created 2026-05-18). Root cause confirmed: kubelet lacks IAM role credentials to call ECR GetAuthorizationToken. Common in CI/CD pipelines where pipeline-generated images land on K8s pods without proper IRSA or node-role trust policies. Affects production deploys for teams using managed Kubernetes services.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `ImagePullBackOff — Failed to pull image: rpc error: code = Unknown desc = failed to pull and unpack image: unauthorized: authentication required` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Kubernetes / AWS ECR workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ImagePullBackOff — Failed to pull image: rpc error: code = Unknown desc = failed to pull and unpack image: unauthorized: authentication required`.
