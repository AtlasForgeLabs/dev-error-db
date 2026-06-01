---
title: "Docker Manifest Fetch Fails: Cannot Connect to Host ghcr.io:443 SSL Default Timeout"
description: "Raspberry Pi or Linux Docker user cannot pull images from GitHub Container Registry (ghcr.io); SSL/TLS connection times out at network level affecting Home Assistant, Ollama, and other containerized services Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Failed to fetch manifest: Cannot connect to host ghcr.io:443 ssl:default [None] — docker image pull / supervisor.docker.interface authorization failure"
common_causes:
  - "Multiple related GitHub issues: ollama/ollama #16330 (no models will pull on RPi5, dial tcp timeout pulling manifest), home-assistant/core #172301 (failed to resolve reference, EOF on anonymous token fetch from ghcr.io). Both show 'Cannot connect to host ghcr.io:443 ssl:default [None]' pattern. Production Docker pulls failing = strong commercial impact for IoT/edge deployments."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Docker"
updated: "2026-06-01"
published_at: "2026-06-01T06:44:26.304Z"
updated_at: "2026-06-01T06:44:26.304Z"
---

## What this error means

`Failed to fetch manifest: Cannot connect to host ghcr.io:443 ssl:default [None] — docker image pull / supervisor.docker.interface authorization failure` is a Docker failure pattern reported for developers trying to raspberry pi or linux docker user cannot pull images from github container registry (ghcr.io); ssl/tls connection times out at network level affecting home assistant, ollama, and other containerized services. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple related GitHub issues: ollama/ollama #16330 (no models will pull on RPi5, dial tcp timeout pulling manifest), home-assistant/core #172301 (failed to resolve reference, EOF on anonymous token fetch from ghcr.io). Both show 'Cannot connect to host ghcr.io:443 ssl:default [None]' pattern. Production Docker pulls failing = strong commercial impact for IoT/edge deployments.

## Common causes

- Multiple related GitHub issues: ollama/ollama #16330 (no models will pull on RPi5, dial tcp timeout pulling manifest), home-assistant/core #172301 (failed to resolve reference, EOF on anonymous token fetch from ghcr.io). Both show 'Cannot connect to host ghcr.io:443 ssl:default [None]' pattern. Production Docker pulls failing = strong commercial impact for IoT/edge deployments.

## Quick fixes

1. Confirm the exact error signature matches `Failed to fetch manifest: Cannot connect to host ghcr.io:443 ssl:default [None] — docker image pull / supervisor.docker.interface authorization failure`.
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

- https://github.com/ollama/ollama/issues/16330
- https://github.com/home-assistant/core/issues/172301

Evidence note: Multiple related GitHub issues: ollama/ollama #16330 (no models will pull on RPi5, dial tcp timeout pulling manifest), home-assistant/core #172301 (failed to resolve reference, EOF on anonymous token fetch from ghcr.io). Both show 'Cannot connect to host ghcr.io:443 ssl:default [None]' pattern. Production Docker pulls failing = strong commercial impact for IoT/edge deployments.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Failed to fetch manifest: Cannot connect to host ghcr.io:443 ssl:default [None] — docker image pull / supervisor.docker.interface authorization failure` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Failed to fetch manifest: Cannot connect to host ghcr.io:443 ssl:default [None] — docker image pull / supervisor.docker.interface authorization failure`.
