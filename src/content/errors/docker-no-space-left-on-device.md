---
title: "Docker no space left on device"
description: "Fix Docker no space left on device errors by cleaning unused images, containers, volumes, and build cache."
category: "Containers"
technology: "Docker"
error_signature: "no space left on device"
common_causes:
  - "Unused images and layers accumulated"
  - "Build cache is too large"
  - "Stopped containers still consume disk"
  - "Docker Desktop disk image reached its limit"
quick_fix: "Inspect docker system df, then prune unused Docker resources that are safe to remove."
updated: "2026-05-10"
---

## What this error means

`no space left on device` means Docker could not reach or use the local container runtime, storage, network port, or mounted file path needed for this command. The fix usually depends on whether Docker is running, which process owns the port, and what permissions the current user or container has. This page helps you free Docker storage when builds, pulls, or containers fail due to disk pressure.

## Common causes

- Unused images and layers accumulated
- Build cache is too large
- Stopped containers still consume disk
- Docker Desktop disk image reached its limit

## Quick fixes

1. Run `docker info` or open Docker Desktop to confirm the daemon is running.
2. Inspect docker system df, then prune unused Docker resources that are safe to remove.
3. Check the failing resource directly: socket permissions, disk usage, port owner, or mounted path.
4. Restart only the affected container or compose stack after changing Docker settings.

## Step-by-step troubleshooting

1. Start with the exact signature: `no space left on device`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Run `docker info` to confirm the client can talk to the daemon.
3. For port errors, identify the process using the port with `lsof -i :PORT` or the platform equivalent.
4. For disk errors, run `docker system df` before pruning images, volumes, or build cache.
5. For permission errors, check socket ownership, container user IDs, and bind-mounted file permissions.
6. Make the targeted change: Inspect docker system df, then prune unused Docker resources that are safe to remove.
7. Rerun the smallest failing command, request, or deployment step and keep the output for comparison.

## Related errors

- Docker cannot connect to the daemon
- failed to register layer
- write /var/lib/docker: no space left on device

## FAQ

### What should I check first?

Start with the exact `no space left on device` message and the Docker daemon, socket, port, disk, or mount involved. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed Docker step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

Local and CI environments often differ in installed tools, environment variables, permissions, and network access. Log the versions and non-secret configuration values used by the failing step.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `no space left on device`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
