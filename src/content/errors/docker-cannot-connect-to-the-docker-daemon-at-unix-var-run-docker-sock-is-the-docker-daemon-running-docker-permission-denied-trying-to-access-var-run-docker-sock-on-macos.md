---
title: "Docker Desktop Cannot Connect to the Docker Daemon on macOS Sonoma — permission denied on socket"
description: "macOS developer cannot run Docker commands after system update or Docker Desktop restart; socket file permissions broken after macOS upgrade Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? docker: permission denied trying to access /var/run/docker.sock on macOS"
common_causes:
  - "Classic persistent issue on macOS platforms. Docker Desktop frequently loses socket permissions after macOS updates, requiring manual chown or fix-docker-permissions.sh. Very high search volume evergreen topic. Category mapping: Docker is explicitly listed as approved category. High commercial value: developers paying for Docker Desktop subscription blocked from container operations."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-22"
published_at: "2026-05-22T05:39:46.769Z"
updated_at: "2026-05-22T05:39:46.769Z"
---

## What this error means

`Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? docker: permission denied trying to access /var/run/docker.sock on macOS` is a Docker failure pattern reported for developers trying to macos developer cannot run docker commands after system update or docker desktop restart; socket file permissions broken after macos upgrade. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Classic persistent issue on macOS platforms. Docker Desktop frequently loses socket permissions after macOS updates, requiring manual chown or fix-docker-permissions.sh. Very high search volume evergreen topic. Category mapping: Docker is explicitly listed as approved category. High commercial value: developers paying for Docker Desktop subscription blocked from container operations.

## Common causes

- Classic persistent issue on macOS platforms. Docker Desktop frequently loses socket permissions after macOS updates, requiring manual chown or fix-docker-permissions.sh. Very high search volume evergreen topic. Category mapping: Docker is explicitly listed as approved category. High commercial value: developers paying for Docker Desktop subscription blocked from container operations.

## Quick fixes

1. Confirm the exact error signature matches `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? docker: permission denied trying to access /var/run/docker.sock on macOS`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/docker/roadmap/issues?q=permission+denied+socket

Evidence note: Classic persistent issue on macOS platforms. Docker Desktop frequently loses socket permissions after macOS updates, requiring manual chown or fix-docker-permissions.sh. Very high search volume evergreen topic. Category mapping: Docker is explicitly listed as approved category. High commercial value: developers paying for Docker Desktop subscription blocked from container operations.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? docker: permission denied trying to access /var/run/docker.sock on macOS` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running? docker: permission denied trying to access /var/run/docker.sock on macOS`.
