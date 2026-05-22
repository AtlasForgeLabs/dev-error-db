---
title: "GitHub Actions Docker Manifest Generation Fails with mount Overlay Permission Denied"
description: "Fix rootless overlay mount failures in GitHub Actions CI causing docker-in-docker manifest generation to crash with permission denied errors Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "mount /home/runner/.local/share/containers/storage/overlay:/home/runner/.local/share/containers/storage/overlay, flags: 0x1000: permission denied — docker-in-docker manifest generation fails in GitHub Actions runners"
common_causes:
  - "GitHub PR #104 in devcontainers/features documents docker-in-docker failing in ubuntu 26.04 on GitHub Actions runners due to rootless overlay mount permission denied. Fix forces vfs storage driver to work around the limitation. Error is reproducible in CI pipelines and affects any workflow using dockerd within GH Actions. The root cause is changes in Ubuntu 26.04 kernel handling of unprivileged overlay mounts. Category mapping: Docker (container runtime error specifically triggered in CI environment)."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Docker"
updated: "2026-05-22"
published_at: "2026-05-22T21:39:48.605Z"
updated_at: "2026-05-22T21:39:48.605Z"
---

## What this error means

`mount /home/runner/.local/share/containers/storage/overlay:/home/runner/.local/share/containers/storage/overlay, flags: 0x1000: permission denied — docker-in-docker manifest generation fails in GitHub Actions runners` is a Docker failure pattern reported for developers trying to fix rootless overlay mount failures in github actions ci causing docker-in-docker manifest generation to crash with permission denied errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub PR #104 in devcontainers/features documents docker-in-docker failing in ubuntu 26.04 on GitHub Actions runners due to rootless overlay mount permission denied. Fix forces vfs storage driver to work around the limitation. Error is reproducible in CI pipelines and affects any workflow using dockerd within GH Actions. The root cause is changes in Ubuntu 26.04 kernel handling of unprivileged overlay mounts. Category mapping: Docker (container runtime error specifically triggered in CI environment).

## Common causes

- GitHub PR #104 in devcontainers/features documents docker-in-docker failing in ubuntu 26.04 on GitHub Actions runners due to rootless overlay mount permission denied. Fix forces vfs storage driver to work around the limitation. Error is reproducible in CI pipelines and affects any workflow using dockerd within GH Actions. The root cause is changes in Ubuntu 26.04 kernel handling of unprivileged overlay mounts. Category mapping: Docker (container runtime error specifically triggered in CI environment).

## Quick fixes

1. Confirm the exact error signature matches `mount /home/runner/.local/share/containers/storage/overlay:/home/runner/.local/share/containers/storage/overlay, flags: 0x1000: permission denied — docker-in-docker manifest generation fails in GitHub Actions runners`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/devcontainers/features/pull/1634

Evidence note: GitHub PR #104 in devcontainers/features documents docker-in-docker failing in ubuntu 26.04 on GitHub Actions runners due to rootless overlay mount permission denied. Fix forces vfs storage driver to work around the limitation. Error is reproducible in CI pipelines and affects any workflow using dockerd within GH Actions. The root cause is changes in Ubuntu 26.04 kernel handling of unprivileged overlay mounts. Category mapping: Docker (container runtime error specifically triggered in CI environment).

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `mount /home/runner/.local/share/containers/storage/overlay:/home/runner/.local/share/containers/storage/overlay, flags: 0x1000: permission denied — docker-in-docker manifest generation fails in GitHub Actions runners` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `mount /home/runner/.local/share/containers/storage/overlay:/home/runner/.local/share/containers/storage/overlay, flags: 0x1000: permission denied — docker-in-docker manifest generation fails in GitHub Actions runners`.
