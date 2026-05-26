---
title: "Docker rootless with gvisor-tap-vsock blocks container access to AWS IMDS endpoint"
description: "Resolve Docker rootless networking change breaking EC2 instance metadata service access in CI/CD runners Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Connection refused — curl to 169.264.169.254 fails, nmap returns no open ports in containers running rootless Docker with gvisor-tap-vsock driver (v29.5.0+)"
common_causes:
  - "GitHub moby/moby#52694 — new default network driver gvisor-tap-vsock in Docker 29.5.0 blocks AWS IMDS access. Affected: containers needing IAM roles. Workaround: use slirp4netns instead. Critical for self-hosted GitHub Actions runners, CI/CD pipelines on EC2/EKS."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "Docker"
updated: "2026-05-26"
published_at: "2026-05-26T05:43:16.009Z"
updated_at: "2026-05-26T05:43:16.009Z"
---

## What this error means

`Connection refused — curl to 169.264.169.254 fails, nmap returns no open ports in containers running rootless Docker with gvisor-tap-vsock driver (v29.5.0+)` is a Docker failure pattern reported for developers trying to resolve docker rootless networking change breaking ec2 instance metadata service access in ci/cd runners. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub moby/moby#52694 — new default network driver gvisor-tap-vsock in Docker 29.5.0 blocks AWS IMDS access. Affected: containers needing IAM roles. Workaround: use slirp4netns instead. Critical for self-hosted GitHub Actions runners, CI/CD pipelines on EC2/EKS.

## Common causes

- GitHub moby/moby#52694 — new default network driver gvisor-tap-vsock in Docker 29.5.0 blocks AWS IMDS access. Affected: containers needing IAM roles. Workaround: use slirp4netns instead. Critical for self-hosted GitHub Actions runners, CI/CD pipelines on EC2/EKS.

## Quick fixes

1. Confirm the exact error signature matches `Connection refused — curl to 169.264.169.254 fails, nmap returns no open ports in containers running rootless Docker with gvisor-tap-vsock driver (v29.5.0+)`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://github.com/moby/moby/issues/52694

Evidence note: GitHub moby/moby#52694 — new default network driver gvisor-tap-vsock in Docker 29.5.0 blocks AWS IMDS access. Affected: containers needing IAM roles. Workaround: use slirp4netns instead. Critical for self-hosted GitHub Actions runners, CI/CD pipelines on EC2/EKS.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Connection refused — curl to 169.264.169.254 fails, nmap returns no open ports in containers running rootless Docker with gvisor-tap-vsock driver (v29.5.0+)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Connection refused — curl to 169.264.169.254 fails, nmap returns no open ports in containers running rootless Docker with gvisor-tap-vsock driver (v29.5.0+)`.
