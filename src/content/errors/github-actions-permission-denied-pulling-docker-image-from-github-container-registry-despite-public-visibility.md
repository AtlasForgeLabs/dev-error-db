---
title: "GitHub Actions workflow lacks packages:read permission causing Docker pull permission denied on GHCR"
description: "Fix GitHub Actions CI/CD workflow failing to pull public Docker images from GHCR due to missing packages:read permission scope on workflow token Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Permission denied pulling Docker image from GitHub Container Registry despite public visibility"
common_causes:
  - "DEV Community article (high engagement) documents the exact scenario: fork PR workflows fail to pull public GHCR images with permission denied error even when image is explicitly marked public. Root cause is GitHub's security stance on forked PRs — token lacks packages:read permission implicitly. Fix requires explicit permissions:contents: read + packages: read in workflow YAML. HIGH commercial value because this blocks CI/CD pipelines for teams using GHCR, especially in enterprise environments where automated deployments depend on container registries."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T12:44:29.768Z"
updated_at: "2026-06-02T12:44:29.768Z"
---

## What this error means

`Permission denied pulling Docker image from GitHub Container Registry despite public visibility` is a GitHub Actions failure pattern reported for developers trying to fix github actions ci/cd workflow failing to pull public docker images from ghcr due to missing packages:read permission scope on workflow token. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

DEV Community article (high engagement) documents the exact scenario: fork PR workflows fail to pull public GHCR images with permission denied error even when image is explicitly marked public. Root cause is GitHub's security stance on forked PRs — token lacks packages:read permission implicitly. Fix requires explicit permissions:contents: read + packages: read in workflow YAML. HIGH commercial value because this blocks CI/CD pipelines for teams using GHCR, especially in enterprise environments where automated deployments depend on container registries.

## Common causes

- DEV Community article (high engagement) documents the exact scenario: fork PR workflows fail to pull public GHCR images with permission denied error even when image is explicitly marked public. Root cause is GitHub's security stance on forked PRs — token lacks packages:read permission implicitly. Fix requires explicit permissions:contents: read + packages: read in workflow YAML. HIGH commercial value because this blocks CI/CD pipelines for teams using GHCR, especially in enterprise environments where automated deployments depend on container registries.

## Quick fixes

1. Confirm the exact error signature matches `Permission denied pulling Docker image from GitHub Container Registry despite public visibility`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://dev.to/devactivity/boosting-github-productivity-solving-docker-pull-permissions-in-cicd-3cpj
- https://github.com/orgs/community/discussions/196895

Evidence note: DEV Community article (high engagement) documents the exact scenario: fork PR workflows fail to pull public GHCR images with permission denied error even when image is explicitly marked public. Root cause is GitHub's security stance on forked PRs — token lacks packages:read permission implicitly. Fix requires explicit permissions:contents: read + packages: read in workflow YAML. HIGH commercial value because this blocks CI/CD pipelines for teams using GHCR, especially in enterprise environments where automated deployments depend on container registries.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Permission denied pulling Docker image from GitHub Container Registry despite public visibility` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Permission denied pulling Docker image from GitHub Container Registry despite public visibility`.
