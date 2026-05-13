---
title: "Docker Pull Access Denied — Repository Not Found or Requires Authentication"
description: "Fix Docker pull access denied error when pulling images from private or GHCR registries Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "pull access denied for <repository>, repository does not exist or may require 'docker login'"
common_causes:
  - "Developers hit this when pulling images from GHCR, private Docker Hub repos, or misconfigured registries. The error conflates 'doesn't exist' and 'not authenticated', making debugging difficult. Common in CI/CD and compose setups."
  - "Multiple repos hit pull access denied on GHCR images and Docker Compose setups. The error appears during docker-compose up, CI builds, and manual image pulls from private registries."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Docker GHCR authentication in GitHub Actions"
  - "Docker manifest unknown error"
  - "Docker toomanyrequests rate limit error"
updated: "2026-05-13"
published_at: "2026-05-13T20:13:17.679Z"
updated_at: "2026-05-13T20:13:17.679Z"
---

## What this error means

`pull access denied for <repository>, repository does not exist or may require 'docker login'` is a Docker failure pattern reported for developers trying to fix docker pull access denied error when pulling images from private or ghcr registries. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple repos hit pull access denied on GHCR images and Docker Compose setups. The error appears during docker-compose up, CI builds, and manual image pulls from private registries.

## Common causes

- Developers hit this when pulling images from GHCR, private Docker Hub repos, or misconfigured registries. The error conflates 'doesn't exist' and 'not authenticated', making debugging difficult. Common in CI/CD and compose setups.
- Multiple repos hit pull access denied on GHCR images and Docker Compose setups. The error appears during docker-compose up, CI builds, and manual image pulls from private registries.

## Quick fixes

1. Confirm the exact error signature matches `pull access denied for <repository>, repository does not exist or may require 'docker login'`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/mostlygeek/llama-swap/issues/651
- https://github.com/defenseunicorns-labs/compose-bridge-uds/issues/20
- https://github.com/jasmucrai/truelayer2actual/issues/1

Evidence note: Multiple repos hit pull access denied on GHCR images and Docker Compose setups. The error appears during docker-compose up, CI builds, and manual image pulls from private registries.

## Related errors

- Docker GHCR authentication in GitHub Actions
- Docker manifest unknown error
- Docker toomanyrequests rate limit error

## FAQ

### What should I check first?

Start with the exact `pull access denied for <repository>, repository does not exist or may require 'docker login'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `pull access denied for <repository>, repository does not exist or may require 'docker login'`.
