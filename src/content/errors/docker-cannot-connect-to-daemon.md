---
title: "Docker cannot connect to the daemon"
description: "Fix Docker daemon connection errors when Docker Desktop or the Linux Docker service is not available."
category: "Docker"
technology: "Docker"
error_signature: "Cannot connect to the Docker daemon"
common_causes:
  - "Docker Desktop is not running"
  - "Linux Docker service is stopped"
  - "Current user cannot access the Docker socket"
  - "DOCKER_HOST points to an unavailable daemon"
quick_fix: "Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed."
related_errors:
  - "Docker permission denied"
  - "docker: command not found"
  - "permission denied while trying to connect to the Docker daemon socket"
updated: "2026-05-10"
---

## What this error means

`Cannot connect to the Docker daemon` means Docker cannot use the local container runtime, a host resource, or a compose binding needed by this command. For this error, check daemon status, socket permissions, disk pressure, and port ownership before changing application code.

## Why this happens

Docker errors often come from the host environment around the container, not from the application image itself.

For Docker cannot connect to the daemon, the fastest path is to identify whether the failure is daemon access, storage, networking, or file permissions.

## Common causes

- Docker Desktop is not running
- Linux Docker service is stopped
- Current user cannot access the Docker socket
- DOCKER_HOST points to an unavailable daemon

## Quick fixes

1. Run `docker info` to confirm the Docker client can reach the daemon.
2. Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed.
3. Check whether the failing container, volume, port, or socket already exists.
4. Restart Docker Desktop or the Docker service only after collecting the first error message.

## Copy-paste commands

### Check daemon access

```bash
docker info
```

### List running containers

```bash
docker ps
```

### Check Docker disk usage

```bash
docker system df
```

### Find a process using port 3000

```bash
lsof -i :3000
```

## Platform-specific fixes

### macOS

- Open Docker Desktop and wait until the engine status is running before retrying `docker` or `docker compose`.

### Linux

- Check the service with `systemctl status docker` and confirm your user can access `/var/run/docker.sock`.

### Windows

- Confirm Docker Desktop is running with the expected WSL backend and retry from the same shell where the command failed.

## Real-world fixes

- If a compose stack was interrupted, run `docker compose ps` and stop the old stack before reusing ports.
- If disk usage is high, prune only resources you recognize; volumes can contain database state.
- Start Docker, verify docker info works, and clear incorrect DOCKER_HOST settings if needed.

## Step-by-step troubleshooting

1. Search the log for `Cannot connect to the Docker daemon` and note the resource named next to it.
2. Run `docker info`; if it fails, fix daemon access before debugging images or compose files.
3. For port errors, run `lsof -i :3000` with the actual port and stop the owning process or change the host port.
4. For storage errors, run `docker system df` before pruning cache, images, or volumes.
5. Retry the smallest failing Docker command after each change.

## How to prevent it

- Use project-specific host ports in compose files.
- Schedule occasional Docker cache cleanup on development machines.
- Document required container users, mounted paths, and volume ownership for the project.

## Related errors

- Docker permission denied
- docker: command not found
- permission denied while trying to connect to the Docker daemon socket

## FAQ

### What should I check first?

Start with the exact `Cannot connect to the Docker daemon` line and the command, request, or workflow step that produced it. In Docker, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed Docker step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Cannot connect to the Docker daemon`. The fix is working when that step completes without the same signature and produces the expected output.
