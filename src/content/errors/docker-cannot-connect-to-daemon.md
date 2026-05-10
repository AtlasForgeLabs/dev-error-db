---
title: "Docker cannot connect to the daemon"
description: "Fix Docker daemon connection errors when Docker Desktop or the Linux Docker service is not available."
category: "Containers"
technology: "Docker"
error_signature: "Cannot connect to the Docker daemon"
common_causes:
  - "Docker Desktop is not running"
  - "Linux Docker service is stopped"
  - "Current user cannot access the Docker socket"
  - "DOCKER_HOST points to an unavailable daemon"
quick_fix: "Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed."
updated: "2026-05-10"
---

## What this error means

`Cannot connect to the Docker daemon` means Docker could not reach or use the local container runtime, storage, network port, or mounted file path needed for this command. The fix usually depends on whether Docker is running, which process owns the port, and what permissions the current user or container has. This page helps you restore Docker daemon access for local builds, compose commands, and CI jobs.

## Common causes

- Docker Desktop is not running
- Linux Docker service is stopped
- Current user cannot access the Docker socket
- DOCKER_HOST points to an unavailable daemon

## Quick fixes

1. Run `docker info` or open Docker Desktop to confirm the daemon is running.
2. Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed.
3. Check the failing resource directly: socket permissions, disk usage, port owner, or mounted path.
4. Restart only the affected container or compose stack after changing Docker settings.

## Step-by-step troubleshooting

1. Start with the exact signature: `Cannot connect to the Docker daemon`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Run `docker info` to confirm the client can talk to the daemon.
3. For port errors, identify the process using the port with `lsof -i :PORT` or the platform equivalent.
4. For disk errors, run `docker system df` before pruning images, volumes, or build cache.
5. For permission errors, check socket ownership, container user IDs, and bind-mounted file permissions.
6. Make the targeted change: Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed.
7. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Docker permission denied
- docker: command not found
- permission denied while trying to connect to the Docker daemon socket

## FAQ

### What should I check first?

Start with the exact `Cannot connect to the Docker daemon` message and the Docker daemon, socket, port, disk, or mount involved. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Docker step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

Local and CI environments often differ in installed tools, environment variables, permissions, and network access. Log the versions and non-secret configuration values used by the failing step.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Cannot connect to the Docker daemon`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
