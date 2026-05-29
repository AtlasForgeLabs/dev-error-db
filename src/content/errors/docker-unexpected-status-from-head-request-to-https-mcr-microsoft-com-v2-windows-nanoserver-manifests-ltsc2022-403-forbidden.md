---
title: "Docker MCR (Microsoft Container Registry) 403 Forbidden pulling Windows nanoserver images"
description: "Fix Docker unable to pull Windows base images from Microsoft Container Registry due to 403 access denied Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "unexpected status from HEAD request to https://mcr.microsoft.com/v2/windows/nanoserver/manifests/ltsc2022: 403 Forbidden"
common_causes:
  - "GitHub issue #52723 on moby/moby, opened 2026-05-29T10:04Z. Blocks Docker builds requiring Windows base images. Directly impacts Docker Desktop/Paid users and CI/CD pipelines using mcr.microsoft.com registries. Clear error signature with actionable troubleshooting. Category: Docker per approved mapping."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Docker"
updated: "2026-05-29"
published_at: "2026-05-29T11:43:26.136Z"
updated_at: "2026-05-29T11:43:26.136Z"
---

## What this error means

`unexpected status from HEAD request to https://mcr.microsoft.com/v2/windows/nanoserver/manifests/ltsc2022: 403 Forbidden` is a Docker failure pattern reported for developers trying to fix docker unable to pull windows base images from microsoft container registry due to 403 access denied. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #52723 on moby/moby, opened 2026-05-29T10:04Z. Blocks Docker builds requiring Windows base images. Directly impacts Docker Desktop/Paid users and CI/CD pipelines using mcr.microsoft.com registries. Clear error signature with actionable troubleshooting. Category: Docker per approved mapping.

## Common causes

- GitHub issue #52723 on moby/moby, opened 2026-05-29T10:04Z. Blocks Docker builds requiring Windows base images. Directly impacts Docker Desktop/Paid users and CI/CD pipelines using mcr.microsoft.com registries. Clear error signature with actionable troubleshooting. Category: Docker per approved mapping.

## Quick fixes

1. Confirm the exact error signature matches `unexpected status from HEAD request to https://mcr.microsoft.com/v2/windows/nanoserver/manifests/ltsc2022: 403 Forbidden`.
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

- https://github.com/moby/moby/issues/52723

Evidence note: GitHub issue #52723 on moby/moby, opened 2026-05-29T10:04Z. Blocks Docker builds requiring Windows base images. Directly impacts Docker Desktop/Paid users and CI/CD pipelines using mcr.microsoft.com registries. Clear error signature with actionable troubleshooting. Category: Docker per approved mapping.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `unexpected status from HEAD request to https://mcr.microsoft.com/v2/windows/nanoserver/manifests/ltsc2022: 403 Forbidden` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `unexpected status from HEAD request to https://mcr.microsoft.com/v2/windows/nanoserver/manifests/ltsc2022: 403 Forbidden`.
