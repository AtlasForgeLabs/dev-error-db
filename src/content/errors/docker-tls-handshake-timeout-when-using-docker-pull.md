---
title: "Docker pull fails with TLS handshake timeout when pulling images from registry"
description: "Fix docker pull command hanging/failing with TLS handshake timeout — diagnose whether registry is reachable, certificate issues, or network proxy interfering with TLS negotiation Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "TLS handshake timeout when using docker pull"
common_causes:
  - "GitHub issue #6062 in docker/cli (Dalzhim, May 2025, version 28.1). Specifically about TLS handshake timing out during docker pull, distinct from general daemon-not-running errors. Affects enterprise CI/CD pipelines where image downloads are critical path. Docker Enterprise customers pay for private registries — pull failures directly block deployments."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Docker"
updated: "2026-05-21"
published_at: "2026-05-21T07:39:43.782Z"
updated_at: "2026-05-21T07:39:43.782Z"
---

## What this error means

`TLS handshake timeout when using docker pull` is a Docker failure pattern reported for developers trying to fix docker pull command hanging/failing with tls handshake timeout — diagnose whether registry is reachable, certificate issues, or network proxy interfering with tls negotiation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #6062 in docker/cli (Dalzhim, May 2025, version 28.1). Specifically about TLS handshake timing out during docker pull, distinct from general daemon-not-running errors. Affects enterprise CI/CD pipelines where image downloads are critical path. Docker Enterprise customers pay for private registries — pull failures directly block deployments.

## Common causes

- GitHub issue #6062 in docker/cli (Dalzhim, May 2025, version 28.1). Specifically about TLS handshake timing out during docker pull, distinct from general daemon-not-running errors. Affects enterprise CI/CD pipelines where image downloads are critical path. Docker Enterprise customers pay for private registries — pull failures directly block deployments.

## Quick fixes

1. Confirm the exact error signature matches `TLS handshake timeout when using docker pull`.
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

- https://github.com/docker/cli/issues/6062

Evidence note: GitHub issue #6062 in docker/cli (Dalzhim, May 2025, version 28.1). Specifically about TLS handshake timing out during docker pull, distinct from general daemon-not-running errors. Affects enterprise CI/CD pipelines where image downloads are critical path. Docker Enterprise customers pay for private registries — pull failures directly block deployments.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `TLS handshake timeout when using docker pull` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `TLS handshake timeout when using docker pull`.
