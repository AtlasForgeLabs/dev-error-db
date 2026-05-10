---
title: "Docker bind: address already in use"
description: "Fix Docker bind address already in use errors by finding the host process or compose stack occupying the port, then stopping it or remapping the host port."
category: "Docker"
technology: "Docker"
error_signature: "bind: address already in use"
common_causes:
  - "Host port is already used by another local process"
  - "An old Docker Compose stack is still running"
  - "Another container already publishes the same host port"
  - "Compose maps multiple services to the same host port"
quick_fix: "Find the process or container using the host port, stop it if appropriate, or change the host-side port mapping such as 3001:3000."
related_errors:
  - "Docker cannot connect to the daemon"
  - "Docker Compose port is already allocated"
  - "Docker no space left on device"
  - "Docker permission denied"
updated: "2026-05-10"
---

## What this error means

`bind: address already in use` means Docker tried to publish a container port onto a host port that is already occupied. The conflict is on the host machine, so the fix is to find the process or older compose stack using that port, then stop it or map the container to a different host port.

## Why this happens

Port publishing uses the host network namespace. If another process already owns `localhost:3000`, `0.0.0.0:5432`, or any other requested host port, Docker cannot bind that address for the new container.

For Docker bind: address already in use, focus on host port ownership and compose state. Docker daemon health, disk usage, and image contents are usually secondary unless other Docker commands also fail.

## Common causes

- Host port is already used by another local process
- An old Docker Compose stack is still running
- Another container already publishes the same host port
- Compose maps multiple services to the same host port

## Quick fixes

1. Read the error line and identify the host port Docker tried to bind.
2. Run `lsof -i :3000` with the actual port from the error.
3. Stop the old process or compose stack that owns the port.
4. If both services must run, change the left side of the compose port mapping, such as `3001:3000`.

## Copy-paste commands

### List running containers with published ports

```bash
docker ps --format "table {{.Names}}\t{{.Ports}}\t{{.Status}}"
```

### Check compose services in this project

```bash
docker compose ps
```

### Find the process using port 3000

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
```

### Stop the current compose stack

```bash
docker compose down
```

### Check whether Docker itself is reachable

```bash
docker info
```

## Real-world fixes

- A previous `docker compose up` may still be running from another terminal. Run `docker compose ps` in the project before starting a second stack.
- Local dev servers commonly occupy ports like 3000, 5173, 8000, and 8080. Stop the dev server or remap the Docker host port.
- For databases, avoid deleting volumes just to free a port. Stop the container first; the volume may contain local data.

## Step-by-step troubleshooting

1. Find the port mentioned near `bind: address already in use`; it is usually shown as the host-side bind address.
2. Run `docker ps --format "table {{.Names}}\t{{.Ports}}\t{{.Status}}"` to see whether another container already publishes that port.
3. Run `lsof -nP -iTCP:<port> -sTCP:LISTEN` or the platform equivalent to find non-Docker processes.
4. Stop the old container, compose stack, or local process that owns the port.
5. If the port is intentionally in use, change only the host side of the mapping, for example `3001:3000`, then retry `docker compose up`.

## Platform-specific fixes

### macOS

- Use `lsof -nP -iTCP:<port> -sTCP:LISTEN` to find apps, dev servers, or Docker Desktop proxies holding the port.

### Linux

- Use `ss -ltnp | grep :<port>` when `lsof` is unavailable, then stop the owning service with the normal service manager.

### Windows

- Use `netstat -ano | findstr :<port>` in PowerShell or Command Prompt, then match the PID in Task Manager.

## How to prevent it

- Reserve predictable host ports per project and document them in the compose file.
- Run `docker compose down` when switching branches or projects that publish the same ports.
- Use project-specific compose project names when running multiple stacks at once.

## Related errors

- Docker cannot connect to the daemon
- Docker Compose port is already allocated
- Docker no space left on device
- Docker permission denied

## FAQ

### What should I check first?

Check the host port shown beside `bind: address already in use`, then run `docker ps` and `lsof` for that port. The fastest fix is usually stopping the older process or remapping the host port.

### Is this caused by the Dockerfile?

Usually no. A Dockerfile can expose a container port, but this error happens when Docker publishes that port to a host address that is already taken.

### Can I run both services at the same time?

Yes, if they use different host ports. Keep the container port the same and change the host side, such as `3001:3000`.

### How do I know the fix worked?

Rerun the same `docker run` or `docker compose up` command. The fix worked when Docker starts the container without another `bind: address already in use` message and `docker ps` shows the expected port mapping.
